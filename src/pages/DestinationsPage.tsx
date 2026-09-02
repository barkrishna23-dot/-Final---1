import React, { useState } from 'react';
import { DESTINATIONS } from '../data/destinations';
import { Destination } from '../types';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { SourceVerificationBadge } from '../components/common/SourceVerificationBadge';
import { useLanguage } from '../context/LanguageContext';
import { Search, MapPin, Camera, AlertTriangle, ShieldCheck, X, Clock, Compass } from 'lucide-react';

interface DestinationsPageProps {
  selectedSlug?: string | null;
  onNavigate: (route: string) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ selectedSlug, onNavigate }) => {
  const { language, isBengali } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(() => {
    if (selectedSlug) {
      return DESTINATIONS.find(d => d.slug === selectedSlug) || null;
    }
    return null;
  });

  const filteredDestinations = DESTINATIONS.filter(d => {
    const matchesCat = selectedCategory === 'all' || d.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      d.name.bn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.shortDescription.bn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.shortDescription.en.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const categories = [
    { id: 'all', label: isBengali ? 'সকল ২০টি স্থান' : 'All 20 Destinations' },
    { id: 'watch-tower', label: isBengali ? 'ওয়াচ টাওয়ার (৬টি)' : 'Watch Towers (6)' },
    { id: 'creek', label: isBengali ? 'খাঁড়ি ও ক্যানাল (৪টি)' : 'Creeks & Canals (4)' },
    { id: 'island', label: isBengali ? 'দ্বীপ ও গ্রামীণ কেন্দ্র (৫টি)' : 'Islands & Villages (5)' },
    { id: 'heritage', label: isBengali ? 'ঐতিহাসিক স্থান (৩টি)' : 'Heritage Sites (3)' },
    { id: 'sanctuary', label: isBengali ? 'অভয়ারণ্য (২টি)' : 'Sanctuaries (2)' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7490] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full">
          <Compass className="w-3.5 h-3.5" />
          <span>{isBengali ? 'সুন্দরবনের ভৌগোলিক আকর্ষণ' : 'Geographic Highlights & Circuits'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B]">
          {isBengali ? '২০টি মাঠপর্যায়ে যাচাইকৃত দর্শনীয় স্থান' : '20 Field-Verified Sundarban Destinations'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'সুন্দরবন টাইগার রিজার্ভ ও দক্ষিণ ২৪ পরগণা বন বিভাগের অনুমোদিত সকল প্রধান ওয়াচ টাওয়ার, সরু খাঁড়ি, ঐতিহাসিক স্মৃতিসৌধ ও দ্বীপের পূর্ণাঙ্গ ডিরেক্টরি।'
            : 'Comprehensive directory of all Forest Department authorized watch towers, tidal creeks, historical monuments, and remote river islands.'}
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#064E3B] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={isBengali ? 'স্থানের নাম বা বিবরণ খুঁজুন...' : 'Search place name or keywords...'}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
          />
        </div>
      </div>

      {/* Sajnekhali Dedicated 7-Part Guide Banner for Destinations */}
      <div className="bg-linear-to-r from-[#064E3B] via-[#0B5E45] to-[#043327] rounded-3xl p-6 sm:p-8 text-white border-2 border-amber-400/50 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <span>{isBengali ? 'বিশেষ পর্যটন কেন্দ্র নির্দেশিকা' : 'Featured Destination In-Depth Guide'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            {isBengali ? 'সজনেখালি ওয়াচ টাওয়ার: ৭-অধ্যায় পূর্ণাঙ্গ গাইড' : 'Sajnekhali Watch Tower: 7-Chapter Guide'}
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
            {isBengali
              ? 'ম্যানগ্রোভ ইন্টারপ্রিটেশন সেন্টার, মিষ্টিপানির পুকুর, কচ্ছপ-কুমির সংরক্ষণ প্রদর্শনী ও বনবিবি মন্দিরের বিস্তারিত বিবরণ এবং দায়িত্বশীল বন্যপ্রাণী পর্যবেক্ষণ নীতি জানুন।'
              : 'Explore the complete ecological and educational breakdown of the Mangrove Interpretation Centre, sweet-water pond dynamics, Batagur turtle pond, and Bonbibi folklore.'}
          </p>
        </div>
        <button
          onClick={() => onNavigate('experience-sajnekhali')}
          className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
        >
          <span>{isBengali ? 'পূর্ণাঙ্গ সজনেখালি পেজ পড়ুন' : 'Open 7-Chapter Guide'}</span>
          <Compass className="w-4 h-4 text-slate-950" />
        </button>
      </div>

      {/* Grid of Destination Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map(d => (
          <DestinationCard
            key={d.id}
            destination={d}
            onSelect={() => setActiveModalDest(d)}
          />
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="text-center py-16 text-slate-500 space-y-2">
          <p className="text-base font-semibold">
            {isBengali ? 'কোনো স্থান খুঁজে পাওয়া যায়নি।' : 'No destinations match your search criteria.'}
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-xs text-[#064E3B] font-bold underline"
          >
            {isBengali ? 'ফিল্টার রিসেট করুন' : 'Reset filters'}
          </button>
        </div>
      )}

      {/* Interactive Destination Detail Modal */}
      {activeModalDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200">
            {/* Modal Image Header */}
            <div className="relative h-60 sm:h-72">
              <img
                src={activeModalDest.image}
                alt={activeModalDest.name.en}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              <button
                onClick={() => setActiveModalDest(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
                  {activeModalDest.category.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                  {activeModalDest.name[language]}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#064E3B]" />
                  <span>
                    {activeModalDest.landscapeType ? activeModalDest.landscapeType[language] : (activeModalDest as any).locationSummary?.[language] || activeModalDest.categoryName[language]}
                  </span>
                </span>
                <span className="flex items-center gap-1 font-semibold text-amber-800">
                  <Clock className="w-3.5 h-3.5" />
                  <span>
                    {activeModalDest.approxDuration ? activeModalDest.approxDuration[language] : (activeModalDest as any).timing?.[language] || (isBengali ? '১-২ ঘণ্টা' : '1-2 Hours')}
                  </span>
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {isBengali ? 'স্থান পরিচিতি ও বিবরণ' : 'Overview & Ecological Significance'}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {(activeModalDest.longDescription || activeModalDest.shortDescription || activeModalDest.description)?.[language]}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {isBengali ? 'প্রধান আকর্ষণসমূহ:' : 'Key Highlights:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(activeModalDest.whyVisit || (activeModalDest as any).keyHighlights || []).map((kh: any, i: number) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>{kh[language] || kh}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photography & Safety Tips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {activeModalDest.photographyValue && (
                  <div className="p-4 bg-cyan-50/70 rounded-2xl border border-cyan-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-950">
                      <Camera className="w-4 h-4 text-cyan-700" />
                      <span>{isBengali ? 'ফটোগ্রাফি গাইড' : 'Photography Guide'}</span>
                    </div>
                    <p className="text-xs text-cyan-900 leading-relaxed">
                      {activeModalDest.photographyValue[language]}
                    </p>
                  </div>
                )}

                {(activeModalDest.safetyResponsibleNotes || (activeModalDest as any).safetyNote) && (
                  <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950">
                      <AlertTriangle className="w-4 h-4 text-amber-700" />
                      <span>{isBengali ? 'নিরাপত্তা ও বনবিধি' : 'Safety Advice'}</span>
                    </div>
                    <p className="text-xs text-amber-900 leading-relaxed">
                      {(activeModalDest.safetyResponsibleNotes || (activeModalDest as any).safetyNote)[language]}
                    </p>
                  </div>
                )}
              </div>

              {/* Verification Badge */}
              <SourceVerificationBadge
                status={activeModalDest.verificationStatus}
                source={activeModalDest.verificationSource || (activeModalDest as any).officialSource}
                lastCheckedDate={activeModalDest.lastCheckedDate}
              />

              {/* Action */}
              <div className="pt-2 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100">
                <button
                  onClick={() => setActiveModalDest(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold"
                >
                  {isBengali ? 'বন্ধ করুন' : 'Close'}
                </button>
                {activeModalDest.slug === 'sajnekhali-watch-tower' && (
                  <button
                    onClick={() => {
                      setActiveModalDest(null);
                      onNavigate('experience-sajnekhali');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black shadow-md flex items-center gap-1.5"
                  >
                    <span>{isBengali ? '৭-অধ্যায় পূর্ণাঙ্গ সজনেখালি গাইড' : 'Full 7-Part Sajnekhali Guide'}</span>
                  </button>
                )}
                <button
                  onClick={() => {
                    setActiveModalDest(null);
                    onNavigate('packages');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#064E3B] text-white text-xs font-bold shadow-md hover:bg-[#08614a]"
                >
                  {isBengali ? 'প্যাকেজ দেখুন' : 'View Packages'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
