import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Image, Filter, X, Sparkles, Camera, Compass } from 'lucide-react';

export const GalleryPhotosPage: React.FC = () => {
  const { language, isBengali } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const categories = [
    { id: 'all', label: isBengali ? 'সকল ছবি' : 'All Photos' },
    { id: 'wildlife', label: isBengali ? 'বন্যপ্রাণী' : 'Wildlife' },
    { id: 'mangrove', label: isBengali ? 'ম্যানগ্রোভ ও ক্যানোপি' : 'Mangroves' },
    { id: 'river', label: isBengali ? 'নদী ও সূর্যাস্ত' : 'Rivers & Sunsets' },
    { id: 'boat', label: isBengali ? 'সাফারি বোট' : 'Cruisers' },
    { id: 'food', label: isBengali ? 'বাঙালি খাবার' : 'Cuisine' },
    { id: 'culture', label: isBengali ? 'বাউল ও লোকনৃত্য' : 'Folk Culture' },
    { id: 'heritage', label: isBengali ? 'গোসাবা হেরিটেজ' : 'Heritage' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-3.5 py-1.5 rounded-full">
          <Camera className="w-3.5 h-3.5 text-emerald-700" />
          <span>{isBengali ? 'মাঠপর্যায়ের ছবির গ্যালারি' : 'Expedition Photo Gallery'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B]">
          {isBengali ? 'সুন্দরবনের রূপ, নদী ও বন্যপ্রাণীর জীবন্ত মুহূর্ত' : 'Photographs of the Great Mangrove Kingdom'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'সুন্দরবন ভ্রমণের জন্য একটি অসাধারণ গন্তব্য, যেখানে ম্যানগ্রোভ অরণ্য এবং বন্যপ্রাণীর এক অন্যরকম অভিজ্ঞতা পাওয়া যায়। ভ্রমণের সময়, ভিডিও এবং ফটোর মাধ্যমে তুলে ধরা হয়েছে।'
            : 'Sundarbans is an extraordinary destination for travel, offering a unique experience of mangrove forests and wildlife. The essence of the journey is captured and presented through authentic videos and photography.'}
        </p>
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

      {/* Gallery Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(item)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 h-64 bg-slate-100"
          >
            <img
              src={item.mediaUrl}
              alt={item.title.en}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-0.5">
                {item.category}
              </span>
              <h4 className="font-bold text-sm leading-snug line-clamp-2">{item.title[language]}</h4>
              <p className="text-[11px] text-slate-300 truncate mt-0.5">{item.caption[language]}</p>
            </div>

            {item.isIllustration && (
              <span className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
                {isBengali ? 'প্রতীকী চিত্র' : 'Concept'}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-[#06241B] rounded-3xl overflow-hidden shadow-2xl border border-emerald-800 text-white">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activePhoto.mediaUrl}
                alt={activePhoto.title.en}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                  {activePhoto.category}
                </span>
                {activePhoto.credit && (
                  <span className="text-xs text-slate-400">
                    {isBengali ? 'ছবি ঋণ:' : 'Credit:'} {activePhoto.credit}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold font-heading text-white">{activePhoto.title[language]}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{activePhoto.caption[language]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
