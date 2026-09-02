import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle, LifeBuoy, Trees, Anchor, VolumeX, Ban } from 'lucide-react';

export const SafetyRulesPage: React.FC = () => {
  const { language, isBengali } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider bg-amber-100 px-3.5 py-1.5 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
          <span>{isBengali ? 'বন দপ্তর ও নৌ-নিরাপত্তা প্রটোকল' : 'Forest Dept & Marine Safety Regulations'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#064E3B]">
          {isBengali ? 'সুন্দরবন ভ্রমণ ও সুরক্ষা নির্দেশিকা' : 'Sundarban Safety Guidelines & Forest Ethics'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {isBengali
            ? 'সুন্দরবন একটি সংবেদনশীল ইউনেস্কো ওয়ার্ল্ড হেরিটেজ ও ব্যাঘ্র প্রকল্প এলাকা। নিরাপদ ও আইনসম্মত ভ্রমণের জন্য নিম্নলিখিত নিয়মাবলী মেনে চলা বাধ্যতামূলক।'
            : 'As a protected UNESCO Biosphere and Tiger Reserve, every traveler must adhere to mandatory statutory safety rules.'}
        </p>
      </div>

      {/* Mandatory Safety Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* DO's */}
        <div className="bg-emerald-50/70 rounded-3xl p-6 sm:p-8 border border-emerald-200 space-y-4">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-lg font-heading">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <h3>{isBengali ? 'করণীয় (আবশ্যকীয় নিয়মাবলী)' : 'Mandatory Guidelines (DOs)'}</h3>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-emerald-950">
            <li className="flex items-start gap-2.5">
              <LifeBuoy className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>{isBengali ? 'লাইফ জ্যাকেট পরিধান:' : 'Wear Life Jackets:'}</strong>{' '}
                {isBengali
                  ? 'নদী ও খাঁড়িতে বোট চলার সময় প্রতিটি যাত্রীকে সার্বক্ষণিক লাইফ জ্যাকেট পরিধান করতে হবে।'
                  : 'Must keep life jackets accessible or worn while cruising on open tidal waterways.'}
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <Anchor className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>{isBengali ? 'সরকারি পারমিট বহন:' : 'Carry Valid ID Proof:'}</strong>{' '}
                {isBengali
                  ? 'সকল প্রাপ্তবয়স্ক ভারতীয় নাগরিককে আধার/ভোটার/পাসপোর্ট এবং বিদেশি পর্যটকদের মূল পাসপোর্ট সাথে রাখতে হবে।'
                  : 'All adults must carry valid government photo ID (Passport for foreigners) for Forest Dept permit checks.'}
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>{isBengali ? 'অনুমোদিত গাইড মেনে চলা:' : 'Follow Forest Guides:'}</strong>{' '}
                {isBengali
                  ? 'বনের ওয়াচ টাওয়ার ও ক্যানোপিতে সার্বক্ষণিক দায়িত্বপ্রাপ্ত বন গাইড ও স্টাফদের নির্দেশনা অনুসরণ করুন।'
                  : 'Always follow instructions of assigned Forest Department guides on watchtowers and boardwalks.'}
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <Trees className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>{isBengali ? 'নির্দিষ্ট স্থানে অবতরণ:' : 'Boardwalk Discipline:'}</strong>{' '}
                {isBengali
                  ? 'শুধুমাত্র লোহার জাল দ্বারা ঘেরা সংরক্ষিত চত্বর ও ওয়াচ টাওয়ারেই নামা অনুমোদিত।'
                  : 'Step ashore exclusively at fenced Forest Dept watchtower stations; never on open mudflats.'}
              </span>
            </li>
          </ul>
        </div>

        {/* DONT's */}
        <div className="bg-red-50/70 rounded-3xl p-6 sm:p-8 border border-red-200 space-y-4">
          <div className="flex items-center gap-2 text-red-900 font-bold text-lg font-heading">
            <XCircle className="w-5 h-5 text-red-600 shrink-0" />
            <h3>{isBengali ? 'কঠোরভাবে নিষিদ্ধ (বর্জনীয় কাজ)' : 'Strictly Prohibited (DONTs)'}</h3>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-red-950">
            <li className="flex items-start gap-2.5">
              <Ban className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>
                <strong>{isBengali ? 'নদী বা বনে প্লাস্টিক ফেলা:' : 'Zero Plastic Littering:'}</strong>{' '}
                {isBengali
                  ? 'নদীতে বোতল, চিপসের প্যাকেট বা প্লাস্টিক ফেলা শাস্তিযোগ্য অপরাধ। সকল বর্জ্য বোটের নির্দিষ্ট ডাস্টবিনে ফেলুন।'
                  : 'Throwing plastics, cans, or food packets into rivers attracts severe legal penalties from Forest Dept.'}
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <VolumeX className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>
                <strong>{isBengali ? 'উচ্চ শব্দ ও মাইক বাজানো:' : 'Loud Music & Noise:'}</strong>{' '}
                {isBengali
                  ? 'বনের সীমানায় কোনো লাউডস্পিকার, সাউন্ডবক্স বা উচ্চস্বরে কোলাহল করা সম্পূর্ণ নিষিদ্ধ।'
                  : 'Playing Bluetooth speakers, horns, or shouting is strictly illegal within the Tiger Reserve.'}
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>
                <strong>{isBengali ? 'বুনো প্রাণীকে খাবার দেওয়া:' : 'Feeding Wildlife:'}</strong>{' '}
                {isBengali
                  ? 'হরিণ, বানর, কুমির বা পাখিকে কোনো ধরনের বাইরের খাবার দেওয়া বন আইনে দণ্ডনীয়।'
                  : 'Feeding deer, monkeys, or birds disrupts their natural ecology and is strictly forbidden.'}
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <Ban className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>
                <strong>{isBengali ? 'সূর্যাস্তের পর বনে বোটে থাকা:' : 'Night Navigation Ban:'}</strong>{' '}
                {isBengali
                  ? 'বন দপ্তরের নিয়ম অনুযায়ী সূর্যাস্তের পর কোর ও বাফার জোনে কোনো পর্যটক বোট থাকা সম্পূর্ণ অবৈধ।'
                  : 'All tourist vessels must anchor in approved village waterways before twilight curfew.'}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Emergency Evacuation Protocol */}
      <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-4">
        <h3 className="text-xl font-bold font-heading text-[#064E3B]">
          {isBengali ? 'জরুরি চিকিৎসা ও উদ্ধার প্রস্তুতি' : 'Emergency Medical Response & Evacuation'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {isBengali
            ? 'আমাদের সকল বোটে প্রাথমিক চিকিৎসা কিট ও প্রশিক্ষিত ফার্স্ট-এইডার মাঝি রয়েছে। কোনো যাত্রীর গুরুতর অসুস্থতার ক্ষেত্রে গোসাবা গ্রামীণ হাসপাতাল ও ক্যানিং মহকুমা হাসপাতালের সাথে সার্বক্ষণিক রেডিও যোগাযোগ বজায় রাখা হয় এবং স্পিডবোট দ্বারা জরুরি স্থানান্তরের ব্যবস্থা রয়েছে।'
            : 'Every vessel is equipped with primary medical emergency kits and trained personnel. In case of acute medical emergencies, rapid evacuation to Gosaba Rural Hospital or Canning Sub-Divisional Hospital is executed via standby speedboats in coordination with the local administration.'}
        </p>
      </div>
    </div>
  );
};
