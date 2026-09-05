/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SavedTripProvider } from './context/SavedTripContext';
import { AdminProvider } from './context/AdminContext';

// Common Components
import { UtilityBar } from './components/common/UtilityBar';
import { MainHeader } from './components/common/MainHeader';
import { FooterBrandLockup } from './components/common/FooterBrandLockup';
import { FloatingContactDock } from './components/common/FloatingContactDock';

// Pages
import { HomePage } from './pages/HomePage';
import { PackagesPage } from './pages/PackagesPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { FoodMenuPage } from './pages/FoodMenuPage';
import { RiverStoryPage } from './pages/RiverStoryPage';
import { GosabaHeritagePage } from './pages/GosabaHeritagePage';
import { SajnekhaliPage } from './pages/SajnekhaliPage';
import { PlanTripPage } from './pages/PlanTripPage';
import { GalleryPhotosPage } from './pages/GalleryPhotosPage';
import { YouTubeVideosPage } from './pages/YouTubeVideosPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { SafetyRulesPage } from './pages/SafetyRulesPage';
import { AdminPage } from './pages/AdminPage';
import { SavedTripsPage } from './pages/SavedTripsPage';
import { BookingStandalonePage } from './pages/BookingStandalonePage';
import { ContactPage } from './pages/ContactPage';
import { TermsPrivacyPage } from './pages/TermsPrivacyPage';

// Data
import { TOUR_PACKAGES } from './data/packages';
import { BLOG_POSTS } from './data/blogPosts';

const AppContent: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [selectedPackageSlug, setSelectedPackageSlug] = useState<string | null>(null);
  const [selectedDestinationSlug, setSelectedDestinationSlug] = useState<string | null>(null);
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute, selectedPackageSlug, selectedBlogSlug]);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
  };

  const handleSelectPackage = (slug: string) => {
    setSelectedPackageSlug(slug);
    setCurrentRoute('package-detail');
  };

  const handleBookNow = (slug: string) => {
    setSelectedPackageSlug(slug);
    setCurrentRoute('booking');
  };

  const handleSelectDestination = (slug: string) => {
    setSelectedDestinationSlug(slug);
    setCurrentRoute('places');
  };

  const handleSelectBlog = (slug: string) => {
    setSelectedBlogSlug(slug);
    setCurrentRoute('blog-post');
  };

  // Find active package if on package detail
  const activePackage = selectedPackageSlug
    ? TOUR_PACKAGES.find(p => p.slug === selectedPackageSlug) || TOUR_PACKAGES[0]
    : TOUR_PACKAGES[0];

  // Find active blog post
  const activeBlogPost = selectedBlogSlug
    ? BLOG_POSTS.find(b => b.slug === selectedBlogSlug) || BLOG_POSTS[0]
    : BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-transparent text-slate-900 flex flex-col font-sans selection:bg-[#F59E0B] selection:text-slate-950 relative">
      {/* 1 & 2. Unified Sticky Header (Utility Bar + Main Header together on scroll) */}
      <div className="sticky top-0 z-50">
        <UtilityBar onNavigate={handleNavigate} />
        <MainHeader currentRoute={currentRoute} onNavigate={handleNavigate} />
      </div>

      {/* 3. Primary Content View Area */}
      <main className="flex-1 relative z-10">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectPackage={handleSelectPackage}
            onSelectDestination={handleSelectDestination}
          />
        )}

        {currentRoute === 'packages' && (
          <PackagesPage
            onSelectPackage={handleSelectPackage}
            onBookNow={handleBookNow}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'package-detail' && (
          <PackageDetailPage
            pkg={activePackage}
            onBack={() => setCurrentRoute('packages')}
            onBookNow={handleBookNow}
          />
        )}

        {currentRoute === 'places' && (
          <DestinationsPage
            selectedSlug={selectedDestinationSlug}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'food' && <FoodMenuPage onNavigate={handleNavigate} />}

        {currentRoute === 'experience-river-to-creek' && (
          <RiverStoryPage onNavigate={handleNavigate} />
        )}

        {(currentRoute === 'gosaba-tagore-heritage' || currentRoute === 'experience-gosaba-heritage') && (
          <GosabaHeritagePage onNavigate={handleNavigate} />
        )}

        {(currentRoute === 'sajnekhali-watch-tower' || currentRoute === 'experience-sajnekhali') && (
          <SajnekhaliPage onNavigate={handleNavigate} />
        )}

        {currentRoute === 'plan-my-trip' && <PlanTripPage onNavigate={handleNavigate} />}

        {currentRoute === 'gallery-photos' && <GalleryPhotosPage />}

        {currentRoute === 'videos' && <YouTubeVideosPage />}

        {currentRoute === 'reviews' && <ReviewsPage />}

        {currentRoute === 'about-us' && <AboutUsPage />}

        {currentRoute === 'blog' && <BlogPage onSelectPost={handleSelectBlog} />}

        {currentRoute === 'blog-post' && (
          <BlogPostPage
            post={activeBlogPost}
            onBack={() => setCurrentRoute('blog')}
          />
        )}

        {currentRoute === 'safety-rules' && <SafetyRulesPage />}

        {currentRoute === 'admin' && <AdminPage />}

        {currentRoute === 'saved-trips' && (
          <SavedTripsPage
            onSelectPackage={handleSelectPackage}
            onBookNow={handleBookNow}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'booking' && (
          <BookingStandalonePage initialPackageSlug={selectedPackageSlug} />
        )}

        {currentRoute === 'contact' && <ContactPage />}

        {currentRoute === 'terms-privacy' && <TermsPrivacyPage />}
      </main>

      {/* 4. Comprehensive Footer Lockup */}
      <FooterBrandLockup onNavigate={handleNavigate} />

      {/* 5. Mobile & Desktop Floating Contact Dock */}
      <FloatingContactDock onNavigate={handleNavigate} />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <SavedTripProvider>
        <AdminProvider>
          <AppContent />
        </AdminProvider>
      </SavedTripProvider>
    </LanguageProvider>
  );
}
