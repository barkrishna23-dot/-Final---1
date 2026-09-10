import React from 'react';
import { Phone, MessageCircle, Mail, Clock, Globe, BookmarkCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useSavedTrip } from '../../context/SavedTripContext';
import { BRAND_INFO } from '../../data/brandInfo';

interface UtilityBarProps {
  onNavigate: (route: string) => void;
}

export const UtilityBar: React.FC<UtilityBarProps> = ({ onNavigate }) => {
  const { language, setLanguage, isBengali } = useLanguage();
  const { savedPackageSlugs } = useSavedTrip();

  return (
    <div className="bg-[#0A2F24] text-[#E2E8F0] text-xs py-2 px-4 border-b border-[#183C2E]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left Side: Contact Triggers & Experience */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          <a
            id="util-phone-link"
            href={`tel:${BRAND_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-[#F4B942] transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#F4B942]" />
            <span>{BRAND_INFO.phone}</span>
          </a>

          <a
            id="util-whatsapp-link"
            href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
              isBengali
                ? 'নমস্কার! সুন্দরবন ভ্রমণ প্যাকেজ ও বুকিং সম্পর্কে জানতে চাই।'
                : 'Hello! I would like to inquire about Sundarban tour packages and availability.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors font-medium text-emerald-300"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="hidden sm:inline">WhatsApp:</span>
            <span>+91 90024 13094</span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#F4B942]" />
            <span>{isBengali ? 'সর্বদা খোলা • ২৪/৭ সাপোর্ট' : 'Always Open • 24/7 Support'}</span>
          </div>
        </div>

        {/* Right Side: Language Switcher, Saved Trip & Admin Link */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            id="util-saved-trip-btn"
            onClick={() => onNavigate('saved-trip')}
            className="flex items-center gap-1.5 hover:text-[#F4B942] transition-colors text-slate-200"
            title={isBengali ? 'সংরক্ষিত ভ্রমণ' : 'Saved Trips'}
          >
            <BookmarkCheck className="w-3.5 h-3.5 text-[#F4B942]" />
            <span className="hidden sm:inline">{isBengali ? 'সংরক্ষিত ভ্রমণ' : 'Saved'}</span>
            {savedPackageSlugs.length > 0 && (
              <span className="bg-[#F4B942] text-[#064E3B] font-bold text-[10px] px-1.5 py-0.2 rounded-full">
                {savedPackageSlugs.length}
              </span>
            )}
          </button>

          <div className="h-3 w-px bg-emerald-700/60" />

          {/* Bilingual Language Switcher */}
          <div className="flex items-center bg-[#134435] rounded-md p-0.5 border border-emerald-700/50">
            <Globe className="w-3 h-3 text-[#F4B942] ml-1.5 mr-1" />
            <button
              id="lang-btn-bn"
              onClick={() => setLanguage('bn')}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                language === 'bn'
                  ? 'bg-[#F4B942] text-[#064E3B] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              বাংলা
            </button>
            <button
              id="lang-btn-en"
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                language === 'en'
                  ? 'bg-[#F4B942] text-[#064E3B] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <button
            id="util-admin-link"
            onClick={() => onNavigate('admin')}
            className="text-[11px] text-emerald-300/80 hover:text-[#F4B942] transition-colors"
          >
            {isBengali ? 'অ্যাডমিন' : 'Admin'}
          </button>
        </div>
      </div>
    </div>
  );
};
