import React, { useState } from 'react';
import { FOOD_MENU_ITEMS } from '../data/foodMenu';
import { useLanguage } from '../context/LanguageContext';
import { Utensils, Sparkles, ShieldCheck, Heart, Coffee, Moon, Sun, ArrowRight } from 'lucide-react';

interface FoodMenuPageProps {
  onNavigate: (route: string) => void;
}

export const FoodMenuPage: React.FC<FoodMenuPageProps> = ({ onNavigate }) => {
  const { language, isBengali } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = FOOD_MENU_ITEMS.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory || item.mealType === selectedCategory;
  });

  const categories = [
    { id: 'all', label: isBengali ? 'সকল সুস্বাদু পদ' : 'All Dishes' },
    { id: 'seafood', label: isBengali ? 'নদীর মাছ ও সি-ফুড' : 'Fresh River Seafood' },
    { id: 'bengali-classic', label: isBengali ? 'বাঙালি ক্লাসিক' : 'Bengali Classics' },
    { id: 'vegetarian', label: isBengali ? 'নিরামিষ বিশেষ' : 'Pure Veg & Jain' },
    { id: 'seasonal', label: isBengali ? 'ইলিশ ও শীতের গুড়' : 'Hilsa & Nolen Gur' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider bg-amber-100 px-3.5 py-1.5 rounded-full">
          <Utensils className="w-3.5 h-3.5 text-amber-700" />
          <span>{isBengali ? 'সুন্দরবনের খাঁটি বাঙালি ভোজ' : 'Authentic Sundarban Gastronomy'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B]">
          {isBengali ? 'বোটে তৈরি গরম গরম গলদা চিংড়ি, ভেটকি ও ইলিশ' : 'Live Floating Galley & Royal Bengali Feasts'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'আমাদের নিজস্ব বাবুর্চি দ্বারা প্রতিদিন নদী থেকে সংগৃহীত টাটকা মাছ, সুন্দরবনের খাঁটি নারকেল দুধ ও দেশি মশলায় প্রস্তুত ৫-কোর্স বাঙালি খাবার।'
            : 'Prepared fresh inside our vessel galleys: locally harvested jumbo prawns, fresh bhetki fillets, seasonal hilsa, and home-style country chicken.'}
        </p>
      </div>

      {/* 3-Day Safari Meal Timeline Callout */}
      <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
        <div className="border-b border-stone-200 pb-4">
          <h3 className="text-2xl font-bold font-heading text-[#064E3B]">
            {isBengali ? '৩ দিনের সাফারি খাবারের পূর্ণাঙ্গ সময়সূচি' : 'Standard 3-Day Safari Meal Schedule'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {isBengali
              ? 'ভ্রমণের প্রতিটি মুহূর্তে সুস্বাদু ও পুষ্টিকর খাবার পরিবেশিত হয়।'
              : 'Continuous hospitality from morning river mist to star-lit island nights.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Day 1 */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#064E3B] uppercase tracking-wider">
              <Sun className="w-4 h-4 text-amber-500" />
              <span>{isBengali ? '১ম দিন: স্বাগতম ও নদীভোজ' : 'Day 1: River Welcome'}</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-700">
              <li>
                <strong>সকালের নাস্তা:</strong> গরম লুচি, মিষ্টি ছোলার ডাল / আলুর দম, মিষ্টি ও চা।
              </li>
              <li>
                <strong>দুপুরের ভোজ:</strong> ভাত, সোনা মুগ ডাল, ঝুড়ি আলুভাজা, ভেটকি পাতুরি / রুই কালিয়া, গলদা চিংড়ি মালাইকারি, চাটনি ও পাপড়।
              </li>
              <li>
                <strong>সন্ধ্যায়:</strong> গরম চা/কফি, পেঁয়াজি ও মুড়ি মাখা।
              </li>
              <li>
                <strong>রাতের আহার:</strong> ভাত/রুটি, ডাল, দেশি মুরগির কষা ঝোল ও রসগোল্লা।
              </li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#064E3B] uppercase tracking-wider">
              <Sun className="w-4 h-4 text-amber-500" />
              <span>{isBengali ? '২য় দিন: গভীর অরণ্য ও খাঁড়ি ভোজ' : 'Day 2: Deep Creek Safari'}</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-700">
              <li>
                <strong>ভোরের চা:</strong> বিস্কুট সহযোগে সুগন্ধি আদা-চা।
              </li>
              <li>
                <strong>সকালের নাস্তা:</strong> রাধাবল্লভী / পুরী সবজি ও ডিম সিদ্ধ / কলা।
              </li>
              <li>
                <strong>দুপুরের ভোজ:</strong> বোটে রান্না করা খাসির মাংস (Mutton Kasha) অথবা সর্ষে ইলিশ / কাতলা ভাপা, ডাল, সবজি ও মিষ্টি।
              </li>
              <li>
                <strong>সন্ধ্যায়:</strong> ক্রিস্পি চিকেন পকোড়া / ভেজ ফিঙ্গার ও চা।
              </li>
              <li>
                <strong>রাতের আহার:</strong> দেশি কাঁকড়ার কষা ঝাল (Crab Curry) / ফ্রায়েড রাইস ও চিলি চিকেন।
              </li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#064E3B] uppercase tracking-wider">
              <Sun className="w-4 h-4 text-amber-500" />
              <span>{isBengali ? '৩য় দিন: বিদায় সমাপনী ভোজ' : 'Day 3: Farewell Finale'}</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-700">
              <li>
                <strong>সকালের নাস্তা:</strong> কড়াইশুঁটির কচুরি / পরোটা ও কাশ্মীরি আলুর দম।
              </li>
              <li>
                <strong>দুপুরের ভোজ:</strong> ভাত, ডাল, পোস্ত / মোচার ঘণ্ট, পারশে / পাবদা মাছের ঝোল ও পায়েস।
              </li>
              <li>
                <strong>ফিরে আসার পথে:</strong> বিকেলের মিষ্টি ও মসলা চা।
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pure Veg & Allergy Promise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200 space-y-2">
          <div className="flex items-center gap-2 text-emerald-950 font-bold text-base font-heading">
            <Heart className="w-5 h-5 text-emerald-600" />
            <h4>{isBengali ? 'নিরামিষাশী ও জৈন অতিথিদের বিশেষ যত্ন' : 'Dedicated Pure Veg & Jain Preparation'}</h4>
          </div>
          <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
            {isBengali
              ? 'আমাদের বোটে নিরামিষ খাবারের জন্য সম্পূর্ণ পৃথক রান্নার পাত্র ব্যবহার করা হয়। ছানার ডালনা, পনির, ধোঁকার ডালনা এবং জৈন অতিথিদের জন্য পেঁয়াজ-রসুন মুক্ত খাঁটি খাবার পরিবেশন করা হয়।'
              : 'Strictly separated cookware and dedicated prep areas for pure vegetarian and Jain travelers. Enjoy rich paneer, dhokar dalna, chanar kofta, and satvik curries without onion/garlic on request.'}
          </p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 space-y-2">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-base font-heading">
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            <h4>{isBengali ? 'খাদ্য নিরাপত্তা ও বিশুদ্ধ ফিল্টার পানি' : 'Food Hygiene & Pure Mineral Water'}</h4>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            {isBengali
              ? 'রান্না ও পানের জন্য সার্বক্ষণিক সিলড ব্র্যান্ডেড মিনারেল ওয়াটার (Bisleri/Kinley) সরবরাহ করা হয়। সকল শাকসবজি ও মাছ স্বাস্থ্যবিধি মেনে পরিষ্কার করা হয়।'
              : '100% sealed branded packaged mineral water used for both drinking and cooking. Fresh river catch is inspected and cleaned in hygienic conditions daily.'}
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap pb-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#064E3B] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Dishes Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.name.en}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-xs text-white">
                  {item.mealType}
                </span>
                {item.isVegetarian && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white">
                    VEG
                  </span>
                )}
                {item.isSeasonal && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-900">
                    SEASONAL
                  </span>
                )}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 leading-tight">
                  {item.name[language]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  {item.description[language]}
                </p>
              </div>

              {item.allergens && (
                <div className="text-xs text-amber-900 bg-amber-50 p-2 rounded-xl border border-amber-200">
                  <strong>{isBengali ? 'অ্যালার্জি তথ্য:' : 'Allergen note:'}</strong> {item.allergens[language]}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#064E3B] text-white rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold font-heading">
          {isBengali ? 'এই খাবারের সাথে আপনার সুন্দরবন ভ্রমণ উপভোগ করুন' : 'Taste Bengal’s Finest Flavors On Your Next Safari'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
          {isBengali
            ? 'আমাদের সকল প্যাকেজে উল্লিখিত খাবার সম্পূর্ণ বিনামূল্যে অন্তর্ভুক্ত। কোনো লুকানো চার্জ নেই।'
            : 'All standard courses are fully inclusive within our safari packages with zero surcharge.'}
        </p>
        <button
          onClick={() => onNavigate('packages')}
          className="px-8 py-3.5 rounded-full bg-[#F4B942] hover:bg-[#ffcb59] text-[#064E3B] font-bold text-sm shadow-lg transition-all"
        >
          {isBengali ? 'প্যাকেজ বুক করুন' : 'Book a Tour Package'}
        </button>
      </div>
    </div>
  );
};
