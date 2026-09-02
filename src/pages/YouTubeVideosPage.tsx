import React from 'react';
import { YOUTUBE_VIDEOS } from '../data/youtubeVideos';
import { BRAND_INFO } from '../data/brandInfo';
import { useLanguage } from '../context/LanguageContext';
import { Youtube, Play, Clock, ExternalLink, Sparkles } from 'lucide-react';

export const YouTubeVideosPage: React.FC = () => {
  const { language, isBengali } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-wider bg-red-50 px-3.5 py-1.5 rounded-full">
          <Youtube className="w-4 h-4 text-red-600" />
          <span>{isBengali ? 'অফিসিয়াল ভিডিও চ্যানেল' : 'Official Safari Video Channel'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B]">
          {isBengali ? 'সুন্দরবন সাফারির বাস্তব ভিডিও চিত্র' : 'Live River Safaris & Expedition Vlogs'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'সুন্দরবন ভ্রমণের জন্য একটি অসাধারণ গন্তব্য, যেখানে ম্যানগ্রোভ অরণ্য এবং বন্যপ্রাণীর এক অন্যরকম অভিজ্ঞতা পাওয়া যায়। ভ্রমণের সময়, ভিডিও এবং ফটোর মাধ্যমে সুন্দরবনের এই অপূর্ব রূপ তুলে ধরা হয়েছে।'
            : 'Sundarbans is an extraordinary destination for travel, offering an unparalleled experience of mangrove wilderness and biodiversity. The essence of the journey is brought to life through videos and photography.'}
        </p>

        <div className="pt-2">
          <a
            href={BRAND_INFO.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all"
          >
            <Youtube className="w-4 h-4" />
            <span>{isBengali ? 'ইউটিউব চ্যানেলে সাবস্ক্রাইব করুন' : 'Subscribe to YouTube Channel'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {YOUTUBE_VIDEOS.map(v => (
          <div
            key={v.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
          >
            {/* Responsive 16:9 Video Embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                title={v.title.en}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Video Details */}
            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-red-500" />
                    <span>{v.duration}</span>
                  </span>
                  <span>{v.publishedDate}</span>
                </div>
                <h3 className="font-bold text-base font-heading text-slate-900 leading-tight">
                  {v.title[language]}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                  {v.description[language]}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-semibold">
                  {isBengali ? 'সুন্দরবন ভ্রমণ ডায়েরি' : 'Sundarban Vromon Archive'}
                </span>
                <a
                  href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>YouTube-এ দেখুন</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
