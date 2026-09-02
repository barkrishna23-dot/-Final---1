import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Binoculars,
  Trees,
  Fish,
  Bird,
  ShieldCheck,
  Building,
  AlertTriangle,
  CheckCircle2,
  Compass,
  ArrowRight,
  Info,
  Waves,
  Eye,
  Camera,
  Layers,
  Heart,
  Sparkles
} from 'lucide-react';

interface SajnekhaliPageProps {
  onNavigate: (route: string) => void;
}

export const SajnekhaliPage: React.FC<SajnekhaliPageProps> = ({ onNavigate }) => {
  const { isBengali } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  const sections = [
    { id: 0, titleBn: '১. ভূমিকা ও পরিচিতি', titleEn: '1. Overview & Gateway', icon: Binoculars },
    { id: 1, titleBn: '২. সজনেখালির গুরুত্ব', titleEn: '2. Ecotourism Hub', icon: ShieldCheck },
    { id: 2, titleBn: '৩. ওয়াচ টাওয়ার অভিজ্ঞতা', titleEn: '3. Watch Tower Panorama', icon: Eye },
    { id: 3, titleBn: '৪. মিঠাপানির পুকুর', titleEn: '4. Sweet-Water Pond', icon: Waves },
    { id: 4, titleBn: '৫. ম্যানগ্রোভ সেন্টার', titleEn: '5. Interpretation Centre', icon: Trees },
    { id: 5, titleBn: '৬. কচ্ছপ ও কুমির পুকুর', titleEn: '6. Turtle & Crocodile', icon: Fish },
    { id: 6, titleBn: '৭. বনবিবি মন্দির', titleEn: '7. Bonbibi Temple', icon: Building },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 🌟 1. Header Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#064E3B] via-[#0B5E45] to-[#043327] text-white p-8 sm:p-12 border-2 border-amber-400/40 shadow-2xl">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Binoculars className="w-4 h-4 text-amber-300" />
            <span>{isBengali ? 'সুন্দরবন টাইগার রিজার্ভ প্রধান পর্যটন কমপ্লেক্স' : 'Sundarban Tiger Reserve Primary Hub'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
            {isBengali ? 'সজনেখালি ওয়াচ টাওয়ার' : 'Sajnekhali Watch Tower & Ecotourism Complex'}
          </h1>
          
          <p className="text-amber-200/90 text-sm sm:text-base font-medium">
            {isBengali
              ? 'সুন্দরবনের প্রকৃতি, পাখি ও বন্যপ্রাণী দেখার জনপ্রিয় পর্যটনকেন্দ্র — ম্যানগ্রোভ ইন্টারপ্রিটেশন সেন্টার, মিষ্টিপানির জলাশয়, কচ্ছপ-কুমির সংরক্ষণ এবং লোকসংস্কৃতির অনন্য মিলনস্থল।'
              : 'The premier wildlife observation, mangrove interpretation, and ecological conservation destination in the Sundarbans.'}
          </p>
        </div>

        {/* Decorative background watermark */}
        <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10 pointer-events-none">
          <Trees className="w-96 h-96 text-white" />
        </div>
      </div>

      {/* 🌟 2. Ethical Wildlife Notice Banner */}
      <div className="bg-emerald-50/95 border-2 border-emerald-400/80 rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-600 text-white rounded-2xl shrink-0 mt-1 shadow-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-200 text-emerald-950 text-xs font-black uppercase tracking-wider">
                {isBengali ? 'দায়িত্বশীল বন্যপ্রাণী পর্যবেক্ষণ' : 'Responsible Wildlife Observation'}
              </span>
              <h3 className="text-xl font-bold font-heading text-emerald-950">
                {isBengali ? 'প্রাকৃতিক পরিবেশ ও বন্যপ্রাণী সম্মান নীতি' : 'Natural Ecosystem & Ethics Notice'}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-emerald-900 leading-relaxed font-medium">
              {isBengali
                ? 'সুন্দরবন কোনো চিড়িয়াখানা বা কৃত্রিম সাফারি পার্ক নয়। এখানে বন্যপ্রাণীরা সম্পূর্ণ স্বাধীনভাবে তাদের প্রাকৃতিক পরিবেশে বিচরণ করে। তাই Royal Bengal Tiger, কুমির, হরিণ অথবা অন্য কোনো নির্দিষ্ট প্রাণী দেখা নিশ্চিত করা যায় না। সজনেখালির প্রকৃত আকর্ষণ হলো—সুন্দরবনের জীববৈচিত্র্যকে সম্মান করে দূর থেকে পর্যবেক্ষণ করা এবং ম্যানগ্রোভ বাস্তুতন্ত্র সম্পর্কে জানা।'
                : 'Sundarbans is an authentic wild tidal wilderness, not an artificial zoo or safari park. Wildlife roams completely free. Sighting Royal Bengal Tigers or specific fauna cannot be guaranteed. The true essence of Sajnekhali is respecting wildlife and discovering the intricate mangrove ecology.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
              <div className="p-3 bg-white/90 rounded-xl border border-emerald-300 text-emerald-950 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-emerald-900 font-heading">সঠিক উপস্থাপন:</strong>
                  <span>“Sundarban Nature Interpretation and Wildlife Observation Destination”</span>
                </div>
              </div>

              <div className="p-3 bg-white/90 rounded-xl border border-amber-300 text-amber-950 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-amber-900 font-heading">প্রাকৃতিক সত্যতা:</strong>
                  <span>অনুকূল আবহাওয়া ও শান্ত পরিবেশে প্রাণীদের উপস্থিতি পর্যবেক্ষণের চমৎকার সম্ভাবনা তৈরি হয়।</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🌟 3. Step-by-Step Interactive Navigation Tabs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-heading text-[#064E3B]">
            {isBengali ? 'ধাপে ধাপে সজনেখালি অভিজ্ঞতা অন্বেষণ করুন' : 'Explore Sajnekhali Step-by-Step'}
          </h2>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
            {isBengali ? 'যেকোনো বিষয়ে ক্লিক করে বিস্তারিত জানুন' : 'Click on any topic to explore details'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {sections.map((sec) => {
            const IconComponent = sec.icon;
            const isSelected = activeTab === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`flex items-center gap-2 p-3 rounded-2xl text-left font-bold text-xs transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#064E3B] text-white border-amber-400 shadow-md scale-[1.02]'
                    : 'bg-white/80 hover:bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                }`}
              >
                <IconComponent className={`w-4 h-4 shrink-0 ${isSelected ? 'text-amber-300' : 'text-emerald-700'}`} />
                <span className="truncate">{isBengali ? sec.titleBn : sec.titleEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 🌟 4. Main Step Content Containers */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/60 shadow-xl space-y-10">

        {/* SECTION 1: ভূমিকা ও পরিচিতি */}
        {(activeTab === 0 || activeTab === 0) && (
          <section className="space-y-4 border-b border-slate-200 pb-8 last:border-0 last:pb-0">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0E7490] uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-900">ধাপ ১</span>
              <span>{isBengali ? 'পরিচিতি ও ভৌগোলিক গুরুত্ব' : 'Overview & Geographic Gateway'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
              {isBengali
                ? 'সজনেখালি ওয়াচ টাওয়ার: সুন্দরবনের প্রকৃতি, পাখি ও বন্যপ্রাণী দেখার কেন্দ্র'
                : 'Sajnekhali: The Premier Gateway to Mangroves and Wildlife'}
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {isBengali
                ? 'অসংখ্য নদী, সরু খাঁড়ি, লবণাক্ত জলাভূমি এবং ঘন ম্যানগ্রোভ অরণ্য নিয়ে গড়ে ওঠা সুন্দরবনের পর্যটন মানচিত্রে Sajnekhali Watch Tower বা সজনেখালি ওয়াচ টাওয়ার একটি পরিচিত নাম। প্রথমবার সুন্দরবন ভ্রমণে আসা পর্যটকদের itinerary-তে সাধারণত যে কয়েকটি জায়গা গুরুত্ব পায়, সজনেখালি সেগুলোর অন্যতম।'
                : 'Amidst countless winding rivers, narrow tidal creeks, saline wetlands, and dense mangrove forests, Sajnekhali Watch Tower stands as the most iconic gateway in the Sundarbans tourism map.'}
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {isBengali
                ? 'এটি শুধু একটি উঁচু পর্যবেক্ষণ টাওয়ার নয়। সজনেখালি পর্যটন কমপ্লেক্সের মধ্যে watch tower ছাড়াও ম্যানগ্রোভ ও সুন্দরবনের জীববৈচিত্র্য সম্পর্কে জানার ব্যবস্থা, মিঠাপানির পুকুর এবং কচ্ছপ ও কুমির সংরক্ষণ-সংক্রান্ত প্রদর্শনী রয়েছে। Sundarban Tiger Reserve-এর সরকারি tourism page-এ Mangrove Interpretation Centre, turtle and crocodile pond, watch tower এবং sweet-water pond-কে সজনেখালির প্রধান আকর্ষণ হিসেবে উল্লেখ করা হয়েছে।'
                : 'Sajnekhali is an extensive educational and ecological campus housing the Mangrove Interpretation Centre, fresh sweet-water watering ponds, Batagur baska turtle pond, and estuarine crocodile conservation enclosures as highlighted on the official Sundarban Tiger Reserve portals.'}
            </p>

            <div className="p-5 bg-cyan-50/80 rounded-2xl border border-cyan-200 space-y-2 text-sm text-cyan-950">
              <strong className="block font-heading text-cyan-900 text-base">
                {isBengali ? 'নৌযাত্রা থেকেই প্রকৃতি পর্যবেক্ষণ শুরু:' : 'Nature Observation Begins During the River Voyage:'}
              </strong>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {isBengali
                  ? 'সুন্দরবনের মূল সৌন্দর্য কোনো একটি স্থাপনার মধ্যে সীমাবদ্ধ নয়। সজনেখালি যাওয়ার নৌযাত্রাটিও ভ্রমণের গুরুত্বপূর্ণ অংশ। নদীর দুই পাশে ম্যানগ্রোভ, কাদামাটির চর, জোয়ার-ভাটায় পরিবর্তিত নদীতীর এবং মাঝে মাঝে দেখা দেওয়া পাখি—সব মিলিয়ে গন্তব্যে পৌঁছানোর আগেই রোমাঞ্চকর প্রকৃতি পর্যবেক্ষণ শুরু হয়ে যায়।'
                  : 'The boat cruise towards Sajnekhali through wide tidal waterways and mudflats is an integral safari experience, showcasing mudskippers, kingfishers, and ever-changing estuarine banks.'}
              </p>
            </div>
          </section>
        )}

        {/* SECTION 2: সজনেখালির বিশেষ গুরুত্ব */}
        {(activeTab === 0 || activeTab === 1) && (
          <section className="space-y-4 border-b border-slate-200 pb-8 last:border-0 last:pb-0">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900">ধাপ ২</span>
              <span>{isBengali ? 'সজনেখালির বিশেষ গুরুত্ব ও জনপ্রিয়তার কারণ' : 'Ecotourism Significance & Key Highlights'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
              {isBengali
                ? 'ইকো-ট্যুরিজম ও ইন্টারপ্রিটেশন হাব হিসেবে সজনেখালি'
                : 'Sajnekhali as an Ecotourism & Interpretation Zone'}
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {isBengali
                ? 'সজনেখালি সুন্দরবনের একটি গুরুত্বপূর্ণ ecotourism ও interpretation zone। অনেক tourist vessel এই অঞ্চলের অনুমোদিত পথ অনুসরণ করে যাতায়াত করে এবং সজনেখালি পর্যটন কমপ্লেক্সে কিছু সময়ের জন্য থামে। West Bengal Tourism-এর সরকারি পেজে Sajnekhali ও Sudhanyakhali Watch Tower-কে এই অঞ্চলের প্রধান আকর্ষণের মধ্যে রাখা হয়েছে। Sonakhali, Sajnekhali, Sudhanyakhali, Dobanki, Burirdabri ও Jhingekhali-সহ বিভিন্ন জায়গা নিয়ে পর্যটন itinerary পরিচালিত হয়।'
                : 'Sajnekhali is a vital eco-tourism node connected directly to major safari routes including Sudhanyakhali, Dobanki, and Burirdabri under West Bengal Tourism and Forest Department itineraries.'}
            </p>

            <div className="space-y-3">
              <h4 className="font-bold text-base font-heading text-slate-900">
                {isBengali ? 'সজনেখালির জনপ্রিয়তার প্রধান কারণসমূহ:' : 'Key Reasons for Sajnekhali’s Enduring Popularity:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { textBn: 'নৌপথে পরিচিত tourist circuit-এর কেন্দ্রবিন্দু', textEn: 'Central hub on approved river safari circuits' },
                  { textBn: 'watch tower থেকে বন ও জলাশয় পর্যবেক্ষণ', textEn: 'Elevated panorama over sweet-water pond & canopy' },
                  { textBn: 'Mangrove Interpretation Centre', textEn: 'Educational Mangrove Interpretation Centre' },
                  { textBn: 'মিঠাপানির পুকুর (Sweet-water pond)', textEn: 'Fresh sweet-water watering hole for wildlife' },
                  { textBn: 'Turtle এবং crocodile pond সংরক্ষণ প্রদর্শনী', textEn: 'Batagur turtle & estuarine crocodile conservation' },
                  { textBn: 'ঐতিহাসিক বনবিবি মন্দির ও লোকবিশ্বাস', textEn: 'Historic Bonbibi Temple & living folklore' },
                  { textBn: 'Birdwatching ও জলচর পাখির বৈচিত্র্য', textEn: 'Rich avifauna & kingfisher birdwatching' },
                  { textBn: 'পরিবার ও শিশুদের জন্য শিক্ষামূলক পরিবেশ', textEn: 'Ideal educational environment for families & students' },
                  { textBn: 'অন্যান্য ওয়াচ টাওয়ারের সাথে সহজ সংযুক্তি', textEn: 'Seamless connectivity to Sudhanyakhali & Dobanki' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-800">{isBengali ? item.textBn : item.textEn}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: ওয়াচ টাওয়ার থেকে কী দেখা যায়? */}
        {(activeTab === 0 || activeTab === 2) && (
          <section className="space-y-4 border-b border-slate-200 pb-8 last:border-0 last:pb-0">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">ধাপ ৩</span>
              <span>{isBengali ? 'Sajnekhali Watch Tower Experience' : 'Watch Tower Observation Experience'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
              {isBengali
                ? 'ওয়াচ টাওয়ারের ওপর থেকে কী কী দেখা যায়?'
                : 'Panoramic Sightings from the Elevated Canopy Tower'}
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {isBengali
                ? 'সজনেখালি ওয়াচ টাওয়ারের ওপর থেকে আশপাশের বনভূমি, মিঠাপানির পুকুর, খোলা চর এবং জলাভূমি পর্যবেক্ষণ করা যায়। গাছের আড়ালে ঢাকা নিচু ভূমি নৌকা থেকে সবসময় স্পষ্ট দেখা যায় না। উঁচু tower সেই পরিবেশকে একটু বিস্তৃতভাবে দেখার সুযোগ দেয়।'
                : 'From the vantage of Sajnekhali Watch Tower, visitors enjoy panoramic views of surrounding mangrove canopies, the sweet-water pond, open sandbars, and tidal wetlands that are otherwise hidden from boats.'}
            </p>

            <div className="p-4 bg-amber-50/90 rounded-2xl border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed space-y-1">
              <strong className="block font-heading text-amber-900">
                {isBengali ? 'ধারণক্ষমতা ও নিয়ম সংক্রান্ত তথ্য (Incredible India):' : 'Official Capacity & Safety Guidelines (Incredible India):'}
              </strong>
              <p>
                {isBengali
                  ? 'ভারত সরকারের Incredible India-এর পর্যটন বিবরণে watch tower-এর ধারণক্ষমতা প্রায় ২৫ জন উল্লেখ রয়েছে। তবে স্থানীয় পরিচালনা, বন বিভাগের নিয়ম ও সংস্কার অনুযায়ী একসঙ্গে প্রবেশকারীর সংখ্যা পরিবর্তিত হতে পারে। তাই নিয়মানুযায়ী শান্তভাবে টাওয়ারে ওঠা উচিত।'
                  : 'Official government publications note an approximate capacity of around 25 visitors at a time, though exact numbers may vary per active Forest Department regulations.'}
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="font-bold text-sm font-heading text-slate-900">
                {isBengali ? 'সতর্ক পর্যবেক্ষণে যা যা দেখা যেতে পারে:' : 'Potential Wildlife & Landscape Observations:'}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                {[
                  'মিঠাপানির পুকুর ও চারপাশ',
                  'ম্যানগ্রোভ বনের বিস্তার',
                  'কাদামাটির চর ও জোয়ার-ভাটা',
                  'জলচর ও বনচর পাখির ঝাঁক',
                  'বনের প্রান্তভাগে চিত্রা হরিণ',
                  'বুনো শূকরের বিচরণ',
                  'নোনা জলের গুইসাপ',
                  'নদীর বিপরীত তীরের দৃশ্য',
                ].map((obs, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">
                    {obs}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: মিঠাপানির পুকুর কেন গুরুত্বপূর্ণ? */}
        {(activeTab === 0 || activeTab === 3) && (
          <section className="space-y-4 border-b border-slate-200 pb-8 last:border-0 last:pb-0">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded-full bg-teal-100 text-teal-900">ধাপ ৪</span>
              <span>{isBengali ? 'মিঠাপানির পুকুর কেন গুরুত্বপূর্ণ?' : 'Significance of the Sweet-Water Pond'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
              {isBengali
                ? 'লবণাক্ত সুন্দরবনে বন্যপ্রাণীদের জীবনরেখা: Sweet-Water Pond'
                : 'Life-Sustaining Fresh Water in a Saline Estuary'}
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {isBengali
                ? 'সুন্দরবনের অধিকাংশ নদী ও খাঁড়ির জল লবণাক্ত অথবা অল্প-লবণাক্ত। এমন একটি অঞ্চলে বন বিভাগ দ্বারা নিয়ন্ত্রিত মিঠাপানির জলাধার বিভিন্ন প্রাণীর জন্য অত্যন্ত গুরুত্বপূর্ণ। শান্ত পরিবেশ, কম শব্দ এবং অনুকূল প্রাকৃতিক পরিস্থিতিতে প্রাণীরা এই জলাধারের আশপাশে জল পান করতে আসে।'
                : 'In a marine tidal ecosystem where nearly all rivers and creeks are saline, man-made and forest-maintained sweet-water watering holes act as vital life-support systems for terrestrial fauna.'}
            </p>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <strong className="block text-slate-900 font-heading text-sm">
                {isBengali ? 'প্রাণীর উপস্থিতি যেসব প্রাকৃতিক নিয়ামকের ওপর নির্ভর করে:' : 'Factors Influencing Wildlife Movement at Watering Holes:'}
              </strong>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-700">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">• দিনের সময় ও আলো</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">• জোয়ার ও ভাটার অবস্থা</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">• আবহাওয়া ও তাপমাত্রা</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">• পর্যটকদের নীরবতা</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">• নৌযানের চলাচল</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">• প্রাকৃতিক খাদ্যলভ্যতা</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">• প্রাণীদের নিজস্ব গতিপথ</div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">• বাতাসের আর্দ্রতা ও দিক</div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 5: Mangrove Interpretation Centre */}
        {(activeTab === 0 || activeTab === 4) && (
          <section className="space-y-4 border-b border-slate-200 pb-8 last:border-0 last:pb-0">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900">ধাপ ৫</span>
              <span>{isBengali ? 'Mangrove Interpretation Centre' : 'Mangrove Interpretation & UNESCO Heritage'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
              {isBengali
                ? 'ম্যানগ্রোভ ইন্টারপ্রিটেশন সেন্টার: পরিবেশ শিক্ষার শ্রেষ্ঠ ক্ষেত্র'
                : 'Mangrove Ecology, Adaptation & World Heritage Value'}
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {isBengali
                ? 'সজনেখালির সবচেয়ে মূল্যবান শিক্ষামূলক আকর্ষণগুলোর একটি হলো Mangrove Interpretation Centre। সুন্দরবনের ম্যানগ্রোভ কীভাবে লবণাক্ত জল, কাদামাটি, শ্বাসমূল (pneumatophores), জোয়ার-ভাটা এবং নদীনির্ভর প্রতিকূল পরিবেশে টিকে থাকে—এসব বিষয়ে পর্যটক ও শিক্ষার্থীদের বিস্তারিত ধারণা দেয় এই কেন্দ্র।'
                : 'The Mangrove Interpretation Centre at Sajnekhali provides comprehensive visual and scientific exhibits detailing how halophytic mangrove species adapt to saline water, tidal fluctuations, and hypoxia via breathing roots (pneumatophores).'}
            </p>

            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2 text-xs sm:text-sm text-emerald-950">
              <div className="flex items-center gap-2 font-bold text-emerald-900 font-heading text-sm sm:text-base">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>UNESCO World Heritage (1987) ও জীববৈচিত্র্য:</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {isBengali
                  ? 'UNESCO সুন্দরবনকে পৃথিবীর বৃহত্তম ম্যানগ্রোভ এলাকার অংশ এবং অত্যন্ত উৎপাদনশীল প্রাকৃতিক ecosystem হিসেবে স্বীকৃতি দিয়েছে। ১৯৮৭ সালে ভারতীয় Sundarbans National Park বিশ্ব ঐতিহ্য হিসেবে অন্তর্ভুক্ত হয়, যা রয়েল বেঙ্গল টাইগার, জলজ স্তন্যপায়ী, পাখি ও সরীসৃপের অপরিহার্য বাসস্থান।'
                  : 'Designated a UNESCO World Heritage Site in 1987, the Sundarbans represents the largest contiguous mangrove delta on Earth, supporting critical populations of Royal Bengal Tigers, cetaceans, and avifauna.'}
              </p>
            </div>
          </section>
        )}

        {/* SECTION 6: Turtle and Crocodile Pond */}
        {(activeTab === 0 || activeTab === 5) && (
          <section className="space-y-4 border-b border-slate-200 pb-8 last:border-0 last:pb-0">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-900">ধাপ ৬</span>
              <span>{isBengali ? 'Turtle and Crocodile Pond' : 'Estuarine Crocodile & Batagur Turtle Pond'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
              {isBengali
                ? 'কচ্ছপ ও কুমির সংরক্ষণ পুকুর এবং দায়িত্বশীল পর্যটন'
                : 'Wetland Conservation & Responsible Visitor Code'}
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {isBengali
                ? 'সরকারি Sundarban Tiger Reserve tourism page-এ সজনেখালির আকর্ষণের মধ্যে turtle pond এবং crocodile pond-এর উল্লেখ রয়েছে। এগুলো সুন্দরবনের প্রাণী সংরক্ষণ এবং ecosystem সম্পর্কে পর্যটকদের বাস্তব ধারণা দেওয়ার জন্য অত্যন্ত গুরুত্বপূর্ণ।'
                : 'Maintained directly under forest conservation protocols, these enclosures educate visitors on the life-cycles of the critically endangered Batagur baska river terrapin and salt-water crocodiles.'}
            </p>

            <div className="p-5 bg-rose-50 rounded-2xl border border-rose-200 space-y-3">
              <strong className="block text-rose-950 font-heading text-sm">
                {isBengali ? 'সংরক্ষণ কেন্দ্রে অবশ্য পালনীয় আচরণবিধি:' : 'Mandatory Conservation Etiquette:'}
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-rose-900 font-medium">
                <div>• কোনো প্রাণীকে খাবার দেওয়া সম্পূর্ণ নিষিদ্ধ</div>
                <div>• পানিতে কোনো প্লাস্টিক বা বস্তু ফেলবেন না</div>
                <div>• সেফটি রেলিং বা সীমানা অতিক্রম করবেন না</div>
                <div>• উচ্চৈঃস্বরে শব্দ করা থেকে বিরত থাকুন</div>
                <div>• ফ্ল্যাশ ফটোগ্রাফি নিষিদ্ধ থাকলে তা মেনে চলুন</div>
                <div>• শিশুদের সবসময় অভিভাবকদের সাথে রাখুন</div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 7: বনবিবি মন্দির */}
        {(activeTab === 0 || activeTab === 6) && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-800 uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-900">ধাপ ৭</span>
              <span>{isBengali ? 'বনবিবি মন্দির ও সুন্দরবনের লোকবিশ্বাস' : 'Bonbibi Temple & Living Folk Heritage'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
              {isBengali
                ? 'বনবিবি মন্দির: মানুষ ও অরণ্যের সহাবস্থানের সাংস্কৃতিক প্রতীক'
                : 'Bonbibi Temple: The Cultural Soul of the Sundarbans'}
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {isBengali
                ? 'সজনেখালি পর্যটন কমপ্লেক্সের আরেকটি উল্লেখযোগ্য আকর্ষণ হলো Bonbibi Temple বা বনবিবি মন্দির। সুন্দরবনের মানুষের লোকবিশ্বাস, বননির্ভর জীবন এবং সাংস্কৃতিক পরিচয়ের সঙ্গে বনবিবির নাম গভীরভাবে যুক্ত। মাছ ধরা, কাঁকড়া ও মধু সংগ্রহের মতো ঝুঁকিপূর্ণ জীবিকায় বনবিবিকে বনের রক্ষাকর্ত্রী হিসেবে মান্য করার শতবর্ষী লোকাচার গড়ে উঠেছে।'
                : 'The Bonbibi Temple at Sajnekhali reflects the profound syncretic folk traditions of the delta, where honey collectors (mowals), fishermen, and woodcutters seek protection and maintain an unwritten moral contract with the forest.'}
            </p>

            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-xs sm:text-sm text-purple-950 leading-relaxed space-y-2">
              <strong className="block font-heading text-purple-900">
                {isBengali ? 'মন্দির প্রাঙ্গণে করণীয়:' : 'Cultural Respect Guidelines:'}
              </strong>
              <p>
                {isBengali
                  ? 'মন্দিরে শান্ত ও সম্মানজনক আচরণ বজায় রাখুন, স্থানীয় ধর্মীয় রীতির প্রতি শ্রদ্ধাশীল থাকুন এবং চত্বরে কোনো আবর্জনা ফেলবেন না। সুন্দরবনের এই ঐতিহ্য নিছক কোনো গল্প নয়—এটি উপকূলীয় মানুষের শতবর্ষের জীবনালেখ্য।'
                  : 'Maintain serene decorum, respect traditional rituals, and keep the sanctum spotlessly clean.'}
              </p>
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
