import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSavedTrip } from '../context/SavedTripContext';
import { TripComposerState } from '../types';
import { BRAND_INFO } from '../data/brandInfo';
import { Sparkles, Calendar, Users, MapPin, Check, Bookmark, MessageCircle, ArrowRight, Printer, Share2, ShieldCheck } from 'lucide-react';

interface PlanTripPageProps {
  onNavigate: (route: string) => void;
}

export const PlanTripPage: React.FC<PlanTripPageProps> = ({ onNavigate }) => {
  const { language, isBengali } = useLanguage();
  const { customTripState, saveCustomTrip } = useSavedTrip();

  const [trip, setTrip] = useState<TripComposerState>(() => {
    return (
      customTripState || {
        days: 2,
        guestsAdults: 2,
        guestsChildren: 0,
        pickupLocation: 'Kolkata (Science City / Indian Museum)',
        roomType: 'ac',
        foodPreference: 'non-veg',
        cameramanAddon: false,
        specialInterests: ['watchtower', 'bengali-food'],
      }
    );
  });

  const [isSavedNotice, setIsSavedNotice] = useState(false);

  // Math for dynamic live pricing
  const calculateQuotation = () => {
    let dayRate = 2200;
    if (trip.days === 1) dayRate = 2499;
    if (trip.days === 2) dayRate = 2000;
    if (trip.days === 3) dayRate = 1850;
    if (trip.days === 4) dayRate = 1999;

    let adultCost = trip.guestsAdults * dayRate * trip.days;
    let childCost = trip.guestsChildren * (dayRate * 0.5) * trip.days;

    let roomModifier = 0;
    if (trip.roomType === 'luxury-suite') roomModifier = 1200 * trip.days;
    if (trip.roomType === 'non-ac') roomModifier = -500 * trip.days;

    let pickupCost = 0;
    if (trip.pickupLocation.includes('Kolkata')) pickupCost = 1200;
    if (trip.pickupLocation.includes('Canning')) pickupCost = 400;

    let cameramanCost = trip.cameramanAddon ? 2500 : 0;

    let total = adultCost + childCost + roomModifier + pickupCost + cameramanCost;

    return {
      adultCost,
      childCost,
      roomModifier,
      pickupCost,
      cameramanCost,
      total: Math.max(total, 2500),
    };
  };

  const quote = calculateQuotation();

  const handleInterestToggle = (key: string) => {
    setTrip(prev => {
      const exists = prev.specialInterests.includes(key);
      return {
        ...prev,
        specialInterests: exists
          ? prev.specialInterests.filter(k => k !== key)
          : [...prev.specialInterests, key],
      };
    });
  };

  const handleSaveToProfile = () => {
    saveCustomTrip(trip);
    setIsSavedNotice(true);
    setTimeout(() => setIsSavedNotice(false), 3000);
  };

  const getWhatsAppShareUrl = () => {
    const text = isBengali
      ? `*আমার সুন্দরবন কাস্টম ট্রিপ কোটেশন*\n\n` +
        `📅 দিন সংখ্যা: ${trip.days} দিন\n` +
        `👥 অতিথি: ${trip.guestsAdults} প্রাপ্তবয়স্ক, ${trip.guestsChildren} শিশু\n` +
        `🚗 পিকআপ: ${trip.pickupLocation}\n` +
        `🏨 রুম: ${trip.roomType.toUpperCase()}\n` +
        `🍱 খাবার: ${trip.foodPreference}\n` +
        `🎯 বিশেষ আকর্ষণ: ${trip.specialInterests.join(', ')}\n` +
        `💰 আনুমানিক মোট বাজেট: ₹${quote.total.toLocaleString('en-IN')}\n\n` +
        `সুন্দরবন ভ্রমণ টিমের সাথে আলোচনা করতে চাই।`
      : `*My Custom Sundarban Safari Quotation*\n\n` +
        `📅 Duration: ${trip.days} Days\n` +
        `👥 Guests: ${trip.guestsAdults} Adults, ${trip.guestsChildren} Children\n` +
        `🚗 Pickup: ${trip.pickupLocation}\n` +
        `🏨 Room: ${trip.roomType.toUpperCase()}\n` +
        `🍱 Food: ${trip.foodPreference}\n` +
        `🎯 Focus: ${trip.specialInterests.join(', ')}\n` +
        `💰 Estimated Total Quote: ₹${quote.total.toLocaleString('en-IN')}\n\n` +
        `Please connect with me to finalize seats & forest clearances.`;

    return `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-[#E6F4EA] px-3.5 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-[#F4B942]" />
          <span>{isBengali ? 'ইন্টারেক্টিভ ট্রিপ কম্পোজার' : 'Interactive Custom Safari Builder'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B]">
          {isBengali ? 'আপনার পছন্দমতো নিজস্ব সুন্দরবন প্যাকেজ তৈরি করুন' : 'Compose Your Tailored Safari & Instant Cost Estimate'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'দিন সংখ্যা, অতিথির সংখ্যা, পিকআপ স্থান ও বিশেষ পছন্দ নির্বাচন করে তাৎক্ষণিক প্রাক্কলন হিসাব করুন।'
            : 'Select your duration, group size, lodging class, and preferences for an upfront budget breakdown.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Cols: Interactive Composer Controls */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
          {/* Step 1: Duration Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-900 font-heading">
                {isBengali ? '১. ভ্রমণের দিন সংখ্যা' : '1. Tour Duration (Days)'}
              </label>
              <span className="text-base font-black font-heading text-[#064E3B] bg-emerald-50 px-3 py-1 rounded-xl">
                {trip.days} {isBengali ? 'দিন' : 'Days'} ({trip.days - 1 > 0 ? `${trip.days - 1} Nights` : 'Day Trip'})
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={4}
              step={1}
              value={trip.days}
              onChange={e => setTrip({ ...trip, days: Number(e.target.value) })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#064E3B]"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-semibold px-1">
              <span>১ দিন (Day Trip)</span>
              <span>১ রাত ২ দিন</span>
              <span>২ রাত ৩ দিন</span>
              <span>৩ রাত ৪ দিন</span>
            </div>
          </div>

          {/* Step 2: Group Size */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <label className="text-sm font-bold text-slate-900 font-heading block">
              {isBengali ? '২. অতিথি সংখ্যা' : '2. Group Size'}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs text-slate-500 block mb-1">
                  {isBengali ? 'প্রাপ্তবয়স্ক (১২+ বছর)' : 'Adults (12+ Years)'}
                </span>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setTrip(p => ({ ...p, guestsAdults: Math.max(1, p.guestsAdults - 1) }))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-base text-slate-900">{trip.guestsAdults}</span>
                  <button
                    onClick={() => setTrip(p => ({ ...p, guestsAdults: p.guestsAdults + 1 }))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs text-slate-500 block mb-1">
                  {isBengali ? 'শিশু (৫-১১ বছর)' : 'Children (5-11 Years)'}
                </span>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setTrip(p => ({ ...p, guestsChildren: Math.max(0, p.guestsChildren - 1) }))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-base text-slate-900">{trip.guestsChildren}</span>
                  <button
                    onClick={() => setTrip(p => ({ ...p, guestsChildren: p.guestsChildren + 1 }))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Pickup Location */}
          <div className="space-y-2 pt-4 border-t border-slate-100">
            <label className="text-sm font-bold text-slate-900 font-heading block">
              {isBengali ? '৩. পিকআপ পয়েন্ট' : '3. Pickup Location'}
            </label>
            <select
              value={trip.pickupLocation}
              onChange={e => setTrip({ ...trip, pickupLocation: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium bg-white"
            >
              <option value="Kolkata (Science City / Indian Museum)">
                {isBengali ? 'কলকাতা (সায়েন্স সিটি / জাদুঘর)' : 'Kolkata (Science City / Museum)'}
              </option>
              <option value="Canning Railway Station">
                {isBengali ? 'ক্যানিং রেলওয়ে স্টেশন' : 'Canning Railway Station'}
              </option>
              <option value="Godkhali Ferry Jetty">
                {isBengali ? 'গদখালি ফেরি ঘাট (সরাসরি বোটে)' : 'Godkhali Ferry Jetty (Direct Boarding)'}
              </option>
            </select>
          </div>

          {/* Step 4: Lodging & Food */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div>
              <label className="text-sm font-bold text-slate-900 font-heading block mb-1">
                {isBengali ? '৪. রুম ক্যাটাগরি' : '4. Room Category'}
              </label>
              <select
                value={trip.roomType}
                onChange={e => setTrip({ ...trip, roomType: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white"
              >
                <option value="ac">{isBengali ? 'এসি ডিলাক্স কটেজ (স্ট্যান্ডার্ড)' : 'AC Deluxe Cottage'}</option>
                <option value="non-ac">{isBengali ? 'নন-এসি বাজেট কটেজ (-ছাড়)' : 'Non-AC Budget (-Discount)'}</option>
                <option value="luxury-suite">{isBengali ? 'লাক্সারি রিভারভিউ স্যুইট (+প्रीमিয়াম)' : 'Luxury Riverview (+Premium)'}</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-900 font-heading block mb-1">
                {isBengali ? '৫. খাবার পছন্দ' : '5. Food Preference'}
              </label>
              <select
                value={trip.foodPreference}
                onChange={e => setTrip({ ...trip, foodPreference: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white"
              >
                <option value="non-veg">{isBengali ? 'বাঙালি নন-ভেজ (চিংড়ি/মাছ/মাংস)' : 'Bengali Non-Veg'}</option>
                <option value="veg">{isBengali ? 'বিশুদ্ধ নিরামিষ (Pure Veg)' : 'Pure Vegetarian'}</option>
                <option value="jain">{isBengali ? 'জৈন নিরামিষ (Jain Cuisine)' : 'Jain (No Root Veg)'}</option>
              </select>
            </div>
          </div>

          {/* Step 5: Special Interests */}
          <div className="space-y-2 pt-4 border-t border-slate-100">
            <label className="text-sm font-bold text-slate-900 font-heading block">
              {isBengali ? '৬. বিশেষ আকর্ষণ ও ফোকাস' : '6. Focus & Special Interests'}
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'watchtower', label: isBengali ? 'ওয়াচ টাওয়ার সাফারি' : 'Watch Towers' },
                { id: 'birding', label: isBengali ? 'পাখি ও বন্যপ্রাণী ছবি' : 'Birding & Photography' },
                { id: 'bengali-food', label: isBengali ? 'ইলিশ ও গলদা চিংড়ি ভোজ' : 'Gourmet Seafood' },
                { id: 'heritage', label: isBengali ? 'গোসাবা ও রবীন্দ্রনাথ হেরিটেজ' : 'Tagore Heritage' },
                { id: 'folk-lore', label: isBengali ? 'সন্ধ্যায় বাউল ও লোকগান' : 'Evening Baul Recitals' },
              ].map(int => {
                const checked = trip.specialInterests.includes(int.id);
                return (
                  <button
                    key={int.id}
                    type="button"
                    onClick={() => handleInterestToggle(int.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      checked
                        ? 'bg-[#064E3B] text-white border-[#064E3B] shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {int.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 6: Cameraman Addon */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <strong className="text-xs sm:text-sm text-slate-900 block font-heading">
                {isBengali ? 'প্রফেশনাল ক্যামেরাম্যান ও ৪কে ভিডিও অ্যাড-অন (+₹২,৫০০)' : 'Professional Camera & 4K Video (+₹2,500)'}
              </strong>
              <span className="text-xs text-slate-500">
                {isBengali ? 'ট্যুরের স্মৃতি হিসেবে এডিটেড হাই-রেজুলিউশন ভিডিও' : 'Includes raw 4K footage and edited highlight reel'}
              </span>
            </div>
            <input
              type="checkbox"
              checked={trip.cameramanAddon}
              onChange={e => setTrip({ ...trip, cameramanAddon: e.target.checked })}
              className="w-5 h-5 rounded text-emerald-600 focus:ring-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Right 5 Cols: Quotation Summary Card */}
        <div className="lg:col-span-5 bg-[#06241B] text-white rounded-3xl p-6 sm:p-8 border border-emerald-800 shadow-xl space-y-6 sticky top-24">
          <div className="border-b border-emerald-800 pb-4">
            <span className="text-xs text-amber-300 uppercase tracking-widest font-bold block mb-1">
              {isBengali ? 'তাৎক্ষণিক কোটেশন সারাংশ' : 'Live Estimate Summary'}
            </span>
            <div className="text-3xl sm:text-4xl font-black font-heading text-white">
              ₹{quote.total.toLocaleString('en-IN')}
              <span className="text-xs font-normal text-slate-300 block sm:inline sm:ml-2">
                {isBengali ? '(সকল অনুমতি, বোট ও খাবার সহ)' : '(Permits & Meals Included)'}
              </span>
            </div>
          </div>

          {/* Itemized Breakdown */}
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex justify-between py-1 border-b border-emerald-900/60">
              <span>{isBengali ? 'প্রাপ্তবয়স্ক ফি' : 'Adult Base Fare'} ({trip.guestsAdults} x {trip.days}D):</span>
              <span className="font-semibold text-white">₹{quote.adultCost.toLocaleString('en-IN')}</span>
            </div>

            {trip.guestsChildren > 0 && (
              <div className="flex justify-between py-1 border-b border-emerald-900/60">
                <span>{isBengali ? 'শিশু ফি' : 'Child Fare'} ({trip.guestsChildren} x 50%):</span>
                <span className="font-semibold text-white">₹{quote.childCost.toLocaleString('en-IN')}</span>
              </div>
            )}

            <div className="flex justify-between py-1 border-b border-emerald-900/60">
              <span>{isBengali ? 'রুম ক্যাটাগরি এডজাস্টমেন্ট' : 'Lodging Tier Modifier'}:</span>
              <span className="font-semibold text-white">₹{quote.roomModifier.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between py-1 border-b border-emerald-900/60">
              <span>{isBengali ? 'পিকআপ ও পরিবহন' : 'Pickup Transit'}:</span>
              <span className="font-semibold text-white">₹{quote.pickupCost.toLocaleString('en-IN')}</span>
            </div>

            {trip.cameramanAddon && (
              <div className="flex justify-between py-1 border-b border-emerald-900/60">
                <span>{isBengali ? 'ক্যামেরাম্যান অ্যাড-অন' : 'Camera Addon'}:</span>
                <span className="font-semibold text-white">₹2,500</span>
              </div>
            )}
          </div>

          {/* Inclusions note */}
          <div className="p-3 bg-[#0E3D2F] rounded-xl border border-emerald-800 text-[11px] text-emerald-200 space-y-1">
            <div className="flex items-center gap-1 text-amber-300 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isBengali ? 'সম্পূর্ণ স্বচ্ছ কোটেশন' : 'Fully Inclusive Safari'}</span>
            </div>
            <p>
              {isBengali
                ? 'বন দপ্তরের প্রবেশ ফি, বোট ভাড়া, সকল বেলার খাবার ও অনুমোদিত গাইড অন্তর্ভুক্ত।'
                : 'Covers STR sanctuary permits, vessel charter, 5-course daily meals, and certified guide.'}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <a
              href={getWhatsAppShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isBengali ? 'হোয়াটসঅ্যাপে এই কোটেশন পাঠান' : 'Send this Quote to WhatsApp'}</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleSaveToProfile}
                className="py-2.5 px-3 bg-white/15 hover:bg-white/25 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <Bookmark className="w-3.5 h-3.5 text-[#F4B942]" />
                <span>{isBengali ? 'কোটেশন সেভ করুন' : 'Save Quote'}</span>
              </button>

              <button
                onClick={() => onNavigate('booking')}
                className="py-2.5 px-3 bg-[#F4B942] hover:bg-[#ffcb59] text-[#064E3B] font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <span>{isBengali ? 'চূড়ান্ত বুকিং' : 'Finalize Booking'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {isSavedNotice && (
              <div className="text-center text-xs text-amber-300 bg-amber-900/40 p-2 rounded-lg border border-amber-500/40 animate-in fade-in">
                {isBengali ? 'কোটেশনটি সফলভাবে সংরক্ষিত হয়েছে!' : 'Quotation saved to your profile!'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
