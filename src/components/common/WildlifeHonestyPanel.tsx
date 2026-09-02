import React from 'react';
import { Footprints } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const WildlifeHonestyPanel: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isBengali } = useLanguage();

  return (
    <div
      className={`rounded-2xl p-6 border border-amber-300 bg-amber-50/90 text-amber-950 shadow-sm ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="p-2.5 bg-amber-200/80 rounded-xl text-amber-900 shrink-0 shadow-xs">
          <Footprints className="w-5 h-5" />
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-bold text-base text-amber-950 font-heading">
              {isBengali ? 'প্রাকৃতিক বন্যপ্রাণী দর্শন নীতি (সততা ও দায়িত্ববোধ)' : 'Ethical Wildlife Sighting Policy'}
            </h4>
            <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-200 text-amber-900 px-2.5 py-0.5 rounded-full">
              {isBengali ? 'কোনো মিথ্যা প্রতিশ্রুতি নয়' : 'Zero Fake Guarantees'}
            </span>
          </div>

          <p className="text-sm text-amber-900/90 leading-relaxed">
            {isBengali
              ? 'সুন্দরবনের রয়্যাল বেঙ্গল টাইগার, হরিণ, কুমির ও বিরল পাখিদের বিচরণ সম্পূর্ণ প্রাকৃতিক এবং প্রাকৃতিক জোয়ার-ভাটা, আবহাওয়া ও ভাগ্যের ওপর নির্ভরশীল। কোনো দায়িত্বশীল ও সৎ ট্রাভেল এজেন্সি বাঘ দর্শনের গ্যারান্টি দিতে পারে না। আমাদের অঙ্গীকার হলো—দক্ষ গাইড ও শান্ত বোট সাফারির মাধ্যমে সর্বোত্তম সুযোগ ও পরিবেশ তৈরি করে দেওয়া।'
              : 'Royal Bengal Tigers, spotted deer, estuarine crocodiles, and delta raptors roam in wild, untamed mangrove habitats. Natural sightings are governed by tidal shifts, weather, and fortune. No authentic operator guarantees tiger sightings. Our commitment is providing seasoned local guides, optimal tide navigation, and ethical quiet cruises to maximize observation opportunities.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-amber-900">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              {isBengali ? 'শান্ত ও নীরব বোট ড্রাফট' : 'Silent Boat Drifting'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              {isBengali ? 'টাইডাল চার্ট ভিত্তিক নেভিগেশন' : 'Tidal Chart Navigation'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              {isBengali ? 'বন দপ্তরের কঠোর নির্দেশিকা পালন' : 'Strict Forest Dept Compliance'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
