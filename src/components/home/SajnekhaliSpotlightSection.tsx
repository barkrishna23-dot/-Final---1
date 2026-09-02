import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Binoculars,
  Trees,
  Fish,
  Eye,
  Waves,
  Building,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface SajnekhaliSpotlightSectionProps {
  onNavigate: (route: string) => void;
}

export const SajnekhaliSpotlightSection: React.FC<SajnekhaliSpotlightSectionProps> = ({ onNavigate }) => {
  const { isBengali } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-[#064E3B] via-[#0B5E45] to-[#043327] rounded-3xl p-6 sm:p-10 lg:p-12 text-white border-2 border-amber-400/40 shadow-2xl relative overflow-hidden">
        {/* Background Watermark Icon */}
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10 pointer-events-none">
          <Trees className="w-96 h-96 text-white" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Binoculars className="w-4 h-4 text-amber-300" />
              <span>{isBengali ? 'ইকো-ট্যুরিজম ও এডুকেশনাল কমপ্লেক্স' : 'Primary Wildlife & Ecotourism Hub'}</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white leading-tight">
                {isBengali
                  ? 'সজনেখালি ওয়াচ টাওয়ার'
                  : 'Sajnekhali Watch Tower & Conservation Complex'}
              </h2>
              <p className="text-amber-200 text-sm sm:text-base font-semibold">
                {isBengali
                  ? 'সুন্দরবনের প্রকৃতি, পাখি ও বন্যপ্রাণী দেখার জনপ্রিয় পর্যটনকেন্দ্র'
                  : 'The prime hub for mangrove interpretation, avifauna observation, and delta biodiversity'}
              </p>
            </div>

            <p className="text-slate-100 text-xs sm:text-sm leading-relaxed">
              {isBengali
                ? 'অসংখ্য নদী, সরু খাঁড়ি, লবণাক্ত জলাভূমি এবং ঘন ম্যানগ্রোভ অরণ্য নিয়ে গড়ে ওঠা সুন্দরবনের পর্যটন মানচিত্রে Sajnekhali Watch Tower একটি প্রধান নাম। এটি শুধু একটি উঁচু পর্যবেক্ষণ টাওয়ার নয়—এখানে রয়েছে ম্যানগ্রোভ ইন্টারপ্রিটেশন সেন্টার, মিষ্টিপানির পুকুর, কচ্ছপ ও কুমির সংরক্ষণ প্রদর্শনী এবং শতবর্ষী বনবিবি মন্দির।'
                : 'Sajnekhali is far more than a viewing platform. It integrates a world-class Mangrove Interpretation Centre, wildlife-supporting sweet-water ponds, Batagur baska turtle enclosures, and historic folk heritage.'}
            </p>

            {/* Quick Feature Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {[
                { icon: Trees, textBn: 'ম্যানগ্রোভ ইন্টারপ্রিটেশন সেন্টার', textEn: 'Mangrove Interpretation Centre' },
                { icon: Waves, textBn: 'বন্যপ্রাণীর মিঠাপানির পুকুর', textEn: 'Fresh Sweet-Water Pond' },
                { icon: Fish, textBn: 'কচ্ছপ ও কুমির সংরক্ষণ প্রদর্শনী', textEn: 'Turtle & Crocodile Enclosure' },
                { icon: Building, textBn: 'ঐতিহাসিক বনবিবি মন্দির ও লোকবিশ্বাস', textEn: 'Historic Bonbibi Folk Temple' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-slate-100 font-medium">
                    <Icon className="w-4 h-4 text-amber-300 shrink-0" />
                    <span className="truncate">{isBengali ? item.textBn : item.textEn}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('experience-sajnekhali')}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105 active:scale-95"
              >
                <span>{isBengali ? 'সম্পূর্ণ সজনেখালি অভিজ্ঞতা পড়ুন' : 'Read Full Sajnekhali Guide'}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={() => onNavigate('places')}
                className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
              >
                {isBengali ? 'অন্যান্য দর্শনীয় স্থান' : 'Explore All Places'}
              </button>
            </div>
          </div>

          {/* Right Column: Visual Card with Responsible Badge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
                alt="Sajnekhali Watch Tower Complex"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isBengali ? 'UNESCO ম্যানগ্রোভ বাস্তুতন্ত্র' : 'UNESCO Mangrove Ecology'}</span>
                </div>
                <h3 className="text-lg font-bold font-heading">
                  {isBengali ? 'পাখি, ম্যানগ্রোভ ও জীববৈচিত্র্য' : 'Avifauna, Mangroves & Sweet Water'}
                </h3>
              </div>
            </div>

            {/* Ethical Wildlife Observation Callout */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-amber-100/90 leading-relaxed flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p>
                {isBengali
                  ? 'সুন্দরবন কোনো চিড়িয়াখানা নয়। এখানকার বন্যপ্রাণীরা সম্পূর্ণ স্বাধীন। সজনেখালির সৌন্দর্য হলো দূর থেকে জীববৈচিত্র্যকে সম্মান করে পর্যবেক্ষণ করা।'
                  : 'Sundarban is a free tidal ecosystem. Observe wildlife responsibly with silence and conservation ethics.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
