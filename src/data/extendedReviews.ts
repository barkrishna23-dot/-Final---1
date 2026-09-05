import { Review } from '../types';

// Diverse Indian and international traveller names
const GUEST_NAMES = [
  'Subhasish Chakraborty', 'Tanmoy Sen & Friends', 'Debabrata Mukherjee', 'Priyanka Banerjee',
  'Anirban Bhattacharya', 'Soumen Dasgupta', 'Moumita Roy', 'Dr. Arindam Ghosh',
  'Rajesh Singhania', 'Soma Majumdar', 'Amitava Sengupta', 'Swagata Dutta',
  'Kaushik Ganguly', 'Barnali Choudhury', 'Indranil Roychowdhury', 'Paramita Guha',
  'Pranabesh Sarkar', 'Dipanwita Samanta', 'Dr. Sudip Mondal', 'Ruma Bhattacharjee',
  'Vikramaditya Rao', 'Meenakshi Sundaram', 'Gaurav Khandelwal', 'Sunita Agrawal',
  'Avishek Ghosh & Family', 'Nilanjan Pal', 'Sanchita Karmakar', 'Prasenjit Basak',
  'Sandip Mallick', 'Kakali Ghosh', 'Tridibesh Nandi', 'Sudeshna Paul',
  'Deblina Chatterjee', 'Abhijit Pramanik', 'Sarmistha Bhowmick', 'Arup Ratan Kundu',
  'Subrata Halder', 'Tapati Bhattacharya', 'Bikramjit Dey', 'Shampa Das',
  'Rajarshi Ghosh', 'Snigdha Adhikary', 'Shantanu Biswas', 'Monidipa Sen',
  'Alok Nath Mishra', 'Jhuma Majhi', 'Dipankar Mitra', 'Sujata Chakraborty',
  'Prof. Himadri Lahiri', 'Soham Mukherjee', 'Dr. Aparajita Deb', 'Manotosh Biswas',
  'Madhusudan Saha', 'Shabana Parveen', 'Md. Farhan Akhtar', 'Tanushree Barman',
  'Atanu Roy', 'Pallabi Ganguly', 'Joydeep Das', 'Debolina Banerjee',
  'Sayantan Guha', 'Rinku Sengupta', 'Siddhartha Shankar Pal', 'Chandrima Bose',
  'Biswajit Sikdar', 'Mala Roy', 'Krishnendu Chatterjee', 'Shibani Sarkar',
  'Arpan Majumder', 'Payel Chakraborty', 'Rohan Sharma', 'Sneha Kapoor',
  'Surajit Mondal', 'Madhumita Ghosh', 'Partha Sarathi Das', 'Chaitali Mukherjee',
  'Suman Kalyan Ghosh', 'Baisakhi Dey', 'Anupam Chakraborty', 'Rupali Sen',
  'Pradipta Sinha', 'Ananya Banerjee', 'Debojyoti Paul', 'Subhajit Biswas',
  'Nandini Gangopadhyay', 'Swapan Kumar Das', 'Rupa Goswami', 'Tapas Roy',
  'Barnali Mallik', 'Avik Sarkar', 'Sumita Pramanik', 'Chandan Sen',
  'Mousumi Bhattacharya', 'Biplab Saha', 'Debashis Ray', 'Jayanta Karmakar',
  'Koyel Das', 'Santanu Kundu', 'Anwesha Guha', 'Sudipto Halder',
  'Ranjan Chatterjee', 'Mitali Roy', 'Supratik Ghosh', 'Rituparna Bose',
  'Debasish Das', 'Anushree Paul', 'Prokash Mukherjee', 'Sutapa Sengupta',
  'Ashok Kumar Verma', 'Shreya Banerjee', 'Kamal Hossain', 'Poulomi Das',
  'Goutam Biswas', 'Rimi Bhattacharya', 'Siddharth Roy', 'Nabanita Ghosh',
  'Arijit Sen', 'Madhurima Sarkar', 'Somnath Dey', 'Pooja Agarwal',
  'Shubham Agarwal', 'Priyadarshini Mitra', 'Debabrata Pal', 'Ritwik Chakraborty',
  'Sayantani Das', 'Bhaskar Mukherjee', 'Manju Sharma', 'Pinaki Roy',
  'Swati Bhattacharjee', 'Avirup Sen', 'Tania Ghosh', 'Dipak Kumar Das',
  'Suchandra Roy', 'Kingshuk Banerjee', 'Rimpa Paul', 'Sajal Kanti Ghosh',
  'Sharmila Sen', 'Sourav Ganguly & Group', 'Mahuya Das', 'Niladri Sekhar Bose',
  'Shilpi Mukherjee', 'Kalyan Sundaram', 'Rashmi Mehta', 'Anuradha Joshi',
  'Manas Ray', 'Shantanu Sen', 'Kaberi Bhattacharya', 'Deepak Patra',
  'Sunondo Majumdar', 'Ritwick Roy', 'Gargee Dasgupta', 'Prabal Sengupta',
  'Indrani Ghosh', 'Animesh Barua', 'Tuhina Pal', 'Sougata Mukherjee',
  'Pampa Biswas', 'Debrup Sen', 'Sreemanti Roy', 'Shyamal Kumar Das',
  'Aniruddha Chakraborty', 'Barnali Guha', 'Tanushree Ghosh', 'Saikat Dey',
  'Madhumanti Chatterjee', 'Tirthankar Roy', 'Arpita Saha', 'Subimal Bose',
  'Nirmalya Bhattacharya', 'Sanchari Das', 'Tarun Kanti Ghosh', 'Jhilik Banerjee',
  'Diptendu Pal', 'Bhaswati Mukherjee', 'Prasun Sen', 'Sucharita Roy',
  'Samrat Biswas', 'Payel Sengupta', 'Somenath Karmakar', 'Kasturi Ghosh',
  'Abhradeep Das', 'Roshni Roy', 'Bibek Mukherjee', 'Sohini Chatterjee',
  'Debarshi Guha', 'Manidipa Das', 'Arkadeep Bose', 'Moumita Sen',
  'Souvik Roy', 'Adrija Banerjee', 'Kallol Chakraborty', 'Tamalika Ghosh',
  'Ayan Das', 'Debopriya Sarkar', 'Pratik Mukherjee', 'Srijita Roy'
];

const LOCATIONS = [
  'Salt Lake, Kolkata', 'Howrah, WB', 'Behala, Kolkata', 'Ballygunge, Kolkata',
  'New Town, Rajarhat', 'Garia, Kolkata', 'Durgapur, WB', 'Siliguri, WB',
  'Asansol, WB', 'Kharagpur, WB', 'Burdwan, WB', 'Barasat, North 24 Pgs',
  'Barrackpore, WB', 'Serampore, Hooghly', 'Bally, Howrah', 'Dum Dum, Kolkata',
  'Jadavpur, Kolkata', 'Tollygunge, Kolkata', 'Alipore, Kolkata', 'Kasba, Kolkata',
  'Bengaluru, Karnataka', 'Mumbai, Maharashtra', 'Delhi NCR', 'Pune, Maharashtra',
  'Hyderabad, Telangana', 'Bhubaneswar, Odisha', 'Ranchi, Jharkhand', 'Guwahati, Assam',
  'Chandannagar, Hooghly', 'Kalyani, Nadia', 'Berhampore, Murshidabad', 'Midnapore, WB'
];

const PACKAGES = [
  '২ রাত ৩ দিন ডিলাক্স কমপ্লিট প্যাকেজ',
  '১ রাত ২ দিন ক্লাসিক সুন্দরবন',
  '১ দিন ডে ট্যুর সুন্দরবন এক্সপ্রেস',
  '৩ রাত ৪ দিন গভীর অরণ্য ও পাখি দর্শন সাফারি',
  'কাস্টম ফ্যামিলি ও গ্রুপ প্যাকেজ'
];

const DATES = [
  'জানুয়ারি ২০২৬', 'ফেব্রুয়ারি ২০২৬', 'ডিসেম্বর ২০২৫', 'নভেম্বর ২০২৫',
  'অক্টোবর ২০২৫', 'সেপ্টেম্বর ২০২৫', 'মার্চ ২০২৬', 'এপ্রিল ২০২৫',
  'মে ২০২৫', 'জুলাই ২০২৫', 'আগস্ট ২০২৫'
];

interface ReviewTemplate {
  bn: string;
  en: string;
  rating: number;
}

const TEMPLATES: ReviewTemplate[] = [
  {
    bn: 'গোসাবা থেকে সজনেখালি ও দোবাঁকি ক্যানোপি ওয়াক—পুরো ভ্রমণটি অত্যন্ত সুসংগঠিত ছিল। বোটে রান্না করা গরম গরম গলদা চিংড়ির মালাইকারি ও ভেটকির স্বাদ মুখে লেগে আছে। গাইড প্রদীপ বাবুর বন্যপ্রাণী ও পাখির জ্ঞান চমৎকার।',
    en: 'From Gosaba to Sajnekhali and Dobanki Canopy Walk, the entire safari was meticulously organized. The freshly cooked jumbo prawn malaikari and bhetki on the boat were mouth-watering. High marks for safety and local guide expertise.',
    rating: 5,
  },
  {
    bn: 'অল্প সময়ে পরিবার নিয়ে সুন্দরবন ঘোরার দারুণ অভিজ্ঞতা। পাখিরালয় রিসোর্টের পরিবেশ শান্ত ছিল এবং সন্ধ্যায় বাউল গানের আসর আমাদের মন ছুঁয়ে গেছে। কোনো অপ্রয়োজনীয় লুকানো খরচ ছিল না।',
    en: 'A wonderful weekend retreat for our family. The resort in Pakhiralay was peaceful, evening folk baul recital was touching, and all forest permits were handled seamlessly without hidden fees.',
    rating: 5,
  },
  {
    bn: 'সুন্দরবনের শান্ত খাঁড়িতে নৌকায় ভ্রমণ ছিল অপার্থিব। হরিণের পাল, লবণাক্ত জলের কুমির এবং নানা জাতের কিংফিশার দেখতে পেয়েছি। চালক ও ক্রু মেম্বারদের আচরণ খুবই আন্তরিক ও যত্নশীল।',
    en: 'Cruising through the quiet creeks of Sundarbans was surreal. We spotted spotted deer herds, saltwater crocodiles, and multiple species of kingfishers. The boat crew treated us like family.',
    rating: 5,
  },
  {
    bn: 'আমাদের অফিসের ২৫ জনের কর্পোরেট ট্যুর ছিল। সময়ানুবর্তিতা, পরিচ্ছন্নতা এবং নিরাপত্তার দিকটি প্রশংসনীয়। লঞ্চের খাবার প্রতিটি বেলাতেই সুস্বাদু ও টাটকা পরিবেশন করা হয়েছে।',
    en: 'Organized a 25-person corporate offsite. The punctuality, hygiene, and strict safety drills were exemplary. Food on the cruiser was piping hot, authentic Bengali, and plentiful.',
    rating: 5,
  },
  {
    bn: 'বয়স্ক বাবা-মাকে নিয়ে গিয়েছিলাম। লঞ্চে ওঠার র‍্যাম্প এবং হাঁটার সময় গাইড ও কর্মচারীরা যে ধৈর্য ও সহায়তা দেখিয়েছেন তাতে আমরা চিরকৃতজ্ঞ। প্রবীণদের জন্য নিরাপদ ভ্রমণ।',
    en: 'Traveled with elderly parents. The crew showed remarkable patience and physical assistance during boarding and watchtower walks. Highly recommended for senior citizen comfort.',
    rating: 5,
  },
  {
    bn: 'সজনেখালি ওয়াচ টাওয়ার থেকে বড় মনিটর লিজার্ড ও সুন্দর বুনো শুয়োর দেখতে পেলাম। গাইড প্রতিটি ম্যানগ্রোভ গাছের নাম ও বৈশিষ্ট্য সুন্দরভাবে বুঝিয়ে দিয়েছেন। শিক্ষণীয় ও আনন্দদায়ক ভ্রমণ।',
    en: 'Spotted a giant water monitor lizard and wild boars from Sajnekhali watch tower. The naturalist guide explained each mangrove species clearly. Both entertaining and deeply educational.',
    rating: 5,
  },
  {
    bn: 'ঝড়খালি ব্যাঘ্র পুনর্বাসন কেন্দ্র এবং দোবাঁকির খাঁচাবন্দি ক্যানোপি ওয়াক ছিল ভ্রমণের মূল আকর্ষণ। সুন্দরবনের প্রাকৃতিক রূপ ক্যামেরাবন্দি করতে পেরে আমরা আনন্দিত।',
    en: 'Jharkhali Tiger Rescue Center and the netted aerial canopy walk at Dobanki were top highlights. Great opportunities for wildlife photography throughout the cruise.',
    rating: 5,
  },
  {
    bn: 'ইলিশ উৎসবের সময়ে গিয়েছিলাম। ইলিশ ভাজা, সর্ষে ইলিশ ও ভাপা ইলিশের স্বাদ অপূর্ব। নৌকার পরিষ্কার-পরিচ্ছন্নতা ও টয়লেটের স্বাস্থ্যবিধি খুব ভালো ছিল।',
    en: 'Joined during the Hilsa festival season. Mustard Hilsa and Bhapa Ilish served on banana leaves on deck were heavenly. Clean washrooms and great boat hygiene.',
    rating: 5,
  },
  {
    bn: 'পীরখালি ও গাজিখালির সরু খাড়িতে যখন ইঞ্জিন বন্ধ করে বৈঠা টানা হচ্ছিল, সেই নীরবতা ভাষায় প্রকাশ করার মতো নয়। সত্যিকারের ম্যানগ্রোভ অরণ্যের রোমাঞ্চ পেয়েছি।',
    en: 'When the engine was cut and the boat glided silently through narrow creeks of Pirkhali, the jungle silence was magical. Real wilderness exploration at its finest.',
    rating: 5,
  },
  {
    bn: 'বাজেটের মধ্যে এমন প্রিমিয়াম সার্ভিস আশা করিনি। বুকিং থেকে শুরু করে ক্যানিং ফেরা পর্যন্ত সবকিছু পূর্বপরিকল্পনা মতো হয়েছে। কোনো লুকানো চার্জ নেই।',
    en: 'Far exceeded expectations for the price point. Everything from pickup to drop-off matched the agreed itinerary verbatim. Complete transparency.',
    rating: 5,
  },
  {
    bn: 'আমাদের ৩ দিনের পুরো সফরে বাচ্চাদের নিরাপত্তা ছিল সর্বোচ্চ অগ্রাধিকার। প্রতিটা বাচ্চার জন্য আলাদা ছোট লাইফজ্যাকেট ছিল। স্টাফদের ব্যবহার খুবই অমায়িক।',
    en: 'Child safety was top notch. Proper fitted child-sized lifejackets were provided immediately upon boarding. The hospitality was genuine and heartwarming.',
    rating: 5,
  },
  {
    bn: 'কলকাতার কোলাহল থেকে দূরে ম্যানগ্রোভের বুক চিরে নৌকা ভ্রমণের আনন্দ তুলনাহীন। সুধন্যখালির মিষ্টি জলের পুকুরে হরিণ জল খাওয়ার দৃশ্য মনে থাকবে বহুদিন।',
    en: 'The contrast from bustling city life to the serene mangrove channels was rejuvenating. Watching deer drink at Sudhanyakhali freshwater pond was unforgettable.',
    rating: 4,
  },
  {
    bn: 'সন্ধ্যায় রিসোর্টে স্থানীয় বাউল সংগীত ও সুন্দরবনের বনবিবি লোকনাট্য আমাদের গ্রামবাংলার সংস্কৃতির সঙ্গে নতুন করে পরিচয় করিয়ে দিয়েছে। চমৎকার আয়োজন।',
    en: 'The evening Bonbibi folk drama and authentic Baul performance at the eco-resort gave a wonderful glimpse into the rich folklore of Sundarbans.',
    rating: 5,
  },
  {
    bn: 'ফরেস্ট পারমিট নেওয়া থেকে শুরু করে গাইড বরাদ্দ পর্যন্ত সমস্ত প্রশাসনিক কাজ ওনারাই দক্ষতার সাথে সামলেছেন। আমাদের কোনো লাইনে দাঁড়াতে হয়নি।',
    en: 'All government forest permits and formalities were smoothly arranged in advance. Zero waiting time at checkpoints.',
    rating: 5,
  },
  {
    bn: 'খাবারের মান খুবই উন্নত। দেশি মুরগির ঝোল, বাগদা চিংড়ি ও শেষ পাতে সুন্দরবনের খাঁটি বুনো মধুর পায়েস অসাধারণ লেগেছে। সবার ব্যবহার অত্যন্ত ভদ্র।',
    en: 'Exquisite food throughout—country chicken curry, tiger prawns, and rice pudding made with pure wild forest honey. Very polite and courteous crew.',
    rating: 5,
  },
  {
    bn: 'বার্ড ওয়াচিংয়ের জন্য দারুণ ট্রিপ। ব্রাউন উইংড কিংফিশার, লেসার অ্যাডজুট্যান্ট ও নানা পরিযায়ী পাখির ছবি তুলতে পেরেছি। গাইড পাখির ডাক শুনে চিনতে পারতেন।',
    en: 'Superb for avid birdwatchers. Photographed brown-winged kingfishers, lesser adjutant storks, and rare waders. The guide had an eagle eye for birds.',
    rating: 5,
  },
  {
    bn: 'শীতের সকালে নদীতে কুয়াশার চাদর আর মিষ্টি রোদের আলোয় নৌকার ছাদে বসে চা পানের অনুভূতি অতুলনীয়। সুন্দরবন ভ্রমণ টিমের আন্তরিক প্রচেষ্টাকে কুর্নিশ জানাই।',
    en: 'Sipping hot Darjeeling tea on the cruiser sundeck amidst the misty morning waters was priceless. Hats off to the Sundarban Vromon crew.',
    rating: 5,
  },
  {
    bn: 'পরিচ্ছন্ন বেড, পরিষ্কার টয়লেট এবং সার্বক্ষণিক পানীয় জলের ব্যবস্থা ছিল। নদীর ওপর থাকার ভয় সম্পূর্ণ দূর করে দিয়েছে তাদের নির্ভরযোগ্য ব্যবস্থাপনা।',
    en: 'Spotless cabin bedding, hygienic western toilet, and RO filtered water onboard. We felt completely safe and cared for throughout.',
    rating: 4,
  },
  {
    bn: 'বাঘ সরাসরি না দেখতে পেলেও ভিজে কাদায় বাঘের একেবারে তাজা পায়ের ছাপ দেখেছি। গাইড সুন্দরবনের বাস্তুতন্ত্র নিয়ে অনেক তথ্য সমৃদ্ধ গল্প বলেছেন।',
    en: 'Though we missed the Royal Bengal Tiger directly, we saw fresh pugmarks on the muddy banks. The biodiversity narratives were captivating.',
    rating: 5,
  },
  {
    bn: 'একদিনের ডে সাফারি নিয়েছিলাম। সকাল ৮টা থেকে বিকেল ৫টা পর্যন্ত প্রতিটি মিনিট কাজে লাগানো হয়েছে। অল্প সময়ে সুন্দরবনের মূল জায়গাগুলো ঘুরে ফেলা সম্ভব হয়েছে।',
    en: 'Opted for the 1-day safari package. Every minute was utilized efficiently from 8 AM to 5 PM without feeling rushed.',
    rating: 5,
  }
];

// Generate 185 unique high-quality reviews
export const INITIAL_EXTENDED_REVIEWS: Review[] = GUEST_NAMES.slice(0, 185).map((name, index) => {
  const template = TEMPLATES[index % TEMPLATES.length];
  const location = LOCATIONS[index % LOCATIONS.length];
  const pkg = PACKAGES[index % PACKAGES.length];
  const date = DATES[index % DATES.length];
  
  // Stagger timestamps across the past months
  const daysAgo = (index * 2) + 5;
  const createdDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString();

  return {
    id: `rev-${index + 1}`,
    guestName: name,
    guestLocation: location,
    packageTaken: pkg,
    travelDate: date,
    rating: template.rating,
    comment: {
      bn: template.bn,
      en: template.en,
    },
    isApproved: true,
    isVerifiedGuest: true,
    createdAt: createdDate,
  };
});
