import React from 'react';
import { Home, ChevronRight, ArrowLeft, Compass, MapPin, Calendar, BookOpen, Utensils, MessageSquare, Shield, Info, Image, Video, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TourPackage, Destination, BlogPost } from '../../types';
import { DESTINATIONS } from '../../data/destinations';

interface BreadcrumbBarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  activePackage?: TourPackage;
  selectedDestinationSlug?: string;
  activeBlogPost?: BlogPost;
}

export const BreadcrumbBar: React.FC<BreadcrumbBarProps> = ({
  currentRoute,
  onNavigate,
  activePackage,
  selectedDestinationSlug,
  activeBlogPost,
}) => {
  const { language, isBengali } = useLanguage();

  // Do not render breadcrumb trail on home page ("মূল পাতায় থাকবে না")
  if (currentRoute === 'home') {
    return null;
  }

  // Find active destination if any
  const activeDestination = selectedDestinationSlug
    ? DESTINATIONS.find(d => d.slug === selectedDestinationSlug)
    : null;

  // Smooth scroll helper for home page sections
  const scrollToSection = (sectionId: string) => {
    if (currentRoute !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Helper to build the breadcrumb path
  const getBreadcrumbs = () => {
    const items: Array<{
      label: string;
      route?: string;
      onClick?: () => void;
      isCurrent?: boolean;
      icon?: React.ReactNode;
    }> = [
      {
        label: isBengali ? 'মূল পাতা' : 'Home',
        route: 'home',
        icon: <Home className="w-3.5 h-3.5 text-emerald-700" />,
      },
    ];

    switch (currentRoute) {
      case 'home':
        items.push({
          label: isBengali ? 'স্বাগতম • সুন্দরবন ইকো সাফারি' : 'Welcome • Eco Safari',
          isCurrent: true,
        });
        break;

      case 'packages':
        items.push({
          label: isBengali ? 'ট্যুর প্যাকেজ সমূহ' : 'Tour Packages',
          isCurrent: true,
          icon: <Calendar className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'package-detail':
        items.push({
          label: isBengali ? 'ট্যুর প্যাকেজ সমূহ' : 'Tour Packages',
          route: 'packages',
          icon: <Calendar className="w-3 h-3 text-emerald-700" />,
        });
        items.push({
          label: activePackage ? activePackage.title[language] : (isBengali ? 'প্যাকেজ বিস্তারিত' : 'Package Details'),
          isCurrent: true,
        });
        break;

      case 'places':
        items.push({
          label: isBengali ? '২০টি দর্শনীয় স্পট ও খাঁড়ি' : '20 Destinations & Creeks',
          isCurrent: !activeDestination,
          icon: <MapPin className="w-3 h-3 text-emerald-700" />,
        });
        if (activeDestination) {
          items.push({
            label: activeDestination.name[language],
            isCurrent: true,
          });
        }
        break;

      case 'food':
        items.push({
          label: isBengali ? 'খাঁটি বাঙালি ভোজ ও খাবারের তালিকা' : 'Authentic Cuisine & Menu',
          isCurrent: true,
          icon: <Utensils className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'experience-river-to-creek':
        items.push({
          label: isBengali ? 'সুন্দরবন অভিজ্ঞতা' : 'Experiences',
          route: 'home',
        });
        items.push({
          label: isBengali ? 'নদী থেকে খাঁড়ি: ৯টি রোমাঞ্চকর অধ্যায়' : 'River to Creek: 9 Chapters',
          isCurrent: true,
          icon: <Compass className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'gosaba-tagore-heritage':
      case 'experience-gosaba-heritage':
        items.push({
          label: isBengali ? 'ঐতিহাসিক পটভূমি' : 'Heritage',
          route: 'home',
        });
        items.push({
          label: isBengali ? 'রবীন্দ্রনাথ ঠাকুর ও স্যার হেমিল্টনের গোসাবা স্মৃতি' : 'Hamilton & Tagore Heritage',
          isCurrent: true,
          icon: <BookOpen className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'sajnekhali-watch-tower':
      case 'experience-sajnekhali':
        items.push({
          label: isBengali ? 'দর্শনীয় স্থান' : 'Destinations',
          route: 'places',
        });
        items.push({
          label: isBengali ? 'সজনেখালি ওয়াচ টাওয়ার ও কমপ্লেক্স' : 'Sajnekhali Watch Tower',
          isCurrent: true,
          icon: <MapPin className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'plan-my-trip':
        items.push({
          label: isBengali ? 'কাস্টম ট্যুর প্ল্যানার' : 'Custom Trip Planner',
          isCurrent: true,
          icon: <Sparkles className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'booking':
        items.push({
          label: isBengali ? 'ট্যুর প্যাকেজ' : 'Packages',
          route: 'packages',
        });
        items.push({
          label: isBengali ? 'অনলাইন বুকিং ও অনুসন্ধান' : 'Booking Enquiry',
          isCurrent: true,
          icon: <Calendar className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'reviews':
        items.push({
          label: isBengali ? 'যাচাইকৃত পর্যটক রিভিউ ও মতামত' : 'Verified Guest Reviews',
          isCurrent: true,
          icon: <MessageSquare className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'about-us':
        items.push({
          label: isBengali ? 'আমাদের পরিচয় ও অঙ্গীকার' : 'About Us & Operators',
          isCurrent: true,
          icon: <Info className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'gallery-photos':
        items.push({
          label: isBengali ? 'আসল সাফারি ফটো গ্যালারি' : 'Photo Gallery',
          isCurrent: true,
          icon: <Image className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'videos':
        items.push({
          label: isBengali ? 'সাফারি ভিডিও সম্ভার' : 'Safari Videos',
          isCurrent: true,
          icon: <Video className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'blog':
        items.push({
          label: isBengali ? 'সুন্দরবন ভ্রমণ সহায়িকা ও ব্লগ' : 'Travel Guide & Blog',
          isCurrent: true,
          icon: <BookOpen className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'blog-post':
        items.push({
          label: isBengali ? 'ভ্রমণ সহায়িকা ও ব্লগ' : 'Travel Guide',
          route: 'blog',
          icon: <BookOpen className="w-3 h-3 text-emerald-700" />,
        });
        items.push({
          label: activeBlogPost ? activeBlogPost.title[language] : (isBengali ? 'ব্লগ পোস্ট' : 'Blog Article'),
          isCurrent: true,
        });
        break;

      case 'tides-guide':
      case 'experience-tides':
      case 'sundarban-tides-joar-bhata-guide':
        items.push({
          label: isBengali ? 'জোয়ার-ভাটা সহায়িকা' : 'Tides Guide',
          isCurrent: true,
          icon: <Compass className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'safety-rules':
        items.push({
          label: isBengali ? 'বন দপ্তরের সুরক্ষা ও নিরাপত্তা বিধি' : 'Safety & Forest Guidelines',
          isCurrent: true,
          icon: <Shield className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'saved-trips':
        items.push({
          label: isBengali ? 'সংরক্ষিত ট্যুর প্যাকেজ' : 'Saved Trips',
          isCurrent: true,
          icon: <Calendar className="w-3 h-3 text-emerald-700" />,
        });
        break;

      case 'admin':
        items.push({
          label: isBengali ? 'ম্যানেজমেন্ট কন্ট্রোল প্যানেল' : 'Admin Panel',
          isCurrent: true,
          icon: <Shield className="w-3 h-3 text-emerald-700" />,
        });
        break;

      default:
        items.push({
          label: currentRoute.replace('-', ' '),
          isCurrent: true,
        });
    }

    return items;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div
      id="site-breadcrumb-trail"
      className="relative z-10 bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2 sm:py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-600 shadow-2xs transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5">
        {/* Main Breadcrumb Trail with Arrows */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center flex-wrap gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5"
        >
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <React.Fragment key={index}>
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 mx-0.5" />
                )}

                {item.isCurrent ? (
                  <span
                    className="font-bold text-[#064E3B] bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-2xs shrink-0 max-w-[280px] sm:max-w-md truncate"
                    title={item.label}
                  >
                    {item.icon}
                    <span className="truncate">{item.label}</span>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      if (item.onClick) {
                        item.onClick();
                      } else if (item.route) {
                        onNavigate(item.route);
                      }
                    }}
                    className="hover:text-[#064E3B] hover:bg-slate-100/90 px-2 py-1 rounded-md font-semibold text-slate-700 transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Right side actions / Home quick jump arrow indicators */}
        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto overflow-x-auto no-scrollbar">
          {currentRoute === 'home' ? (
            <div className="flex items-center gap-1.5 text-[11px]">
              <span className="text-slate-400 font-medium hidden lg:inline">
                {isBengali ? 'দ্রুত যান:' : 'Jump to:'}
              </span>
              <button
                type="button"
                onClick={() => scrollToSection('section-destinations')}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200/80 transition-colors cursor-pointer shrink-0"
              >
                <span>{isBengali ? 'স্পট ও ওয়াচ টাওয়ার' : 'Spots'}</span>
                <span className="text-emerald-600 font-bold">→</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('section-safari-chapters')}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200/80 transition-colors cursor-pointer shrink-0"
              >
                <span>{isBengali ? '৯-অধ্যায় সাফারি' : '9-Safari'}</span>
                <span className="text-emerald-600 font-bold">→</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('section-packages')}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200/80 transition-colors cursor-pointer shrink-0"
              >
                <span>{isBengali ? 'ট্যুর প্যাকেজ' : 'Packages'}</span>
                <span className="text-emerald-600 font-bold">→</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-[#064E3B] border border-slate-200/80 font-bold text-[11px] transition-colors cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-emerald-700" />
              <span>{isBengali ? 'মূল পাতায় ফিরুন' : 'Back to Home'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
