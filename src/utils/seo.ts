import { Language, TourPackage, BlogPost } from '../types';

interface SeoMeta {
  title: string;
  description: string;
}

const upsertMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
  if (typeof document === 'undefined') return;
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertCanonicalLink = (href: string) => {
  if (typeof document === 'undefined') return;
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

export function getPageSeoMeta(
  route: string,
  lang: Language,
  activePackage?: TourPackage,
  activeBlogPost?: BlogPost
): SeoMeta {
  const isBn = lang === 'bn';

  switch (route) {
    case 'packages':
      return {
        title: isBn
          ? 'সুন্দরবন ট্যুর প্যাকেজ ও মূল্য | সুন্দরবন ভ্রমণ'
          : 'Sundarban Tour Packages & Rates | Sundarban Vromon',
        description: isBn
          ? '১ দিন, ২ দিন ১ রাত ও ৩ দিন ২ রাতের সুন্দরবন ট্যুর প্যাকেজ, বোট সাফারি, এসি/নন-এসি রিসোর্ট ও খাঁটি বাঙালি খাবারের তালিকা দেখুন।'
          : 'Explore 1-day, 1N/2D, and 2N/3D Sundarban tour packages from Kolkata & Canning with AC boat safari, forest permits, and authentic Bengali meals.',
      };
    case 'package-detail':
      if (activePackage) {
        return {
          title: `${isBn ? activePackage.title.bn : activePackage.title.en} | Sundarban Vromon`,
          description: (isBn ? activePackage.tagline.bn : activePackage.tagline.en).slice(0, 158),
        };
      }
      break;
    case 'booking':
      return {
        title: isBn
          ? 'অনলাইন বুকিং করুন — সুন্দরবন ভ্রমণ | ৫% রেফারেন্স ছাড়'
          : 'Book Sundarban Safari Online | Sundarban Vromon',
        description: isBn
          ? 'সহজেই সুন্দরবন ট্যুর বুক করুন, তাৎক্ষণিক রেফারেন্স / বিল কোড পান এবং রিসিপ্ট হোয়াটসঅ্যাপে সংগ্রহ করুন।'
          : 'Book your Sundarban boat safari online in minutes with instant reference code, transparent rates, and official bill receipt.',
      };
    case 'places':
      return {
        title: isBn
          ? 'সুন্দরবনের দর্শনীয় স্থান — সজনেখালি, সুধন্যখালি, দোবাঁকি'
          : 'Sundarban Watch Towers & Places — Sajnekhali, Dobanki',
        description: isBn
          ? 'সজনেখালি ওয়াচ টাওয়ার, সুধন্যখালি, দোবাঁকি ক্যানোপি ওয়াক, পঞ্চমুখী মোহনা ও গোসাবা দর্শনীয় স্থানের বিস্তারিত গাইড।'
          : 'Discover top Sundarban destinations including Sajnekhali, Sudhanyakhali Watch Tower, Dobanki Canopy Walk, and Gosaba heritage sites.',
      };
    case 'food':
      return {
        title: isBn
          ? 'সুন্দরবন ট্যুর খাবার মেনু — ইলিশ, চিংড়ি ও কাঁকড়া'
          : 'Sundarban Boat Safari Food Menu | Sundarban Vromon',
        description: isBn
          ? 'বোটে তৈরি গরম ভাত, ইলিশ, চিংড়ি, কাঁকড়া ও বিশুদ্ধ নিরামিষ বাঙালি খাবারের সম্পূর্ণ মেনু দেখুন।'
          : 'View our authentic freshly cooked Bengali river cruise menu featuring Hilsa, jumbo prawns, crab curry, and vegetarian options.',
      };
    case 'blog':
      return {
        title: isBn
          ? 'সুন্দরবন ভ্রমণ গাইড ও টিপস | Sundarban Vromon Blog'
          : 'Sundarban Travel Guide & Safari Tips | Sundarban Vromon',
        description: isBn
          ? 'সুন্দরবন যাওয়ার সেরা সময়, জোয়ার-ভাটা গাইড, কী কী সাথে নেবেন এবং নিরাপত্তার নিয়মাবলি জানুন।'
          : 'Read practical Sundarban travel guides, best visiting seasons, tide schedules, packing checklists, and forest permit rules.',
      };
    case 'blog-post':
      if (activeBlogPost) {
        return {
          title: `${isBn ? activeBlogPost.title.bn : activeBlogPost.title.en} | Sundarban Vromon`,
          description: (isBn ? activeBlogPost.excerpt.bn : activeBlogPost.excerpt.en).slice(0, 158),
        };
      }
      break;
    case 'reviews':
      return {
        title: isBn
          ? 'ভ্রমণকারীদের রিভিউ ও অভিজ্ঞতা | সুন্দরবন ভ্রমণ'
          : 'Guest Reviews & Ratings | Sundarban Vromon',
        description: isBn
          ? '২০১৯ সাল থেকে আমাদের সাথে সুন্দরবন ঘুরে আসা ভ্রমণকারীদের বাস্তব অভিজ্ঞতা ও মতামত পড়ুন।'
          : 'Read verified traveler reviews and safari ratings for Sundarban Vromon tours since 2019.',
      };
    case 'contact':
      return {
        title: isBn
          ? 'যোগাযোগ করুন — গোসাবা ও কলকাতা ডেস্ক | সুন্দরবন ভ্রমণ'
          : 'Contact Sundarban Vromon — Gosaba & Kolkata Desk',
        description: isBn
          ? 'সুন্দরবন ট্যুর বুকিং ও যেকোনো তথ্যের জন্য ফোন বা হোয়াটসঅ্যাপ করুন: +91 90024 13094।'
          : 'Contact Sundarban Vromon (Srikrishna Bar) at +91 90024 13094 for bookings, Godkhali pickup, and custom boat charters.',
      };
    case 'about-us':
      return {
        title: isBn
          ? 'আমাদের সম্পর্কে — সুন্দরবন ভ্রমণ (প্রতিষ্ঠাতা: শ্রীকৃষ্ণ বার)'
          : 'About Sundarban Vromon — Hosted by Srikrishna Bar',
        description: isBn
          ? '২০১৯ সাল থেকে সুন্দরবনের পরিবেশবান্ধব ও নিরাপদ নৌ-ভ্রমণ আয়োজক সুন্দরবন ভ্রমণ-এর গল্প জানুন।'
          : 'Learn about Sundarban Vromon, founded in 2019 by Srikrishna Bar in Gosaba, offering safe and authentic mangrove expeditions.',
      };
    default:
      break;
  }

  return {
    title: 'Sundarban Vromon — সুন্দরবন ভ্রমণ | Sundarban Tour Packages',
    description:
      'Book verified Sundarban tour packages with Sundarban Vromon since 2019. Boat safari, Sajnekhali, Dobanki canopy walk, authentic Bengali meals & Kolkata pickup.',
  };
}

export function applyDynamicSeo(
  route: string,
  lang: Language,
  activePackage?: TourPackage,
  activeBlogPost?: BlogPost
) {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;
  const meta = getPageSeoMeta(route, lang, activePackage, activeBlogPost);
  const currentUrl = window.location.origin + window.location.pathname + (route !== 'home' ? `?page=${route}` : '');

  document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
  document.title = meta.title;

  upsertMetaTag('name', 'description', meta.description);
  upsertMetaTag('property', 'og:title', meta.title);
  upsertMetaTag('property', 'og:description', meta.description);
  upsertMetaTag('property', 'og:url', currentUrl);
  upsertMetaTag('name', 'twitter:title', meta.title);
  upsertMetaTag('name', 'twitter:description', meta.description);
  upsertCanonicalLink(currentUrl);
}
