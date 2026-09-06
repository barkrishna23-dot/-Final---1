import React from 'react';
import { BlogPost } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, User, Tag } from 'lucide-react';
import { TideGuidePage } from './TideGuidePage';
import { PackingGuideContent } from '../components/blog/PackingGuideContent';
import packingGuideHeroImg from '../assets/images/regenerated_image_1788719536998.png';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
  const { language, isBengali } = useLanguage();

  // If this is the comprehensive tides & creek safari guide, render the rich TideGuidePage
  if (post.slug === 'sundarban-tides-joar-bhata-guide' || post.id === 'b1') {
    return <TideGuidePage onNavigate={() => onBack()} />;
  }

  const isPackingGuide = post.id === 'b2' || post.slug === 'essential-packing-checklist-sundarban';
  const categoryText = typeof post.category === 'object' ? post.category[language] : post.category;
  const readTimeText = post.readTime || (post as unknown as { readingTime?: string }).readingTime || '5 min read';
  const heroImageSrc = isPackingGuide ? packingGuideHeroImg : (post.image || (post as unknown as { heroImage?: string }).heroImage);
  const tagsList: string[] = (post as unknown as { tags?: string[] }).tags || [];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#064E3B] hover:text-[#08634b] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{isBengali ? 'সকল ব্লগে ফিরে যান' : 'Back to Blog Directory'}</span>
      </button>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#064E3B] uppercase tracking-wider">
            {categoryText}
          </span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-500">{readTimeText}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 leading-tight">
          {post.title[language]}
        </h1>

        <div className="flex items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-200">
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <User className="w-3.5 h-3.5 text-[#064E3B]" />
            <span>{post.author}</span>
          </span>
          <span>{post.publishedDate}</span>
        </div>
      </div>

      {/* Hero Image */}
      {heroImageSrc && (
        <div id="blog-hero-container" className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-900">
          <img
            id="blog-post-hero-image"
            src={heroImageSrc}
            alt={typeof post.title === 'object' ? post.title[language] : post.title}
            className="w-full h-64 sm:h-96 md:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-medium drop-shadow-md pointer-events-none">
            <span className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              {isBengali ? '🌿 সুন্দরবন সাফারি প্রস্তুতি ও ভ্রমণসামগ্রী' : '🌿 Sundarban Safari Gear & Expedition Kit'}
            </span>
            <span className="hidden sm:inline-block bg-[#064E3B]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-emerald-100 border border-emerald-400/30">
              {isBengali ? 'অফিসিয়াল ট্রাভেলার গাইড' : 'Verified Safari Guide'}
            </span>
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
        <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed italic border-l-4 border-[#064E3B] pl-4">
          {post.excerpt[language]}
        </p>

        {isPackingGuide ? (
          <PackingGuideContent />
        ) : (
          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
            {post.content[language]}
          </div>
        )}

        {/* Tags */}
        {tagsList.length > 0 && (
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            {tagsList.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


