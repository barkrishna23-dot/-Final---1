import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  History,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Landmark,
  Building,
  GraduationCap,
  Scale,
  Compass,
  FileCheck,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface GosabaHeritagePageProps {
  onNavigate: (route: string) => void;
}

export const GosabaHeritagePage: React.FC<GosabaHeritagePageProps> = ({ onNavigate }) => {
  const { isBengali } = useLanguage();
  const [openStepId, setOpenStepId] = useState<number | null>(1);

  const toggleStep = (id: number) => {
    setOpenStepId(prev => (prev === id ? null : id));
  };

  const steps = [
    {
      id: 1,
      badge: '১',
      titleBn: 'ঐতিহাসিক সংশোধন: হ্যামিল্টন বাংলো বনাম রবীন্দ্রনাথ ঠাকুর',
      titleEn: 'Historical Correction: Hamilton Bungalow vs Tagore',
      icon: AlertTriangle,
      color: 'amber',
      render: () => (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
            <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold">ধাপ ১</span>
            <span>{isBengali ? 'ঐতিহাসিক ফ্যাক্ট চেক ও মূল সংশোধন' : 'Historical Fact Check & Clarification'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#064E3B]">
            {isBengali ? 'হ্যামিল্টন বাংলো রবীন্দ্রনাথ ঠাকুরের নিজস্ব বাড়ি নয়' : 'Hamilton Bungalow Was Not Tagore’s Personal House'}
          </h3>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'Hamilton Bungalow রবীন্দ্রনাথ ঠাকুরের নিজস্ব বাংলো নয়। এটি Sir Daniel Mackinnon Hamilton-এর গোসাবা-ভিত্তিক কর্মকাণ্ড ও বসবাসের সঙ্গে সম্পর্কিত ঐতিহাসিক স্থাপনা। রবীন্দ্রনাথ ঠাকুর ১৯৩২ সালে Hamilton-এর গ্রামীণ উন্নয়ন ও সমবায় উদ্যোগ দেখতে গোসাবায় এসেছিলেন। তাঁর থাকার জায়গা হিসেবে Beacon’s Bungalow-এর নাম বেশি নির্ভরযোগ্য ঐতিহাসিক বিবরণে পাওয়া যায়।'
              : 'Hamilton Bungalow was not Rabindranath Tagore’s personal estate. It was the colonial work and residence station of Scottish philanthropist Sir Daniel Mackinnon Hamilton. Tagore visited Gosaba in December 1932 to study Hamilton’s cooperative rural experiment and stayed at Beacon’s Bungalow.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm">
            <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-300 text-emerald-950 flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-emerald-900 font-heading">সঠিক তথ্য:</strong>
                <span>“Rabindranath Tagore & Hamilton Heritage, Gosaba” (রবীন্দ্রনাথ ও স্যার ড্যানিয়েল হ্যামিল্টনের স্মৃতিবিজড়িত গোসাবা)</span>
              </div>
            </div>
            <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-300 text-rose-950 flex items-start gap-2.5">
              <span className="w-4 h-4 text-rose-600 font-black shrink-0 text-center">✕</span>
              <div>
                <strong className="block text-rose-900 font-heading">ভুল দাবি:</strong>
                <span>“হ্যামিল্টন বাংলো ছিল রবীন্দ্রনাথ ঠাকুরের নিজস্ব বাড়ি” — এই দাবিটি ঐতিহাসিকভাবে ভুল।</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      badge: '২',
      titleBn: 'সুন্দরবনের অন্য ইতিহাস: সামাজিক ও মানবিক উন্নয়ন',
      titleEn: 'Beyond Wildlife: Human Settlements & Social History',
      icon: History,
      color: 'cyan',
      render: () => (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0E7490] uppercase tracking-wider">
            <span className="px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-900 font-bold">ধাপ ২</span>
            <span>{isBengali ? 'সুন্দরবনের ইতিহাসের অন্য এক অধ্যায়' : 'Another Chapter in Sundarban History'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#064E3B]">
            {isBengali
              ? 'নদী আর বাঘের বাইরে: সুন্দরবনের সামাজিক ও মানবিক উন্নয়ন'
              : 'Beyond Wildlife: Human Settlements & Rural Reconstruction'}
          </h3>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'সুন্দরবন বলতে সাধারণত নদী, ম্যানগ্রোভ অরণ্য, Royal Bengal Tiger, watch tower এবং boat safari-এর কথা মনে পড়ে। কিন্তু গোসাবায় পৌঁছালে সুন্দরবনের আরেকটি গুরুত্বপূর্ণ রূপ সামনে আসে—মানুষের বসতি, কৃষি, সমবায় আন্দোলন, গ্রামীণ উন্নয়ন এবং রবীন্দ্রনাথ ঠাকুর ও Sir Daniel Mackinnon Hamilton-এর চিন্তার ঐতিহাসিক সংযোগ।'
              : 'Sundarban is globally celebrated for mangrove forests, Royal Bengal Tigers, watch towers, and river boat safaris. Yet, reaching Gosaba uncovers an equally monumental dimension: human settlements, agriculture, cooperative movements, rural economics, and the historic convergence of Rabindranath Tagore and Sir Daniel Mackinnon Hamilton.'}
          </p>

          <div className="p-4 sm:p-5 bg-emerald-50/80 rounded-2xl border border-emerald-200 space-y-2 text-sm text-emerald-950">
            <strong className="block font-heading text-emerald-900 text-sm sm:text-base">
              {isBengali ? 'Yale University-র Littoral Communities Project-এর গবেষণা বিবরণ:' : 'Yale University Littoral Communities Project Research Insights:'}
            </strong>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {isBengali
                ? 'গবেষণা অনুযায়ী Hamilton গোসাবায় school, cooperative bank, agricultural experiment, rice mill এবং বিভিন্ন rural-development initiative প্রতিষ্ঠা করেছিলেন। ১৯১৮ সালে Consumers’ Cooperative Society, ১৯১৯ সালে model farm, ১৯২৪ সালে Gosaba Central Cooperative Bank এবং ১৯২৭ সালে Jamini Rice Mill প্রতিষ্ঠার বিশদ তথ্য সেখানে নথিভুক্ত রয়েছে।'
                : 'Documented archival records reveal Hamilton established schools, cooperative banks, experimental agricultural plots, and a rice mill in Gosaba. Historic milestones include the 1918 Consumers’ Cooperative Society, 1919 model farm, 1924 Gosaba Central Cooperative Bank, and 1927 Jamini Rice Mill.'}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      badge: '৩',
      titleBn: 'স্যার ড্যানিয়েল হ্যামিল্টন কে ছিলেন?',
      titleEn: 'Who Was Sir Daniel Mackinnon Hamilton?',
      icon: Landmark,
      color: 'amber',
      render: () => (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
            <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold">ধাপ ৩</span>
            <span>{isBengali ? 'Sir Daniel Hamilton কে ছিলেন?' : 'Who Was Sir Daniel Mackinnon Hamilton?'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#064E3B]">
            {isBengali
              ? 'স্কটিশ ব্যবসায়ী থেকে সুন্দরবনের গ্রামীণ সমাজ সংস্কারক'
              : 'Scottish Shipping Magnate to Delta Cooperative Reformer'}
          </h3>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'Sir Daniel Mackinnon Hamilton ছিলেন একজন Scottish businessman, যিনি Mackinnon Mackenzie shipping company-এর সঙ্গে যুক্ত ছিলেন। তিনি বিংশ শতাব্দীর শুরুতে গোসাবা অঞ্চলে জমি নিয়ে একটি গ্রামীণ পুনর্গঠন ও সমবায়ভিত্তিক সমাজ তৈরির পরিকল্পনা শুরু করেন।'
              : 'Sir Daniel Mackinnon Hamilton was a prominent Scottish businessman and senior partner at the Mackinnon Mackenzie shipping firm. In the early 20th century, he took leases of delta islands in Gosaba to construct an experimental self-reliant cooperative commonwealth.'}
          </p>

          <div className="space-y-2">
            <h4 className="font-bold text-sm sm:text-base font-heading text-slate-900">
              {isBengali ? 'Hamilton-এর গ্রামীণ অর্থনৈতিক মডেলের মূল লক্ষ্যসমূহ:' : 'Key Objectives of Hamilton’s Rural Cooperative Model:'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {[
                { textBn: 'সমবায়ের মাধ্যমে ঐক্যবদ্ধ কাজ', textEn: 'Collective labor through cooperatives' },
                { textBn: 'মহাজননির্ভর ঋণব্যবস্থা থেকে মুক্তি', textEn: 'Freedom from predatory moneylenders' },
                { textBn: 'কৃষি ও পশুপালনের বৈজ্ঞানিক প্রশিক্ষণ', textEn: 'Scientific agriculture & livestock training' },
                { textBn: 'ফসল সংগঠিতভাবে সংরক্ষণ ও বিক্রয়', textEn: 'Organized grain storage & direct market sales' },
                { textBn: 'স্থানীয়ভাবে শিক্ষা ও স্বাস্থ্যসেবার প্রসার', textEn: 'Accessible island schools & dispensaries' },
                { textBn: 'পারস্পরিক সহযোগিতায় আত্মনির্ভরতা', textEn: 'Mutual aid driving true self-reliance' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">{isBengali ? item.textBn : item.textEn}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 italic bg-slate-100 p-3 rounded-xl border border-slate-200">
            {isBengali
              ? 'Hamilton-এর এই পরীক্ষা নিখুঁত বা বিতর্কমুক্ত ছিল না। তবে সেই সময়ের দুর্গম সুন্দরবনে cooperative model এবং rural reconstruction নিয়ে তাঁর উদ্যোগ ঐতিহাসিকভাবে অত্যন্ত গুরুত্বপূর্ণ।'
              : 'While Hamilton’s experiment was not without contradictions, his pioneering cooperative model amidst the tidal wilderness remains a landmark in modern socio-economic history.'}
          </p>
        </div>
      ),
    },
    {
      id: 4,
      badge: '৪',
      titleBn: 'রবীন্দ্রনাথ ঠাকুর ও Hamilton-এর চিন্তার মিল',
      titleEn: 'Tagore & Hamilton: Convergence of Rural Philosophy',
      icon: BookOpen,
      color: 'emerald',
      render: () => (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold">ধাপ ৪</span>
            <span>{isBengali ? 'রবীন্দ্রনাথ ঠাকুর ও Hamilton-এর চিন্তার মিল' : 'Tagore & Hamilton: Convergence of Rural Philosophy'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#064E3B]">
            {isBengali
              ? 'শান্তিনিকেতন-শ্রীনিকেতন ও গোসাবার সমবায় মেলবন্ধন'
              : 'Sriniketan Principles Echoing on Gosaba Shores'}
          </h3>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'রবীন্দ্রনাথ ঠাকুর শুধু কবি ও সাহিত্যিক ছিলেন না; তিনি শিক্ষা, কৃষি, গ্রামীণ অর্থনীতি এবং মানুষের আত্মনির্ভরতা নিয়েও গভীরভাবে ভাবতেন। শান্তিনিকেতনের পাশাপাশি তাঁর শ্রীনিকেতন প্রকল্পের একটি প্রধান লক্ষ্য ছিল rural reconstruction।'
              : 'Rabindranath Tagore was not merely a poet and philosopher; he was an ardent proponent of grassroots rural reconstruction, agro-economics, and universal education, as pioneered at Sriniketan.'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 font-semibold text-amber-950 text-center">
              সমবায়ভিত্তিক অর্থনীতি
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 font-semibold text-amber-950 text-center">
              কৃষি ও গ্রামীণ শিক্ষা
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 font-semibold text-amber-950 text-center">
              মহাজননির্ভরতা কমানো
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 font-semibold text-amber-950 text-center">
              মানুষের আত্মশক্তির বিকাশ
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {isBengali
              ? 'Hamilton ও রবীন্দ্রনাথের মধ্যে গ্রামীণ উন্নয়ন এবং cooperative society নিয়ে একাধিক পত্রযোগাযোগ হয়েছিল বলে ঐতিহাসিক গবেষণা ও বিভিন্ন নথিপত্রে উল্লেখ রয়েছে।'
              : 'Extensive documented correspondence between Sir Daniel Hamilton and Rabindranath Tagore highlights their mutual exchange of ideas regarding rural rejuvenation and cooperative societies.'}
          </p>
        </div>
      ),
    },
    {
      id: 5,
      badge: '৫',
      titleBn: 'রবীন্দ্রনাথ ঠাকুরের গোসাবা সফর (ডিসেম্বর ১৯৩২)',
      titleEn: 'Tagore’s Historic December 1932 Visit',
      icon: Calendar,
      color: 'purple',
      render: () => (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-800 uppercase tracking-wider">
            <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 font-bold">ধাপ ৫</span>
            <span>{isBengali ? 'রবীন্দ্রনাথ ঠাকুরের গোসাবা সফর (ডিসেম্বর ১৯৩২)' : 'Rabindranath Tagore’s Historic December 1932 Visit'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#064E3B]">
            {isBengali
              ? 'নদীপথ পাড়ি দিয়ে দুর্গম দ্বীপাঞ্চলে বিশ্বকবির পদার্পণ'
              : 'A Historic Delta Voyage by River Boat'}
          </h3>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'রবীন্দ্রনাথ ঠাকুর ১৯৩২ সালের ডিসেম্বর মাসে গোসাবা সফর করেছিলেন। তাঁর এই সফরের উদ্দেশ্য ছিল Hamilton-এর সমবায় ও rural-development experiment কাছ থেকে দেখা এবং স্থানীয় মানুষের জীবন সম্পর্কে জানা।'
              : 'In December 1932, Rabindranath Tagore embarked on a river journey across tidal rivers to Gosaba. His mission was to study firsthand the functioning of Hamilton’s rural cooperative ecosystem and interact directly with islanders.'}
          </p>

          <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-xs sm:text-sm text-purple-950 leading-relaxed">
            {isBengali
              ? 'গোসাবার দুর্গম ভৌগোলিক পরিবেশে সেই সময় এমন একটি সফর মোটেও সহজ ছিল না। নদীপথ অতিক্রম করে দ্বীপাঞ্চলে পৌঁছে রবীন্দ্রনাথ কৃষি, সমবায়, শিক্ষা এবং গ্রামীণ সমাজ পুনর্গঠনের বিভিন্ন উদ্যোগ গভীরভাবে পর্যবেক্ষণ করেন। এটি ছিল দুই ভিন্ন পটভূমির মানুষের rural-development thought-এর এক অনন্য মিলন।'
              : 'Navigating the intricate tidal channels in the 1930s was arduous. Tagore’s journey was far more than a leisure visit—it represented a monumental bridge between Western cooperative philosophy and Eastern rural resurgence.'}
          </div>
        </div>
      ),
    },
    {
      id: 6,
      badge: '৬',
      titleBn: 'রবীন্দ্রনাথ কোথায় ছিলেন? সঠিক তথ্য বনাম ভুল দাবি',
      titleEn: 'Where Did Tagore Stay? Accurate Facts vs Common Myths',
      icon: Building,
      color: 'rose',
      render: () => (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-800 uppercase tracking-wider">
            <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 font-bold">ধাপ ৬</span>
            <span>{isBengali ? 'রবীন্দ্রনাথ কোথায় ছিলেন? (সঠিক তথ্য বনাম ভুল দাবি)' : 'Where Did Tagore Stay? Accurate Facts vs Common Myths'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#064E3B]">
            {isBengali
              ? 'Hamilton Bungalow বনাম Beacon’s Bungalow'
              : 'Hamilton Bungalow vs Beacon’s Bungalow'}
          </h3>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'কিছু স্থানীয় ও পর্যটন বিবরণে Hamilton Bungalow, Tagore Bungalow এবং Beacon’s Bungalow নামগুলো পরস্পরের সঙ্গে গুলিয়ে ফেলা হয়। তবে নির্ভরযোগ্য ঐতিহাসিক প্রতিবেদনে বলা হয়েছে, রবীন্দ্রনাথ ১৯৩২ সালের সফরে Beacon’s Bungalow-এ অবস্থান করেছিলেন।'
              : 'Local folk narratives sometimes conflate Hamilton Bungalow, Tagore Bungalow, and Beacon’s Bungalow. Historically documented archives confirm Tagore resided at Beacon’s Bungalow during his December 1932 tour.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{isBengali ? 'Beacon’s Bungalow (রবীন্দ্রনাথের থাকার স্থান)' : 'Beacon’s Bungalow (Tagore’s Residence)'}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {isBengali
                  ? '২০২১ সালে South 24 Parganas জেলা প্রশাসন ঐতিহাসিক Beacon’s Bungalow সংস্কার করেছে। এটি কাঠের স্তূপের (wooden stilts) ওপর নির্মিত প্রাচীন স্থাপত্য।'
                  : 'Restored by the South 24 Parganas district administration in 2021, this heritage wooden stilt structure housed Tagore in 1932.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Landmark className="w-4 h-4 text-amber-700" />
                <span>{isBengali ? 'Hamilton Bungalow (স্যার ড্যানিয়েলের কর্মক্ষেত্র)' : 'Hamilton Bungalow (Hamilton’s Station)'}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {isBengali
                  ? 'Sir Daniel Hamilton-এর কর্মকাণ্ড ও বসবাসের স্মৃতির সঙ্গে যুক্ত মূল ঐতিহাসিক ভবন। Yale-এর গবেষণায় একে Beacon Bungalow থেকে পৃথক স্থাপত্য হিসেবে উল্লেখ করা হয়েছে।'
                  : 'The administrative and residential base of Sir Daniel Hamilton, clearly recorded as a distinct structure in Yale research archives.'}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      badge: '৭',
      titleBn: 'Hamilton ও Beacon বাংলোর স্থাপত্য ও বিশেষত্ব',
      titleEn: 'Architectural Heritage of the Bungalows',
      icon: Scale,
      color: 'teal',
      render: () => (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider">
            <span className="px-2.5 py-1 rounded-full bg-teal-100 text-teal-900 font-bold">ধাপ ৭</span>
            <span>{isBengali ? 'Hamilton ও Beacon বাংলোর বিশেষত্ব' : 'Architectural Heritage of the Bungalows'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#064E3B]">
            {isBengali
              ? 'জোয়ার-ভাটার দ্বীপে শতবর্ষী কাঠের স্থাপত্য ও সামাজিক স্মারক'
              : 'Centenary Timber Stilts Standing Against Tidal Waters'}
          </h3>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {isBengali
              ? 'Hamilton Bungalow সুন্দরবনের social history-এর একটি দৃশ্যমান স্মারক। Watch tower থেকে যেমন mangrove ও wildlife দেখা যায়, Hamilton heritage tour তেমনই মানুষের অদম্য প্রচেষ্টা, গ্রামীণ সমাজ ও উন্নয়ন-চিন্তার গল্প শোনায়।'
              : 'Hamilton Bungalow stands as a tangible memorial to Sundarban’s social history. While watch towers reveal pristine mangroves and wildlife, the heritage tour brings to life human resilience, cooperation, and visionary social reform.'}
          </p>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
            <strong className="block text-slate-900 font-heading text-sm">
              {isBengali ? 'ভ্রমণকারীদের জন্য পরামর্শ:' : 'Traveler Advisory:'}
            </strong>
            <p>
              {isBengali
                ? 'প্রদর্শনী, ঐতিহাসিক কক্ষ ও পরিদর্শনের সময়সূচি স্থানীয় কর্তৃপক্ষের নিয়মানুযায়ী পরিবর্তিত হতে পারে। সফরের আগে আমাদের ট্যুর কোঅর্ডিনেটরের সঙ্গে বর্তমান অবস্থা যাচাই করে নেওয়া সুবিধাজনক।'
                : 'Access to interior exhibition rooms and visiting hours may vary under district heritage regulations. Confirm status with your tour coordinator prior to arrival.'}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      badge: '৮',
      titleBn: 'Gosaba Heritage Tour-এ কী দেখবেন?',
      titleEn: 'What to Experience on the Gosaba Heritage Tour',
      icon: Compass,
      color: 'emerald',
      render: () => (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold">ধাপ ৮</span>
            <span>{isBengali ? 'Gosaba Heritage Tour-এ কী দেখবেন?' : 'What to Experience on the Gosaba Heritage Tour'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#064E3B]">
            {isBengali
              ? 'প্রকৃতি ও ইতিহাসের নিখুঁত সমন্বয়: গোসাবা ভ্রমণ অভিজ্ঞতা'
              : 'Bridging Wild Nature & Living History'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {[
              { titleBn: '১. Hamilton Bungalow', titleEn: '1. Hamilton Bungalow', descBn: 'স্যার ড্যানিয়েল হ্যামিল্টনের ঐতিহাসিক কর্মস্থল ও আবাস।' },
              { titleBn: '২. Beacon’s Bungalow', titleEn: '2. Beacon’s Bungalow', descBn: '১৯৩২ সালে বিশ্বকবি রবীন্দ্রনাথ ঠাকুরের থাকার ঐতিহাসিক স্থান।' },
              { titleBn: '৩. গোসাবা বাজার ও ফেরিঘাট', titleEn: '3. Gosaba Market & Ferry Ghat', descBn: 'সুন্দরবনের অন্যতম প্রাচীন নদীর মোহনার প্রাণবন্ত বাণিজ্যকেন্দ্র।' },
              { titleBn: '৪. পুরোনো সমবায় আন্দোলনের স্মৃতিচিহ্ন', titleEn: '4. Cooperative Relics', descBn: 'ঐতিহাসিক মুদ্রা, চালের মিল ও ব্যাংকিং ব্যবস্থার স্মারক।' },
              { titleBn: '৫. স্থানীয় স্কুল ও প্রতিষ্ঠান', titleEn: '5. Heritage Schools', descBn: 'শতবর্ষী গ্রামীণ শিক্ষা ও সামাজিক উন্নয়ন কেন্দ্র।' },
              { titleBn: '৬. নদীবাঁধ ও গ্রামীণ জীবন', titleEn: '6. Embankments & Island Life', descBn: 'জোয়ার-ভাটার নদীপাড়ে স্থানীয় মানুষের বাস্তব জীবন ও সংস্কৃতি।' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <strong className="text-slate-900 block font-heading text-sm text-[#064E3B]">{item.titleBn}</strong>
                <p className="text-xs text-slate-600 leading-snug">{item.descBn}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 🌟 1. Header Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#064E3B] via-[#0B5E45] to-[#043327] text-white p-8 sm:p-12 border-2 border-amber-400/40 shadow-2xl">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <History className="w-4 h-4 text-amber-300" />
            <span>{isBengali ? 'ঐতিহাসিক দলিল ও গবেষণাভিত্তিক বিবরণ' : 'Rabindranath Tagore & Hamilton Heritage, Gosaba'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
            {isBengali
              ? 'রবীন্দ্রনাথ ঠাকুর ও স্যার ড্যানিয়েল হ্যামিল্টনের স্মৃতিবিজড়িত গোসাবা'
              : 'Rabindranath Tagore & Hamilton Heritage, Gosaba'}
          </h1>
          
          <p className="text-amber-200/90 text-sm sm:text-base font-medium">
            {isBengali
              ? 'Rabindranath Tagore–Hamilton Heritage, Gosaba — সুন্দরবনের সমবায় বিপ্লব, গ্রামীণ অর্থনীতি ও বিশ্বকবির পদার্পণের নির্ভুল ইতিহাস।'
              : 'The definitive documented history of Gosaba cooperative republic, Sir Daniel Hamilton’s visionary reforms, and Rabindranath Tagore’s December 1932 visit.'}
          </p>
        </div>

        {/* Background decorative watermark */}
        <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10 pointer-events-none">
          <Landmark className="w-96 h-96 text-white" />
        </div>
      </div>

      {/* 🌟 2. Critical Historical Correction Callout Card */}
      <div className="bg-amber-50/95 border-2 border-amber-400/80 rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-500 text-slate-950 rounded-2xl shrink-0 mt-1 shadow-sm">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-200 text-amber-950 text-xs font-black uppercase tracking-wider">
                {isBengali ? 'ঐতিহাসিক ফ্যাক্ট চেক' : 'Historical Fact Check'}
              </span>
              <h3 className="text-xl font-bold font-heading text-amber-950">
                {isBengali ? 'গুরুত্বপূর্ণ ঐতিহাসিক সংশোধন' : 'Crucial Historical Clarification'}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-amber-900 leading-relaxed font-medium">
              {isBengali
                ? 'Hamilton Bungalow রবীন্দ্রনাথ ঠাকুরের নিজস্ব বাংলো নয়। এটি Sir Daniel Mackinnon Hamilton-এর গোসাবা-ভিত্তিক কর্মকাণ্ড ও বসবাসের সঙ্গে সম্পর্কিত ঐতিহাসিক স্থাপনা। রবীন্দ্রনাথ ঠাকুর ১৯৩২ সালে Hamilton-এর গ্রামীণ উন্নয়ন ও সমবায় উদ্যোগ দেখতে গোসাবায় এসেছিলেন। তাঁর থাকার জায়গা হিসেবে Beacon’s Bungalow-এর নাম বেশি নির্ভরযোগ্য ঐতিহাসিক বিবরণে পাওয়া যায়।'
                : 'Hamilton Bungalow was not Rabindranath Tagore’s personal estate. It was the colonial work and residence station of Scottish philanthropist Sir Daniel Mackinnon Hamilton. Tagore visited Gosaba in December 1932 to study Hamilton’s cooperative rural experiment and stayed at the nearby Beacon’s Bungalow.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
              <div className="p-3 bg-white/90 rounded-xl border border-emerald-300 text-emerald-950 flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-emerald-900 font-heading">সঠিক শিরোনাম ও তথ্য:</strong>
                  <span>“Rabindranath Tagore & Hamilton Heritage, Gosaba” (রবীন্দ্রনাথ ঠাকুর ও স্যার ড্যানিয়েল হ্যামিল্টনের স্মৃতিবিজড়িত গোসাবা)</span>
                </div>
              </div>

              <div className="p-3 bg-white/90 rounded-xl border border-rose-300 text-rose-950 flex items-start gap-2">
                <span className="w-4 h-4 text-rose-600 font-black shrink-0 text-center">✕</span>
                <div>
                  <strong className="block text-rose-900 font-heading">যে বিভ্রান্তিকর দাবি এড়িয়ে চলবেন:</strong>
                  <span>“হ্যামিল্টন বাংলো ছিল রবীন্দ্রনাথ ঠাকুরের নিজস্ব বাড়ি” — এই দাবিটি ঐতিহাসিকভাবে ভুল।</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🌟 3. ধাপে ধাপে গোসাবার ইতিহাস জানুন (Step-by-Step Interactive Accordion) */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
              {isBengali ? 'ধাপে ধাপে গোসাবার ইতিহাস জানুন' : 'Explore Gosaba Heritage Step-by-Step'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {isBengali
                ? 'যেই নম্বরে ক্লিক করবেন, ঠিক তার নিচেই সেই ধাপের বিস্তারিত ঐতিহাসিক তথ্য প্রদর্শিত হবে।'
                : 'Click any step number to view its detailed documented history directly below it.'}
            </p>
          </div>
          <span className="text-xs text-slate-500 font-medium shrink-0">
            {isBengali ? 'মোট ৮টি প্রামাণ্য ধাপ' : '8 Documented Steps'}
          </span>
        </div>

        <div className="space-y-3.5">
          {steps.map((step) => {
            const isOpen = openStepId === step.id;

            return (
              <div
                key={step.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-emerald-600 shadow-md ring-1 ring-emerald-500/20'
                    : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-emerald-300 shadow-xs'
                }`}
              >
                {/* Step Number Button */}
                <button
                  type="button"
                  onClick={() => toggleStep(step.id)}
                  className={`w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors cursor-pointer ${
                    isOpen ? 'bg-emerald-50/75 border-b border-emerald-200/80' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm sm:text-base shrink-0 transition-all ${
                        isOpen
                          ? 'bg-[#064E3B] text-amber-300 shadow-xs scale-105'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {step.badge}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-bold uppercase tracking-wider ${isOpen ? 'text-[#064E3B]' : 'text-slate-500'}`}>
                          {isBengali ? `ধাপ ${step.badge}` : `Step ${step.id}`}
                        </span>
                      </div>
                      <h3 className={`font-bold font-heading text-base sm:text-lg truncate sm:whitespace-normal transition-colors ${
                        isOpen ? 'text-[#064E3B]' : 'text-slate-900'
                      }`}>
                        {isBengali ? step.titleBn : step.titleEn}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
                      {isOpen ? (isBengali ? 'সংক্ষেপ করুন' : 'Collapse') : (isBengali ? 'বিস্তারিত দেখুন' : 'View Details')}
                    </span>
                    <div className={`p-1.5 rounded-lg transition-colors ${isOpen ? 'bg-emerald-100 text-[#064E3B]' : 'bg-slate-100 text-slate-500'}`}>
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {/* Details rendered directly underneath this exact step */}
                {isOpen && (
                  <div className="p-5 sm:p-8 bg-white space-y-4 animate-in fade-in-50 duration-200">
                    {step.render()}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
