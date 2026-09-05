import React from 'react';
import { ShieldCheck, Utensils, HeartHandshake, Anchor, CalendarCheck, MapPin, Users, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const QuickTrustStrip: React.FC = () => {
  const { isBengali } = useLanguage();

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
        {/* Key Statistics Strip with the exact animated-round-card border animation like the section */}
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
      </div>
    </section>
  );
};
