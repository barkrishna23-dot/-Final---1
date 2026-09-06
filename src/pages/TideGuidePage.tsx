import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import tideGuideHeroImage from '../assets/images/regenerated_image_1788721841851.jpg';
import {
  Waves,
  Clock,
  Compass,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Camera,
  Bird,
  Fish,
  Trees,
  HelpCircle,
  Info,
  Calendar,
  ArrowLeft,
  Sparkles,
  BookOpen,
  Sun,
  Sunrise,
  Sunset,
  ExternalLink,
  Binoculars,
  ChevronRight,
  ShieldAlert,
  Ship,
  Droplets
} from 'lucide-react';

interface TideGuidePageProps {
  onNavigate: (route: string) => void;
}

export const TideGuidePage: React.FC<TideGuidePageProps> = ({ onNavigate }) => {
  const { language, isBengali } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('all');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* 🧭 Back Navigation & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#064E3B] hover:text-[#08634b] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isBengali ? 'ব্লগ ও নির্দেশিকা তালিকায় ফিরুন' : 'Back to Guides & Blog'}</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
          <span>{isBengali ? 'হোম' : 'Home'}</span>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span>{isBengali ? 'সাফারি বিজ্ঞান' : 'Safari Science'}</span>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-[#064E3B] font-bold">{isBengali ? 'জোয়ার-ভাটা নির্দেশিকা' : 'Tide Guide'}</span>
        </div>
      </div>

      {/* 🌊 Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#064E3B] via-[#094837] to-[#04291F] text-white p-8 sm:p-12 border-2 border-amber-400/40 shadow-xl">
        <img
          src={tideGuideHeroImage}
          alt="Sundarban Tides and Mangrove Creek Safari"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
        />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Waves className="w-3.5 h-3.5" />
              <span>{isBengali ? 'টাইডাল ম্যানগ্রোভ বাস্তুতন্ত্র ও ফিল্ড গাইড' : 'Tidal Mangrove Field Guide'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-medium">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>{isBengali ? '৮ মিনিট পাঠ' : '8 min read'}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
            {isBengali
              ? 'সুন্দরবনের জোয়ার-ভাটা: বন্যপ্রাণী ও খাঁড়ি সাফারির সেরা সময় কখন?'
              : 'Sundarban Tides: When is the Best Time for Wildlife & Creek Safari?'}
          </h1>

          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'সুন্দরবনের আসল সৌন্দর্য বুঝতে হলে প্রথমে তার জোয়ার-ভাটার ছন্দ বুঝতে হবে। এটি স্থির কোনো অরণ্য নয়—নদী ও সমুদ্রের প্রভাবে দিনে বারবার বদলে যাওয়া একটি জীবন্ত tidal mangrove ecosystem। কখনো নদীর জল বেড়ে ম্যানগ্রোভের গভীরে প্রবেশ করে, আবার ভাটায় জল সরে গিয়ে নদীতীরের কাদামাটির চর, শ্বাসমূল এবং বন্যপ্রাণীর চলাচলের সম্ভাব্য চিহ্ন প্রকাশ করে।'
              : 'To fathom the authentic wonder of the Sundarbans, one must first comprehend the rhythm of its tides. This is no static forest, but a dynamic, living tidal mangrove ecosystem reshaped daily by river and sea.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-amber-200/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{isBengali ? 'গবেষণা সূত্র: World Bank, UNESCO ও Sundarban Tiger Reserve' : 'Grounded in World Bank, UNESCO & STR Research'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* 🏛️ Scientific Context / Research Citations Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Citation 1: World Bank */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-stone-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-100 text-blue-800 font-bold text-xs">
              World Bank
            </span>
            <span className="text-xs font-bold text-stone-600 uppercase tracking-wide">
              {isBengali ? 'ল্যান্ডস্কেপ নারেটিভ রিপোর্ট' : 'Landscape Narrative Report'}
            </span>
          </div>
          <p className="text-sm text-stone-700 leading-relaxed">
            {isBengali
              ? 'World Bank-এর Sundarban Landscape Narrative অনুযায়ী সুন্দরবনে সাধারণত semi-diurnal tide দেখা যায়—অর্থাৎ অধিকাংশ দিনে প্রায় দুইবার উচ্চ জোয়ার ও দুইবার নিম্ন জোয়ার হয়। তবে প্রতিদিন এবং স্থানভেদে জোয়ারের সঠিক সময় ও উচ্চতা বদলে যায়।'
              : 'According to the World Bank Sundarban Landscape Narrative, the delta experiences semi-diurnal tides—meaning most lunar days witness approximately two high tides and two low tides, varying in amplitude across regions.'}
          </p>
          <div className="text-[11px] font-bold text-stone-500 pt-1 border-t border-stone-200">
            World Bank — Sundarban Joint Landscape Narrative
          </div>
        </div>

        {/* Citation 2: UNESCO */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-stone-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs">
              UNESCO
            </span>
            <span className="text-xs font-bold text-stone-600 uppercase tracking-wide">
              {isBengali ? 'ওয়ার্ল্ড হেরিটেজ নথিপত্র' : 'World Heritage Archives'}
            </span>
          </div>
          <p className="text-sm text-stone-700 leading-relaxed">
            {isBengali
              ? 'UNESCO-ও সুন্দরবনকে tidal river, creek, canal, mudflat এবং ছোট ম্যানগ্রোভ দ্বীপের জটিল প্রাকৃতিক ব্যবস্থা হিসেবে বর্ণনা করেছে। ভারতীয় Sundarbans National Park-এর প্রায় ৪৫ শতাংশ tidal wetlands—নদী, খাঁড়ি, খাল ও মোহনা।'
              : 'UNESCO designates the Sundarbans as a complex interconnected network of tidal rivers, creeks, canals, mudflats, and mangrove islands. Approximately 45% of the Indian Sundarbans National Park comprises tidal wetlands.'}
          </p>
          <div className="text-[11px] font-bold text-stone-500 pt-1 border-t border-stone-200">
            UNESCO — Sundarbans National Park
          </div>
        </div>
      </div>

      {/* 🎯 Section 1: সরাসরি উত্তর: কোন সময় সবচেয়ে ভালো? */}
      <section className="bg-gradient-to-br from-amber-50/70 via-white to-emerald-50/50 rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#064E3B] text-amber-300 shadow-xs">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#064E3B] uppercase tracking-wider block">
              {isBengali ? 'ফিল্ড এক্সপার্টদের সুনির্দিষ্ট মতামত' : 'Field Expert Definitive Analysis'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              {isBengali ? 'সরাসরি উত্তর: কোন সময় সবচেয়ে ভালো?' : 'Direct Answer: When is the Best Safari Timing?'}
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-stone-800 text-sm sm:text-base leading-relaxed">
          <p className="font-semibold text-slate-900 bg-amber-100/60 p-4 rounded-2xl border border-amber-200">
            {isBengali
              ? 'সুন্দরবনে প্রতিদিন প্রযোজ্য এমন কোনো স্থায়ী “সেরা ঘড়ির সময়” নেই। কারণ আজ সকাল ৮টায় যে low tide হয়েছে, পরের দিন ঠিক একই সময়ে হবে না; আবার Godkhali, Sajnekhali, Pirkhali বা Matla River-এর tide timing-এও কিছু পার্থক্য থাকতে পারে।'
              : 'There is no fixed daily "best clock hour" in the Sundarbans. A low tide occurring at 8:00 AM today will shift the next day, and timings differ between Godkhali, Sajnekhali, Pirkhali, and the Matla River.'}
          </p>

          <div className="p-5 rounded-2xl bg-emerald-900 text-white space-y-3">
            <h3 className="text-base font-bold text-amber-300 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              <span>{isBengali ? 'বন্যপ্রাণী ও খাঁড়ি অভিজ্ঞতার সোনালী সূত্র:' : 'The Golden Formula for Wildlife & Creek Exploration:'}</span>
            </h3>
            <p className="text-base sm:text-lg font-medium text-emerald-50 leading-snug">
              {isBengali
                ? 'স্থানীয় tide table অনুযায়ী falling tide বা ভাটার দিকে নামতে থাকা জল থেকে low tide এবং পরবর্তী rising tide-এর কিছু অংশ পর্যন্ত safari করা।'
                : 'Plan your safari along the local tide table starting from the falling tide, through peak low tide, into the early rising tide window.'}
            </p>
          </div>

          <p>
            {isBengali
              ? 'সম্ভব হলে এটি সকাল কিংবা বিকেলের নরম আলোর সঙ্গে মেলানো ভালো। এতে একই যাত্রায় জেগে ওঠা mudflat, mangrove roots, পাখির feeding activity এবং পরে জোয়ারে বদলে যাওয়া নদীতীর দেখা যায়।'
              : 'Whenever possible, synchronize this window with gentle morning or late afternoon light. This permits observing exposed mudflats, stilt roots, active bird feeding, followed by the forest edge submerged anew by rising waters.'}
          </p>

          <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 text-xs sm:text-sm flex items-start gap-3">
            <Ship className="w-4 h-4 text-[#064E3B] mt-0.5 shrink-0" />
            <p>
              {isBengali
                ? 'তবে নৌকার route ও departure time সবসময় Forest Department-এর অনুমতি, নদীর অবস্থা, জলস্তর এবং অভিজ্ঞ boat master-এর সিদ্ধান্ত অনুযায়ী হবে।'
                : 'Cruiser routes and departure timings always strictly comply with Forest Department permits, river navigability, tide depths, and certified vessel master decisions.'}
            </p>
          </div>
        </div>
      </section>

      {/* 🦀 Section 2: ভাটার সময় সুন্দরবনের কী পরিবর্তন হয়? */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
            <Droplets className="w-3.5 h-3.5" />
            <span>{isBengali ? 'ভাটার বাস্তুতন্ত্র' : 'Low Tide Dynamics'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'ভাটার সময় সুন্দরবনের কী পরিবর্তন হয়?' : 'What Changes During Low Tide in the Sundarbans?'}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'ভাটার দিকে জল নামতে শুরু করলে নদীতীরের লুকিয়ে থাকা কাদামাটির চর ধীরে ধীরে জেগে ওঠে। তখন mangrove forest-এর নিচের অংশ, অসংখ্য pneumatophore বা শ্বাসমূল এবং কাদায় বসবাসকারী ছোট প্রাণীগুলো পরিষ্কার দেখা যায়।'
              : 'As the water recedes, concealed riverbank mudflats gently surface, uncovering the lower mangrove root networks, innumerable pneumatophores, and bottom-dwelling mud creatures.'}
          </p>
        </div>

        {/* 8-Point Observation Checklist Grid */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">
            {isBengali ? 'ভাটার সময় পর্যবেক্ষণ করা যেতে পারে:' : 'Key Observations During Low Tide:'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              { bn: 'উন্মুক্ত mudflat বা কাদামাটির চর', en: 'Exposed mudflats and riverbank silt beds' },
              { bn: 'সুন্দরী, গরান, গেওয়া ও অন্যান্য ম্যানগ্রোভের শ্বাসমূল (Pneumatophores)', en: 'Pneumatophores of Sundari, Goran, Gewa & mangrove trees' },
              { bn: 'কাঁকড়ার গর্ত ও চলাচলের দাগ (Crab burrows & trails)', en: 'Fiddler crab colonies, mud burrows and feeding tracks' },
              { bn: 'mudskipper বা কাদায় চলাচলকারী ছোট মাছ', en: 'Mudskipper fish navigating moist sediment banks' },
              { bn: 'খাবার খুঁজতে থাকা বক, মাছরাঙা ও shorebird', en: 'Shorebirds, kingfishers, and egrets hunting exposed prey' },
              { bn: 'হরিণ, বুনো শূকর অথবা জলগুইসাপের সম্ভাব্য পায়ের ছাপ', en: 'Spotted deer, wild boar, or monitor lizard pawprints' },
              { bn: 'কাদামাটিতে জমে থাকা জোয়ারের পলল চিহ্ন', en: 'Tidal sediment marks and tidal ripples etched into mud' },
              { bn: 'শীতের অনুকূল পরিস্থিতিতে রোদ পোহানো কুমির (Basking Crocodile)', en: 'Saltwater crocodiles basking under winter sunlight' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 text-sm text-stone-800"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">{isBengali ? item.bn : item.en}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ⚠️ Crucial Ecological Distinctions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-blue-950 text-xs sm:text-sm space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-blue-900">
              <Info className="w-4 h-4 text-blue-700" />
              <span>{isBengali ? 'দৃশ্যমানতার সত্যতা' : 'Visibility vs Presence'}</span>
            </div>
            <p>
              {isBengali
                ? 'Mudflat জেগে ওঠার কারণে ভাটায় বন্যপ্রাণী বা তাদের চিহ্ন দেখা সহজ হতে পারে। কিন্তু ভাটা কোনো প্রাণীকে সেখানে উপস্থিত করায় না—এটি মূলত পর্যটকের দৃশ্যমানতা বাড়ায়।'
                : 'Emerging mudflats increase wildlife visibility for the observer, but low tide does not force wildlife presence—it simply expands the visible shoreline.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>{isBengali ? 'পায়ের ছাপ বা Pugmark সতর্কতা' : 'Pugmark Identification Caution'}</span>
            </div>
            <p>
              {isBengali
                ? 'কাদায় কোনো পায়ের ছাপ দেখলেই সেটিকে tiger pugmark বলা উচিত নয়। জোয়ার, কাদা ও বৃষ্টির কারণে দাগ পরিবর্তিত হতে পারে। পরিচিত forest guide-এর ব্যাখ্যা ছাড়া অনুমানকে নিশ্চিত তথ্য হিসেবে প্রচার করা ঠিক নয়।'
                : 'Never prematurely assume any fresh depression is a tiger pugmark. Water drift, silt, and rain distort tracks. Rely exclusively on certified forest guide interpretations.'}
            </p>
          </div>
        </div>
      </section>

      {/* 🐊 Section 3: কুমির দেখার সঙ্গে ভাটার সম্পর্ক */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
            <Fish className="w-3.5 h-3.5 text-amber-800" />
            <span>{isBengali ? 'সরীসৃপ আচরণ বিজ্ঞান' : 'Reptilian Thermoregulation'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'কুমির দেখার সঙ্গে ভাটার সম্পর্ক' : 'Relationship Between Low Tide & Crocodile Sightings'}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'Estuarine crocodile বা লবণাক্ত জলের কুমির শরীরের তাপমাত্রা নিয়ন্ত্রণের জন্য উপযুক্ত সময়ে জল থেকে উঠে নদীতীর বা mudbank-এ রোদ পোহাতে পারে। ভাটায় কাদামাটির তীর জেগে ওঠায় এমন কুমির চোখে পড়ার সম্ভাবনা বাড়তে পারে।'
              : 'Saltwater crocodiles haul out on sunlit mudbanks to regulate internal body temperature. Exposed muddy banks during low tide expand optimal basking terrain.'}
          </p>
        </div>

        {/* STR 2024 Survey Citation Banner */}
        <div className="bg-[#FAF8F5] p-5 rounded-2xl border-l-4 border-emerald-800 space-y-2">
          <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Sundarban Tiger Reserve — Crocodile Survey 2024</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700">
            {isBengali
              ? 'Sundarban Tiger Reserve-এর ২০২৪ সালের crocodile survey-তে শীতকালে প্রায় ২০–৩০°C পরিবেশের তাপমাত্রা basking-এর জন্য অনুকূল বলে নথিবদ্ধ হয়েছে। একই গবেষণায় সুন্দরবনের নির্দিষ্ট মাপের creek habitat-এর প্রতি কুমিরের পছন্দও বিশ্লেষণ করা হয়েছে। (Sundarban Tiger Reserve—Saltwater Crocodile Estimation Report 2024)'
              : 'Sundarban Tiger Reserve’s 2024 Crocodile Survey identified 20–30°C ambient temperatures in winter as ideal for basking, alongside specific narrow creek habitat preferences.'}
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">
            {isBengali ? 'তবে কুমির দেখা নির্ভর করে:' : 'Crocodile Sightings Depend On Multiple Variables:'}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-medium text-stone-700">
            {[
              { bn: 'ঋতু ও দিনের তাপমাত্রা', en: 'Season & Ambient Temp' },
              { bn: 'রোদ ও মেঘের তারতম্য', en: 'Sunlight & Cloud Cover' },
              { bn: 'mudbank-এর ভৌগোলিক অবস্থান', en: 'Mudbank Slope & Orientation' },
              { bn: 'নৌযানের শব্দ ও নীরবতা', en: 'Boat Noise & Silence' },
              { bn: 'নদীর জলস্রোত', en: 'River Water Currents' },
              { bn: 'প্রাণীটির স্বাভাবিক আচরণ', en: 'Individual Animal Behavior' },
              { bn: 'দূরত্ব ও পর্যবেক্ষণের কোণ', en: 'Viewing Distance & Angle' },
              { bn: 'ম্যানগ্রোভ ছায়ার গভীরতা', en: 'Canopy Shade Coverage' },
            ].map((f, i) => (
              <div key={i} className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-center">
                {isBengali ? f.bn : f.en}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm">
          <span className="font-bold text-rose-900">
            {isBengali ? 'অবাস্তব দাবি বর্জনীয়: ' : 'Reality Check: '}
          </span>
          {isBengali
            ? 'অতিরিক্ত গরমে কুমির রোদ এড়িয়ে জল বা ম্যানগ্রোভের ছায়ায় থাকতে পারে। তাই “ভাটা মানেই কুমির নিশ্চিত”—এমন দাবি সঠিক নয়।'
            : 'During scorching heat, crocodiles submerge or retreat under dense mangrove shade. Therefore, claiming "low tide guarantees crocodiles" is ecologically false.'}
        </div>
      </section>

      {/* 🦌 Section 4: হরিণ কি ভাটার সময় বেশি দেখা যায়? */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
            <Trees className="w-3.5 h-3.5 text-emerald-800" />
            <span>{isBengali ? 'তৃণভোজী প্রাণী আচরণ' : 'Herbivore Ecology'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'হরিণ কি ভাটার সময় বেশি দেখা যায়?' : 'Are Spotted Deer Seen More Often at Low Tide?'}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'Spotted deer বা চিত্রা হরিণ সুন্দরবনের গুরুত্বপূর্ণ herbivore। তারা বনভূমি, উঁচু জমি, ঘাস ও mangrove vegetation-নির্ভর পরিবেশ ব্যবহার করে। কখনো নদীতীর বা forest edge-এ তাদের দেখা যেতে পারে।'
              : 'Spotted deer are the primary herbivores of the Sundarbans, browsing foliage and saline grasses across high ground and along forest edges.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { bn: 'নদীতীরের বেশি অংশ উন্মুক্ত হয়', en: 'More of the sloping shoreline emerges above water' },
            { bn: 'গাছের নিচের ভূমি ও কাদা দেখা যায়', en: 'Ground beneath the mangrove root canopy becomes visible' },
            { bn: 'কাদার ওপর পায়ের ছাপ সহজে বোঝা যায়', en: 'Fresh hoofprints can be detected on soft silt' },
            { bn: 'নৌকা থেকে forest edge-এর দৃশ্যমানতা বাড়ে', en: 'Safari boats enjoy expanded line-of-sight along forest edges' },
          ].map((item, i) => (
            <div key={i} className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl flex items-center gap-2.5 text-xs sm:text-sm text-stone-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{isBengali ? item.bn : item.en}</span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {isBengali
            ? 'কিন্তু জোয়ার একা হরিণের উপস্থিতি নির্ধারণ করে না। খাদ্য, vegetation, salinity, দিনের সময়, মানুষের কোলাহল, নৌকার চলাচল এবং প্রাণীর স্বাভাবিক সতর্কতা—সবকিছু প্রভাব ফেলে।'
            : 'Tides alone never dictate deer presence. Forage availability, canopy vegetation, water salinity, time of day, vessel noise, and animal caution all play critical roles.'}
        </p>

        {/* Standard Website Copy Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-300 text-amber-950 space-y-1">
          <div className="text-xs font-bold text-amber-900 uppercase tracking-wide">
            {isBengali ? 'পর্যটন পোর্টালের সঠিক ও দায়িত্বশীল ভাষা:' : 'Standard Ethical Tourism Disclosure:'}
          </div>
          <p className="text-xs sm:text-sm font-semibold italic text-stone-900">
            {isBengali
              ? '“ভাটার সময় নদীতীর ও mudflat উন্মুক্ত হওয়ায় চিত্রা হরিণ অথবা তাদের চলাচলের চিহ্ন পর্যবেক্ষণের সম্ভাবনা বাড়তে পারে; তবে sighting নিশ্চিত নয়।”'
              : '“During low tide, exposed riverbanks and mudflats increase opportunities to observe spotted deer or fresh tracks; however, sightings are never guaranteed.”'}
          </p>
        </div>
      </section>

      {/* 🐅 Section 5: বাঘের সঙ্গে জোয়ার-ভাটার সম্পর্ক */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-950 uppercase tracking-wider bg-amber-200/80 px-3 py-1 rounded-full">
            <Binoculars className="w-3.5 h-3.5 text-amber-900" />
            <span>{isBengali ? 'বাঘের চলাচল ও বিজ্ঞান' : 'Tiger Movement Science'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'বাঘের সঙ্গে জোয়ার-ভাটার সম্পর্ক' : 'Tigers and the Rhythms of Tidal Mangroves'}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'বৈজ্ঞানিক গবেষণায় সুন্দরবনের বাঘকে নদী ও creek পার হতে এবং tidal mangrove habitat ব্যবহার করতে দেখা গেছে। তাদের চলাচল বনভূমি, prey availability, জলপথ এবং নিজস্ব territorial behavior-এর সঙ্গে সম্পর্কিত। (Naha et al.—Ranging, Activity and Habitat Use by Tigers)'
              : 'Scientific research documents Sundarban tigers swimming across rivers and utilizing tidal creek habitats. Their movement correlates with core forest interior, prey availability, waterways, and territorial patrols (Naha et al.).'}
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'ভাটার সময় নরম কাদায় tiger pugmark বা চলাচলের সম্ভাব্য চিহ্ন দেখা সহজ হতে পারে। কিন্তু সরাসরি tiger sighting-এর জন্য কোনো নির্দিষ্ট tide নিশ্চিতভাবে সেরা—এমন শক্ত প্রমাণ নেই।'
              : 'Soft silt during low tide makes pugmark detection somewhat easier, but no empirical evidence proves that any specific tide guarantees a visual sighting.'}
          </p>
        </div>

        {/* Prohibited Marketing Claims Caution Grid */}
        <div className="bg-rose-50/80 rounded-2xl p-5 border border-rose-200 space-y-3">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-xs sm:text-sm">
            <ShieldAlert className="w-4 h-4 text-rose-700 shrink-0" />
            <span>{isBengali ? 'দায়িত্বশীল ট্যুরিজমে যে দাবিগুলো কঠোরভাবে এড়ানো উচিত:' : 'False Claims Strictly Avoided by Ethical Operators:'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-rose-950">
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-rose-100">
              <span className="text-rose-600 font-bold">✕</span>
              <span>{isBengali ? 'Low tide-এ নিশ্চিত বাঘ দেখা যায়' : 'Guaranteed tiger sighting at low tide'}</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-rose-100">
              <span className="text-rose-600 font-bold">✕</span>
              <span>{isBengali ? 'এই creek-এ প্রতিদিন বাঘ আসে' : 'Tigers visit this canal every single day'}</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-rose-100">
              <span className="text-rose-600 font-bold">✕</span>
              <span>{isBengali ? 'Tiger guaranteed safari' : 'Tiger guaranteed safari package'}</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-rose-100">
              <span className="text-rose-600 font-bold">✕</span>
              <span>{isBengali ? 'বাঘ না দেখলে টাকা ফেরত' : 'Money-back guarantee if no tiger is seen'}</span>
            </div>
          </div>

          <p className="text-xs text-rose-800 italic pt-1">
            {isBengali
              ? 'সুন্দরবনে tiger sighting অত্যন্ত বিরল, আকস্মিক এবং সম্পূর্ণ প্রাকৃতিক পরিস্থিতিনির্ভর।'
              : 'In the Sundarbans, a tiger sighting remains an exceedingly rare, spontaneous, and purely natural occurrence.'}
          </p>
        </div>
      </section>

      {/* 🦅 Section 6: Birdwatching-এর জন্য কোন tide ভালো? */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-900 uppercase tracking-wider bg-cyan-100 px-3 py-1 rounded-full">
            <Bird className="w-3.5 h-3.5 text-cyan-800" />
            <span>{isBengali ? 'পাখি পর্যবেক্ষণ নির্দেশিকা' : 'Delta Avian Ecology'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'Birdwatching-এর জন্য কোন tide ভালো?' : 'Which Tide is Ideal for Birdwatching?'}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'Falling tide থেকে low tide birdwatching-এর জন্য বিশেষ আকর্ষণীয় হতে পারে। জল সরে গেলে mudflat-এ ছোট মাছ, কাঁকড়া ও অন্যান্য খাদ্য সহজে দৃশ্যমান হয়। ফলে বিভিন্ন wader ও waterbird নদীতীরের কাছে খাবার সংগ্রহ করতে পারে।'
              : 'Falling tide to peak low tide is magnetic for avian enthusiasts. Exposed mudflats trap crabs and small fish, drawing numerous waders and shorebirds along the water boundary.'}
          </p>
        </div>

        {/* 9 Bird Species Badges */}
        <div className="space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-800">
            {isBengali ? 'সম্ভাব্য পাখি প্রজাতির মধ্যে রয়েছে:' : 'Characteristic Sundarban Bird Species:'}
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { bn: 'মাছরাঙা (Kingfisher)', en: 'Kingfisher (Brown-winged, Pied, Common, Collared)' },
              { bn: 'বক (Egret)', en: 'Little & Great Egret' },
              { bn: 'হেরন (Heron)', en: 'Goliath & Grey Heron' },
              { bn: 'স্যান্ডপাইপার (Sandpiper)', en: 'Common Sandpiper' },
              { bn: 'প্লোভার (Plover)', en: 'Lesser Sand Plover' },
              { bn: 'কার্লিউ (Curlew)', en: 'Eurasian Curlew' },
              { bn: 'পানকৌড়ি (Cormorant)', en: 'Little Cormorant' },
              { bn: 'মানিকজোড় (Stork)', en: 'Lesser Adjutant & Openbill Stork' },
              { bn: 'সিলভার সি ঈগল (White-bellied Sea Eagle)', en: 'White-bellied Sea Eagle' },
            ].map((bird, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-950 text-xs font-semibold"
              >
                {isBengali ? bird.bn : bird.en}
              </span>
            ))}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-600">
          {isBengali
            ? 'Rising tide-এর সময় জল feeding ground সংকুচিত করলে কিছু পাখি তুলনামূলক ছোট উন্মুক্ত এলাকায় জড়ো হতে পারে। তবে পাখির উপস্থিতি ও আচরণ ঋতু, স্থান, আবহাওয়া এবং জলস্তর অনুযায়ী বদলায়।'
            : 'During rising tide, rising water compresses foraging flats, congregating birds onto remaining slivers before they roost. Seasonal migratory waves and weather also influence presence.'}
        </p>
      </section>

      {/* 🌿 Section 7: Creek Safari-তে High Tide-এর সুবিধা */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
            <Compass className="w-3.5 h-3.5 text-emerald-800" />
            <span>{isBengali ? 'উচ্চ জোয়ার ও খাঁড়ি ভ্রমণ' : 'High Tide Creek Navigation'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'Creek Safari-তে High Tide-এর সুবিধা' : 'Advantages of High Tide for Creek Safaris'}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'ভাটা mudflat ও footprint দেখার জন্য ভালো হলেও উচ্চতর জলস্তরের অন্য সুবিধা রয়েছে। জোয়ারে পানি বাড়লে অগভীর creek-এ নৌযান চলাচলের জন্য পর্যাপ্ত depth পাওয়া যেতে পারে।'
              : 'While low tide reveals mudflats and tracks, high tide provides essential navigational depth for safari boats to navigate shallow, narrow forest creeks.'}
          </p>
        </div>

        {/* High Tide Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {[
            { bn: 'জল ম্যানগ্রোভের কিনারা পর্যন্ত উঠে আসে', en: 'Water rises right up to the mangrove tree trunks' },
            { bn: 'পানিতে সবুজ বনভূমির সুন্দর reflection বা প্রতিবিম্ব তৈরি হয়', en: 'Still water mirrors the dense green mangrove canopy' },
            { bn: 'creek অপেক্ষাকৃত পূর্ণ ও গভীর দেখায়', en: 'Creeks appear lush, full, and tranquil' },
            { bn: 'নৌকা অনুমোদিত কিছু অগভীর পথে চলতে সক্ষম হতে পারে', en: 'Boats gain draft clearance to enter approved interior creeks' },
            { bn: 'বন ও নদীর সীমা একসঙ্গে মিশে যাওয়ার দৃশ্য তৈরি হয়', en: 'The threshold between river and jungle blurs seamlessly' },
          ].map((item, i) => (
            <div key={i} className="p-3.5 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl flex items-center gap-3 text-xs sm:text-sm text-emerald-950 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{isBengali ? item.bn : item.en}</span>
            </div>
          ))}
        </div>

        {/* Transition Summary */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-900 to-[#064E3B] text-white space-y-1.5">
          <h3 className="font-bold text-amber-300 text-sm sm:text-base flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>{isBengali ? 'টাইড ট্রানজিশন (Tide Transition) সবচেয়ে সেরা:' : 'The Magic of Tide Transition:'}</span>
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
            {isBengali
              ? 'উচ্চ জোয়ারে mudflat, শ্বাসমূলের নিচের অংশ ও footprint পানির নিচে চলে যায়। তাই শুধু high tide বা শুধু low tide নয়—সম্ভব হলে tide transition (ভাটা থেকে জোয়ারের পরিবর্তন) দেখা সবচেয়ে বৈচিত্র্যময় অভিজ্ঞতা দেয়।'
              : 'At full high tide, mudflats and roots submerge. Hence, experiencing the transition from receding low tide into swelling high tide delivers the most holistic safari experience.'}
          </p>
        </div>
      </section>

      {/* 📊 Section 8: কোন tide-এ কী দেখবেন? (Comparison Table) */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wider bg-stone-100 px-3 py-1 rounded-full">
            <Waves className="w-3.5 h-3.5 text-stone-700" />
            <span>{isBengali ? 'তুলনামূলক চার্ট' : 'Comparative Matrix'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'কোন tide-এ কী দেখবেন?' : 'What to Expect in Each Tidal Phase?'}
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#064E3B] text-white">
                <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider w-1/3">
                  {isBengali ? 'জোয়ারের অবস্থা' : 'Tide Phase'}
                </th>
                <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider">
                  {isBengali ? 'প্রধান অভিজ্ঞতা' : 'Primary Safari Experience'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 bg-white">
              <tr className="hover:bg-amber-50/40 transition-colors">
                <td className="p-3.5 sm:p-4 font-bold text-amber-900 bg-amber-50/50">
                  Falling tide (জল নামার সময়)
                </td>
                <td className="p-3.5 sm:p-4 text-stone-700">
                  {isBengali
                    ? 'mudflat ধীরে জেগে ওঠা, feeding bird ও নদীতীরের সম্ভাব্য চিহ্ন প্রকাশ পাওয়া'
                    : 'Gradual emergence of mudflats, active foraging birds, and riverbank tracks'}
                </td>
              </tr>
              <tr className="hover:bg-amber-50/60 transition-colors">
                <td className="p-3.5 sm:p-4 font-bold text-[#064E3B] bg-emerald-50/40">
                  Low tide (পূর্ণ ভাটা)
                </td>
                <td className="p-3.5 sm:p-4 text-stone-700">
                  {isBengali
                    ? 'mudflat, শ্বাসমূল (roots), crab hole ও footprint সবচেয়ে স্পষ্ট দেখা যায়'
                    : 'Mudflats, stilt roots, crab burrows, and soft silt tracks at peak clarity'}
                </td>
              </tr>
              <tr className="hover:bg-cyan-50/40 transition-colors">
                <td className="p-3.5 sm:p-4 font-bold text-cyan-900 bg-cyan-50/50">
                  Rising tide (জল বাড়ার সময়)
                </td>
                <td className="p-3.5 sm:p-4 text-stone-700">
                  {isBengali
                    ? 'mangrove reflection, বদলে যাওয়া forest edge ও পাখির feeding zone সংকুচিত হওয়া'
                    : 'Lush mangrove reflections, transforming forest edge, and birds clustering along narrowing banks'}
                </td>
              </tr>
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="p-3.5 sm:p-4 font-bold text-blue-900 bg-blue-50/40">
                  High tide (পূর্ণ জোয়ার)
                </td>
                <td className="p-3.5 sm:p-4 text-stone-700">
                  {isBengali
                    ? 'creek-এ বেশি জল ও নৌকা চলাচলের সুবিধা, কিন্তু mudflat ও footprint পানির নিচে'
                    : 'Sufficient water depth for canal navigation, but mudflats and footprints are submerged'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 📷 Section 9: Photography-এর জন্য আদর্শ পরিকল্পনা */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-900 uppercase tracking-wider bg-purple-100 px-3 py-1 rounded-full">
            <Camera className="w-3.5 h-3.5 text-purple-800" />
            <span>{isBengali ? 'ফটোগ্রাফি ও আলো পরিকল্পনা' : 'Photography Light & Tides'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'Photography-এর জন্য আদর্শ পরিকল্পনা' : 'Ideal Photography Itinerary: Aligning Light & Tide'}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'সকাল ও বিকেলের নরম আলো সুন্দরবনের landscape ও wildlife photography-এর জন্য সাধারণত ভালো। তবে sunrise বা sunset একা যথেষ্ট নয়—তার সঙ্গে tide মিললে দৃশ্য আরও আকর্ষণীয় হতে পারে।'
              : 'Gentle morning and late afternoon light produce stellar wildlife imagery. However, combining soft solar angles with the correct tidal stage elevates composition immensely.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Morning Low Tide */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <Sunrise className="w-4 h-4 text-amber-600" />
              <span>{isBengali ? 'সকালবেলার Falling/Low Tide' : 'Morning Falling/Low Tide'}</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-700 font-medium">
              <li className="flex items-center gap-1.5">• {isBengali ? 'পরিষ্কার ও নরম সকালের আলো' : 'Crisp, soft morning light'}</li>
              <li className="flex items-center gap-1.5">• {isBengali ? 'mudflat ও শ্বাসমূলের স্পষ্ট texture' : 'Fine texture of mudflats & roots'}</li>
              <li className="flex items-center gap-1.5">• {isBengali ? 'সম্ভাব্য বন্যপ্রাণীর fresh footprint' : 'Fresh overnight wildlife footprints'}</li>
              <li className="flex items-center gap-1.5">• {isBengali ? 'সক্রিয় feeding birds' : 'Active feeding shorebirds'}</li>
              <li className="flex items-center gap-1.5">• {isBengali ? 'শীতকালে basking crocodile-এর সুযোগ' : 'Winter crocodile basking opportunities'}</li>
              <li className="flex items-center gap-1.5">• {isBengali ? 'নদীর পানিতে কম glare' : 'Minimal water surface glare'}</li>
            </ul>
          </div>

          {/* Card 2: Afternoon Low Tide */}
          <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-3">
            <div className="flex items-center gap-2 text-orange-900 font-bold text-sm">
              <Sunset className="w-4 h-4 text-orange-600" />
              <span>{isBengali ? 'বিকেলের Falling/Low Tide' : 'Afternoon Falling/Low Tide'}</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-700 font-medium">
              <li className="flex items-center gap-1.5">• {isBengali ? 'সোনালি গোল্ডেন আওয়ার আলো' : 'Warm golden hour luminescence'}</li>
              <li className="flex items-center gap-1.5">• {isBengali ? 'mangrove অরণ্যের দীর্ঘ নাটকীয় ছায়া' : 'Long dramatic mangrove tree shadows'}</li>
              <li className="flex items-center gap-1.5">• {isBengali ? 'mudflat-এর বিস্তারিত texture' : 'Gleaming wet mudflat texture'}</li>
              <li className="flex items-center gap-1.5">• {isBengali ? 'পাখির চমৎকার silhouette ছবি' : 'Atmospheric bird silhouettes'}</li>
              <li className="flex items-center gap-1.5">• {isBengali ? 'মোহনা ও সূর্যাস্ত কম্পোজিশন' : 'Estuary landscape & sunset compositions'}</li>
            </ul>
          </div>

          {/* Card 3: Rising Tide Reflections */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{isBengali ? 'Rising Tide (জল বাড়ার সময়)' : 'Rising Tide Water Reflections'}</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-700 font-medium">
              <li className="flex items-center gap-1.5">• {isBengali ? 'পানিতে সবুজ ম্যানগ্রোভের mirror reflection' : 'Emerald mirror mangrove reflections'}</li>
              <li className="flex items-center gap-1.5">• {isBengali ? 'forest edge-এর cinematic ভিজুয়াল' : 'Cinematic lush forest boundaries'}</li>
              <li className="flex items-center gap-1.5">• {isBengali ? 'খাঁড়ির বাঁকে জলপ্রবাহের গতি' : 'Fluid water movement in creek bends'}</li>
              <li className="flex items-center gap-1.5">• {isBengali ? 'safari video ফুটেজের আকর্ষণীয় perspective' : 'Dynamic perspectives for safari videography'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🚢 Section 10: Safari বুক করার আগে কী জিজ্ঞেস করবেন? */}
      <section className="bg-gradient-to-br from-[#064E3B] to-[#04291F] text-white rounded-3xl p-6 sm:p-10 border-2 border-amber-400/50 shadow-xl space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider bg-amber-400/20 px-3.5 py-1 rounded-full border border-amber-400/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isBengali ? 'স্মার্ট পর্যটকের চেকলিস্ট' : 'Smart Safari Traveler Checklist'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            {isBengali ? 'Safari বুক করার আগে কী জিজ্ঞেস করবেন?' : 'What to Inquire Before Booking a Sundarban Safari?'}
          </h2>
          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'Tour operator-কে শুধু “সাফারি কখন শুরু হবে?” না জিজ্ঞেস করে বলুন:'
              : 'Rather than simply asking "What time does the safari start?", pose this precise question:'}
          </p>
        </div>

        {/* The Golden Question */}
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-5 border border-amber-400/60 space-y-1">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            {isBengali ? 'সঠিক প্রশ্নটি করুন:' : 'Ask This Exact Question:'}
          </div>
          <p className="text-base sm:text-lg font-bold text-white font-heading">
            {isBengali
              ? '“আমাদের safari window-তে local low tide কখন, এবং কোন অনুমোদিত creek ওই জলস্তরে চলাচলযোগ্য থাকবে?”'
              : '“During our safari window, when is the local low tide scheduled, and which permitted forest creeks remain safely navigable at that draft?”'}
          </p>
        </div>

        {/* 7-Point Verification Checklist */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
            {isBengali ? 'বুকিংয়ের সময় আরও যা যাচাই করবেন:' : 'Essential Items to Verify With Your Operator:'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {[
              { bn: 'tide অনুযায়ী safari plan সাজানো হয়েছে কি না', en: 'Whether the itinerary adapts to local lunar tide tables' },
              { bn: 'Forest Department permit সম্পূর্ণ অন্তর্ভুক্ত কি না', en: 'Government Forest Department entry permits fully included' },
              { bn: 'কোন watch tower ও creek খোলা থাকবে', en: 'Which watch towers and authorized creeks are on the schedule' },
              { bn: 'boat-এ পর্যাপ্ত জীবন রক্ষাকারী life jacket আছে কি না', en: 'Adequate certified adult life jackets onboard' },
              { bn: 'শিশুর জন্য উপযুক্ত life jacket আছে কি না', en: 'Properly fitting child life jackets available for minors' },
              { bn: 'weather খারাপ হলে বিকল্প itinerary কী', en: 'Contingency itinerary in case of adverse delta weather' },
              { bn: 'tide-এর কারণে route বদলালে কী ব্যবস্থা থাকবে', en: 'Vessel master alternatives if shifting water levels alter routes' },
            ].map((check, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 border border-white/15 text-slate-100"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isBengali ? check.bn : check.en}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Rule Box */}
        <div className="p-4 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-200 text-xs sm:text-sm font-semibold text-center">
          {isBengali
            ? '⚠️ মনে রাখবেন: এক জায়গার tide timing অন্য জায়গায় এবং এক দিনের timing পরের দিনে ব্যবহার করা উচিত নয়।'
            : '⚠️ Golden Rule: Tide timings at one ghat or day cannot be copy-pasted to another river or subsequent dates.'}
        </div>
      </section>

      {/* 💬 Book Consultation CTA */}
      <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-slate-900 font-heading">
            {isBengali ? 'আপনার সাফারির জন্য টাইডাল শিডিউল জানতে চান?' : 'Want Custom Tide Scheduling for Your Tour?'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            {isBengali
              ? 'আমাদের অনুমোদিত স্থানীয় গাইডেরা আপনার সফরের তারিখ অনুযায়ী জোয়ার-ভাটার সঠিক হিসাব তৈরি করে দেবেন।'
              : 'Our licensed naturalists calculate precise lunar tide curves for your travel dates.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('plan-my-trip')}
            className="px-6 py-3 rounded-2xl bg-[#064E3B] text-white font-bold text-xs sm:text-sm hover:bg-[#08634b] transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{isBengali ? 'কাস্টম ট্রিপ কম্পোজার' : 'Plan Custom Trip'}</span>
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-3 rounded-2xl bg-white border border-stone-300 text-stone-800 font-bold text-xs sm:text-sm hover:bg-stone-100 transition-all"
          >
            {isBengali ? 'সরাসরি যোগাযোগ করুন' : 'Contact Naturalist'}
          </button>
        </div>
      </div>
    </div>
  );
};
