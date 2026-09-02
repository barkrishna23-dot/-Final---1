import React from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogPost } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles, User, Tag } from 'lucide-react';

interface BlogPageProps {
  onSelectPost: (slug: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectPost }) => {
  const { language, isBengali } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] uppercase tracking-wider bg-[#E6F4EA] px-3.5 py-1.5 rounded-full">
          <BookOpen className="w-3.5 h-3.5 text-[#F4B942]" />
          <span>{isBengali ? 'সুন্দরবন নির্দেশিকা ও ব্লগ' : 'Sundarban Safari Guide & Blog'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B]">
          {isBengali ? 'জোয়ার-ভাটা, প্যাকিং টিপস ও অজানা ইতিহাস' : 'Safari Advice, Tidal Science & Heritage'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'সুন্দরবন ভ্রমণের সঠিক প্রস্তুতি, ঋতুভিত্তিক আবহাওয়া, জোয়ার-ভাটার রহস্য এবং ক্যামেরায় বন্যপ্রাণী বন্দি করার অভিজ্ঞ টিপস।'
            : 'Essential guides crafted by our senior naturalists covering tidal mechanics, seasonal wildlife patterns, and historical chronicles.'}
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map(post => (
          <div
            key={post.id}
            onClick={() => onSelectPost(post.slug)}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={post.image}
                alt={post.title.en}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-xs text-white">
                {post.category[language]}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#064E3B]" />
                    <span>{post.publishedDate}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#064E3B]" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="font-bold text-lg font-heading text-slate-900 leading-snug group-hover:text-[#064E3B] transition-colors">
                  {post.title[language]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt[language]}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#064E3B]">
                <span>{isBengali ? 'সম্পূর্ণ পড়ুন' : 'Read Full Article'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
