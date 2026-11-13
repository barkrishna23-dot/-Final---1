-- Run this SQL in your Supabase Dashboard -> SQL Editor
-- Table for storing all Sundarban Vromon booking & enquiry form submissions

CREATE TABLE IF NOT EXISTS public.booking_enquiries (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp TEXT,
  email TEXT,
  package_slug TEXT NOT NULL,
  custom_trip_days INTEGER,
  preferred_date TEXT,
  is_flexible_date BOOLEAN DEFAULT TRUE,
  adults_count INTEGER NOT NULL DEFAULT 1,
  children_count INTEGER NOT NULL DEFAULT 0,
  children_ages TEXT,
  pickup_point TEXT,
  room_type TEXT DEFAULT 'ac',
  room_sharing TEXT DEFAULT 'double',
  food_preference TEXT DEFAULT 'bengali-nonveg',
  dietary_allergies TEXT,
  group_type TEXT,
  id_type TEXT,
  id_number TEXT,
  origin_type TEXT,
  origin_state_or_country TEXT,
  cameraman_addon BOOLEAN DEFAULT FALSE,
  custom_requests TEXT,
  calculated_estimated_cost NUMERIC DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Optional referral tracking columns (safe to run on existing table)
ALTER TABLE public.booking_enquiries
  ADD COLUMN IF NOT EXISTS referral_code_used TEXT,
  ADD COLUMN IF NOT EXISTS discount_amount NUMERIC DEFAULT 0;

-- Index for faster sorting by newest bookings
CREATE INDEX IF NOT EXISTS idx_booking_enquiries_created_at
  ON public.booking_enquiries (created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.booking_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow public visitors to submit booking enquiries
DROP POLICY IF EXISTS "Allow public booking insert" ON public.booking_enquiries;
CREATE POLICY "Allow public booking insert"
  ON public.booking_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow reading enquiries (used by Admin Panel)
DROP POLICY IF EXISTS "Allow booking select" ON public.booking_enquiries;
CREATE POLICY "Allow booking select"
  ON public.booking_enquiries
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Allow updating booking status (used by Admin Panel)
DROP POLICY IF EXISTS "Allow booking update" ON public.booking_enquiries;
CREATE POLICY "Allow booking update"
  ON public.booking_enquiries
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Allow deleting booking enquiries (used by Admin Panel)
DROP POLICY IF EXISTS "Allow booking delete" ON public.booking_enquiries;
CREATE POLICY "Allow booking delete"
  ON public.booking_enquiries
  FOR DELETE
  TO anon, authenticated
  USING (true);

-- =========================================================================
-- Single-Slot Admin Account Table (Strictly allows ONLY 1 admin account)
-- =========================================================================
CREATE TABLE IF NOT EXISTS public.admin_account (
  id INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.admin_account ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow admin account read" ON public.admin_account;
CREATE POLICY "Allow admin account read"
  ON public.admin_account
  FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow single admin signup once" ON public.admin_account;
CREATE POLICY "Allow single admin signup once"
  ON public.admin_account
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (id = 1 AND NOT EXISTS (SELECT 1 FROM public.admin_account));

DROP POLICY IF EXISTS "Allow single admin update" ON public.admin_account;
CREATE POLICY "Allow single admin update"
  ON public.admin_account
  FOR UPDATE
  TO anon, authenticated
  USING (id = 1)
  WITH CHECK (id = 1);

