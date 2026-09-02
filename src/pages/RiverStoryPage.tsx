import React, { useState } from 'react';
import { RIVER_STORY_CHAPTERS } from '../data/riverStory';
import { useLanguage } from '../context/LanguageContext';
import { Compass, CheckCircle2, Lightbulb, ArrowRight, ArrowLeft, Footprints, ShieldCheck } from 'lucide-react';

interface RiverStoryPageProps {
  onNavigate: (route: string) => void;
}

export const RiverStoryPage: React.FC<RiverStoryPageProps> = ({ onNavigate }) => {
  const { language, isBengali } = useLanguage();
  const [activeChapterId, setActiveChapterId] = useState(1);

  const chapter = RIVER_STORY_CHAPTERS.find(c => c.id === activeChapterId) || RIVER_STORY_CHAPTERS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7490] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full">
          <Compass className="w-3.5 h-3.5" />
          <span>{isBengali ? 'ইমারসিভ সাফারি স্টোরিটেলিং' : '9-Chapter Safari Experience'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B]">
          {isBengali ? 'নদী থেকে নিস্তব্ধ খাঁড়ির ৯টি অধ্যায়' : 'The River-to-Creek Narrative Odyssey'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'গদখালি ঘাট থেকে শুরু হয়ে মাতলা নদী, কাদামাটির শ্বাসমূল, দোবাঁকির ঝুলন্ত সেতু এবং পঞ্চমুখীর সূর্যাস্ত পেরিয়ে রাতের বাউল গান—সুন্দরবনের পূর্ণাঙ্গ জীবন্ত সফর।'
            : 'Step through the 9 transformative phases of a Sundarban expedition: from tidal embarkation to narrow creeks and starry delta nights.'}
        </p>
      </div>

      {/* Chapter Navigation Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {RIVER_STORY_CHAPTERS.map(c => (
          <button
            key={c.id}
            onClick={() => setActiveChapterId(c.id)}
            className={`px-4 py-2 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
              activeChapterId === c.id
                ? 'bg-[#064E3B] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-[#F4B942] text-[#064E3B] text-xs flex items-center justify-center font-bold">
              {c.id}
            </span>
            <span className="truncate max-w-[140px] sm:max-w-none">{c.title[language].split(':')[1] || c.title[language]}</span>
          </button>
        ))}
      </div>

      {/* Active Chapter Showcase Card */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 animate-in fade-in duration-300">
        {/* Left/Image */}
        <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[500px]">
          <img
            src={chapter.image}
            alt={chapter.title.en}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
              {isBengali ? `অধ্যায় ${chapter.id} / ৯` : `CHAPTER ${chapter.id} OF 9`}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">
              {chapter.title[language]}
            </h3>
          </div>
        </div>

        {/* Right/Story Details */}
        <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs font-bold text-[#0E7490] bg-cyan-50 px-3 py-1 rounded-full inline-block">
              {chapter.subtitle[language]}
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {chapter.body[language]}
            </p>

            {/* Field Observations */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {isBengali ? 'এই অধ্যায়ের বিশেষ দৃশ্য ও অনুভূতি:' : 'What You Observe in this Phase:'}
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                {chapter.observationList.map((obs, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{obs[language]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guide Tip */}
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-950 leading-relaxed">
                <strong className="block font-bold mb-0.5">
                  {isBengali ? 'অভিজ্ঞ গাইডের পরামর্শ:' : 'Field Guide Tip:'}
                </strong>
                <span>{chapter.guideTip[language]}</span>
              </div>
            </div>
          </div>

          {/* Chapter Navigation Buttons */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              disabled={activeChapterId === 1}
              onClick={() => setActiveChapterId(prev => Math.max(1, prev - 1))}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs disabled:opacity-30 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isBengali ? 'পূর্ববর্তী অধ্যায়' : 'Previous'}</span>
            </button>

            <span className="text-xs text-slate-400 font-semibold">
              {activeChapterId} / {RIVER_STORY_CHAPTERS.length}
            </span>

            {activeChapterId < RIVER_STORY_CHAPTERS.length ? (
              <button
                onClick={() => setActiveChapterId(prev => Math.min(RIVER_STORY_CHAPTERS.length, prev + 1))}
                className="px-4 py-2 rounded-xl bg-[#064E3B] text-white font-semibold text-xs hover:bg-[#08614a] flex items-center gap-1.5 shadow-xs"
              >
                <span>{isBengali ? 'পরবর্তী অধ্যায়' : 'Next'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => onNavigate('packages')}
                className="px-5 py-2 rounded-xl bg-[#F4B942] text-[#064E3B] font-bold text-xs shadow-md flex items-center gap-1.5"
              >
                <span>{isBengali ? 'এই ভ্রমণটি বুক করুন' : 'Book this Safari'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
