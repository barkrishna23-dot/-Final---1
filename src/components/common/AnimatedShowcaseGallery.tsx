import React, { useState, useEffect, useRef } from 'react';
import {
  Plus,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Upload,
  Image as ImageIcon,
  Sparkles,
  Trash2,
  X,
  RotateCcw,
  Check,
  Film
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Default Showcase Images including the newly provided photo
import newShowcasePhoto from '../../assets/images/regenerated_image_1789032445789.jpg';
import teamPhoto from '../../assets/images/regenerated_image_1788720175291.png';
import mangroveRootsPhoto from '../../assets/images/regenerated_image_1788720995101.jpg';
import royalTigerPhoto from '../../assets/images/regenerated_image_1788721453247.webp';
import sajnekhaliPhoto from '../../assets/images/regenerated_image_1788721094482.jpg';

export interface ShowcasePhoto {
  id: string;
  url: string;
  title: { bn: string; en: string };
  caption: { bn: string; en: string };
  badge?: { bn: string; en: string };
  isCustom?: boolean;
}

const DEFAULT_PHOTOS: ShowcasePhoto[] = [
  {
    id: 'photo-1',
    url: newShowcasePhoto,
    title: {
      bn: 'সুন্দরবনের জীবন্ত শ্বাসমূল ও ম্যানগ্রোভ খাঁড়ি',
      en: 'Pristine Sundarban Mangroves & Tidal Creeks',
    },
    caption: {
      bn: 'প্রকৃতির আরও কাছে — সুন্দরবনের আরও গভীরে।',
      en: 'Closer to Nature — Deeper into Sundarbans.',
    },
    badge: {
      bn: 'সুন্দরবন ভ্রমণ ২০২৬',
      en: 'Featured Safari 2026',
    },
  },
  {
    id: 'photo-2',
    url: teamPhoto,
    title: {
      bn: 'গোসাবাভিত্তিক নিজস্ব অভিজ্ঞ দল ও বোট ক্রু',
      en: 'Gosaba-Based Dedicated Safari Guides & Crew',
    },
    caption: {
      bn: 'দক্ষ নাবিক, শেফ ও নিবন্ধিত স্থানীয় গাইডদের আন্তরিক সেবা।',
      en: 'Vetted delta navigators, certified naturalists & live galleys.',
    },
    badge: {
      bn: 'আমাদের পরিচয় ও দল',
      en: 'Our Team & Guides',
    },
  },
  {
    id: 'photo-3',
    url: mangroveRootsPhoto,
    title: {
      bn: 'সুন্দরী ও গরান গাছের বিচিত্র শ্বাসমূল',
      en: 'Ancient Sundari & Mangrove Pneumatophores',
    },
    caption: {
      bn: 'জোয়ার-ভাটার অনন্য প্রাকৃতিক সুরক্ষাব্যবস্থা।',
      en: 'Intricate ecological breathing root systems of the delta.',
    },
    badge: {
      bn: 'ম্যানগ্রোভ অরণ্য',
      en: 'Mangrove Ecology',
    },
  },
  {
    id: 'photo-4',
    url: royalTigerPhoto,
    title: {
      bn: 'রয়েল বেঙ্গল টাইগার ও দোবাঁকি ক্যানোপি সাফারি',
      en: 'Royal Bengal Tiger Habitat & Canopy Walk',
    },
    caption: {
      bn: 'নিরাপদ ক্যানোপি ওয়াকওয়ে ও বন্যপ্রাণীর প্রাকৃতিক আবাসস্থল।',
      en: 'Secured elevated walkway across deer & predator crossings.',
    },
    badge: {
      bn: 'বন্যপ্রাণী ও বাঘ',
      en: 'Wildlife Sanctuary',
    },
  },
  {
    id: 'photo-5',
    url: sajnekhaliPhoto,
    title: {
      bn: 'সজনেখালি ওয়াচ টাওয়ার, হরিণ ও পাখির মেলা',
      en: 'Sajnekhali Watch Tower & Spotted Deer',
    },
    caption: {
      bn: 'মিষ্টি জলের পুকুর ঘিরে শত শত হরিণ ও বকপাখির সমাবেশ।',
      en: 'Wetland waterholes attracting spotted deer and kingfishers.',
    },
    badge: {
      bn: 'ওয়াচ টাওয়ার স্পট',
      en: 'Watch Tower Spot',
    },
  },
];

const STORAGE_KEY = 'sv_showcase_custom_photos_v1';

interface AnimatedShowcaseGalleryProps {
  borderColorClass?: string;
  heightClass?: string;
  containerClassName?: string;
  showControls?: boolean;
}

export const AnimatedShowcaseGallery: React.FC<AnimatedShowcaseGalleryProps> = ({
  borderColorClass = 'border-emerald-950',
  heightClass = 'h-[360px] sm:h-[400px]',
  containerClassName = 'lg:col-span-5 space-y-3.5',
  showControls = false,
}) => {
  const { isBengali } = useLanguage();
  const [photos, setPhotos] = useState<ShowcasePhoto[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: ShowcasePhoto[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge custom photos after default photos
          return [...DEFAULT_PHOTOS, ...parsed];
        }
      }
    } catch (e) {
      console.error('Failed to load saved showcase photos', e);
    }
    return DEFAULT_PHOTOS;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [animationMode, setAnimationMode] = useState<'kenburns' | 'drift'>('kenburns');

  // New photo modal form state
  const [uploadMethod, setUploadMethod] = useState<'file' | 'url'>('file');
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  const [newPhotoTitleBn, setNewPhotoTitleBn] = useState('');
  const [newPhotoTitleEn, setNewPhotoTitleEn] = useState('');
  const [newPhotoCaptionBn, setNewPhotoCaptionBn] = useState('');
  const [newPhotoCaptionEn, setNewPhotoCaptionEn] = useState('');
  const [previewDataUrl, setPreviewDataUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const SLIDE_DURATION = 5500; // 5.5 seconds per slide
  const INTERVAL_STEP = 50; // update progress every 50ms

  // Auto rotation timer & progress bar
  useEffect(() => {
    if (!isPlaying || photos.length <= 1) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (INTERVAL_STEP / SLIDE_DURATION) * 100;
        if (next >= 100) {
          setCurrentIndex((idx) => (idx + 1) % photos.length);
          return 0;
        }
        return next;
      });
    }, INTERVAL_STEP);

    return () => clearInterval(interval);
  }, [isPlaying, photos.length, currentIndex]);

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleSelectIndex = (index: number) => {
    setProgress(0);
    setCurrentIndex(index);
  };

  // Handle local image file upload with compression / data url
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setErrorMessage('');
    if (!file) return;

    // Check size limit (10MB for client side storage)
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage(
        isBengali
          ? 'ছবিটির সাইজ ১০ মেগাবাইটের বেশি। অনুগ্রহ করে ছোট ছবি নির্বাচন করুন।'
          : 'File size exceeds 10MB limit. Please choose a smaller image.'
      );
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setPreviewDataUrl(result);
      if (!newPhotoTitleBn) {
        const cleanName = file.name.replace(/\.[^/.]+$/, '');
        setNewPhotoTitleBn(cleanName);
        setNewPhotoTitleEn(cleanName);
      }
    };
    reader.onerror = () => {
      setErrorMessage(
        isBengali ? 'ছবি আপলোড করতে ব্যর্থ হয়েছে।' : 'Failed to read image file.'
      );
    };
    reader.readAsDataURL(file);
  };

  // Save new photo to list and persist
  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const targetUrl = uploadMethod === 'file' ? previewDataUrl : newPhotoUrl.trim();

    if (!targetUrl) {
      setErrorMessage(
        isBengali
          ? 'অনুগ্রহ করে একটি ছবি নির্বাচন করুন অথবা ছবির লিংক দিন।'
          : 'Please select a photo file or provide an image link.'
      );
      return;
    }

    const createdPhoto: ShowcasePhoto = {
      id: `custom-photo-${Date.now()}`,
      url: targetUrl,
      title: {
        bn: newPhotoTitleBn.trim() || (isBengali ? 'নতুন সুন্দরবন ছবি' : 'New Sundarban Photo'),
        en: newPhotoTitleEn.trim() || 'New Sundarban Photo',
      },
      caption: {
        bn: newPhotoCaptionBn.trim() || (isBengali ? 'অতিথিদের দ্বারা যুক্ত ছবি' : 'Custom Added Guest Photo'),
        en: newPhotoCaptionEn.trim() || 'Custom Added Photo',
      },
      badge: {
        bn: 'আপনার যুক্ত ছবি',
        en: 'Custom Added',
      },
      isCustom: true,
    };

    const updated = [...photos, createdPhoto];
    setPhotos(updated);

    // Save only custom photos to localStorage
    try {
      const customOnly = updated.filter((p) => p.isCustom);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customOnly));
    } catch (err) {
      console.warn('Storage quota exceeded, keeping in session state', err);
    }

    // Switch to the newly added photo immediately
    setCurrentIndex(updated.length - 1);
    setProgress(0);

    // Reset modal
    setPreviewDataUrl(null);
    setNewPhotoUrl('');
    setNewPhotoTitleBn('');
    setNewPhotoTitleEn('');
    setNewPhotoCaptionBn('');
    setNewPhotoCaptionEn('');
    if (fileInputRef.current) fileInputRef.current.value = '';
    setIsModalOpen(false);
  };

  // Remove a custom photo
  const handleDeleteCustomPhoto = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = photos.filter((p) => p.id !== id);
    setPhotos(updated);
    try {
      const customOnly = updated.filter((p) => p.isCustom);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customOnly));
    } catch (err) {
      console.error(err);
    }
    if (currentIndex >= updated.length) {
      setCurrentIndex(Math.max(0, updated.length - 1));
    }
    setProgress(0);
  };

  const handleResetDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPhotos(DEFAULT_PHOTOS);
    setCurrentIndex(0);
    setProgress(0);
  };

  const currentPhoto = photos[currentIndex] || photos[0];

  return (
    <div className={containerClassName}>
      {/* 1. Main Image Showcase Frame - Exactly matches the selector hierarchy */}
      <div
        className={`relative rounded-3xl overflow-hidden shadow-xl border-4 ${borderColorClass} group bg-slate-950`}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* The Animated Image with Automatic Movement Animation */}
        <img
          id="showcase-active-photo-img"
          src={currentPhoto.url}
          alt={currentPhoto.title.en}
          className={`w-full ${heightClass} object-cover ${
            animationMode === 'kenburns' ? 'animate-ken-burns' : 'animate-ken-burns-drift'
          } transition-all duration-700 select-none`}
        />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

        {/* Top Badges and Animation Style Toggle */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
          {/* Badges */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold tracking-wide border border-white/15 shadow-sm">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>{currentPhoto.badge ? (isBengali ? currentPhoto.badge.bn : currentPhoto.badge.en) : 'Sundarban'}</span>
          </div>
        </div>

        {/* Previous & Next Floating Navigation Chevrons */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/55 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center opacity-85 group-hover:opacity-100 transition-all border border-white/20 shadow-md cursor-pointer hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/55 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center opacity-85 group-hover:opacity-100 transition-all border border-white/20 shadow-md cursor-pointer hover:scale-105"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Caption & Title Strip */}
        <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
          <div className="space-y-0.5 max-w-[85%]">
            <h4 className="text-sm sm:text-base font-bold font-heading text-white drop-shadow-md line-clamp-1 leading-snug">
              {isBengali ? currentPhoto.title.bn : currentPhoto.title.en}
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-200 drop-shadow-sm line-clamp-1">
              {isBengali ? currentPhoto.caption.bn : currentPhoto.caption.en}
            </p>
          </div>
        </div>

        {/* Golden Progress Bar along the bottom */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40 overflow-hidden pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* 2. Action & Control Header Bar (Shown where Identity / Admin is) */}
      {showControls && (
        <div className="flex items-center justify-between gap-2 px-1">
          {/* Automatic Animation Movement Indicator */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-900 bg-emerald-50/90 border border-emerald-200/80 px-3 py-1 rounded-full shadow-2xs">
            <span className="relative flex h-2 w-2">
              {isPlaying && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              )}
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-emerald-600' : 'bg-amber-500'}`} />
            </span>
            <span className="truncate text-[11.5px]">
              {isPlaying
                ? (isBengali ? 'অটোমেটিক অ্যানিমেশন মুভমেন্ট চালু' : 'Auto Movement Active')
                : (isBengali ? 'অ্যানিমেশন থামানো আছে' : 'Movement Paused')}
            </span>
            <span className="text-emerald-700 text-[11px] font-bold">
              ({currentIndex + 1}/{photos.length})
            </span>
          </div>

          {/* Movement Play/Pause Control */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? (isBengali ? 'মুভমেন্ট থামান' : 'Pause movement') : (isBengali ? 'মুভমেন্ট চালু করুন' : 'Start movement')}
              className="p-1.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 shadow-2xs transition-all flex items-center justify-center cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-slate-700 text-slate-700" />}
            </button>
          </div>
        </div>
      )}

      {/* 3. Interactive Thumbnail Carousel Strip (Shown where Identity / Admin is) */}
      {showControls && (
        <div className="flex items-center gap-2 overflow-x-auto py-1 px-0.5 no-scrollbar">
          {photos.map((photo, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={photo.id}
                onClick={() => handleSelectIndex(idx)}
                className={`relative shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'ring-2 ring-amber-400 scale-105 shadow-md'
                    : 'opacity-65 hover:opacity-100 ring-1 ring-slate-300/80 hover:ring-emerald-600'
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.title.en}
                  className="w-14 h-11 sm:w-16 sm:h-12 object-cover"
                />

                {/* Custom photo badge & delete action */}
                {photo.isCustom && (
                  <button
                    type="button"
                    onClick={(e) => handleDeleteCustomPhoto(photo.id, e)}
                    title={isBengali ? 'মুছে ফেলুন' : 'Remove photo'}
                    className="absolute top-0.5 right-0.5 p-0.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-xs transition-transform hover:scale-110"
                  >
                    <Trash2 className="w-2.5 h-2.5" />
                  </button>
                )}

                {isActive && (
                  <div className="absolute inset-0 border-2 border-amber-400 rounded-xl pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Modal for Uploading / Adding More Photos */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-900">
                  <ImageIcon className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 font-heading leading-snug">
                    {isBengali ? 'নতুন ছবি যুক্ত করুন' : 'Add New Showcase Photo'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isBengali
                      ? 'ছবি যোগ করলে এটি স্বয়ংক্রিয়ভাবে অ্যানিমেশনে যুক্ত হয়ে যাবে।'
                      : 'Added photos will automatically animate with the slideshow.'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Error banner if any */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            {/* Upload Method Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-slate-100 text-xs font-bold">
              <button
                type="button"
                onClick={() => setUploadMethod('file')}
                className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  uploadMethod === 'file'
                    ? 'bg-white text-emerald-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{isBengali ? 'ডিভাইস থেকে ফাইল নির্বাচন' : 'Upload File'}</span>
              </button>

              <button
                type="button"
                onClick={() => setUploadMethod('url')}
                className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  uploadMethod === 'url'
                    ? 'bg-white text-emerald-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{isBengali ? 'ছবির ওয়েব লিংক (URL)' : 'Image URL'}</span>
              </button>
            </div>

            {/* Upload Form */}
            <form onSubmit={handleAddPhotoSubmit} className="space-y-4">
              {uploadMethod === 'file' ? (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {isBengali ? 'ছবি নির্বাচন করুন (JPG, PNG, WEBP)' : 'Select Image (JPG, PNG, WEBP)'}
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-emerald-300 hover:border-emerald-500 bg-emerald-50/40 hover:bg-emerald-50/80 rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload className="w-8 h-8 text-emerald-700" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {previewDataUrl
                          ? (isBengali ? 'ছবি নির্বাচন করা হয়েছে (পরিবর্তন করতে ক্লিক করুন)' : 'Image selected (click to change)')
                          : (isBengali ? 'ফাইল নির্বাচন করতে এখানে ক্লিক করুন' : 'Click here to choose file')}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {isBengali ? 'সর্বোচ্চ সাইজ: ১০ মেগাবাইট' : 'Max size: 10MB'}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBengali ? 'ছবির ওয়েব লিংক (Image URL)' : 'Direct Image URL'}
                  </label>
                  <input
                    type="url"
                    value={newPhotoUrl}
                    onChange={(e) => {
                      setNewPhotoUrl(e.target.value);
                      setPreviewDataUrl(e.target.value);
                    }}
                    placeholder="https://example.com/sundarban-photo.jpg"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-emerald-600 text-xs sm:text-sm"
                  />
                </div>
              )}

              {/* Preview Thumbnail */}
              {previewDataUrl && (
                <div className="relative rounded-xl overflow-hidden h-32 w-full border border-slate-200 bg-slate-900">
                  <img
                    src={previewDataUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>{isBengali ? 'প্রিভিউ প্রস্তুত' : 'Preview Ready'}</span>
                  </div>
                </div>
              )}

              {/* Title & Caption */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBengali ? 'ছবির শিরোনাম (বাংলা)' : 'Title (Bengali)'}
                  </label>
                  <input
                    type="text"
                    value={newPhotoTitleBn}
                    onChange={(e) => setNewPhotoTitleBn(e.target.value)}
                    placeholder={isBengali ? 'যেমন: আমাদের বোট সাফারি' : 'e.g., Our Boat Safari'}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-emerald-600 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isBengali ? 'ছবির শিরোনাম (ইংরেজি - ঐচ্ছিক)' : 'Title (English - Optional)'}
                  </label>
                  <input
                    type="text"
                    value={newPhotoTitleEn}
                    onChange={(e) => setNewPhotoTitleEn(e.target.value)}
                    placeholder="e.g., Sundarban Boat Trip"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-emerald-600 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isBengali ? 'ছোট বর্ণনা / ক্যাপশন' : 'Short Caption'}
                </label>
                <input
                  type="text"
                  value={newPhotoCaptionBn}
                  onChange={(e) => setNewPhotoCaptionBn(e.target.value)}
                  placeholder={isBengali ? 'যেমন: সুন্দরবনের খাঁড়িতে অসাধারণ অভিজ্ঞতা' : 'e.g., Amazing creek safari experience'}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-emerald-600 text-xs sm:text-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
                  title={isBengali ? 'মূল ছবিগুলোতে ফিরে যান' : 'Reset to default photos'}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isBengali ? 'মূল ছবি রিসেট' : 'Reset Defaults'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors"
                  >
                    {isBengali ? 'বাতিল' : 'Cancel'}
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-[#064E3B] hover:bg-[#096049] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{isBengali ? 'গ্যালারিতে যুক্ত করুন' : 'Add to Showcase'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
