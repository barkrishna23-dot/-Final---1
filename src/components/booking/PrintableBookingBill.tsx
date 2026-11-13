import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BrandLogo } from '../common/BrandLogo';
import { BRAND_INFO } from '../../data/brandInfo';

export interface PrintableBookingBillProps {
  enquiryId: string;
  fullName: string;
  phone: string;
  customerWhatsapp: string;
  email?: string;
  packageTitle: string;
  preferredDate: string;
  bookingDate?: string;
  pickupPoint: string;
  adultsCount: number;
  childrenCount: number;
  perAdultRate: number;
  perChildRate: number;
  addonAmount: number;
  referralCodeUsed?: string;
  discountAmount?: number;
  totalAmount: number;
  paidAmount: number;
  paymentMethod: string;
  transactionId?: string;
  isBengali: boolean;
}

export const PrintableBookingBill: React.FC<PrintableBookingBillProps> = ({
  enquiryId,
  fullName,
  phone,
  customerWhatsapp,
  email,
  packageTitle,
  preferredDate,
  bookingDate,
  pickupPoint,
  adultsCount,
  childrenCount,
  perAdultRate,
  perChildRate,
  addonAmount,
  referralCodeUsed,
  discountAmount = 0,
  totalAmount,
  paidAmount,
  paymentMethod,
  transactionId,
  isBengali,
}) => {
  useEffect(() => {
    document.body.classList.add('has-printable-bill');
    return () => {
      document.body.classList.remove('has-printable-bill');
    };
  }, []);

  if (typeof document === 'undefined') return null;

  const adultTotal = adultsCount * perAdultRate;
  const childTotal = childrenCount * perChildRate;
  const subtotalBeforeDiscount = adultTotal + childTotal + addonAmount;
  const balanceDue = Math.max(totalAmount - paidAmount, 0);
  const formattedBookingDate =
    bookingDate ||
    new Date().toLocaleDateString(isBengali ? 'bn-IN' : 'en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

  const billContent = (
    <div
      id="sv-print-bill-root"
      className="hidden bg-white text-slate-900 font-sans"
    >
      <div className="border-2 border-[#064E3B] rounded-xl p-6 space-y-5 bg-white">
        {/* 1. Official Brand Header with Vector Logo + Bill Code */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b-2 border-[#064E3B]">
          <div className="space-y-1.5">
            <BrandLogo
              size={60}
              showText={true}
              lang={isBengali ? 'bn' : 'en'}
              variant="light"
            />
            <div className="text-[11px] text-slate-700 leading-snug pt-1 space-y-0.5">
              <p className="font-semibold text-[#064E3B]">
                {isBengali ? BRAND_INFO.addressBn : BRAND_INFO.addressEn}
              </p>
              <p>
                {isBengali ? 'কোম্পানি ফোন / WhatsApp:' : 'Company Phone / WhatsApp:'}{' '}
                <strong className="font-mono text-slate-900">{BRAND_INFO.phone}</strong> •{' '}
                {BRAND_INFO.email}
              </p>
              <p className="text-[10px] text-slate-600">
                {isBengali ? 'স্বত্বাধিকারী (Owner):' : 'Proprietor / Owner:'}{' '}
                <strong className="text-slate-900">Srikrishna Bar</strong>
              </p>
            </div>
          </div>

          <div className="text-right shrink-0 space-y-1.5">
            <div className="inline-block px-3 py-1 rounded bg-[#064E3B] text-white text-[11px] font-bold uppercase tracking-wider">
              {isBengali ? 'অফিসিয়াল বুকিং বিল / রিসিপ্ট' : 'OFFICIAL BOOKING BILL / RECEIPT'}
            </div>
            <div className="border-2 border-[#064E3B] bg-emerald-50/60 rounded-lg px-3 py-1.5">
              <span className="text-[10px] font-bold text-slate-600 block uppercase">
                {isBengali ? 'রেফারেন্স / বিল কোড:' : 'Reference / Bill Code:'}
              </span>
              <span className="text-base font-mono font-black text-[#064E3B] tracking-wide">
                {enquiryId}
              </span>
            </div>
            <div className="text-[11px] text-slate-700 space-y-0.5">
              <div>
                <span className="text-slate-500">{isBengali ? 'বুকিংয়ের তারিখ:' : 'Booking Date:'}</span>{' '}
                <strong>{formattedBookingDate}</strong>
              </div>
              <div>
                <span className="text-slate-500">{isBengali ? 'স্ট্যাটাস:' : 'Status:'}</span>{' '}
                <strong className="text-emerald-800 uppercase">
                  {isBengali ? 'CONFIRMED (বুকিং কনফার্ম)' : 'CONFIRMED'}
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Customer & Safari Details Grid */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="border border-slate-300 rounded-lg p-3.5 space-y-1 bg-slate-50/40">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#064E3B] border-b border-slate-200 pb-1 mb-1.5">
              {isBengali ? 'কাস্টমারের বিবরণ (Billed To)' : 'Customer Details (Billed To)'}
            </div>
            <div>
              <span className="text-slate-500">{isBengali ? 'নাম:' : 'Name:'}</span>{' '}
              <strong className="text-slate-900">{fullName}</strong>
            </div>
            <div>
              <span className="text-slate-500">{isBengali ? 'ফোন:' : 'Phone:'}</span>{' '}
              <strong className="font-mono text-slate-900">{phone}</strong>
            </div>
            <div>
              <span className="text-slate-500">{isBengali ? 'হোয়াটসঅ্যাপ:' : 'WhatsApp:'}</span>{' '}
              <strong className="font-mono text-slate-900">{customerWhatsapp || phone}</strong>
            </div>
            {email && (
              <div>
                <span className="text-slate-500">{isBengali ? 'ইমেল:' : 'Email:'}</span>{' '}
                <span className="text-slate-800">{email}</span>
              </div>
            )}
          </div>

          <div className="border border-slate-300 rounded-lg p-3.5 space-y-1 bg-slate-50/40">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#064E3B] border-b border-slate-200 pb-1 mb-1.5">
              {isBengali ? 'ট্যুর ও সাফারি বিবরণ (Trip Details)' : 'Tour & Safari Details'}
            </div>
            <div>
              <span className="text-slate-500">{isBengali ? 'প্যাকেজ:' : 'Package:'}</span>{' '}
              <strong className="text-slate-900">{packageTitle}</strong>
            </div>
            <div>
              <span className="text-slate-500">{isBengali ? 'যাত্রার তারিখ:' : 'Travel Date:'}</span>{' '}
              <strong className="text-slate-900">{preferredDate}</strong>
            </div>
            <div>
              <span className="text-slate-500">{isBengali ? 'পিকআপ পয়েন্ট:' : 'Pickup Point:'}</span>{' '}
              <span className="text-slate-800 font-medium">{pickupPoint}</span>
            </div>
            <div>
              <span className="text-slate-500">{isBengali ? 'মোট যাত্রী:' : 'Total Guests:'}</span>{' '}
              <strong className="text-slate-900">
                {adultsCount + childrenCount}{' '}
                {isBengali
                  ? `জন (${adultsCount} প্রাপ্তবয়স্ক${childrenCount > 0 ? `, ${childrenCount} শিশু` : ''})`
                  : `(${adultsCount} Adults${childrenCount > 0 ? `, ${childrenCount} Children` : ''})`}
              </strong>
            </div>
          </div>
        </div>

        {/* 3. Itemized Invoice Table */}
        <div className="border border-slate-300 rounded-lg overflow-hidden">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#064E3B] text-white">
                <th className="py-2.5 px-3 w-10 text-center font-bold">#</th>
                <th className="py-2.5 px-3 font-bold">
                  {isBengali ? 'বিবরণ (Description)' : 'Description'}
                </th>
                <th className="py-2.5 px-3 text-center font-bold w-20">
                  {isBengali ? 'সংখ্যা (Qty)' : 'Qty'}
                </th>
                <th className="py-2.5 px-3 text-right font-bold w-28">
                  {isBengali ? 'হার (Rate)' : 'Rate'}
                </th>
                <th className="py-2.5 px-3 text-right font-bold w-32">
                  {isBengali ? 'মোট টাকা (Amount)' : 'Amount'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="py-2.5 px-3 text-center font-semibold">1</td>
                <td className="py-2.5 px-3">
                  <strong className="block text-slate-900">
                    {packageTitle} — {isBengali ? 'প্রাপ্তবয়স্ক যাত্রী' : 'Adult Guests'}
                  </strong>
                  <span className="text-[10px] text-slate-500">
                    {isBengali
                      ? 'বোট সাফারি, আহার, থাকা, গাইড ও বন অনুমতি অন্তর্ভুক্ত'
                      : 'Includes safari boat, meals, lodging, guide & forest permits'}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-center font-semibold">{adultsCount}</td>
                <td className="py-2.5 px-3 text-right font-mono">
                  ₹{perAdultRate.toLocaleString('en-IN')}
                </td>
                <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">
                  ₹{adultTotal.toLocaleString('en-IN')}
                </td>
              </tr>

              {childrenCount > 0 && (
                <tr>
                  <td className="py-2.5 px-3 text-center font-semibold">2</td>
                  <td className="py-2.5 px-3">
                    <strong className="block text-slate-900">
                      {isBengali ? 'শিশু যাত্রী (Child Package)' : 'Child Guests'}
                    </strong>
                  </td>
                  <td className="py-2.5 px-3 text-center font-semibold">{childrenCount}</td>
                  <td className="py-2.5 px-3 text-right font-mono">
                    ₹{perChildRate.toLocaleString('en-IN')}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">
                    ₹{childTotal.toLocaleString('en-IN')}
                  </td>
                </tr>
              )}

              {addonAmount > 0 && (
                <tr>
                  <td className="py-2.5 px-3 text-center font-semibold">
                    {childrenCount > 0 ? 3 : 2}
                  </td>
                  <td className="py-2.5 px-3">
                    <strong className="block text-slate-900">
                      {isBengali
                        ? 'প্রফেশনাল ক্যামেরাম্যান অ্যাড-অন (Cameraman Add-on)'
                        : 'Professional Cameraman Add-on'}
                    </strong>
                  </td>
                  <td className="py-2.5 px-3 text-center font-semibold">1</td>
                  <td className="py-2.5 px-3 text-right font-mono">
                    ₹{addonAmount.toLocaleString('en-IN')}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">
                    ₹{addonAmount.toLocaleString('en-IN')}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 4. Totals & Payment Summary */}
        <div className="flex justify-between items-start gap-6 pt-1">
          <div className="flex-1 text-[11px] text-slate-600 space-y-1 border border-slate-200 rounded-lg p-3 bg-slate-50/50">
            <div className="font-bold text-slate-800">
              {isBengali ? 'গুরুত্বপূর্ণ নির্দেশিকা (Notes):' : 'Important Notes:'}
            </div>
            <ul className="list-disc list-inside space-y-0.5 text-[10px]">
              <li>
                {isBengali
                  ? 'ভ্রমণের সময় সকল যাত্রীর মূল সরকারি পরিচয়পত্র (আধার/ভোটার/পাসপোর্ট) সাথে রাখা বাধ্যতামূলক।'
                  : 'All travelers must carry original Govt Photo ID during the tour.'}
              </li>
              <li>
                {isBengali
                  ? 'রেফারেন্স / বিল কোডটি গদখালি পৌঁছানোর সময় বা হেল্পলাইনে যোগাযোগে ব্যবহার করুন।'
                  : 'Quote your Reference / Bill Code at Godkhali check-in or helpline.'}
              </li>
              <li>
                {isBengali
                  ? 'সহায়তা হেল্পলাইন: +91 90024 13094 (২৪/৭)'
                  : '24/7 Support Helpline: +91 90024 13094'}
              </li>
            </ul>
          </div>

          <div className="w-72 border border-slate-300 rounded-lg overflow-hidden text-xs shrink-0">
            {discountAmount > 0 && (
              <>
                <div className="flex justify-between px-3 py-1.5 bg-slate-50 border-b border-slate-200 text-[11px]">
                  <span className="text-slate-600">{isBengali ? 'সাবটোটাল:' : 'Subtotal:'}</span>
                  <span className="font-mono font-semibold text-slate-800">
                    ₹{subtotalBeforeDiscount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between px-3 py-1.5 bg-emerald-50/70 border-b border-slate-200 text-[11px] text-emerald-800 font-semibold">
                  <span>
                    {isBengali
                      ? `রেফারেন্স ছাড় (৫%${referralCodeUsed ? ` • ${referralCodeUsed}` : ''}):`
                      : `Referral 5% Off${referralCodeUsed ? ` (${referralCodeUsed})` : ''}:`}
                  </span>
                  <span className="font-mono font-bold">-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              </>
            )}
            <div className="flex justify-between px-3 py-2 bg-slate-50 border-b border-slate-200">
              <span className="font-semibold text-slate-700">
                {isBengali ? 'মোট বিল (Total Bill):' : 'Total Bill:'}
              </span>
              <span className="font-mono font-bold text-slate-900">
                ₹{totalAmount.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between px-3 py-1.5 border-b border-slate-200 text-[11px]">
              <span className="text-slate-500">{isBengali ? 'পেমেন্ট মাধ্যম:' : 'Payment Mode:'}</span>
              <span className="font-medium text-slate-800 text-right max-w-[160px]">
                {paymentMethod}
              </span>
            </div>
            {transactionId && transactionId !== 'CONFIRMED' && (
              <div className="flex justify-between px-3 py-1.5 border-b border-slate-200 text-[11px]">
                <span className="text-slate-500">{isBengali ? 'ট্রানজ্যাকশন আইডি:' : 'Txn ID:'}</span>
                <span className="font-mono font-bold text-slate-900">{transactionId}</span>
              </div>
            )}
            <div className="flex justify-between px-3 py-2 border-b border-slate-200 text-emerald-900">
              <span className="font-semibold">
                {isBengali ? 'পরিশোধিত অর্থ (Paid):' : 'Amount Paid:'}
              </span>
              <span className="font-mono font-bold">
                ₹{paidAmount.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between px-3 py-2.5 bg-emerald-50 text-[#064E3B] font-black text-sm">
              <span>{isBengali ? 'বাকি এমাউন্ট (Due):' : 'Balance Due:'}</span>
              <span className="font-mono">₹{balanceDue.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* 5. Official Thank You & Owner Signatory Footer */}
        <div className="pt-4 border-t border-slate-300 flex items-end justify-between gap-4 text-[11px] text-slate-600">
          <div className="space-y-0.5">
            <p className="text-sm font-black text-[#064E3B] tracking-tight">
              {isBengali
                ? 'Thank You! সুন্দরবন ভ্রমণের সাথে থাকার জন্য অসংখ্য ধন্যবাদ!'
                : 'Thank You for choosing Sundarban Vromon!'}
            </p>
            <p className="text-[11px] text-slate-700">
              {isBengali ? 'কোম্পানি হেল্পলাইন (ফোন / WhatsApp):' : 'Company Helpline (Phone / WhatsApp):'}{' '}
              <strong className="font-mono text-slate-900">{BRAND_INFO.phone}</strong>
            </p>
            <p className="text-[10px] text-slate-500">
              {isBengali
                ? 'এটি কম্পিউটার-জেনারেটেড অফিসিয়াল বুকিং বিল রিসিপ্ট (১ম কপি)।'
                : 'Computer-generated Official Booking Bill Receipt (Customer Copy).'}
            </p>
          </div>

          <div className="text-right shrink-0">
            <div className="text-sm font-bold text-slate-900 tracking-wide">Srikrishna Bar</div>
            <div className="text-[10px] text-slate-600 font-semibold border-t border-slate-400 pt-1 mt-1.5">
              {isBengali
                ? 'স্বত্বাধিকারী ও অনুমোদিত স্বাক্ষর • সুন্দরবন ভ্রমণ'
                : 'Owner & Authorized Signatory • Sundarban Vromon'}
            </div>
            <div className="text-[10px] font-mono font-bold text-[#064E3B] mt-0.5">
              {BRAND_INFO.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(billContent, document.body);
};
