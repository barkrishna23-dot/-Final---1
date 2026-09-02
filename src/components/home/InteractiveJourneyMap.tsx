import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Info, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface RouteStop {
  id: string;
  name: { en: string; bn: string };
  type: 'road-start' | 'road-waypoint' | 'river-gateway' | 'watch-tower' | 'sanctuary' | 'estuary';
  coords: { x: number; y: number }; // Percentage in SVG container
  distanceTime: { en: string; bn: string };
  summary: { en: string; bn: string };
  highlights: { en: string; bn: string }[];
  transitMode: { en: string; bn: string };
}

const ROUTE_STOPS: RouteStop[] = [
  {
    id: 'kolkata-pickup',
    name: { en: 'Kolkata (Pickup Point)', bn: 'কলকাতা (পিকআপ পয়েন্ট)' },
    type: 'road-start',
    coords: { x: 12, y: 22 },
    distanceTime: { en: '0 km • 07:00 AM Departure', bn: '০ কিমি • সকাল ৭:০০ রওনা' },
    summary: {
      en: 'AC tourist coaches pickup from Science City & Indian Museum with complimentary breakfast on board.',
      bn: 'সায়েন্স সিটি ও ইন্ডিয়ান মিউজিয়াম থেকে এসি ট্যুরিস্ট বাসে যাত্রা শুরু এবং ব্রেকফাস্ট পরিবেশন।',
    },
    highlights: [
      { en: 'Packed warm breakfast', bn: 'গরম ব্রেকফাস্ট বক্স' },
      { en: 'Experienced tour coordinator', bn: 'অভিজ্ঞ ট্যুর ম্যানেজার' },
    ],
    transitMode: { en: 'AC Tourist Bus / Private Car', bn: 'এসি ট্যুরিস্ট বাস / প্রাইভেট গাড়ি' },
  },
  {
    id: 'canning-transit',
    name: { en: 'Canning Gateway', bn: 'ক্যানিং ট্রানজিট' },
    type: 'road-waypoint',
    coords: { x: 28, y: 38 },
    distanceTime: { en: '55 km • 1.5 hrs from Kolkata', bn: '৫৫ কিমি • কলকাতা থেকে ১.৫ ঘণ্টা' },
    summary: {
      en: 'Historical gateway to Sundarbans railway network and local riverine market junction.',
      bn: 'সুন্দরবনের রেলওয়ে ও লোকাল নদীপথের মিলনস্থল ঐতিহাসিক প্রবেশদ্বার।',
    },
    highlights: [
      { en: 'Matla river views', bn: 'মাতলা নদীর নয়নাভিরাম দৃশ্য' },
      { en: 'Tea & snack break', bn: 'চা ও রিফ্রেশমেন্ট বিরতি' },
    ],
    transitMode: { en: 'Smooth Highway Transit', bn: 'মহাসড়ক অতিক্রম' },
  },
  {
    id: 'godkhali-jetty',
    name: { en: 'Godkhali Ferry Jetty', bn: 'গদখালি বোট ঘাট' },
    type: 'river-gateway',
    coords: { x: 42, y: 52 },
    distanceTime: { en: '85 km • 3 hrs • Embarkation', bn: '৮৫ কিমি • ৩ ঘণ্টা • বোট যাত্রা শুরু' },
    summary: {
      en: 'The road ends here. Transition to luxury safari cruiser with fresh coconut water welcome.',
      bn: 'সড়কপথের সমাপ্তি। ডাবের জল দিয়ে স্বাগত জানিয়ে বিলাসবহুল সাফারি বোটে আরোহণ।',
    },
    highlights: [
      { en: 'Forest permit processing', bn: 'বন দপ্তর অনুমোদনের আনুষ্ঠানিকতা' },
      { en: 'Baggage crew handling', bn: 'সহকারী দ্বারা লাগেজ পরিবহন' },
    ],
    transitMode: { en: 'Boarding Engine Cruiser', bn: 'সাফারি বোটে স্থানান্তর' },
  },
  {
    id: 'gosaba-heritage',
    name: { en: 'Gosaba Island', bn: 'গোসাবা দ্বীপ' },
    type: 'sanctuary',
    coords: { x: 55, y: 40 },
    distanceTime: { en: '30 mins cruise from Godkhali', bn: 'গদখালি থেকে ৩০ মিনিট নৌপথ' },
    summary: {
      en: 'Sir Daniel Hamilton estate, historical 1932 Rabindranath Tagore visit site and cooperative bank heritage.',
      bn: 'স্যার ড্যানিয়েল হ্যামিল্টনের বাংলো, ১৯৩২ সালের রবীন্দ্রনাথের পদার্পণ ও সমবায় স্মৃতি।',
    },
    highlights: [
      { en: 'Beacon Bungalow visit', bn: 'শতবর্ষ প্রাচীন বীকন বাংলো' },
      { en: 'Rural market walk', bn: 'ঐতিহাসিক বাজার পরিদর্শন' },
    ],
    transitMode: { en: 'Cruise & Shore Excursion', bn: 'বোট ও পায়ে হেঁটে পরিদর্শন' },
  },
  {
    id: 'sajnekhali-tower',
    name: { en: 'Sajnekhali Watch Tower', bn: 'সজনেখালি ওয়াচ টাওয়ার' },
    type: 'watch-tower',
    coords: { x: 65, y: 58 },
    distanceTime: { en: '45 mins from Gosaba', bn: 'গোসাবা থেকে ৪৫ মিনিট' },
    summary: {
      en: 'Forest Department headquarters, Mangrove Interpretation Center, crocodile breeding pond, and Bono Bibi temple.',
      bn: 'বন দপ্তরের সদর কার্যালয়, ম্যানগ্রোভ ইন্টারপ্রিটেশন সেন্টার, কুমির প্রজনন কেন্দ্র ও বনবিবি মন্দির।',
    },
    highlights: [
      { en: 'Museum & library entry', bn: 'ম্যানগ্রোভ জাদুঘর দর্শন' },
      { en: 'Freshwater wildlife pond', bn: 'মিষ্টি জলের পুকুরে হরিণ দর্শন' },
    ],
    transitMode: { en: 'Safely Fenced Complex', bn: 'সুরক্ষিত ফেন্সিং চত্বর' },
  },
  {
    id: 'sudhanyakhali-tower',
    name: { en: 'Sudhanyakhali Watch Tower', bn: 'সুধন্যখালি ওয়াচ টাওয়ার' },
    type: 'watch-tower',
    coords: { x: 75, y: 48 },
    distanceTime: { en: 'Core Tiger Corridor', bn: 'টাইগার করিডোর অঞ্চল' },
    summary: {
      en: 'Renowned for highest frequency of natural tiger sightings across open water sweet ponds.',
      bn: 'মিষ্টি জলের পুকুর ও উন্মুক্ত প্রান্তরে বাঘ দর্শনের জন্য সর্বাধিক জনপ্রিয় স্থান।',
    },
    highlights: [
      { en: 'Spotted deer herds', bn: 'চিত্রা হরিণের দল' },
      { en: 'Monitor lizards & kingfishers', bn: 'গোসাপ ও মাছরাঙা পাখি' },
    ],
    transitMode: { en: 'Elevated Deck Viewing', bn: 'উঁচু ওয়াচ টাওয়ার পর্যবেক্ষণ' },
  },
  {
    id: 'dobanki-canopy',
    name: { en: 'Dobanki Canopy Walkway', bn: 'দোবাঁকি ক্যানোপি ওয়াকওয়ে' },
    type: 'watch-tower',
    coords: { x: 86, y: 68 },
    distanceTime: { en: '1.5 hrs through narrow creeks', bn: 'সরু খাঁড়ি হয়ে ১.৫ ঘণ্টা' },
    summary: {
      en: 'Half-kilometer fenced overhead bridge elevated 20 feet above mangrove forest floor.',
      bn: 'মাটি থেকে ২০ ফুট উঁচুতে আধ কিলোমিটার দীর্ঘ নিরাপদ ও রোমাঞ্চকর ক্যানোপি ওয়াকওয়ে।',
    },
    highlights: [
      { en: 'Canopy level birding', bn: 'গাছের ওপর থেকে পাখি দেখা' },
      { en: 'Safe forest floor view', bn: 'বনের নিচ দিয়ে হরিণ পর্যবেক্ষণ' },
    ],
    transitMode: { en: '20ft Elevated Walkway', bn: 'উচ্চতম সুরক্ষিত পদচারী ব্রিজ' },
  },
  {
    id: 'panchamukhani-junction',
    name: { en: 'Panchamukhani Junction', bn: 'পঞ্চমুখী মোহনা' },
    type: 'estuary',
    coords: { x: 75, y: 84 },
    distanceTime: { en: 'Confluence of 5 Rivers', bn: '৫টি নদীর মিলনস্থল' },
    summary: {
      en: 'Spectacular junction of 5 rivers (Matla, Durgaduani, Bidya, Pitchkhali & Gomor). Sunset paradise.',
      bn: 'পাঁচটি বৃহৎ নদীর মিলনস্থল। দিগন্তবিস্তৃত সূর্যাস্ত ও ডলফিন দর্শনের সেরা মোহনা।',
    },
    highlights: [
      { en: 'Irrawaddy & Gangetic Dolphins', bn: 'ইর্যাবতী ও শুশুক দর্শন' },
      { en: 'Crimson delta sunset', bn: 'নদীর বুক চিরে লাল সূর্যাস্ত' },
    ],
    transitMode: { en: 'Open Water Drift Cruise', bn: 'শান্ত রিভার ড্রাফট ক্রুজ' },
  },
];

export const InteractiveJourneyMap: React.FC<{ onSelectPlace?: (id: string) => void }> = ({
  onSelectPlace,
}) => {
  const { language, isBengali } = useLanguage();
  const [selectedStop, setSelectedStop] = useState<RouteStop>(ROUTE_STOPS[2]); // Default Godkhali

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 animated-round-card shadow-sm">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full mb-2">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>{isBengali ? 'ইন্টারেক্টিভ ভ্রমণ মানচিত্র' : 'Interactive Safari Route Map'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
            {isBengali ? 'কলকাতা থেকে সুন্দরবনের জলপথ' : 'Kolkata to Deep Mangrove Safari Route'}
          </h3>
        </div>
        <p className="text-sm text-slate-600 max-w-md">
          {isBengali
            ? 'মানচিত্রের যেকোনো স্টপে ক্লিক করে ভ্রমণের মাধ্যম, দূরত্ব ও বিশেষ আকর্ষণ জেনে নিন।'
            : 'Click on any stop to explore travel transit times, key highlights, and destination secrets.'}
        </p>
      </div>

      {/* Grid of Map Visual + Selected Stop Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left/Main: Stylized SVG Route Map */}
        <div className="lg:col-span-7 bg-gradient-to-br from-[#E0F2FE] via-[#F0FDF4] to-[#FEF3C7] rounded-2xl p-6 border border-emerald-200/80 relative min-h-[380px] sm:min-h-[420px] flex flex-col justify-between overflow-hidden shadow-inner">
          {/* Background Water Wave Texture */}
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="riverPattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 0 20 Q 15 10 30 20 T 60 20" fill="none" stroke="#0E7490" strokeWidth="1.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#riverPattern)" />
            </svg>
          </div>

          {/* Curved Journey Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 12 22 C 20 30, 25 35, 28 38 C 35 45, 38 48, 42 52 C 48 44, 52 38, 55 40 C 60 48, 62 55, 65 58 C 70 52, 72 46, 75 48 C 80 58, 83 64, 86 68 C 82 78, 78 82, 75 84"
              fill="none"
              stroke="#0E7490"
              strokeWidth="2.5"
              strokeDasharray="4,3"
              className="opacity-70"
            />
          </svg>

          {/* Interactive Stop Nodes */}
          <div className="relative z-10 w-full h-full flex-1">
            {ROUTE_STOPS.map((stop, idx) => {
              const isSelected = selectedStop.id === stop.id;
              return (
                <button
                  key={stop.id}
                  onClick={() => setSelectedStop(stop)}
                  style={{ left: `${stop.coords.x}%`, top: `${stop.coords.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group/node transition-transform duration-300 ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-115 z-20'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md font-bold text-xs border-2 transition-all ${
                      isSelected
                        ? 'bg-[#064E3B] text-white border-amber-400 ring-4 ring-amber-300/60'
                        : stop.type === 'watch-tower'
                        ? 'bg-amber-600 text-white border-white'
                        : stop.type === 'river-gateway'
                        ? 'bg-[#0E7490] text-white border-white'
                        : 'bg-white text-slate-800 border-slate-300'
                    }`}
                  >
                    {idx + 1}
                  </div>

                  {/* Tooltip Label */}
                  <span
                    className={`hidden sm:block absolute left-1/2 -translate-x-1/2 top-9 whitespace-nowrap text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs transition-colors ${
                      isSelected
                        ? 'bg-[#064E3B] text-white'
                        : 'bg-white/90 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {stop.name[language]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Map Legend */}
          <div className="relative z-20 flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-slate-700 bg-white/85 backdrop-blur-xs p-2.5 rounded-xl">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              {isBengali ? 'সড়কপথ' : 'Road'}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0E7490]" />
              {isBengali ? 'নৌকা ঘাট' : 'Boat Jetty'}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
              {isBengali ? 'ওয়াচ টাওয়ার' : 'Watch Tower'}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#064E3B]" />
              {isBengali ? 'মোহনা ও দর্শনীয় স্থান' : 'Heritage & Estuary'}
            </span>
          </div>
        </div>

        {/* Right: Selected Stop Inspector Card */}
        <div className="lg:col-span-5 bg-slate-50/90 rounded-2xl p-6 border border-slate-200 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B] bg-emerald-100 px-2.5 py-1 rounded-full">
              {selectedStop.transitMode[language]}
            </span>
            <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              {selectedStop.distanceTime[language]}
            </span>
          </div>

          <h4 className="text-xl font-bold font-heading text-[#064E3B]">
            {selectedStop.name[language]}
          </h4>

          <p className="text-sm text-slate-700 leading-relaxed">
            {selectedStop.summary[language]}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-200">
            <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              {isBengali ? 'প্রধান বৈশিষ্ট্য:' : 'Key Highlights:'}
            </h5>
            <ul className="space-y-1 text-xs text-slate-600">
              {selectedStop.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>{h[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3">
            <button
              onClick={() => onSelectPlace && onSelectPlace(selectedStop.id)}
              className="w-full py-2.5 bg-[#064E3B] hover:bg-[#096049] text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition-all"
            >
              <span>{isBengali ? 'এই স্থানের বিবরণ ও প্যাকেজ দেখুন' : 'Explore Details & Associated Packages'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
