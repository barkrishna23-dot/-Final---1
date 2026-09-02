import React, { useState } from 'react';
import { PackageCard } from '../components/packages/PackageCard';
import { WildlifeHonestyPanel } from '../components/common/WildlifeHonestyPanel';
import { TOUR_PACKAGES } from '../data/packages';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Filter, CheckCircle2, ShieldCheck, Compass, Users } from 'lucide-react';

interface PackagesPageProps {
  onSelectPackage: (slug: string) => void;
  onBookNow: (slug: string) => void;
  onNavigate: (route: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  onSelectPackage,
  onBookNow,
  onNavigate,
}) => {
  const { language, isBengali } = useLanguage();
  const [durationFilter, setDurationFilter] = useState<'all' | '1d' | '2d' | '3d' | '4d'>('all');

  const filteredPackages = TOUR_PACKAGES.filter(pkg => {
    if (durationFilter === '1d') return pkg.durationDays === 1;
    if (durationFilter === '2d') return pkg.durationDays === 2;
    if (durationFilter === '3d') return pkg.durationDays === 3;
    if (durationFilter === '4d') return pkg.durationDays >= 4;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-[#E6F4EA] px-3.5 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-[#F4B942]" />
          <span>{isBengali ? 'অনুমোদিত সুন্দরবন ভ্রমণ প্যাকেজ' : 'Verified Sundarban Tour Packages'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B]">
          {isBengali ? '১ দিন থেকে ৪ দিনের পূর্ণাঙ্গ সাফারি' : 'Complete 1-Day to 4-Day Safari Packages'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'সকল প্যাকেজে অন্তর্ভুক্ত: সরকার অনুমোদিত পর্যটক বোট, বন বিভাগের পারমিট, অভিজ্ঞ গাইড, সুস্বাদু বাঙালি খাবার এবং সুরক্ষামূলক লাইফ জ্যাকেট।'
            : 'All packages include certified cruisers, Forest Dept entry permits, expert local guides, gourmet Bengali meals, and comprehensive river safety.'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap pb-4">
        {[
          { id: 'all', label: isBengali ? 'সকল প্যাকেজ (৫টি)' : 'All Packages (5)' },
          { id: '1d', label: isBengali ? '১ দিনের এক্সপ্রেস' : '1-Day Express' },
          { id: '2d', label: isBengali ? '১ রাত ২ দিন ক্লাসিক' : '1N / 2D Classic' },
          { id: '3d', label: isBengali ? '২ রাত ৩ দিন ডিলাক্স (ফ্ল্যাগশিপ)' : '2N / 3D Deluxe (Flagship)' },
          { id: '4d', label: isBengali ? '৩ রাত ৪ দিন এক্সটেন্ডেড' : '3N / 4D Extended' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setDurationFilter(tab.id as any)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              durationFilter === tab.id
                ? 'bg-[#064E3B] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map(pkg => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            onSelect={onSelectPackage}
            onBookNow={onBookNow}
          />
        ))}
      </div>

      {/* Custom Trip Composer Callout */}
      <div className="bg-linear-to-r from-[#FAF5FF] via-[#F3E8FF] to-[#E0E7FF] rounded-3xl p-8 border border-purple-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-purple-950">
            {isBengali ? 'আপনার মতো করে কাস্টম ট্রিপ বানাতে চান?' : 'Need a Tailored Custom Safari Itinerary?'}
          </h3>
          <p className="text-sm text-purple-800">
            {isBengali
              ? 'নির্দিষ্ট দিন সংখ্যা, বিশেষ বোট চার্টার, ফ্যামিলি গ্রুপ বা ফটোগ্রাফি ফোকাস অনুযায়ী নিজস্ব বাজেট হিসাব করুন।'
              : 'Calculate live custom quotes for private cruisers, family groups, or dedicated birdwatching expeditions.'}
          </p>
        </div>
        <button
          onClick={() => onNavigate('plan-my-trip')}
          className="px-6 py-3 rounded-full bg-purple-900 hover:bg-purple-950 text-white font-bold text-sm shadow-md shrink-0 transition-all"
        >
          {isBengali ? 'কাস্টম ট্রিপ প্ল্যানার' : 'Open Trip Composer'}
        </button>
      </div>

      {/* Ethical Wildlife Honesty Panel */}
      <WildlifeHonestyPanel />
    </div>
  );
};
