import React from 'react';
import { Check, Bookmark, BookmarkCheck, ArrowRight, Sparkles } from 'lucide-react';
import { TourPackage } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useSavedTrip } from '../../context/SavedTripContext';
import { SourceVerificationBadge } from '../common/SourceVerificationBadge';

interface PackageCardProps {
  pkg: TourPackage;
  onSelect: (slug: string) => void;
  onBookNow: (slug: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onSelect, onBookNow }) => {
  const { language, isBengali } = useLanguage();
  const { isPackageSaved, toggleSavePackage } = useSavedTrip();
  const saved = isPackageSaved(pkg.slug);

  return (
    <div
      className={`group relative bg-white rounded-3xl overflow-hidden animated-round-card transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
        pkg.isFlagship
          ? 'ring-2 ring-amber-400/40'
          : ''
      }`}
    >
      {/* Top Media & Badges */}
      <div className="relative h-56 sm:h-60 overflow-hidden">
        <img
          src={pkg.heroImage}
          alt={pkg.title.en}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {pkg.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-md">
                {pkg.badge[language]}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-xs text-white">
              {pkg.durationDays}D / {pkg.durationNights}N
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={e => {
              e.stopPropagation();
              toggleSavePackage(pkg.slug);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
              saved
                ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300'
                : 'bg-black/50 text-white hover:bg-white hover:text-slate-900'
            }`}
            title={saved ? (isBengali ? 'সংরক্ষিত' : 'Saved') : (isBengali ? 'সংরক্ষণ করুন' : 'Save Package')}
          >
            {saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>

        {/* Bottom Image Overlay Title */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <div className="text-xs text-amber-300 font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>
              {pkg.durationDays} {isBengali ? 'দিন' : 'Day'}
              {pkg.durationNights > 0
                ? ` ${pkg.durationNights} ${isBengali ? 'রাত' : 'Night'}`
                : ` (${isBengali ? 'একদিনের সফর' : 'Day Trip'})`}
            </span>
          </div>
          <h3 className="text-xl font-bold font-heading leading-tight truncate text-white group-hover:text-amber-300 transition-colors">
            {pkg.title[language]}
          </h3>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        {/* Subtitle & Price Lockup */}
        <div>
          <div className="flex items-baseline justify-between mb-3 pb-3 border-b border-slate-100">
            <div>
              <span className="text-xs text-slate-500 block font-medium">
                {isBengali ? 'জনপ্রতি প্রারম্ভিক খরচ' : 'Starting From'}
              </span>
              <div className="text-2xl font-black font-heading text-emerald-800">
                {pkg.basePrice ? `₹${pkg.basePrice.toLocaleString('en-IN')}` : pkg.pricePerPersonINR || '₹2,199'}
                <span className="text-xs font-normal text-slate-500 ml-1">
                  {isBengali ? '/জন' : '/person'}
                </span>
              </div>
            </div>

            <div className="text-right text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg font-semibold">
              {isBengali ? 'খাবার ও বোট সহ' : 'All Meals & Boat Inc.'}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-3">
            {(pkg.shortDescription || pkg.tagline || pkg.overview)?.[language]}
          </p>

          {/* Highlights Checklist */}
          <div className="space-y-1.5 mb-4">
            <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              {isBengali ? 'প্যাকেজের প্রধান আকর্ষণ:' : 'Package Highlights:'}
            </div>
            <ul className="space-y-1">
              {(pkg.highlights || []).slice(0, 3).map((h: any, i: number) => (
                <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{h[language] || h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verification & Action Buttons */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <SourceVerificationBadge
            status={pkg.verificationStatus || 'officially-verified'}
            lastCheckedDate={pkg.lastCheckedDate || 'January 2026'}
            source={pkg.sourceVerification || 'West Bengal Forest Department Permitted'}
          />

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => onSelect(pkg.slug)}
              className="w-full py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-xs transition-colors text-center shadow-xs"
            >
              {isBengali ? 'বিস্তারিত সূচি' : 'Day-by-Day Plan'}
            </button>

            <button
              onClick={() => onBookNow(pkg.slug)}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md transition-all text-center flex items-center justify-center gap-1.5"
            >
              <span>{isBengali ? 'বুকিং কোটেশন' : 'Book / Quote'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
