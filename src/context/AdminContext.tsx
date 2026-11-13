import React, { createContext, useContext, useState, useEffect } from 'react';
import { BookingEnquiry, Review, TourPackage } from '../types';
import { TOUR_PACKAGES } from '../data/packages';
import { INITIAL_EXTENDED_REVIEWS } from '../data/extendedReviews';
import {
  insertBookingEnquiry,
  fetchBookingEnquiries,
  updateBookingEnquiryStatus,
  deleteBookingEnquiry as deleteBookingEnquiryFromSupabase,
  fetchSingleAdminAccount,
  createSingleAdminAccountInSupabase,
  updateSingleAdminAccountInSupabase,
  AdminAccountRecord,
  isSupabaseConfigured,
} from '../lib/supabase';

const ADMIN_ACCOUNT_STORAGE_KEY = 'sv_admin_account_v1';

async function hashAdminPassword(password: string): Promise<string> {
  try {
    if (typeof crypto !== 'undefined' && crypto.subtle) {
      const encoded = new TextEncoder().encode(`sv-salt-2026:${password}`);
      const digest = await crypto.subtle.digest('SHA-256', encoded);
      return Array.from(new Uint8Array(digest))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    }
  } catch (e) {
    console.warn('WebCrypto fallback:', e);
  }
  // Fallback deterministic hash for non-secure contexts
  let hash = 2166136261;
  const input = `sv-salt-2026:${password}`;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return `fnv_${(hash >>> 0).toString(16)}`;
}

const REDEEMED_REF_CODES_STORAGE_KEY = 'sv_redeemed_ref_codes_v1';

export interface ReferenceCodeValidationResult {
  valid: boolean;
  reason?: 'empty' | 'not_found' | 'cancelled' | 'expired' | 'already_used';
  code?: string;
  expiryDate?: string;
  usedInId?: string;
}

interface AdminContextType {
  enquiries: BookingEnquiry[];
  reviews: Review[];
  packages: TourPackage[];
  isAdminLoggedIn: boolean;
  isAdminAuthenticated: boolean;
  adminAccount: AdminAccountRecord | null;
  hasAdminAccount: boolean;
  currentUsername: string;
  isLoadingEnquiries: boolean;
  refreshEnquiries: () => Promise<void>;
  validateReferenceCode: (rawCode: string) => Promise<ReferenceCodeValidationResult>;
  getReferenceCodeStatus: (enquiry: BookingEnquiry) => {
    status: 'active' | 'used' | 'expired' | 'cancelled';
    expiryDate: string;
    usedInId?: string;
  };
  registerSingleAdminAccount: (details: {
    fullName: string;
    email: string;
    phone?: string;
    username: string;
    password: string;
  }) => Promise<{ success: boolean; error?: string }>;
  loginAdmin: (pass: string, username?: string) => Promise<boolean>;
  adminLogin: (username: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logoutAdmin: () => void;
  adminLogout: () => void;
  updateAdminCredentials: (newUsername: string, newPassword: string) => Promise<boolean>;
  resetAdminPassword: (verificationInput: string, newPassword: string) => Promise<{ success: boolean; message: string }>;
  addEnquiry: (enquiry: Omit<BookingEnquiry, 'id' | 'createdAt' | 'status'>) => Promise<string>;
  updateEnquiryStatus: (id: string, status: BookingEnquiry['status']) => void;
  deleteEnquiry: (id: string) => void;
  addReview: (review: Omit<Review, 'id' | 'createdAt' | 'isApproved' | 'isVerifiedGuest'>) => Promise<void>;
  approveReview: (id: string, isApproved?: boolean) => void;
  deleteReview: (id: string) => void;
  exportEnquiriesCSV: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adminAccount, setAdminAccount] = useState<AdminAccountRecord | null>(() => {
    try {
      const stored = localStorage.getItem(ADMIN_ACCOUNT_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as AdminAccountRecord;
        if (parsed && parsed.username && parsed.passwordHash) {
          return parsed;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return null;
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      const hasAccount = Boolean(localStorage.getItem(ADMIN_ACCOUNT_STORAGE_KEY));
      return hasAccount && localStorage.getItem('sv_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [isLoadingEnquiries, setIsLoadingEnquiries] = useState<boolean>(false);

  const [enquiries, setEnquiries] = useState<BookingEnquiry[]>(() => {
    try {
      const stored = localStorage.getItem('sv_enquiries');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    // Seed initial demo enquiries for realism
    return [
      {
        id: 'ENQ-2026-001',
        fullName: 'Sourav Ganguly & Family',
        phone: '9830012345',
        whatsapp: '9830012345',
        email: 'sourav.travel@gmail.com',
        packageSlug: '2-nights-3-days-deluxe',
        preferredDate: '2026-10-14',
        isFlexibleDate: true,
        adultsCount: 4,
        childrenCount: 1,
        childrenAges: '6',
        pickupPoint: 'Kolkata (Science City)',
        roomType: 'ac',
        roomSharing: 'double',
        foodPreference: 'bengali-nonveg',
        dietaryAllergies: 'Prawn allergy for 1 guest, prefers Bhetki',
        cameramanAddon: true,
        customRequests: 'Need corner cottages facing river and prompt boat departure',
        status: 'confirmed',
        createdAt: '2026-08-25T10:30:00.000Z',
      },
      {
        id: 'ENQ-2026-002',
        fullName: 'Dr. Ananya Mukherjee',
        phone: '9002498765',
        whatsapp: '9002498765',
        email: 'ananya.mukh@yahoo.com',
        packageSlug: '3-nights-4-days-extended',
        preferredDate: '2026-11-20',
        isFlexibleDate: false,
        adultsCount: 2,
        childrenCount: 0,
        pickupPoint: 'Canning Railway Station',
        roomType: 'ac',
        roomSharing: 'double',
        foodPreference: 'bengali-nonveg',
        cameramanAddon: false,
        customRequests: 'Focus on bird photography and Burirdabri mud walk',
        status: 'contacted',
        createdAt: '2026-08-28T14:15:00.000Z',
      },
    ];
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const CURRENT_REVIEWS_VERSION = 'v3_80bn_10en_10hi_320_reviews';
      const storedVersion = localStorage.getItem('sv_reviews_version');
      const stored = localStorage.getItem('sv_reviews');
      if (stored && storedVersion === CURRENT_REVIEWS_VERSION) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length >= 300) {
          return parsed;
        }
      }
      localStorage.setItem('sv_reviews_version', CURRENT_REVIEWS_VERSION);
      localStorage.setItem('sv_reviews', JSON.stringify(INITIAL_EXTENDED_REVIEWS));
    } catch (e) {
      console.error(e);
    }
    return INITIAL_EXTENDED_REVIEWS;
  });

  useEffect(() => {
    localStorage.setItem('sv_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  const refreshEnquiries = async () => {
    setIsLoadingEnquiries(true);
    try {
      const { data, error } = await fetchBookingEnquiries();
      if (!error && data.length > 0) {
        setEnquiries(prev => {
          const remoteIds = new Set(data.map(item => item.id));
          const localOnly = prev.filter(item => !remoteIds.has(item.id));
          return [...data, ...localOnly];
        });
      }
    } finally {
      setIsLoadingEnquiries(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const syncRemote = async () => {
      const { data, error } = await fetchBookingEnquiries();
      if (isMounted && !error && data.length > 0) {
        setEnquiries(prev => {
          const remoteIds = new Set(data.map(item => item.id));
          const localOnly = prev.filter(item => !remoteIds.has(item.id));
          return [...data, ...localOnly];
        });
      }

      if (isSupabaseConfigured) {
        const { account } = await fetchSingleAdminAccount();
        if (isMounted && account) {
          setAdminAccount(account);
          localStorage.setItem(ADMIN_ACCOUNT_STORAGE_KEY, JSON.stringify(account));
        }
      }
    };
    void syncRemote();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('sv_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const registerSingleAdminAccount = async (details: {
    fullName: string;
    email: string;
    phone?: string;
    username: string;
    password: string;
  }): Promise<{ success: boolean; error?: string }> => {
    // Enforce single-slot rule locally first
    if (adminAccount || localStorage.getItem(ADMIN_ACCOUNT_STORAGE_KEY)) {
      return {
        success: false,
        error: 'slot_locked',
      };
    }

    // Enforce single-slot rule against Supabase if configured
    if (isSupabaseConfigured) {
      const existingRemote = await fetchSingleAdminAccount();
      if (existingRemote.account) {
        setAdminAccount(existingRemote.account);
        localStorage.setItem(ADMIN_ACCOUNT_STORAGE_KEY, JSON.stringify(existingRemote.account));
        return {
          success: false,
          error: 'slot_locked',
        };
      }
    }

    const cleanFullName = details.fullName.trim();
    const cleanEmail = details.email.trim().toLowerCase();
    const cleanPhone = details.phone?.trim() || undefined;
    const cleanUsername = details.username.trim();
    const passwordHash = await hashAdminPassword(details.password);

    const newRecord: AdminAccountRecord = {
      fullName: cleanFullName,
      email: cleanEmail,
      phone: cleanPhone,
      username: cleanUsername,
      passwordHash,
      createdAt: new Date().toISOString(),
    };

    if (isSupabaseConfigured) {
      const remoteRes = await createSingleAdminAccountInSupabase(newRecord);
      if (remoteRes.alreadyExists) {
        const { account } = await fetchSingleAdminAccount();
        if (account) {
          setAdminAccount(account);
          localStorage.setItem(ADMIN_ACCOUNT_STORAGE_KEY, JSON.stringify(account));
        }
        return { success: false, error: 'slot_locked' };
      }
    }

    setAdminAccount(newRecord);
    localStorage.setItem(ADMIN_ACCOUNT_STORAGE_KEY, JSON.stringify(newRecord));
    setIsAdminLoggedIn(true);
    localStorage.setItem('sv_admin_auth', 'true');
    return { success: true };
  };

  const updateAdminCredentials = async (newUsername: string, newPassword: string): Promise<boolean> => {
    if (!adminAccount || !newUsername.trim() || !newPassword.trim()) return false;
    const newHash = await hashAdminPassword(newPassword);
    const updated: AdminAccountRecord = {
      ...adminAccount,
      username: newUsername.trim(),
      passwordHash: newHash,
    };
    setAdminAccount(updated);
    localStorage.setItem(ADMIN_ACCOUNT_STORAGE_KEY, JSON.stringify(updated));
    if (isSupabaseConfigured) {
      await updateSingleAdminAccountInSupabase({
        username: updated.username,
        passwordHash: updated.passwordHash,
      });
    }
    return true;
  };

  const resetAdminPassword = async (
    verificationInput: string,
    newPassword: string
  ): Promise<{ success: boolean; message: string }> => {
    if (!adminAccount) {
      return {
        success: false,
        message: 'No admin account has been created yet. Please use the single sign-up slot.',
      };
    }

    const cleanVerify = verificationInput.trim().toLowerCase();
    const cleanDigits = cleanVerify.replace(/\D/g, '');
    const cleanPass = newPassword.trim();

    if (cleanPass.length < 6) {
      return {
        success: false,
        message: 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে (Minimum 6 characters).',
      };
    }

    const matchesEmail = cleanVerify === adminAccount.email.toLowerCase();
    const matchesUsername = cleanVerify === adminAccount.username.toLowerCase();
    const matchesPhone =
      Boolean(adminAccount.phone) &&
      cleanDigits.length >= 6 &&
      adminAccount.phone!.replace(/\D/g, '').includes(cleanDigits);

    if (!matchesEmail && !matchesUsername && !matchesPhone) {
      return {
        success: false,
        message: 'ভেরিফিকেশন মেলেনি! আপনার তৈরি করা অ্যাডমিন ইমেল, ইউজারনেম অথবা মোবাইল নম্বর দিন।',
      };
    }

    const newHash = await hashAdminPassword(cleanPass);
    const updated: AdminAccountRecord = {
      ...adminAccount,
      passwordHash: newHash,
    };
    setAdminAccount(updated);
    localStorage.setItem(ADMIN_ACCOUNT_STORAGE_KEY, JSON.stringify(updated));
    if (isSupabaseConfigured) {
      await updateSingleAdminAccountInSupabase({ passwordHash: newHash });
    }
    return {
      success: true,
      message: 'পাসওয়ার্ড সফলভাবে রিসেট হয়েছে! এখন নতুন পাসওয়ার্ড দিয়ে লগইন করুন।',
    };
  };

  const adminLogin = async (
    inputUserOrEmail: string,
    inputPass: string
  ): Promise<{ success: boolean; error?: string }> => {
    let activeAccount = adminAccount;
    if (!activeAccount && isSupabaseConfigured) {
      const remote = await fetchSingleAdminAccount();
      if (remote.account) {
        activeAccount = remote.account;
        setAdminAccount(remote.account);
        localStorage.setItem(ADMIN_ACCOUNT_STORAGE_KEY, JSON.stringify(remote.account));
      }
    }

    if (!activeAccount) {
      return { success: false, error: 'no_account' };
    }

    const cleanInput = inputUserOrEmail.trim().toLowerCase();
    const isUserValid =
      cleanInput === activeAccount.username.trim().toLowerCase() ||
      cleanInput === activeAccount.email.trim().toLowerCase();

    if (!isUserValid) {
      return { success: false, error: 'invalid_user' };
    }

    const inputHash = await hashAdminPassword(inputPass);
    if (inputHash !== activeAccount.passwordHash) {
      return { success: false, error: 'invalid_password' };
    }

    setIsAdminLoggedIn(true);
    localStorage.setItem('sv_admin_auth', 'true');
    return { success: true };
  };

  const loginAdmin = async (password: string, username?: string): Promise<boolean> => {
    const res = await adminLogin(username || adminAccount?.username || '', password);
    return res.success;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('sv_admin_auth');
  };

  const adminLogout = logoutAdmin;

  const readRedeemedRefMap = (): Record<string, string> => {
    try {
      const raw = localStorage.getItem(REDEEMED_REF_CODES_STORAGE_KEY);
      if (raw) return JSON.parse(raw) as Record<string, string>;
    } catch {
      // ignore storage errors
    }
    return {};
  };

  const markRefCodeRedeemedLocally = (code: string, usedInBookingId: string) => {
    try {
      const map = readRedeemedRefMap();
      map[code.trim().toUpperCase()] = usedInBookingId;
      localStorage.setItem(REDEEMED_REF_CODES_STORAGE_KEY, JSON.stringify(map));
    } catch {
      // ignore storage errors
    }
  };

  const evaluateReferenceCodeAgainstList = (
    rawCode: string,
    list: BookingEnquiry[]
  ): ReferenceCodeValidationResult => {
    const code = rawCode.trim().toUpperCase();
    if (!code) {
      return { valid: false, reason: 'empty' };
    }

    const target = list.find(e => e.id.trim().toUpperCase() === code);
    if (!target) {
      return { valid: false, reason: 'not_found', code };
    }

    if (target.status === 'cancelled') {
      return { valid: false, reason: 'cancelled', code };
    }

    // Check 1-month validity from original booking date
    const createdAtDate = new Date(target.createdAt);
    const expiryDate = new Date(createdAtDate.getTime());
    expiryDate.setMonth(expiryDate.getMonth() + 1);

    if (Number.isNaN(expiryDate.getTime()) || Date.now() > expiryDate.getTime()) {
      return {
        valid: false,
        reason: 'expired',
        code,
        expiryDate: Number.isNaN(expiryDate.getTime()) ? undefined : expiryDate.toISOString(),
      };
    }

    // Check 1-bill single-use constraint across enquiries + local redeemed map
    const usedByEnquiry = list.find(
      e =>
        e.status !== 'cancelled' &&
        e.referralCodeUsed &&
        e.referralCodeUsed.trim().toUpperCase() === code
    );
    const redeemedMap = readRedeemedRefMap();
    const localUsedInId = redeemedMap[code];
    const usedInId = usedByEnquiry?.id || localUsedInId;

    if (usedInId) {
      return {
        valid: false,
        reason: 'already_used',
        code,
        expiryDate: expiryDate.toISOString(),
        usedInId,
      };
    }

    return {
      valid: true,
      code,
      expiryDate: expiryDate.toISOString(),
    };
  };

  const validateReferenceCode = async (rawCode: string): Promise<ReferenceCodeValidationResult> => {
    const code = rawCode.trim().toUpperCase();
    if (!code) return { valid: false, reason: 'empty' };

    let mergedList = enquiries;
    if (isSupabaseConfigured) {
      const { data, error } = await fetchBookingEnquiries();
      if (!error && data.length > 0) {
        const remoteIds = new Set(data.map(item => item.id));
        const localOnly = enquiries.filter(item => !remoteIds.has(item.id));
        mergedList = [...data, ...localOnly];
        setEnquiries(mergedList);
      }
    }

    return evaluateReferenceCodeAgainstList(code, mergedList);
  };

  const getReferenceCodeStatus = (
    enquiry: BookingEnquiry
  ): {
    status: 'active' | 'used' | 'expired' | 'cancelled';
    expiryDate: string;
    usedInId?: string;
  } => {
    const createdAtDate = new Date(enquiry.createdAt);
    const expiryDate = new Date(createdAtDate.getTime());
    expiryDate.setMonth(expiryDate.getMonth() + 1);
    const expiryIso = Number.isNaN(expiryDate.getTime()) ? enquiry.createdAt : expiryDate.toISOString();

    if (enquiry.status === 'cancelled') {
      return { status: 'cancelled', expiryDate: expiryIso };
    }

    const code = enquiry.id.trim().toUpperCase();
    const usedByEnquiry = enquiries.find(
      e =>
        e.status !== 'cancelled' &&
        e.referralCodeUsed &&
        e.referralCodeUsed.trim().toUpperCase() === code
    );
    const redeemedMap = readRedeemedRefMap();
    const usedInId = usedByEnquiry?.id || redeemedMap[code];

    if (usedInId) {
      return { status: 'used', expiryDate: expiryIso, usedInId };
    }

    if (Number.isNaN(expiryDate.getTime()) || Date.now() > expiryDate.getTime()) {
      return { status: 'expired', expiryDate: expiryIso };
    }

    return { status: 'active', expiryDate: expiryIso };
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries(prev => prev.filter(e => e.id !== id));
    void deleteBookingEnquiryFromSupabase(id);
  };

  const addEnquiry = async (enquiryData: Omit<BookingEnquiry, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const anyData = enquiryData as Omit<BookingEnquiry, 'id' | 'createdAt' | 'status'> & Record<string, unknown>;

    // Re-verify single-use referral code if supplied
    let verifiedReferralCode: string | undefined;
    let verifiedDiscountAmount: number | undefined;
    if (enquiryData.referralCodeUsed && enquiryData.referralCodeUsed.trim()) {
      const check = await validateReferenceCode(enquiryData.referralCodeUsed);
      if (!check.valid || !check.code) {
        throw new Error(`REFERRAL_INVALID:${check.reason || 'not_found'}`);
      }
      verifiedReferralCode = check.code;
      verifiedDiscountAmount = Math.max(Math.round(Number(enquiryData.discountAmount || 0)), 0);
    }

    const uniqueSuffix = `${String(enquiries.length + 1).padStart(3, '0')}-${Date.now().toString(36).toUpperCase().slice(-4)}`;
    const newId = `ENQ-${new Date().getFullYear()}-${uniqueSuffix}`;
    const newEnquiry: BookingEnquiry = {
      ...enquiryData,
      fullName: enquiryData.fullName || (anyData.guestName as string) || 'Guest',
      phone: enquiryData.phone || (anyData.guestPhone as string) || '',
      whatsapp: enquiryData.whatsapp || enquiryData.phone || (anyData.guestPhone as string) || '',
      email: enquiryData.email || (anyData.guestEmail as string) || '',
      preferredDate: enquiryData.preferredDate || (anyData.travelDate as string) || 'TBD',
      isFlexibleDate: enquiryData.isFlexibleDate ?? true,
      adultsCount: Number(enquiryData.adultsCount ?? anyData.adults ?? 1),
      childrenCount: Number(enquiryData.childrenCount ?? anyData.children ?? 0),
      roomSharing: enquiryData.roomSharing || 'double',
      foodPreference: enquiryData.foodPreference || 'bengali-nonveg',
      cameramanAddon: Boolean(enquiryData.cameramanAddon),
      customRequests: enquiryData.customRequests || (anyData.specialRequests as string) || '',
      referralCodeUsed: verifiedReferralCode,
      discountAmount: verifiedDiscountAmount,
      id: newId,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    if (verifiedReferralCode) {
      markRefCodeRedeemedLocally(verifiedReferralCode, newId);
    }

    setEnquiries(prev => [newEnquiry, ...prev]);

    const { success, error } = await insertBookingEnquiry(newEnquiry);
    if (!success) {
      console.warn('Enquiry saved locally; Supabase insert failed:', error);
    }

    return newId;
  };

  const updateEnquiryStatus = (id: string, status: BookingEnquiry['status']) => {
    setEnquiries(prev => prev.map(enq => (enq.id === id ? { ...enq, status } : enq)));
    void updateBookingEnquiryStatus(id, status);
  };

  const addReview = async (reviewData: Omit<Review, 'id' | 'createdAt' | 'isApproved' | 'isVerifiedGuest'>) => {
    const newReview: Review = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      isApproved: false, // Requires admin moderation
      isVerifiedGuest: false,
      createdAt: new Date().toISOString(),
    };
    setReviews(prev => [newReview, ...prev]);
  };

  const approveReview = (id: string, isApproved: boolean = true) => {
    setReviews(prev =>
      prev.map(r => (r.id === id ? { ...r, isApproved, isVerifiedGuest: isApproved } : r))
    );
  };

  const deleteReview = (id: string) => {
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  const exportEnquiriesCSV = () => {
    const headers = [
      'Enquiry ID',
      'Created At',
      'Full Name',
      'Phone',
      'WhatsApp',
      'Email',
      'Package',
      'Travel Date',
      'Adults',
      'Children',
      'Pickup Point',
      'Room Type',
      'Food Pref',
      'Cameraman',
      'Status',
      'Custom Notes',
    ];

    const rows = enquiries.map(e => [
      `"${e.id}"`,
      `"${new Date(e.createdAt).toLocaleDateString()}"`,
      `"${e.fullName}"`,
      `"${e.phone}"`,
      `"${e.whatsapp}"`,
      `"${e.email || ''}"`,
      `"${e.packageSlug}"`,
      `"${e.preferredDate}"`,
      `"${e.adultsCount}"`,
      `"${e.childrenCount}"`,
      `"${e.pickupPoint}"`,
      `"${e.roomType}"`,
      `"${e.foodPreference}"`,
      `"${e.cameramanAddon ? 'Yes' : 'No'}"`,
      `"${e.status}"`,
      `"${(e.customRequests || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Sundarban_Vromon_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AdminContext.Provider
      value={{
        enquiries,
        reviews,
        packages: TOUR_PACKAGES,
        isAdminLoggedIn,
        isAdminAuthenticated: isAdminLoggedIn,
        adminAccount,
        hasAdminAccount: Boolean(adminAccount),
        currentUsername: adminAccount?.username || '',
        isLoadingEnquiries,
        refreshEnquiries,
        validateReferenceCode,
        getReferenceCodeStatus,
        registerSingleAdminAccount,
        loginAdmin,
        adminLogin,
        logoutAdmin,
        adminLogout,
        updateAdminCredentials,
        resetAdminPassword,
        addEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        addReview,
        approveReview,
        deleteReview,
        exportEnquiriesCSV,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
