import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Heart, ExternalLink, Instagram, Facebook, Youtube } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useLanguage } from '../../context/LanguageContext';
import { BRAND_INFO } from '../../data/brandInfo';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const FooterBrandLockup: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t, language, isBengali } = useLanguage();
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
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#F4B942] transition-colors text-left"
                >
                  {isBengali ? 'জোয়ার-ভাটা ও প্যাকিং গাইড' : 'Tide Schedules & Packing Guide'}
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
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">
              {isBengali ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
            </button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
              {isBengali ? 'শর্তাবলী' : 'Terms of Service'}
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              {isBengali ? 'যোগাযোগ' : 'Contact Us'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
