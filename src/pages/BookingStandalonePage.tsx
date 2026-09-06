import React from 'react';
import { BookingForm } from '../components/booking/BookingForm';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ShieldCheck, HeartHandshake, PhoneCall, Tag } from 'lucide-react';
import { BRAND_INFO } from '../data/brandInfo';
import { TOUR_PACKAGES } from '../data/packages';

interface BookingStandalonePageProps {
  initialPackageSlug?: string | null;
}

export const BookingStandalonePage: React.FC<BookingStandalonePageProps> = ({ initialPackageSlug }) => {
  const { language, isBengali } = useLanguage();

  const selectedPkg = initialPackageSlug ? TOUR_PACKAGES.find(p => p.slug === initialPackageSlug) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-[#E6F4EA] px-3.5 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-[#F4B942]" />
          <span>{isBengali ? 'অনলাইন সিট সংরক্ষণ ও কোটেশন' : 'Online Safari Reservation Desk'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B]">
          {isBengali ? 'সুন্দরবন ভ্রমণের বুকিং আবেদন' : 'Reserve Your Sundarban Safari'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'পছন্দসই প্যাকেজ, তারিখ ও যাত্রী সংখ্যা নির্বাচন করুন। আবেদন জমা পড়ার সাথে সাথে আমাদের টিম বন অনুমতি ও সিট নিশ্চিত করবে।'
            : 'Select your preferred dates and cruiser category. Our team confirms Forest Department clearance within 24 hours.'}
        </p>

        {selectedPkg && (
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-900 border border-emerald-300 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold mt-2 shadow-xs">
            <Tag className="w-4 h-4 text-emerald-700" />
            <span>
              {isBengali ? 'নির্বাচিত প্যাকেজ:' : 'Selected Package:'} <strong>{selectedPkg.title[language]}</strong>
            </span>
            <span className="bg-emerald-700 text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
              ₹{selectedPkg.basePrice.toLocaleString('en-IN')} / {isBengali ? 'জন' : 'person'}
            </span>
          </div>
        )}
      </div>

      {/* Main Booking Form */}
      <BookingForm key={initialPackageSlug || 'default-booking'} initialPackageSlug={initialPackageSlug || undefined} />

      {/* Trust & Guarantee Notes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
        <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <div className="space-y-1">
            <h4 className="font-bold text-xs text-slate-900 font-heading">
              {isBengali ? '১০০% সরকারি অনুমোদন' : '100% Forest Dept Permits'}
            </h4>
            <p className="text-[11px] text-slate-500">
              {isBengali
                ? 'আইনসম্মত এন্ট্রি ফি ও নিবন্ধিত বোটের নিশ্চয়তা।'
                : 'All statutory visitor permits processed legitimately.'}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200">
          <HeartHandshake className="w-6 h-6 text-amber-600 shrink-0" />
          <div className="space-y-1">
            <h4 className="font-bold text-xs text-slate-900 font-heading">
              {isBengali ? 'কোনো লুকানো চার্জ নেই' : 'Transparent Pricing'}
            </h4>
            <p className="text-[11px] text-slate-500">
              {isBengali
                ? 'খাবার, বোট ও গাইড সহ সর্বমোট মূল্য দেখানো হয়।'
                : 'Includes gourmet meals, cruiser charter, and guide fees.'}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200">
          <PhoneCall className="w-6 h-6 text-[#0E7490] shrink-0" />
          <div className="space-y-1">
            <h4 className="font-bold text-xs text-slate-900 font-heading">
              {isBengali ? '২৪ ঘণ্টা সহায়তা ডেস্ক' : '24/7 Phone Assistance'}
            </h4>
            <p className="text-[11px] text-slate-500">
              {BRAND_INFO.phone} / {BRAND_INFO.whatsappDisplay}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
