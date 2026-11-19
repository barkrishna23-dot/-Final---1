import { GalleryItem } from '../types';
import galleryImg1 from '../assets/images/regenerated_image_1788724127036.avif';
import galleryImg2 from '../assets/images/regenerated_image_1788724128341.webp';
import heroPneumatophoresImg from '../assets/images/regenerated_image_1788720995101.jpg';
import heroSajnekhaliDeerImg from '../assets/images/regenerated_image_1788721094482.jpg';
import heroEgretImg from '../assets/images/regenerated_image_1788719895312.jpg';
import sajnekhaliDestImg from '../assets/images/regenerated_image_1788721456767.jpg';
import sudhanyakhaliDestImg from '../assets/images/regenerated_image_1788721454884.jpg';
import dobankiDestImg from '../assets/images/regenerated_image_1788721457725.jpg';
import panchamukhiDestImg from '../assets/images/regenerated_image_1789501618239.jpg';
import pirkhaliDestImg from '../assets/images/regenerated_image_1789501623637.jpg';
import gazikhaliDestImg from '../assets/images/regenerated_image_1789502201126.png';
import safariBoatImg from '../assets/images/regenerated_image_1788720175291.png';
import classicPkgImg from '../assets/images/regenerated_image_1789503724562.png';
import deluxePkgImg from '../assets/images/regenerated_image_1789504246898.png';
import hamiltonEstateImg from '../assets/images/regenerated_image_1788724130011.jpg';
import bhapaIlishImg from '../assets/images/regenerated_image_1788720668689.webp';
import tideGuideImg from '../assets/images/regenerated_image_1788721841851.jpg';
import packingGuideImg from '../assets/images/regenerated_image_1788719536998.png';
import showcaseMangroveImg from '../assets/images/regenerated_image_1789032445789.jpg';
import founderOwnerImg from '../assets/images/founder_optimized.jpg';

export const GALLERY_ITEMS: GalleryItem[] = [
  // =========================================================================
  // ১. বন্যপ্রাণী (WILDLIFE) — সকল বন্যপ্রাণীর ছবি শুধুমাত্র 'বন্যপ্রাণী' ও 'সকল ছবি'-তে
  // =========================================================================
  {
    id: 'g-cld-tiger-forest',
    title: { bn: 'রয়্যাল বেঙ্গল টাইগার — সুন্দরবন অরণ্য', en: 'Royal Bengal Tiger in Sundarban Forest' },
    caption: { bn: 'ঘন ম্যানগ্রোভ অরণ্যে সুন্দরবনের রাজকীয় রয়্যাল বেঙ্গল টাইগার।', en: 'The majestic Royal Bengal Tiger in its natural Sundarban mangrove wilderness.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112377/royal-bengal-tiger-sundarban-forest.webp',
    credit: 'Sundarban Vromon Wildlife',
  },
  {
    id: 'g-cld-tiger-2',
    title: { bn: 'সুন্দরবনের গর্ব রয়্যাল বেঙ্গল টাইগার', en: 'Royal Bengal Tiger of Sundarbans' },
    caption: { bn: 'ম্যানগ্রোভ অরণ্যের অদ্বিতীয় অধিপতি রয়্যাল বেঙ্গল টাইগারের দুর্লভ দৃশ্য।', en: 'A close look at the iconic Royal Bengal Tiger of the Sundarbans delta.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112377/royal-bengal-tiger.jpg',
    credit: 'Sundarban Vromon Wildlife',
  },
  {
    id: 'g-cld-tiger-mangrove',
    title: { bn: 'ম্যানগ্রোভ শ্বাসমূলে বিশ্রামরত রয়্যাল বেঙ্গল টাইগার', en: 'Royal Bengal Tiger Resting Among Mangrove Roots' },
    caption: { bn: 'সবুজ ম্যানগ্রোভ ও শ্বাসমূলের আড়ালে বিশ্রামরত সুন্দরবনের বাঘ।', en: 'Royal Bengal Tiger camouflaged quietly among Sundarban pneumatophores and green foliage.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112376/oyvis474xyetex7hakjm.jpg',
    credit: 'Sundarban Vromon Wildlife',
  },
  {
    id: 'g-cld-tiger-mudbank',
    title: { bn: 'নদীতীরের কাদামাটিতে রয়্যাল বেঙ্গল টাইগার', en: 'Royal Bengal Tiger on Tidal Mudbank' },
    caption: { bn: 'ম্যানগ্রোভ গাছের ছায়ায় ভাটার কাদামাটিতে বসে থাকা রয়্যাল বেঙ্গল টাইগার।', en: 'Royal Bengal Tiger relaxing along the grey tidal mudbank beneath mangrove canopy.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112371/828311740_1095974469959445_3212594854249201079_n_1.jpg',
    credit: 'Sundarban Vromon Wildlife',
  },
  {
    id: 'g-cld-crocodile-mudbank',
    title: { bn: 'ভাটার কাদায় রোদে গা গরম করা নোনা জলের কুমির', en: 'Saltwater Crocodile Basking on Low-Tide Mudbank' },
    caption: { bn: 'সুন্দরবনের নদীর তীরে ভাটার কাদামাটিতে বিশালাকার নোনা জলের কুমিরের দুর্লভ দৃশ্য।', en: 'A massive estuarine saltwater crocodile basking peacefully on the Sundarbans tidal silt bank.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112371/828860104_1095974589959433_9068142587555485847_n.jpg',
    credit: 'Sundarban Vromon Wildlife',
  },
  {
    id: 'g-cld-crocodile-grass',
    title: { bn: 'সবুজ ঘাস ও কাদার চরে নোনা জলের কুমির', en: 'Estuarine Crocodile Amidst Mangrove Grass' },
    caption: { bn: 'নদীতীরের ঘাস ও নরম কাদায় বিশ্রামরত সুন্দরবনের নোনা জলের কুমির।', en: 'Saltwater crocodile resting in lush riverside grass along Sundarban mudflats.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112372/d2a3e637-c8c1-4a90-be8b-541054a6d47f.webp',
    credit: 'Sundarban Vromon Wildlife',
  },
  {
    id: 'g-cld-fishing-cat',
    title: { bn: 'সুন্দরবনের বিরল বাঘরোল (Fishing Cat)', en: 'Rare Fishing Cat of the Sundarbans' },
    caption: { bn: 'পশ্চিমবঙ্গের রাজ্য প্রাণী ও সুন্দরবনের জলাভূমির দুর্লভ বন্যপ্রাণী বাঘরোল।', en: 'West Bengal’s state animal, the elusive Fishing Cat thriving in Sundarban wetlands.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112370/828203510_1095974619959430_3615871677191356409_n.jpg',
    credit: 'Sundarban Vromon Wildlife',
  },
  {
    id: 'g-cld-monkeys',
    title: { bn: 'সুন্দরবনের বানরের দল (Rhesus Macaques)', en: 'Rhesus Macaque Family in Sundarbans' },
    caption: { bn: 'নদীতীরের ওয়াচ টাওয়ার প্রাঙ্গণে সুন্দরবনের রিসাস বানরের পরিবারের বিচরণ।', en: 'Playful Rhesus macaque family perched along the mangrove sanctuary railing.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112370/724061153_122316801356223667_2133764708174140122_n.jpg',
    credit: 'Sundarban Vromon Wildlife',
  },
  {
    id: 'g-cld-kingfisher-black',
    title: { bn: 'কালো-মাথা মাছরাঙা (Black-capped Kingfisher)', en: 'Black-capped Kingfisher in Mangrove Creek' },
    caption: { bn: 'সুন্দরবনের সরু খাঁড়ির ডালে বসা রঙিন কালো-মাথা মাছরাঙা পাখি।', en: 'Vibrant Black-capped Kingfisher perched over quiet Sundarban tidal channels.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112371/828987974_1095975099959382_3654335814301438466_n.jpg',
    credit: 'Sundarban Vromon Wildlife',
  },
  {
    id: 'g-cld-kingfisher-white',
    title: { bn: 'সাদা-বুক মাছরাঙা (White-throated Kingfisher)', en: 'White-throated Kingfisher of Sundarbans' },
    caption: { bn: 'গাছের ডালে শিকারের অপেক্ষায় উজ্জ্বল নীল ডানার সাদা-বুক মাছরাঙা।', en: 'Bright turquoise-winged White-throated Kingfisher spotted during creek safari.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112369/833890603_1095975029959389_4695258730939805167_n.jpg',
    credit: 'Sundarban Vromon Wildlife',
  },
  {
    id: 'g-cld-falcon',
    title: { bn: 'সুন্দরবনের শিকারী বাজপাখি (Peregrine Falcon)', en: 'Peregrine Falcon in Sundarban Canopy' },
    caption: { bn: 'ম্যানগ্রোভ গাছের উঁচু ডালে বসে থাকা দ্রুতগামী শিকারী বাজপাখি।', en: 'Peregrine Falcon scanning the mangrove delta from a high mossy branch.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112371/828941917_1095974663292759_4720545638591465183_n.jpg',
    credit: 'Sundarban Vromon Wildlife',
  },
  {
    id: 'g-hero-sajnekhali-deer',
    title: { bn: 'সজনেখালি মিষ্টি জলের পুকুর ও চিত্রল হরিণ', en: 'Spotted Deer & Egret at Sajnekhali Pond' },
    caption: { bn: 'ওয়াচ টাওয়ারের সামনে পুকুর পাড়ে চিত্রল হরিণের বিচরণ ও সাদা বকপাখি।', en: 'Spotted deer grazing peacefully beside Sajnekhali sweet-water pond alongside white egrets.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: heroSajnekhaliDeerImg,
    credit: 'Sundarban Vromon Wildlife',
  },
  {
    id: 'g-hero-egret',
    title: { bn: 'সুন্দরবনের বক ও চিত্রবলাকা পাখির মেলা', en: 'Painted Storks & Mangrove Avifauna' },
    caption: { bn: 'সবুজ ম্যানগ্রোভের ডালে দলবদ্ধভাবে বসে থাকা পরিযায়ী ও দেশি বকপাখি।', en: 'Flock of Painted Storks nesting across the lush mangrove canopy of Sundarbans.' },
    category: 'wildlife',
    type: 'photo',
    mediaUrl: heroEgretImg,
    credit: 'Sundarban Vromon Wildlife',
  },

  // =========================================================================
  // ২. ম্যানগ্রোভ, ক্যানোপি ও ওয়াচ টাওয়ার (MANGROVE)
  // =========================================================================
  {
    id: 'g1',
    title: { bn: 'সুন্দরবনের জীবন্ত শ্বাসমূল ও ম্যানগ্রোভ অরণ্য', en: 'Mangrove Pneumatophores & Tidal Roots' },
    caption: { bn: 'ভাটার সময় জেগে ওঠা কাদামাটিতে সুন্দরী ও গরান গাছের অসংখ্য শ্বাসমূল।', en: 'Dense pneumatophore breathing roots exposed along the tidal mangrove floor.' },
    category: 'mangrove',
    type: 'photo',
    mediaUrl: galleryImg1,
    credit: 'Sundarban Vromon Field Expedition',
  },
  {
    id: 'g2',
    title: { bn: 'দোবাঁকি ঝুলন্ত ক্যানোপি ওয়াকওয়ে', en: 'Dobanki Canopy Walkway' },
    caption: { bn: 'মাটির ওপরে ২০ ফুট উঁচুতে নির্মিত ৪০০ মিটারের সুরক্ষিত খাঁচাবিশিষ্ট পথ।', en: '400m elevated wire-meshed walkway suspended above the tidal swamp.' },
    category: 'mangrove',
    type: 'photo',
    mediaUrl: galleryImg2,
    credit: 'Sundarban Vromon Archive',
  },
  {
    id: 'g-mangrove-real',
    title: { bn: 'ম্যানগ্রোভ অরণ্য ও শান্ত সবুজ খাঁড়ি', en: 'Entering the Dense Mangrove Maze' },
    caption: { bn: 'সুন্দরী, গরান ও কেওড়া গাছের ঘন সবুজ প্রাচীর ঘেরা সুন্দরবনের শান্ত খাল।', en: 'Lush Sundari, Garjan, and Keora mangrove walls lining serene sanctuary creeks.' },
    category: 'mangrove',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795109867/mangrove-3.jpg_2K_20260910162912.jpg',
    credit: 'Sundarban Vromon Official',
  },
  {
    id: 'g-mudflat-real',
    title: { bn: 'কাদামাটি, শ্বাসমূল ও ভাটার জাদু', en: 'Low Tide Mudflats & Breathing Roots' },
    caption: { bn: 'ভাটার সময় জেগে ওঠা পলিমাটির চর, অসংখ্য শ্বাসমূল ও সুন্দরবনের প্রকৃতি।', en: 'Exposed tidal silt banks and dense pneumatophore breathing roots during low tide.' },
    category: 'mangrove',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795111153/ChatGPT_Image_Sep_16_2026_01_25_30_AM.png',
    credit: 'Sundarban Vromon Official',
  },
  {
    id: 'g-sudhanyakhali-real',
    title: { bn: 'সুধন্যখালি ওয়াচ টাওয়ার কমপ্লেক্স', en: 'Sudhanyakhali Watch Tower Complex' },
    caption: { bn: 'সুন্দরবন টাইগার রিজার্ভের অন্যতম জনপ্রিয় সংরক্ষিত ওয়াচ টাওয়ার প্রাঙ্গণ।', en: 'Protected forest observation tower at Sudhanyakhali inside Sundarban Tiger Reserve.' },
    category: 'mangrove',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795113171/Sudhanyakhali-Watch-Tower-Pic-2.jpg',
    credit: 'Sundarban Vromon Official',
  },
  {
    id: 'g-dobanki-real',
    title: { bn: 'দোবাঁকি ওয়াচ টাওয়ার ও ঝুলন্ত ক্যানোপি ওয়াকওয়ে', en: 'Dobanki Watch Tower & Canopy Walk' },
    caption: { bn: 'মাটির বহু উঁচুতে তারের খাঁচায় সুরক্ষিত ঝুলন্ত পথে ম্যানগ্রোভ অরণ্যের দৃশ্য।', en: 'Elevated 400-meter mesh canopy boardwalk winding through dense mangrove crowns.' },
    category: 'mangrove',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112372/DOBANKI_WATCH_TOWER.webp',
    credit: 'Sundarban Vromon Official',
  },
  {
    id: 'g-hero-pneumatophores',
    title: { bn: 'সুন্দরী ও গরান গাছের জীবন্ত শ্বাসমূল', en: 'Sundari & Garjan Pneumatophore Roots' },
    caption: { bn: 'সুন্দরবনের ম্যানগ্রোভ অরণ্যের অনন্য শ্বাসমূল ও প্রাকৃতিক বাস্তুতন্ত্র।', en: 'Intricate breathing root carpets of the Sundarbans tidal mangrove ecosystem.' },
    category: 'mangrove',
    type: 'photo',
    mediaUrl: heroPneumatophoresImg,
    credit: 'Sundarban Vromon Field Expedition',
  },
  {
    id: 'g-dest-sajnekhali',
    title: { bn: 'সজনেখালি বন্যপ্রাণী অভয়ারণ্য প্রবেশদ্বার', en: 'Sajnekhali Wildlife Sanctuary Gate' },
    caption: { bn: 'সুন্দরবন টাইগার রিজার্ভের প্রধান প্রবেশদ্বার, মিউজিয়াম ও ওয়াচ টাওয়ার।', en: 'Premier gateway to Sundarban Tiger Reserve with Mangrove Interpretation Centre.' },
    category: 'mangrove',
    type: 'photo',
    mediaUrl: sajnekhaliDestImg,
    credit: 'Sundarban Vromon Destinations',
  },
  {
    id: 'g-dest-sudhanyakhali',
    title: { bn: 'সুধন্যখালি ক্যাম্প ও ওয়াচ টাওয়ার প্রবেশদ্বার', en: 'Sudhanyakhali Camp & Watch Tower Gate' },
    caption: { bn: 'সুন্দরবনের সংরক্ষিত সুধন্যখালি ফরেস্ট ক্যাম্প ও পর্যবেক্ষণ কেন্দ্র।', en: 'Famous forest camp gateway leading to Sudhanyakhali watch tower.' },
    category: 'mangrove',
    type: 'photo',
    mediaUrl: sudhanyakhaliDestImg,
    credit: 'Sundarban Vromon Destinations',
  },
  {
    id: 'g-dest-dobanki',
    title: { bn: 'দোবাঁকি ক্যানোপি ওয়াকওয়ে ও বনপথ', en: 'Dobanki Canopy Boardwalk Trail' },
    caption: { bn: 'গাছের ডালপালার ওপর দিয়ে নিরাপদ তারের বেষ্টনীযুক্ত ঝুলন্ত ক্যানোপি ব্রিজ।', en: 'Walk twenty feet above the mangrove swamp along the secured canopy bridge.' },
    category: 'mangrove',
    type: 'photo',
    mediaUrl: dobankiDestImg,
    credit: 'Sundarban Vromon Destinations',
  },
  {
    id: 'g-dest-gazikhali',
    title: { bn: 'গাজিখালি খাঁড়ি ও গহন ম্যানগ্রোভ', en: 'Gazikhali Creek & Deep Mangroves' },
    caption: { bn: 'গভীর অরণ্যের ভেতর দিয়ে বয়ে চলা সুন্দরবনের অন্যতম রোমাঞ্চকর খাঁড়ি।', en: 'Untouched winding tidal creek surrounded by dense Sundari and Gewa forest.' },
    category: 'mangrove',
    type: 'photo',
    mediaUrl: gazikhaliDestImg,
    credit: 'Sundarban Vromon Destinations',
  },
  {
    id: 'g-showcase-mangrove',
    title: { bn: 'সুন্দরবনের জীবন্ত শ্বাসমূল ও ম্যানগ্রোভ খাঁড়ি ২০২৬', en: 'Pristine Sundarban Mangroves & Tidal Creeks' },
    caption: { bn: 'প্রকৃতির আরও কাছে — সুন্দরবনের গভীর খাঁড়ির অপরূপ শোভা।', en: 'Closer to Nature — Deeper into Sundarbans emerald waterways.' },
    category: 'mangrove',
    type: 'photo',
    mediaUrl: showcaseMangroveImg,
    credit: 'Sundarban Vromon Showcase',
  },

  // =========================================================================
  // ৩. সাফারি বোট (BOAT)
  // =========================================================================
  {
    id: 'g-godkhali-real',
    title: { bn: 'গদখালি ফেরি ঘাট ও সাফারি বোট যাত্রা', en: 'Godkhali Ferry Ghat & Safari Boat Departure' },
    caption: { bn: 'গদখালি ঘাট থেকে সারি সারি কাঠের পর্যটক বোটে সুন্দরবন ভ্রমণের যাত্রা সূচনা।', en: 'Traditional wooden tourist cruisers casting off from Godkhali Jetty into the Sundarbans.' },
    category: 'boat',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795110990/ChatGPT_Image_Sep_10_2026_03_59_04_PM.png',
    credit: 'Sundarban Vromon Official',
  },
  {
    id: 'g-cld-safari-cruisers',
    title: { bn: 'সুন্দরবন সাফারি ট্যুরিস্ট বোট ও ম্যানগ্রোভ নদীপথ', en: 'Sundarban Tourist Safari Cruisers Along Mangroves' },
    caption: { bn: 'সবুজ ম্যানগ্রোভ অরণ্যের পাশ দিয়ে ভেসে চলা আমাদের অনুমোদিত সাফারি বোট।', en: 'Traditional double-deck Sundarban safari cruisers gliding across calm mangrove waterways.' },
    category: 'boat',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112374/images_2.jpg',
    credit: 'Sundarban Vromon Fleet',
  },
  {
    id: 'g-pirkhali-boat-real',
    title: { bn: 'পীরখালির নিঃশব্দ খাঁড়িতে বোট ড্রাফট', en: 'Silent Boat Drift in Pirkhali Creek' },
    caption: { bn: 'ইঞ্জিন বন্ধ করে সরু খালে নিঃশব্দে ভেসে চলা ও সুন্দরবনের গভীর অরণ্য দর্শন।', en: 'Gliding silently beneath touching mangrove branches in Pirkhali narrow creek.' },
    category: 'boat',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795113171/images.jpg',
    credit: 'Sundarban Vromon Official',
  },
  {
    id: 'g-cld-godkhali-ghat',
    title: { bn: 'গদখালি ফেরি ঘাট, দক্ষিণ ২৪ পরগনা', en: 'Godkhali Ferry Ghat, South 24 Parganas' },
    caption: { bn: 'সুন্দরবন প্রবেশের প্রধান ঘাট গদখালি ফেরি ঘাট ও নদীপথ।', en: 'Busy riverside jetty at Godkhali Ferry Ghat where Sundarban safaris begin.' },
    category: 'boat',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112373/Ferry_ghat_at_Godkhali_in_South_24_Parganas_08.jpg',
    credit: 'Sundarban Vromon Official',
  },
  {
    id: 'g-safari-boat',
    title: { bn: 'সুন্দরবন সাফারি বোট ও অভিজ্ঞ বোট ক্রু', en: 'Sundarban Safari Cruiser & Crew' },
    caption: { bn: 'নদী থেকে নিস্তব্ধ খাঁড়ির যাত্রায় আমাদের নিজস্ব সাফারি বোট ও গাইড দল।', en: 'Our dedicated Sundarban river cruiser manned by veteran Gosaba guides and sailors.' },
    category: 'boat',
    type: 'photo',
    mediaUrl: safariBoatImg,
    credit: 'Sundarban Vromon Fleet',
  },
  {
    id: 'g-pkg-classic',
    title: { bn: '১ রাত ২ দিন ক্লাসিক সুন্দরবন ট্যুর', en: '1N / 2D Classic Sundarban Tour' },
    caption: { bn: 'রিসোর্ট স্টে, বোট সাফারি ও খাঁটি বাঙালি খাবারসহ জনপ্রিয় ২ দিনের ট্যুর।', en: 'Classic overnight mangrove safari combining creek cruises and island eco-resort stay.' },
    category: 'boat',
    type: 'photo',
    mediaUrl: classicPkgImg,
    credit: 'Sundarban Vromon Packages',
  },
  {
    id: 'g-pkg-deluxe',
    title: { bn: '২ রাত ৩ দিন ডিলাক্স সুন্দরবন সাফারি', en: '2N / 3D Deluxe Sundarban Expedition' },
    caption: { bn: 'সজনেখালি, সুধন্যখালি, দোবাঁকি ও পঞ্চমুখী মোহনাসহ সম্পূর্ণ ৩ দিনের ভ্রমণ।', en: 'Flagship three-day Sundarban expedition covering major watchtowers and deep creeks.' },
    category: 'boat',
    type: 'photo',
    mediaUrl: deluxePkgImg,
    credit: 'Sundarban Vromon Packages',
  },
  {
    id: 'g-packing-guide',
    title: { bn: 'সুন্দরবন সাফারি প্রস্তুতি ও ভ্রমণসামগ্রী', en: 'Sundarban Safari Gear & Travel Kit' },
    caption: { bn: 'নিরাপদ ও আরামদায়ক বোট সাফারির জন্য প্রয়োজনীয় ক্যামেরা, দূরবীন ও প্যাকিং গাইড।', en: 'Essential safari equipment and checklist for a smooth mangrove river expedition.' },
    category: 'boat',
    type: 'photo',
    mediaUrl: packingGuideImg,
    credit: 'Sundarban Vromon Travel Guide',
  },

  // =========================================================================
  // ৪. নদী ও সূর্যাস্ত (RIVER)
  // =========================================================================
  {
    id: 'g-matla-real',
    title: { bn: 'উত্তাল মাতলা ও বিদ্যাধরী নদীর বিস্তার', en: 'Matla & Bidyadhari Estuary Cruise' },
    caption: { bn: 'দিগন্তবিস্তৃত মাতলা ও বিদ্যাধরী নদীর স্রোত ও মুক্ত আকাশের অপরূপ দৃশ্য।', en: 'Sweeping tidal currents across the vast Matla and Bidyadhari river confluence.' },
    category: 'river',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1790276194/ChatGPT_Image_Sep_10_2026_04_00_50_PM.png',
    credit: 'Sundarban Vromon Official',
  },
  {
    id: 'g-cld-fishermen-boat',
    title: { bn: 'ভোরের কুয়াশায় সুন্দরবনের জেলেদের ডিঙি নৌকা', en: 'Local Sundarban Fishermen Rowing in Morning Mist' },
    caption: { bn: 'নদীর শান্ত জলে বৈঠা বেয়ে চলা সুন্দরবনের স্থানীয় জেলেদের ঐতিহ্যবাহী নৌকা।', en: 'Traditional wooden fishing boat navigating misty mangrove banks during low tide.' },
    category: 'river',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112376/local-fisherman-rafting-boat-sundarban-national-park.webp',
    credit: 'Sundarban Vromon Life',
  },
  {
    id: 'g-cld-island-boats',
    title: { bn: 'সুন্দরবনের গ্রামীণ নদী ও ঐতিহ্যবাহী ডিঙি নৌকা', en: 'Rural Sundarban Island Shore & Country Boats' },
    caption: { bn: 'নারকেল গাছ ঘেরা গোসাবা ও সুন্দরবন দ্বীপের নদীতীরে সারি সারি স্থানীয় নৌকা।', en: 'Authentic delta village shoreline framed by coconut palms and country wooden boats.' },
    category: 'river',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112374/images_6.jpg',
    credit: 'Sundarban Vromon Delta',
  },
  {
    id: 'g-dest-panchamukhi',
    title: { bn: 'পঞ্চমুখী পাঁচ নদীর মোহনায় সূর্যাস্ত', en: 'Panchamukhi Five-River Confluence Sunset' },
    caption: { bn: 'পাঁচটি প্রধান নদীর মিলনস্থলে অস্তগামী সূর্যের সোনালি ও রক্তিম আভা।', en: 'Golden hour reflections across the sweeping junction of five tidal rivers.' },
    category: 'river',
    type: 'photo',
    mediaUrl: panchamukhiDestImg,
    credit: 'Sundarban Vromon Destinations',
  },
  {
    id: 'g-dest-pirkhali',
    title: { bn: 'পীরখালি সরু খাঁড়ি ও শান্ত নদীপথ', en: 'Pirkhali Narrow Mangrove Creek' },
    caption: { bn: 'দুই তীরে ঘন সবুজ সুন্দরী গাছের ছায়ায় শান্ত জলে নৌকাভ্রমণ।', en: 'Serene mangrove canal renowned for tranquil waters and overhanging mangrove branches.' },
    category: 'river',
    type: 'photo',
    mediaUrl: pirkhaliDestImg,
    credit: 'Sundarban Vromon Destinations',
  },
  {
    id: 'g-tide-guide',
    title: { bn: 'সুন্দরবনের জোয়ার-ভাটা ও খাঁড়ির ছন্দ', en: 'Sundarban Tides & Mangrove Channels' },
    caption: { bn: 'জোয়ার ও ভাটার পরিবর্তনে সুন্দরবনের নদী ও ম্যানগ্রোভ অরণ্যের অনন্য রূপ।', en: 'Dynamic tidal waters reshaping the Sundarban riverbanks twice every day.' },
    category: 'river',
    type: 'photo',
    mediaUrl: tideGuideImg,
    credit: 'Sundarban Vromon Travel Guide',
  },
  {
    id: 'g3',
    title: { bn: 'পঞ্চমুখী মোহনায় রক্তিম সূর্যাস্ত', en: 'Sunset over Panchamukhi Five-River Confluence' },
    caption: { bn: 'পাঁচটি প্রধান নদীর মিলনস্থলে আকাশ ও জলের সোনালি রূপ।', en: 'The breathtaking amber expanse where five major tidal channels meet.' },
    category: 'river',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    credit: 'Sundarban Vromon Boat Crew',
  },

  // =========================================================================
  // ৫. বাউল ও লোকনৃত্য (CULTURE)
  // =========================================================================
  {
    id: 'g-pakhiralay-baul-real',
    title: { bn: 'পাখিরালয় রিসোর্টে সন্ধ্যা ও বাউল গানের রাত', en: 'Evening Baul Folk Music Night at Pakhiralay' },
    caption: { bn: 'নদীর সফর শেষে পাখিরালয়ে বাউলের একতারা, বনবিবির গান ও গ্রামীণ সংস্কৃতি।', en: 'Soulful acoustic Baul melodies and traditional delta folklore under starry island skies.' },
    category: 'culture',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795113789/22.jpg',
    credit: 'Sundarban Vromon Official',
  },
  {
    id: 'g-cld-jhumur-dance-1',
    title: { bn: 'আদিবাসী ঝুমুর লোকনৃত্য — সুন্দরবনের সাংস্কৃতিক ঐতিহ্য', en: 'Tribal Jhumur Folk Dance — Sundarban Cultural Heritage' },
    caption: { bn: 'লাল পাড় সাদা শাড়িতে সুন্দরবনের ঐতিহ্যবাহী আদিবাসী ঝুমুর নৃত্যের মনোরম দৃশ্য।', en: 'Traditional tribal Jhumur folk dancers in festive red-and-white sarees performing in circle.' },
    category: 'culture',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795113790/24.jpg',
    credit: 'Sundarban Cultural Troupe',
  },
  {
    id: 'g-cld-jhumur-dance-2',
    title: { bn: 'পাখিরালয়ে ঐতিহ্যবাহী ঝুমুর নৃত্য পরিবেশনা', en: 'Traditional Jhumur Dance Performance at Pakhiralay' },
    caption: { bn: 'ভ্রমণকারীদের স্বাগত জানাতে সুন্দরবনের নিজস্ব লোকনৃত্য ও গ্রামীণ সংস্কৃতি।', en: 'Vibrant rhythmic Jhumur folk dance celebrating Sundarban island heritage.' },
    category: 'culture',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795113790/25.webp',
    credit: 'Sundarban Cultural Troupe',
  },
  {
    id: 'g-cld-jhumur-evening',
    title: { bn: 'সন্ধ্যার সাংস্কৃতিক অনুষ্ঠান — ঝুমুর ও লোকনৃত্যের আসর', en: 'Evening Resort Cultural Show — Jhumur Folk Dance' },
    caption: { bn: 'সাফারি শেষে রিসোর্টে সন্ধ্যার বিশেষ সাংস্কৃতিক লোকনৃত্য অনুষ্ঠান।', en: 'Live evening cultural folk dance recital hosted for Sundarban Vromon guests.' },
    category: 'culture',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795113790/23.jpg',
    credit: 'Sundarban Cultural Troupe',
  },

  // =========================================================================
  // ৬. বাঙালি খাবার (FOOD)
  // =========================================================================
  {
    id: 'g-food-bhapa-ilish',
    title: { bn: 'বোটে তৈরি সর্ষে-ভাপা ইলিশ ও বাঙালি ভোজ', en: 'Fresh Boat-Cooked Bhapa Ilish & Bengali Feast' },
    caption: { bn: 'নদীর টাটকা ইলিশ, খাঁটি সরষের তেল ও গরম ভাতের রাজকীয় বাঙালি খাবার।', en: 'Authentic steamed Hilsa in mustard gravy freshly prepared in our boat kitchen.' },
    category: 'food',
    type: 'photo',
    mediaUrl: bhapaIlishImg,
    credit: 'Master Chef Sundarban Vromon',
  },
  {
    id: 'g6',
    title: { bn: 'ঐতিহ্যবাহী গলদা চিংড়ির মালাইকারি ও বাঙালি ভোজ', en: 'Fresh Golda Chingri Malaikari Banquet' },
    caption: { bn: 'বোটে প্রস্তুত নারকেলের দুধের সুস্বাদু গলদা চিংড়ির মালাইকারি।', en: 'Piping hot jumbo river prawns prepared fresh in sweet coconut cream.' },
    category: 'food',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80',
    credit: 'Master Chef Sundarban Vromon',
  },

  // =========================================================================
  // ৭. গোসাবা হেরিটেজ (HERITAGE)
  // =========================================================================
  {
    id: 'g-heritage-hamilton',
    title: { bn: 'রবীন্দ্রনাথ ঠাকুর ও স্যার ড্যানিয়েল হ্যামিল্টন বাংলো, গোসাবা', en: 'Rabindranath Tagore & Hamilton Heritage Bungalow, Gosaba' },
    caption: { bn: '১৯৩২ সালে রবীন্দ্রনাথ ঠাকুরের ঐতিহাসিক গোসাবা সফর ও কাঠের হ্যামিল্টন বাংলো।', en: 'Historic Gosaba Island timber bungalow commemorating Tagore’s 1932 visit and Hamilton’s legacy.' },
    category: 'heritage',
    type: 'photo',
    mediaUrl: hamiltonEstateImg,
    credit: 'Sundarban Vromon Heritage Archive',
  },
  {
    id: 'g-cld-gosaba-welcome',
    title: { bn: 'স্বাগতম গোসাবা ব্লক — সুন্দরবনের প্রবেশদ্বার', en: 'Welcome to Gosaba Block — Sundarban Gateway' },
    caption: { bn: 'সুন্দরবনের অন্যতম ঐতিহাসিক জনপদ ও পর্যটন কেন্দ্র গোসাবা ব্লক।', en: 'Iconic Welcome Gosaba Block landmark at the heart of Sundarban tourism.' },
    category: 'heritage',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112375/img5.webp',
    credit: 'Sundarban Vromon Official',
  },
  {
    id: 'g-cld-gosaba-island',
    title: { bn: 'গোসাবা দ্বীপ ও স্থানীয় পরিচিতি', en: 'Gosaba Island & Local Landmark' },
    caption: { bn: 'সুন্দরবনের প্রাণকেন্দ্র গোসাবা দ্বীপ ও ঐতিহাসিক জনপদ।', en: 'A glimpse of Gosaba Island, the historic gateway to the Sundarbans.' },
    category: 'heritage',
    type: 'photo',
    mediaUrl: 'https://res.cloudinary.com/v6celbjp/image/upload/v1795112374/Gosaba_Police_Station.jpg',
    credit: 'Sundarban Vromon Official',
  },
  {
    id: 'g-founder-srikrishna',
    title: { bn: 'প্রতিষ্ঠাতা ও স্বত্বাধিকারী — শ্রীকৃষ্ণ বার', en: 'Founder & Owner — Srikrishna Bar' },
    caption: { bn: '২০১৯ সাল থেকে গোসাবাভিত্তিক নির্ভরযোগ্য সুন্দরবন ভ্রমণ পরিচালনার কারিগর।', en: 'Founder of Sundarban Vromon, hosting safe and authentic Gosaba expeditions since 2019.' },
    category: 'heritage',
    type: 'photo',
    mediaUrl: founderOwnerImg,
    credit: 'Sundarban Vromon Official',
  },
];
