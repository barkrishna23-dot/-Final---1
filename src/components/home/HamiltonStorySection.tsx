import React from 'react';
import { History, ArrowRight, Award, BookOpen, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface HamiltonStoryProps {
  onNavigate: (route: string) => void;
}

export const HamiltonStorySection: React.FC<HamiltonStoryProps> = ({ onNavigate }) => {
  const { isBengali } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/60 shadow-lg space-y-8">
        {/* Top Historical Badge & Fact-Check Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-900/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300/60">
            <History className="w-3.5 h-3.5 text-amber-800" />
            <span>{isBengali ? 'ঐতিহাসিক গোসাবা হেরিটেজ' : 'Rabindranath Tagore & Hamilton Heritage, Gosaba'}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isBengali ? 'ঐতিহাসিক তথ্যে যাচাইকৃত বিবরণ' : 'Verified Historical Narrative'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image with verified facts */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                alt="Hamilton Historic Estate Gosaba"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest">
                  {isBengali ? 'গোসাবা দ্বীপ, সুন্দরবন' : 'Gosaba Island, Sundarban'}
                </span>
                <h4 className="font-heading font-bold text-lg leading-snug text-white">
                  {isBengali ? 'রবীন্দ্রনাথ ঠাকুর ও স্যার ড্যানিয়েল হ্যামিল্টনের স্মৃতিবিজড়িত গোসাবা' : 'Rabindranath Tagore & Sir Daniel Hamilton Heritage'}
                </h4>
                <p className="text-xs text-slate-200 line-clamp-2">
                  {isBengali ? '১৯৩২ সালের ডিসেম্বর মাসে রবীন্দ্রনাথের ঐতিহাসিক গোসাবা সফর।' : 'December 1932: Tagore’s historic visit to Gosaba cooperative republic.'}
                </p>
              </div>
            </div>

            {/* Verified Fact Floating Pill */}
            <div className="absolute -bottom-3 -right-2 sm:right-4 bg-emerald-900 text-white p-3.5 rounded-2xl shadow-xl border border-amber-300/80 max-w-[240px] text-xs">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold mb-1">
                <Award className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>{isBengali ? 'সঠিক ঐতিহাসিক তথ্য' : 'Historical Fact'}</span>
              </div>
              <p className="text-[11px] leading-tight text-slate-200">
                {isBengali
                  ? '১৯৩২ সালে রবীন্দ্রনাথ ছিলেন Beacon’s Bungalow-এ; হ্যামিল্টন বাংলো ছিল স্যার ড্যানিয়েলের কর্মস্থল।'
                  : 'Tagore stayed at Beacon’s Bungalow in 1932 during his Gosaba study.'}
              </p>
            </div>
          </div>

          {/* Right Column: Step-by-Step Heritage Highlight */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#064E3B] leading-tight">
              {isBengali
                ? 'রবীন্দ্রনাথ ঠাকুর ও স্যার ড্যানিয়েল হ্যামিল্টনের স্মৃতিবিজড়িত গোসাবা'
                : 'Rabindranath Tagore & Hamilton Heritage, Gosaba'}
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {isBengali
                ? 'সুন্দরবন বলতে কেবল নদী আর বাঘ নয়—গোসাবায় রয়েছে মানব বসতি, সমবায় বিপ্লব ও গ্রামীণ স্বনির্ভরতার অনন্য ইতিহাস। ১৯০৩ সালে স্কটিশ সমাজহিতৈষী Sir Daniel Mackinnon Hamilton ঋণমুক্ত সমবায় মডেল গড়ে তোলেন, যা দেখতে ১৯৩২ সালে শান্তিনিকেতন থেকে স্বয়ং রবীন্দ্রনাথ ঠাকুর ছুটে এসেছিলেন।'
                : 'Beyond wildlife safaris lies Sundarban’s inspiring human saga: Sir Daniel Hamilton’s pioneer debt-free cooperative republic and Rabindranath Tagore’s monumental 1932 visit to witness grassroots rural self-reliance.'}
            </p>

            {/* Quick 3-Step Historical Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-[11px] font-black text-amber-700 block">ধাপ ১: সমবায় বিপ্লব</span>
                <h5 className="font-bold text-xs text-[#064E3B] font-heading">
                  {isBengali ? 'হ্যামিল্টনের সমবায় ব্যাংক ও মুদ্রা' : 'Hamilton’s Cooperative Bank'}
                </h5>
                <p className="text-[11px] text-slate-600 leading-snug">
                  {isBengali ? '১৯১৮ সমবায় সমিতি, ১৯২৪ সেন্ট্রাল ব্যাংক ও জামিনী রাইস মিল।' : 'Model farm, 1-rupee tokens & cooperative store.'}
                </p>
              </div>

              <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-[11px] font-black text-amber-700 block">ধাপ ২: শ্রীনিকেতন মেলবন্ধন</span>
                <h5 className="font-bold text-xs text-[#064E3B] font-heading">
                  {isBengali ? 'রবীন্দ্রনাথ ও হ্যামিল্টনের চিন্তা' : 'Tagore & Hamilton Thought'}
                </h5>
                <p className="text-[11px] text-slate-600 leading-snug">
                  {isBengali ? 'পল্লী পুনর্গঠন, শিক্ষা ও গ্রামীণ মানুষের আত্মশক্তি বিকাশ।' : 'Shared rural reconstruction & self-sufficiency.'}
                </p>
              </div>

              <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-[11px] font-black text-amber-700 block">ধাপ ৩: ১৯৩২-এর স্মৃতিচিহ্ন</span>
                <h5 className="font-bold text-xs text-[#064E3B] font-heading">
                  {isBengali ? 'বিকন ও হ্যামিল্টন বাংলো' : 'Beacon & Hamilton Bungalow'}
                </h5>
                <p className="text-[11px] text-slate-600 leading-snug">
                  {isBengali ? 'রবীন্দ্রনাথের থাকার ঐতিহাসিক কাঠের স্তূপের স্থাপনা।' : 'Preserved wooden stilts architectural landmarks.'}
                </p>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                id="hamilton-explore-btn"
                onClick={() => onNavigate('gosaba-tagore-heritage')}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#064E3B] hover:bg-[#096049] text-white font-bold text-sm shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>{isBengali ? 'গোসাবা ঐতিহ্যের পূর্ণ নিবন্ধ পড়ুন (স্টেপ বাই স্টেপ)' : 'Explore Step-by-Step Gosaba Heritage'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
