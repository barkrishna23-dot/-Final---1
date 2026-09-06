import React, { useState, useEffect } from 'react';
import { Check, Phone, MessageCircle, Calendar, Users, MapPin, Sparkles, CheckCircle2, ShieldCheck, AlertCircle, Heart, Smile, CreditCard, Globe } from 'lucide-react';
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
    idType: 'aadhaar' as 'aadhaar' | 'voter' | 'passport' | 'driving_license',
    idNumber: '',
    originType: 'west_bengal' as 'west_bengal' | 'other_state' | 'outside_india',
    originStateOrCountry: '',
    packageSlug: initialPackageSlug || 'one-day-sundarban-tour',
    preferredDate: '',
    isFlexibleDate: true,
    groupType: 'family' as 'family' | 'couple' | 'friends' | 'female-friends',
    adultsCount: 1,
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

  // Keep package in sync whenever initialPackageSlug changes from any package button
  useEffect(() => {
    if (initialPackageSlug) {
      setFormData(prev => ({
        ...prev,
        packageSlug: initialPackageSlug,
      }));
    }
  }, [initialPackageSlug]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Selected package reference dynamically found from packages data
  const selectedPkg =
    TOUR_PACKAGES.find(p => p.slug === formData.packageSlug) ||
    TOUR_PACKAGES.find(p => p.slug === initialPackageSlug) ||
    TOUR_PACKAGES[0];

  const isDayTour = (selectedPkg.durationNights || 0) === 0;

  // Dynamic Price Estimate Math - strictly matches package rate
  const getPricingEstimate = () => {
    const baseRate = selectedPkg.basePrice || 1999;
    let roomModifier = 0;
    if (!isDayTour) {
      if (formData.roomType === 'luxury-suite') roomModifier = 1200;
      else if (formData.roomType === 'non-ac') roomModifier = -500;
    }

    const perAdult = Math.max(baseRate + roomModifier, 1000);
    const perChild = Math.round(baseRate * 0.5);

    const adultsCount = Math.max(Number(formData.adultsCount) || 1, 1);
    const childrenCount = Math.max(Number(formData.childrenCount) || 0, 0);

    const adultTotal = adultsCount * perAdult;
    const childTotal = childrenCount * perChild;
    const addonTotal = formData.cameramanAddon ? 2500 : 0;

    const grandTotal = adultTotal + childTotal + addonTotal;

    return {
      baseRate,
      isDayTour,
      roomModifier,
      perAdult,
      perChild,
      adultsCount,
      childrenCount,
      adultTotal,
      childTotal,
      addonTotal,
      grandTotal,
    };
  };

  const estimate = getPricingEstimate();
  const calculateEstimatedTotal = () => estimate.grandTotal;

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
      const finalPickup = formData.pickupPoint;

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
        groupType: formData.groupType,
        idType: formData.idType,
        idNumber: formData.idNumber,
        originType: formData.originType,
        originStateOrCountry: formData.originStateOrCountry,
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
    const groupTypeLabelBn =
      formData.groupType === 'couple'
        ? 'কাপেল (রোমান্টিক সফর)'
        : formData.groupType === 'friends'
        ? 'বন্ধু (বন্ধু-বান্ধব গ্রুপ)'
        : formData.groupType === 'female-friends'
        ? 'বান্ধবী (অল-গার্লস ট্যুর)'
        : 'ফ্যামিলি (পারিবারিক)';

    const groupTypeLabelEn =
      formData.groupType === 'couple'
        ? 'Couple / Romantic'
        : formData.groupType === 'friends'
        ? 'Friends Group'
        : formData.groupType === 'female-friends'
        ? 'Female Friends / Girls Group'
        : 'Family Tour';

    const idLabelBn =
      formData.idType === 'aadhaar'
        ? 'আধার কার্ড'
        : formData.idType === 'voter'
        ? 'ভোটার কার্ড'
        : formData.idType === 'passport'
        ? 'পাসপোর্ট'
        : 'ড্রাইভিং লাইসেন্স';

    const idLabelEn =
      formData.idType === 'aadhaar'
        ? 'Aadhaar Card'
        : formData.idType === 'voter'
        ? 'Voter ID Card'
        : formData.idType === 'passport'
        ? 'Passport'
        : 'Driving License';

    const originLabelBn =
      formData.originType === 'west_bengal'
        ? `পশ্চিমবঙ্গ ${formData.originStateOrCountry ? `(${formData.originStateOrCountry})` : '(লোকাল)'}`
        : formData.originType === 'other_state'
        ? `অন্যান্য ভারতীয় রাজ্য ${formData.originStateOrCountry ? `(${formData.originStateOrCountry})` : '(ভিনরাজ্য)'}`
        : `ভারতের বাইরে / আন্তর্জাতিক ${formData.originStateOrCountry ? `(${formData.originStateOrCountry})` : '(বিদেশী পর্যটক)'}`;

    const originLabelEn =
      formData.originType === 'west_bengal'
        ? `West Bengal ${formData.originStateOrCountry ? `(${formData.originStateOrCountry})` : '(Local)'}`
        : formData.originType === 'other_state'
        ? `Other Indian State ${formData.originStateOrCountry ? `(${formData.originStateOrCountry})` : '(Domestic)'}`
        : `Outside India / International ${formData.originStateOrCountry ? `(${formData.originStateOrCountry})` : '(Foreigner)'}`;

    const text = isBengali
      ? `*সুন্দরবন ভ্রমণ নতুন বুকিং অনুসন্ধান*\n\n` +
        `👤 নাম: ${formData.fullName || 'নাম'}\n` +
        `📞 ফোন: ${formData.phone || 'ফোন'}\n` +
        `🪪 পরিচয়পত্র: ${idLabelBn}${formData.idNumber ? ` (নং: ${formData.idNumber})` : ''}\n` +
        `📍 কোথা থেকে আসছেন: ${originLabelBn}\n` +
        `📦 প্যাকেজ: ${selectedPkg.title.bn}\n` +
        `🏷️ প্যাকেজ অফিসিয়াল রেট: ₹${selectedPkg.basePrice.toLocaleString('en-IN')}/জন\n` +
        `📅 তারিখ: ${formData.preferredDate || 'উল্লেখিত নেই'}\n` +
        `👥 ভ্রমণের ধরন: ${groupTypeLabelBn}\n` +
        `👥 অতিথি: ${formData.adultsCount} জন প্রাপ্তবয়স্ক${formData.childrenCount > 0 ? `, ${formData.childrenCount} শিশু` : ''}\n` +
        `🚗 পিকআপ: ${formData.pickupPoint}\n` +
        `🏨 রুম/থাকা: ${isDayTour ? 'দিনের সফর (রাত্রিযাপন নেই)' : formData.roomType.toUpperCase()}\n` +
        `🍱 খাবার: ${formData.foodPreference}\n` +
        `💰 মোট প্রাক্কলিত এমাউন্ট: ₹${calculateEstimatedTotal().toLocaleString('en-IN')}\n\n` +
        `দয়া করে প্রাপ্যতা ও চূড়ান্ত বুকিং নিশ্চিত করুন।`
      : `*Sundarban Vromon Booking Inquiry*\n\n` +
        `👤 Name: ${formData.fullName || 'Name'}\n` +
        `📞 Phone: ${formData.phone || 'Phone'}\n` +
        `🪪 Govt ID: ${idLabelEn}${formData.idNumber ? ` (No: ${formData.idNumber})` : ''}\n` +
        `📍 Traveling From: ${originLabelEn}\n` +
        `📦 Package: ${selectedPkg.title.en}\n` +
        `🏷️ Package Official Rate: ₹${selectedPkg.basePrice.toLocaleString('en-IN')}/person\n` +
        `📅 Travel Date: ${formData.preferredDate || 'Not specified'}\n` +
        `👥 Tour Group: ${groupTypeLabelEn}\n` +
        `👥 Guests: ${formData.adultsCount} Adults${formData.childrenCount > 0 ? `, ${formData.childrenCount} Children` : ''}\n` +
        `🚗 Pickup: ${formData.pickupPoint}\n` +
        `🏨 Lodging: ${isDayTour ? 'Day Safari (No overnight)' : formData.roomType.toUpperCase()}\n` +
        `🍱 Food: ${formData.foodPreference}\n` +
        `💰 Total Booking Amount: ₹${calculateEstimatedTotal().toLocaleString('en-IN')}\n\n` +
        `Please confirm seat availability & booking.`;

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
                idType: 'aadhaar',
                idNumber: '',
                originType: 'west_bengal',
                originStateOrCountry: '',
                packageSlug: initialPackageSlug || 'one-day-sundarban-tour',
                preferredDate: '',
                isFlexibleDate: true,
                groupType: 'family',
                adultsCount: 1,
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

          <div className="text-right bg-emerald-50/90 border border-emerald-200/90 px-4 py-2.5 rounded-2xl shadow-xs">
            <div className="text-[11px] font-semibold text-emerald-800 flex items-center justify-end gap-1">
              <span>{isBengali ? 'প্যাকেজের নির্দিষ্ট রেট:' : 'Official Package Rate:'}</span>
              <span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded-md border border-emerald-300">
                ₹{selectedPkg.basePrice.toLocaleString('en-IN')} / {isBengali ? 'জন' : 'person'}
              </span>
            </div>
            <div className="flex items-baseline justify-end gap-1.5 mt-1">
              <span className="text-xs text-slate-500 font-medium">
                {isBengali ? 'মোট বুকিং এমাউন্ট:' : 'Total Amount:'}
              </span>
              <span className="text-2xl sm:text-3xl font-black font-heading text-[#064E3B]">
                ₹{estimate.grandTotal.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="text-[10px] text-slate-500 text-right">
              {formData.adultsCount > 1
                ? (isBengali ? `(₹${selectedPkg.basePrice.toLocaleString('en-IN')} × ${formData.adultsCount} জন প্রাপ্তবয়স্ক)` : `(₹${selectedPkg.basePrice.toLocaleString('en-IN')} × ${formData.adultsCount} guests)`)
                : (isBengali ? '১ জনের জন্য প্যাকেজের সঠিক রেট' : 'Exact rate for 1 traveler')}
            </div>
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

        {/* Government Photo ID Section for Forest Entry Permit */}
        <div className="pt-3 border-t border-slate-100">
          <div className="bg-gradient-to-b from-slate-50/95 to-emerald-50/25 border border-slate-200/90 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <label className="text-xs font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#064E3B]" />
                <span>{isBengali ? 'সরকারি পরিচয়পত্র ও আইডি নম্বর' : 'Government Photo ID & Document Number'}</span>
                <span className="text-emerald-700 font-normal">
                  ({isBengali ? 'বন দপ্তর অনুমোদনের জন্য' : 'Forest Permit Clearance'})
                </span>
              </label>
              <span className="text-[11px] text-slate-500 font-medium">
                {isBengali ? 'আধার / ভোটার / পাসপোর্ট / ড্রাইভিং লাইসেন্স' : 'Aadhaar / Voter / Passport / Driving License'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
              {/* ID Type Options Selector */}
              <div className="md:col-span-6">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {isBengali ? 'পরিচয়পত্রের ধরন নির্বাচন করুন *' : 'Select ID Document Type *'}
                </label>
                <div className="grid grid-cols-2 gap-2 p-1.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                  {[
                    { id: 'aadhaar', labelBn: 'আধার কার্ড', labelEn: 'Aadhaar Card' },
                    { id: 'voter', labelBn: 'ভোটার কার্ড', labelEn: 'Voter ID Card' },
                    { id: 'passport', labelBn: 'পাসপোর্ট', labelEn: 'Passport' },
                    { id: 'driving_license', labelBn: 'ড্রাইভিং লাইসেন্স', labelEn: 'Driving License' },
                  ].map(doc => {
                    const isSelected = formData.idType === doc.id;
                    return (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, idType: doc.id as any }))}
                        className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-[#064E3B] text-white shadow-xs'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected && <span className="text-[10px]">✓</span>}
                        <span>{isBengali ? doc.labelBn : doc.labelEn}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ID Number Input Field Beside It */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {formData.idType === 'aadhaar' && (isBengali ? 'আধার কার্ড নম্বর লিখুন' : 'Enter Aadhaar Card Number')}
                    {formData.idType === 'voter' && (isBengali ? 'ভোটার কার্ড নম্বর (EPIC No.) লিখুন' : 'Enter Voter Card Number (EPIC No.)')}
                    {formData.idType === 'passport' && (isBengali ? 'পাসপোর্ট নম্বর লিখুন' : 'Enter Passport Number')}
                    {formData.idType === 'driving_license' && (isBengali ? 'ড্রাইভিং লাইসেন্স নম্বর লিখুন' : 'Enter Driving License Number')}
                  </label>
                  <input
                    type="text"
                    value={formData.idNumber}
                    onChange={e => setFormData({ ...formData, idNumber: e.target.value })}
                    placeholder={
                      formData.idType === 'aadhaar'
                        ? (isBengali ? 'যেমন: 1234 5678 9012' : 'e.g. 1234 5678 9012')
                        : formData.idType === 'voter'
                        ? (isBengali ? 'যেমন: WBF1234567' : 'e.g. WBF1234567')
                        : formData.idType === 'passport'
                        ? (isBengali ? 'যেমন: Z1234567' : 'e.g. Z1234567')
                        : (isBengali ? 'যেমন: WB01 20210001234' : 'e.g. WB01 20210001234')
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-2 focus:ring-emerald-100 text-sm font-medium bg-white"
                  />
                </div>
                <p className="mt-1.5 text-[11px] text-slate-500">
                  {isBengali
                    ? '🔒 সুন্দরবন ব্যাঘ্র প্রকল্প ও সজনেখালি বন দপ্তরের গেট পারমিট সুরক্ষার জন্য ব্যবহৃত হবে।'
                    : '🔒 Securely collected for Sundarban Tiger Reserve and Forest Department checkpoint clearances.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Origin / Where Traveling From Section */}
        <div className="pt-2">
          <div className="bg-gradient-to-b from-slate-50/95 to-emerald-50/25 border border-slate-200/90 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <label className="text-xs font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#064E3B]" />
                <span>{isBengali ? 'কোথা থেকে আসছেন / স্থায়ী অবস্থান' : 'Where are you traveling from? (Origin)'}</span>
              </label>
              <span className="text-[11px] text-slate-500 font-medium">
                {isBengali ? 'পশ্চিমবঙ্গ / অন্যান্য রাজ্য / ভারতের বাইরে' : 'West Bengal / Other State / Outside India'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
              {/* Origin Region Selection Buttons */}
              <div className="md:col-span-6">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {isBengali ? 'ভ্রমণকারীর অবস্থান ক্যাটাগরি *' : 'Select Origin Category *'}
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                  {[
                    { id: 'west_bengal', labelBn: 'পশ্চিমবঙ্গ', labelEn: 'West Bengal' },
                    { id: 'other_state', labelBn: 'অন্যান্য রাজ্য', labelEn: 'Other State' },
                    { id: 'outside_india', labelBn: 'ভারতের বাইরে', labelEn: 'Outside India' },
                  ].map(region => {
                    const isSelected = formData.originType === region.id;
                    return (
                      <button
                        key={region.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, originType: region.id as any }))}
                        className={`py-2 px-1 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center gap-1 cursor-pointer truncate ${
                          isSelected
                            ? 'bg-[#064E3B] text-white shadow-xs'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected && <span className="text-[10px]">✓</span>}
                        <span>{isBengali ? region.labelBn : region.labelEn}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* State/District/Country Details Beside It */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {formData.originType === 'west_bengal' && (isBengali ? 'জেলা বা শহরের নাম লিখুন' : 'District or City Name')}
                    {formData.originType === 'other_state' && (isBengali ? 'কোন রাজ্য থেকে আসছেন? (যেমন: দিল্লি, মহারাষ্ট্র, বিহার)' : 'Which Indian State? (e.g. Delhi, Maharashtra)')}
                    {formData.originType === 'outside_india' && (isBengali ? 'দেশের নাম ও জাতীয়তা (যেমন: বাংলাদেশ, মার্কিন যুক্তরাষ্ট্র)' : 'Country of Origin / Nationality (e.g. USA, UK)')}
                  </label>
                  <input
                    type="text"
                    value={formData.originStateOrCountry}
                    onChange={e => setFormData({ ...formData, originStateOrCountry: e.target.value })}
                    placeholder={
                      formData.originType === 'west_bengal'
                        ? (isBengali ? 'যেমন: কলকাতা, হাওড়া, উত্তর ২৪ পরগনা, শিলিগুড়ি' : 'e.g. Kolkata, Howrah, North 24 Parganas')
                        : formData.originType === 'other_state'
                        ? (isBengali ? 'যেমন: দিল্লি, মহারাষ্ট্র, বিহার, কর্ণাটক, আসাম' : 'e.g. Delhi, Maharashtra, Bihar, Karnataka')
                        : (isBengali ? 'যেমন: বাংলাদেশ, মার্কিন যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডা' : 'e.g. Bangladesh, USA, UK, Canada')
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-2 focus:ring-emerald-100 text-sm font-medium bg-white"
                  />
                </div>
                <p className="mt-1.5 text-[11px] text-slate-500">
                  {formData.originType === 'outside_india'
                    ? (isBengali ? 'আন্তর্জাতিক পর্যটকদের ক্ষেত্রে বিশেষ ফরেস্ট পারমিট গাইডলাইন প্রযোজ্য।' : 'International guests may require custom forest permit documentation.')
                    : (isBengali ? 'সঠিক পিকআপ পয়েন্ট ও গাইড সমন্বয়ের সুবিধার্থে ব্যবহৃত হয়।' : 'Helps us coordinate pickup logistics and regional guide assistance.')}
                </p>
              </div>
            </div>
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
      <div className="space-y-5 pt-4 border-t border-slate-100">
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading flex items-center gap-2">
          <Users className="w-4 h-4 text-[#064E3B]" />
          <span>{isBengali ? '৩. ভ্রমণের ধরন, অতিথি সংখ্যা ও পিকআপ' : '3. Tour Group, Guests & Pickup'}</span>
        </h4>

        {/* Travel Companion / Group Type: ফ্যামিলি ,কাপেল ,বন্ধু ,বান্ধবী */}
        <div className="bg-gradient-to-b from-slate-50/90 to-emerald-50/30 border border-slate-200/90 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <label className="text-xs font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
              <span>{isBengali ? 'ভ্রমণের ধরন ও সঙ্গী নির্বাচন করুন *' : 'Select Tour Group Type *'}</span>
              <span className="text-emerald-700 font-normal">
                ({isBengali ? 'ফ্যামিলি / কাপেল / বন্ধু / বান্ধবী' : 'Family / Couple / Friends / Girls Trip'})
              </span>
            </label>
            <span className="text-[11px] text-slate-500 font-medium">
              {isBengali ? 'সঠিক রুম ও ব্যবস্থাপনা সাজাতে সহায়ক' : 'Helps us arrange custom rooms & care'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {[
              {
                id: 'family',
                labelBn: 'ফ্যামিলি',
                labelEn: 'Family',
                subBn: 'পারিবারিক সফর',
                subEn: 'Family Tour',
                icon: Users,
                activeBorder: 'border-emerald-600 ring-2 ring-emerald-600/20 bg-emerald-50/90 text-emerald-950',
                badgeBg: 'bg-emerald-700 text-white',
              },
              {
                id: 'couple',
                labelBn: 'কাপেল',
                labelEn: 'Couple',
                subBn: 'রোমান্টিক সফর',
                subEn: 'Honeymoon / Couple',
                icon: Heart,
                activeBorder: 'border-rose-600 ring-2 ring-rose-600/20 bg-rose-50/90 text-rose-950',
                badgeBg: 'bg-rose-600 text-white',
              },
              {
                id: 'friends',
                labelBn: 'বন্ধু',
                labelEn: 'Friends',
                subBn: 'বন্ধু-বান্ধব গ্রুপ',
                subEn: 'Friends Group',
                icon: Smile,
                activeBorder: 'border-amber-600 ring-2 ring-amber-600/20 bg-amber-50/90 text-amber-950',
                badgeBg: 'bg-amber-600 text-white',
              },
              {
                id: 'female-friends',
                labelBn: 'বান্ধবী',
                labelEn: 'Female Friends',
                subBn: 'বান্ধবী / গার্লস গ্রুপ',
                subEn: 'Girls Group',
                icon: Sparkles,
                activeBorder: 'border-purple-600 ring-2 ring-purple-600/20 bg-purple-50/90 text-purple-950',
                badgeBg: 'bg-purple-600 text-white',
              },
            ].map(item => {
              const isSelected = formData.groupType === item.id;
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      groupType: item.id as any,
                      adultsCount: item.id === 'couple' && prev.adultsCount === 1 ? 2 : prev.adultsCount,
                      roomSharing: item.id === 'couple' ? 'double' : prev.roomSharing,
                    }));
                  }}
                  className={`p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? item.activeBorder
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected ? item.badgeBg : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${item.badgeBg}`}>
                        ✓
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-bold tracking-tight">
                      {isBengali ? item.labelBn : item.labelEn}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {isBengali ? item.subBn : item.subEn}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Contextual Assurance for the Selected Companion Type */}
          <div className="text-[11px] text-slate-700 bg-white/90 p-2.5 rounded-xl border border-slate-200/80 flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>
              {formData.groupType === 'couple' &&
                (isBengali
                  ? 'কাপেল প্যাকেজ: রিভারভিউ ওয়াটারফ্রন্ট প্রাইভেট কটেজ, নিরিবিলি পরিবেশ, বিশেষ কেয়ার ও রোমান্টিক ডেক অভিজ্ঞতা।'
                  : 'Couple Package: Riverfront private cottage, peaceful privacy, special care & romantic deck views.')}
              {formData.groupType === 'family' &&
                (isBengali
                  ? 'পারিবারিক প্যাকেজ: বয়োজ্যেষ্ঠ ও শিশুদের সুরক্ষায় লাইফজ্যাকেট, প্রশস্ত ফ্যামিলি কটেজ ও ঘরোয়া টাটকা খাবার।'
                  : 'Family Package: Safety lifejackets for seniors & kids, spacious family cottages & fresh homely food.')}
              {formData.groupType === 'friends' &&
                (isBengali
                  ? 'বন্ধু গ্রুপ: অ্যাডভেঞ্চার ক্রুজ সাফারি, বোট ডেকে সানসেট আড্ডা, মিউজিক ও রোমাঞ্চকর সুন্দরবন ট্রেইল।'
                  : 'Friends Group: Thrilling wildlife boat cruise, deck sunset hangout & mangrove exploration.')}
              {formData.groupType === 'female-friends' &&
                (isBengali
                  ? 'বান্ধবী / গার্লস গ্রুপ: ১০০% নিরাপদ ও ভেরিফাইড স্থানীয় কর্মী, সর্বোচ্চ প্রাইভেসি, নারী ভ্রমণবান্ধব কটেজ ও ফটোশুট।'
                  : 'Female Friends / Girls Trip: 100% safe verified crew, complete privacy, woman-friendly cottages & photo ops.')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5 tracking-tight">
              {isBengali ? 'প্রাপ্তবয়স্ক অতিথি (18+ বছর)' : 'Adults (18+ Years)'}
            </label>
            <input
              type="number"
              min={1}
              max={50}
              value={formData.adultsCount}
              onChange={e => setFormData({ ...formData, adultsCount: Number(e.target.value) })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] text-sm font-medium text-slate-900 bg-white transition-colors"
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
              {isBengali ? 'পিকআপ পয়েন্ট *' : 'Pickup Point *'}
            </label>
            <select
              value={formData.pickupPoint}
              onChange={e => setFormData({ ...formData, pickupPoint: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-2 focus:ring-emerald-100 text-sm font-medium text-slate-900 bg-white transition-colors cursor-pointer shadow-xs"
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
            </select>
          </div>
        </div>
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
            {isDayTour ? (
              <div className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 text-xs font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{isBengali ? 'একদিনের ডে সাফারি (রাত্রিযাপন নেই)' : 'Day Safari (No overnight stay)'}</span>
              </div>
            ) : (
              <select
                value={formData.roomType}
                onChange={e => setFormData({ ...formData, roomType: e.target.value as any })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white"
              >
                <option value="ac">{isBengali ? 'এসি কটেজ / ডিলাক্স (প্যাকেজে অন্তর্ভুক্ত)' : 'AC Cottage / Deluxe (Included in Package)'}</option>
                <option value="non-ac">{isBengali ? 'নন-এসি বাজেট কটেজ (-₹৫০০)' : 'Non-AC Budget Cottage (-₹500)'}</option>
                <option value="luxury-suite">{isBengali ? 'লাক্সারি রিভারভিউ সুইট (+₹১২০০)' : 'Luxury Riverview Suite (+₹1200)'}</option>
              </select>
            )}
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

      {/* Live Cost Breakdown & Guarantee Lockup */}
      <div className="bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50/50 rounded-2xl p-5 sm:p-6 border border-emerald-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-emerald-100">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-950 font-heading">
              {isBengali ? 'প্যাকেজ মূল্য বিবরণী ও বুকিং হিসাব' : 'Fare Breakdown & Exact Rate Transparency'}
            </span>
          </div>
          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            {isBengali ? '✓ প্যাকেজ মূল্যের সাথে ১০০% মিল' : '✓ 100% Matches Package Fare'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="space-y-2 bg-white/70 p-3.5 rounded-xl border border-emerald-100/70">
            <div className="flex items-center justify-between text-slate-600">
              <span>{isBengali ? 'নির্বাচিত প্যাকেজ:' : 'Selected Package:'}</span>
              <span className="font-semibold text-slate-900 text-right max-w-[180px] truncate" title={selectedPkg.title[language]}>
                {selectedPkg.title[language]}
              </span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>{isBengali ? 'প্যাকেজ মূল রেট:' : 'Package Base Rate:'}</span>
              <span className="font-bold text-emerald-800 text-sm">
                ₹{selectedPkg.basePrice.toLocaleString('en-IN')} / {isBengali ? 'জন' : 'person'}
              </span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>{isBengali ? 'ভ্রমণের সঙ্গী ধরন:' : 'Tour Group Type:'}</span>
              <span className="font-semibold text-emerald-900 bg-emerald-100/80 px-2 py-0.5 rounded text-[11px]">
                {formData.groupType === 'couple'
                  ? (isBengali ? 'কাপেল (রোমান্টিক)' : 'Couple')
                  : formData.groupType === 'friends'
                  ? (isBengali ? 'বন্ধু গ্রুপ' : 'Friends')
                  : formData.groupType === 'female-friends'
                  ? (isBengali ? 'বান্ধবী গ্রুপ' : 'Female Friends')
                  : (isBengali ? 'ফ্যামিলি' : 'Family')}
              </span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>{isBengali ? 'ভ্রমণকারী যাত্রী সংখ্যা:' : 'Total Travelers:'}</span>
              <span className="font-semibold text-slate-900">
                {estimate.adultsCount} {isBengali ? 'প্রাপ্তবয়স্ক' : 'Adult(s)'}
                {estimate.childrenCount > 0 && ` + ${estimate.childrenCount} ${isBengali ? 'শিশু' : 'Child'}`}
              </span>
            </div>
            {formData.idNumber && (
              <div className="flex items-center justify-between text-slate-600">
                <span>{isBengali ? 'পরিচয়পত্র:' : 'Govt ID:'}</span>
                <span className="font-semibold text-slate-800 text-[11px]">
                  {formData.idType === 'aadhaar' ? 'Aadhaar' : formData.idType === 'voter' ? 'Voter ID' : formData.idType === 'passport' ? 'Passport' : 'DL'}: {formData.idNumber}
                </span>
              </div>
            )}
            <div className="flex items-center justify-between text-slate-600">
              <span>{isBengali ? 'আগমনের অবস্থান:' : 'Origin Location:'}</span>
              <span className="font-semibold text-slate-800 text-[11px] truncate max-w-[170px]">
                {formData.originType === 'west_bengal'
                  ? (isBengali ? `পশ্চিমবঙ্গ ${formData.originStateOrCountry ? `(${formData.originStateOrCountry})` : ''}` : `West Bengal ${formData.originStateOrCountry ? `(${formData.originStateOrCountry})` : ''}`)
                  : formData.originType === 'other_state'
                  ? (isBengali ? `অন্যান্য রাজ্য ${formData.originStateOrCountry ? `(${formData.originStateOrCountry})` : ''}` : `Other State ${formData.originStateOrCountry ? `(${formData.originStateOrCountry})` : ''}`)
                  : (isBengali ? `ভারতের বাইরে ${formData.originStateOrCountry ? `(${formData.originStateOrCountry})` : ''}` : `International ${formData.originStateOrCountry ? `(${formData.originStateOrCountry})` : ''}`)}
              </span>
            </div>
          </div>

          <div className="space-y-2 bg-white/70 p-3.5 rounded-xl border border-emerald-100/70">
            <div className="flex items-center justify-between text-slate-600">
              <span>{isBengali ? 'প্রাপ্তবয়স্ক সাবটোটাল:' : 'Adults Fare Subtotal:'}</span>
              <span className="font-medium text-slate-900">
                ₹{selectedPkg.basePrice.toLocaleString('en-IN')} × {estimate.adultsCount} = ₹{(estimate.adultsCount * selectedPkg.basePrice).toLocaleString('en-IN')}
              </span>
            </div>
            {estimate.childrenCount > 0 && (
              <div className="flex items-center justify-between text-slate-600">
                <span>{isBengali ? 'শিশু সাবটোটাল (৫০% চার্জ):' : 'Children Subtotal (50%):'}</span>
                <span className="font-medium text-slate-900">
                  ₹{estimate.perChild.toLocaleString('en-IN')} × {estimate.childrenCount} = ₹{estimate.childTotal.toLocaleString('en-IN')}
                </span>
              </div>
            )}
            {formData.roomType === 'luxury-suite' && !isDayTour && (
              <div className="flex items-center justify-between text-slate-600">
                <span>{isBengali ? 'লাক্সারি রিভারভিউ সুইট:' : 'Luxury Riverview Upgrade:'}</span>
                <span className="font-medium text-slate-900">+₹1,200</span>
              </div>
            )}
            {formData.roomType === 'non-ac' && !isDayTour && (
              <div className="flex items-center justify-between text-slate-600">
                <span>{isBengali ? 'নন-এসি বাজেট কটেজ:' : 'Non-AC Budget Savings:'}</span>
                <span className="font-medium text-emerald-700">-₹500</span>
              </div>
            )}
            {formData.cameramanAddon && (
              <div className="flex items-center justify-between text-slate-600">
                <span>{isBengali ? 'ক্যামেরাম্যান ও ড্রোন ফুটেজ:' : 'Cameraman & Drone Addon:'}</span>
                <span className="font-medium text-slate-900">+₹2,500</span>
              </div>
            )}
            <div className="flex items-center justify-between pt-2 border-t border-emerald-200 text-slate-900 font-bold text-sm">
              <span>{isBengali ? 'সর্বমোট বুকিং এমাউন্ট:' : 'Total Booking Amount:'}</span>
              <span className="text-emerald-900 font-black text-lg font-heading">
                ₹{estimate.grandTotal.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-emerald-900 bg-emerald-100/70 p-2.5 rounded-xl flex items-center gap-2 border border-emerald-200/60">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>
            {isBengali
              ? 'ট্যুর প্যাকেজে উল্লেখিত রেট অনুসারে এই এমাউন্ট ধার্য করা হয়েছে। এতে বোটে খাঁটি বাঙালি আহার, অনুমোদিত সাফারি বোট, অভিজ্ঞ স্থানীয় গাইড ও সরকারি বন অনুমতি অন্তর্ভুক্ত।'
              : 'This total strictly reflects the official package pricing including all gourmet meals, cruiser safari, registered forest guide & statutory entry clearances.'}
          </span>
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
