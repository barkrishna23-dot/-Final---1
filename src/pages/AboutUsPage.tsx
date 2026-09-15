import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import founderOwnerPhoto from '../assets/images/founder_optimized.jpg';
import { AnimatedShowcaseGallery } from '../components/common/AnimatedShowcaseGallery';
import {
  ShieldCheck,
  Compass,
  Award,
  Trees,
  MapPin,
  CheckCircle2,
  Quote,
  Binoculars,
  FileText,
  ExternalLink,
  Eye,
  Download,
  Printer,
  X
} from 'lucide-react';

interface AboutUsPageProps {
  onNavigate?: (route: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = () => {
  const { language, isBengali } = useLanguage();
  const [showDriveModal, setShowDriveModal] = React.useState(false);

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

            {/* Quick link to Terms & Drive Copy */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#terms-cancellation-policy"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#064E3B] bg-[#E6F4EA] hover:bg-emerald-100 border border-emerald-300 px-4 py-2 rounded-xl transition-all shadow-xs group"
              >
                <FileText className="w-4 h-4 text-[#064E3B] group-hover:scale-110 transition-transform" />
                <span>{isBengali ? 'শর্তাবলী ও বাতিলকরণ নীতি (ড্রাইভ কপি দেখুন)' : 'Terms & Cancellation Policy (View Drive Copy)'}</span>
              </a>
            </div>
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

      {/* 4. যেসব স্থান ঘুরে দেখানো হয় (All Key Sightseeing Spots) */}
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
            { bn: 'পীরখালি ও গাজিখালি খাঁড়ি', en: 'Pirkhali & Gajikhali Narrow Creeks' },
            { bn: 'দেউলভারানী ও বনি ক্যাম্প (বিশেষ ট্যুর)', en: 'Deulbharani & Bonnie Camp' },
            { bn: 'ঝড়খালি ব্যাঘ্র পুনর্বাসন কেন্দ্র', en: 'Jharkhali Tiger Rescue Centre' },
            { bn: 'নেতিধোপানি ঐতিহাসিক ঘাট', en: 'Netidhopani Historic Ruins' },
            { bn: 'ম্যানগ্রোভ ইন্টারপ্রিটেশন সেন্টার', en: 'Mangrove Interpretation Centre' },
          ].map((spot, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200/80 flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium"
            >
              <MapPin className="w-4 h-4 text-[#F4B942] shrink-0" />
              <span className="line-clamp-1">{spot[language]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. আমাদের বৈশিষ্ট্য ও বিশেষত্ব (Why Choose Us) */}
      <div className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-[#E6F4EA] px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-[#064E3B]" />
            <span>{isBengali ? 'আমাদের বৈশিষ্ট্য' : 'Why Choose Sundarban Vromon'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'কেন সুন্দরবন ভ্রমণ বেছে নেবেন?' : 'Why Travelers Trust Us Since 2019'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: { bn: 'স্থানীয় বাস্তব অভিজ্ঞতা', en: 'Authentic Local Heritage' },
              desc: { bn: 'গোসাবাভিত্তিক স্থানীয় দল হওয়ায় সুন্দরবনের নদী, আবহাওয়া ও রুট সম্পর্কে আমাদের সরাসরি স্পষ্ট ধারণা রয়েছে।', en: 'Rooted in Gosaba, we know every mangrove turn, tidal flow, and village pathway first-hand.' }
            },
            {
              title: { bn: 'বাস্তবধর্মী ভ্রমণ পরিকল্পনা', en: 'Realistic Safari Planning' },
              desc: { bn: 'জোয়ার-ভাটা ও সময়ের হিসেব মিলিয়ে এমনভাবে ট্যুর সাজানো হয় যাতে ভ্রমণ আরামদায়ক ও উপভোগ্য হয়।', en: 'Itineraries matched scientifically with tide cycles so guests maximize wildlife and creek exploration.' }
            },
            {
              title: { bn: 'নিরাপত্তা ও নিয়মশৃঙ্খলা', en: 'Safety & Forest Compliance' },
              desc: { bn: 'বনদপ্তরের সমস্ত নিয়ম মেনে লাইফ জ্যাকেট, দক্ষ মাঝি ও নিবন্ধিত গাইড নিয়ে ভ্রমণ পরিচালিত হয়।', en: 'Strict compliance with Forest Dept safety protocols, life vests, licensed navigators, and trained naturalists.' }
            },
            {
              title: { bn: 'সুস্বাদু বাঙালি খাবার', en: 'Fresh & Hygienic Meals' },
              desc: { bn: 'নৌকা ও রিসোর্টে স্থানীয় টাটকা মাছ, সবজি ও ঘরোয়া বাঙালি রান্নার তৃপ্তিদায়ক স্বাদ।', en: 'Hearty, fresh, locally procured fish, crabs, and traditional Bengali dishes cooked fresh on boat/resort.' }
            },
            {
              title: { bn: 'দায়িত্বশীল ইকো-ট্যুরিজম', en: 'Responsible Eco-Tourism' },
              desc: { bn: 'প্লাস্টিক বর্জন, নদীর পরিচ্ছন্নতা রক্ষা এবং বন্যপ্রাণীদের বিরক্ত না করার নীতিতে আমরা অবিচল।', en: 'Strict zero-plastic policies, minimizing noise pollution, and preserving fragile mangrove biodiversity.' }
            },
            {
              title: { bn: 'সত্য ও স্বচ্ছ তথ্য', en: 'Transparency & Honest Truth' },
              desc: { bn: 'বন্যপ্রাণী দেখার নিশ্চিত গ্যারান্টি বা অবাস্তব প্রতিশ্রুতি না দিয়ে আমরা সত্য তথ্য ও আন্তরিক সেবা দিই।', en: 'Honest guidance without false wildlife sighting promises; complete pricing transparency.' }
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold font-heading">
                0{idx + 1}
              </div>
              <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                {card.title[language]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {card.desc[language]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. আমাদের অঙ্গীকার (Our Commitments) */}
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

      {/* 7. শর্তাবলী ও বাতিলকরণ নীতি (Terms & Cancellation Policy) */}
      <div id="terms-cancellation-policy" className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-[#E6F4EA] px-3.5 py-1.5 rounded-full border border-emerald-200">
            <FileText className="w-3.5 h-3.5 text-[#064E3B]" />
            <span>{isBengali ? 'বুকিং নীতি ও শর্তাবলী' : 'Booking Terms & Conditions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
            {isBengali ? 'শর্তাবলী ও বাতিলকরণ নীতি' : 'Terms, Cancellation & Refund Policy'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {isBengali
              ? 'সুন্দরবন ভ্রমণের প্রতিটি সফর সুশৃঙ্খল, নিরাপদ ও স্বচ্ছ রাখতে আমাদের নির্ধারিত নিয়মাবলী ও নীতিমালা।'
              : 'Our established guidelines to ensure every Sundarban expedition is disciplined, safe, and transparent.'}
          </p>
        </div>

        {/* Google Drive Document Access Card */}
        <div className="bg-gradient-to-br from-[#05291F] via-[#064E3B] to-[#0D3B2E] text-white p-5 sm:p-7 rounded-2xl border border-emerald-700/80 shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            {/* Google Drive SVG Logo */}
            <div className="w-12 h-12 rounded-2xl bg-white p-2.5 shadow-md shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 87.3 78" className="w-full h-full" aria-label="Google Drive">
                <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00ac47"/>
                <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
              </svg>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-amber-400/20 text-amber-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-amber-400/40">
                  {isBengali ? 'গুগল ড্রাইভ অফিসিয়াল কপি' : 'Official Google Drive Document'}
                </span>
                <span className="text-emerald-200 text-xs">
                  {isBengali ? 'শ্রীকৃষ্ণ বার স্বাক্ষরিত ও সত্যায়িত' : 'Signed & Verified by Srikrishna Bar'}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                {isBengali ? 'সুন্দরবন ভ্রমণ — শর্তাবলী ও বাতিলকরণ নীতি ড্রাইভ' : 'Sundarban Vromon — Terms & Cancellation Policy Drive'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-2xl">
                {isBengali
                  ? 'আমাদের পরিচয় ও স্বত্বাধিকারী শ্রীকৃষ্ণ বার কর্তৃক অনুমোদিত সম্পূর্ণ শর্তাবলী, বাতিল ও রিফান্ড নীতি এবং বন দপ্তর নির্দেশিকা সরাসরি গুগল ড্রাইভ ফাইলে দেখুন বা প্রিন্ট ও সেভ করুন।'
                  : 'Official document authorized by founder Srikrishna Bar containing full booking terms, refund schedules, and forest safety protocols.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => setShowDriveModal(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-950 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition-colors shadow-sm cursor-pointer"
            >
              <Eye className="w-4 h-4 text-emerald-800" />
              <span>{isBengali ? 'ড্রাইভ কপি প্রিভিউ' : 'Preview Document'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: বুকিং ও পেমেন্ট */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#064E3B] font-bold font-heading text-base sm:text-lg">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center justify-center border border-emerald-200">১</span>
              <h3>{isBengali ? 'বুকিং ও পেমেন্ট নিয়মাবলী' : 'Booking & Payment Terms'}</h3>
            </div>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>
                  {isBengali
                    ? 'বুকিং নিশ্চিত করতে মোট খরচের ২৫% অগ্রিম ডিপোজিট প্রদান করতে হবে।'
                    : 'A 25% advance deposit of the total package cost is required to confirm the booking.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>
                  {isBengali
                    ? 'অবশিষ্ট ৭৫% অর্থ যাত্রা শুরুর দিন গদখালি ফেরি ঘাটে পৌঁছানোর পর নগদ বা ইউপিআই (UPI) মাধ্যমে পরিশোধযোগ্য।'
                    : 'The remaining 75% balance is payable upon arriving at Godkhali Ferry Ghat via cash or UPI.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>
                  {isBengali
                    ? 'পেমেন্ট সম্পন্ন হলে তাৎক্ষণিক ই-রসিদ ও বুকিং কনফার্মেশন স্লিপ প্রদান করা হয়।'
                    : 'Instant digital invoice and booking confirmation slip are provided upon advance payment.'}
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: বাতিল ও রিফান্ড */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#064E3B] font-bold font-heading text-base sm:text-lg">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center justify-center border border-emerald-200">২</span>
              <h3>{isBengali ? 'বাতিল ও রিফান্ড নীতি' : 'Cancellation & Refund Policy'}</h3>
            </div>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>
                  {isBengali
                    ? 'ভ্রমণের ৭ দিন বা তার বেশি পূর্বে বাতিলের ক্ষেত্রে: অগ্রিম অর্থের ৮০% ফেরতযোগ্য।'
                    : 'Cancellation 7 days or more prior to travel date: 80% of advance deposit is refundable.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>
                  {isBengali
                    ? 'ভ্রমণের ৩ থেকে ৬ দিন পূর্বে বাতিলের ক্ষেত্রে: অগ্রিম অর্থের ৫০% ফেরতযোগ্য।'
                    : 'Cancellation 3 to 6 days prior to travel date: 50% of advance deposit is refundable.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>
                  {isBengali
                    ? 'ভ্রমণের ৪৮ ঘণ্টার মধ্যে বাতিলের ক্ষেত্রে: বনদপ্তরের বোট পারমিট ও হোটেল বুকিং প্রিপেমেন্টের কারণে কোনো অর্থ ফেরতযোগ্য নয়।'
                    : 'Cancellation within 48 hours of journey: Advance is non-refundable due to non-refundable forest permits and resort lock-ins.'}
                </span>
              </li>
            </ul>
          </div>

          {/* Card 3: বনদপ্তর ও আবহাওয়া সংক্রান্ত বিধিনিষেধ */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#064E3B] font-bold font-heading text-base sm:text-lg">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center justify-center border border-emerald-200">৩</span>
              <h3>{isBengali ? 'আবহাওয়া ও বনদপ্তরের বিধিমালা' : 'Weather & Forest Regulations'}</h3>
            </div>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>
                  {isBengali
                    ? 'প্রাকৃতিক দুর্যোগ, সাইক্লোন বা বন বিভাগের জরুরি নির্দেশে জলপথ বন্ধ থাকলে নিরাপত্তা বিবেচনায় রুট পুনর্নির্ধারণ করা হবে।'
                    : 'In cases of cyclones or sudden Forest Dept waterway closures, routes will be rescheduled prioritizing safety.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>
                  {isBengali
                    ? 'সুন্দরবন একটি উন্মুক্ত প্রাকৃতিক সংরক্ষিত বনাঞ্চল; বাঘ বা নির্দিষ্ট বন্যপ্রাণী দর্শনের কোনো অবাস্তব গ্যারান্টি দেওয়া হয় না।'
                    : 'Sundarbans is an untamed natural reserve; wildlife sightings depend entirely on nature, tides, and luck without false guarantees.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>
                  {isBengali
                    ? 'বোট সাফারিতে লাইফ জ্যাকেট পরিধান ও প্লাস্টিক বর্জন বাধ্যতামূলক।'
                    : 'Wearing life jackets on boat safari and strictly zero single-use plastics are mandatory.'}
                </span>
              </li>
            </ul>
          </div>

          {/* Card 4: পরিচয়পত্র ও আইনি তথ্যাদি */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#064E3B] font-bold font-heading text-base sm:text-lg">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center justify-center border border-emerald-200">৪</span>
              <h3>{isBengali ? 'পরিচয়পত্র ও সরকারি পারমিট নীতি' : 'ID Proof & Government Permits'}</h3>
            </div>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>
                  {isBengali
                    ? 'প্রত্যেক যাত্রীকে সরকারি ফটো আইডি কার্ড (আধার/ভোটার/পাসপোর্ট) সঙ্গে রাখা বাধ্যতামূলক।'
                    : 'Every traveler must carry a valid government photo ID (Aadhaar / Voter ID / Passport / Driving License).'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>
                  {isBengali
                    ? 'অতিথিদের পরিচয়পত্র শুধুমাত্র পশ্চিমবঙ্গ বন বিভাগের অফিসিয়াল এন্ট্রি পারমিটের জন্য ব্যবহৃত হয়।'
                    : 'Guest identification is solely used for issuing official West Bengal Forest Department entry permits.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>
                  {isBengali
                    ? 'বিদেশি পর্যটকদের ক্ষেত্রে আসল পাসপোর্ট ও বৈধ ভারতীয় ভিসা প্রয়োজন।'
                    : 'Foreign nationals require an original valid Passport with a current Indian Visa for forest clearance.'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Founder Sign-off / Policy declaration */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-700">
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">
              {isBengali
                ? 'পরিচালনা ও তত্ত্বাবধানে: শ্রীকৃষ্ণ বার (SRIKRISHNA BAR)'
                : 'Directed & Supervised by: SRIKRISHNA BAR (Sundarban Vromon)'}
            </p>
            <p className="text-xs text-slate-500">
              {isBengali
                ? 'প্রতিষ্ঠাতা ও স্বত্বাধিকারী, সুন্দরবন ভ্রমণ (Sundarban Vromon), গোসাবা, দক্ষিণ ২৪ পরগনা • ২০১৯ থেকে'
                : 'Founder & Owner, Sundarban Vromon, Gosaba, South 24 Parganas • Est. 2019'}
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 text-[#064E3B] font-bold text-xs border border-emerald-200 shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>{isBengali ? 'সরকারি অনুমোদিত নীতি' : 'Official Guidelines'}</span>
          </div>
        </div>
      </div>

      {/* 8. প্রতিষ্ঠাতার কথা (Founder's Personal Message - শ্রীকৃষ্ণ বার) - ফুটার সেকশনের ঠিক উপরে */}
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
              {isBengali ? 'শ্রীকৃষ্ণ বার • প্রতিষ্ঠাতা' : 'SRIKRISHNA BAR • Founder'}
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

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {isBengali ? 'শ্রীকৃষ্ণ বার (SRIKRISHNA BAR)' : 'SRIKRISHNA BAR'}
              </h3>
              <p className="text-amber-300 text-sm sm:text-base font-semibold mt-1">
                {isBengali ? 'প্রতিষ্ঠাতা ও স্বত্বাধিকারী, সুন্দরবন ভ্রমণ' : 'Founder & Owner, Sundarban Vromon'}
              </p>
            </div>

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
          </div>
        </div>
      </div>

      {/* Google Drive Document Preview Modal */}
      {showDriveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Top Bar */}
            <div className="bg-[#064E3B] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-emerald-800 shrink-0">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-amber-300" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-heading">
                    {isBengali ? 'অফিসিয়াল পলিসি ড্রাইভ ডকুমেন্ট প্রিভিউ' : 'Official Policy Drive Document Preview'}
                  </h3>
                  <p className="text-[11px] text-emerald-200">
                    {isBengali ? 'সুন্দরবন ভ্রমণ • শ্রীকৃষ্ণ বার স্বাক্ষরিত কপি' : 'Sundarban Vromon • Signed Copy by Srikrishna Bar'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowDriveModal(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document Content - Styled as Official Letterhead */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-800 leading-relaxed bg-stone-50/50">
              <div className="border-b-2 border-emerald-900 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#064E3B]">
                    SUNDARBAN VROMON (সুন্দরবন ভ্রমণ)
                  </h2>
                  <p className="text-xs text-slate-600 font-medium">
                    {isBengali
                      ? 'গোসাবা বাজার, সুন্দরবন, দক্ষিণ ২৪ পরগনা, পশ্চিমবঙ্গ — ৭৪৩৬১১'
                      : 'Gosaba Market, Sundarban, South 24 Parganas, West Bengal — 743611'}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    হেল্পলাইন: +91 90024 13094 • ইমেল: sundarbon.vromon.official@gmail.com
                  </p>
                </div>
                <div className="text-left sm:text-right text-[11px] text-slate-600 space-y-0.5">
                  <div className="font-bold text-slate-900">ডকুমেন্ট আইডি: SV/POL/2026-01</div>
                  <div>তারিখ: জানুয়ারি ২০২৬ (আপডেটেড)</div>
                  <span className="inline-block bg-emerald-100 text-[#064E3B] font-bold px-2 py-0.5 rounded text-[10px]">
                    APPROVED & VERIFIED
                  </span>
                </div>
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 underline decoration-[#F4B942] decoration-2 underline-offset-4">
                  {isBengali
                    ? 'সুন্দরবন ভ্রমণ — অফিসিয়াল বুকিং নিয়মাবলী, শর্তাবলী ও বাতিলকরণ নীতি'
                    : 'Official Booking Rules, Terms and Cancellation Policy'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isBengali
                    ? 'পরিচালনা ও স্বত্বাধিকারী: শ্রীকৃষ্ণ বার (SRIKRISHNA BAR)'
                    : 'Directed & Owned by: SRIKRISHNA BAR'}
                </p>
              </div>

              {/* Terms Points */}
              <div className="space-y-4 bg-white p-5 rounded-2xl border border-stone-200">
                <div className="space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">১</span>
                    <span>বুকিং ও পেমেন্ট নিয়মাবলী (Booking & Advance Payments)</span>
                  </h4>
                  <ul className="list-disc list-inside text-slate-700 pl-2 space-y-1">
                    <li>বুকিং নিশ্চিত করতে মোট ট্যুর প্যাকেজ মূল্যের ২৫% অগ্রিম অর্থ পরিশোধ বাধ্যতামূলক।</li>
                    <li>অবশিষ্ট ৭৫% অর্থ যাত্রা শুরুর দিন গদখালি ফেরি ঘাটে পৌঁছানোর পর নগদ বা ইউপিআই (UPI)-এ পরিশোধ করতে হবে।</li>
                    <li>অগ্রিম পেমেন্ট প্রাপ্তির পর তাৎক্ষণিক কনফার্মেশন ও ডিজিটাল ইনভয়েস প্রদান করা হবে।</li>
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">২</span>
                    <span>বাতিল ও ফেরত নীতি (Cancellation & Refund Policy)</span>
                  </h4>
                  <ul className="list-disc list-inside text-slate-700 pl-2 space-y-1">
                    <li>ভ্রমণের ৭ দিন বা তার আগে বুকিং বাতিল করলে: অগ্রিম অর্থের ৮০% ফেরত দেওয়া হবে।</li>
                    <li>ভ্রমণের ৩ থেকে ৬ দিন আগে বুকিং বাতিল করলে: অগ্রিম অর্থের ৫০% ফেরত দেওয়া হবে।</li>
                    <li>ভ্রমণের ৪৮ ঘণ্টার মধ্যে বুকিং বাতিল করলে: অগ্রিম অর্থ ফেরতযোগ্য নয় (যেহেতু বনদপ্তরের পারমিট ও হোটেল ফি অগ্রিম লক থাকে)।</li>
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">৩</span>
                    <span>আবহাওয়া, নিরাপত্তা ও বন দপ্তর বিধিমালা (Force Majeure & Forest Rules)</span>
                  </h4>
                  <ul className="list-disc list-inside text-slate-700 pl-2 space-y-1">
                    <li>সাইক্লোন, তীব্র ঝড় বা বনদপ্তরের আকস্মিক নিষেধাজ্ঞায় জলপথ বন্ধ থাকলে নিরাপত্তা বিবেচনায় রুট পুনর্নির্ধারণ করা হবে।</li>
                    <li>বন্যপ্রাণী (রয়্যাল বেঙ্গল টাইগার ইত্যাদি) দর্শন প্রাকৃতিক ভাগ্যের উপর নির্ভরশীল; কোনো কৃত্রিম গ্যারান্টি দেওয়া হয় না।</li>
                    <li>বোটে লাইফ জ্যাকেট পরা বাধ্যতামূলক এবং সুন্দরবনে কোনো সিঙ্গেল-ইউজ প্লাস্টিক বা ময়লা ফেলা সম্পূর্ণ নিষিদ্ধ।</li>
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">৪</span>
                    <span>পরিচয়পত্র ও সরকারি পারমিট (Govt ID Proof Requirements)</span>
                  </h4>
                  <ul className="list-disc list-inside text-slate-700 pl-2 space-y-1">
                    <li>প্রত্যেক পর্যটককে সরকারি বৈধ পরিচয়পত্র (আধার/ভোটার/পাসপোর্ট) সাথে রাখা আবশ্যক।</li>
                    <li>অতিথিদের পরিচয়পত্র শুধুমাত্র বনদপ্তরের সরকারি এন্ট্রি পারমিটের কাজে সুরক্ষিতভাবে ব্যবহৃত হয়।</li>
                  </ul>
                </div>
              </div>

              {/* Official Seal and Sign-off */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                    <span>পশ্চিমবঙ্গ বনদপ্তর মান্যতাপ্রাপ্ত ইকো-ট্যুর গাইডলাইন</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    সুন্দরবন ভ্রমণ • গোসাবা • রেজিস্টার্ড ইকো-ট্যুরিজম সার্ভিস
                  </p>
                </div>

                <div className="text-left sm:text-right border-l-2 sm:border-l-0 sm:border-r-2 border-[#F4B942] pl-3 sm:pl-0 sm:pr-3">
                  <div className="font-bold text-slate-900 text-sm">শ্রীকৃষ্ণ বার (SRIKRISHNA BAR)</div>
                  <div className="text-xs text-[#064E3B] font-semibold">প্রতিষ্ঠাতা ও স্বত্বাধিকারী</div>
                  <div className="text-[11px] text-slate-500">সুন্দরবন ভ্রমণ (Sundarban Vromon)</div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="bg-slate-100 px-5 sm:px-6 py-3.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F4B942] text-slate-950 font-bold text-xs sm:text-sm hover:bg-amber-300 transition-colors shadow-xs cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                  <span>{isBengali ? 'গুগল ড্রাইভে ফাইল খুলুন' : 'Open in Google Drive'}</span>
                </a>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-800 font-semibold text-xs sm:text-sm border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-slate-700" />
                  <span>{isBengali ? 'প্রিন্ট / সেভ' : 'Print / Save'}</span>
                </button>
              </div>

              <button
                onClick={() => setShowDriveModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                {isBengali ? 'বন্ধ করুন' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
