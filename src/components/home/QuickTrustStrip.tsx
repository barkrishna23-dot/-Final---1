import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  Utensils,
  HeartHandshake,
  Anchor,
  CalendarCheck,
  MapPin,
  Users,
  Award,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageSquare,
  Quote
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';

interface QuickTrustStripProps {
  onNavigate?: (route: string) => void;
}

export const QuickTrustStrip: React.FC<QuickTrustStripProps> = ({ onNavigate }) => {
  const { language, isBengali } = useLanguage();
  const { reviews } = useAdmin();

  // Review pagination & filter state for viewing all details directly
  const [currentPage, setCurrentPage] = useState(0);
  const [ratingFilter, setRatingFilter] = useState<'all' | 5 | 4>('all');
  const reviewsPerPage = 2;

  const approvedReviews = useMemo(() => {
    return reviews.filter(r => r.isApproved !== false);
  }, [reviews]);

  const filteredReviews = useMemo(() => {
    if (ratingFilter === 'all') return approvedReviews;
    return approvedReviews.filter(r => r.rating === ratingFilter);
  }, [approvedReviews, ratingFilter]);

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage) || 1;
  const currentReviews = useMemo(() => {
    const start = currentPage * reviewsPerPage;
    return filteredReviews.slice(start, start + reviewsPerPage);
  }, [filteredReviews, currentPage, reviewsPerPage]);

  const handlePrevPage = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => (prev + 1 < totalPages ? prev + 1 : 0));
  };

  const keyStats = [
    {
      icon: <CalendarCheck className="w-5 h-5 text-amber-600" />,
      value: '২০১৯+',
      valueEn: '2019+',
      label: isBengali ? 'সাল থেকে বিশ্বস্ত সেবা' : 'Serving Since 2019',
    },
    {
      icon: <MapPin className="w-5 h-5 text-emerald-600" />,
      value: '২০+',
      valueEn: '20+',
      label: isBengali ? 'যাচাইকৃত স্পট ও খাঁড়ি' : 'Verified Spots & Creeks',
    },
    {
      icon: <Users className="w-5 h-5 text-teal-600" />,
      value: '৫,০০০+',
      valueEn: '5,000+',
      label: isBengali ? 'সন্তুষ্ট পর্যটকের আস্থা' : 'Delighted Travelers',
    },
    {
      icon: <Award className="w-5 h-5 text-indigo-600" />,
      value: '১০০%',
      valueEn: '100%',
      label: isBengali ? 'সরকারি অনুমোদিত গাইড' : 'Licensed Guides',
    },
  ];

  const trustPillars = [
    {
      icon: <Anchor className="w-5 h-5 text-[#0E7490]" />,
      title: isBengali ? 'অনুমোদিত সাফারি বোট' : 'Certified Cruisers',
      desc: isBengali ? 'লাইফ জ্যাকেট, ফার্স্ট এইড ও নিজস্ব শেফযুক্ত বোট' : 'Vetted vessels with life jackets & live galleys',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
      title: isBengali ? '১০০% স্থানীয় রেজিস্টার্ড গাইড' : 'Licensed Local Guides',
      desc: isBengali ? 'সুন্দরবনের প্রতি ইঞ্চি খাঁড়ি ও জোয়ার-ভাটার অভিজ্ঞ গবেষক' : 'Deep delta knowledge of bird calls & tidal creeks',
    },
    {
      icon: <Utensils className="w-5 h-5 text-amber-600" />,
      title: isBengali ? 'খাঁটি বাঙালি ভোজ' : 'Authentic Bengali Kitchen',
      desc: isBengali ? 'গলদা চিংড়ি, ইলিশ ও কষা মাংসের গরম গরম রান্না' : 'Fresh river catch & homestyle gourmet courses',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-teal-700" />,
      title: isBengali ? 'কোনো লুকানো খরচ নেই' : 'Zero Hidden Charges',
      desc: isBengali ? 'বন অনুমতি, বোট ভাড়া, খাবার ও গাইড ফি অন্তর্ভুক্ত' : 'Forest permits, lodging & all meals included upfront',
    },
  ];

  return (
    <section className="bg-white/90 backdrop-blur-xs py-8 sm:py-10 border-y border-slate-200/80 shadow-xs space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Key Statistics Strip with the exact animated-round-card border animation */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl animated-round-card shadow-xs hover:shadow-md transition-all duration-300 border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyStats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/75 border border-slate-100/90 shadow-2xs hover:bg-emerald-50/40 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-50 to-amber-50 shadow-xs shrink-0 border border-emerald-100/60">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-heading text-slate-900 leading-tight">
                    {isBengali ? stat.value : stat.valueEn}
                  </div>
                  <div className="text-xs text-slate-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Trust Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-3xl animated-round-card shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group border border-slate-100"
            >
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 group-hover:bg-[#E6F4EA] transition-colors shrink-0">
                {p.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-slate-900 font-heading">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Guest Reviews Spotlight in the exact animated-round-card style like above */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl animated-round-card shadow-xs hover:shadow-md transition-all duration-300 border border-slate-100 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-2 border-b border-slate-100">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#064E3B] uppercase tracking-wider bg-emerald-100/90 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-800" />
                  <span>{isBengali ? '১০০% যাচাইকৃত পর্যটক প্রতিক্রিয়া' : '100% Verified Guest Reviews'}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                  <span className="font-extrabold text-xs text-slate-900">
                    {isBengali ? '৪.৩ / ৫.০' : '4.3 / 5.0'}
                  </span>
                  <div className="flex text-amber-500">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {isBengali ? '(১৮৫+ মতামত)' : '(185+ reviews)'}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#064E3B]">
                  {isBengali ? 'আমাদের অতিথিরা কী বলছেন?' : 'Real Experiences from Real Guests'}
                </h3>
                <p className="text-xs text-slate-500 hidden sm:inline">
                  {isBengali
                    ? '• সুন্দরবনের বাস্তব অভিজ্ঞতা ও স্বতঃস্ফূর্ত মূল্যায়ন'
                    : '• Authentic feedback from travelers'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {/* Rating Filter Tabs */}
              <div className="inline-flex p-0.5 bg-slate-100 rounded-lg text-[11px] font-semibold text-slate-700">
                <button
                  type="button"
                  onClick={() => {
                    setRatingFilter('all');
                    setCurrentPage(0);
                  }}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    ratingFilter === 'all'
                      ? 'bg-white text-[#064E3B] font-bold shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  {isBengali ? 'সব' : 'All'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRatingFilter(5);
                    setCurrentPage(0);
                  }}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                    ratingFilter === 5
                      ? 'bg-white text-[#064E3B] font-bold shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  <span>৫★</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRatingFilter(4);
                    setCurrentPage(0);
                  }}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                    ratingFilter === 4
                      ? 'bg-white text-[#064E3B] font-bold shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  <span>৪★</span>
                </button>
              </div>

              {/* Read All & Write a Review button */}
              {onNavigate && (
                <button
                  onClick={() => onNavigate('reviews')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#064E3B] hover:bg-[#096049] text-white text-xs font-bold shadow-xs transition-all shrink-0 cursor-pointer"
                >
                  <span>{isBengali ? 'মতামত দেখুন ও লিখুন' : 'All Reviews'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {currentReviews.map(r => {
              const commentText =
                typeof r.comment === 'object'
                  ? r.comment[language] || r.comment.bn || r.comment.en || ''
                  : r.comment || '';

              return (
                <div
                  key={r.id}
                  className="bg-slate-50/75 hover:bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#064E3B] to-[#0A5C46] text-white font-bold flex items-center justify-center text-xs shadow-xs shrink-0 ring-2 ring-emerald-100">
                          {r.guestName.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-xs sm:text-sm text-slate-900 font-heading leading-tight">
                              {r.guestName}
                            </h4>
                            <span className="inline-flex items-center gap-0.5 text-[9px] text-emerald-700 bg-emerald-100/80 px-1 py-0.2 rounded font-semibold" title={isBengali ? 'যাচাইকৃত বুকিং' : 'Verified Booking'}>
                              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                              <span>{isBengali ? 'যাচাইকৃত' : 'Verified'}</span>
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500">
                            {r.guestLocation} • {r.travelDate}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-0.5 text-amber-500 bg-amber-50/90 px-1.5 py-0.5 rounded-md border border-amber-200/60 shrink-0">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-[11px] font-bold text-slate-800 ml-0.5">
                          {r.rating}.0
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      <span>{r.packageTaken}</span>
                    </div>

                    <p className="text-xs text-slate-700 leading-snug italic relative pl-3 border-l-2 border-emerald-300 line-clamp-3">
                      "{commentText}"
                    </p>
                  </div>

                  <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-700 font-medium">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{isBengali ? 'বাস্তব অভিজ্ঞতা' : 'Genuine Safari'}</span>
                    </span>
                    <span className="text-[9px] text-slate-400">
                      ID: #{r.id.substring(0, 8)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Navigation & Details Footer */}
          <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
              <span>
                {isBengali
                  ? `${currentPage * reviewsPerPage + 1}–${Math.min((currentPage + 1) * reviewsPerPage, filteredReviews.length)} / ${filteredReviews.length}`
                  : `${currentPage * reviewsPerPage + 1}–${Math.min((currentPage + 1) * reviewsPerPage, filteredReviews.length)} of ${filteredReviews.length}`}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrevPage}
                aria-label="Previous reviews"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-[11px] font-medium transition-colors cursor-pointer shadow-2xs"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>{isBengali ? 'পূর্ববর্তী' : 'Prev'}</span>
              </button>

              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-900 font-bold rounded-md text-[11px]">
                {isBengali ? `${currentPage + 1} / ${totalPages}` : `${currentPage + 1} of ${totalPages}`}
              </span>

              <button
                type="button"
                onClick={handleNextPage}
                aria-label="Next reviews"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-[11px] font-medium transition-colors cursor-pointer shadow-2xs"
              >
                <span>{isBengali ? 'পরবর্তী' : 'Next'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('reviews')}
                  className="ml-1 inline-flex items-center gap-0.5 text-emerald-800 hover:text-emerald-950 text-[11px] font-bold underline cursor-pointer"
                >
                  <span>{isBengali ? 'সব দেখুন' : 'All'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

