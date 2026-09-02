import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAdmin } from '../context/AdminContext';
import { BRAND_INFO } from '../data/brandInfo';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, ShieldCheck, Instagram, Facebook, Youtube } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { language, isBengali } = useLanguage();
  const { addEnquiry } = useAdmin();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    await addEnquiry({
      packageSlug: 'General Inquiry',
      travelDate: 'TBD',
      adults: 2,
      children: 0,
      pickupPoint: 'Direct Contact',
      roomType: 'ac',
      guestName: formData.name,
      guestPhone: formData.phone,
      guestEmail: formData.email,
      specialRequests: formData.message,
      calculatedEstimatedCost: 0,
    });

    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-[#E6F4EA] px-3.5 py-1.5 rounded-full">
          <MessageCircle className="w-3.5 h-3.5 text-[#F4B942]" />
          <span>{isBengali ? '২৪ ঘণ্টা সহায়তা ও পরামর্শ' : '24/7 Helpline & Booking Desk'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B]">
          {isBengali ? 'যোগাযোগ ও বুকিং হেল্পলাইন' : 'Get in Touch with Our Delta Team'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'ট্যুর প্যাকেজ, পারমিট নিয়মাবলী বা কাস্টম চার্টার সম্পর্কে যেকোনো তথ্যের জন্য সরাসরি কল বা মেসেজ করুন।'
            : 'Speak directly with our local river coordinators for instant date availability and route counseling.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left 5 Cols: Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Connect Card */}
          <div className="bg-[#06241B] text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-emerald-900 shadow-xl">
            <h3 className="text-xl font-bold font-heading text-white">
              {isBengali ? 'সরাসরি হেল্পলাইন' : 'Direct Helpline Channels'}
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all text-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4B942] text-[#064E3B] flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-300 block">{isBengali ? 'ফোন করুন (২৪/৭)' : 'Call 24/7'}</span>
                  <strong className="text-sm sm:text-base font-heading">{BRAND_INFO.phone}</strong>
                </div>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Sundarban Vromon, I have an inquiry.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 transition-all text-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center font-bold">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-emerald-300 block">{isBengali ? 'হোয়াটসঅ্যাপ চ্যাট' : 'WhatsApp Support'}</span>
                  <strong className="text-sm sm:text-base font-heading">{BRAND_INFO.whatsappDisplay}</strong>
                </div>
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all text-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-300 block">{isBengali ? 'ইমেইল করুন' : 'Email Us'}</span>
                  <strong className="text-xs sm:text-sm font-heading">{BRAND_INFO.email}</strong>
                </div>
              </a>

              {/* Social Channels with Logos */}
              <div className="pt-3 border-t border-emerald-800/60">
                <span className="text-xs text-slate-300 block mb-2.5 font-medium">
                  {isBengali ? 'আমাদের সোশ্যাল হ্যান্ডেল সমূহ:' : 'Follow Our Social Channels:'}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={BRAND_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2]/40 border border-[#1877F2]/50 text-white text-xs font-semibold transition-all hover:scale-105"
                  >
                    <Facebook className="w-4 h-4 fill-current text-[#1877F2]" />
                    <span>FB</span>
                  </a>

                  <a
                    href={BRAND_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#E1306C]/20 hover:bg-[#E1306C]/40 border border-[#E1306C]/50 text-white text-xs font-semibold transition-all hover:scale-105"
                  >
                    <Instagram className="w-4 h-4 text-[#E1306C]" />
                    <span>Insta</span>
                  </a>

                  <a
                    href={BRAND_INFO.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#FF0000]/20 hover:bg-[#FF0000]/40 border border-[#FF0000]/50 text-white text-xs font-semibold transition-all hover:scale-105"
                  >
                    <Youtube className="w-4 h-4 fill-current text-[#FF0000]" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="space-y-1">
              <strong className="text-slate-900 text-sm block font-heading">
                {isBengali ? 'কলকাতা অফিস:' : 'Kolkata Office:'}
              </strong>
              <p className="text-xs text-slate-600">{BRAND_INFO.locations.kolkataOffice}</p>
            </div>
            <div className="space-y-1 pt-3 border-t border-slate-100">
              <strong className="text-slate-900 text-sm block font-heading">
                {isBengali ? 'গদখালি ফিল্ড ডেস্ক:' : 'Godkhali Jetty Desk:'}
              </strong>
              <p className="text-xs text-slate-600">{BRAND_INFO.locations.godkhaliDesk}</p>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#064E3B] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                {isBengali ? 'বার্তা সফলভাবে পাঠানো হয়েছে!' : 'Message Received!'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                {isBengali
                  ? 'আমাদের প্রতিনিধি দ্রুত আপনার সাথে ফোনে বা হোয়াটসঅ্যাপে যোগাযোগ করবেন।'
                  : 'Our safari coordinator will connect with you via phone or WhatsApp shortly.'}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-[#064E3B] text-white font-bold text-xs shadow-md"
              >
                {isBengali ? 'আরেকটি বার্তা পাঠান' : 'Send Another Message'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-[#064E3B]">
                  {isBengali ? 'অনলাইন বার্তা ও অনুসন্ধান ফর্ম' : 'Send an Instant Message'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {isBengali
                    ? 'ফর্মটি পূরণ করলে আমরা ৩০ মিনিটের মধ্যে উত্তর দিই।'
                    : 'Fill out this quick form for prompt callback within 30 minutes.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBengali ? 'আপনার পুরো নাম *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isBengali ? 'যেমন: সুব্রত সেন' : 'e.g. Subrata Sen'}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBengali ? 'মোবাইল নম্বর *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBengali ? 'ইমেইল ঠিকানা' : 'Email Address'}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBengali ? 'আপনার বার্তা বা প্রশ্ন *' : 'Your Message / Inquiry *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    isBengali
                      ? 'ভ্রমণের তারিখ, সম্ভাব্য অতিথির সংখ্যা বা যেকোনো বিশেষ প্রশ্ন লিখুন...'
                      : 'Share your tentative dates, group size, or questions...'
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#064E3B] hover:bg-[#08614a] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isBengali ? 'বার্তা পাঠান' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
