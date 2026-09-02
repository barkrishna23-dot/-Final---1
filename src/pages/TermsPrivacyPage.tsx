import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_INFO } from '../data/brandInfo';
import { ShieldCheck, FileText, Phone, Mail, MapPin } from 'lucide-react';

export const TermsPrivacyPage: React.FC = () => {
  const { language, isBengali } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-heading text-[#064E3B]">
          {isBengali ? 'বুকিং নীতি, শর্তাবলী ও গোপনীয়তা' : 'Booking Terms, Cancellation Policy & Privacy'}
        </h1>
        <p className="text-xs text-slate-500">Last updated: January 2026 • Sundarban Vromon</p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900">
            ১. বুকিং ও পেমেন্ট নিয়মাবলী (Booking & Payments)
          </h2>
          <p>
            - বুকিং নিশ্চিত করতে মোট খরচের ২৫% অগ্রিম ডিপোজিট প্রদান করতে হবে।
            <br />- অবশিষ্ট ৭৫% যাত্রা শুরুর দিন গদখালি ফেরি ঘাটে পৌঁছানোর পর নগদ বা ইউপিআই (UPI) মাধ্যমে পরিশোধযোগ্য।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900">
            ২. বাতিল ও ফেরত নীতি (Cancellation & Refund Policy)
          </h2>
          <p>
            - ভ্রমণের ৭ দিন আগে বাতিলের ক্ষেত্রে: ৮০% অগ্রিম অর্থ ফেরতযোগ্য।
            <br />- ভ্রমণের ৩ থেকে ৬ দিন আগে বাতিলের ক্ষেত্রে: ৫০% ফেরতযোগ্য।
            <br />- ভ্রমণের ৪৮ ঘণ্টার মধ্যে বাতিলের ক্ষেত্রে: অগ্রিম অর্থ ফেরতযোগ্য নয় (বন দপ্তরের পারমিট ফি ফেরত হয় না)।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900">
            ৩. বন দপ্তর ও আবহাওয়া সংক্রান্ত বিধিনিষেধ (Force Majeure)
          </h2>
          <p>
            - সাইক্লোন, ঝড়বৃষ্টি বা বন বিভাগের আকস্মিক নির্দেশনার কারণে কোনো জলপথ বন্ধ থাকলে বিকল্প রুট নির্ধারণ করা হবে।
            <br />- বাঘ দেখার কোনো লিখিত নিশ্চয়তা দেওয়া হয় না কারণ এটি একটি প্রাকৃতিক উন্মুক্ত অরণ্য।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900">
            ৪. তথ্য সুরক্ষা ও গোপনীয়তা (Data Privacy)
          </h2>
          <p>
            - অতিথিদের পরিচয়পত্র ও যোগাযোগের তথ্য শুধুমাত্র বন বিভাগের সরকারি পারমিট ইস্যুর জন্য ব্যবহৃত হয়। কোনো তৃতীয় পক্ষের কাছে এটি শেয়ার বা বিক্রয় করা হয় না।
          </p>
        </section>
      </div>
    </div>
  );
};
