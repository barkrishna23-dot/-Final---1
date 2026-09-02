import React, { useState } from 'react';
import { Clock, Utensils, Compass, MapPin, CheckCircle, XCircle, ShieldAlert, Sparkles, Footprints, AlertCircle } from 'lucide-react';
import { TourPackage } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface ItineraryTimelineProps {
  pkg: TourPackage;
}

export const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({ pkg }) => {
  const { language, isBengali } = useLanguage();
  const [activeDay, setActiveDay] = useState(1);

  const itineraryDays = pkg.itinerary || [];
  const currentDayData = itineraryDays.find(d => (d.dayNumber || (d as any).day) === activeDay) || itineraryDays[0] || {
    dayNumber: 1,
    title: { bn: 'সাফারি কার্যক্রম', en: 'Safari Activities' },
    activities: [],
    meals: {}
  };

  const getMealsSummary = () => {
    if ((currentDayData as any).mealsIncluded) {
      return (currentDayData as any).mealsIncluded[language];
    }
    if ((currentDayData as any).meals) {
      const m = (currentDayData as any).meals;
      const parts = [];
      if (m.breakfast) parts.push(`${isBengali ? 'প্রাতরাশ: ' : 'Breakfast: '}${m.breakfast[language]}`);
      if (m.lunch) parts.push(`${isBengali ? 'মধ্যাহ্নভোজ: ' : 'Lunch: '}${m.lunch[language]}`);
      if (m.snacks) parts.push(`${isBengali ? 'সান্ধ্য নাস্তা: ' : 'Snacks: '}${m.snacks[language]}`);
      if (m.dinner) parts.push(`${isBengali ? 'নৈশভোজ: ' : 'Dinner: '}${m.dinner[language]}`);
      return parts.join(' | ') || (isBengali ? 'টাটকা বাঙালি খাবার বোটে পরিবেশিত' : 'Fresh Bengali meals served on cruiser');
    }
    return isBengali ? 'টাটকা সুস্বাদু বাঙালি খাবার অন্তর্ভুক্ত' : 'Freshly prepared Bengali meals included';
  };

  return (
    <div className="space-y-8">
      {/* Day Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {itineraryDays.map((dayItem, idx) => {
          const dayNum = dayItem.dayNumber || (dayItem as any).day || (idx + 1);
          return (
            <button
              key={dayNum}
              onClick={() => setActiveDay(dayNum)}
              className={`px-5 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
                activeDay === dayNum
                  ? 'bg-[#064E3B] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-[#F4B942] text-[#064E3B] text-xs flex items-center justify-center font-bold">
                {dayNum}
              </span>
              <span>{isBengali ? `দিন ${dayNum}` : `Day ${dayNum}`}</span>
            </button>
          );
        })}
      </div>

      {/* Active Day Content */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-300">
        <div>
          <div className="text-xs font-bold text-[#0E7490] uppercase tracking-wider mb-1">
            {isBengali ? `দিন ${currentDayData.dayNumber || (currentDayData as any).day || 1} এর সময়সূচি ও কার্যবিবরণী` : `Day ${currentDayData.dayNumber || (currentDayData as any).day || 1} Detailed Itinerary`}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
            {currentDayData.title ? currentDayData.title[language] : (isBengali ? 'সাফারি ও কার্যক্রম' : 'Safari & Activities')}
          </h3>
        </div>

        {/* Day Activities Timeline */}
        <div className="relative pl-6 border-l-2 border-emerald-200 space-y-6">
          {(currentDayData.activities || []).map((act: any, idx: number) => {
            const timeStr = typeof act.time === 'object' && act.time !== null ? act.time[language] : (act.time || '');
            const titleStr = act.highlight ? act.highlight[language] : (act.title ? act.title[language] : `${isBengali ? 'কার্যক্রম' : 'Activity'} ${idx + 1}`);
            const descStr = act.description ? (typeof act.description === 'object' ? act.description[language] : act.description) : '';

            return (
              <div key={idx} className="relative group">
                {/* Timeline Pin */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#064E3B] border-2 border-white ring-2 ring-emerald-300 group-hover:scale-125 transition-transform" />

                <div className="bg-[#F9FAF8] p-4 rounded-2xl border border-slate-200/80 space-y-1.5">
                  {timeStr && (
                    <div className="flex items-center gap-2 text-xs font-bold text-[#D97706]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{timeStr}</span>
                    </div>
                  )}
                  <h4 className="text-base font-bold text-slate-900 font-heading">
                    {titleStr}
                  </h4>
                  {descStr && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {descStr}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Meals included in this day */}
        <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
            <Utensils className="w-4 h-4 text-amber-700" />
            <span>{isBengali ? 'এই দিনে পরিবেশিত খাবার (খাঁটি বাঙালি রসনা)' : 'Meals Served Today (Authentic Bengali)'}</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 font-medium">
            {getMealsSummary()}
          </p>
        </div>
      </div>

      {/* Inclusions & Exclusions Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inclusions */}
        <div className="bg-emerald-50/70 rounded-3xl p-6 border border-emerald-200 space-y-4">
          <div className="flex items-center gap-2 text-[#064E3B] font-bold text-lg font-heading">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <h4>{isBengali ? 'প্যাকেজে যা যা অন্তর্ভুক্ত' : 'What Is Included'}</h4>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {(pkg.inclusions || []).map((inc: any, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                <span>{typeof inc === 'object' ? inc[language] : inc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div className="bg-red-50/70 rounded-3xl p-6 border border-red-200 space-y-4">
          <div className="flex items-center gap-2 text-red-900 font-bold text-lg font-heading">
            <XCircle className="w-5 h-5 text-red-600" />
            <h4>{isBengali ? 'প্যাকেজে যা যা অন্তর্ভুক্ত নয়' : 'What Is Excluded'}</h4>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {(pkg.exclusions || []).map((exc: any, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                <span>{typeof exc === 'object' ? exc[language] : exc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Child Policy & Room Sharing Details */}
      <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-3">
        <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider font-heading">
          {isBengali ? 'শিশু নীতি ও রুম শেয়ারিং নিয়মাবলী' : 'Child Policy & Room Sharing Guidelines'}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600">
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">
              {isBengali ? 'শিশু নীতি (Child Policy):' : 'Child Fare Structure:'}
            </strong>
            <span>
              {pkg.childPolicy ? pkg.childPolicy[language] : (isBengali ? '০–৪ বছর বিনামূল্যে, ৪–৮ বছর ৫০% চার্জ।' : '0-4 years free, 4-8 years 50% charge.')}
            </span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">
              {isBengali ? 'রুম শেয়ারিং বিকল্প:' : 'Room Occupancy Plans:'}
            </strong>
            <span>
              {(pkg as any).roomSharingOptions?.[language] || pkg.accommodationType?.[language] || (isBengali ? 'ডাবল / ট্রিপল শেয়ারিং রুম বা কটেজ উপলব্ধ।' : 'Double / Triple sharing rooms and eco-cottages available.')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
