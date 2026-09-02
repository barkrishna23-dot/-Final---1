import React from 'react';
import { BlogPost } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Clock, ArrowLeft, User, Tag, Share2, Sparkles, CheckCircle2 } from 'lucide-react';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
  const { language, isBengali } = useLanguage();

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
            {post.category}
          </span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-500">{post.readingTime}</span>
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
      <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 max-h-[460px]">
        <img
          src={post.heroImage}
          alt={post.title.en}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
        <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed italic border-l-4 border-[#064E3B] pl-4">
          {post.excerpt[language]}
        </p>

        <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
          {post.content[language]}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <Tag className="w-3.5 h-3.5 text-slate-400" />
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
