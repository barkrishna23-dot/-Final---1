import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof TRANSLATIONS.bn;
  isBengali: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('sv_lang');
    if (saved === 'en' || saved === 'bn') return saved;
    return 'bn'; // Default to Bengali
  });

  useEffect(() => {
    localStorage.setItem('sv_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'bn' ? 'en' : 'bn'));
  };

  const t = language === 'bn' ? TRANSLATIONS.bn : TRANSLATIONS.en;
  const isBengali = language === 'bn';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isBengali }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
