import React, { useState } from 'react';
import { Menu, X, ChevronDown, Compass, MapPin, Utensils, Image, Youtube, BookOpen, MessageSquare, PhoneCall, Sparkles, History, BookmarkCheck, Binoculars, Waves } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useLanguage } from '../../context/LanguageContext';
import { BRAND_INFO } from '../../data/brandInfo';

interface MainHeaderProps {
  currentRoute?: string;
  activeRoute?: string;
  onNavigate: (route: string) => void;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ currentRoute: propCurrentRoute, activeRoute, onNavigate }) => {
  const currentRoute = propCurrentRoute || activeRoute || 'home';
  const { t, language, isBengali } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [experienceDropdownOpen, setExperienceDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

  const handleNav = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setExperienceDropdownOpen(false);
    setGalleryDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-[#0A2218]/95 backdrop-blur-md border-b border-[#F59E0B]/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <button
            id="header-brand-link"
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <BrandLogo size={52} showText={true} lang={language} variant="dark" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-0.5 font-medium text-[13px] text-slate-200">
            <button
              id="nav-home"
              onClick={() => handleNav('home')}
              className={`px-2.5 py-1.5 rounded-lg transition-all ${
                currentRoute === 'home'
                  ? 'text-[#F59E0B] font-bold bg-[#143B2B] border border-amber-400/50 shadow-[0_0_10px_rgba(245,158,11,0.25)]'
                  : 'hover:text-[#FBBF24] hover:bg-[#113224]'
              }`}
            >
              {t.nav.home}
            </button>

            <button
              id="nav-packages"
              onClick={() => handleNav('packages')}
              className={`px-2.5 py-1.5 rounded-lg transition-all ${
                currentRoute.startsWith('packages')
                  ? 'text-[#F59E0B] font-bold bg-[#143B2B] border border-amber-400/50 shadow-[0_0_10px_rgba(245,158,11,0.25)]'
                  : 'hover:text-[#FBBF24] hover:bg-[#113224]'
              }`}
            >
              {t.nav.packages}
            </button>

            <button
              id="nav-places"
              onClick={() => handleNav('places')}
              className={`px-2.5 py-1.5 rounded-lg transition-all ${
                currentRoute.startsWith('places')
                  ? 'text-[#F59E0B] font-bold bg-[#143B2B] border border-amber-400/50 shadow-[0_0_10px_rgba(245,158,11,0.25)]'
                  : 'hover:text-[#FBBF24] hover:bg-[#113224]'
              }`}
            >
              {t.nav.places}
            </button>

            {/* Experience Dropdown */}
            <div className="relative">
              <button
                id="nav-experience-dropdown"
                onMouseEnter={() => setExperienceDropdownOpen(true)}
                onClick={() => setExperienceDropdownOpen(!experienceDropdownOpen)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
                  currentRoute.startsWith('experience')
                    ? 'text-[#F59E0B] font-bold bg-[#143B2B] border border-amber-400/50 shadow-[0_0_10px_rgba(245,158,11,0.25)]'
                    : 'hover:text-[#FBBF24] hover:bg-[#113224]'
                }`}
              >
                <span>{t.nav.experience}</span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
              </button>

              {experienceDropdownOpen && (
                <div
                  onMouseLeave={() => setExperienceDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-60 bg-[#0D2A1E] rounded-xl shadow-2xl border-2 border-[#F59E0B]/60 py-1.5 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <button
                    onClick={() => handleNav('experience-river-to-creek')}
                    className="w-full text-left px-3.5 py-2 hover:bg-[#154230] flex items-center gap-2 text-slate-100 hover:text-[#F59E0B]"
                  >
                    <Compass className="w-3.5 h-3.5 text-cyan-400" />
                    <div>
                      <div className="font-semibold text-xs">{t.nav.riverToCreek}</div>
                      <div className="text-[11px] text-slate-400">{isBengali ? '৯টি অধ্যায়ে সাফারি গল্প' : '9-Chapter Safari Story'}</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('experience-gosaba-heritage')}
                    className="w-full text-left px-3.5 py-2 hover:bg-[#154230] flex items-center gap-2 text-slate-100 hover:text-[#F59E0B]"
                  >
                    <History className="w-3.5 h-3.5 text-amber-400" />
                    <div>
                      <div className="font-semibold text-xs">{t.nav.gosabaHeritage}</div>
                      <div className="text-[11px] text-slate-400">{isBengali ? 'রবীন্দ্রনাথ ও হ্যামিল্টন বাংলো' : 'Tagore & Hamilton 1932'}</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('experience-sajnekhali')}
                    className="w-full text-left px-3.5 py-2 hover:bg-[#154230] flex items-center gap-2 text-slate-100 hover:text-[#F59E0B]"
                  >
                    <Binoculars className="w-3.5 h-3.5 text-emerald-400" />
                    <div>
                      <div className="font-semibold text-xs">{t.nav.sajnekhaliWatchTower}</div>
                      <div className="text-[11px] text-slate-400">{isBengali ? 'প্রকৃতি, পাখি ও ইকো-ট্যুরিজম' : 'Nature & Ecotourism Hub'}</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('experience-tides')}
                    className="w-full text-left px-3.5 py-2 hover:bg-[#154230] flex items-center gap-2 text-slate-100 hover:text-[#F59E0B] border-t border-emerald-800/60"
                  >
                    <Waves className="w-3.5 h-3.5 text-blue-400" />
                    <div>
                      <div className="font-semibold text-xs">{isBengali ? 'জোয়ার-ভাটা ও সাফারি সময়' : 'Tides & Safari Timing'}</div>
                      <div className="text-[11px] text-slate-400">{isBengali ? 'বন্যপ্রাণী ও খাঁড়ির বৈজ্ঞানিক গাইড' : 'Wildlife & Creek Timing Guide'}</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              id="nav-food"
              onClick={() => handleNav('food')}
              className={`px-2.5 py-1.5 rounded-lg transition-all ${
                currentRoute === 'food'
                  ? 'text-[#F59E0B] font-bold bg-[#143B2B] border border-amber-400/50 shadow-[0_0_10px_rgba(245,158,11,0.25)]'
                  : 'hover:text-[#FBBF24] hover:bg-[#113224]'
              }`}
            >
              {t.nav.food}
            </button>

            {/* Gallery Dropdown */}
            <div className="relative">
              <button
                id="nav-gallery-dropdown"
                onMouseEnter={() => setGalleryDropdownOpen(true)}
                onClick={() => setGalleryDropdownOpen(!galleryDropdownOpen)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
                  currentRoute.startsWith('gallery') || currentRoute === 'youtube'
                    ? 'text-[#F59E0B] font-bold bg-[#143B2B] border border-amber-400/50 shadow-[0_0_10px_rgba(245,158,11,0.25)]'
                    : 'hover:text-[#FBBF24] hover:bg-[#113224]'
                }`}
              >
                <span>{t.nav.gallery}</span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
              </button>

              {galleryDropdownOpen && (
                <div
                  onMouseLeave={() => setGalleryDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-48 bg-[#0D2A1E] rounded-xl shadow-2xl border-2 border-[#F59E0B]/60 py-1.5 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <button
                    onClick={() => handleNav('gallery-photos')}
                    className="w-full text-left px-3 py-1.5 hover:bg-[#154230] flex items-center gap-2 text-slate-100 hover:text-[#F59E0B] text-xs font-semibold"
                  >
                    <Image className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.nav.photos}</span>
                  </button>
                  <button
                    onClick={() => handleNav('youtube')}
                    className="w-full text-left px-3 py-1.5 hover:bg-[#154230] flex items-center gap-2 text-slate-100 hover:text-[#F59E0B] text-xs font-semibold"
                  >
                    <Youtube className="w-3.5 h-3.5 text-red-500" />
                    <span>{t.nav.youtube}</span>
                  </button>
                </div>
              )}
            </div>

            <button
              id="nav-plan-trip"
              onClick={() => handleNav('plan-my-trip')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all ${
                currentRoute === 'plan-my-trip'
                  ? 'text-[#F59E0B] font-bold bg-[#143B2B] border border-amber-400/50 shadow-[0_0_10px_rgba(245,158,11,0.25)]'
                  : 'hover:text-[#FBBF24] hover:bg-[#113224] text-cyan-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{t.nav.tripComposer}</span>
            </button>

            <button
              id="nav-about"
              onClick={() => handleNav('about')}
              className={`px-2.5 py-1.5 rounded-lg transition-all ${
                currentRoute === 'about'
                  ? 'text-[#F59E0B] font-bold bg-[#143B2B] border border-amber-400/50 shadow-[0_0_10px_rgba(245,158,11,0.25)]'
                  : 'hover:text-[#FBBF24] hover:bg-[#113224]'
              }`}
            >
              {t.nav.about}
            </button>

            <button
              id="nav-blog"
              onClick={() => handleNav('blog')}
              className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                currentRoute.startsWith('blog')
                  ? 'text-[#F59E0B] font-bold bg-[#143B2B] border border-amber-400/50 shadow-[0_0_10px_rgba(245,158,11,0.25)]'
                  : 'hover:text-[#FBBF24] hover:bg-[#113224]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.nav.blog}</span>
            </button>

            <button
              id="nav-contact"
              onClick={() => handleNav('contact')}
              className={`px-2.5 py-1.5 rounded-lg transition-all ${
                currentRoute === 'contact'
                  ? 'text-[#F59E0B] font-bold bg-[#143B2B] border border-amber-400/50 shadow-[0_0_10px_rgba(245,158,11,0.25)]'
                  : 'hover:text-[#FBBF24] hover:bg-[#113224]'
              }`}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-book-btn"
              onClick={() => handleNav('booking')}
              className="relative group overflow-hidden px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-black text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:from-yellow-300 hover:to-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:shadow-[0_0_25px_rgba(255,215,0,0.7)] border border-yellow-200/80 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center tracking-wide"
            >
              {/* Unique animated shimmer sheen */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
              <span className="relative z-10 font-heading">{t.nav.bookNow}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              id="mobile-book-cta"
              onClick={() => handleNav('booking')}
              className="relative group overflow-hidden px-3 py-1 text-[11px] font-black text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.4)] border border-yellow-200/80 active:scale-95 transition-all"
            >
              <span className="relative z-10 font-heading">{t.nav.bookNow}</span>
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-amber-400 hover:bg-[#143B2B] border border-amber-400/40"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A2218] border-b-2 border-[#F59E0B] px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-amber-400/20">
            <button
              onClick={() => handleNav('home')}
              className="p-2.5 rounded-xl text-left bg-[#113827] hover:bg-[#194c36] font-bold text-sm text-[#F59E0B] border border-amber-400/40"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNav('packages')}
              className="p-2.5 rounded-xl text-left bg-[#113827] hover:bg-[#194c36] font-bold text-sm text-[#F59E0B] border border-amber-400/40"
            >
              {t.nav.packages}
            </button>
            <button
              onClick={() => handleNav('places')}
              className="p-2.5 rounded-xl text-left bg-[#113827] hover:bg-[#194c36] font-bold text-sm text-[#F59E0B] border border-amber-400/40"
            >
              {t.nav.places} (২০টি স্থান)
            </button>
            <button
              onClick={() => handleNav('plan-my-trip')}
              className="p-2.5 rounded-xl text-left bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-sm flex items-center gap-1 shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.tripComposer}</span>
            </button>
          </div>

          <div className="space-y-1 text-sm font-medium text-slate-200">
            <button
              onClick={() => handleNav('experience-river-to-creek')}
              className="w-full text-left p-2.5 rounded-xl hover:bg-[#113827] flex items-center gap-2.5"
            >
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>{t.nav.riverToCreek} (৯ অধ্যায় গল্প)</span>
            </button>
            <button
              onClick={() => handleNav('experience-gosaba-heritage')}
              className="w-full text-left p-2.5 rounded-xl hover:bg-[#113827] flex items-center gap-2.5"
            >
              <History className="w-4 h-4 text-amber-400" />
              <span>{t.nav.gosabaHeritage} (রবীন্দ্রনাথ ও হ্যামিল্টন)</span>
            </button>
            <button
              onClick={() => handleNav('experience-sajnekhali')}
              className="w-full text-left p-2.5 rounded-xl hover:bg-[#113827] flex items-center gap-2.5"
            >
              <Binoculars className="w-4 h-4 text-emerald-400" />
              <span>{t.nav.sajnekhaliWatchTower} (প্রকৃতি ও পাখি)</span>
            </button>
            <button
              onClick={() => handleNav('experience-tides')}
              className="w-full text-left p-2.5 rounded-xl hover:bg-[#113827] flex items-center gap-2.5 text-blue-200"
            >
              <Waves className="w-4 h-4 text-blue-400" />
              <span>{isBengali ? 'জোয়ার-ভাটা ও সাফারি সময়' : 'Tides & Safari Timing'}</span>
            </button>
            <button
              onClick={() => handleNav('food')}
              className="w-full text-left p-2.5 rounded-xl hover:bg-[#113827] flex items-center gap-2.5"
            >
              <Utensils className="w-4 h-4 text-emerald-400" />
              <span>{t.nav.food}</span>
            </button>
            <button
              onClick={() => handleNav('gallery-photos')}
              className="w-full text-left p-2.5 rounded-xl hover:bg-[#113827] flex items-center gap-2.5"
            >
              <Image className="w-4 h-4 text-emerald-400" />
              <span>{t.nav.photos}</span>
            </button>
            <button
              onClick={() => handleNav('youtube')}
              className="w-full text-left p-2.5 rounded-xl hover:bg-[#113827] flex items-center gap-2.5"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              <span>{t.nav.youtube}</span>
            </button>
            <button
              onClick={() => handleNav('blog')}
              className={`w-full text-left p-2.5 rounded-xl flex items-center gap-2.5 transition-colors ${
                currentRoute.startsWith('blog')
                  ? 'bg-[#143B2B] text-amber-400 font-bold border border-amber-400/40'
                  : 'hover:bg-[#113827] text-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>{t.nav.blog}</span>
            </button>
            <button
              onClick={() => handleNav('reviews')}
              className="w-full text-left p-2.5 rounded-xl hover:bg-[#113827] flex items-center gap-2.5"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>{t.nav.reviews}</span>
            </button>
            <button
              onClick={() => handleNav('about')}
              className="w-full text-left p-2.5 rounded-xl hover:bg-[#113827]"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="w-full text-left p-2.5 rounded-xl hover:bg-[#113827]"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-3 border-t border-amber-400/20">
            <button
              onClick={() => handleNav('booking')}
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <Compass className="w-4 h-4" />
              <span>{t.nav.bookNow}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
