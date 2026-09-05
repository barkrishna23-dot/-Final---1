import React from 'react';
import { HeroCarousel3D } from '../components/home/HeroCarousel3D';
import { QuickTrustStrip } from '../components/home/QuickTrustStrip';
import { InteractiveJourneyMap } from '../components/home/InteractiveJourneyMap';
import { HamiltonStorySection } from '../components/home/HamiltonStorySection';
import { PackageCard } from '../components/packages/PackageCard';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { WildlifeHonestyPanel } from '../components/common/WildlifeHonestyPanel';
import { useLanguage } from '../context/LanguageContext';
import { useAdmin } from '../context/AdminContext';
import { TOUR_PACKAGES } from '../data/packages';
import { DESTINATIONS } from '../data/destinations';
import { FOOD_MENU_ITEMS } from '../data/foodMenu';
import { Compass, ArrowRight, Utensils, Star, ShieldCheck, Sparkles, Camera, Play, Image as ImageIcon, Video } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { YOUTUBE_VIDEOS } from '../data/youtubeVideos';

interface HomePageProps {
  onNavigate: (route: string) => void;
  onSelectPackage: (slug: string) => void;
  onSelectDestination: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectPackage,
  onSelectDestination,
}) => {
  const { language, isBengali } = useLanguage();
  const { reviews } = useAdmin();

  // Top 3 featured packages
  const featuredPackages = TOUR_PACKAGES.slice(0, 3);
  // Top 6 destinations
  const featuredDestinations = DESTINATIONS.slice(0, 6);
  // Top 4 food items
  const featuredFood = FOOD_MENU_ITEMS.slice(0, 4);

  return (
    <div className="space-y-16">
      {/* 1. Hero Carousel */}
      <HeroCarousel3D onNavigate={onNavigate} />

      {/* 2. Quick Trust Pillars Strip */}
      <QuickTrustStrip />

      {/* 3. আমাদের পরিচয় (About Us & Founder Story Spotlight) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-emerald-50/40 to-amber-50/30 rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-md space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-emerald-100/80 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{isBengali ? 'আমাদের পরিচয় — সুন্দরবন ভ্রমণ—প্রকৃতির আরও কাছে' : 'About Us — Sundarban Vromon — Closer to Nature'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#064E3B] leading-tight">
                {isBengali
                  ? 'গোসাবাভিত্তিক বিশ্বস্ত সুন্দরবন ভ্রমণ সেবা (২০১৯ থেকে)'
                  : 'Gosaba-Based Trusted Sundarban Delta Safari (Since 2019)'}
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {isBengali
                  ? 'Sundarban Vromon পশ্চিমবঙ্গের দক্ষিণ ২৪ পরগনার গোসাবাভিত্তিক একটি সুন্দরবন ভ্রমণ পরিষেবা। সুন্দরবনের নদী, ম্যানগ্রোভ অরণ্য, বন্যপ্রাণী, ইতিহাস এবং স্থানীয় সংস্কৃতিকে পর্যটকদের সামনে দায়িত্বশীল ও সুন্দরভাবে তুলে ধরার লক্ষ্য নিয়ে ২০১৯ সালে আমাদের পথচলা শুরু হয়।'
                  : 'Sundarban Vromon is a specialized tour operator based in Gosaba, South 24 Parganas, West Bengal. Founded in 2019, our mission is to present the rivers, mangrove wilderness, biodiversity, and local culture of Sundarbans responsibly and authentically.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm font-medium text-slate-800">
                <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{isBengali ? 'বাঘ দেখানোর মিথ্যা নিশ্চয়তা না দেওয়া' : 'Zero Fake Guarantees for Sightings'}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{isBengali ? 'নিবন্ধিত বোট, গাইড ও বাঙালি খাবার' : 'Registered Vessels & Authentic Hospitality'}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about-us')}
                  className="px-6 py-3 rounded-full bg-[#064E3B] hover:bg-[#096049] text-white font-bold text-sm shadow-md transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>{isBengali ? 'আমাদের সম্পূর্ণ পরিচিতি ও অঙ্গীকার পড়ুন' : 'Read Full Story & Commitments'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
                  alt="Sundarban Vromon Team & Safari"
                  className="w-full h-[320px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
                    Sundarban Vromon
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-100">
                    {isBengali ? 'প্রকৃতির আরও কাছে — সুন্দরবনের আরও গভীরে।' : 'Closer to Nature — Deeper into Sundarbans.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Packages Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{isBengali ? 'জনপ্রিয় ট্যুর প্যাকেজ সমূহ' : 'Signature Tour Packages'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#064E3B]">
              {isBengali ? 'আপনার সময় ও বাজেট অনুযায়ী সঠিক প্যাকেজ' : 'Find Your Ideal Sundarban Safari'}
            </h2>
          </div>

          <button
            onClick={() => onNavigate('packages')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#064E3B] hover:text-[#096049] transition-colors"
          >
            <span>{isBengali ? 'সকল প্যাকেজ দেখুন (৫টি)' : 'View All 5 Packages'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map(pkg => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={slug => onSelectPackage(slug)}
              onBookNow={slug => {
                onSelectPackage(slug);
                onNavigate('booking');
              }}
            />
          ))}
        </div>
      </section>

      {/* 4. Interactive Route Map Section (Kolkata to Mangroves) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveJourneyMap
          onSelectPlace={slug => {
            onSelectDestination(slug);
            onNavigate('places');
          }}
        />
      </section>

      {/* 5. 20 Verified Destinations Grid Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7490] uppercase tracking-wider bg-sky-100 px-3 py-1 rounded-full mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>{isBengali ? '২০টি যাচাইকৃত পর্যটন স্পট' : '20 Field-Verified Destinations'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#064E3B]">
              {isBengali ? 'ওয়াচ টাওয়ার, খাঁড়ি ও প্রাকৃতিক দ্বীপ' : 'Watch Towers, Creeks & Sanctuaries'}
            </h2>
          </div>

          <button
            onClick={() => onNavigate('places')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#064E3B] hover:text-[#096049] transition-colors"
          >
            <span>{isBengali ? 'সকল ২০টি স্থান দেখুন' : 'Explore All 20 Destinations'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDestinations.map(d => (
            <DestinationCard
              key={d.id}
              destination={d}
              onSelect={slug => {
                onSelectDestination(slug);
                onNavigate('places');
              }}
            />
          ))}
        </div>
      </section>

      {/* 6. River-to-Creek 9-Chapter Safari Experience Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/85 backdrop-blur-md py-12 sm:py-16 px-6 sm:px-10 rounded-3xl border border-white/60 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#064E3B] text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-[#064E3B]" />
                <span>{isBengali ? 'ইমারসিভ সাফারি অভিজ্ঞতা' : 'Visual Storytelling Odyssey'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#064E3B] leading-tight">
                {isBengali
                  ? 'গদখালি থেকে নিস্তব্ধ খাঁড়ি: ৯টি অধ্যায়ে সুন্দরবনের রূপকথা'
                  : 'From Wide Estuaries to Whispering Creeks: A 9-Chapter Narrative'}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {isBengali
                  ? 'উত্তাল মাতলা নদী পার হওয়া, ভাটার সময় কাদায় জেগে ওঠা হাজারো লাল কাঁকড়া, দোবাঁকির ঝুলন্ত তারের ক্যানোপি ওয়াক এবং পঞ্চমুখীর মোহনায় রক্তিম সূর্যাস্ত—প্রতিটি অধ্যায়ের ছবি ও বাস্তব অনুভূতি জানুন।'
                  : 'Follow the chronological metamorphosis of a true safari: crossing roaring confluences, low-tide mudflat discoveries, high canopy walks, and evening island folk melodies.'}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 shadow-xs">
                  <strong className="block text-[#064E3B] mb-0.5">অধ্যায় ১–৩</strong>
                  <span>গদখালি ও মাতলা নদী হয়ে বনের সীমায় প্রবেশ</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 shadow-xs">
                  <strong className="block text-[#064E3B] mb-0.5">অধ্যায় ৪–৬</strong>
                  <span>ভাটার কাঁকড়া ও সজনেখালি-সুধন্যখালি টাওয়ার</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 shadow-xs">
                  <strong className="block text-[#064E3B] mb-0.5">অধ্যায় ৭–৮</strong>
                  <span>দোবাঁকি ঝুলন্ত ওয়াকওয়ে ও পঞ্চমুখী সূর্যাস্ত</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 shadow-xs">
                  <strong className="block text-[#064E3B] mb-0.5">অধ্যায় ৯</strong>
                  <span>পাখিরালয়ে বাউলের গান ও রাতের ভোজ</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('experience-river-to-creek')}
                  className="px-7 py-3.5 rounded-full bg-[#064E3B] hover:bg-[#096049] text-white font-bold text-sm shadow-md transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>{isBengali ? 'সাফারি গল্প পড়ুন' : 'Read Full 9-Chapter Narrative'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
                  alt="Sundarban Creek Safari"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                    {isBengali ? 'পীরখালি সরু ক্যানাল' : 'Pirkhali Creek Drift'}
                  </div>
                  <h4 className="text-xl font-bold font-heading text-white">
                    {isBengali ? 'ইঞ্জিন বন্ধ করে বনের নিস্তব্ধ সুর' : 'Silent Drifting Under Mangrove Boughs'}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Sir Daniel Hamilton & Rabindranath Tagore 1932 Feature */}
      <HamiltonStorySection onNavigate={onNavigate} />

      {/* 8. Authentic Bengali Cuisine Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full mb-2">
              <Utensils className="w-3.5 h-3.5 text-amber-800" />
              <span>{isBengali ? 'খাঁটি বাঙালি রসনা ও বোট রান্না' : 'Authentic 5-Course Bengali Gastronomy'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#064E3B]">
              {isBengali ? 'গরম গরম গলদা চিংড়ি, ভেটকি পাতুরি ও ইলিশ ভোজ' : 'Fresh Catch Seafood & Royal Bengali Feasts'}
            </h2>
          </div>

          <button
            onClick={() => onNavigate('food')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#064E3B] hover:text-[#096049] transition-colors"
          >
            <span>{isBengali ? 'সম্পূর্ণ খাবার মেনু দেখুন' : 'Explore Full Daily Menu'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFood.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden animated-round-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name.en}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-xs">
                  {item.mealType}
                </span>
              </div>
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between text-slate-800">
                <div>
                  <h4 className="font-bold text-base font-heading text-[#064E3B] leading-tight">
                    {item.name[language]}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                    {item.description[language]}
                  </p>
                </div>
                {item.allergens && (
                  <div className="text-[11px] text-amber-900 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md font-medium">
                    {isBengali ? 'অ্যালার্জি তথ্য:' : 'Allergen note:'} {item.allergens[language]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8.5. ফটো ও ভিডিও গ্যালারি — সুন্দরবন ভ্রমণের জন্য একটি অসাধারণ গন্তব্য */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/40 rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-md space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-emerald-100/90 px-3.5 py-1.5 rounded-full border border-emerald-200">
                <Camera className="w-3.5 h-3.5 text-emerald-800" />
                <span>{isBengali ? 'ছবি ও ভিডিওতে সুন্দরবনের অভিজ্ঞতা' : 'Visual Odyssey in Photos & Videos'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#064E3B] leading-tight">
                {isBengali
                  ? 'সুন্দরবন ভ্রমণের জন্য একটি অসাধারণ গন্তব্য'
                  : 'Sundarbans: An Extraordinary Delta Expedition'}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {isBengali
                  ? 'সুন্দরবন ভ্রমণের জন্য একটি অসাধারণ গন্তব্য, যেখানে ম্যানগ্রোভ অরণ্য এবং বন্যপ্রাণীর এক অন্যরকম অভিজ্ঞতা পাওয়া যায়। ভ্রমণের সময়, ভিডিও এবং ফটোর মাধ্যমে তুলে ধরা হয়েছে।'
                  : 'Sundarbans is an extraordinary destination for travel, offering a unique experience of mangrove forests and wildlife. The essence of the journey is captured and presented through authentic videos and photography.'}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('gallery-photos')}
                className="px-4 py-2.5 rounded-full bg-[#064E3B] hover:bg-[#096049] text-white text-xs sm:text-sm font-bold shadow-xs transition-all inline-flex items-center gap-2"
              >
                <ImageIcon className="w-4 h-4" />
                <span>{isBengali ? 'সকল ছবি দেখুন' : 'View Photos'}</span>
              </button>
              <button
                onClick={() => onNavigate('youtube-videos')}
                className="px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all inline-flex items-center gap-2"
              >
                <Video className="w-4 h-4" />
                <span>{isBengali ? 'ভিডিও দেখুন' : 'Watch Videos'}</span>
              </button>
            </div>
          </div>

          {/* Photo & Video Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Featured Video Embed (md:col-span-7) */}
            <div className="md:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEOS[0]?.youtubeId || '3u_cE_pS58A'}`}
                  title={YOUTUBE_VIDEOS[0]?.title.en || 'Sundarban Safari Video'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 space-y-1.5 bg-white">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="text-red-600 font-bold flex items-center gap-1">
                    <Play className="w-3.5 h-3.5 fill-red-600" />
                    {isBengali ? 'সাফারি ভিডিও ভ্লগ' : 'Safari Video'}
                  </span>
                  <span>{YOUTUBE_VIDEOS[0]?.duration || '14:20'}</span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 font-heading line-clamp-1">
                  {YOUTUBE_VIDEOS[0]?.title[language]}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {YOUTUBE_VIDEOS[0]?.description[language]}
                </p>
              </div>
            </div>

            {/* Photo Highlights (md:col-span-5) */}
            <div className="md:col-span-5 grid grid-cols-2 gap-3">
              {GALLERY_ITEMS.slice(0, 4).map(item => (
                <div
                  key={item.id}
                  onClick={() => onNavigate('gallery-photos')}
                  className="group relative rounded-2xl overflow-hidden h-36 sm:h-40 cursor-pointer shadow-xs border border-slate-200 bg-slate-100"
                >
                  <img
                    src={item.mediaUrl}
                    alt={item.title.en}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-2.5 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold leading-tight line-clamp-1">
                      {item.title[language]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Ethical Wildlife Sighting Policy Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WildlifeHonestyPanel />
      </section>

      {/* 10. Final Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-r from-[#064E3B] via-[#0D5C43] to-[#064E3B] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading leading-tight text-white">
              {isBengali
                ? 'সুন্দরবনের খাঁড়িতে আপনার রোমাঞ্চকর যাত্রা শুরু হোক'
                : 'Plan Your Safe & Memorable Sundarban Safari Today'}
            </h3>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              {isBengali
                ? 'পছন্দসই তারিখ ও গ্রুপ সাইজ নির্বাচন করে সরাসরি কোটেশন নিন। আমাদের অভিজ্ঞ টিম ২৪ ঘণ্টার মধ্যে সকল অনুমতিসহ আসন নিশ্চিত করবে।'
                : 'Select your preferred dates and group size for an immediate transparent quote. Our certified team handles all forest permits.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onNavigate('booking')}
              className="px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base shadow-lg transition-all text-center"
            >
              {isBengali ? 'অনলাইন বুকিং করুন' : 'Book Safari Online'}
            </button>
            <button
              onClick={() => onNavigate('plan-my-trip')}
              className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-base backdrop-blur-md transition-all text-center"
            >
              {isBengali ? 'কাস্টম ট্রিপ কম্পোজার' : 'Custom Trip Builder'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
