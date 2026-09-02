import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { BRAND_INFO } from '../../data/brandInfo';

export const FloatingContactDock: React.FC = () => {
  const { isBengali } = useLanguage();

  return (
    <div
      id="floating-live-contact-dock"
      className="fixed bottom-24 right-5 z-50 flex items-center justify-center select-none"
    >
      {/* Outer Concentric Glowing Pulse Radar Waves */}
      <span className="absolute w-10 h-10 rounded-full bg-emerald-500/30 animate-radar-wave-1 pointer-events-none" />
      <span className="absolute w-10 h-10 rounded-full bg-amber-400/25 animate-radar-wave-2 pointer-events-none" />

      {/* Small Size Only Calling Logo Button */}
      <a
        id="dock-call-btn"
        href={`tel:${BRAND_INFO.phoneRaw}`}
        title={isBengali ? `সরাসরি ফোন করুন (${BRAND_INFO.phone})` : `Call Directly (${BRAND_INFO.phone})`}
        aria-label="Direct Phone Call"
        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-[#064E3B] via-[#0B5E45] to-[#043327] text-white border-2 border-amber-400/90 shadow-[0_6px_20px_rgba(6,78,59,0.5),0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.6),0_0_20px_rgba(255,215,0,0.7)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Animated Phone Icon */}
        <Phone className="w-5 h-5 text-amber-300 fill-current animate-phone-ring group-hover:text-amber-200 transition-colors" />

        {/* Live Mini Indicator Dot */}
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 animate-ping" />
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-xs" />
      </a>
    </div>
  );
};
