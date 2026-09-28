import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Heart, ExternalLink, Instagram, Facebook, Youtube, PhoneCall, X, Quote, Lock, FileText, CheckCircle2, Shield } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useLanguage } from '../../context/LanguageContext';
import { BRAND_INFO } from '../../data/brandInfo';
import founderOwnerPhoto from '../../assets/images/founder_optimized.jpg';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const FooterBrandLockup: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t, language, isBengali } = useLanguage();
  const [showFounderModal, setShowFounderModal] = useState(false);
  const [policyModal, setPolicyModal] = useState<'privacy' | 'terms' | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06241B] text-slate-300 border-t border-[#134435] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-900/60">
          {/* Column 1: Brand & Ethos */}
          <div className="space-y-4">
            <BrandLogo size={60} showText={true} lang={language} variant="dark" />
            <p className="text-sm text-slate-300 leading-relaxed">
              {isBengali
                ? '২০১৯ সাল থেকে সুন্দরবনের নির্ভরযোগ্য ও দায়িত্বশীল ট্যুর ও ট্রাভেল এজেন্সি। অনুমোদিত গাইড, পরিবেশবান্ধব বোট এবং খাঁটি বাঙালি আতিথেয়তা।'
                : 'Trusted and eco-conscious Sundarban tour operator since 2019. Dedicated safari cruisers, certified guides, and authentic culinary hospitality.'}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E3D2F] border border-emerald-700/40 text-xs text-amber-300">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{isBengali ? '৭+ বছরের মাঠপর্যায়ের বিশ্বস্ত অভিজ্ঞতা' : '7+ Years Field Experience'}</span>
            </div>

            {/* Founder & Owner Badge (Small Size) - Click opens profile */}
            <div id="footer-founder-badge" className="pt-3 border-t border-emerald-900/60">
              <div
                onClick={() => setShowFounderModal(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setShowFounderModal(true);
                  }
                }}
                className="bg-[#0A2F24] hover:bg-[#0E3D2F] p-2.5 rounded-xl border border-emerald-800/60 hover:border-amber-400/80 shadow-xs flex items-center gap-3 cursor-pointer transition-all duration-200 group text-left"
                title={isBengali ? 'ক্লিক করে প্রতিষ্ঠাতার সম্পূর্ণ পরিচিতি ও বার্তা দেখুন' : 'Click to view Founder & Owner Profile'}
              >
                <div className="relative shrink-0">
                  <img
                    src={founderOwnerPhoto}
                    alt={isBengali ? BRAND_INFO.founder.nameBn : BRAND_INFO.founder.nameEn}
                    onError={(e) => {
                      e.currentTarget.src = '/DSC_0390.JPG';
                    }}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-xl object-cover border border-amber-400/80 group-hover:border-amber-300 group-hover:scale-105 transition-all shadow-xs bg-emerald-950"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-amber-400 text-emerald-950 p-0.5 rounded-full shadow-2xs">
                    <ShieldCheck className="w-2.5 h-2.5" />
                  </div>
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                    {isBengali ? 'প্রতিষ্ঠাতা ও স্বত্বাধিকারী' : 'Founder & Owner'}
                  </span>
                  <h5 className="text-xs font-bold text-white font-heading truncate group-hover:text-amber-200 transition-colors">
                    {isBengali ? BRAND_INFO.founder.nameBn : BRAND_INFO.founder.nameEn}
                  </h5>
                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="text-[11px] font-medium text-amber-300 hover:text-amber-200 transition-colors underline underline-offset-2 flex items-center gap-1">
                      <span>{isBengali ? 'পরিচিতি দেখুন' : 'View Profile'}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                    </span>
                    <a
                      id="footer-founder-call-btn"
                      href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
                        isBengali
                          ? 'নমস্কার, সুন্দরবন ভ্রমণের প্রতিষ্ঠাতার সাথে সরাসরি কথা বলতে চাই।'
                          : 'Hello, I want to contact the founder of Sundarban Vromon directly.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden"
                      style={{ display: 'none' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <PhoneCall className="w-2.5 h-2.5" />
                      <span>{isBengali ? 'কথা বলুন' : 'Call'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 font-heading border-b border-emerald-800/80 pb-2">
              {isBengali ? 'ট্যুর ও আকর্ষণ' : 'Tours & Highlights'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="hover:text-[#F4B942] transition-colors text-left"
                >
                  {isBengali ? 'ট্যুর প্যাকেজ সমূহ (১ দিন থেকে ৪ দিন)' : 'Tour Packages (1 to 4 Days)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('places')}
                  className="hover:text-[#F4B942] transition-colors text-left"
                >
                  {isBengali ? '২০টি দর্শনীয় স্থান ও ওয়াচ টাওয়ার' : '20 Destinations & Watch Towers'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience-river-to-creek')}
                  className="hover:text-[#F4B942] transition-colors text-left"
                >
                  {isBengali ? 'নদী থেকে খাঁড়ি সাফারি অভিজ্ঞতা' : 'River to Creek Safari Narrative'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience-gosaba-heritage')}
                  className="hover:text-[#F4B942] transition-colors text-left"
                >
                  {isBengali ? 'গোসাবা ও রবীন্দ্রনাথ ঠাকুর হেরিটেজ' : 'Gosaba & Tagore Heritage (1932)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('food')}
                  className="hover:text-[#F4B942] transition-colors text-left"
                >
                  {isBengali ? 'ঐতিহ্যবাহী বাঙালি খাবার ও মেনু' : 'Bengali Cuisine & Feast Timelines'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('plan-my-trip')}
                  className="hover:text-[#F4B942] transition-colors text-left text-amber-300"
                >
                  {isBengali ? 'কাস্টম ট্রিপ কম্পোজার (কোটেশন)' : 'Custom Trip Composer'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Travel Safety & Guidelines */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 font-heading border-b border-emerald-800/80 pb-2">
              {isBengali ? 'তথ্য ও পরিবেশ সুরক্ষা' : 'Guide & Safety'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('safety')}
                  className="hover:text-[#F4B942] transition-colors text-left"
                >
                  {isBengali ? 'বন দপ্তর ও বোট নিরাপত্তা বিধি' : 'Forest Safety & River Rules'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience-tides')}
                  className="hover:text-[#F4B942] transition-colors text-left font-medium text-amber-200"
                >
                  {isBengali ? 'জোয়ার-ভাটা ও বন্যপ্রাণী সাফারি গাইড' : 'Tide Guide & Wildlife Safari Science'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-[#F4B942] transition-colors text-left"
                >
                  {isBengali ? 'যাচাইকৃত পর্যটক মতামত' : 'Verified Guest Reviews'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#F4B942] transition-colors text-left"
                >
                  {isBengali ? 'আমাদের দল ও স্থানীয় গাইড' : 'Our Team & Local Guides'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-[#F4B942] transition-colors text-left"
                >
                  {isBengali ? 'শর্তাবলী ও বাতিলকরণ নীতি' : 'Terms & Cancellation Policy'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Address */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base mb-4 font-heading border-b border-emerald-800/80 pb-2">
              {isBengali ? 'অফিস ও যোগাযোগ' : 'Office & Contact'}
            </h4>

            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="w-4 h-4 text-[#F4B942] shrink-0 mt-1" />
              <span>{isBengali ? BRAND_INFO.addressBn : BRAND_INFO.addressEn}</span>
            </div>

            <div className="flex items-center gap-2.5 text-sm">
              <Phone className="w-4 h-4 text-[#F4B942] shrink-0" />
              <a href={`tel:${BRAND_INFO.phoneRaw}`} className="hover:text-white font-medium">
                {BRAND_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-sm">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] font-medium"
              >
                +91 90024 13094 (WhatsApp)
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-sm">
              <Mail className="w-4 h-4 text-[#F4B942] shrink-0" />
              <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white truncate">
                {BRAND_INFO.email}
              </a>
            </div>

            {/* Social Media Links with Logos */}
            <div className="pt-3 border-t border-emerald-900/60">
              <span className="text-xs text-slate-400 block mb-2 font-medium">
                {isBengali ? 'সোশ্যাল মিডিয়ায় যুক্ত থাকুন:' : 'Follow Us:'}
              </span>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href={BRAND_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-md hover:scale-110 active:scale-95 transition-all"
                  title="Facebook - Sundarban Vromon"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                </a>

                {/* Instagram */}
                <a
                  href={BRAND_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white shadow-md hover:scale-110 active:scale-95 transition-all"
                  title="Instagram - @sundarbanvromon"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* YouTube */}
                <a
                  href={BRAND_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#FF0000] hover:bg-[#cc0000] text-white shadow-md hover:scale-110 active:scale-95 transition-all"
                  title="YouTube - Sundarban Vromon Official"
                >
                  <Youtube className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers & Non-Govt Notice */}
        <div className="py-6 border-b border-emerald-900/40 text-xs text-slate-400 space-y-2">
          <p className="bg-[#0A2F24] p-3 rounded-lg border border-emerald-800/40 text-slate-300">
            <strong className="text-amber-300">{isBengali ? 'আইনি ও বন দপ্তর নির্দেশিকা:' : 'Legal & Forest Disclaimer:'}</strong>{' '}
            {isBengali ? BRAND_INFO.disclaimerBn : BRAND_INFO.disclaimerEn}
          </p>
          <p className="text-slate-400 italic">
            {isBengali ? BRAND_INFO.wildlifeDisclaimerBn : BRAND_INFO.wildlifeDisclaimerEn}
          </p>
        </div>

        {/* Bottom Lockup Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <strong>Sundarban Vromon (সুন্দরবন ভ্রমণ)</strong>. {t.common.allRightsReserved}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPolicyModal('privacy')}
              className="hover:text-amber-300 transition-colors cursor-pointer text-slate-300 font-medium"
            >
              {isBengali ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
            </button>
            <button
              onClick={() => setPolicyModal('terms')}
              className="hover:text-amber-300 transition-colors cursor-pointer text-slate-300 font-medium"
            >
              {isBengali ? 'শর্তাবলী' : 'Terms of Service'}
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer text-slate-400">
              {isBengali ? 'যোগাযোগ' : 'Contact Us'}
            </button>
          </div>
        </div>
      </div>

      {/* Founder & Owner Profile Modal */}
      {showFounderModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowFounderModal(false)}
        >
          <div
            className="bg-white text-slate-900 w-full max-w-xl rounded-3xl shadow-2xl border border-emerald-800/30 overflow-hidden relative max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#06241B] via-[#064E3B] to-[#0A3D2E] text-white p-5 sm:p-6 relative shrink-0">
              <button
                type="button"
                onClick={() => setShowFounderModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src={founderOwnerPhoto}
                    alt={isBengali ? BRAND_INFO.founder.nameBn : BRAND_INFO.founder.nameEn}
                    onError={(e) => {
                      e.currentTarget.src = '/DSC_0390.JPG';
                    }}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-amber-400 shadow-md bg-emerald-950"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-amber-400 text-emerald-950 p-1 rounded-full shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="min-w-0 pr-6 space-y-1">
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest bg-amber-400/15 px-2.5 py-0.5 rounded-full inline-block border border-amber-400/30">
                    {isBengali ? 'প্রতিষ্ঠাতা ও স্বত্বাধিকারী' : 'Founder & Owner'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    {isBengali ? BRAND_INFO.founder.nameBn : BRAND_INFO.founder.nameEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-200">
                    {isBengali ? BRAND_INFO.founder.roleBn : BRAND_INFO.founder.roleEn}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-200 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{isBengali ? BRAND_INFO.founder.locationBn : BRAND_INFO.founder.locationEn}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed text-slate-700">
              {/* Founder quote / vision */}
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#064E3B]">
                  <Quote className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{isBengali ? 'প্রতিষ্ঠাতার ব্যক্তিগত বার্তা ও লক্ষ্য' : 'Founder’s Vision & Message'}</span>
                </div>
                <p className="italic text-slate-700">
                  "{isBengali ? BRAND_INFO.founder.quoteBn : BRAND_INFO.founder.quoteEn}"
                </p>
                <p className="text-slate-600 pt-1">
                  {isBengali
                    ? 'ভ্রমণের পরিকল্পনা থেকে যাতায়াত, নৌকা, থাকা, খাবার, গাইড এবং দর্শনীয় স্থান পরিদর্শন—প্রতিটি পর্যায়ে অতিথিদের পাশে থাকার চেষ্টা করি। অতিথিদের বিশ্বাস ও সন্তুষ্টিই আমাদের পথচলার সবচেয়ে বড় প্রেরণা।'
                    : 'From trip planning, transportation, boat cruising, food, lodging, and wildlife spots—we stay directly involved to ensure every traveler enjoys peace of mind.'}
                </p>
              </div>

              {/* Experience Pillars */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200/80 space-y-0.5">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide block">
                    {isBengali ? 'মাঠপর্যায়ের অভিজ্ঞতা' : 'Field Experience'}
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    {isBengali ? '৭+ বছরের প্রত্যক্ষ অভিজ্ঞতা (২০১৯ থেকে)' : '7+ Years Direct Experience (Since 2019)'}
                  </span>
                </div>
                <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200/80 space-y-0.5">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide block">
                    {isBengali ? 'নিরাপত্তা ও নীতি' : 'Safety Standard'}
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    {isBengali ? 'অনুমোদিত গাইড ও লাইসেন্সপ্রাপ্ত বোট' : 'Certified Guides & Licensed Boats'}
                  </span>
                </div>
              </div>

              {/* Direct Contact CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#064E3B] text-white font-bold text-xs hover:bg-[#08614a] transition-colors shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{isBengali ? `সরাসরি কল: ${BRAND_INFO.phone}` : `Call Direct: ${BRAND_INFO.phone}`}</span>
                </a>

                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
                    isBengali
                      ? 'নমস্কার শ্রীকৃষ্ণবাবু, সুন্দরবন ভ্রমণের ব্যাপারে আপনার সাথে সরাসরি কথা বলতে চাই।'
                      : 'Hello Mr. Srikrishna Bar, I would like to talk directly regarding Sundarban tour.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba59] transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isBengali ? 'হোয়াটসঅ্যাপে কথা বলুন' : 'Chat on WhatsApp'}</span>
                </a>
              </div>

              <div className="text-center pt-1 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setShowFounderModal(false);
                    onNavigate('about');
                  }}
                  className="text-xs text-slate-500 hover:text-[#064E3B] font-semibold underline underline-offset-2 cursor-pointer"
                >
                  {isBengali ? 'আমাদের সম্পর্কে ও অফিসিয়াল নথিপত্র সম্পূর্ণ পড়ুন →' : 'Read Full About Us & Official Documents →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy & Terms Modal (Opens directly when clicked from footer) */}
      {policyModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setPolicyModal(null)}
        >
          <div
            className="bg-white text-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-emerald-800/30 overflow-hidden relative max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#06241B] via-[#064E3B] to-[#0A3D2E] text-white p-5 sm:p-6 relative shrink-0">
              <button
                type="button"
                onClick={() => setPolicyModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                  {policyModal === 'privacy' ? (
                    <Lock className="w-5 h-5 text-amber-300" />
                  ) : (
                    <FileText className="w-5 h-5 text-amber-300" />
                  )}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                    {policyModal === 'privacy'
                      ? (isBengali ? 'তথ্য সুরক্ষা ও গোপনীয়তা' : 'Data Privacy & Protection')
                      : (isBengali ? 'স্বচ্ছ বুকিং ও আইনি বিধিমালা' : 'Booking Terms & Regulations')}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    {policyModal === 'privacy'
                      ? (isBengali ? 'গোপনীয়তা নীতি (Privacy Policy)' : 'Privacy Policy & Data Security')
                      : (isBengali ? 'শর্তাবলী ও বাতিলকরণ নীতি' : 'Terms & Conditions')}
                  </h3>
                </div>
              </div>

              {/* Tab Toggle inside modal */}
              <div className="flex items-center gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setPolicyModal('privacy')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    policyModal === 'privacy'
                      ? 'bg-amber-400 text-emerald-950 shadow-xs'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {isBengali ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
                </button>
                <button
                  type="button"
                  onClick={() => setPolicyModal('terms')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    policyModal === 'terms'
                      ? 'bg-amber-400 text-emerald-950 shadow-xs'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {isBengali ? 'শর্তাবলী ও বুকিং নীতি' : 'Terms of Service'}
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed text-slate-700">
              {policyModal === 'privacy' ? (
                <div className="space-y-4">
                  <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>{isBengali ? '১. ব্যক্তিগত তথ্য সংগ্রহ ও সংরক্ষণ' : '1. Personal Information Collection'}</span>
                    </div>
                    <p className="text-slate-700">
                      {isBengali
                        ? 'আমরা শুধুমাত্র বুকিং সমন্বয়ের জন্য অতিথির নাম, মোবাইল নম্বর, হোয়াটসঅ্যাপ নম্বর ও ইমেইল ঠিকানা গ্রহণ করি। এছাড়াও সুন্দরবন টাইগার রিজার্ভের (STR) অফিসিয়াল এন্ট্রি পারমিট ও হোটেল রেজিস্ট্রেশনের জন্য সরকারি পরিচয়পত্র (আধার, ভোটার, পাসপোর্ট বা ড্রাইভিং লাইসেন্স) সংগ্রহ করা হয়।'
                        : 'We only collect essential booking contact details including traveler name, phone number, WhatsApp, and email. Government ID proofs (Aadhaar, Voter ID, Passport, or Driving License) are requested exclusively for mandatory West Bengal Forest Department permits.'}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>{isBengali ? '২. তথ্যের ব্যবহার ও উদ্দেশ্য' : '2. Purpose and Usage'}</span>
                    </div>
                    <p className="text-slate-700">
                      {isBengali
                        ? 'সংগৃহীত তথ্য শুধুমাত্র ট্যুর প্যাকেজ বুকিং, সাফারি বোট ও রিসোর্ট কনফার্মেশন এবং জরুরি ভ্রমণ আপডেট প্রেরণে ব্যবহৃত হয়। আমরা কোনো স্প্যাম বার্তা, অবাঞ্ছিত প্রমোশনাল কল বা অননুমোদিত বিজ্ঞাপনী মেসেজ প্রেরণ করি না।'
                        : 'Information is utilized solely for safari coordination, boat and resort confirmations, and sending travel vouchers. We strictly maintain zero spam policies.'}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <Lock className="w-4 h-4 text-emerald-700" />
                      <span>{isBengali ? '৩. তৃতীয় পক্ষের সাথে শেয়ার সম্পূর্ণ নিষেধ (Zero Third-Party Sharing)' : '3. Strict Zero Third-Party Sharing'}</span>
                    </div>
                    <p className="text-slate-700">
                      {isBengali
                        ? 'অতিথিদের কোনো ব্যক্তিগত বা আর্থিক তথ্য তৃতীয় পক্ষ, বিজ্ঞাপনী প্ল্যাটফর্ম বা বাণিজ্যিক এজেন্সির কাছে বিক্রি বা হস্তান্তর করা সম্পূর্ণ নিষিদ্ধ। অনলাইন বা অফলাইন সমস্ত পেমেন্ট সরাসরি অনুমোদিত ব্যাংকিং চ্যানেল ও সিকিউর ইউপিআই গেটওয়েতে পরিচালিত হয়।'
                        : 'Selling, renting, or leasing guest contact details or payment info to third-party advertisers or agencies is strictly prohibited. All payments are processed through secure banking and UPI gateways.'}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <Shield className="w-4 h-4 text-emerald-700" />
                      <span>{isBengali ? '৪. তথ্য মুছে ফেলার অধিকার (Data Retention & Guest Rights)' : '4. Data Deletion & Guest Rights'}</span>
                    </div>
                    <p className="text-slate-700">
                      {isBengali
                        ? 'সফর সমাপ্তির পর যেকোনো অতিথি আমাদের সাথে যোগাযোগ করে তাদের সংরক্ষিত নথি ও যোগাযোগের তথ্য সিস্টেম থেকে মুছে ফেলার অনুরোধ করতে পারেন। সরকারি পারমিট অডিট রেকর্ড ছাড়া অন্য কোনো ব্যক্তিগত তথ্য দীর্ঘমেয়াদে সংরক্ষণ করা হয় না।'
                        : 'Upon tour completion, guests can contact us anytime to request permanent deletion of their stored contact information. Identity records are purged systematically.'}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>{isBengali ? '১. বুকিং ও পেমেন্ট নিয়মাবলী' : '1. Booking & Payment Terms'}</span>
                    </div>
                    <ul className="text-slate-700 space-y-1 list-disc list-inside">
                      <li>{isBengali ? 'বুকিং নিশ্চিত করতে মোট খরচের ২৫% অগ্রিম ডিপোজিট প্রদান করতে হবে।' : 'A 25% advance deposit of the total package cost is required to confirm booking.'}</li>
                      <li>{isBengali ? 'অবশিষ্ট ৭৫% অর্থ যাত্রা শুরুর দিন গদখালি ফেরি ঘাটে পৌঁছানোর পর নগদ বা ইউপিআই (UPI) মাধ্যমে পরিশোধযোগ্য।' : 'Remaining 75% balance is payable at Godkhali Ferry Ghat via cash or UPI.'}</li>
                      <li>{isBengali ? 'পেমেন্ট সম্পন্ন হলে তাৎক্ষণিক ডিজিটাল ই-রসিদ ও বুকিং কনফার্মেশন স্লিপ প্রদান করা হয়।' : 'Instant digital receipt and confirmation slip are provided.'}</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>{isBengali ? '২. বাতিল ও রিফান্ড নীতি' : '2. Cancellation & Refund Policy'}</span>
                    </div>
                    <ul className="text-slate-700 space-y-1 list-disc list-inside">
                      <li>{isBengali ? 'ভ্রমণের ৭ দিন বা তার বেশি পূর্বে বাতিলের ক্ষেত্রে: অগ্রিম অর্থের ৮০% ফেরতযোগ্য।' : 'Cancellation 7+ days prior: 80% of advance is refundable.'}</li>
                      <li>{isBengali ? 'ভ্রমণের ৩ থেকে ৬ দিন পূর্বে বাতিলের ক্ষেত্রে: অগ্রিম অর্থের ৫০% ফেরতযোগ্য।' : 'Cancellation 3-6 days prior: 50% of advance is refundable.'}</li>
                      <li>{isBengali ? 'ভ্রমণের ৪৮ ঘণ্টার মধ্যে বাতিলের ক্ষেত্রে: বনদপ্তরের বোট পারমিট ও হোটেল বুকিং প্রিপেমেন্টের কারণে কোনো অর্থ ফেরতযোগ্য নয়।' : 'Cancellation within 48 hours: Non-refundable due to official permit costs.'}</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>{isBengali ? '৩. আবহাওয়া ও বনদপ্তরের বিধিমালা' : '3. Weather & Forest Regulations'}</span>
                    </div>
                    <p className="text-slate-700">
                      {isBengali
                        ? 'প্রাকৃতিক দুর্যোগ, সাইক্লোন বা বন বিভাগের জরুরি নির্দেশে জলপথ বন্ধ থাকলে নিরাপত্তা বিবেচনায় রুট পুনর্নির্ধারণ করা হবে। সুন্দরবন উন্মুক্ত সংরক্ষিত বনাঞ্চল; বন্যপ্রাণী দর্শন সম্পূর্ণ প্রাকৃতিক। বোট সাফারিতে লাইফ জ্যাকেট পরিধান ও একবার ব্যবহার্য প্লাস্টিক বর্জন বাধ্যতামূলক।'
                        : 'In cases of cyclones or sudden forest waterway closures, routes will be rescheduled prioritizing safety. Wildlife sightings depend entirely on nature. Life jackets and zero single-use plastics are mandatory.'}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <FileText className="w-4 h-4 text-emerald-700" />
                      <span>{isBengali ? '৪. পরিচয়পত্র ও আচরণ বিধিমালা' : '4. ID Proof & Code of Conduct'}</span>
                    </div>
                    <p className="text-slate-700">
                      {isBengali
                        ? 'প্রত্যেক প্রাপ্তবয়স্ক যাত্রীকে সরকারি ফটো আইডি কার্ড (আধার/ভোটার/পাসপোর্ট/ড্রাইভিং লাইসেন্স) সঙ্গে রাখা বাধ্যতামূলক। বোটে ও জঙ্গলে উচ্চশব্দে লাউডস্পিকার বাজানো, নদীতে সাঁতার কাটা বা নদীতে আবর্জনা ফেলা কঠোরভাবে নিষিদ্ধ।'
                        : 'Every traveler must carry a valid government photo ID. Loudspeakers inside reserve forest, swimming in tidal waters, or littering are strictly prohibited.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    setPolicyModal(null);
                    onNavigate('about');
                  }}
                  className="text-xs text-slate-500 hover:text-[#064E3B] font-semibold underline underline-offset-2 cursor-pointer"
                >
                  {isBengali ? 'ড্রাইভ কপি ও স্বাক্ষরিত অফিসিয়াল নথি দেখুন →' : 'View Signed Official Drive Copy →'}
                </button>

                <button
                  type="button"
                  onClick={() => setPolicyModal(null)}
                  className="w-full sm:w-auto px-6 py-2 rounded-xl bg-[#064E3B] text-white font-bold text-xs hover:bg-[#08614a] transition-colors cursor-pointer"
                >
                  {isBengali ? 'বন্ধ করুন' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
