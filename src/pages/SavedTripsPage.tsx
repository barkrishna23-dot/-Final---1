import React from 'react';
import { useSavedTrip } from '../context/SavedTripContext';
import { useLanguage } from '../context/LanguageContext';
import { TOUR_PACKAGES } from '../data/packages';
import { PackageCard } from '../components/packages/PackageCard';
import { Bookmark, Sparkles, Trash2, ArrowRight, Printer, Share2, Compass } from 'lucide-react';
import { BRAND_INFO } from '../data/brandInfo';

interface SavedTripsPageProps {
  onSelectPackage: (slug: string) => void;
  onBookNow: (slug: string) => void;
  onNavigate: (route: string) => void;
}

export const SavedTripsPage: React.FC<SavedTripsPageProps> = ({
  onSelectPackage,
  onBookNow,
  onNavigate,
}) => {
  const { savedPackageSlugs, customTripState, clearAllSaved, removeSavedPackage } = useSavedTrip();
  const { language, isBengali } = useLanguage();

  const savedPackages = TOUR_PACKAGES.filter(p => savedPackageSlugs.includes(p.slug));
  const hasItems = savedPackages.length > 0 || customTripState !== null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-[#E6F4EA] px-3 py-1 rounded-full mb-2">
            <Bookmark className="w-3.5 h-3.5 text-[#F4B942]" />
            <span>{isBengali ? 'আপনার সংরক্ষিত ট্রিপ' : 'Saved Trips & Quotations'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-[#064E3B]">
            {isBengali ? 'বুকমার্ক করা প্যাকেজ ও কাস্টম পরিকল্পনা' : 'Your Bookmarked Safaris'}
          </h1>
        </div>

        {hasItems && (
          <button
            onClick={clearAllSaved}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 p-2 rounded-xl hover:bg-red-50 transition-colors self-start sm:self-auto"
          >
            <Trash2 className="w-4 h-4" />
            <span>{isBengali ? 'সকল সেভ করা ট্রিপ মুছুন' : 'Clear All'}</span>
          </button>
        )}
      </div>

      {!hasItems ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4 max-w-xl mx-auto p-8">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#064E3B] mx-auto flex items-center justify-center">
            <Bookmark className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold font-heading text-slate-800">
            {isBengali ? 'আপনার কোনো সংরক্ষিত ট্রিপ নেই' : 'No Saved Trips Yet'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            {isBengali
              ? 'আমাদের প্যাকেজ ব্রাউজ করার সময় বুকমার্ক বাটনে ক্লিক করুন অথবা কাস্টম ট্রিপ কম্পোজার দিয়ে নিজস্ব প্ল্যান সেভ করুন।'
              : 'Bookmark any package or build a tailored safari in our Trip Composer to save it for quick review.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('packages')}
              className="px-6 py-2.5 rounded-full bg-[#064E3B] text-white font-bold text-xs shadow-md"
            >
              {isBengali ? 'প্যাকেজ ব্রাউজ করুন' : 'Browse Packages'}
            </button>
            <button
              onClick={() => onNavigate('plan-my-trip')}
              className="px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200"
            >
              {isBengali ? 'কাস্টম ট্রিপ বানাই' : 'Build Custom Trip'}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Custom Trip Saved Block */}
          {customTripState && (
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-amber-300 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <h3 className="text-xl font-bold font-heading text-[#064E3B]">
                    {isBengali ? 'আপনার কাস্টম কম্পোজ করা ট্রিপ' : 'Your Customized Itinerary'}
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('plan-my-trip')}
                  className="text-xs font-bold text-[#064E3B] hover:underline"
                >
                  {isBengali ? 'এডিট করুন' : 'Edit Composer'}
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs bg-white p-4 rounded-2xl border border-stone-200">
                <div>
                  <span className="text-slate-400 block">{isBengali ? 'দিন সংখ্যা' : 'Duration'}</span>
                  <strong className="text-slate-900">{customTripState.days} Days</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">{isBengali ? 'অতিথি' : 'Guests'}</span>
                  <strong className="text-slate-900">
                    {customTripState.guestsAdults} Adults, {customTripState.guestsChildren} Kids
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block">{isBengali ? 'রুম' : 'Room'}</span>
                  <strong className="text-slate-900">{customTripState.roomType.toUpperCase()}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">{isBengali ? 'খাবার' : 'Food'}</span>
                  <strong className="text-slate-900">{customTripState.foodPreference}</strong>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => onNavigate('booking')}
                  className="px-6 py-2.5 rounded-full bg-[#064E3B] text-white font-bold text-xs shadow-md hover:bg-[#08614a]"
                >
                  {isBengali ? 'এই ট্রিপটি সরাসরি বুক করুন' : 'Book This Custom Safari'}
                </button>
              </div>
            </div>
          )}

          {/* Saved Packages Grid */}
          {savedPackages.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-slate-900">
                {isBengali ? 'সংরক্ষিত ট্যুর প্যাকেজ সমূহ' : 'Bookmarked Safari Packages'} ({savedPackages.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {savedPackages.map(pkg => (
                  <PackageCard
                    key={pkg.id}
                    pkg={pkg}
                    onSelect={onSelectPackage}
                    onBookNow={onBookNow}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
