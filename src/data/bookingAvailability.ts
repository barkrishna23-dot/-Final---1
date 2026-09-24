export interface AvailableSafariDate {
  date: string; // YYYY-MM-DD
  dayOfWeekBn: string;
  dayOfWeekEn: string;
  formattedBn: string;
  formattedEn: string;
  seatsLeft: number;
  highlightBn?: string;
  highlightEn?: string;
  isPeakSeason?: boolean;
}

// User specified: Currently no earlier dates are available.
// Only the official December 2026 safari season dates are available.
export const DEFAULT_AVAILABLE_DECEMBER_DATES: AvailableSafariDate[] = [
  {
    date: '2026-12-01',
    dayOfWeekBn: 'মঙ্গলবার',
    dayOfWeekEn: 'Tuesday',
    formattedBn: '০১ ডিসেম্বর ২০২৬',
    formattedEn: '01 Dec 2026',
    seatsLeft: 8,
    highlightBn: 'ডিসেম্বর ওপেনিং ব্যাচ',
    highlightEn: 'Dec Season Opening',
    isPeakSeason: false,
  },
  {
    date: '2026-12-04',
    dayOfWeekBn: 'শুক্রবার',
    dayOfWeekEn: 'Friday',
    formattedBn: '০৪ ডিসেম্বর ২০২৬',
    formattedEn: '04 Dec 2026',
    seatsLeft: 6,
    highlightBn: 'উইকেন্ড সাফারি',
    highlightEn: 'Weekend Safari',
    isPeakSeason: false,
  },
  {
    date: '2026-12-08',
    dayOfWeekBn: 'মঙ্গলবার',
    dayOfWeekEn: 'Tuesday',
    formattedBn: '০৮ ডিসেম্বর ২০২৬',
    formattedEn: '08 Dec 2026',
    seatsLeft: 10,
    highlightBn: 'নিস্তব্ধ খাঁড়ি বিশেষ',
    highlightEn: 'Quiet Creek Special',
    isPeakSeason: false,
  },
  {
    date: '2026-12-11',
    dayOfWeekBn: 'শুক্রবার',
    dayOfWeekEn: 'Friday',
    formattedBn: '১১ ডিসেম্বর ২০২৬',
    formattedEn: '11 Dec 2026',
    seatsLeft: 5,
    highlightBn: 'উইকেন্ড সাফারি',
    highlightEn: 'Weekend Safari',
    isPeakSeason: false,
  },
  {
    date: '2026-12-15',
    dayOfWeekBn: 'মঙ্গলবার',
    dayOfWeekEn: 'Tuesday',
    formattedBn: '১৫ ডিসেম্বর ২০২৬',
    formattedEn: '15 Dec 2026',
    seatsLeft: 9,
    highlightBn: 'পাখি ও ম্যানগ্রোভ বিশেষ',
    highlightEn: 'Birding & Mangrove',
    isPeakSeason: false,
  },
  {
    date: '2026-12-18',
    dayOfWeekBn: 'শুক্রবার',
    dayOfWeekEn: 'Friday',
    formattedBn: '১৮ ডিসেম্বর ২০২৬',
    formattedEn: '18 Dec 2026',
    seatsLeft: 6,
    highlightBn: 'উইকেন্ড সাফারি',
    highlightEn: 'Weekend Safari',
    isPeakSeason: false,
  },
  {
    date: '2026-12-22',
    dayOfWeekBn: 'মঙ্গলবার',
    dayOfWeekEn: 'Tuesday',
    formattedBn: '২২ ডিসেম্বর ২০২৬',
    formattedEn: '22 Dec 2026',
    seatsLeft: 7,
    highlightBn: 'শীতের বন্যপ্রাণী ট্রিপ',
    highlightEn: 'Winter Wildlife Trip',
    isPeakSeason: true,
  },
  {
    date: '2026-12-25',
    dayOfWeekBn: 'শুক্রবার',
    dayOfWeekEn: 'Friday',
    formattedBn: '২৫ ডিসেম্বর ২০২৬',
    formattedEn: '25 Dec 2026',
    seatsLeft: 4,
    highlightBn: '🎄 ক্রিসমাস বড়দিন স্পেশাল',
    highlightEn: '🎄 Christmas Special',
    isPeakSeason: true,
  },
  {
    date: '2026-12-29',
    dayOfWeekBn: 'মঙ্গলবার',
    dayOfWeekEn: 'Tuesday',
    formattedBn: '২৯ ডিসেম্বর ২০২৬',
    formattedEn: '29 Dec 2026',
    seatsLeft: 5,
    highlightBn: 'বছরশেষের বিশেষ সাফারি',
    highlightEn: 'Year-End Safari',
    isPeakSeason: true,
  },
  {
    date: '2026-12-31',
    dayOfWeekBn: 'বৃহস্পতিবার',
    dayOfWeekEn: 'Thursday',
    formattedBn: '৩১ ডিসেম্বর ২০২৬',
    formattedEn: '31 Dec 2026',
    seatsLeft: 3,
    highlightBn: '🎉 থার্টিফার্স্ট নাইট গালা',
    highlightEn: '🎉 31st Gala Night',
    isPeakSeason: true,
  },
];

const STORAGE_KEY = 'sundarban_available_dates_v1';

export function getAvailableDates(): AvailableSafariDate[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    // fallback to defaults
  }
  return DEFAULT_AVAILABLE_DECEMBER_DATES;
}

export function saveAvailableDates(dates: AvailableSafariDate[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dates));
  } catch (e) {
    console.error('Failed to save available dates', e);
  }
}

export function checkDateAvailability(dateStr: string): {
  isAvailable: boolean;
  matchedDate?: AvailableSafariDate;
} {
  if (!dateStr) return { isAvailable: false };
  const allDates = getAvailableDates();
  const matched = allDates.find(d => d.date === dateStr);
  return {
    isAvailable: !!matched,
    matchedDate: matched,
  };
}
