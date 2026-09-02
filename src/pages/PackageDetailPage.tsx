import React from 'react';
import { TourPackage } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useSavedTrip } from '../context/SavedTripContext';
import { ItineraryTimeline } from '../components/packages/ItineraryTimeline';
import { SourceVerificationBadge } from '../components/common/SourceVerificationBadge';
import { WildlifeHonestyPanel } from '../components/common/WildlifeHonestyPanel';
import { BookingForm } from '../components/booking/BookingForm';
import { Clock, MapPin, Bookmark, BookmarkCheck, ArrowLeft, ShieldCheck, Check, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/brandInfo';

interface PackageDetailPageProps {
  pkg: TourPackage;
  onBack: () => void;
  onBookNow: (slug: string) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({
  pkg,
  onBack,
  onBookNow,
}) => {
  const { language, isBengali } = useLanguage();
  const { isPackageSaved, toggleSavePackage } = useSavedTrip();
  const saved = isPackageSaved(pkg.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#064E3B] hover:text-[#08634b] transition-colors p-1"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{isBengali ? 'সকল প্যাকেজে ফিরে যান' : 'Back to All Packages'}</span>
      </button>

      {/* Hero Header Section */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#06241B] min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-10 text-white">
        <img
          src={pkg.heroImage}
          alt={pkg.title.en}
          className="absolute inset-0 w-full h-full object-cover brightness-60 contrast-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#06241B] via-black/40 to-transparent" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            {pkg.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F4B942] text-[#064E3B] shadow-sm">
                {pkg.badge[language]}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md">
              {pkg.durationDays} Days / {pkg.durationNights} Nights
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-tight">
            {pkg.title[language]}
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {(pkg.shortDescription || pkg.tagline || pkg.overview)?.[language] || ''}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-amber-300">
            <div>
              <span className="text-xs text-slate-300 block">{isBengali ? 'জনপ্রতি প্রারম্ভিক খরচ' : 'Starting Fare'}</span>
              <strong className="text-2xl sm:text-3xl font-heading text-white">
                {pkg.basePrice ? `₹${pkg.basePrice.toLocaleString('en-IN')}` : pkg.pricePerPersonINR || '₹2,199'}
              </strong>
              <span className="text-xs text-slate-300 ml-1">{isBengali ? '/জন' : '/person'}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleSavePackage(pkg.slug)}
                className={`p-3 rounded-full backdrop-blur-md transition-all ${
                  saved ? 'bg-[#F4B942] text-[#064E3B]' : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
                title={saved ? (isBengali ? 'সংরক্ষিত' : 'Saved') : (isBengali ? 'সংরক্ষণ করুন' : 'Save')}
              >
                {saved ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
              </button>

              <button
                onClick={() => {
                  const bookingEl = document.getElementById('package-booking-section');
                  if (bookingEl) bookingEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full bg-[#F4B942] hover:bg-[#ffcb59] text-[#064E3B] font-bold text-sm shadow-xl transition-all"
              >
                {isBengali ? 'বুকিং আবেদন করুন' : 'Book / Request Quote'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Badge */}
      <SourceVerificationBadge
        status={(pkg.verificationStatus as any) || 'officially-verified'}
        source={pkg.sourceVerification || 'West Bengal Forest Department & STR Guidelines'}
        lastCheckedDate={pkg.lastCheckedDate || 'January 2026'}
      />

      {/* Key Highlights Bar */}
      <div className="bg-[#F8FBF7] rounded-3xl p-6 sm:p-8 border border-emerald-200/80">
        <h3 className="text-lg font-bold font-heading text-[#064E3B] mb-4">
          {isBengali ? 'এই প্যাকেজের অনন্য সুবিধাসমূহ' : 'Exclusive Package Highlights'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pkg.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{h[language]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Itinerary Timeline */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#064E3B]" />
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
            {isBengali ? 'দিনভিত্তিক পূর্ণাঙ্গ ভ্রমণসূচি' : 'Day-by-Day Detailed Itinerary'}
          </h2>
        </div>
        <ItineraryTimeline pkg={pkg} />
      </section>

      {/* Honest Wildlife Policy */}
      <WildlifeHonestyPanel />

      {/* Direct Booking Form Embedded Section */}
      <section id="package-booking-section" className="space-y-4 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
            {isBengali ? 'এই প্যাকেজটি সরাসরি বুক করুন' : 'Confirm Your Dates for this Package'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            {isBengali
              ? 'নিচের ফর্মটি পূরণ করুন বা হোয়াটসঅ্যাপে আমাদের সাথে কথা বলুন।'
              : 'Complete the form below or chat on WhatsApp for fast confirmation.'}
          </p>
        </div>
        <BookingForm initialPackageSlug={pkg.slug} />
      </section>
    </div>
  );
};
