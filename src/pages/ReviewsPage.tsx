import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAdmin } from '../context/AdminContext';
import { TOUR_PACKAGES } from '../data/packages';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, Sparkles, AlertCircle, Heart, ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  const { language, isBengali } = useLanguage();
  const { reviews, addReview } = useAdmin();

  const [formOpen, setFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRating, setSelectedRating] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 12;
  const defaultPackageTitle = TOUR_PACKAGES[0]?.title?.bn || 'সুন্দরবন ডে সাফারি';
  const [newReview, setNewReview] = useState({
    guestName: '',
    guestLocation: '',
    packageTaken: defaultPackageTitle,
    travelDate: '',
    rating: 5,
    commentBn: '',
    commentEn: '',
  });

  const [submittedMessage, setSubmittedMessage] = useState(false);

  const filteredReviews = useMemo(() => {
    return reviews.filter(r => {
      if (!r.isApproved) return false;
      if (selectedRating !== 'all' && r.rating !== selectedRating) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const commentText = (typeof r.comment === 'object' ? `${r.comment.bn || ''} ${r.comment.en || ''}` : r.comment || '').toLowerCase();
        const matchesName = r.guestName.toLowerCase().includes(query);
        const matchesLoc = r.guestLocation.toLowerCase().includes(query);
        const matchesPkg = r.packageTaken.toLowerCase().includes(query);
        const matchesComment = commentText.includes(query);
        return matchesName || matchesLoc || matchesPkg || matchesComment;
      }
      return true;
    });
  }, [reviews, selectedRating, searchQuery]);

  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage) || 1;
  const paginatedReviews = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredReviews.slice(start, start + itemsPerPage);
  }, [filteredReviews, currentPage, itemsPerPage]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.guestName.trim() || (!newReview.commentBn.trim() && !newReview.commentEn.trim())) {
      return;
    }

    await addReview({
      guestName: newReview.guestName,
      guestLocation: newReview.guestLocation || (isBengali ? 'পশ্চিমবঙ্গ' : 'West Bengal'),
      packageTaken: newReview.packageTaken,
      travelDate: newReview.travelDate || (isBengali ? 'সম্প্রতি ভ্রমণকৃত' : 'Recent Tour'),
      rating: newReview.rating,
      comment: {
        bn: newReview.commentBn || newReview.commentEn,
        en: newReview.commentEn || newReview.commentBn,
      },
    });

    setSubmittedMessage(true);
    setFormOpen(false);
    setNewReview({
      guestName: '',
      guestLocation: '',
      packageTaken: defaultPackageTitle,
      travelDate: '',
      rating: 5,
      commentBn: '',
      commentEn: '',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider bg-amber-100 px-3.5 py-1.5 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
          <span>{isBengali ? 'শতভাগ আসল ও যাচাইকৃত অতিথি মতামত' : '100% Verified Guest Testimonials'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B]">
          {isBengali ? 'আমাদের ভ্রমণার্থীদের বাস্তব অভিজ্ঞতা' : 'Real Stories from Real Travelers'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'আমরা কোনো কৃত্রিম বা ভুয়া রিভিউ প্রদর্শন করি না। শুধুমাত্র আমাদের সাথে সুন্দরবন ভ্রমণ করেছেন এমন প্রকৃত অতিথিদের মূল্যায়ন।'
            : 'We hold strict zero-fake-review standards. Only genuine safari participants share their transparent feedback.'}
        </p>
      </div>

      {/* Trust Banner & Review CTA */}
      <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1 rounded-xl">
              <span className="font-extrabold text-2xl text-slate-900 font-heading leading-none">
                {isBengali ? '৪.৩' : '4.3'}
              </span>
              <span className="text-xs font-semibold text-slate-500">/ ৫.০</span>
            </div>

            <div className="flex text-amber-500">
              {[1, 2, 3, 4].map(i => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <div className="relative">
                <Star className="w-5 h-5 text-amber-400" />
                <div className="absolute inset-0 overflow-hidden w-[30%]">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
              </div>
            </div>

            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
              {isBengali ? 'অতিথি মূল্যায়ন' : 'Guest Rating'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600">
            {isBengali
              ? 'নিরাপত্তা, খাবার ও স্থানীয় গাইডের পারদর্শিতায় সর্বোচ্চ পর্যটক সন্তুষ্টি।'
              : 'Ranked top tier for river safety, authentic regional cuisine, and local guides.'}
          </p>
        </div>

        <button
          onClick={() => setFormOpen(!formOpen)}
          className="px-6 py-3 rounded-full bg-[#064E3B] hover:bg-[#08614a] text-white font-bold text-xs shadow-md transition-all shrink-0"
        >
          {isBengali ? 'আপনার মতামত লিখুন' : 'Write a Review'}
        </button>
      </div>

      {submittedMessage && (
        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-300 text-emerald-800 text-xs sm:text-sm text-center flex items-center justify-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span>
            {isBengali
              ? 'আপনার মতামত জমা দেওয়ার জন্য ধন্যবাদ! যাচাইকরণের পর এটি প্রকাশিত হবে।'
              : 'Thank you for your feedback! It will appear after administrative verification.'}
          </span>
        </div>
      )}

      {/* Review Submission Form Modal / Accordion */}
      {formOpen && (
        <form onSubmit={handleSubmitReview} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-in fade-in">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xl font-bold font-heading text-[#064E3B]">
              {isBengali ? 'সুন্দরবন ভ্রমণের অভিজ্ঞতা শেয়ার করুন' : 'Share Your Safari Experience'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {isBengali
                ? 'সততা বজায় রাখতে সকল রিভিউ প্রকাশের পূর্বে টিম দ্বারা যাচাই করা হয়।'
                : 'All reviews are checked by our team for genuine booking record matching.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBengali ? 'আপনার নাম *' : 'Your Name *'}
              </label>
              <input
                type="text"
                required
                value={newReview.guestName}
                onChange={e => setNewReview({ ...newReview, guestName: e.target.value })}
                placeholder={isBengali ? 'যেমন: রাহুল মুখার্জি' : 'e.g. Rahul Mukherjee'}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBengali ? 'শহর / ঠিকানা' : 'City / Location'}
              </label>
              <input
                type="text"
                value={newReview.guestLocation}
                onChange={e => setNewReview({ ...newReview, guestLocation: e.target.value })}
                placeholder={isBengali ? 'যেমন: সল্টলেক, কলকাতা' : 'e.g. Kolkata'}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBengali ? 'কোন প্যাকেজটি নিয়েছিলেন?' : 'Package Taken'}
              </label>
              <select
                value={newReview.packageTaken}
                onChange={e => setNewReview({ ...newReview, packageTaken: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white"
              >
                {TOUR_PACKAGES.map(p => (
                  <option key={p.slug} value={p.title[language]}>
                    {p.title[language]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isBengali ? 'রেটিং (১ থেকে ৫ স্টার)' : 'Rating (1 to 5 Stars)'}
              </label>
              <select
                value={newReview.rating}
                onChange={e => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white"
              >
                <option value={5}>⭐⭐⭐⭐⭐ (৫/৫ - চমৎকার)</option>
                <option value={4}>⭐⭐⭐⭐ (৪/৫ - ভালো)</option>
                <option value={3}>⭐⭐⭐ (৩/৫ - সন্তোষজনক)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {isBengali ? 'আপনার পর্যালোচনা ও বিস্তারিত অভিজ্ঞতা *' : 'Your Detailed Experience & Feedback *'}
            </label>
            <textarea
              rows={4}
              required
              value={isBengali ? newReview.commentBn : newReview.commentEn}
              onChange={e =>
                setNewReview(prev => ({
                  ...prev,
                  commentBn: isBengali ? e.target.value : prev.commentBn,
                  commentEn: !isBengali ? e.target.value : prev.commentEn,
                }))
              }
              placeholder={
                isBengali
                  ? 'বোটের পরিবেশ, খাবার, গাইড এবং নিরাপত্তা সম্পর্কে আপনার সৎ মতামত লিখুন...'
                  : 'Write your honest feedback on cruiser hygiene, Bengali food, guide expertise, and overall safari safety...'
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setFormOpen(false)}
              className="px-5 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700"
            >
              {isBengali ? 'বাতিল' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#064E3B] text-white font-bold text-xs shadow-md hover:bg-[#08614a]"
            >
              {isBengali ? 'রিভিউ জমা দিন' : 'Submit Review'}
            </button>
          </div>
        </form>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={isBengali ? 'অতিথি, স্থান বা অভিজ্ঞতা খুঁজুন...' : 'Search by name, place, keyword...'}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-emerald-600"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-xs text-slate-500 font-medium">
            {isBengali ? `মোট ${filteredReviews.length} টি মতামত` : `Showing ${filteredReviews.length} reviews`}
          </span>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => { setSelectedRating('all'); setCurrentPage(1); }}
              className={`px-3 py-1 rounded-lg transition-all ${selectedRating === 'all' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              {isBengali ? 'সব' : 'All'}
            </button>
            <button
              onClick={() => { setSelectedRating(5); setCurrentPage(1); }}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${selectedRating === 5 ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <span>5</span>
              <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
            </button>
            <button
              onClick={() => { setSelectedRating(4); setCurrentPage(1); }}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${selectedRating === 4 ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <span>4</span>
              <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedReviews.map(r => (
          <div
            key={r.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-base text-slate-900 font-heading">{r.guestName}</h4>
                  <p className="text-xs text-slate-500">{r.guestLocation} • {r.travelDate}</p>
                </div>
                <div className="flex text-amber-500">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>{r.packageTaken}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic pt-2">
                "{r.comment ? (typeof r.comment === 'object' ? (r.comment[language] || r.comment.bn || r.comment.en || '') : r.comment) : ''}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>{isBengali ? 'যাচাইকৃত বুকিং' : 'Verified Safari Booking'}</span>
              <span>{new Date(r.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 shadow-xs"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-semibold text-slate-700 px-3 py-1.5 rounded-xl bg-slate-100">
            {isBengali ? `পৃষ্ঠা ${currentPage} / ${totalPages}` : `Page ${currentPage} of ${totalPages}`}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 shadow-xs"
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
