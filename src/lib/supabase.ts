import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { BookingEnquiry } from '../types';

export const SUPABASE_PROJECT_ID = 'tdylepklnfoprgvehbvx';

const envUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const envKey =
  (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined) ||
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined);

const hasExplicitEnvUrl = Boolean(
  envUrl && envUrl.trim() && !envUrl.includes('your-project-ref')
);

const isStandardSupabaseRef = /^[a-z]{20}$/.test(SUPABASE_PROJECT_ID);

export const SUPABASE_URL = hasExplicitEnvUrl
  ? envUrl!.trim().replace(/\/+$/, '')
  : `https://${SUPABASE_PROJECT_ID.toLowerCase()}.supabase.co`;

export const SUPABASE_PUBLISHABLE_KEY =
  envKey && envKey.trim() && !envKey.includes('your-supabase')
    ? envKey.trim()
    : 'sb_publishable_FBnp2NspzSx5Gj-_hmqtgg_zav3voja';

export const isSupabaseConfigured =
  (hasExplicitEnvUrl || isStandardSupabaseRef) && Boolean(SUPABASE_PUBLISHABLE_KEY);

export const supabase: SupabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

export const BOOKING_ENQUIRIES_TABLE = 'booking_enquiries';

export interface BookingEnquiryRow {
  id: string;
  full_name: string;
  phone: string;
  whatsapp: string | null;
  email: string | null;
  package_slug: string;
  custom_trip_days: number | null;
  preferred_date: string;
  is_flexible_date: boolean;
  adults_count: number;
  children_count: number;
  children_ages: string | null;
  pickup_point: string;
  room_type: string;
  room_sharing: string;
  food_preference: string;
  dietary_allergies: string | null;
  group_type: string | null;
  id_type: string | null;
  id_number: string | null;
  origin_type: string | null;
  origin_state_or_country: string | null;
  cameraman_addon: boolean;
  custom_requests: string | null;
  calculated_estimated_cost: number;
  status: 'pending' | 'contacted' | 'confirmed' | 'cancelled';
  created_at: string;
}

const REF_META_REGEX = /\n?\[SV_REF:([^|\]]+)\|DISC:(\d+)\]/;

function buildCustomRequestsWithReferral(enquiry: BookingEnquiry): string | null {
  const baseText = (
    enquiry.customRequests ||
    ((enquiry as BookingEnquiry & Record<string, unknown>).specialRequests as string) ||
    ''
  )
    .replace(REF_META_REGEX, '')
    .trim();

  if (enquiry.referralCodeUsed) {
    const code = enquiry.referralCodeUsed.trim().toUpperCase();
    const disc = Math.max(Math.round(Number(enquiry.discountAmount || 0)), 0);
    const marker = `[SV_REF:${code}|DISC:${disc}]`;
    return baseText ? `${baseText}\n${marker}` : marker;
  }
  return baseText || null;
}

function parseReferralFromCustomRequests(raw: string | null): {
  cleanCustomRequests?: string;
  referralCodeUsed?: string;
  discountAmount?: number;
} {
  if (!raw) return {};
  const match = raw.match(REF_META_REGEX);
  if (!match) {
    return { cleanCustomRequests: raw };
  }
  const clean = raw.replace(REF_META_REGEX, '').trim();
  return {
    cleanCustomRequests: clean || undefined,
    referralCodeUsed: match[1].trim().toUpperCase(),
    discountAmount: Number(match[2] || 0),
  };
}

export function mapEnquiryToRow(enquiry: BookingEnquiry): BookingEnquiryRow {
  const anyEnq = enquiry as BookingEnquiry & Record<string, unknown>;
  return {
    id: enquiry.id,
    full_name: enquiry.fullName || (anyEnq.guestName as string) || 'Guest',
    phone: enquiry.phone || (anyEnq.guestPhone as string) || '',
    whatsapp: enquiry.whatsapp || enquiry.phone || (anyEnq.guestPhone as string) || null,
    email: enquiry.email || (anyEnq.guestEmail as string) || null,
    package_slug: enquiry.packageSlug || 'custom-tour',
    custom_trip_days: enquiry.customTripDays ?? null,
    preferred_date: enquiry.preferredDate || (anyEnq.travelDate as string) || 'TBD',
    is_flexible_date: enquiry.isFlexibleDate ?? true,
    adults_count: Number(enquiry.adultsCount ?? anyEnq.adults ?? 1),
    children_count: Number(enquiry.childrenCount ?? anyEnq.children ?? 0),
    children_ages: enquiry.childrenAges || null,
    pickup_point: enquiry.pickupPoint || 'Kolkata',
    room_type: enquiry.roomType || 'ac',
    room_sharing: enquiry.roomSharing || 'double',
    food_preference: enquiry.foodPreference || 'bengali-nonveg',
    dietary_allergies: enquiry.dietaryAllergies || null,
    group_type: enquiry.groupType || null,
    id_type: enquiry.idType || null,
    id_number: enquiry.idNumber || null,
    origin_type: enquiry.originType || null,
    origin_state_or_country: enquiry.originStateOrCountry || null,
    cameraman_addon: Boolean(enquiry.cameramanAddon),
    custom_requests: buildCustomRequestsWithReferral(enquiry),
    calculated_estimated_cost: Number(enquiry.calculatedEstimatedCost ?? 0),
    status: enquiry.status || 'pending',
    created_at: enquiry.createdAt || new Date().toISOString(),
  };
}

export function mapRowToEnquiry(row: BookingEnquiryRow): BookingEnquiry {
  const parsedRef = parseReferralFromCustomRequests(row.custom_requests);
  const anyRow = row as BookingEnquiryRow & { referral_code_used?: string | null; discount_amount?: number | null };
  return {
    id: row.id,
    fullName: row.full_name,
    phone: row.phone,
    whatsapp: row.whatsapp || row.phone,
    email: row.email || '',
    packageSlug: row.package_slug,
    customTripDays: row.custom_trip_days ?? undefined,
    preferredDate: row.preferred_date,
    isFlexibleDate: row.is_flexible_date,
    adultsCount: row.adults_count,
    childrenCount: row.children_count,
    childrenAges: row.children_ages || undefined,
    pickupPoint: row.pickup_point,
    roomType: row.room_type as BookingEnquiry['roomType'],
    roomSharing: row.room_sharing as BookingEnquiry['roomSharing'],
    foodPreference: row.food_preference as BookingEnquiry['foodPreference'],
    dietaryAllergies: row.dietary_allergies || undefined,
    groupType: row.group_type || undefined,
    idType: row.id_type || undefined,
    idNumber: row.id_number || undefined,
    originType: row.origin_type || undefined,
    originStateOrCountry: row.origin_state_or_country || undefined,
    cameramanAddon: row.cameraman_addon,
    customRequests: parsedRef.cleanCustomRequests,
    calculatedEstimatedCost: Number(row.calculated_estimated_cost || 0),
    referralCodeUsed: anyRow.referral_code_used || parsedRef.referralCodeUsed,
    discountAmount: anyRow.discount_amount ?? parsedRef.discountAmount,
    status: row.status,
    createdAt: row.created_at,
  };
}

export async function insertBookingEnquiry(
  enquiry: BookingEnquiry
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return {
      success: false,
      error: 'VITE_SUPABASE_URL is not configured with a valid Supabase project URL.',
    };
  }

  try {
    const row = mapEnquiryToRow(enquiry);
    const { error } = await supabase
      .from(BOOKING_ENQUIRIES_TABLE)
      .insert([row]);

    if (error) {
      console.warn('Supabase booking insert failed:', error.message);
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn('Supabase booking insert exception:', message);
    return { success: false, error: message };
  }
}

export async function fetchBookingEnquiries(): Promise<{
  data: BookingEnquiry[];
  error?: string;
}> {
  if (!isSupabaseConfigured) {
    return { data: [] };
  }

  try {
    const { data, error } = await supabase
      .from(BOOKING_ENQUIRIES_TABLE)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase booking fetch failed:', error.message);
      return { data: [], error: error.message };
    }

    const mapped = (data as BookingEnquiryRow[] | null)?.map(mapRowToEnquiry) ?? [];
    return { data: mapped };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn('Supabase booking fetch exception:', message);
    return { data: [], error: message };
  }
}

export async function updateBookingEnquiryStatus(
  id: string,
  status: BookingEnquiry['status']
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Supabase URL not configured.' };
  }

  try {
    const { error } = await supabase
      .from(BOOKING_ENQUIRIES_TABLE)
      .update({ status })
      .eq('id', id);

    if (error) {
      console.warn('Supabase booking status update failed:', error.message);
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}

export async function deleteBookingEnquiry(
  id: string
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Supabase URL not configured.' };
  }

  try {
    const { error } = await supabase
      .from(BOOKING_ENQUIRIES_TABLE)
      .delete()
      .eq('id', id);

    if (error) {
      console.warn('Supabase booking delete failed:', error.message);
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}

// =========================================================================
// Single-Slot Admin Account Helpers
// =========================================================================
export const ADMIN_ACCOUNT_TABLE = 'admin_account';

export interface AdminAccountRecord {
  fullName: string;
  email: string;
  phone?: string;
  username: string;
  passwordHash: string;
  createdAt: string;
}

interface AdminAccountRow {
  id: number;
  full_name: string;
  email: string;
  phone: string | null;
  username: string;
  password_hash: string;
  created_at: string;
}

export async function fetchSingleAdminAccount(): Promise<{
  account: AdminAccountRecord | null;
  error?: string;
}> {
  if (!isSupabaseConfigured) {
    return { account: null };
  }

  try {
    const { data, error } = await supabase
      .from(ADMIN_ACCOUNT_TABLE)
      .select('*')
      .eq('id', 1)
      .maybeSingle();

    if (error) {
      console.warn('Supabase admin fetch failed:', error.message);
      return { account: null, error: error.message };
    }

    if (!data) return { account: null };
    const row = data as AdminAccountRow;
    return {
      account: {
        fullName: row.full_name,
        email: row.email,
        phone: row.phone || undefined,
        username: row.username,
        passwordHash: row.password_hash,
        createdAt: row.created_at,
      },
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { account: null, error: message };
  }
}

export async function createSingleAdminAccountInSupabase(
  account: AdminAccountRecord
): Promise<{ success: boolean; error?: string; alreadyExists?: boolean }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Supabase URL not configured.' };
  }

  try {
    const { error } = await supabase.from(ADMIN_ACCOUNT_TABLE).insert([
      {
        id: 1,
        full_name: account.fullName,
        email: account.email,
        phone: account.phone || null,
        username: account.username,
        password_hash: account.passwordHash,
        created_at: account.createdAt,
      },
    ]);

    if (error) {
      const lower = error.message.toLowerCase();
      const alreadyExists =
        lower.includes('duplicate') ||
        lower.includes('unique') ||
        lower.includes('row-level security') ||
        lower.includes('policy');
      return { success: false, error: error.message, alreadyExists };
    }
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}

export async function updateSingleAdminAccountInSupabase(
  updates: Partial<Pick<AdminAccountRecord, 'username' | 'passwordHash' | 'fullName' | 'email' | 'phone'>>,
  fullRecord?: AdminAccountRecord
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Supabase URL not configured.' };
  }

  try {
    const payload: Record<string, string | null> = {};
    if (updates.username !== undefined) payload.username = updates.username;
    if (updates.passwordHash !== undefined) payload.password_hash = updates.passwordHash;
    if (updates.fullName !== undefined) payload.full_name = updates.fullName;
    if (updates.email !== undefined) payload.email = updates.email;
    if (updates.phone !== undefined) payload.phone = updates.phone || null;

    const { data, error } = await supabase
      .from(ADMIN_ACCOUNT_TABLE)
      .update(payload)
      .eq('id', 1)
      .select('id');

    if (error) {
      return { success: false, error: error.message };
    }

    // If row id=1 did not exist remotely yet, insert the full record now
    if ((!data || data.length === 0) && fullRecord) {
      const insertRes = await createSingleAdminAccountInSupabase(fullRecord);
      if (!insertRes.success) {
        return { success: false, error: insertRes.error };
      }
    }

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}

