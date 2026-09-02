import React from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface SourceVerificationBadgeProps {
  status: 'officially-verified' | 'operator-route-verified' | 'seasonal-permit-required';
  source?: string;
  lastCheckedDate?: string;
  sourceUrl?: string;
  className?: string;
}

export const SourceVerificationBadge: React.FC<SourceVerificationBadgeProps> = ({
  status,
  source,
  lastCheckedDate,
  sourceUrl,
  className = '',
}) => {
  const { isBengali } = useLanguage();

  const getStatusConfig = () => {
    switch (status) {
      case 'officially-verified':
        return {
          bg: 'bg-emerald-50 text-emerald-900 border-emerald-300',
          icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />,
          label: isBengali ? 'বন দপ্তর ও পর্যটন বোর্ড দ্বারা যাচাইকৃত' : 'Officially Verified STR Circuit',
        };
      case 'operator-route-verified':
        return {
          bg: 'bg-cyan-50 text-cyan-950 border-cyan-300',
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700" />,
          label: isBengali ? 'মাঠপর্যায়ে পরীক্ষিত বোট রুট' : 'Field Tested Safari Route',
        };
      case 'seasonal-permit-required':
        return {
          bg: 'bg-amber-50 text-amber-950 border-amber-300',
          icon: <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />,
          label: isBengali ? 'বিশেষ মরশুমি অনুমতি আবশ্যক' : 'Seasonal Permit & Clearance Required',
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className={`inline-flex flex-col gap-1 text-xs ${className}`}>
      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-medium ${config.bg}`}>
        {config.icon}
        <span>{config.label}</span>
      </div>

      {(source || lastCheckedDate) && (
        <div className="flex items-center gap-2 text-[11px] text-slate-500 pl-1">
          {lastCheckedDate && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              <span>{isBengali ? 'সর্বশেষ যাচাই:' : 'Last verified:'} {lastCheckedDate}</span>
            </span>
          )}
          {source && (
            <span className="truncate max-w-xs text-slate-500 italic">
              • {source}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
