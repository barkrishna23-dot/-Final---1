import React from 'react';
import { ShieldCheck, Utensils, HeartHandshake, Anchor } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const QuickTrustStrip: React.FC = () => {
  const { isBengali } = useLanguage();

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
    <section className="bg-white/80 backdrop-blur-xs py-10 border-y border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-3xl animated-round-card shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group"
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
