export const BRAND_INFO = {
  nameEn: "Sundarban Vromon",
  nameBn: "সুন্দরবন ভ্রমণ",
  taglineBn: "ম্যানগ্রোভের হৃদয়ে আপনার নির্ভরযোগ্য সঙ্গী",
  taglineEn: "Your Trusted Companion in the Heart of the Mangroves",
  startYear: 2019,
  getExperienceYears: () => {
    const currentYear = new Date().getFullYear();
    const diff = Math.max(1, currentYear - 2019);
    return diff;
  },
  phone: "+91 90024 13094",
  phoneRaw: "+919002413094",
  whatsapp: "+91 90024 13094",
  whatsappDisplay: "+91 90024 13094",
  whatsappRaw: "919002413094",
  email: "sundarbon.vromon.official@gmail.com",
  locations: {
    kolkataOffice: "Indian Museum / Science City Pickup Desk, Kolkata, West Bengal 700016",
    godkhaliDesk: "Godkhali Ferry Ghat Jetty No. 1, Canning Subdivision, South 24 Parganas, WB 743370",
    gosabaHQ: "Gosaba Main Market Road, Gosaba Island, South 24 Parganas, WB 743370"
  },
  addressBn: "গোসাবা, সুন্দরবন, দক্ষিণ ২৪ পরগনা, পশ্চিমবঙ্গ, ভারত — পিন ৭৪৩৩৭০",
  addressEn: "Gosaba, Sundarban, South 24 Parganas, West Bengal, India — PIN 743370",
  pickupPointsBn: ["কলকাতা (ভারতীয় যাদুঘর/সায়েন্স সিটি)", "ক্যানিং স্টেশন", "গদখালি ফেরি ঘাট", "ধামাখালি ঘাট"],
  pickupPointsEn: ["Kolkata (Indian Museum / Science City)", "Canning Railway Station", "Godkhali Ferry Ghat", "Dhamakhali Ghat"],
  socials: {
    facebook: "https://www.facebook.com/Sundarban.Vromon/",
    instagram: "https://instagram.com/sundarbanvromon",
    youtube: "https://www.youtube.com/@SundarbanVromonOfficial"
  },
  disclaimerBn: "Sundarban Vromon কোনো সরকারি প্রতিষ্ঠান নয়; বন দপ্তরের নিয়ম, অনুমতি ও আবহাওয়া উপলভ্যতার ভিত্তিতে দায়িত্বশীলতার সাথে ভ্রমণ পরিচালিত হয়।",
  disclaimerEn: "Sundarban Vromon is a private eco-tourism agency; tours are conducted in compliance with Forest Department permits, safety regulations, and weather conditions.",
  wildlifeDisclaimerBn: "বন্যপ্রাণী (রয়্যাল বেঙ্গল টাইগার, হরিণ, কুমির ইত্যাদি) দর্শন সম্পূর্ণ প্রাকৃতিক ও ভাগ্যের ওপর নির্ভরশীল। কোনো দৃশ্যমানতার নিশ্চয়তা দেওয়া হয় না।",
  wildlifeDisclaimerEn: "Wildlife sightings (Royal Bengal Tiger, Spotted Deer, Crocodiles) are completely natural and subject to chance and tides. Sightings are never guaranteed.",
  founder: {
    nameBn: "সুন্দরবন ভ্রমণ কর্ণধার ও প্রতিষ্ঠাতা",
    nameEn: "Founder & Owner, Sundarban Vromon",
    titleBn: "কোম্পানি প্রতিষ্ঠাতা ও প্রধান ভ্রমণ পরিচালক",
    titleEn: "Company Founder & Lead Expedition Host",
    roleBn: "সুন্দরবন ভ্রমণ-এর প্রতিষ্ঠাতা ও ভ্রমণ আয়োজক (২০১৯ থেকে)",
    roleEn: "Creator & Owner of Sundarban Vromon (Since 2019)",
    photo: "/DSC_0390.JPG",
    locationBn: "গোসাবা, দক্ষিণ ২৪ পরগনা",
    locationEn: "Gosaba, South 24 Parganas, WB",
    quoteBn: "সুন্দরবনের প্রকৃতি ও মানুষের প্রতি ভালোবাসা থেকেই ২০১৯ সালে পর্যটকদের নিয়ে ভ্রমণ আয়োজন শুরু করি। আমার লক্ষ্য শুধু ট্যুর প্যাকেজ বিক্রি করা নয়—প্রতিটি অতিথি যেন সুন্দরবনের প্রকৃতি, ইতিহাস ও সংস্কৃতিকে কাছ থেকে জানতে পারেন এবং আনন্দময় স্মৃতি নিয়ে নিরাপদে বাড়ি ফিরে যান।",
    quoteEn: "Driven by a deep passion for the Sundarbans and its people, I started hosting travelers in 2019. My goal is to ensure every guest intimately experiences the authentic mangrove wilderness and returns home safely with joyful memories."
  }
};
