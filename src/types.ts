export type Language = 'bn' | 'en';

export interface BilingualText {
  bn: string;
  en: string;
}

export interface DayItinerary {
  dayNumber: number;
  title: BilingualText;
  activities: {
    time: string;
    description: BilingualText;
    highlight?: BilingualText;
  }[];
  meals: {
    breakfast?: BilingualText;
    lunch?: BilingualText;
    snacks?: BilingualText;
    dinner?: BilingualText;
  };
  stayLocation?: BilingualText;
  boatType?: BilingualText;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: BilingualText;
  tagline: BilingualText;
  durationDays: number;
  durationNights: number;
  startingPoint: BilingualText;
  endPoint: BilingualText;
  heroImage: string;
  galleryImages: string[];
  overview: BilingualText;
  shortDescription?: BilingualText;
  highlights: BilingualText[];
  itinerary: DayItinerary[];
  inclusions: BilingualText[];
  exclusions: BilingualText[];
  childPolicy: BilingualText;
  basePrice?: number;
  pricePerPersonINR?: string;
  priceNote: BilingualText;
  groupSize: BilingualText;
  bestSeason: BilingualText;
  foodType: BilingualText;
  accommodationType: BilingualText;
  isPopular?: boolean;
  isSpecialOffer?: boolean;
  offerBadge?: BilingualText;
  badge?: BilingualText;
  verificationStatus?: 'officially-verified' | 'operator-route-verified' | 'seasonal-permit-required' | string;
  sourceVerification?: string;
  lastCheckedDate?: string;
  safetyDisclaimer: BilingualText;
}

export type DestinationCategory = 'watch-tower' | 'creek' | 'river' | 'heritage' | 'conservation' | 'island' | 'sanctuary';

export interface Destination {
  id: string;
  slug: string;
  name: BilingualText;
  category: DestinationCategory;
  categoryName: BilingualText;
  shortDescription: BilingualText;
  longDescription: BilingualText;
  description?: BilingualText;
  whyVisit: BilingualText[];
  suitableFor: BilingualText;
  landscapeType: BilingualText;
  approxDuration: BilingualText;
  possibleWildlife: BilingualText[];
  photographyValue: BilingualText;
  safetyResponsibleNotes: BilingualText;
  image: string;
  isHeroFeatured?: boolean;
  verificationStatus: 'officially-verified' | 'operator-route-verified' | 'seasonal-permit-required';
  verificationSource: string;
  sourceUrl?: string;
  lastCheckedDate: string;
  relatedPackageSlugs: string[];
}

export interface FoodMenuItem {
  id: string;
  name: BilingualText;
  mealType: 'breakfast' | 'lunch' | 'snacks' | 'dinner' | 'special';
  category: 'bengali-classic' | 'seafood' | 'vegetarian' | 'seasonal';
  description: BilingualText;
  image: string;
  isVegetarian: boolean;
  isSeasonal?: boolean;
  allergens?: BilingualText;
}

export interface GalleryItem {
  id: string;
  title: BilingualText;
  caption: BilingualText;
  category: 'river' | 'mangrove' | 'wildlife' | 'boat' | 'resort' | 'food' | 'culture' | 'heritage';
  type: 'photo' | 'video';
  mediaUrl: string;
  thumbnailUrl?: string;
  isIllustration?: boolean;
  credit?: string;
  date?: string;
}

export interface YouTubeVideo {
  id: string;
  youtubeId: string;
  title: BilingualText;
  description: BilingualText;
  duration?: string;
  publishedDate?: string;
}

export interface Review {
  id: string;
  guestName: string;
  guestLocation: string;
  packageTaken: string;
  travelDate: string;
  rating: number;
  comment: BilingualText;
  isApproved: boolean;
  isVerifiedGuest: boolean;
  createdAt: string;
}

export interface BookingEnquiry {
  id: string;
  fullName: string;
  phone: string;
  whatsapp: string;
  email?: string;
  packageSlug: string;
  customTripDays?: number;
  preferredDate: string;
  isFlexibleDate: boolean;
  adultsCount: number;
  childrenCount: number;
  childrenAges?: string;
  pickupPoint: string;
  roomType: 'ac' | 'non-ac' | 'undecided';
  roomSharing: 'double' | 'triple' | 'four' | 'family-suite';
  foodPreference: 'bengali-nonveg' | 'bengali-veg' | 'jain-veg' | 'mixed';
  dietaryAllergies?: string;
  groupType?: 'family' | 'couple' | 'friends' | 'female-friends' | string;
  idType?: 'aadhaar' | 'voter' | 'passport' | 'driving_license' | string;
  idNumber?: string;
  originType?: 'west_bengal' | 'other_state' | 'outside_india' | string;
  originStateOrCountry?: string;
  cameramanAddon: boolean;
  customRequests?: string;
  status: 'pending' | 'contacted' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: BilingualText;
  excerpt: BilingualText;
  content: BilingualText;
  publishedDate: string;
  readTime: string;
  category: BilingualText;
  image: string;
  author: string;
}

export interface RiverStoryChapter {
  id: number;
  title: BilingualText;
  subtitle: BilingualText;
  body: BilingualText;
  visualCue: string;
  image: string;
  observationList: BilingualText[];
  guideTip: BilingualText;
}

export interface TripComposerState {
  days: number;
  guestsAdults: number;
  guestsChildren: number;
  pickupLocation: string;
  roomType: 'ac' | 'non-ac';
  foodPreference: 'non-veg' | 'veg';
  cameramanAddon: boolean;
  specialInterests: string[];
}
