import React from 'react';
import { MapPin, ArrowRight, Camera, Check } from 'lucide-react';
import { Destination } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (slug: string) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onSelect }) => {
  const { language, isBengali } = useLanguage();

  const descText =
    destination.description?.[language] ||
    (destination as any).shortDesc?.[language] ||
    (destination as any).significance?.[language] ||
    '';

  const highlights = (destination.whyVisit || (destination as any).keyHighlights || []).slice(0, 2);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden animated-round-card shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Top Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={destination.heroImage || destination.image}
          alt={destination.name.en}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Bottom Title */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="text-lg sm:text-xl font-bold font-heading leading-tight truncate text-white group-hover:text-amber-300 transition-colors">
            {destination.name[language]}
          </h3>
          <p className="text-xs text-emerald-300 flex items-center gap-1 mt-0.5 font-medium">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span className="truncate">
              {destination.landscapeType ? destination.landscapeType[language] : (destination as any).locationSummary?.[language] || destination.categoryName[language]}
            </span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {descText}
        </p>

        <div className="space-y-1">
          {highlights.map((kh: any, i: number) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{kh[language] || kh}</span>
            </div>
          ))}
        </div>

        {/* Photography & Safety Badges */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          {destination.photographyValue && (
            <div className="flex items-center gap-1.5 text-xs text-cyan-800">
              <Camera className="w-3.5 h-3.5 shrink-0 text-cyan-600" />
              <span className="truncate">{destination.photographyValue[language]}</span>
            </div>
          )}
        </div>

        <button
          onClick={() => onSelect(destination.slug)}
          className="w-full mt-2 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-[#064E3B] text-emerald-900 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs"
        >
          <span>{isBengali ? 'বিস্তারিত দেখুন' : 'Explore Details'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
