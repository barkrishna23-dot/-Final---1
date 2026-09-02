import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Compass, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface HeroSlide {
  id: string;
  image: string;
  badge: { bn: string; en: string };
  title: { bn: string; en: string };
  subtitle: { bn: string; en: string };
  primaryCta: { bn: string; en: string };
  secondaryCta: { bn: string; en: string };
  actionRoute: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    badge: { bn: 'সুন্দরবনের জীবন্ত শ্বাসমূল ও ম্যানগ্রোভ অরণ্য', en: 'Pneumatophores & Mangrove Wilderness' },
    title: {
      bn: 'ম্যানগ্রোভের হৃদয়ে আপনার নির্ভরযোগ্য সঙ্গী',
      en: 'Your Trusted Companion in the Heart of the Mangroves',
    },
    subtitle: {
      bn: 'সুন্দরী ও গরান গাছের শ্বাসমূলের বিচিত্র রূপ, সজনেখালি, দোবাঁকি ক্যানোপি ওয়াক ও নিস্তব্ধ খাঁড়ির বোট সাফারি—অভিজ্ঞ গাইডদের সাথে।',
      en: 'Explore authentic mangrove pneumatophores, Sajnekhali, Dobanki Canopy Walk & quiet creeks with vetted local guides.',
    },
    primaryCta: { bn: 'প্যাকেজ সমূহ দেখুন', en: 'Explore Tour Packages' },
    secondaryCta: { bn: 'কাস্টম ট্রিপ তৈরি করুন', en: 'Plan Custom Trip' },
    actionRoute: 'packages',
  },
  {
    id: 'slide-2',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=80',
    badge: { bn: 'রয়েল বেঙ্গল টাইগার ও সুন্দরবনের বন্যপ্রাণী', en: 'Royal Bengal Tiger Safari' },
    title: {
      bn: 'দোবাঁকি ক্যানোপি ওয়াকওয়ে ও ৫ নদী মোহনা',
      en: 'Walk Above the Canopy & Cruise 5-River Confluences',
    },
    subtitle: {
      bn: 'ম্যানগ্রোভ শ্বাসমূলের মাঝে রয়েল বেঙ্গল টাইগার ও চিত্রল হরিণের বিচরণ, পঞ্চমুখী মোহনায় রক্তিম সূর্যাস্ত ও পাখিরালয়।',
      en: 'Royal Bengal tigers resting among mangrove roots, magical sunsets at Panchamukhi, and pristine wildlife sanctuaries.',
    },
    primaryCta: { bn: 'ডিলাক্স প্যাকেজ বুক করুন', en: 'Book Deluxe Package' },
    secondaryCta: { bn: 'দিনভিত্তিক সূচি দেখুন', en: 'View Day-by-Day Plan' },
    actionRoute: 'package-2-nights-3-days-deluxe',
  },
  {
    id: 'slide-3',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    badge: { bn: 'সজনেখালি ওয়াচ টাওয়ার ও মিষ্টি জলের পুকুর', en: 'Sajnekhali Watch Tower & Wildlife Complex' },
    title: {
      bn: 'সজনেখালি ওয়াচ টাওয়ার, হরিণ ও বন্যপ্রাণী কমপ্লেক্স',
      en: 'Sajnekhali Watch Tower, Spotted Deer & Wetland Habitat',
    },
    subtitle: {
      bn: 'ওয়াচ টাওয়ারের সামনে মিষ্টি জলের পুকুর পাড়ে চিত্রল হরিণের বিচরণ, সাদা বক ও সবুজ ম্যানগ্রোভের মাঝে সজনেখালির বিখ্যাত দৃশ্য।',
      en: 'Watch spotted deer grazing beside the sweet-water pond, egrets, and the iconic watch tower in the heart of Sundarbans.',
    },
    primaryCta: { bn: 'সজনেখালি বিবরণ দেখুন', en: 'Explore Sajnekhali' },
    secondaryCta: { bn: 'ট্যুর বুক করুন', en: 'Book Tour Package' },
    actionRoute: 'places',
  },
  {
    id: 'slide-4',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1600&q=80',
    badge: { bn: 'ম্যানগ্রোভ পাখিরালয় ও জীববৈচিত্র্য', en: 'Mangrove Avifauna & Great Egret' },
    title: {
      bn: 'শ্বাসমূলের চরে সাদা বক ও বিরল পাখির ওড়াউড়ি',
      en: 'Great Egrets & Rare Avifauna in the Tidal Mangroves',
    },
    subtitle: {
      bn: 'বৃষ্টির ভেজা হাওয়ায় সুন্দরবনের ম্যানগ্রোভ শ্বাসমূলে সাদা বক, মাছরাঙা ও দেশ-বিদেশের অতিথি পাখির রঙিন মেলা।',
      en: 'Watch great egrets, kingfishers, and rare migratory birds soaring over tidal mudflats and pneumatophore roots.',
    },
    primaryCta: { bn: 'ঐতিহ্য গল্প পড়ুন', en: 'Read Heritage Story' },
    secondaryCta: { bn: 'স্থান সমূহ দেখুন', en: 'Explore Destinations' },
    actionRoute: 'experience-gosaba-heritage',
  },
];

interface HeroCarousel3DProps {
  onNavigate: (route: string) => void;
}

export const HeroCarousel3D: React.FC<HeroCarousel3DProps> = ({ onNavigate }) => {
  const { language, isBengali } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex(prev => (prev + 1) % HERO_SLIDES.length);
      }
    }, 6000); // 6 seconds rotation
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentIndex];

  return (
    <div
      className="relative w-full h-[580px] sm:h-[640px] lg:h-[700px] overflow-hidden bg-[#06241B]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Background Images with Crossfade & Parallax Scale */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100 pointer-events-none'
          } transform transition-transform duration-10000`}
        >
          <img
            src={s.image}
            alt={s.title.en}
            className="w-full h-full object-cover object-center brightness-[0.70] contrast-[1.08]"
          />
          {/* Multi-layered Vignette & Contrast Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#06241B]/95 via-[#06241B]/60 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#06241B] via-transparent to-black/30" />
        </div>
      ))}

      {/* Floating Content Card */}
      <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white space-y-6 pt-8 sm:pt-0 animate-in fade-in slide-in-from-left-6 duration-700">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#134435]/90 border border-[#F4B942]/60 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm shadow-md">
            <Sparkles className="w-4 h-4 text-[#F4B942]" />
            <span>{slide.badge[language]}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.15] text-white drop-shadow-md">
            {slide.title[language]}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal drop-shadow-sm">
            {slide.subtitle[language]}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              id="hero-primary-cta"
              onClick={() => onNavigate(slide.actionRoute)}
              className="px-7 py-3.5 rounded-full bg-[#F4B942] hover:bg-[#ffc957] text-[#064E3B] font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Compass className="w-5 h-5" />
              <span>{slide.primaryCta[language]}</span>
            </button>

            <button
              id="hero-secondary-cta"
              onClick={() => onNavigate('plan-my-trip')}
              className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-base border border-white/30 backdrop-blur-md transition-all duration-300"
            >
              {slide.secondaryCta[language]}
            </button>
          </div>

          {/* Quick Stats Strip in Hero */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/15 max-w-lg text-xs sm:text-sm">
            <div>
              <div className="font-bold text-amber-300 text-lg sm:text-xl font-heading">২০১৯+</div>
              <div className="text-slate-300 text-xs">{isBengali ? 'সাল থেকে পরিষেবা' : 'Serving Since 2019'}</div>
            </div>
            <div>
              <div className="font-bold text-emerald-300 text-lg sm:text-xl font-heading">২০+</div>
              <div className="text-slate-300 text-xs">{isBengali ? 'যাচাইকৃত স্পট' : 'Verified Places'}</div>
            </div>
            <div>
              <div className="font-bold text-cyan-300 text-lg sm:text-xl font-heading">১০০%</div>
              <div className="text-slate-300 text-xs">{isBengali ? 'অনুমোদিত গাইড' : 'Licensed Guides'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Arrow Controls */}
      <button
        id="hero-prev-btn"
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-xs border border-white/10 transition-all hidden sm:flex items-center justify-center focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        id="hero-next-btn"
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-xs border border-white/10 transition-all hidden sm:flex items-center justify-center focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicator Dots & Pause Status */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-[#F4B942]' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
