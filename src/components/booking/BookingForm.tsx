import React, { useState, useEffect } from 'react';
import { Check, Phone, MessageCircle, Calendar, Users, MapPin, Sparkles, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';
import { TOUR_PACKAGES } from '../../data/packages';
import { BRAND_INFO } from '../../data/brandInfo';

interface BookingFormProps {
  initialPackageSlug?: string;
  onSuccess?: (enquiryId: string) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialPackageSlug, onSuccess }) => {
  const { language, isBengali } = useLanguage();
  const { addEnquiry } = useAdmin();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    whatsapp: '',
    whatsappSameAsPhone: true,
    email: '',
    packageSlug: initialPackageSlug || '2-nights-3-days-deluxe',
    preferredDate: '',
    isFlexibleDate: true,
    adultsCount: 2,
    childrenCount: 0,
    childrenAges: '',
    pickupPoint: 'Kolkata (Science City / Indian Museum)',
    customPickup: '',
    roomType: 'ac' as 'ac' | 'non-ac' | 'luxury-suite',
    roomSharing: 'double' as 'single' | 'double' | 'triple' | 'four',
    foodPreference: 'bengali-nonveg' as 'bengali-nonveg' | 'pure-veg' | 'jain' | 'custom-seafood',
    dietaryAllergies: '',
    cameramanAddon: false,
    customRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Selected package reference
  const selectedPkg = TOUR_PACKAGES.find(p => p.slug === formData.packageSlug) || TOUR_PACKAGES[0] || {
    id: 'default',
    slug: 'one-day-sundarban-tour',
    title: { bn: 'সুন্দরবন ডে সাফারি', en: 'Sundarban Day Safari' },
    basePrice: 1999
  };

  // Dynamic Price Estimate Math
  const calculateEstimatedTotal = () => {
    let baseRate = selectedPkg.basePrice || 1999;
    if (selectedPkg.slug === 'one-day-sundarban-tour' || selectedPkg.slug === '1-day-express') baseRate = 1999;
    if (selectedPkg.slug === '1-night-2-days-classic') baseRate = 2999;
    if (selectedPkg.slug === '2-nights-3-days-deluxe') baseRate = 3999;
    if (selectedPkg.slug === '3-nights-4-days-extended') baseRate = 4999;
    if (selectedPkg.slug === 'seasonal-monsoon-festival') baseRate = 2999;
    if (selectedPkg.slug === 'custom-private-charter') baseRate = 9500;

    if (formData.roomType === 'luxury-suite') baseRate += 1200;
    if (formData.roomType === 'non-ac') baseRate -= 500;

    let adultTotal = formData.adultsCount * baseRate;
    let childTotal = formData.childrenCount * (baseRate * 0.5); // 50% for child
    let addonTotal = formData.cameramanAddon ? 2500 : 0;

    return adultTotal + childTotal + addonTotal;
  };

  const handlePhoneChange = (val: string) => {
    setFormData(prev => ({
      ...prev,
      phone: val,
      whatsapp: prev.whatsappSameAsPhone ? val : prev.whatsapp,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage(isBengali ? 'দয়া করে আপনার পূর্ণ নাম লিখুন।' : 'Please provide your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage(isBengali ? 'সঠিক ১০ সংখ্যার ফোন নম্বর প্রদান করুন।' : 'Please enter a valid 10-digit phone number.');
      return;
    }

    if (!formData.preferredDate) {
      setErrorMessage(isBengali ? 'দয়া করে যাত্রার সম্ভাব্য তারিখ নির্বাচন করুন।' : 'Please select your preferred travel date.');
      return;
    }

    setIsSubmitting(true);

    try {
      const finalPickup =
        formData.pickupPoint === 'custom' ? formData.customPickup || 'Custom Location' : formData.pickupPoint;

      const enquiryId = await addEnquiry({
        fullName: formData.fullName,
        phone: formData.phone,
        whatsapp: formData.whatsappSameAsPhone ? formData.phone : formData.whatsapp,
        email: formData.email,
        packageSlug: formData.packageSlug,
        preferredDate: formData.preferredDate,
        isFlexibleDate: formData.isFlexibleDate,
        adultsCount: Number(formData.adultsCount),
        childrenCount: Number(formData.childrenCount),
        childrenAges: formData.childrenAges,
        pickupPoint: finalPickup,
        roomType: formData.roomType,
        roomSharing: formData.roomSharing,
        foodPreference: formData.foodPreference,
        dietaryAllergies: formData.dietaryAllergies,
        cameramanAddon: formData.cameramanAddon,
        customRequests: formData.customRequests,
      });

      setSubmittedId(enquiryId);
      if (onSuccess) onSuccess(enquiryId);
    } catch (err) {
      setErrorMessage(isBengali ? 'বুকিং জমা দিতে সমস্যা হয়েছে, অনুগ্রহ করে ফোন করুন।' : 'Submission failed. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp structured link generator
  const getWhatsAppBookingUrl = () => {
    const text = isBengali
      ? `*সুন্দরবন ভ্রমণ নতুন বুকিং অনুসন্ধান*\n\n` +
        `👤 নাম: ${formData.fullName || 'নাম'}\n` +
        `📞 ফোন: ${formData.phone || 'ফোন'}\n` +
        `📦 প্যাকেজ: ${selectedPkg.title.bn}\n` +
        `📅 তারিখ: ${formData.preferredDate || 'উল্লেখিত নেই'}\n` +
        `👥 অতিথি: ${formData.adultsCount} জন প্রাপ্তবয়স্ক, ${formData.childrenCount} শিশু\n` +
        `🚗 পিকআপ: ${formData.pickupPoint}\n` +
        `🏨 রুম: ${formData.roomType.toUpperCase()}\n` +
        `🍱 খাবার: ${formData.foodPreference}\n` +
        `💰 আনুমানিক বাজেট: ₹${calculateEstimatedTotal().toLocaleString('en-IN')}\n\n` +
        `দয়া করে প্রাপ্যতা ও চূড়ান্ত কোটেশন নিশ্চিত করুন।`
      : `*Sundarban Vromon Booking Inquiry*\n\n` +
        `👤 Name: ${formData.fullName || 'Name'}\n` +
        `📞 Phone: ${formData.phone || 'Phone'}\n` +
        `📦 Package: ${selectedPkg.title.en}\n` +
        `📅 Travel Date: ${formData.preferredDate || 'Not specified'}\n` +
        `👥 Guests: ${formData.adultsCount} Adults, ${formData.childrenCount} Children\n` +
        `🚗 Pickup: ${formData.pickupPoint}\n` +
        `🏨 Room: ${formData.roomType.toUpperCase()}\n` +
        `🍱 Food: ${formData.foodPreference}\n` +
        `💰 Estimated Estimate: ₹${calculateEstimatedTotal().toLocaleString('en-IN')}\n\n` +
        `Please confirm seat availability & customized quote.`;

    return `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  if (submittedId) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-300 shadow-xl text-center space-y-6 animate-in zoom-in-95 duration-500 max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0E7490]">
            {isBengali ? 'বুকিং অনুসন্ধান সফলভাবে গৃহীত হয়েছে' : 'Enquiry Received Successfully'}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
            {isBengali ? 'ধন্যবাদ, ' : 'Thank You, '} {formData.fullName}
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            {isBengali
              ? 'আপনার বুকিং রেফারেন্স আইডি নিচে দেওয়া হলো। আমাদের টিম খুব শীঘ্রই আপনার সাথে ফোনে যোগাযোগ করবে।'
              : 'Your booking reference number is generated below. Our representative will contact you shortly to confirm dates and permits.'}
          </p>
        </div>

        {/* Reference ID Pill */}
        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 inline-block">
          <span className="text-xs text-slate-500 block">{isBengali ? 'রেফারেন্স কোড:' : 'Reference ID:'}</span>
          <span className="text-xl font-mono font-bold text-[#064E3B]">{submittedId}</span>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isBengali ? 'হোয়াটসঅ্যাপে তাৎক্ষণিক নিশ্চিতকরণ' : 'Fast-track via WhatsApp'}</span>
          </a>

          <button
            onClick={() => {
              setSubmittedId(null);
              setFormData({
                fullName: '',
                phone: '',
                whatsapp: '',
                whatsappSameAsPhone: true,
                email: '',
                packageSlug: '2-nights-3-days-deluxe',
                preferredDate: '',
                isFlexibleDate: true,
                adultsCount: 2,
                childrenCount: 0,
                childrenAges: '',
                pickupPoint: 'Kolkata (Science City / Indian Museum)',
                customPickup: '',
                roomType: 'ac',
                roomSharing: 'double',
                foodPreference: 'bengali-nonveg',
                dietaryAllergies: '',
                cameramanAddon: false,
                customRequests: '',
              });
            }}
            className="w-full sm:w-auto px-6 py-3 border border-slate-300 text-slate-700 font-semibold text-sm rounded-xl hover:bg-slate-50"
          >
            {isBengali ? 'আরেকটি ফর্ম পূরণ করুন' : 'Submit Another Enquiry'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg space-y-8">
      {/* Form Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-2xl font-bold font-heading text-[#064E3B]">
              {isBengali ? 'সুন্দরবন ট্যুর বুকিং ও কোটেশন ফর্ম' : 'Sundarban Safari Booking & Quote'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {isBengali
                ? 'সঠিক তথ্য পূরণ করুন। কোনো লুকানো চার্জ ছাড়া বিস্তারিত কোটেশন পাঠানো হবে।'
                : 'Fill in your safari preferences for a transparent, permit-inclusive cost estimate.'}
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-500 block">
              {isBengali ? 'আনুমানিক প্রাক্কলন' : 'Live Estimate'}
            </span>
            <span className="text-2xl font-black font-heading text-[#064E3B]">
              ₹{calculateEstimatedTotal().toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs sm:text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Section 1: Guest Personal Contacts */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading flex items-center gap-2">
          <Users className="w-4 h-4 text-[#064E3B]" />
          <span>{isBengali ? '১. প্রাথমিক যোগাযোগের তথ্য' : '1. Primary Guest Details'}</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBengali ? 'আপনার পূর্ণ নাম *' : 'Full Name *'}
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              placeholder={isBengali ? 'যেমন: সুভাষ বোস' : 'e.g. Sourav Mukherjee'}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-2 focus:ring-emerald-100 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBengali ? 'ফোন নম্বর (১০ সংখ্যা) *' : 'Phone Number (10 Digits) *'}
            </label>
            <input
              type="tel"
              required
              maxLength={12}
              value={formData.phone}
              onChange={e => handlePhoneChange(e.target.value)}
              placeholder="98300XXXXX"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-2 focus:ring-emerald-100 text-sm"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700">
                {isBengali ? 'হোয়াটসঅ্যাপ নম্বর' : 'WhatsApp Number'}
              </label>
              <label className="flex items-center gap-1 text-[11px] text-slate-500 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.whatsappSameAsPhone}
                  onChange={e =>
                    setFormData(prev => ({
                      ...prev,
                      whatsappSameAsPhone: e.target.checked,
                      whatsapp: e.target.checked ? prev.phone : prev.whatsapp,
                    }))
                  }
                  className="rounded text-emerald-600 focus:ring-0"
                />
                <span>{isBengali ? 'ফোনের মতোই' : 'Same as phone'}</span>
              </label>
            </div>
            <input
              type="tel"
              disabled={formData.whatsappSameAsPhone}
              value={formData.whatsappSameAsPhone ? formData.phone : formData.whatsapp}
              onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
              placeholder="98300XXXXX"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 disabled:bg-slate-100 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBengali ? 'ইমেইল অ্যাড্রেস (ঐচ্ছিক)' : 'Email Address (Optional)'}
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] text-sm"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Package & Travel Date */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#064E3B]" />
          <span>{isBengali ? '২. প্যাকেজ ও ভ্রমণের সময়সূচি' : '2. Package & Travel Dates'}</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBengali ? 'প্যাকেজ নির্বাচন করুন *' : 'Select Tour Package *'}
            </label>
            <select
              value={formData.packageSlug}
              onChange={e => setFormData({ ...formData, packageSlug: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] text-sm font-medium bg-white"
            >
              {TOUR_PACKAGES.map(p => (
                <option key={p.slug} value={p.slug}>
                  {p.title[language]} ({p.durationDays}D/{p.durationNights}N) - {p.basePrice ? `₹${p.basePrice.toLocaleString('en-IN')}` : p.pricePerPersonINR || ''}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700">
                {isBengali ? 'ভ্রমণের পছন্দসই তারিখ *' : 'Preferred Travel Date *'}
              </label>
              <label className="flex items-center gap-1 text-[11px] text-slate-500 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isFlexibleDate}
                  onChange={e => setFormData({ ...formData, isFlexibleDate: e.target.checked })}
                  className="rounded text-emerald-600 focus:ring-0"
                />
                <span>{isBengali ? 'তারিখ নমনীয় (+/- ২ দিন)' : 'Flexible (+/- 2 Days)'}</span>
              </label>
            </div>
            <input
              type="date"
              required
              value={formData.preferredDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] text-sm bg-white"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Guests & Pickup Point */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#064E3B]" />
          <span>{isBengali ? '৩. অতিথি সংখ্যা ও পিকআপ পয়েন্ট' : '3. Group Size & Pickup Location'}</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBengali ? 'প্রাপ্তবয়স্ক অতিথি (১২+ বছর)' : 'Adults (12+ Years)'}
            </label>
            <input
              type="number"
              min={1}
              max={50}
              value={formData.adultsCount}
              onChange={e => setFormData({ ...formData, adultsCount: Number(e.target.value) })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBengali ? 'শিশু অতিথি (৫-১১ বছর)' : 'Children (5-11 Years)'}
            </label>
            <input
              type="number"
              min={0}
              max={20}
              value={formData.childrenCount}
              onChange={e => setFormData({ ...formData, childrenCount: Number(e.target.value) })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBengali ? 'পিকআপ পয়েন্ট' : 'Pickup Point'}
            </label>
            <select
              value={formData.pickupPoint}
              onChange={e => setFormData({ ...formData, pickupPoint: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white"
            >
              <option value="Kolkata (Science City / Indian Museum)">
                {isBengali ? 'কলকাতা (সায়েন্স সিটি / জাদুঘর)' : 'Kolkata (Science City / Museum)'}
              </option>
              <option value="Canning Railway Station">
                {isBengali ? 'ক্যানিং রেলওয়ে স্টেশন' : 'Canning Railway Station'}
              </option>
              <option value="Godkhali Ferry Jetty">
                {isBengali ? 'গদখালি ফেরি ঘাট' : 'Godkhali Ferry Jetty'}
              </option>
              <option value="custom">{isBengali ? 'কাস্টম নিজস্ব ঠিকানা' : 'Custom Pickup Location'}</option>
            </select>
          </div>
        </div>

        {formData.pickupPoint === 'custom' && (
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBengali ? 'আপনার সঠিক পিকআপ ঠিকানা লিখুন' : 'Specify Custom Pickup Address'}
            </label>
            <input
              type="text"
              value={formData.customPickup}
              onChange={e => setFormData({ ...formData, customPickup: e.target.value })}
              placeholder={isBengali ? 'যেমন: হাওড়া স্টেশন বা সল্টলেক গেট' : 'e.g. Howrah Station or Airport'}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
            />
          </div>
        )}
      </div>

      {/* Section 4: Room, Food & Addons */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#064E3B]" />
          <span>{isBengali ? '৪. রুম, খাবার ও অতিরিক্ত সুবিধা' : '4. Lodging, Food & Add-ons'}</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBengali ? 'রুম ক্যাটাগরি' : 'Room Type'}
            </label>
            <select
              value={formData.roomType}
              onChange={e => setFormData({ ...formData, roomType: e.target.value as any })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white"
            >
              <option value="ac">{isBengali ? 'এসি কটেজ / ডিলাক্স (স্ট্যান্ডার্ড)' : 'AC Cottage / Deluxe (Standard)'}</option>
              <option value="non-ac">{isBengali ? 'নন-এসি বাজেট কটেজ (-₹৫০০)' : 'Non-AC Budget Cottage (-₹500)'}</option>
              <option value="luxury-suite">{isBengali ? 'লাক্সারি রিভারভিউ সুইট (+₹১২০০)' : 'Luxury Riverview Suite (+₹1200)'}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBengali ? 'খাবার পছন্দ' : 'Food Preference'}
            </label>
            <select
              value={formData.foodPreference}
              onChange={e => setFormData({ ...formData, foodPreference: e.target.value as any })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white"
            >
              <option value="bengali-nonveg">{isBengali ? 'খাঁটি বাঙালি নন-ভেজ (চিংড়ি/মাছ/মাংস)' : 'Bengali Non-Veg (Prawn/Fish/Mutton)'}</option>
              <option value="pure-veg">{isBengali ? 'বিশুদ্ধ নিরামিষ (Pure Veg)' : 'Pure Vegetarian'}</option>
              <option value="jain">{isBengali ? 'জৈন নিরামিষ (Jain Cuisine)' : 'Jain (No Onion/Garlic)'}</option>
              <option value="custom-seafood">{isBengali ? 'স্পেশাল ইলিশ ও কাঁকড়া ভোজ' : 'Special Hilsa & Crab Feast'}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBengali ? 'ক্যামেরাম্যান অ্যাড-অন (+₹২৫০০)' : 'Cameraman & 4K Video (+₹2500)'}
            </label>
            <div className="pt-2">
              <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700">
                <input
                  type="checkbox"
                  checked={formData.cameramanAddon}
                  onChange={e => setFormData({ ...formData, cameramanAddon: e.target.checked })}
                  className="rounded text-emerald-600 focus:ring-0 w-4 h-4"
                />
                <span>{isBengali ? 'হ্যাঁ, ক্যামেরা অ্যাড-অন চাই' : 'Include High-Res Lens & Drone Footage'}</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isBengali ? 'অ্যালার্জি বা বিশেষ নির্দেশাবলী' : 'Allergies / Special Medical Notes'}
          </label>
          <textarea
            rows={2}
            value={formData.customRequests}
            onChange={e => setFormData({ ...formData, customRequests: e.target.value })}
            placeholder={
              isBengali
                ? 'যেমন: চিংড়ি খাব না, প্রবীণ ব্যক্তির জন্য নিচতলার রুম প্রয়োজন ইত্যাদি।'
                : 'e.g. Shellfish allergy, ground floor room for senior citizens, etc.'
            }
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
          />
        </div>
      </div>

      {/* Action Submit Buttons */}
      <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-500 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{isBengali ? 'আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং তাৎক্ষণিক কনফার্মেশন প্রদেয়' : 'Secure booking inquiry with zero spam guarantee'}</span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">{isBengali ? 'হোয়াটসঅ্যাপে পাঠান' : 'WhatsApp'}</span>
          </a>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 sm:flex-initial px-8 py-3.5 rounded-xl bg-[#064E3B] hover:bg-[#08614a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4 text-[#F4B942]" />
            <span>
              {isSubmitting
                ? isBengali
                  ? 'জমা হচ্ছে...'
                  : 'Processing...'
                : isBengali
                ? 'বুকিং আবেদন জমা দিন'
                : 'Submit Booking Request'}
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};
