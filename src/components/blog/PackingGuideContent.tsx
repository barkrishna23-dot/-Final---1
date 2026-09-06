import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Compass,
  CheckCircle2,
  AlertTriangle,
  Info,
  Camera,
  Shirt,
  Footprints,
  Sun,
  Bug,
  HeartPulse,
  Droplets,
  LifeBuoy,
  Ban,
  CheckSquare,
  Square,
  FileText,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Luggage,
  Anchor,
  BatteryCharging,
  RotateCcw
} from 'lucide-react';

export const PackingGuideContent: React.FC = () => {
  const { language, isBengali } = useLanguage();

  // Interactive state for pre-departure checklist
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true,
    4: true,
    5: true,
    9: true,
  });

  const toggleItem = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const checklistItems = isBengali
    ? [
        'বুকিংয়ে চাওয়া পরিচয়পত্র ও প্রয়োজনীয় মূল নথি প্রস্তুত।',
        'আরামদায়ক পোশাক, ভালো গ্রিপের জুতো ও অতিরিক্ত মোজা নেওয়া হয়েছে।',
        'পূর্বাভাস অনুযায়ী রেইনকোট বা উষ্ণ পোশাক সঙ্গে আছে।',
        'টুপি, সানগ্লাস, সানস্ক্রিন ও উপযুক্ত মশা প্রতিরোধক নেওয়া হয়েছে।',
        'ব্যক্তিগত ওষুধ, প্রেসক্রিপশনের কপি ও ছোট ফার্স্ট এইড কিট নেওয়া হয়েছে।',
        'পুনর্ব্যবহারযোগ্য স্টিলের বোতল আছে এবং নিরাপদ পানির ব্যবস্থা নিশ্চিত।',
        'ফোন, চার্জার, পাওয়ার ব্যাংক ও প্রয়োজনীয় ক্যামেরা সরঞ্জাম প্রস্তুত।',
        'ফোন ও নথিপত্র ভেজা থেকে বাঁচানোর ওয়াটারপ্রুফ পাউচ নেওয়া হয়েছে।',
        'জরুরি নম্বর ফোনে অফলাইনে ও কাগজে লিখে রাখা হয়েছে।',
        'উপযুক্ত লাইফজ্যাকেট এবং নৌকার নিরাপত্তাব্যবস্থা নিশ্চিত করা হয়েছে।',
        'সফরের নিয়ম, আবহাওয়া এবং যাত্রার ঘাট আয়োজকের সঙ্গে মিলিয়ে নেওয়া হয়েছে।',
      ]
    : [
        'Government ID proofs and travel documents ready in a waterproof sleeve.',
        'Comfortable earth-toned clothing, high-grip shoes, and extra socks packed.',
        'Reusable rain poncho or warm layers included as per weather forecast.',
        'Hat, UV sunglasses, SPF 30+ sunscreen, and mosquito repellent packed.',
        'Prescribed medicines with prescription copies and travel first aid kit ready.',
        'Reusable stainless steel water bottle packed for safe refills.',
        'Smartphone, charger, reliable power bank, and camera rain protection ready.',
        'Waterproof sleeves/pouches for phone and paper documents verified.',
        'Emergency contact numbers saved offline and written on paper.',
        'Properly sized life jackets and boat safety equipment confirmed.',
        'Tour regulations, weather forecast, and boarding jetty verified with operator.',
      ];

  const totalChecked = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="space-y-10 text-slate-800 leading-relaxed font-sans">
      {/* 🌊 Intro lead block */}
      <div className="space-y-4 text-base sm:text-lg text-slate-700 bg-emerald-50/60 p-6 sm:p-7 rounded-2xl border border-emerald-100">
        <p className="font-medium text-[#064E3B] leading-relaxed">
          {isBengali
            ? 'নদীর ওপর দিয়ে নৌকা এগিয়ে চলেছে। কখনও দুপাশে ম্যানগ্রোভের সারি, কখনও সামনে প্রশস্ত জলরাশি। এমন ভ্রমণে দরকারি জিনিসটি হাতের কাছে থাকলে মন দেওয়া যায় চারপাশের প্রকৃতিতে। আবার অপ্রয়োজনীয় ভারী ব্যাগ, পিছল জুতো বা ভিজে যাওয়া ফোন ছোটখাটো অসুবিধাকে বড় করে তুলতে পারে।'
            : 'The boat glides steadily over the waterways. Mangrove ribbons unfold on both flanks as the wide delta horizon expands before you. Having the right essentials readily at hand allows complete immersion in untamed nature, whereas an excessively heavy bag, slippery soles, or a drenched phone can quickly spoil the serenity.'}
        </p>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'সুন্দরবনের জন্য ভালো প্যাকিং মানে অনেক জিনিস নেওয়া নয়—আবহাওয়া, নৌযাত্রা, নিজের স্বাস্থ্য এবং সংরক্ষিত এলাকার নিয়ম বুঝে প্রয়োজনীয় জিনিস বেছে নেওয়া। পোশাক থেকে পানির বোতল, ফার্স্ট এইড থেকে ক্যামেরার লেন্স—এই গাইড সেই প্রস্তুতিতেই সাহায্য করবে।'
            : 'Sound packing for the Sundarbans does not mean carrying a mountain of luggage—it means curating practical essentials aligned with changing estuary weather, boat travel ergonomics, personal health, and strict tiger reserve guidelines.'}
        </p>
        <div className="pt-3 border-t border-emerald-200/60 flex items-start gap-2.5 text-xs sm:text-sm text-[#064E3B] font-medium">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-emerald-700" />
          <span>
            {isBengali
              ? 'এই তালিকা মূলত ভারতের পশ্চিমবঙ্গের সুন্দরবনে অনুমোদিত নৌভ্রমণ ও পর্যটনকেন্দ্র দেখার জন্য। বাংলাদেশের সুন্দরবনের নিয়ম আলাদা হতে পারে। এখানে দেওয়া ব্যাগ, পোশাকের পরিমাণ ও ক্যামেরার উদাহরণ ব্যবহারিক পরামর্শ; এগুলো বনবিভাগের নির্ধারিত প্যাকিং তালিকা নয়।'
              : 'This guide is specifically tailored for authorized boat cruises and eco-tourism centers across the West Bengal Indian Sundarbans. Recommendations regarding luggage volume, apparel, and camera lenses are practical field advice rather than official forest department statutes.'}
          </span>
        </div>
      </div>

      {/* 1. ভ্রমণের ধরন বুঝে ব্যাগ গোছান */}
      <section className="space-y-3 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
            ১
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            {isBengali ? '১. প্রথমে ভ্রমণের ধরন বুঝে ব্যাগ গোছান' : '1. Tailor Your Luggage to Trip Dynamics'}
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-sm sm:text-base text-slate-700">
          <p>
            {isBengali
              ? 'বাড়ি থেকে বেরোনোর আগে জেনে নিন সফর কত দিনের, কোথায় রাত কাটাবেন এবং প্রতিদিন কতটা সময় নৌকায় থাকবেন। লজে থাকার ব্যবস্থা থাকলে দিনের নৌভ্রমণে সব পোশাক ও ব্যক্তিগত সামগ্রী সঙ্গে নেওয়ার প্রয়োজন নেই। নৌকায় রাত কাটানোর পরিকল্পনা থাকলে প্রয়োজনীয় জিনিস রাখার জায়গা, শৌচাগার, বিদ্যুৎ ও চার্জিংয়ের ব্যবস্থা আগে নিশ্চিত করুন।'
              : 'Before departing home, clarify your itinerary duration, overnight accommodation (island eco-resort vs. boat cabin), and daily cruising hours. If staying at an island lodge, there is no need to lug all clothing onto the safari deck each morning. If spending the night aboard a houseboat, verify storage lockers, washroom facilities, and onboard electricity.'}
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm space-y-2">
            <p className="font-semibold text-slate-900 flex items-center gap-2">
              <Luggage className="w-4 h-4 text-[#064E3B]" />
              {isBengali ? 'মূল ব্যাগ বনাম ছোট ডে-প্যাক (Day-pack) ফর্মুলা:' : 'Main Bag vs. Compact Day-Pack Formula:'}
            </p>
            <p className="text-slate-600">
              {isBengali
                ? 'একটি মূল ব্যাগ এবং হাতের কাছে রাখার জন্য ছোট ডে-প্যাক সুবিধাজনক। ডে-প্যাকে রাখুন পানির বোতল, ব্যক্তিগত ওষুধ, ফোন, পরিচয়পত্র, টুপি, রেইনকোট ও ক্যামেরা। নৌকায় ওঠানামার সময় ব্যাগ যেন দুই হাত ব্যস্ত করে না রাখে, সেটিও ভাবুন। ব্যাগের সংখ্যা যতটা সম্ভব কম রাখুন। তবে ওজন কমানোর জন্য প্রয়োজনীয় ওষুধ বা নিরাপত্তাসামগ্রী বাদ দেবেন না।'
                : 'Keep one primary duffle or suitcase at your lodging and carry a hands-free compact backpack on board. Store water, daily medicines, phones, IDs, sun hats, rain gear, and cameras in this day-pack. Having your hands free when embarking or disembarking narrow gangways is essential for balance.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. পোশাকের রং: আরাম আগে, সাজ পরে */}
      <section className="space-y-3 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
            ২
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            {isBengali ? '২. পোশাকের রং: আরাম আগে, সাজ পরে' : '2. Clothing Colors: Comfort First, Style Second'}
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-sm sm:text-base text-slate-700">
          <p>
            {isBengali
              ? 'অলিভ, খাকি, মাটিরঙা, বেইজ বা মৃদু ধূসর পোশাক বেছে নিতে পারেন। এগুলো বনভ্রমণের জন্য ব্যবহারিক রঙের পছন্দ, বাধ্যতামূলক নিয়ম নয়। শুধু রঙের কারণে বাঘ বা অন্য প্রাণী দেখা যাবে—এমন নিশ্চয়তাও নেই।'
              : 'Opt for muted earth shades such as olive green, khaki, muted tan, beige, or soft grey. These are practical delta tones that blend harmoniously into the mangrove environment rather than startling wildlife.'}
          </p>

          {/* Rule distinction callout */}
          <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-xl text-xs sm:text-sm text-amber-900 space-y-1.5">
            <p className="font-bold flex items-center gap-1.5 text-amber-950">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              {isBengali ? 'গুরুত্বপূর্ণ পার্থক্য ও সরকারি বিধি:' : 'Key Distinction & Official Regulations:'}
            </p>
            <p>
              {isBengali
                ? 'সুন্দরবন টাইগার রিজার্ভের প্রকাশিত নিয়মে camouflage jacket-এর নির্দেশটি পর্যটক-গাইডদের পোশাকের অংশে রয়েছে; পর্যটকদের জন্য একই বাধ্যবাধকতা সেখানে বলা হয়নি। সূত্র: Sundarban Tiger Reserve—Rules and Regulations'
                : 'Under Sundarban Tiger Reserve official guidelines, camouflage jackets are specified as uniform requirements for certified tourist guides; ordinary tourists are not legally mandated to wear camouflage jackets. Source: Sundarban Tiger Reserve—Rules and Regulations'}
            </p>
          </div>

          <p>
            {isBengali
              ? 'বাতাস চলাচল করে এমন আরামদায়ক জামা ও ট্রাউজার নিন। ঢিলেঢালা ফুলহাতা পোশাক এবং লম্বা প্যান্ট মশার কামড় থেকে সুরক্ষায় সাহায্য করে। সূত্র: CDC—Preventing Mosquito Bites, ২৮ আগস্ট ২০২৪'
              : 'Choose breathable, lightweight fabrics. Loose-fitting long-sleeved shirts and long trousers offer proven physical protection against mosquito bites. Source: CDC—Preventing Mosquito Bites (August 28, 2024)'}
          </p>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="font-semibold text-slate-900 mb-2">
              {isBengali ? 'দুই রাত–তিন দিনের সফরের একটি ব্যবহারিক সূচনা-তালিকা:' : 'Recommended 2 Night / 3 Day Safari Wardrobe:'}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                <span>{isBengali ? 'দুই–তিনটি আরামদায়ক জামা।' : '2–3 comfortable breathable shirts'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                <span>{isBengali ? 'দুটি ট্রাউজার বা আরামদায়ক লম্বা প্যান্ট।' : '2 comfortable trousers or safari pants'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                <span>{isBengali ? 'প্রয়োজনমতো অন্তর্বাস ও মোজা, সঙ্গে অতিরিক্ত সেট।' : 'Adequate undergarments & extra pair of socks'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                <span>{isBengali ? 'একটি হালকা তোয়ালে।' : '1 lightweight quick-dry towel'}</span>
              </li>
              <li className="flex items-center gap-2 sm:col-span-2">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                <span>{isBengali ? 'পূর্বাভাস অনুযায়ী হালকা জ্যাকেট বা উষ্ণ স্তর।' : 'Light jacket or windcheater layer for chilly morning breeze'}</span>
              </li>
            </ul>
          </div>

          <p className="text-xs sm:text-sm text-rose-700 font-medium italic">
            {isBengali
              ? '⚠️ মনে রাখবেন: ক্যামোফ্লাজের সঙ্গে রং মেলাতে গিয়ে উজ্জ্বল লাইফজ্যাকেট ঢেকে রাখবেন না। নৌযাত্রায় নিরাপত্তাই অগ্রাধিকার।'
              : '⚠️ Vital safety reminder: Never conceal high-visibility life jackets beneath camouflage gear. River passenger safety always takes top precedence.'}
          </p>
        </div>
      </section>

      {/* 3. জুতো: ভেজা ডেক ও ওঠানামার কথা ভাবুন */}
      <section className="space-y-3 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
            ৩
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            {isBengali ? '৩. জুতো: ভেজা ডেক ও ওঠানামার কথা ভাবুন' : '3. Footwear: Wet Decks and Jetty Transitions'}
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-sm sm:text-base text-slate-700">
          <p>
            {isBengali
              ? 'আগে ব্যবহার করা, পায়ে আরামদায়ক এবং ভালো গ্রিপযুক্ত জুতো নিন। পা ঢাকা ও গোড়ালি ধরে থাকে এমন জুতো নৌকার সিঁড়ি বা ঘাটে ওঠানামার জন্য ব্যবহারিক পছন্দ।'
              : 'Wear broken-in, comfortable footwear equipped with reliable rubber traction. Closed-toe shoes with good ankle support are ideal for navigating steep wooden stairs and damp boarding jetties.'}
          </p>
          <p>
            {isBengali
              ? 'নতুন জুতো প্রথমবার সফরে পরলে অস্বস্তি হতে পারে। খুব মসৃণ তলা, উঁচু হিল বা সহজে খুলে যায় এমন চপ্পল নৌভ্রমণের জন্য এড়িয়ে চলাই ভালো। থাকার জায়গায় ব্যবহারের জন্য আলাদা হালকা স্যান্ডেল রাখতে পারেন।'
              : 'Avoid wearing brand-new unworn footwear which can cause painful blisters. Slick leather soles, high heels, and slippery flip-flops are hazardous on wet boat surfaces. Keep a pair of light slip-on slippers solely for indoor lodge use.'}
          </p>
          <p className="text-xs sm:text-sm bg-stone-50 p-3 rounded-lg border border-stone-200 text-stone-700">
            {isBengali
              ? '💡 সাধারণ অনুমোদিত নৌসাফারির জন্য বিশেষ জঙ্গল-বুট কিনতেই হবে না। কোনও নির্দিষ্ট অনুমোদিত হাঁটার পথ থাকলে তার উপযোগী জুতোর কথা আয়োজকের কাছে জেনে নিন। জুতো সঙ্গে আছে বলে কাদামাটির চর বা জঙ্গলে নিজে থেকে নামার পরিকল্পনা করবেন না।'
              : '💡 Heavy specialized jungle combat boots are unnecessary for standard boat safaris. Never step out onto tidal mudflats without official forest ranger authorization.'}
          </p>
        </div>
      </section>

      {/* 4. রোদ ও বৃষ্টির প্রস্তুতি একসঙ্গে রাখুন */}
      <section className="space-y-3 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
            ৪
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            {isBengali ? '৪. রোদ ও বৃষ্টির প্রস্তুতি একসঙ্গে রাখুন' : '4. Sun & Rain Preparedness'}
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-sm sm:text-base text-slate-700">
          <p>
            {isBengali
              ? 'ছায়ায় বসার সুযোগ, মাথা ঢাকার টুপি, UV সুরক্ষাযুক্ত সানগ্লাস ও উপযুক্ত পোশাকের পাশাপাশি সানস্ক্রিন রাখুন। American Academy of Dermatology বাইরে ব্যবহারের জন্য broad-spectrum, water-resistant এবং SPF ৩০ বা তার বেশি সানস্ক্রিনের পরামর্শ দেয়। সাধারণভাবে প্রতি দুই ঘণ্টায় আবার লাগাতে হয়; ঘাম বা পানি লাগলে পণ্যের নির্দেশ অনুযায়ী আরও আগে লাগানোর প্রয়োজন হতে পারে। সূত্র: AAD—How to apply sunscreen'
              : 'Alongside wide-brimmed hats and polarized UV-protective sunglasses, pack quality sunscreen. The American Academy of Dermatology recommends broad-spectrum, water-resistant sunscreen with SPF 30 or higher for outdoor activities. Reapply every two hours, or sooner if sweating or wet. Source: AAD—How to apply sunscreen'}
          </p>
          <p>
            {isBengali
              ? 'পুনর্ব্যবহারযোগ্য হালকা রেইনকোট নিন। নৌকার সরু চলার জায়গায় ছাতা খোলা অসুবিধাজনক হতে পারে; রেইনকোটেও যেন পা বা রেলিংয়ে কাপড় আটকে না যায়। ফোন ও নথিপত্র আলাদা জলরোধী পাউচে রাখুন।'
              : 'Carry a lightweight reusable rain poncho instead of traditional umbrellas, which can catch sudden gusts or snag on narrow deck railings. Keep smartphones and paperwork inside sealed waterproof pouches.'}
          </p>
          <p className="text-xs sm:text-sm text-slate-500 italic">
            {isBengali
              ? 'শীতের সফর হলেও শুধু মোটা পোশাক নয়, প্রয়োজনমতো পরা ও খোলা যায় এমন স্তর রাখুন। শেষ সিদ্ধান্ত নিন যাত্রার কাছাকাছি সময়ের আবহাওয়ার পূর্বাভাস এবং আয়োজকের নিরাপত্তা-নির্দেশ দেখে। রেইনকোট থাকলেই খারাপ আবহাওয়ায় নৌযাত্রা নিরাপদ হয়ে যায় না।'
              : 'Dress in layered garments that can be removed as noon warmth sets in. Rain gear protects your body, but does not render rough-weather navigation inherently safe; always heed boat master advisories.'}
          </p>
        </div>
      </section>

      {/* 5. মশা থেকে সুরক্ষা: উপযুক্ত পণ্য ও সঠিক ব্যবহার */}
      <section className="space-y-3 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
            ৫
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            {isBengali ? '৫. মশা থেকে সুরক্ষা: উপযুক্ত পণ্য ও সঠিক ব্যবহার' : '5. Mosquito Protection: Right Products & Protocol'}
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-sm sm:text-base text-slate-700">
          <p>
            {isBengali
              ? 'DEET বা picaridin/icaridin-যুক্ত উপযুক্ত মশা প্রতিরোধক নিতে পারেন। স্থানীয়ভাবে অনুমোদিত পণ্যের লেবেল, বয়সসীমা ও ব্যবহারের নির্দেশ অনুসরণ করুন। চোখ, মুখ বা কাটা-ছেঁড়া ত্বকে লাগাবেন না; শিশুদের ক্ষেত্রে অভিভাবক নির্দেশ মেনে ব্যবহার করাবেন।'
              : 'Carry insect repellents containing active ingredients like DEET or Picaridin/Icaridin. Always follow certified product instructions, keep clear of eyes, lips, and open scratches, and supervise applications on children.'}
          </p>
          <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-xs sm:text-sm text-emerald-950 font-medium">
            {isBengali
              ? '🌿 প্রয়োগের সঠিক ক্রম: সানস্ক্রিন ও মশা প্রতিরোধক দুটো ব্যবহার করলে আগে সানস্ক্রিন লাগান, তার ওপর মশা প্রতিরোধক লাগান। দুটির পুনর্ব্যবহারের সময় এক নাও হতে পারে। সূত্র: CDC—Preventing Mosquito Bites'
              : '🌿 Golden Application Rule: When using both sunscreen and insect repellent, apply sunscreen first, let it absorb, and apply insect repellent over it. Source: CDC—Preventing Mosquito Bites'}
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            {isBengali
              ? 'থাকার ঘরে জানালার জালি বা মশারির ব্যবস্থা আছে কি না আগে জেনে নিন। সাধারণ সুগন্ধি বা অজানা ঘরোয়া মিশ্রণকে নির্ভরযোগ্য মশা প্রতিরোধকের বিকল্প ভাববেন না।'
              : 'Confirm window meshes or mosquito bed nets at your lodge before nightfall. Avoid substituting commercial mosquito repellents with arbitrary scented cosmetics.'}
          </p>
        </div>
      </section>

      {/* 6. ছোট ফার্স্ট এইড কিটে কী রাখবেন? */}
      <section className="space-y-3 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
            ৬
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            {isBengali ? '৬. ছোট ফার্স্ট এইড কিটে কী রাখবেন?' : '6. What to Pack in a Compact First Aid Kit'}
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-sm sm:text-base text-slate-700">
          <p>
            {isBengali
              ? 'ব্যক্তিগত ফার্স্ট এইড কিট ছোট হতে পারে, কিন্তু প্রয়োজনমতো সাজানো হওয়া জরুরি। একটি ব্যবহারিক তালিকা:'
              : 'A travel first aid pouch can remain compact, yet it must be customized to your specific medical history and destination realities:'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
              <span>{isBengali ? 'ছোট আঠালো ব্যান্ডেজ (Adhesive bandages)' : 'Adhesive bandages of assorted sizes'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
              <span>{isBengali ? 'জীবাণুমুক্ত গজ ও মেডিক্যাল টেপ' : 'Sterile gauze pads and medical adhesive tape'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
              <span>{isBengali ? 'ডিজিটাল থার্মোমিটার' : 'Compact digital thermometer'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
              <span>{isBengali ? 'ওআরএসের সিল করা প্যাকেট (Sealed ORS)' : 'Sealed oral rehydration salts (ORS) sachets'}</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
              <span>{isBengali ? 'ব্যক্তিগত প্রয়োজন অনুযায়ী চিকিৎসকের পরামর্শে নেওয়া ওষুধ' : 'Personal daily medications as prescribed by your physician'}</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            {isBengali
              ? 'ওআরএস প্রয়োজন হলে প্যাকেটের নির্দেশিত পরিমাণ নিরাপদ পানিতে মেশাতে হয়। এটি সবার জন্য প্রতিদিন খাওয়ার পানীয় নয়। ব্যক্তির স্বাস্থ্য ও সফরের ধরন অনুযায়ী কিট সাজানোর পরামর্শ দেয় CDC। সূত্র: CDC Yellow Book—Travel Health Kits, ২৩ এপ্রিল ২০২৫'
              : 'Mix ORS strictly with clean potable water according to instructions; it is an electrolyte restorative, not regular casual drinking water. Source: CDC Yellow Book—Travel Health Kits (April 23, 2025)'}
          </p>
          <p className="text-xs sm:text-sm text-slate-600">
            {isBengali
              ? 'নিয়মিত ওষুধ মূল লেবেলযুক্ত প্যাকেটে রাখুন; প্রেসক্রিপশনের কপি সঙ্গে নিন। নিজের উদ্যোগে অ্যান্টিবায়োটিক বা ঘুম ধরায় এমন ওষুধ যোগ করবেন না। শিশু-কিশোরদের ওষুধ অভিভাবক ও চিকিৎসকের পরামর্শে নির্ধারিত হওয়া উচিত। সূত্র: CDC—Pack Smart, পর্যালোচনা ১০ সেপ্টেম্বর ২০২৪'
              : 'Keep prescription medications in original labeled containers alongside copies of your prescriptions. Avoid self-medicating with antibiotics or sedatives. Source: CDC—Pack Smart (September 10, 2024)'}
          </p>
          <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg text-xs sm:text-sm text-rose-900">
            {isBengali
              ? '⚠️ ফার্স্ট এইড কিট চিকিৎসাকেন্দ্রের বিকল্প নয়। অসুস্থ হলে অবিলম্বে গাইড বা দায়িত্বপ্রাপ্ত কর্মীকে জানান; প্রয়োজনীয় চিকিৎসা নিতে দেরি করবেন না।'
              : '⚠️ First aid supplies do not substitute for emergency medical care. Report acute illness to guides immediately.'}
          </div>
        </div>
      </section>

      {/* 7. নৌকায় বমিভাব হলে কী প্রস্তুতি কাজে আসে? */}
      <section className="space-y-3 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
            ৭
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            {isBengali ? '৭. নৌকায় বমিভাব হলে কী প্রস্তুতি কাজে আসে?' : '7. Coping with Motion Sickness on the Water'}
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-sm sm:text-base text-slate-700">
          <p>
            {isBengali
              ? 'নৌযাত্রায় কারও কারও মাথা ঘোরা বা বমিভাব হতে পারে। এমন সমস্যা আগে হয়ে থাকলে সফরের আগেই চিকিৎসক বা ফার্মাসিস্টের পরামর্শ নিন।'
              : 'Tidal currents and river swells can occasionally trigger mild nausea or motion sickness. If predisposed, seek anti-emetic guidance from your doctor before traveling.'}
          </p>
          <p>
            {isBengali
              ? 'যাত্রার সময় নিরাপদ আসনে বসে সামনের স্থির দিগন্তের দিকে তাকানো, বই বা মোবাইলের পর্দা দেখা থেকে বিরতি নেওয়া এবং ভারী খাবার এড়িয়ে চলা উপকারী হতে পারে। নৌকার মাঝামাঝি আসনে তুলনামূলক কম দোল অনুভূত হতে পারে—কোথায় বসা নিরাপদ, তা কর্মীদের জিজ্ঞেস করুন। সূত্র: NHS—Motion sickness, পর্যালোচনা ১৯ জুন ২০২৩'
              : 'Sit firmly in the middle section of the vessel where oscillation is minimized, fix your gaze on the distant stable shoreline, take breaks from small phone screens, and avoid rich greasy food before sailing. Source: NHS—Motion Sickness (June 19, 2023)'}
          </p>
          <p className="text-xs sm:text-sm text-amber-800 font-medium">
            {isBengali
              ? '⚠️ বমিভাব কমানোর জন্য দাঁড়িয়ে রেলিংয়ের বাইরে ঝুঁকবেন না। অন্যের ওষুধ নিজের জন্য ঠিক হবে, এমন ধরে নেবেন না।'
              : '⚠️ Never lean over boat safety railings when feeling dizzy. Never ingest someone else’s unprescribed medication.'}
          </p>
        </div>
      </section>

      {/* 8. পানি, খাবার ও ব্যক্তিগত পরিচ্ছন্নতা */}
      <section className="space-y-3 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
            ৮
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            {isBengali ? '৮. পানি, খাবার ও ব্যক্তিগত পরিচ্ছন্নতা' : '8. Safe Water, Dining & Zero-Waste Hygiene'}
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-sm sm:text-base text-slate-700">
          <p>
            {isBengali
              ? 'পুনর্ব্যবহারযোগ্য স্টিলের পানির বোতল নিন। নৌকা বা থাকার জায়গায় নিরাপদ পানির রিফিল কোথায় পাওয়া যাবে, আগে জেনে নিন। সুন্দরবন টাইগার রিজার্ভের প্রকাশিত নিয়মে রিজার্ভের ভেতরে প্লাস্টিকের বোতল ও একবার ব্যবহারযোগ্য প্লাস্টিক নিষিদ্ধ বলা হয়েছে। সূত্র: Sundarban Tiger Reserve—Rules and Regulations'
              : 'Carry a reusable stainless steel water bottle. Single-use plastic bottles and disposable polyethylene containers are strictly banned within the reserve. Source: Sundarban Tiger Reserve—Rules and Regulations'}
          </p>
          <p>
            {isBengali
              ? 'খাবার নেওয়ার অনুমতি ও প্রয়োজন থাকলে পরিচ্ছন্ন পুনর্ব্যবহারযোগ্য খাবারের বাক্স ব্যবহার করুন। ব্যক্তিগত অ্যালার্জি থাকলে খাবারের দায়িত্বে থাকা ব্যক্তিকে আগেই জানান।'
              : 'Pack snacks in washable reusable containers and notify the boat master or cook of any severe food allergies before departure.'}
          </p>
          <p>
            {isBengali
              ? 'ছোট সাবান, প্রয়োজনীয় টয়লেট্রিজ, টিস্যু এবং ব্যক্তিগত স্বাস্থ্যবিধির সামগ্রী নিন। ব্যবহৃত সামগ্রী ফেরত আনার জন্য উপযুক্ত ঢাকনাযুক্ত পাত্র বা পুনর্ব্যবহারযোগ্য বর্জ্যব্যাগ রাখুন। কোনও জিনিসে “biodegradable” লেখা থাকলেও সেটি নদীতে ফেলে দেওয়া যায় না।'
              : 'Pack compact eco-friendly toiletries and sealed waste bags to bring all non-biodegradable waste back to mainland bins. Never toss litter into the delta rivers, regardless of whether packaging claims to be biodegradable.'}
          </p>
        </div>
      </section>

      {/* 9. ক্যামেরা ও লেন্স: প্রয়োজন বুঝে বাছুন (Rich Responsive Table!) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
            ৯
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            {isBengali ? '৯. ক্যামেরা ও লেন্স: প্রয়োজন বুঝে বাছুন' : '9. Cameras & Lenses: Choose by Purpose'}
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-sm sm:text-base text-slate-700">
          <p>
            {isBengali
              ? 'সুন্দরবন উপভোগ করতে দামি ক্যামেরা থাকা জরুরি নয়। নদী, নৌযাত্রা, আকাশ ও সঙ্গীদের ছবি মোবাইলেই রাখা যায়। দূরের ছোট পাখি বা প্রাণীকে বড় করে ছবিতে ধরতে চাইলে টেলিফটো লেন্সের সুবিধা পাওয়া যায়।'
              : 'An expensive camera rig is by no means mandatory to relish the Sundarbans. Mobile phones capture majestic river expanses, skies, and family memories beautifully. Telephoto zoom optics are beneficial if your goal is photographing distant wildlife and birds from moving boats.'}
          </p>

          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            {isBengali
              ? 'নিচের তালিকাটি ব্যবহারিক উদাহরণ, কেনাকাটার বাধ্যতামূলক তালিকা নয়:'
              : 'Practical reference guide (indicative suggestions, not mandatory purchases):'}
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead className="bg-[#064E3B] text-white">
                <tr>
                  <th className="py-3 px-4 font-bold tracking-wide">
                    {isBengali ? 'আপনার উদ্দেশ্য' : 'Your Objective'}
                  </th>
                  <th className="py-3 px-4 font-bold tracking-wide">
                    {isBengali ? 'সঙ্গে রাখা যেতে পারে' : 'Suggested Gear'}
                  </th>
                  <th className="py-3 px-4 font-bold tracking-wide">
                    {isBengali ? 'মনে রাখবেন' : 'Key Considerations'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    {isBengali ? 'সাধারণ ভ্রমণস্মৃতি ও ছোট ভিডিও' : 'Memories & short videos'}
                  </td>
                  <td className="py-3.5 px-4 text-[#064E3B] font-medium">
                    {isBengali ? 'নিজের মোবাইল ফোন' : 'Smartphone camera'}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {isBengali ? 'দূরের ছোট প্রাণীর সূক্ষ্ম বিবরণ সীমিত হতে পারে' : 'Fine detail on distant birds will be limited'}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/40">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    {isBengali ? 'নদী, আকাশ ও বিস্তৃত দৃশ্য' : 'Riverscapes, skies & wide vistas'}
                  </td>
                  <td className="py-3.5 px-4 text-[#064E3B] font-medium">
                    {isBengali ? 'ক্যামেরার সাধারণ বা ওয়াইড জুম' : 'Standard wide-to-normal zoom (kit lens)'}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {isBengali ? 'বিদ্যমান কিট লেন্স দিয়েই শুরু করা যায়' : 'Kit lens is fully sufficient for delta sceneries'}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    {isBengali ? 'দূরের প্রাণী বা তুলনামূলক বড় পাখির ছবি' : 'Distant wildlife & wading birds'}
                  </td>
                  <td className="py-3.5 px-4 text-[#064E3B] font-medium">
                    {isBengali ? 'যেমন ৭০–৩০০ মিমি টেলিফটো জুম' : 'e.g. 70–300mm telephoto zoom'}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {isBengali ? 'দূরত্ব ও আলোর কারণে ফল বদলাবে' : 'Performance varies with subject distance and sunlight'}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/40">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    {isBengali ? 'বিশেষ আগ্রহের দূরবর্তী বন্যপ্রাণী' : 'Dedicated wildlife photography'}
                  </td>
                  <td className="py-3.5 px-4 text-[#064E3B] font-medium">
                    {isBengali ? 'যেমন ২০০–৫০০ মিমি ধরনের দীর্ঘ জুম' : 'e.g. 200–500mm super-telephoto'}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {isBengali ? 'ওজন, বহনের সুবিধা ও ব্যবহারের দক্ষতা বিবেচ্য' : 'Heavier weight, hand-holding stamina, and skill needed'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs sm:text-sm text-slate-600">
            {isBengali
              ? 'নৌকা থেকে প্রাণীর ছবি তোলার সাধারণ নীতিতে জুম লেন্সের নমনীয়তা কাজে লাগে। Nikon-এর নৌভিত্তিক wildlife photography নির্দেশনায় ৭০–৩০০ এবং ২০০–৫০০ মিমিসহ বিভিন্ন উদাহরণ রয়েছে। এগুলো সুন্দরবনের জন্য পরীক্ষিত “সেরা লেন্স” তালিকা নয়; ওই নীতির ভিত্তিতে এখানে ব্যবহারিক উদাহরণ দেওয়া হয়েছে। ক্যামেরার সেন্সর অনুযায়ী একই লেন্সে দৃশ্যের বিস্তার বদলায়। সূত্র: Nikon—Tips for taking great whale and dolphin photos'
              : 'On vibrating boat decks, the flexibility of a telephoto zoom is advantageous. Nikon boat wildlife tutorials cite 70–300mm and 200–500mm as versatile choices. Field of view adjusts according to sensor crop factor. Source: Nikon—Tips for taking great boat wildlife photos'}
          </p>

          <p className="text-xs sm:text-sm text-slate-600">
            {isBengali
              ? 'ক্যামেরা নিলে উপযুক্ত স্ট্র্যাপ, অতিরিক্ত চার্জ করা ব্যাটারি, খালি মেমোরি কার্ড, মাইক্রোফাইবার কাপড় ও বৃষ্টির কভার রাখুন। যন্ত্রের জলরোধী ক্ষমতা তার নিজস্ব নির্দেশিকা দেখে বুঝুন; সাধারণ ক্যামেরাব্যাগকে জলরোধী ধরে নেবেন না।'
              : 'Always wear a snug camera neck or wrist strap, pack spare charged batteries, clean memory cards, microfiber lens cloths, and waterproof rain covers. Ordinary canvas bags are not waterproof.'}
          </p>

          <p className="text-xs sm:text-sm text-amber-800 font-medium italic">
            {isBengali
              ? 'বড় ট্রাইপড সাধারণ নৌভ্রমণে প্রয়োজন নাও হতে পারে। কোনও সরঞ্জাম দিয়ে চলার পথ আটকাবেন না। ছবি তুলতে নৌকার কিনারায় ঝুঁকে যাওয়া বা প্রাণীকে কাছে আনার চেষ্টা করবেন না।'
              : 'Bulky tripods obstruct cramped gangways and amplify engine vibration. Never lean precariously over the gunwale to frame a shot.'}
          </p>
        </div>
      </section>

      {/* 10. দূরবীন, ফোন ও চার্জিংয়ের প্রস্তুতি */}
      <section className="space-y-3 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
            ১০
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            {isBengali ? '১০. দূরবীন, ফোন ও চার্জিংয়ের প্রস্তুতি' : '10. Binoculars, Phones & Charging Preparation'}
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-sm sm:text-base text-slate-700">
          <p>
            {isBengali
              ? 'ছবি না তুলেও দূরের প্রকৃতি ভালোভাবে দেখার জন্য দূরবীন কাজে আসতে পারে। নিজেরটি না থাকলে নৌকায় ভাগ করে ব্যবহারের ব্যবস্থা আছে কি না জেনে নিন। ব্যবহার করার সময় বসে বা স্থির নিরাপদ অবস্থানে থাকুন।'
              : 'A good pair of 8x42 or 10x50 binoculars brings distant raptors and deer into crisp focus without lens fatigue. When glassing the tree line, remain seated for maximum balance.'}
          </p>
          <p>
            {isBengali
              ? 'ফোনের সঙ্গে চার্জার ও ভালো অবস্থার পাওয়ার ব্যাংক রাখুন। ক্যামেরার ব্যাটারি, চার্জিং কেবল এবং মেমোরি কার্ড আলাদা ছোট পাউচে রাখলে খুঁজে পাওয়া সহজ হয়।'
              : 'Carry a verified power bank (10,000 to 20,000 mAh). Organize charging cables, memory cards, and spare camera batteries in separate pouch compartments.'}
          </p>
          <p>
            {isBengali
              ? 'বুকিংয়ের তথ্য, থাকার ঠিকানা এবং জরুরি যোগাযোগ নম্বর ফোনে অফলাইনে সংরক্ষণ করুন। শুধু ইন্টারনেটভিত্তিক পেমেন্টের ওপর নির্ভর না করে প্রয়োজনমতো কিছু নগদ অর্থ রাখার পরিকল্পনাও করতে পারেন। নৌকা বা লজে চার্জিংয়ের সুযোগ নিশ্চিত না করে ধরে নেবেন না যে সব যন্ত্র যেকোনও সময় চার্জ করা যাবে।'
              : 'Download reservation vouchers and emergency contacts offline on your device, as cellular reception drops inside mangrove creeks. Keep cash on hand for island tea stalls, as UPI connectivity can be intermittent.'}
          </p>
        </div>
      </section>

      {/* 11. পরিচয়পত্র ও জরুরি তথ্য */}
      <section className="space-y-3 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
            ১১
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            {isBengali ? '১১. পরিচয়পত্র ও জরুরি তথ্য' : '11. Government Identity & Emergency Documents'}
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-sm sm:text-base text-slate-700">
          <p>
            {isBengali
              ? 'বুকিং ও অনুমতির জন্য কোন পরিচয়পত্র গ্রহণযোগ্য, তা আয়োজকের কাছে আগে জেনে নিন। প্রয়োজনীয় মূল নথি নিরাপদ পাউচে রাখুন; কপি বা ফোনে ছবি মূল নথির বিকল্প হিসেবে গ্রহণ করা হবে—এমন ধরে নেবেন না।'
              : 'Carry original government-issued photo IDs (Aadhaar, Voter Card, Passport, or Driving License) as required by the Forest Department for permit verification. Do not rely exclusively on phone photos.'}
          </p>
          <p>
            {isBengali
              ? 'সঙ্গে রাখুন বুকিংয়ের প্রমাণ, আয়োজকের নম্বর, যাত্রার ঘাটের নাম ও ঠিকানা এবং পরিবারের জরুরি যোগাযোগ। বিদেশি পর্যটকদের পাসপোর্ট, ভিসা ও প্রযোজ্য অতিরিক্ত নথির প্রয়োজন আয়োজকের মাধ্যমে নিশ্চিত করা উচিত।'
              : 'Foreign nationals must carry valid passports and Indian tourist visas, coordinating documentation in advance with authorized tour operators.'}
          </p>
          <p className="text-xs sm:text-sm text-slate-600">
            {isBengali
              ? 'ওষুধের তালিকা, গুরুত্বপূর্ণ অ্যালার্জি ও চিকিৎসকের যোগাযোগ প্রয়োজন হলে সহজে পাওয়া যায় এমন জায়গায় রাখুন। জরুরি তথ্যের কাগজের কপি এবং ডিজিটাল কপি রাখার পরামর্শও দেয় CDC। সূত্র: CDC—Pack Smart'
              : 'Keep a paper slip listing emergency family contacts, allergies, and blood group in your wallet alongside digital files. Source: CDC—Pack Smart'}
          </p>
        </div>
      </section>

      {/* 12. লাইফজ্যাকেট: ব্যাগে নয়, নিরাপত্তা-পরিকল্পনায় প্রথম */}
      <section className="space-y-3 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
            ১২
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            {isBengali ? '১২. লাইফজ্যাকেট: ব্যাগে নয়, নিরাপত্তা-পরিকল্পনায় প্রথম' : '12. Life Jackets: Paramount Safety On Water'}
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-sm sm:text-base text-slate-700">
          <p>
            {isBengali
              ? 'বুকিংয়ের আগেই জেনে নিন প্রত্যেক যাত্রীর উপযোগী লাইফজ্যাকেট আছে কি না। শিশু থাকলে তার আকার ও ওজন অনুযায়ী উপযুক্ত জ্যাকেটের ব্যবস্থা নিশ্চিত করুন। বড়দের জ্যাকেট ছোটদের জন্য উপযুক্ত ধরে নেওয়া যায় না।'
              : 'Verify beforehand that the vessel has certified life jackets for every passenger, with dedicated smaller sizes for children. An adult life vest cannot safely protect a small child.'}
          </p>
          <p>
            {isBengali
              ? 'জ্যাকেটটি ঠিকভাবে বন্ধ করা, শরীরের সঙ্গে মানানসই হওয়া এবং ভালো অবস্থায় থাকা জরুরি। নৌকা চলার সময়, বিশেষত খোলা ডেকে, তা পরুন। সঠিক মাপ ও পরিধানের এই সাধারণ নিরাপত্তা-নীতিগুলো U.S. Coast Guard-এর নির্দেশনাতেও রয়েছে; যুক্তরাষ্ট্রের আইনি বয়সসীমা এখানে ভারতের নিয়ম হিসেবে প্রয়োগ করা হয়নি। সূত্র: U.S. Coast Guard—Life Jacket Wear'
              : 'Fasten all buckles snugly while navigating open waters or sitting on upper decks. Proper fit and operational condition reflect universal maritime safety protocols. Source: U.S. Coast Guard—Life Jacket Wear'}
          </p>
          <p className="text-xs sm:text-sm text-emerald-900 font-medium">
            {isBengali
              ? 'উপযুক্ত নিরাপত্তাব্যবস্থা না থাকলে যাত্রা শুরু করবেন না। শিশু-কিশোর যাত্রীদের সঙ্গে দায়িত্বশীল প্রাপ্তবয়স্ক থাকা এবং কর্মীদের নির্দেশ মানা গুরুত্বপূর্ণ।'
              : 'Never board a vessel lacking adequate safety apparatus. Always supervise minors closely.'}
          </p>
        </div>
      </section>

      {/* 13. কী নেবেন না? (Highlighted Warning Box) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-rose-100 text-rose-800 font-bold text-sm">
            ১৩
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-rose-900 flex items-center gap-2">
            <span>{isBengali ? '১৩. কী নেবেন না?' : '13. What NOT to Bring'}</span>
            <AlertTriangle className="w-5 h-5 text-rose-600" />
          </h2>
        </div>
        <div className="pl-11 space-y-4">
          <div className="bg-rose-50/90 border border-rose-200 rounded-2xl p-5 text-sm sm:text-base text-rose-950 space-y-3">
            <p className="font-semibold text-rose-900">
              {isBengali
                ? 'রিজার্ভের ভ্রমণে ড্রোন ব্যবহারের পরিকল্পনা করবেন না। প্রকাশিত নিয়মে বনাঞ্চলে ড্রোন ব্যবহার, জোরে গান, ধূমপান ও মদ্যপান নিষিদ্ধ; নদী বা বনে বর্জ্য ফেলা যায় না। পর্যটকদের কেবল পর্যটনের জন্য খোলা ক্যাম্পে নামার অনুমতি রয়েছে। সূত্র: Sundarban Tiger Reserve—Rules and Regulations'
                : 'Do not attempt to fly camera drones inside the tiger reserve; aerial drones are strictly forbidden by forest law. Loud party music, smoking, alcohol consumption, and discarding trash into waterways are punishable offences under Tiger Reserve rules.'}
            </p>
            <div className="pt-2 border-t border-rose-200">
              <p className="font-bold text-xs uppercase tracking-wider text-rose-800 mb-2">
                {isBengali ? 'ব্যবহারিক দিক থেকে আরও এড়িয়ে চলুন:' : 'Also strictly leave behind:'}
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-rose-900">
                <li className="flex items-center gap-2">
                  <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{isBengali ? 'অপ্রয়োজনীয় ভারী লাগেজ ও অতিরিক্ত মূল্যবান গয়না।' : 'Heavy unnecessary luggage and expensive jewelry.'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{isBengali ? 'ব্যবহার না-জানা একাধিক ক্যামেরা বা ভারী সরঞ্জাম।' : 'Unfamiliar overly complex camera rigs and heavy tripods.'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{isBengali ? 'প্রাণীকে খাওয়ানোর খাবার বা পাখিকে কাছে ডাকার রেকর্ড করা শব্দ।' : 'Food to entice animals or recorded bird-call lures.'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{isBengali ? 'নিজে থেকে জঙ্গলে থাকার বা ঘোরার সরঞ্জাম।' : 'Camping tents or gear meant for unauthorized wilderness trekking.'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{isBengali ? 'লেবেলবিহীন, মেয়াদোত্তীর্ণ কিংবা অন্যের জন্য নির্ধারিত ওষুধ।' : 'Unlabeled, expired, or borrowed medications.'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 14. বেরোনোর আগের চূড়ান্ত চেকলিস্ট (Interactive Checklist!) */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-100 text-[#064E3B] font-bold text-sm">
              ১৪
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              {isBengali ? '১৪. বেরোনোর আগের চূড়ান্ত চেকলিস্ট' : '14. Final Pre-Departure Checklist'}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-[#064E3B] rounded-full">
              {totalChecked} / {checklistItems.length} {isBengali ? 'সম্পন্ন' : 'Ready'}
            </span>
            <button
              onClick={() => {
                if (totalChecked === checklistItems.length) {
                  setCheckedItems({});
                } else {
                  const all: { [key: number]: boolean } = {};
                  checklistItems.forEach((_, i) => (all[i] = true));
                  setCheckedItems(all);
                }
              }}
              className="text-xs font-medium text-slate-500 hover:text-[#064E3B] transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{totalChecked === checklistItems.length ? (isBengali ? 'ক্লিয়ার' : 'Clear') : (isBengali ? 'সব টিক দিন' : 'Select All')}</span>
            </button>
          </div>
        </div>

        <div className="pl-0 sm:pl-11 space-y-2.5">
          <p className="text-xs sm:text-sm text-slate-500 mb-2">
            {isBengali
              ? 'সফরে বের হওয়ার আগে নিচের পয়েন্টগুলো মিলিয়ে নিন এবং টিক দিন:'
              : 'Verify and check off each item before leaving home:'}
          </p>
          <div className="space-y-2 bg-emerald-50/40 p-4 sm:p-5 rounded-2xl border border-emerald-100">
            {checklistItems.map((item, idx) => {
              const isChecked = !!checkedItems[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleItem(idx)}
                  className={`flex items-start gap-3 p-2.5 rounded-xl cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-white shadow-xs border border-emerald-200 text-slate-900'
                      : 'hover:bg-white/60 text-slate-600'
                  }`}
                >
                  <button
                    type="button"
                    className="mt-0.5 shrink-0 focus:outline-hidden"
                    aria-label="Toggle checklist item"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  <span
                    className={`text-xs sm:text-sm font-medium leading-relaxed ${
                      isChecked ? 'line-through text-slate-400' : 'text-slate-800'
                    }`}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
