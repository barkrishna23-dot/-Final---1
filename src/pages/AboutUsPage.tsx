import React from 'react';
import { BRAND_INFO } from '../data/brandInfo';
import { useLanguage } from '../context/LanguageContext';
import gosabaTeamImg from '../assets/images/regenerated_image_1788720175291.png';
import founderOwnerPhoto from '../assets/images/founder_optimized.jpg';
import { AnimatedShowcaseGallery } from '../components/common/AnimatedShowcaseGallery';
import {
  ShieldCheck,
  Heart,
  Users,
  Compass,
  Award,
  Trees,
  Anchor,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
  Camera,
  Utensils,
  Navigation,
  Quote,
  Eye,
  Binoculars,
  Info,
  PhoneCall
} from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const { language, isBengali } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* 1. Main Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#064E3B] uppercase tracking-wider bg-[#E6F4EA] px-4 py-2 rounded-full border border-emerald-200">
          <Award className="w-4 h-4 text-[#F4B942]" />
          <span>{isBengali ? 'সুন্দরবন ভ্রমণ — প্রকৃতির আরও কাছে' : 'Sundarban Vromon — Closer to Nature'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B] leading-tight">
          {isBengali ? 'আমাদের পরিচয় ও অঙ্গীকার' : 'Our Identity & Commitments'}
        </h1>
        <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
          {isBengali
            ? '২০১৯ সাল থেকে দক্ষিণ ২৪ পরগনার গোসাবাভিত্তিক বিশ্বস্ত সুন্দরবন ভ্রমণ ও ইকো-ট্যুরিজম সেবা।'
            : 'Trusted Gosaba-based Sundarban tour and eco-tourism service since 2019.'}
        </p>
      </div>

      {/* 2. আমাদের পরিচয় (Who We Are) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              <span>{isBengali ? 'আমাদের পরিচয়' : 'Who We Are'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              {isBengali ? 'সুন্দরবন ভ্রমণ — প্রকৃতির আরও কাছে' : 'Sundarban Vromon — Closer to Nature'}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {isBengali ? (
                <>
                  <strong className="text-[#064E3B]">Sundarban Vromon</strong> পশ্চিমবঙ্গের দক্ষিণ ২৪ পরগনার গোসাবাভিত্তিক একটি সুন্দরবন ভ্রমণ পরিষেবা। সুন্দরবনের নদী, ম্যানগ্রোভ অরণ্য, বন্যপ্রাণী, ইতিহাস এবং স্থানীয় সংস্কৃতিকে পর্যটকদের সামনে দায়িত্বশীল ও সুন্দরভাবে তুলে ধরার লক্ষ্য নিয়ে ২০১৯ সালে আমাদের পথচলা শুরু হয়।
                </>
              ) : (
                <>
                  <strong className="text-[#064E3B]">Sundarban Vromon</strong> is a dedicated tour operator based in Gosaba, South 24 Parganas, West Bengal. Founded in 2019, our mission is to present the rivers, mangrove forests, wildlife, rich history, and indigenous culture of Sundarbans to travelers responsibly and authentically.
                </>
              )}
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {isBengali
                ? 'ছোট পরিসরে শুরু হওয়া এই যাত্রায় আমাদের প্রধান উদ্দেশ্য ছিল—পর্যটকদের সহজ ও সঠিক তথ্য দেওয়া, সুন্দরভাবে ভ্রমণ পরিকল্পনা করা এবং শুরু থেকে শেষ পর্যন্ত আন্তরিক সহযোগিতা প্রদান করা। অতিথিদের বিশ্বাস ও ভালোবাসা সঙ্গে নিয়ে আমরা আজও একই নিষ্ঠায় সুন্দরবন ভ্রমণের আয়োজন করে চলেছি।'
                : 'Starting modestly, our core vision has always been to provide travelers with transparent, factual information, well-structured itineraries, and heartfelt assistance from start to finish. Fueled by our guests’ trust and love, we continue organizing delta safaris with unyielding dedication.'}
            </p>
          </div>

          <AnimatedShowcaseGallery
            borderColorClass="border-emerald-950"
            containerClassName="lg:col-span-5 space-y-3"
            heightClass="h-[360px] sm:h-[390px]"
            showControls={true}
          />
        </div>
      </div>

      {/* 3. সুন্দরবনের সঙ্গে আমাদের সম্পর্ক */}
      <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
            <Trees className="w-3.5 h-3.5 text-emerald-800" />
            <span>{isBengali ? 'সুন্দরবনের সঙ্গে আমাদের সম্পর্ক' : 'Our Connection with Sundarbans'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
            {isBengali ? 'আমাদের জন্মভূমি, পরিচয় এবং আবেগের অংশ' : 'Our Homeland, Identity & Living Emotion'}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isBengali
              ? 'সুন্দরবন ভ্রমণের জন্য একটি অসাধারণ গন্তব্য, যেখানে ম্যানগ্রোভ অরণ্য এবং বন্যপ্রাণীর এক অন্যরকম অভিজ্ঞতা পাওয়া যায়। ভ্রমণের সময়, ভিডিও এবং ফটোর মাধ্যমে সুন্দরবনের এই অপূর্ব রূপ তুলে ধরা হয়েছে।'
              : 'Sundarbans is an extraordinary destination for travel, offering an unparalleled experience of mangrove wilderness and biodiversity. The soul of this journey is captured and presented through genuine photography and videography.'}
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isBengali
              ? 'সুন্দরবন কেবল একটি পর্যটনকেন্দ্র নয়; এটি আমাদের জন্মভূমি, পরিচয় এবং আবেগের অংশ। এখানকার নদীর গতিপথ, জোয়ার-ভাটা, দ্বীপের জীবন, ম্যানগ্রোভ অরণ্য এবং স্থানীয় সংস্কৃতির সঙ্গে আমাদের দীর্ঘদিনের পরিচয় রয়েছে। এই স্থানীয় অভিজ্ঞতাকে কাজে লাগিয়ে আমরা পর্যটকদের একটি স্বাভাবিক, নিরাপদ ও স্মরণীয় সুন্দরবন সফরের অভিজ্ঞতা দেওয়ার চেষ্টা করি।'
              : 'Sundarbans is not just a commercial tourist spot; it is our birthplace, our identity, and our passion. We hold decades-long familiarity with its tidal shifts, winding channels, island communities, and folklore. We channel this authentic grassroots experience to give travelers a seamless, safe, and truly unforgettable journey.'}
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isBengali
              ? 'সুন্দরবন পৃথিবীর বৃহত্তম ম্যানগ্রোভ অরণ্য অঞ্চল এবং রয়্যাল বেঙ্গল টাইগারসহ বহু প্রজাতির পাখি, সরীসৃপ ও জলজ প্রাণীর প্রাকৃতিক আবাসস্থল। ভারতের সুন্দরবন ন্যাশনাল পার্ক ১৯৮৭ সালে UNESCO বিশ্ব ঐতিহ্যের স্বীকৃতি লাভ করে।'
              : 'Sundarbans stands as the largest mangrove ecosystem on Earth and the natural habitat of the Royal Bengal Tiger alongside countless species of birds, reptiles, and aquatic creatures. Sundarbans National Park in India was designated a UNESCO World Heritage site in 1987.'}
          </p>
        </div>
      </div>

      {/* 4. আমাদের ট্যুর পরিষেবা (Our Tour Packages & Scope) */}
      <div className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-[#E6F4EA] px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B942]" />
            <span>{isBengali ? 'আমাদের ট্যুর পরিষেবা' : 'Our Tour Packages & Scope'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'সময় ও দলের প্রয়োজন অনুযায়ী সাজানো প্যাকেজ' : 'Tailored Safari Plans for Every Traveler'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {isBengali
              ? 'আমরা পর্যটকদের সময়, দলের সদস্যসংখ্যা ও প্রয়োজন অনুযায়ী বিভিন্ন ধরনের সুন্দরবন ভ্রমণ প্যাকেজ আয়োজন করি:'
              : 'We organize customized Sundarban tour packages tailored to your available time, group size, and preferences:'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: { bn: 'একদিনের সুন্দরবন ভ্রমণ', en: '1-Day Day Tour' },
              desc: { bn: 'সকাল থেকে সন্ধ্যা পর্যন্ত নদীভ্রমণ ও প্রধান স্পট দর্শন।', en: 'Full-day river safari covering iconic watch towers from morning till dusk.' }
            },
            {
              title: { bn: '১ রাত ২ দিনের ট্যুর', en: '1 Night 2 Days Package' },
              desc: { bn: 'সাপ্তাহিক ছুটির জন্য সবচেয়ে জনপ্রিয় ও রিফ্রেশিং ট্যুর।', en: 'The most popular short weekend gateway with night stay in eco-resorts.' }
            },
            {
              title: { bn: '২ রাত ৩ দিনের জনপ্রিয় প্যাকেজ', en: '2 Nights 3 Days Popular Package' },
              desc: { bn: 'সুন্দরবনের গভীর খাঁড়ি, ক্যানোপি ও গ্রাম্য জীবনের নিবিড় অভিজ্ঞতা।', en: 'Deep delta immersion covering Dobanki, Sudhanyakhali, and island villages.' }
            },
            {
              title: { bn: '৩ রাত ৪ দিনের বিস্তারিত সুন্দরবন সফর', en: '3 Nights 4 Days Extensive Safari' },
              desc: { bn: 'সম্পূর্ণ সুন্দরবন অরণ্য, দূরবর্তী ভিউ পয়েন্ট ও নিস্তব্ধ প্রকৃতির স্বাদ।', en: 'Comprehensive delta expedition exploring remote watch towers and creeks.' }
            },
            {
              title: { bn: 'পরিবার, বন্ধু ও শিক্ষার্থীদের গ্রুপ ট্যুর', en: 'Family, Friends & Student Groups' },
              desc: { bn: 'বিশেষ ছাড় ও আনন্দদায়ক গ্রুপ এক্টিভিটিসহ কাস্টমাইজড আয়োজন।', en: 'Special group discounts, family-friendly care, and educational tours.' }
            },
            {
              title: { bn: 'বিশেষ উৎসব ও মৌসুমি ট্যুর', en: 'Seasonal & Festive Expeditions' },
              desc: { bn: 'শীতকালীন পাখি দর্শন, পুজো ও নববর্ষের বিশেষ সাংস্কৃতিক প্যাকেজ।', en: 'Winter migratory bird watching, Durga Puja, and New Year festive specials.' }
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 font-heading">
                  {item.title[language]}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc[language]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-6 text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-emerald-950 font-medium">
            {isBengali
              ? 'প্যাকেজ অনুযায়ী যাতায়াত, নিবন্ধিত পর্যটক নৌকা, হোটেল বা রিসোর্ট, বাঙালি খাবার, ইকো-ট্যুরিজম গাইড এবং প্রয়োজন হলে ক্যামেরাম্যানের ব্যবস্থা করা হয়।'
              : 'Depending on the selected package, we arrange pickup & drop transport, licensed tourist boats, hygienic resorts/hotels, fresh Bengali cuisine, eco-guides, and dedicated camera operators.'}
          </p>
        </div>
      </div>

      {/* 5. যেসব স্থান ঘুরে দেখানো হয় (All Key Sightseeing Spots) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
            <Binoculars className="w-3.5 h-3.5 text-emerald-800" />
            <span>{isBengali ? 'দর্শনীয় স্থানসমূহ' : 'Key Destinations We Cover'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'যেসব স্থান ঘুরে দেখানো হয়' : 'Destinations & Landmarks on Our Itineraries'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {isBengali
              ? 'সময়, আবহাওয়া, জোয়ার-ভাটা এবং বনদপ্তরের অনুমতি অনুযায়ী আমাদের ভ্রমণসূচিতে থাকতে পারে:'
              : 'Subject to available time, weather conditions, tidal shifts, and Forest Department clearances:'}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { bn: 'সজনেখালি ওয়াচ টাওয়ার', en: 'Sajnekhali Watch Tower' },
            { bn: 'সুধন্যখালি ওয়াচ টাওয়ার', en: 'Sudhanyakhali Watch Tower' },
            { bn: 'দোবাঁকি ক্যানোপি ওয়াক', en: 'Dobanki Canopy Walk' },
            { bn: 'পাখিরালয় দ্বীপ', en: 'Pakhiralay Island' },
            { bn: 'গোসাবা বাজার ও দ্বীপ', en: 'Gosaba Island' },
            { bn: 'ঐতিহাসিক হ্যামিল্টন ও বেকন বাংলো', en: 'Historic Hamilton & Beacon Bungalow' },
            { bn: 'পঞ্চমুখী নদীর মিলনস্থল', en: 'Panchamukhi 5-River Confluence' },
            { bn: 'পীরখালি ও গাজিখালির নদীপথ', en: 'Pirkhali & Gajikhali Creeks' },
            { bn: 'ঝড়খালি টাইগার রেসকিউ সেন্টার', en: 'Jharkhali Tiger Reserve' },
            { bn: 'বুড়িরডাবরি ওয়াচ টাওয়ার', en: 'Burirdabri Watch Tower' },
            { bn: 'রাইমঙ্গল ভিউ পয়েন্ট', en: 'Raimangal River Viewpoint' },
            { bn: 'ভাগবতপুর কুমির প্রকল্প', en: 'Bhagabatpur Crocodile Project' },
          ].map((spot, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-stone-200 flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium hover:bg-emerald-50 hover:border-emerald-300 transition-all"
            >
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{spot[language]}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-slate-500 italic pt-2">
          {isBengali
            ? 'বোট সাফারি এবং সজনেখালি, সুধন্যখালি ও দোবাঁকির মতো পর্যটনকেন্দ্র পশ্চিমবঙ্গ পর্যটন দপ্তরের সুন্দরবন ভ্রমণ তথ্যেও বিশেষ আকর্ষণ হিসেবে উল্লেখিত।'
            : 'Cruising safaris and major watchtowers like Sajnekhali, Sudhanyakhali, and Dobanki are highlighted in West Bengal Tourism official guidelines.'}
        </p>
      </div>

      {/* 6. নিরাপত্তা ও দায়িত্বশীল পর্যটন */}
      <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
            <span>{isBengali ? 'নিরাপত্তা ও দায়িত্বশীল পর্যটন' : 'Safety & Responsible Tourism'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
            {isBengali ? 'অতিথিদের সুরক্ষা ও সুন্দরবনের পরিবেশ রক্ষা' : 'Guest Safety & Environmental Protection'}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isBengali
              ? 'অতিথিদের নিরাপত্তা এবং সুন্দরবনের পরিবেশ রক্ষা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। তাই আমরা বনদপ্তরের নিয়ম মেনে নিবন্ধিত নৌকা ও ইকো-ট্যুরিজম গাইডের সমন্বয়ে ভ্রমণ পরিচালনার চেষ্টা করি।'
              : 'Guest safety and mangrove forest conservation are our highest priorities. We conduct every safari in strict compliance with Forest Department mandates using registered boats and authorized eco-guides.'}
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {isBengali
              ? 'সরকারি নিয়ম অনুযায়ী সুন্দরবনের পর্যটক নৌকায় পর্যাপ্ত লাইফ জ্যাকেট, প্রাথমিক চিকিৎসার বাক্স, অগ্নিনির্বাপক যন্ত্র এবং ময়লা রাখার ব্যবস্থা থাকা প্রয়োজন।'
              : 'As mandated by official regulations, all tourist boats are fully equipped with certified life vests, emergency first-aid kits, fire extinguishers, and onboard waste management bins.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { bn: 'প্লাস্টিক বা আবর্জনা নদী বা বনে না ফেলা', en: 'Zero plastic or waste disposal in waters' },
            { bn: 'উচ্চ শব্দে গান না বাজানো', en: 'No loud music to maintain natural silence' },
            { bn: 'বন্যপ্রাণীকে বিরক্ত বা প্রলুব্ধ না করা', en: 'Zero wildlife disturbance or feeding' },
            { bn: 'স্থানীয় মানুষের সংস্কৃতিকে সম্মান প্রদর্শন', en: 'Respect for local culture and customs' },
          ].map((rule, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-center gap-2.5 text-xs text-slate-800 font-medium"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{rule[language]}</span>
            </div>
          ))}
        </div>

        <div className="p-4 bg-emerald-950 text-white rounded-2xl space-y-1">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Info className="w-4 h-4" />
            <span>{isBengali ? 'বন্যপ্রাণী দেখার বাস্তব সত্যতা' : 'Truthful Wildlife Policy'}</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100">
            {isBengali
              ? 'সুন্দরবন একটি প্রাকৃতিক অরণ্য—তাই বাঘ বা অন্য কোনো বন্যপ্রাণী দেখার নিশ্চয়তা দেওয়া সম্ভব নয়। আমরা কোনো মিথ্যা প্রতিশ্রুতি না দিয়ে সুন্দরবনের প্রকৃত সৌন্দর্য উপভোগ করার অভিজ্ঞতাকেই গুরুত্ব দিই।'
              : 'Sundarbans is an untouched natural wilderness—wildlife sightings depend entirely on nature. We strictly avoid making false guarantees about tiger sightings, emphasizing the real, authentic wonder of the mangrove delta.'}
          </p>
        </div>
      </div>

      {/* 7. প্রতিষ্ঠাতার কথা (Founder's Personal Message) */}
      <div className="bg-gradient-to-br from-[#06241B] via-[#064E3B] to-[#0A3D2E] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden space-y-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-4 border-amber-400 shrink-0 shadow-2xl bg-emerald-950 group">
            <img
              src={founderOwnerPhoto}
              alt={isBengali ? 'সুন্দরবন ভ্রমণের প্রতিষ্ঠাতা ও মালিক' : 'Founder & Owner, Sundarban Vromon'}
              onError={(e) => {
                e.currentTarget.src = '/DSC_0390.JPG';
              }}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/80 backdrop-blur-xs text-[11px] text-amber-300 font-bold text-center py-1 rounded-md border border-amber-400/30">
              {isBengali ? 'মালিক ও প্রতিষ্ঠাতা' : 'Founder & Owner'}
            </div>
          </div>

          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                <Quote className="w-3 h-3 text-amber-300" />
                <span>{isBengali ? 'প্রতিষ্ঠাতার কথা' : 'Founder’s Message'}</span>
              </div>
              <span className="text-xs font-bold text-emerald-200 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                {isBengali ? 'গোসাবা, সুন্দরবন (২০১৯ থেকে)' : 'Gosaba, Sundarban (Since 2019)'}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {isBengali ? 'সুন্দরবন ভ্রমণ (Sundarban Vromon)-এর প্রতিষ্ঠাতা ও পরিচালক' : 'Founder & Owner, Sundarban Vromon'}
            </h3>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              {isBengali
                ? 'সুন্দরবনের প্রকৃতি ও মানুষের প্রতি ভালোবাসা থেকেই ২০১৯ সালে পর্যটকদের নিয়ে ভ্রমণ আয়োজন শুরু করি। আমার লক্ষ্য শুধু ট্যুর প্যাকেজ বিক্রি করা নয়—প্রতিটি অতিথি যেন সুন্দরবনের প্রকৃতি, ইতিহাস ও সংস্কৃতিকে কাছ থেকে জানতে পারেন এবং আনন্দময় স্মৃতি নিয়ে নিরাপদে বাড়ি ফিরে যান।'
                : 'Driven by deep love for the mangrove delta and its hardworking people, I started hosting travelers in 2019. My goal is never just to sell packages—it is to ensure every guest intimately experiences the nature, history, and folklore of Sundarbans, returning home with cherished memories.'}
            </p>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              {isBengali
                ? 'ভ্রমণের পরিকল্পনা থেকে যাতায়াত, নৌকা, থাকা, খাবার, গাইড এবং দর্শনীয় স্থান পরিদর্শন—প্রতিটি পর্যায়ে অতিথিদের পাশে থাকার চেষ্টা করি। অতিথিদের বিশ্বাস ও সন্তুষ্টিই আমাদের পথচলার সবচেয়ে বড় অনুপ্রেরণা।'
                : 'From itinerary planning to transportation, riverboats, accommodation, food, guides, and watchtower visits—we stand by our guests at every step. Your trust and satisfaction remain our greatest inspiration.'}
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
                  isBengali
                    ? 'নমস্কার, সুন্দরবন ভ্রমণের প্রতিষ্ঠাতার সাথে সরাসরি কথা বলতে চাই।'
                    : 'Hello, I would like to speak directly with the founder of Sundarban Vromon.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs sm:text-sm shadow-md transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{isBengali ? 'প্রতিষ্ঠাতার সাথে সরাসরি কথা বলুন (WhatsApp)' : 'Connect with Founder directly (WhatsApp)'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 8. আমাদের অঙ্গীকার (Our Commitments) */}
      <div className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5 text-emerald-800" />
            <span>{isBengali ? 'আমাদের অঙ্গীকার' : 'Our Commitments'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'অতিথিদের প্রতি আমাদের ৯টি সুদৃঢ় অঙ্গীকার' : 'Our 9 Sacred Commitments to Every Guest'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { bn: 'প্যাকেজের বিস্তারিত তথ্য স্বচ্ছভাবে জানানো', en: 'Complete transparency on all package details and inclusions' },
            { bn: 'পরিকল্পিত দিনভিত্তিক সুনির্দিষ্ট ভ্রমণসূচি', en: 'Well-structured, punctual day-by-day travel itinerary' },
            { bn: 'পরিষ্কার ও স্বাস্থ্যসম্মত খাবারের ব্যবস্থা', en: 'Hygienic, freshly prepared authentic Bengali meals' },
            { bn: 'আরামদায়ক ও মানসম্মত থাকার জায়গা নির্বাচন', en: 'Selection of comfortable and verified resorts/hotels' },
            { bn: 'নিবন্ধিত নৌকা ও অভিজ্ঞ গাইডের সমন্বয়', en: 'Coordination with licensed safari boats and guides' },
            { bn: 'অতিথিদের সঙ্গে সার্বক্ষণিক নিয়মিত যোগাযোগ', en: 'Continuous communication and ground support throughout' },
            { bn: 'প্রকৃতি ও স্থানীয় সংস্কৃতির প্রতি গভীর সম্মান', en: 'Deep respect for mangrove ecology and island traditions' },
            { bn: 'বন্যপ্রাণী দেখানোর মিথ্যা নিশ্চয়তা না দেওয়া', en: 'Zero fake promises regarding wildlife sightings' },
            { bn: 'নিরাপদ ও দায়িত্বশীল পর্যটনকে অগ্রাধিকার দেওয়া', en: 'Prioritizing passenger safety and responsible ecotourism' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium"
            >
              <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
              <span>{item[language]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 9. আমাদের সঙ্গে সুন্দরবন আবিষ্কার করুন (Closing Call to Action) */}
      <div className="bg-gradient-to-r from-[#064E3B] via-[#0D5C43] to-[#064E3B] rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">
            {isBengali ? 'আমাদের সঙ্গে সুন্দরবন আবিষ্কার করুন' : 'Discover Sundarbans With Us'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white">
            {isBengali
              ? 'প্রশস্ত নদী, সরু খাঁড়ি, ম্যানগ্রোভের শ্বাসমূল, পাখির ডাক, গ্রামের সহজ জীবন এবং নদীর ওপর সূর্যাস্ত—সুন্দরবনের প্রতিটি মুহূর্তে রয়েছে নতুন গল্প।'
              : 'Wide tidal rivers, narrow mangrove creeks, pneumatophores, bird calls, simple village life, and sunsets over the water—every moment holds a new story.'}
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
            {isBengali
              ? 'সেই গল্পের অংশ হতে আপনার পরিবার ও প্রিয়জনদের নিয়ে চলে আসুন সুন্দরবনে। আপনার ভ্রমণকে পরিকল্পিত, আনন্দময় ও স্মরণীয় করে তুলতে পাশে থাকবে— Sundarban Vromon।'
              : 'Be part of this story with your family and loved ones. Sundarban Vromon stands by your side to make your journey perfectly planned, joyful, and unforgettable.'}
          </p>
        </div>

        <div className="pt-4 border-t border-emerald-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-lg font-bold text-white font-heading">
              Sundarban Vromon
            </div>
            <div className="text-xs text-amber-300 font-medium">
              {isBengali
                ? '২০১৯ সাল থেকে সুন্দরবন ভ্রমণে আপনার বিশ্বস্ত সহযোগী।'
                : 'Your Trusted Companion in Sundarban Safaris Since 2019.'}
            </div>
            <div className="text-xs text-emerald-200 font-semibold mt-0.5">
              {isBengali ? 'প্রকৃতির আরও কাছে — সুন্দরবনের আরও গভীরে।' : 'Closer to Nature — Deeper into Sundarbans.'}
            </div>
          </div>

          <div className="text-xs text-slate-200 bg-white/10 px-4 py-2.5 rounded-xl border border-white/20">
            {BRAND_INFO.locations.kolkataOffice} • {BRAND_INFO.locations.godkhaliDesk} • {BRAND_INFO.phone}
          </div>
        </div>
      </div>
    </div>
  );
};


