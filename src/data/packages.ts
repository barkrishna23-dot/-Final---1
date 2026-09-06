import { TourPackage } from '../types';
import sundarbanSafariImage from '../assets/images/regenerated_image_1788720175291.png';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-1',
    slug: 'one-day-sundarban-tour',
    title: {
      bn: '১ দিনের সুন্দরবন ডে সাফারি (কলকাতা/ক্যানিং থেকে)',
      en: '1 Day Sundarban Day Safari (Ex-Kolkata / Canning)',
    },
    tagline: {
      bn: 'স্বল্প সময়ে সুন্দরবনের প্রধান ওয়াচ টাওয়ার ও নদী সাফারির সেরা অভিজ্ঞতা',
      en: 'Experience the core watchtowers and river canals in an exhilarating single day',
    },
    durationDays: 1,
    durationNights: 0,
    startingPoint: { bn: 'কলকাতা (সায়েন্স সিটি/ভারতীয় যাদুঘর) অথবা ক্যানিং', en: 'Kolkata (Science City / Indian Museum) or Canning' },
    endPoint: { bn: 'কলকাতা / ক্যানিং স্টেশনে নিরাপদ প্রত্যাবর্তন', en: 'Kolkata / Canning Railway Station drop-off' },
    heroImage: sundarbanSafariImage,
    galleryImages: [
      'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    overview: {
      bn: 'যাঁদের হাতে সময় কম কিন্তু সুন্দরবনের রোমাঞ্চকর নদীযাত্রা ও ওয়াচ টাওয়ার দর্শন উপভোগ করতে চান, তাঁদের জন্য এই প্যাকেজটি আদর্শ। সকালে কলকাতা থেকে শুরু হয়ে রাতে কলকাতায় ফেরা। বোটেই পরিবেশন করা হয় গরম লুচি-আলুর দম থেকে শুরু করে নদীর টাটকা মাছের সুস্বাদু মধ্যাহ্নভোজ।',
      en: 'Tailored for busy explorers seeking a high-density, authentic day safari. Depart Kolkata early morning, board our dedicated cruiser at Godkhali, and sail through Sajnekhali, Sudhanyakhali, and Dobanki canopy walk before returning by evening.',
    },
    highlights: [
      { bn: 'সজনেখালি ওয়াচ টাওয়ার, ইন্টারপ্রিটেশন সেন্টার ও কুমির পুকুর', en: 'Sajnekhali Watch Tower, Interpretation Centre & Croc pond' },
      { bn: 'সুধন্যখালি ওয়াচ টাওয়ারে বন্য হরিণ ও পাখি পর্যবেক্ষণ', en: 'Sudhanyakhali Watch Tower observation glades' },
      { bn: 'দোবাঁকি ক্যানোপি ওয়াক ও উঁচু ঝুলন্ত ট্রেইল', en: 'Dobanki 400m elevated canopy boardwalk' },
      { bn: 'বোটে প্রস্তুত খাঁটি গরম বাঙালি ব্রেকফাস্ট, লাঞ্চ ও বিকেলের স্ন্যাকস', en: 'Freshly cooked authentic Bengali breakfast, lunch, and afternoon tea' },
      { bn: 'অভিজ্ঞ স্থানীয় গাইড ও সরকারি বন অনুমতি অন্তর্ভুক্ত', en: 'Forest department permits & local expert guide included' },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: { bn: 'নদী সাফারি, তিন ওয়াচ টাওয়ার ও সুন্দরবন দর্শন', en: 'Cruising the Mangrove Confluences & Watch Towers' },
        activities: [
          {
            time: '05:30 AM – 06:30 AM',
            description: { bn: 'কলকাতা নির্ধারিত পিকআপ পয়েন্ট (যাদুঘর/সায়েন্স সিটি) থেকে এসি গাড়িতে গদখালি যাত্রা।', en: 'Pick-up from designated Kolkata points via AC vehicle to Godkhali Ferry Ghat.' },
            highlight: { bn: 'ভোরের মনোরম যাত্রা', en: 'Morning scenic transit' },
          },
          {
            time: '09:00 AM – 09:30 AM',
            description: { bn: 'গদখালি ফেরি ঘাটে আগমন ও আমাদের স্পেশাল সাউন্ডপ্রুফ সাফারি বোটে স্বাগত অভ্যর্থনা।', en: 'Arrival at Godkhali, boarding the tourist cruiser with safety briefing.' },
          },
          {
            time: '09:45 AM – 11:30 AM',
            description: { bn: 'বোটে গরম চা ও লুচি সহযোগে ব্রেকফাস্ট। সুন্দরবনের মাতলা ও বিদ্যাধরী নদী পার হয়ে সজনেখালি প্রবেশ।', en: 'Hot Bengali breakfast served on boat while navigating the scenic Matla river towards Sajnekhali.' },
            highlight: { bn: 'সজনেখালি কমপ্লেক্স দর্শন', en: 'Sajnekhali Tower visit' },
          },
          {
            time: '12:00 PM – 02:00 PM',
            description: { bn: 'সুধন্যখালি ওয়াচ টাওয়ার ও খাঁড়ি সাফারি। বোটে টাটকা মাছের ঝোল ও ভাত দিয়ে রাজকীয় দুপুরের খাবার।', en: 'Sudhanyakhali Watch Tower glade observation, followed by fresh fish curry lunch on boat.' },
            highlight: { bn: 'ঐতিহ্যবাহী বাঙালি লাঞ্চ', en: 'Authentic river lunch' },
          },
          {
            time: '02:30 PM – 04:30 PM',
            description: { bn: 'দোবাঁকি ক্যানোপি ওয়াকওয়ে পরিদর্শন। পীরখালি ও পঞ্চমুখী নদীর মোহনা দিয়ে মনোরম ফিরতি যাত্রা।', en: 'Dobanki Canopy Walk followed by scenic cruising through Pirkhali canal and Panchamukhi confluence.' },
            highlight: { bn: 'দোবাঁকি ক্যানোপি ওয়াক', en: 'Dobanki Canopy Walk' },
          },
          {
            time: '05:30 PM – 09:00 PM',
            description: { bn: 'গদখালি ঘাটে আগমন ও গাড়ি সহযোগে কলকাতায় নিরাপদ প্রত্যাবর্তন।', en: 'Return to Godkhali jetty and drop-off at Kolkata by AC car.' },
          },
        ],
        meals: {
          breakfast: { bn: 'গরম লুচি, ছোলার ডাল/আলুর দম, মিষ্টি, চা/কফি', en: 'Hot Luchi, Chholar Dal/Aloor Dom, Sweets, Tea/Coffee' },
          lunch: { bn: 'দেরাদুন চালের ভাত, সোনা মুগ ডাল, ঝুড়ি আলুভাজা, ভেটকি/কাতলা মাছের কালিয়া, চাটনি, পাপড়', en: 'Fine Rice, Sona Moong Dal, Crispy Potato Straws, Bhetki/Katla Fish Kalia, Chutney, Papad' },
          snacks: { bn: 'সন্ধ্যায় গরম ভেজিটেবল চপ / পকোড়া ও চা', en: 'Hot vegetable chops/pakoras with tea' },
        },
        stayLocation: { bn: 'একদিনের ট্যুর (রাত্রিযাপন নেই)', en: 'Same Day Return (No Overnight Stay)' },
        boatType: { bn: 'সুরক্ষিত পর্যটক বোট (লাইফ জ্যাকেট ও ওয়াশরুমযুক্ত)', en: 'Registered tourist safari boat with safety jackets and clean washroom' },
      },
    ],
    inclusions: [
      { bn: 'কলকাতা থেকে গদখালি যাওয়া-আসার এসি গাড়ি পরিবহন', en: 'Kolkata to Godkhali AC transport both ways' },
      { bn: 'সারাদিনের জন্য স্পেশাল সাফারি বোট ও অভিজ্ঞ ক্রু', en: 'Full-day tourist boat with safety equipment' },
      { bn: 'বন দপ্তরের প্রবেশ অনুমতি (Forest Entry Permit) ও গাইড চার্জ', en: 'Forest Department permits and certified local guide charges' },
      { bn: 'বোটে প্রস্তুত ব্রেকফাস্ট, মধ্যাহ্নভোজ ও বিকেলের নাস্তা', en: 'Freshly prepared breakfast, lunch, and afternoon tea' },
      { bn: 'লাইফ জ্যাকেট ও ফার্স্ট এইড সুবিধা', en: 'Safety life jackets and emergency first-aid kit' },
    ],
    exclusions: [
      { bn: 'ব্যক্তিগত খরচ ও অতিরিক্ত ক্যামেরা টিকিট (যদি প্রযোজ্য হয়)', en: 'Personal expenses and extra camera fees (if levied by Forest Dept)' },
      { bn: 'প্যাকেজে অন্তর্ভুক্ত নয় এমন অতিরিক্ত খাবার বা পানীয়', en: 'Items or beverages not explicitly mentioned' },
    ],
    childPolicy: {
      bn: '০ থেকে ৪ বছর পর্যন্ত শিশুর জন্য কোনো চার্জ প্রযোজ্য নয়। ৪ থেকে ৮ বছর পর্যন্ত ৫০% চার্জ, ৮ বছরের উর্ধ্বে পূর্ণ চার্জ।',
      en: 'Children 0–4 years travel free. Children 4–8 years charged at 50%. 8+ years considered adult.',
    },
    basePrice: 1999,
    priceNote: {
      bn: 'প্রতি ব্যক্তি আনুমানিক খরচ (যাত্রী সংখ্যা ও পিকআপ পয়েন্ট অনুসারে পরিবর্তনীয়)',
      en: 'Estimated per person (varies with group size and vehicle choices)',
    },
    groupSize: { bn: 'ছোট দল, পরিবার অথবা কর্পোরেট গ্রুপ', en: 'Small groups, families, or corporate departures' },
    bestSeason: { bn: 'অক্টোবর থেকে মার্চ (সারা বছর পরিচালিত হয়)', en: 'October to March (Available year-round)' },
    foodType: { bn: 'টাটকা বাঙালি আমিষ ও নিরামিষ', en: 'Authentic Bengali Non-Veg & Veg' },
    accommodationType: { bn: 'দিনের সফর (ডে ট্যুর)', en: 'Day Tour (No Hotel Stay)' },
    safetyDisclaimer: {
      bn: 'নদীতে চলাচলের সময় সার্বক্ষণিক লাইফ জ্যাকেট পরিধান আবশ্যক। বোটের ছাদে অযথা হুড়োহুড়ি করবেন না।',
      en: 'Wearing life jackets during river navigation is mandatory. Follow safety instructions on the boat deck.',
    },
  },
  {
    id: 'pkg-2',
    slug: '1-night-2-days-classic',
    title: {
      bn: '১ রাত ২ দিন ক্লাসিক সুন্দরবন রিভার ও রিসোর্ট প্যাকেজ',
      en: '1 Night 2 Days Classic Sundarban Safari & Stay',
    },
    tagline: {
      bn: 'পাখিরালয় রিসোর্টে রাত্রিযাপন, গ্রাম্য সান্ধ্য অনুষ্ঠান ও গভীর খাঁড়ি সাফারি',
      en: 'Overnight eco-resort stay, evening folk music, and in-depth delta creek cruising',
    },
    durationDays: 2,
    durationNights: 1,
    startingPoint: { bn: 'কলকাতা / ক্যানিং / গদখালি', en: 'Kolkata / Canning / Godkhali Jetty' },
    endPoint: { bn: 'কলকাতা / ক্যানিং', en: 'Kolkata / Canning Railway Station' },
    heroImage: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    overview: {
      bn: 'সুন্দরবনের আসল রূপ অনুভবের জন্য একটি আদর্শ উইকএন্ড ট্রিপ। প্রথম দিন গোসাবা ঐতিহাসিক বাংলো ও পাখিরালয়ের গ্রামীণ রূপ দেখে সন্ধ্যায় স্থানীয় বাউল/ঝুমুর গানের আমেজ। দ্বিতীয় দিন ভোর থেকে দুপুর পর্যন্ত গভীর ম্যানগ্রোভের সজনেখালি, সুধন্যখালি, দোবাঁকি ও পীরখালি খাঁড়িতে রোমাঞ্চকর বোট সাফারি।',
      en: 'A classic 2-day immersive retreat designed to capture the rhythm of island life and untamed mangrove wilderness. Enjoy an overnight stay at a comfortable Pakhiralay resort, evening folk performances, and a full morning creek cruise.',
    },
    highlights: [
      { bn: 'পাখিরালয়ে আরামদায়ক এসি/নন-এসি কটেজে রাত্রিযাপন', en: 'Overnight stay at vetted eco-resort in Pakhiralay' },
      { bn: 'সন্ধ্যায় স্থানীয় শিল্পীদের পরিবেশনায় বাউল ও ঝুমুর গান', en: 'Evening traditional Baul & tribal Jhumur dance' },
      { bn: 'সজনেখালি, সুধন্যখালি ও দোবাঁকি ক্যানোপি ওয়াকওয়ে', en: 'Sajnekhali, Sudhanyakhali, and Dobanki Canopy Walk' },
      { bn: 'পীরখালি, গাজিখালি ও পঞ্চমুখী নদীর মিলনস্থল সাফারি', en: 'Pirkhali, Gazikhali, and Panchamukhi confluence cruising' },
      { bn: 'টাটকা গলদা চিংড়ি, ভেটকি মাছ ও দেশি মুরগির ভূরিভোজ', en: 'Banquet meals featuring fresh prawns, local fish, and chicken curry' },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: { bn: 'গোসাবা হেরিটেজ, দ্বীপ দর্শন ও সান্ধ্য সংস্কৃতি', en: 'Island Heritage, Village Life & Folk Music' },
        activities: [
          {
            time: '08:00 AM – 11:30 AM',
            description: { bn: 'কলকাতা/ক্যানিং থেকে গদখালি আগমন। বোটে স্বাগত ড্রিংকস ও নদী পার হয়ে গোসাবা যাত্রা।', en: 'Transit from Kolkata/Canning to Godkhali, welcome drinks and sail to Gosaba island.' },
          },
          {
            time: '12:00 PM – 01:30 PM',
            description: { bn: 'স্যার ড্যানিয়েল হ্যামিল্টন বাংলো ও বিকন বাংলো হেরিটেজ দর্শন।', en: 'Visit historic Hamilton Bungalow and Beacon Bungalow associated with Rabindranath Tagore.' },
            highlight: { bn: 'ঐতিহাসিক গোসাবা বাংলো', en: 'Hamilton Heritage Bungalow' },
          },
          {
            time: '02:00 PM – 04:00 PM',
            description: { bn: 'পাখিরালয় রিসোর্টে চেক-ইন ও সুস্বাদু মধ্যাহ্নভোজ (ভাত, ডাল, মাছের কালিয়া, চিংড়ি)।', en: 'Check-in at Pakhiralay resort followed by authentic Bengali seafood lunch.' },
          },
          {
            time: '05:00 PM – 08:30 PM',
            description: { bn: 'পাখিরালয় গ্রামে পদচারণা ও স্থানীয় শিল্পীদের বাউল/ঝুমুর লোকসংগীত আসর।', en: 'Evening village stroll followed by live traditional Baul and folk cultural recital with hot snacks.' },
            highlight: { bn: 'বাউল ও ঝুমুর গান', en: 'Live folk recital' },
          },
        ],
        meals: {
          breakfast: { bn: 'লুচি, আলুর দম ও মিষ্টি (বোটে)', en: 'Luchi, Aloor Dom, and Sweets on boat' },
          lunch: { bn: 'ভাত, মুগ ডাল, আলুভাজা, চিংড়ির মালাইকারি, রুই/ভেটকি মাছ, চাটনি', en: 'Rice, Dal, Fries, Prawn Malaikari, Fresh Fish curry, Chutney' },
          snacks: { bn: 'মুড়ি, গরম ভেজিটেবল/চিকেন পকোড়া ও চা', en: 'Puffed rice, crisp pakoras, and tea' },
          dinner: { bn: 'গরম রুটি/ভাত, ডাল, দেশি মুরগির কষা ঝোল, সালাদ ও মিষ্টি', en: 'Roti/Rice, Dal, Country Chicken Kasha, Salad, Dessert' },
        },
        stayLocation: { bn: 'পাখিরালয় রিসোর্ট / কটেজ', en: 'Pakhiralay Eco-Resort / Cottage' },
        boatType: { bn: 'প্রাইভেট সাফারি ক্রুজার', en: 'Dedicated safari boat' },
      },
      {
        dayNumber: 2,
        title: { bn: 'গভীর অরণ্য সাফারি, ওয়াচ টাওয়ার ও নিরাপদ প্রত্যাবর্তন', en: 'Deep Mangrove Safari, Watch Towers & Return' },
        activities: [
          {
            time: '06:30 AM – 09:00 AM',
            description: { bn: 'ভোরের চা পান করে বোটে ওঠা। ঘন কুয়াশা ও পাখির ডাকে সজনেখালি ওয়াচ টাওয়ার দর্শন।', en: 'Morning safari departure, exploring Sajnekhali Watch Tower & Bird sanctuary.' },
            highlight: { bn: 'ভোরের সজনেখালি সাফারি', en: 'Morning bird sanctuary' },
          },
          {
            time: '09:30 AM – 01:30 PM',
            description: { bn: 'সুধন্যখালি ও দোবাঁকি ক্যানোপি ওয়াক। পীরখালি ও গাজিখালি খাঁড়িতে বন্যপ্রাণী অনুসন্ধান।', en: 'Sudhanyakhali glades & Dobanki Canopy Walk; cruising through Pirkhali and Gazikhali creeks.' },
            highlight: { bn: 'দোবাঁকি ক্যানোপি ওয়াক', en: 'Dobanki Canopy Walk' },
          },
          {
            time: '02:00 PM – 04:30 PM',
            description: { bn: 'বোটে পঞ্চমুখী মোহনা দেখতে দেখতে দুপুরের খাবার। গদখালি প্রত্যাবর্তন।', en: 'Lunch on boat crossing Panchamukhi confluence, reaching Godkhali jetty.' },
          },
          {
            time: '05:00 PM – 08:30 PM',
            description: { bn: 'গদখালি থেকে গাড়িতে কলকাতা/ক্যানিং পৌঁছে দেওয়া।', en: 'Comfortable drop-off back to Canning or Kolkata.' },
          },
        ],
        meals: {
          breakfast: { bn: 'বোটে গরম কড়াইশুঁটির কচুরি / পরোটা ও মিষ্টি', en: 'Hot Kachori/Paratha with Sabzi and sweets on boat' },
          lunch: { bn: 'পোলাও/ভাত, ডাল, ভেটকি কালিয়া, কাঁকড়ার ঝাল (ঐচ্ছিক), চাটনি, পাঁপড়', en: 'Pulao/Rice, Dal, Bhetki Kalia, Crab curry (Optional), Chutney, Papad' },
          snacks: { bn: 'বিকেলে বিস্কুট, মিষ্টি ও চা', en: 'Afternoon biscuits and tea' },
        },
        stayLocation: { bn: 'ট্যুর সমাপ্তি', en: 'Tour Concludes' },
      },
    ],
    inclusions: [
      { bn: '১ রাত পাখিরালয় রিসোর্টে থাকার ব্যবস্থা (এসি/নন-এসি পছন্দমতো)', en: '1 Night resort stay at Pakhiralay (AC/Non-AC options)' },
      { bn: 'সকল বেলার খাঁটি সুস্বাদু খাবার (২ ব্রেকফাস্ট, ২ লাঞ্চ, ১ ডিনার, সান্ধ্য স্ন্যাকস)', en: 'All 6 gourmet meals including signature Bengali fish & prawn preparations' },
      { bn: '২ দিনের ডেডিকেটেড সাফারি বোট ও দক্ষ সারেং', en: '2 Days dedicated tourist safari boat with expert crew' },
      { bn: 'সরকারি গাইড ও বন দপ্তরের সকল প্রবেশ অনুমতি', en: 'Forest department entry permits and registered local tour guide' },
      { bn: 'সন্ধ্যায় সাংস্কৃতিক বাউল ও লোকনৃত্য অনুষ্ঠান', en: 'Evening live Baul folk cultural music session' },
      { bn: 'কলকাতা/ক্যানিং যাতায়াত পরিবহন (প্যাকেজ অনুযায়ী)', en: 'Connecting transport from Kolkata/Canning as selected' },
    ],
    exclusions: [
      { bn: 'ক্যামেরার বিশেষ বন শুল্ক (যদি প্রযোজ্য হয়)', en: 'Special Forest Dept video camera charges' },
      { bn: 'ব্যক্তিগত কেনাকাটা ও প্যাকেজ বহির্ভূত অর্ডার', en: 'Personal shopping and additional custom orders' },
    ],
    childPolicy: {
      bn: '৪ বছর পর্যন্ত শিশু বিনামূল্যে। ৪ থেকে ৮ বছর ৫০% চার্জ।',
      en: 'Children up to 4 years free. 4–8 years charged 50%.',
    },
    basePrice: 2999,
    priceNote: {
      bn: 'প্রতি ব্যক্তি প্যাকেজ মূল্য (যাত্রী দল ও থাকার ধরণের ওপর নির্ভরশীল)',
      en: 'Estimated per person based on standard double/triple sharing',
    },
    groupSize: { bn: 'যেকোনো আকারের পরিবার, কাপল বা বন্ধুদের দল', en: 'Couples, families, and custom friend groups' },
    bestSeason: { bn: 'সেপ্টেম্বর থেকে এপ্রিল', en: 'September to April' },
    foodType: { bn: 'খাঁটি বাঙালি মাছ, চিংড়ি ও মুরগি (নিরামিষ উপলব্ধ)', en: 'Bengali Fish, Prawn & Chicken (Veg available)' },
    accommodationType: { bn: 'পাখিরালয় ইকো রিসোর্ট / ডিলাক্স কটেজ', en: 'Pakhiralay Eco-Resort / Deluxe Cottages' },
    safetyDisclaimer: {
      bn: 'রিসোর্টে ও বোটে বন্যপ্রাণীর শান্তি বজায় রাখতে উচ্চৈঃস্বরে মাইক বা সাউন্ড বক্স বাজানো নিষেধ।',
      en: 'Loud music or amplified speakers are strictly forbidden in eco-sensitive zones.',
    },
  },
  {
    id: 'pkg-3',
    slug: '2-nights-3-days-deluxe',
    title: {
      bn: '২ রাত ৩ দিন ডিলাক্স কমপ্লিট সুন্দরবন প্যাকেজ (সর্বাধিক জনপ্রিয়)',
      en: '2 Nights 3 Days Deluxe Complete Safari (Most Popular)',
    },
    tagline: {
      bn: 'গভীর ম্যানগ্রোভ, ৫ নদী মোহনা, ক্যানোপি ওয়াক, কাঁকড়া ভোজ ও গোসাবা হেরিটেজ',
      en: 'The definitive complete Sundarbans expedition covering all major watch towers, narrow canals & cultural roots',
    },
    durationDays: 3,
    durationNights: 2,
    startingPoint: { bn: 'কলকাতা / ক্যানিং / গদখালি ঘাট', en: 'Kolkata / Canning / Godkhali Jetty' },
    endPoint: { bn: 'কলকাতা / ক্যানিং', en: 'Kolkata / Canning Railway Station' },
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    overview: {
      bn: 'সুন্দরবনের পরিপূর্ণ রূপ, শান্ত ছন্দ ও বন্যপ্রাণী দেখার সর্বোচ্চ সুযোগের জন্য এই ৩ দিনের প্যাকেজটি আমাদের সর্বাধিক জনপ্রিয় ট্যুর। কোনো তাড়াহুড়ো ছাড়াই গোসাবা হেরিটেজ, সজনেখালি, সুধন্যখালি, দোবাঁকি, পীরখালি, গাজিখালি ও পঞ্চমুখী নদীর মোহনা বিস্তারিত ঘুরে দেখা যায়। সাথে থাকে প্রতিদিনের রাজকীয় মেনু—ভেটকি, গলদা চিংড়ি ও কাঁকড়ার কষা ঝোল।',
      en: 'Our signature flagship safari offering unhurried discovery across the UNESCO World Heritage reserve. Covers every major watchtower, quietest tidal creeks, Hamilton heritage bungalow, village interaction, and an authentic multi-course Bengali coastal culinary storyboard.',
    },
    highlights: [
      { bn: 'পূর্ণাঙ্গ সাফারি: সজনেখালি, সুধন্যখালি, দোবাঁকি ক্যানোপি ও পঞ্চমুখী মোহনা', en: 'Complete safari: Sajnekhali, Sudhanyakhali, Dobanki & Panchamukhi' },
      { bn: 'পীরখালি, গাজিখালি ও বনের সরু চ্যানেলে নিবিড় পাখি ও বন্যপ্রাণী অন্বেষণ', en: 'Intensive creek safari through Pirkhali and Gazikhali' },
      { bn: 'রবীন্দ্রনাথের স্মৃতিবিজড়িত গোসাবা হ্যামিল্টন ও বিকন বাংলো হেরিটেজ ওয়াক', en: 'Heritage walk to Sir Daniel Hamilton and Tagore’s Beacon Bungalow' },
      { bn: '২ রাত পাখিরালয়ে প্রিমিয়াম রিসোর্টে অবস্থান ও মনোরম সান্ধ্য আড্ডা', en: '2 Nights comfortable resort stay at Pakhiralay' },
      { bn: 'বাঙালি সি-ফুড ফেস্টিভ্যাল: গলদা চিংড়ি, ভেটকি মাছ, কষা মাংস ও দেশি কাঁকড়া', en: 'Gourmet coastal feasts: jumbo prawns, bhetki kalia, crab curry, and mutton/chicken' },
      { bn: 'ঝুমুর নৃত্য, বাউল সংগীত ও গ্রাম্য হস্তশিল্পের সরাসরি অভিজ্ঞতা', en: 'Live folk performance, Baul music & village artisans' },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: { bn: 'যাত্রা সূচনা, গোসাবা হেরিটেজ ও পাখির কলতান', en: 'Departure, Hamilton Heritage & Sunset Village Walk' },
        activities: [
          {
            time: '08:00 AM – 11:30 AM',
            description: { bn: 'কলকাতা বা ক্যানিং থেকে গদখালি ফেরি ঘাটে পৌঁছানো ও বোটে স্বাগত জানানো।', en: 'Scenic drive to Godkhali, boarding the deluxe safari vessel with welcome drinks.' },
          },
          {
            time: '12:00 PM – 02:00 PM',
            description: { bn: 'গোসাবা বাজার, ঐতিহাসিক হ্যামিল্টন বাংলো ও বিকন বাংলো পরিদর্শন।', en: 'Guided walk through Gosaba bazaar, Sir Daniel Hamilton Bungalow, and Beacon Bungalow.' },
            highlight: { bn: 'হ্যামিল্টন হেরিটেজ বাংলো', en: 'Hamilton Heritage Bungalow' },
          },
          {
            time: '02:30 PM – 04:30 PM',
            description: { bn: 'পাখিরালয় রিসোর্টে চেক-ইন ও বাঙালি মধ্যাহ্নভোজ।', en: 'Check-in at Pakhiralay resort and freshly served Bengali lunch.' },
          },
          {
            time: '05:00 PM – 08:30 PM',
            description: { bn: 'গ্রামের মেঠোপথে সূর্যাস্ত দেখা। সন্ধ্যায় চা-স্ন্যাকসের সাথে মনমাতানো বাউল গানের আসর।', en: 'Sunset village stroll followed by live traditional Baul and folk music with hot pakoras.' },
            highlight: { bn: 'বাউল সংগীতের আসর', en: 'Baul music recital' },
          },
        ],
        meals: {
          breakfast: { bn: 'গরম লুচি, ছোলার ডাল, রসগোল্লা ও চা', en: 'Hot Luchi, Chholar Dal, Rasgulla & Tea' },
          lunch: { bn: 'ভাত, মুগ ডাল, আলুভাজা, বেগুন ভাজা, কাতলা কালিয়া, চিংড়ির মালাইকারি, চাটনি', en: 'Fine Rice, Moong Dal, Fries, Katla Kalia, Golda Chingri Malaikari, Chutney' },
          snacks: { bn: 'মুড়ি-চানাচুর, পেঁয়াজি / পকোড়া ও চা', en: 'Puffed rice mix, crisp pakoras, and tea' },
          dinner: { bn: 'ভাত/রুটি, ডাল, কষা মাংস (চিকেন/মাটন বিকল্প), সালাদ ও ক্ষীর', en: 'Rice/Roti, Dal, Kasha Chicken/Mutton, Salad & Sweets' },
        },
        stayLocation: { bn: 'পাখিরালয় ডিলাক্স রিসোর্ট', en: 'Pakhiralay Deluxe Eco-Resort' },
        boatType: { bn: 'ডিলাক্স সাফারি ক্রুজার', en: 'Deluxe safari cruiser' },
      },
      {
        dayNumber: 2,
        title: { bn: 'গভীর অরণ্য অভিযান, তিন ওয়াচ টাওয়ার ও খাঁড়ি সাফারি', en: 'Core Mangrove Safari: 3 Watch Towers & Creek Navigation' },
        activities: [
          {
            time: '06:30 AM – 09:30 AM',
            description: { bn: 'ভোরে বোট যাত্রা। কুয়াশাচ্ছন্ন নদীতে সজনেখালি ওয়াচ টাওয়ার, মিউজিয়াম ও মিঠাপানির পুকুর দর্শন।', en: 'Early boat departure into Sajnekhali Watch Tower, museum, and crocodile sanctuary.' },
            highlight: { bn: 'সজনেখালি কমপ্লেক্স', en: 'Sajnekhali Complex' },
          },
          {
            time: '10:00 AM – 01:00 PM',
            description: { bn: 'সুধন্যখালি ওয়াচ টাওয়ারে বন্য হরিণ ও সরীসৃপ দর্শন। পীরখালি ও গাজিখালির সরু খাঁড়িতে ধীরগতির সাফারি।', en: 'Sudhanyakhali observation glades, drifting quietly through Pirkhali and Gazikhali narrow canals.' },
            highlight: { bn: 'পীরখালি সরু খাঁড়ি সাফারি', en: 'Pirkhali narrow creek' },
          },
          {
            time: '01:30 PM – 04:30 PM',
            description: { bn: 'দোবাঁকি ক্যানোপি ওয়াক ও টাওয়ার পরিদর্শন। বোটে গরম কাঁকড়ার ঝাল বা মাছের মধ্যাহ্নভোজ। পঞ্চমুখী মোহনা অতিক্রম।', en: 'Dobanki 400m elevated canopy walk; lunch served on boat while crossing the majestic Panchamukhi confluence.' },
            highlight: { bn: 'দোবাঁকি ক্যানোপি ওয়াক', en: 'Dobanki Canopy Walk' },
          },
          {
            time: '06:00 PM – 09:00 PM',
            description: { bn: 'রিসোর্টে প্রত্যাবর্তন, বিশ্রাম ও সুন্দরবনের আদিবাসী সম্প্রদায়ের ঐতিহ্যবাহী ঝুমুর লোকনৃত্য উপভোগ।', en: 'Return to resort, relaxation, and evening vibrant Santhali/Jhumur tribal folk performance.' },
            highlight: { bn: 'ঐতিহ্যবাহী ঝুমুর নাচ', en: 'Tribal Jhumur dance' },
          },
        ],
        meals: {
          breakfast: { bn: 'বোটে পুরি-সবজি, সিদ্ধ ডিম / মিষ্টি ও গরম কফি', en: 'Poori Sabzi, boiled egg/sweet, hot coffee on boat' },
          lunch: { bn: 'দেরাদুন চালের ভাত, ডাল, ভাজা, ভেটকি পাতুরি / কালিয়া, দেশি কাঁকড়ার কষা ঝাল, চাটনি ও পাঁপড়', en: 'Fine Rice, Dal, Fries, Bhetki Paturi/Kalia, Spicy Coastal Crab curry, Chutney, Papad' },
          snacks: { bn: 'চিকেন পকোড়া / ভেজ ফিঙ্গার ও চা', en: 'Crisp chicken pakoras / veg fingers & tea' },
          dinner: { bn: 'ফ্রায়েড রাইস বা রুটি, চিকেন রোস্ট/কষা, ডাল, পায়েস', en: 'Fried Rice or Roti, Chicken Roast/Kasha, Dal, Payesh' },
        },
        stayLocation: { bn: 'পাখিরালয় ডিলাক্স রিসোর্ট', en: 'Pakhiralay Deluxe Eco-Resort' },
        boatType: { bn: 'ডিলাক্স সাফারি ক্রুজার', en: 'Deluxe safari cruiser' },
      },
      {
        dayNumber: 3,
        title: { bn: 'দ্বীপ জীবনের স্পন্দন, স্থানীয় হাট ও স্মৃতিময় বিদায়', en: 'Island Village Life, Craft Market & Return Journey' },
        activities: [
          {
            time: '07:30 AM – 09:30 AM',
            description: { bn: 'রিসোর্টে সকালের নাস্তা। স্থানীয় খাঁটি মধু ও সুন্দরবনের হস্তশিল্প বাজার পরিদর্শন।', en: 'Breakfast at resort, guided walk to local pure Sundarban honey & handicraft market.' },
            highlight: { bn: 'খাঁটি সুন্দরবন মধু সংগ্রহ', en: 'Pure mangrove honey market' },
          },
          {
            time: '10:00 AM – 01:00 PM',
            description: { bn: 'বোটে শেষ পর্বের নদী ভ্রমণ ও সুন্দরবনের জলজীবনের অপরূপ দৃশ্য ক্যামেরাবন্দি করা।', en: 'Closing scenic river cruise soaking in the expansive river breezes and capturing final photos.' },
          },
          {
            time: '01:30 PM – 02:30 PM',
            description: { bn: 'বোটে বিদায়ী মধ্যাহ্নভোজ (ভাত, ডাল, মাছ, চাটনি)।', en: 'Farewell lunch on boat before reaching Godkhali.' },
          },
          {
            time: '03:00 PM – 07:00 PM',
            description: { bn: 'গদখালি থেকে গাড়িতে কলকাতা বা ক্যানিং স্টেশনে নিরাপদ প্রত্যাবর্তন।', en: 'Disembark at Godkhali, transfer to Kolkata / Canning with unforgettable memories.' },
          },
        ],
        meals: {
          breakfast: { bn: 'পরোটা, আলুর দম ও মিষ্টি', en: 'Paratha, Aloor Dom, and Sweets' },
          lunch: { bn: 'ভাত, ডাল, আলুভাজা, টাটকা রুই মাছের কালিয়া, আমের চাটনি, পাঁপড়', en: 'Rice, Dal, Fries, Fresh Rui Kalia, Mango Chutney, Papad' },
          snacks: { bn: 'বিকেলের চা ও বিস্কুট', en: 'Afternoon tea and biscuits' },
        },
        stayLocation: { bn: 'ট্যুর সমাপ্তি', en: 'Tour Concludes' },
      },
    ],
    inclusions: [
      { bn: '২ রাত পাখিরালয়ে এসি বা নন-এসি ডিলাক্স কটেজে থাকা', en: '2 Nights stay at deluxe eco-resort in Pakhiralay' },
      { bn: '৩ দিনের মোট ৯টি খাঁটি বাঙালি খাবার (৩ ব্রেকফাস্ট, ৩ লাঞ্চ, ২ ডিনার, সান্ধ্য নাস্তা)', en: 'All 9 authentic meals (Fish, Prawn, Crab, Chicken/Mutton & Veg)' },
      { bn: '৩ দিনের সম্পূর্ণ ডেডিকেটেড সাফারি ক্রুজার ও দক্ষ সারেং', en: '3 Days private safari boat cruiser' },
      { bn: 'সরকারি গাইড, বনদপ্তরের পারমিট ও সকল ওয়াচ টাওয়ার ফি', en: 'Forest department permits, government guide & watchtower fees' },
      { bn: '২ সন্ধ্যার লোকসাংস্কৃতিক অনুষ্ঠান (বাউল গান ও ঝুমুর নৃত্য)', en: '2 Evening cultural events (Baul music and tribal Jhumur dance)' },
      { bn: 'কলকাতা/ক্যানিং থেকে সম্পূর্ণ যাতায়াত গাড়ির ব্যবস্থা (বিকল্প অনুযায়ী)', en: 'Complete transport from Kolkata/Canning as selected' },
    ],
    exclusions: [
      { bn: 'ব্যক্তিগত কেনাকাটা ও প্যাকেজ বহির্ভূত খাবার', en: 'Personal shopping and extra food items' },
      { bn: 'ক্যামেরা ট্যাক্স (যদি ফরেস্ট দপ্তর প্রযোজ্য করে)', en: 'Camera fees (if applicable by STR)' },
    ],
    childPolicy: {
      bn: '৪ বছর পর্যন্ত শিশু সম্পূর্ণ ফ্রি। ৪–৮ বছর ৫০% চার্জ। ৮+ বছর প্রাপ্তবয়স্ক হিসেবে গণ্য।',
      en: 'Children under 4 years free. 4–8 years 50%. 8+ years adult fare.',
    },
    basePrice: 3999,
    priceNote: {
      bn: 'প্রতি ব্যক্তি আনুমানিক (রুমের ধরণ ও গ্রুপ সাইজের ওপর ভিত্তি করে)',
      en: 'Estimated per person based on standard sharing',
    },
    groupSize: { bn: 'পরিবার, বন্ধু বা কর্পোরেট টিম', en: 'Families, friend circles, or corporate teams' },
    bestSeason: { bn: 'অক্টোবর থেকে মার্চ (সবচেয়ে আরামদায়ক)', en: 'October to March (Optimal wildlife climate)' },
    foodType: { bn: 'বাঙালি ফাইভ-কোর্স স্পেশাল (সি-ফুড ও নন-ভেজ/ভেজ)', en: 'Authentic 5-Course Bengali Seafood & Meat (Veg option)' },
    accommodationType: { bn: 'ডিলাক্স ইকো রিসোর্ট / কটেজ', en: 'Deluxe Eco-Resort / Cottage' },
    isPopular: true,
    safetyDisclaimer: {
      bn: 'সাফারি চলাকালীন বোটের চালকের নির্দেশ মেনে চলুন। ম্যানগ্রোভ বনে কোনো প্লাস্টিক বা ময়লা ফেলা দণ্ডনীয় অপরাধ।',
      en: 'Strictly follow crew instructions. Littering plastic in reserve forests is a punishable offense.',
    },
  },
  {
    id: 'pkg-4',
    slug: '3-nights-4-days-extended',
    title: {
      bn: '৩ রাত ৪ দিন এক্সটেন্ডেড ওয়াইল্ডলাইফ ও সীমান্ত সুন্দরবন অভিযান',
      en: '3 Nights 4 Days Extended Frontier & Deep Mangrove Safari',
    },
    tagline: {
      bn: 'বুড়িরডাবরি মাড ওয়াক, রায়মঙ্গল সীমান্ত ও বনি ক্যাম্পের দুর্গম অরণ্য',
      en: 'A deep-forest expedition venturing to Burirdabri mud walk, Raimangal border & remote towers',
    },
    durationDays: 4,
    durationNights: 3,
    startingPoint: { bn: 'কলকাতা / ক্যানিং / গদখালি', en: 'Kolkata / Canning / Godkhali Jetty' },
    endPoint: { bn: 'কলকাতা / ক্যানিং', en: 'Kolkata / Canning Railway Station' },
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
    ],
    overview: {
      bn: 'প্রকৃতিপ্রেমী, বন্যপ্রাণী বিশেষজ্ঞ ও ফটোগ্রাফারদের জন্য বিশেষভাবে ডিজাইন করা এই দীর্ঘ ট্যুরে সাধারণ পর্যটকদের ভিড় ছাড়িয়ে সুন্দরবনের দূরবর্তী পূর্বাঞ্চলীয় রেঞ্জ—বুড়িরডাবরি কেজ ট্রেইল, রায়মঙ্গল সীমান্ত মোহনা, ঝিঙেখালি ও দুর্গম বনি ক্যাম্প পর্যন্ত ভ্রমণ করা হয়।',
      en: 'An exclusive extended expedition designed for wildlife enthusiasts, researchers, and birders looking beyond standard tourist trails. Venture deep into the eastern and southern sectors to experience Burirdabri, Raimangal boundary waters, Jhingekhali, and remote canopy towers.',
    },
    highlights: [
      { bn: 'বুড়িরডাবরি রোমাঞ্চকর কাদার ট্রেইল (Mud Walk) ও কেজ ওয়াকওয়ে', en: 'Burirdabri cage trail and raw mudflat walk' },
      { bn: 'ভারত–বাংলাদেশ আন্তর্জাতিক জলসীমা রায়মঙ্গল নদীর বিশাল মোহনা', en: 'Raimangal international river boundary vantage' },
      { bn: 'ঝিঙেখালি ও নেতিধোপানি ঐতিহাসিক ধ্বংসাবশেষ ওয়াচ টাওয়ার', en: 'Jhingekhali and Netidhopani ancient temple ruins' },
      { bn: 'সজনেখালি, সুধন্যখালি ও দোবাঁকি ক্যানোপি ওয়াকওয়ে', en: 'Sajnekhali, Sudhanyakhali, and Dobanki Canopy Walk' },
      { bn: '৩ রাত নিরিবিলি রিসোর্টে অবস্থান ও প্রতিদিনের বিশেষ সি-ফুড মেনু', en: '3 Nights peaceful resort retreat with custom chef curation' },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: { bn: 'যাত্রা সূচনা, গোসাবা হেরিটেজ ও পাখিরালয় আগমন', en: 'Departure, Hamilton Heritage & Arrival' },
        activities: [
          {
            time: '08:00 AM – 02:00 PM',
            description: { bn: 'কলকাতা থেকে গদখালি হয়ে গোসাবা বাংলো পরিদর্শন ও পাখিরালয় রিসোর্টে চেক-ইন।', en: 'Transit to Godkhali, Gosaba heritage visit and check-in at Pakhiralay resort.' },
          },
          {
            time: '04:00 PM – 08:30 PM',
            description: { bn: 'নদীতীরে পাখির সন্ধান ও সন্ধ্যায় স্থানীয় বাউল শিল্পীদের গান।', en: 'Riverside birding walk followed by authentic Baul musical session.' },
          },
        ],
        meals: {
          breakfast: { bn: 'লুচি, আলুর দম ও মিষ্টি', en: 'Luchi, Aloor Dom & Sweets' },
          lunch: { bn: 'ভাত, ডাল, আলুভাজা, কাতলা কালিয়া, চিংড়ির মালাইকারি, চাটনি', en: 'Rice, Dal, Fries, Fish Kalia, Prawn Malaikari, Chutney' },
          dinner: { bn: 'রুটি/ভাত, ডাল, চিকেন কষা, সালাদ ও মিষ্টি', en: 'Roti/Rice, Dal, Chicken Kasha, Salad, Sweets' },
        },
        stayLocation: { bn: 'পাখিরালয় রিসোর্ট', en: 'Pakhiralay Eco-Resort' },
      },
      {
        dayNumber: 2,
        title: { bn: 'ক্লাসিক কোর সাফারি: সজনেখালি, সুধন্যখালি ও দোবাঁকি', en: 'Core Reserve: Sajnekhali, Sudhanyakhali & Dobanki' },
        activities: [
          {
            time: '06:30 AM – 04:30 PM',
            description: { bn: 'সারাদিনব্যাপী সজনেখালি, সুধন্যখালি ও দোবাঁকি ক্যানোপি ওয়াকওয়ে সাফারি। পীরখালি ও গাজিখালি খাঁড়িতে বোট ড্রাফট।', en: 'Full-day safari covering Sajnekhali, Sudhanyakhali, and Dobanki Canopy Walk with creek drift.' },
          },
        ],
        meals: {
          breakfast: { bn: 'বোটে গরম কচুরি ও চা', en: 'Kachori, Sabzi & Tea on boat' },
          lunch: { bn: 'ভাত, ডাল, ভেটকি মাছের কালিয়া, কাঁকড়ার ঝাল, চাটনি', en: 'Rice, Dal, Bhetki Kalia, Crab curry, Chutney' },
          dinner: { bn: 'পোলাও, মাটন কষা / পনির বাটার মশলা, পায়েস', en: 'Pulao, Mutton Kasha / Paneer Butter Masala, Dessert' },
        },
        stayLocation: { bn: 'পাখিরালয় রিসোর্ট', en: 'Pakhiralay Eco-Resort' },
      },
      {
        dayNumber: 3,
        title: { bn: 'সীমান্ত অভিযান: বুড়িরডাবরি, রায়মঙ্গল ও ঝিঙেখালি', en: 'Frontier Sector: Burirdabri, Raimangal & Jhingekhali' },
        activities: [
          {
            time: '06:00 AM – 05:00 PM',
            description: { bn: 'ভোর থেকেই গভীর পূর্বাঞ্চলীয় সীমানায় যাত্রা। বুড়িরডাবরির মাড ওয়াক ও রায়মঙ্গল নদীর আন্তর্জাতিক দৃশ্য দর্শন।', en: 'Full-day deep frontier voyage to Burirdabri cage trail, mud walk, and Raimangal border panorama.' },
            highlight: { bn: 'বুড়িরডাবরি মাড ওয়াক', en: 'Burirdabri Mud Walk' },
          },
        ],
        meals: {
          breakfast: { bn: 'বোটে স্যান্ডউইচ/পরোটা, ফল ও কফি', en: 'Sandwich/Paratha, fresh fruits & coffee' },
          lunch: { bn: 'দেরাদুন চালের ভাত, সোনা মুগ ডাল, তোপসে/পারশে মাছ ভাজা, দেশি মুরগি, চাটনি', en: 'Dehradun Rice, Moong Dal, Topshe/Parshe fish fry, Country Chicken, Chutney' },
          dinner: { bn: 'রুটি/ভাত, ডাল, ফিশ ফ্রাই, কড়াই পনির, মিষ্টি', en: 'Roti/Rice, Dal, Fish Fry, Kadai Paneer, Sweets' },
        },
        stayLocation: { bn: 'পাখিরালয় রিসোর্ট', en: 'Pakhiralay Eco-Resort' },
      },
      {
        dayNumber: 4,
        title: { bn: 'দ্বীপ সংস্কৃতি, শেষ বোট সাফারি ও নিরাপদ প্রত্যাবর্তন', en: 'Village Heritage & Safe Return' },
        activities: [
          {
            time: '08:00 AM – 03:00 PM',
            description: { bn: 'পাখিরালয় বাজার দর্শন ও বোটে পঞ্চমুখী হয়ে গদখালি ফিরে কলকাতায় ফেরা।', en: 'Local artisan visit, farewell cruise crossing Panchamukhi, drop-off at Kolkata.' },
          },
        ],
        meals: {
          breakfast: { bn: 'লুচি, তরকারি ও চা', en: 'Luchi, Curry & Tea' },
          lunch: { bn: 'ভাত, ডাল, মাছের ঝোল, চাটনি', en: 'Rice, Dal, Fish Curry, Chutney' },
        },
        stayLocation: { bn: 'ট্যুর সমাপ্তি', en: 'Tour Concludes' },
      },
    ],
    inclusions: [
      { bn: '৩ রাত রিসোর্ট আবাসন', en: '3 Nights eco-resort accommodation' },
      { bn: '৪ দিনের সকল ১২টি আহার ও রিফ্রেশমেন্ট', en: 'All 12 meals across 4 days' },
      { bn: '৪ দিনের বিশেষ বোট ক্রুজ ও গভীর সীমানার বিশেষ পারমিট', en: '4 Days dedicated boat cruiser & frontier permits' },
      { bn: 'বুড়িরডাবরি ও বিশেষ পূর্বাঞ্চলীয় রেঞ্জ এন্ট্রি ফি', en: 'Burirdabri and special range entry fees' },
      { bn: 'কলকাতা/ক্যানিং সম্পূর্ণ পরিবহন', en: 'Complete transfer from Kolkata / Canning' },
    ],
    exclusions: [
      { bn: 'ব্যক্তিগত ব্যয় ও বিশেষ ক্যামেরা লাইসেন্স ফি', en: 'Personal expenses and special video camera fees' },
    ],
    childPolicy: {
      bn: '৪ বছর পর্যন্ত শিশু ফ্রি। ৪–৮ বছর ৫০% চার্জ।',
      en: 'Under 4 years free. 4–8 years 50%.',
    },
    basePrice: 4999,
    priceNote: {
      bn: 'প্রতি ব্যক্তি (সীমান্ত নৌযাত্রার বিশেষ জ্বালানি ও পারমিট অন্তর্ভুক্ত)',
      en: 'Per person (Includes extended navigation fuel and frontier permits)',
    },
    groupSize: { bn: 'ওয়াইল্ডলাইফ দল, ফটোগ্রাফার ও অভিজ্ঞ ভ্রমণকারী', en: 'Wildlife enthusiasts, birding clubs & researchers' },
    bestSeason: { bn: 'নভেম্বর থেকে ফেব্রুয়ারি (শীতকাল আদর্শ)', en: 'November to February (Optimal winter season)' },
    foodType: { bn: 'ঐতিহ্যবাহী বাঙালি স্পেশাল ও টাটকা নদী মাছ', en: 'Special Bengali cuisine & fresh estuarine catch' },
    accommodationType: { bn: 'প্রিমিয়াম রিসোর্ট কটেজ', en: 'Premium Eco-Resort Cottages' },
    safetyDisclaimer: {
      bn: 'আন্তর্জাতিক জলসীমায় বিএসএফ ও বনদপ্তরের নিয়মাবলী অক্ষরে অক্ষরে পালন করতে হবে।',
      en: 'Strict compliance with BSF and Forest Department maritime guidelines along border channels.',
    },
  },
  {
    id: 'pkg-5',
    slug: 'seasonal-monsoon-festival',
    title: {
      bn: 'মরশুমি বর্ষা, শীতকালীন ইলিশ উৎসব ও পূজা স্পেশাল',
      en: 'Seasonal Monsoon, Hilsa Festival & Festive Specials',
    },
    tagline: {
      bn: 'রূপোলি পদ্মার ইলিশের পদ, মেঘলা নদী ও উৎসবমুখর সুন্দরবন',
      en: 'Celebrating the legendary Hilsa festival, monsoon romanticism, and festive holidays',
    },
    durationDays: 2,
    durationNights: 1,
    startingPoint: { bn: 'কলকাতা / ক্যানিং / গদখালি', en: 'Kolkata / Canning / Godkhali' },
    endPoint: { bn: 'কলকাতা / ক্যানিং', en: 'Kolkata / Canning' },
    heroImage: sundarbanSafariImage,
    galleryImages: [
      'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    overview: {
      bn: 'বর্ষা ও উৎসবের দিনগুলোতে সুন্দরবনের রূপ অনন্য হয়ে ওঠে। এই বিশেষ প্যাকেজে নদী সাফারির পাশাপাশি থাকে ইলিশ উৎসবের ৭-১০ রকমের লোভনীয় পদ: ইলিশ ভাজা, সর্ষে ইলিশ, ভাপা ইলিশ, ইলিশের ডিম, ইলিশের তেল ও পাতলা ঝোল। দুর্গাপূজা, দীপাবলি ও বড়দিনের ছুটিতে পরিবার নিয়ে ভ্রমণের শ্রেষ্ঠ প্যাকেজ।',
      en: 'Designed around the romantic monsoon rains and festive holiday seasons (Durga Puja, Christmas & New Year). Features our acclaimed Hilsa Festival menu boasting 7-10 distinct preparation styles alongside complete reserve safari access.',
    },
    highlights: [
      { bn: 'ইলিশ উৎসব বিশেষ মেনু: সর্ষে ইলিশ, ভাপা ইলিশ, ইলিশের তেল ও ডিম ভাজা', en: 'Signature Hilsa Banquet: Shorshe Ilish, Bhapa Ilish, Fried Roe, Ilish Head Charchari' },
      { bn: 'সজনেখালি, সুধন্যখালি ও দোবাঁকি ক্যানোপি ওয়াকওয়ে পরিদর্শন', en: 'Complete access to Sajnekhali, Sudhanyakhali, and Dobanki' },
      { bn: 'বৃষ্টিভেজা ম্যানগ্রোভের সতেজ রূপ ও পঞ্চমুখী নদীর জলরাশি', en: 'Verdant monsoon mangrove beauty and open river winds' },
      { bn: 'উৎসবের বিশেষ বাউল গান ও সন্ধ্যার সাংস্কৃতিক আড্ডা', en: 'Festive cultural Baul songs and warm hospitality' },
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: { bn: 'উৎসবের সূচনা, ইলিশের গন্ধ ও পাখিরালয় নিবাস', en: 'Festive Welcome, Hilsa Feast & Resort Retreat' },
        activities: [
          {
            time: '08:00 AM – 02:00 PM',
            description: { bn: 'গদখালি হয়ে গোসাবা হেরিটেজ দর্শন এবং পাখিরালয় রিসোর্টে আগমন।', en: 'Transfer to Godkhali, Gosaba heritage exploration, and check-in at resort.' },
          },
          {
            time: '02:00 PM – 04:00 PM',
            description: { bn: 'ঐতিহাসিক ইলিশ উৎসবের মধ্যাহ্নভোজ (ইলিশ ভাজা, তেল, সর্ষে ইলিশ, ভাপা ইলিশ)।', en: 'Grand Hilsa Feast: Ilish Bhaja, mustard gravy Shorshe Ilish, Bhapa Ilish.' },
            highlight: { bn: 'ইলিশ উৎসব মহাতালিকা', en: 'Grand Hilsa Feast' },
          },
          {
            time: '05:30 PM – 08:30 PM',
            description: { bn: 'গ্রামের মেঠোপথ ভ্রমণ ও সন্ধ্যায় ইলিশের ডিম ভাজা সহযোগে বাউল গানের আসর।', en: 'Evening village stroll followed by Baul folk music with hot snacks.' },
          },
        ],
        meals: {
          breakfast: { bn: 'লুচি, আলুর দম ও মিষ্টি', en: 'Luchi, Aloor Dom & Sweets' },
          lunch: { bn: 'ভাত, মুগ ডাল, ইলিশ তেল, ইলিশ ভাজা, সর্ষে ইলিশ, ভাপা ইলিশ, চাটনি, পাঁপড়', en: 'Rice, Dal, Ilish Oil, Fried Ilish, Shorshe Ilish, Bhapa Ilish, Chutney, Papad' },
          snacks: { bn: 'ইলিশের ডিমের পকোড়া / মাছের চপ ও চা', en: 'Ilish Roe Fritters / Fish Chops & Tea' },
          dinner: { bn: 'পোলাও, দেশি মুরগির কষা ঝোল, মিষ্টি', en: 'Pulao, Country Chicken Kasha, Desserts' },
        },
        stayLocation: { bn: 'পাখিরালয় রিসোর্ট', en: 'Pakhiralay Eco-Resort' },
      },
      {
        dayNumber: 2,
        title: { bn: 'বৃষ্টিভেজা বন সাফারি, ওয়াচ টাওয়ার ও মিষ্টি স্মৃতি', en: 'Mangrove Safari, Canopy Walk & Return' },
        activities: [
          {
            time: '06:30 AM – 02:00 PM',
            description: { bn: 'বোটে ব্রেকফাস্ট করতে করতে সজনেখালি, সুধন্যখালি ও দোবাঁকি ক্যানোপি ওয়াক পরিদর্শন।', en: 'Safari cruise covering Sajnekhali, Sudhanyakhali, and Dobanki Canopy Walk.' },
          },
          {
            time: '02:30 PM – 07:00 PM',
            description: { bn: 'বোটে শেষ পর্বের দুপুরের খাবার সেরে গদখালি হয়ে কলকাতা প্রত্যাগমন।', en: 'Lunch on boat, arriving Godkhali and safe drop-off at Kolkata.' },
          },
        ],
        meals: {
          breakfast: { bn: 'কড়াইশুঁটির কচুরি / পরোটা ও মিষ্টি', en: 'Koraishutir Kochuri / Paratha & Sweets' },
          lunch: { bn: 'ভাত, ডাল, আলুভাজা, ইলিশের মাথা দিয়ে পুঁইশাক বা কচুর শাক, পাতলা ইলিশ ঝোল, চাটনি', en: 'Rice, Dal, Ilish Head Greens, Light Ilish Curry, Chutney' },
          snacks: { bn: 'চা ও বিস্কুট', en: 'Tea and Biscuits' },
        },
        stayLocation: { bn: 'ট্যুর সমাপ্তি', en: 'Tour Concludes' },
      },
    ],
    inclusions: [
      { bn: '১ রাত রিসোর্ট থাকা (এসি/নন-এসি)', en: '1 Night stay at resort (AC/Non-AC)' },
      { bn: 'ইলিশ উৎসবের বিশেষ ও বহুমুখী বাঙালি আহার', en: 'Signature Hilsa festival multi-course menu' },
      { bn: '২ দিনের সাফারি বোট ও গাইড চার্জ', en: '2 Days safari boat and certified guide charges' },
      { bn: 'সরকারি পারমিট ও সকল ওয়াচ টাওয়ার ফি', en: 'All forest permits and watchtower fees' },
      { bn: 'কলকাতা/ক্যানিং যাতায়াত গাড়ি (বিকল্প অনুযায়ী)', en: 'Complete road transport as chosen' },
    ],
    exclusions: [
      { bn: 'ব্যক্তিগত কেনাকাটা', en: 'Personal expenses' },
    ],
    childPolicy: {
      bn: '৪ বছর পর্যন্ত ফ্রি। ৪–৮ বছর ৫০% চার্জ।',
      en: 'Under 4 years free. 4–8 years 50%.',
    },
    basePrice: 2999,
    priceNote: {
      bn: 'প্রতি ব্যক্তি (ইলিশ উৎসবের স্পেশাল মেনু অন্তর্ভুক্ত)',
      en: 'Per person including full Hilsa culinary banquet',
    },
    groupSize: { bn: 'খাদ্যরসিক পরিবার ও বন্ধুমহল', en: 'Foodies, families, and festival groups' },
    bestSeason: { bn: 'জুলাই থেকে অক্টোবর (বর্ষা ও শরৎ উৎসব)', en: 'July to October (Monsoon & Autumn Festivals)' },
    foodType: { bn: 'ইলিশ উৎসব ও খাঁটি ঐতিহ্যবাহী পদ', en: 'Signature Hilsa Feast & Bengali Classics' },
    accommodationType: { bn: 'পাখিরালয় রিসোর্ট কটেজ', en: 'Pakhiralay Eco-Resort Cottages' },
    isSpecialOffer: true,
    offerBadge: { bn: 'ইলিশ ও পূজা স্পেশাল', en: 'Hilsa & Festive Special' },
    safetyDisclaimer: {
      bn: 'বর্ষাকালে নদীর তীব্র স্রোতে সবসময় বোটে নির্দিষ্ট ডেকে অবস্থান করুন ও রেলিং ধরে রাখুন।',
      en: 'During monsoon tides, remain on covered decks and hold handrails when moving.',
    },
  },
];
