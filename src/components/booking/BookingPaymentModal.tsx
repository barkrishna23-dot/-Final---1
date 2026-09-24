import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import {
  Smartphone,
  Monitor,
  CreditCard,
  QrCode,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Copy,
  Check,
  X,
  Sparkles,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { BRAND_INFO } from '../../data/brandInfo';

export interface BookingPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: {
    enquiryId: string;
    fullName: string;
    phone: string;
    packageTitle: string;
    preferredDate: string;
    guestsCount: number;
    totalAmount: number;
    whatsappUrl: string;
  };
  isBengali: boolean;
  onPaymentSuccess?: (paymentInfo: { method: string; transactionId: string; amount: number }) => void;
}

export const BookingPaymentModal: React.FC<BookingPaymentModalProps> = ({
  isOpen,
  onClose,
  bookingDetails,
  isBengali,
  onPaymentSuccess,
}) => {
  // Device auto-detection (Mobile vs Desktop)
  const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  };

  const [deviceMode, setDeviceMode] = useState<'mobile' | 'desktop'>('mobile');
  const [activePaymentTab, setActivePaymentTab] = useState<'upi' | 'card'>('upi');

  // Payment amount option: Advance token (25%) or Full payment (100%)
  const [amountType, setAmountType] = useState<'advance' | 'full'>('advance');
  const advanceAmount = Math.round(bookingDetails.totalAmount * 0.25);
  const payableAmount = amountType === 'advance' ? advanceAmount : bookingDetails.totalAmount;

  // QR Code State
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [copiedUpi, setCopiedUpi] = useState<boolean>(false);

  // Card details state
  const [cardType, setCardType] = useState<'debit' | 'credit'>('debit');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvv, setCardCvv] = useState<string>('');
  const [cardName, setCardName] = useState<string>(bookingDetails.fullName || '');
  const [cardError, setCardError] = useState<string>('');
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [paymentSuccessData, setPaymentSuccessData] = useState<{
    txnId: string;
    method: string;
    amount: number;
  } | null>(null);

  // Initialize device mode upon mount or resize
  useEffect(() => {
    if (isOpen) {
      setDeviceMode(isMobile() ? 'mobile' : 'desktop');
      setPaymentSuccessData(null);
      setCardError('');
      setIsProcessingPayment(false);
    }
  }, [isOpen]);

  // UPI Payment Link & String
  const upiId = BRAND_INFO.upiId || '9002413094@ybl';
  const payeeName = BRAND_INFO.upiPayeeName || 'Sundarban Vromon';
  const upiNote = `Booking-${bookingDetails.enquiryId || 'Token'}`;
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${payableAmount}&cu=INR&tn=${encodeURIComponent(upiNote)}`;
  const phonePeIntentUrl = `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${payableAmount}&cu=INR&tn=${encodeURIComponent(upiNote)}`;
  const gpayIntentUrl = `tez://upi/pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${payableAmount}&cu=INR&tn=${encodeURIComponent(upiNote)}`;
  const paytmIntentUrl = `paytmmp://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${payableAmount}&cu=INR&tn=${encodeURIComponent(upiNote)}`;

  // Generate real QR code image
  useEffect(() => {
    if (isOpen && upiUrl) {
      QRCode.toDataURL(upiUrl, {
        width: 280,
        margin: 1.5,
        color: {
          dark: '#064E3B',
          light: '#FFFFFF',
        },
      })
        .then(url => setQrCodeDataUrl(url))
        .catch(err => {
          console.error('Failed to generate QR code', err);
        });
    }
  }, [isOpen, upiUrl]);

  // Copy UPI ID to clipboard
  const handleCopyUpi = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(upiId);
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2500);
    }
  };

  // Card formatting
  const handleCardNumberChange = (value: string) => {
    const raw = value.replace(/\D/g, '').slice(0, 16);
    const formatted = raw.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formatted);
  };

  const handleExpiryChange = (value: string) => {
    const raw = value.replace(/\D/g, '').slice(0, 4);
    if (raw.length >= 2) {
      setCardExpiry(`${raw.slice(0, 2)}/${raw.slice(2)}`);
    } else {
      setCardExpiry(raw);
    }
  };

  const handleCvvChange = (value: string) => {
    const raw = value.replace(/\D/g, '').slice(0, 4);
    setCardCvv(raw);
  };

  // Handle Card Payment Submission
  const handleCardPaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCardError('');

    const cleanCard = cardNumber.replace(/\s/g, '');
    if (cleanCard.length < 15) {
      setCardError(isBengali ? 'সঠিক কার্ড নম্বর প্রদান করুন (১৬ সংখ্যা)' : 'Please enter a valid card number (16 digits)');
      return;
    }
    if (cardExpiry.length < 5) {
      setCardError(isBengali ? 'মেয়াদ উত্তীর্ণের মাস/বছর (MM/YY) প্রদান করুন' : 'Please enter a valid expiry date (MM/YY)');
      return;
    }
    if (cardCvv.length < 3) {
      setCardError(isBengali ? 'সঠিক ৩ বা ৪ সংখ্যার CVV কোড দিন' : 'Please enter a valid 3-4 digit CVV');
      return;
    }

    setIsProcessingPayment(true);
    // Simulate secure 256-bit bank payment gateway processing
    setTimeout(() => {
      const generatedTxn = 'TXN_' + Math.random().toString(36).substring(2, 9).toUpperCase();
      setIsProcessingPayment(false);
      const successInfo = {
        txnId: generatedTxn,
        method: cardType === 'debit' ? (isBengali ? 'ডেবিট কার্ড' : 'Debit Card') : (isBengali ? 'ক্রেডিট কার্ড' : 'Credit Card'),
        amount: payableAmount,
      };
      setPaymentSuccessData(successInfo);
      if (onPaymentSuccess) {
        onPaymentSuccess({
          method: successInfo.method,
          transactionId: generatedTxn,
          amount: payableAmount,
        });
      }
    }, 1800);
  };

  // Confirm manual UPI / QR payment
  const handleConfirmUpiPaid = () => {
    const generatedTxn = 'UPI_' + Math.random().toString(36).substring(2, 10).toUpperCase();
    const successInfo = {
      txnId: generatedTxn,
      method: 'UPI / PhonePe',
      amount: payableAmount,
    };
    setPaymentSuccessData(successInfo);
    if (onPaymentSuccess) {
      onPaymentSuccess({
        method: successInfo.method,
        transactionId: generatedTxn,
        amount: payableAmount,
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#064E3B] to-[#043327] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            title={isBengali ? 'বন্ধ করুন' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{isBengali ? 'নিরাপদ বুকিং পেমেন্ট গেটওয়ে' : 'Secure Booking Payment Gateway'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight">
            {isBengali ? 'বুকিং আবেদন ও পেমেন্ট' : 'Booking & Payment'}
          </h3>

          <p className="text-emerald-100/90 text-xs sm:text-sm mt-1">
            {isBengali
              ? 'ফোন থেকে ডিরেক্ট বা কম্পিউটার থেকে অ্যামাউন্ট সহ কিউআর কোড স্ক্যান করে পেমেন্ট করুন।'
              : 'Pay directly from your phone or scan the amount-embedded QR code from desktop.'}
          </p>

          {/* Device Detection Switcher */}
          <div className="mt-4 pt-3 border-t border-emerald-800/80 flex items-center justify-between flex-wrap gap-2 text-xs">
            <span className="text-emerald-200 font-medium flex items-center gap-1.5">
              <span>{isBengali ? 'ডিভাইস মোড:' : 'Device Mode:'}</span>
              <span className="font-bold text-white bg-emerald-800/60 px-2 py-0.5 rounded-md border border-emerald-700">
                {deviceMode === 'mobile' ? (isBengali ? '📱 ফোন মোড' : '📱 Phone Mode') : (isBengali ? '💻 কম্পিউটার মোড' : '💻 Computer Mode')}
              </span>
            </span>

            {/* Manual Toggle Switcher */}
            <div className="flex items-center gap-1 bg-emerald-950/60 p-1 rounded-xl border border-emerald-700/60">
              <button
                type="button"
                onClick={() => setDeviceMode('mobile')}
                className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition-all ${
                  deviceMode === 'mobile'
                    ? 'bg-emerald-500 text-slate-950 shadow-xs'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>{isBengali ? 'ফোন' : 'Mobile'}</span>
              </button>
              <button
                type="button"
                onClick={() => setDeviceMode('desktop')}
                className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition-all ${
                  deviceMode === 'desktop'
                    ? 'bg-emerald-500 text-slate-950 shadow-xs'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>{isBengali ? 'কম্পিউটার' : 'Desktop'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Body */}
        {paymentSuccessData ? (
          /* Payment Success View */
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner animate-in zoom-in-90 duration-300">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                {isBengali ? '✓ পেমেন্ট সফলভাবে গৃহীত হয়েছে' : '✓ Payment Confirmed Successfully'}
              </span>
              <h4 className="text-2xl font-black font-heading text-slate-900">
                {isBengali ? 'ধন্যবাদ, আপনার বুকিং নিশ্চিত!' : 'Thank You, Booking Confirmed!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                {isBengali
                  ? `আপনার সুন্দরবন ভ্রমণের জন্য ₹${paymentSuccessData.amount.toLocaleString('en-IN')} সফলভাবে রেকর্ড করা হয়েছে। আমাদের টিম খুব শীঘ্রই ফোন করে যোগাযোগ করবে।`
                  : `Payment of ₹${paymentSuccessData.amount.toLocaleString('en-IN')} received. Our team will contact you shortly to coordinate logistics.`}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500">{isBengali ? 'বুকিং রেফারেন্স আইডি:' : 'Reference ID:'}</span>
                <span className="font-mono font-bold text-slate-900 text-sm">{bookingDetails.enquiryId}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500">{isBengali ? 'ট্রানজ্যাকশন আইডি:' : 'Transaction ID:'}</span>
                <span className="font-mono font-bold text-emerald-800">{paymentSuccessData.txnId}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500">{isBengali ? 'পেমেন্ট মাধ্যম:' : 'Payment Method:'}</span>
                <span className="font-bold text-slate-800">{paymentSuccessData.method}</span>
              </div>
              <div className="flex justify-between items-center font-bold text-sm pt-1 text-slate-900">
                <span>{isBengali ? 'পরিশোধিত অর্থ:' : 'Amount Paid:'}</span>
                <span className="text-emerald-700 text-base font-black">₹{paymentSuccessData.amount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={bookingDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isBengali ? 'রিসিপ্ট হোয়াটসঅ্যাপে নিশ্চিত করুন' : 'Confirm on WhatsApp'}</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm rounded-xl hover:bg-slate-100 transition-colors"
              >
                {isBengali ? 'সম্পন্ন' : 'Done'}
              </button>
            </div>
          </div>
        ) : (
          /* Payment Processing View */
          <div className="p-5 sm:p-6 space-y-5">
            {/* Tour & Amount Summary Card */}
            <div className="bg-gradient-to-r from-emerald-50/80 to-slate-50 p-4 rounded-2xl border border-emerald-200/80 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
                <div>
                  <span className="text-slate-500 block">{isBengali ? 'ট্যুর প্যাকেজ ও যাত্রী:' : 'Package & Guests:'}</span>
                  <span className="font-bold text-slate-900 text-sm">{bookingDetails.packageTitle}</span>
                  <span className="text-slate-600 block text-[11px]">
                    {bookingDetails.guestsCount} {isBengali ? 'জন অতিথি' : 'Guests'} • {bookingDetails.preferredDate}
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-slate-500 block">{isBengali ? 'মোট ভ্রমণ ব্যয়:' : 'Total Tour Cost:'}</span>
                  <span className="font-black text-slate-800 text-base">
                    ₹{bookingDetails.totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Amount Selection Toggle (25% Token Advance vs 100% Full) */}
              <div className="pt-2.5 border-t border-emerald-200/80">
                <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                  {isBengali ? 'পরিশোধের পরিমাণ নির্বাচন করুন:' : 'Select Payable Option:'}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setAmountType('advance')}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      amountType === 'advance'
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm ring-2 ring-emerald-200'
                        : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{isBengali ? '২৫% অ্যাডভান্স টোকেন' : '25% Booking Token'}</span>
                      {amountType === 'advance' && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div className="text-base font-black mt-0.5">
                      ₹{advanceAmount.toLocaleString('en-IN')}
                    </div>
                    <div className={`text-[10px] mt-0.5 ${amountType === 'advance' ? 'text-emerald-100' : 'text-slate-500'}`}>
                      {isBengali ? 'বাকি ৭৫% গদখালি পৌঁছানোর পর' : 'Remaining 75% at Godkhali'}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAmountType('full')}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      amountType === 'full'
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm ring-2 ring-emerald-200'
                        : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{isBengali ? '১০০% ফুল পেমেন্ট' : '100% Full Payment'}</span>
                      {amountType === 'full' && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div className="text-base font-black mt-0.5">
                      ₹{bookingDetails.totalAmount.toLocaleString('en-IN')}
                    </div>
                    <div className={`text-[10px] mt-0.5 ${amountType === 'full' ? 'text-emerald-100' : 'text-slate-500'}`}>
                      {isBengali ? 'সম্পূর্ণ ঝুঁকিমুক্ত নিশ্চিতকরণ' : 'Complete instant confirmation'}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Mode Selector Tabs (UPI / PhonePe vs Debit/Credit Cards) */}
            <div className="flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setActivePaymentTab('upi')}
                className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activePaymentTab === 'upi'
                    ? 'bg-white text-[#064E3B] shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <QrCode className="w-4 h-4 text-emerald-700" />
                <span>{deviceMode === 'desktop' ? (isBengali ? 'কিউআর কোড / ইউপিআই' : 'QR Code / UPI') : (isBengali ? 'ইউপিআই / PhonePe' : 'PhonePe / UPI')}</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePaymentTab('card')}
                className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activePaymentTab === 'card'
                    ? 'bg-white text-[#064E3B] shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CreditCard className="w-4 h-4 text-emerald-700" />
                <span>{isBengali ? 'কার্ড অপশন (ডেবিট ও ক্রেডিট)' : 'Card Option (Debit & Credit)'}</span>
              </button>
            </div>

            {/* TAB 1: UPI / PhonePe (Device specific: QR Code on Desktop, Direct PhonePe on Mobile) */}
            {activePaymentTab === 'upi' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                {deviceMode === 'desktop' ? (
                  /* DESKTOP VIEW: Dynamic QR Code with Amount prominently displayed */
                  <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200 text-center space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200">
                      <QrCode className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{isBengali ? 'কম্পিউটার কিউআর কোড (অ্যামাউন্ট সহ)' : 'Desktop Dynamic QR Code (Amount Embedded)'}</span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-900">
                        {isBengali ? 'যেকোনো UPI অ্যাপ দিয়ে স্ক্যান করুন' : 'Scan using any UPI App on your phone'}
                      </h4>
                      <p className="text-xs text-slate-500">
                        PhonePe, Google Pay, Paytm, BHIM বা ব্যাংক অ্যাপের ক্যামেরা অন করে স্ক্যান করুন
                      </p>
                    </div>

                    {/* QR Code Container */}
                    <div className="inline-block p-3 bg-white rounded-2xl border-2 border-emerald-600/30 shadow-md relative group">
                      {qrCodeDataUrl ? (
                        <img
                          src={qrCodeDataUrl}
                          alt={`UPI QR Code for INR ${payableAmount}`}
                          className="w-56 h-56 mx-auto rounded-lg object-contain"
                        />
                      ) : (
                        <div className="w-56 h-56 flex items-center justify-center bg-slate-100 rounded-lg text-xs text-slate-500">
                          {isBengali ? 'কিউআর কোড তৈরি হচ্ছে...' : 'Generating QR code...'}
                        </div>
                      )}

                      {/* Prominent Amount Badge Embedded on QR Display */}
                      <div className="mt-2 py-1.5 px-3 bg-emerald-900 text-white rounded-xl font-heading text-sm font-black flex items-center justify-center gap-1.5 shadow-xs">
                        <span>{isBengali ? 'নির্ধারিত অ্যামাউন্ট:' : 'Exact Amount:'}</span>
                        <span className="text-[#F4B942] text-base">₹{payableAmount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    {/* Supported UPI Apps Badges */}
                    <div className="flex items-center justify-center gap-2 flex-wrap text-[11px] font-semibold text-slate-600">
                      <span className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-2xs">PhonePe</span>
                      <span className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-2xs">Google Pay</span>
                      <span className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-2xs">Paytm</span>
                      <span className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 shadow-2xs">BHIM UPI</span>
                    </div>

                    {/* Copy UPI ID Alternative */}
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200 text-xs">
                      <div className="text-left truncate">
                        <span className="text-[10px] text-slate-400 block">{isBengali ? 'অফিসিয়াল ইউপিআই আইডি:' : 'Official UPI ID:'}</span>
                        <span className="font-mono font-bold text-slate-800">{upiId}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyUpi}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                      >
                        {copiedUpi ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">{isBengali ? 'কপি হয়েছে' : 'Copied'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{isBengali ? 'কপি' : 'Copy'}</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Confirm Button for Desktop */}
                    <button
                      type="button"
                      onClick={handleConfirmUpiPaid}
                      className="w-full py-3.5 rounded-xl bg-[#064E3B] hover:bg-[#08614a] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      <span>{isBengali ? 'আমি কিউআর কোড স্ক্যান করে পেমেন্ট করেছি' : 'I Have Completed UPI Payment'}</span>
                    </button>
                  </div>
                ) : (
                  /* MOBILE VIEW: Direct PhonePe & UPI Intent Buttons */
                  <div className="space-y-3.5">
                    <div className="p-3.5 bg-purple-50/80 border border-purple-200 rounded-2xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-bold text-purple-900 uppercase tracking-wide">
                          {isBengali ? 'ফোন থেকে ডিরেক্ট পেমেন্ট' : 'Direct Mobile Phone Payment'}
                        </span>
                        <div className="text-xs text-purple-700">
                          {isBengali ? 'নিচের বাটনে ক্লিক করলেই সরাসরি PhonePe অ্যাপ খুলে যাবে' : 'Click below to launch PhonePe app directly'}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-black text-purple-900 font-heading">
                          ₹{payableAmount.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    {/* Direct PhonePe Action Button */}
                    <a
                      href={phonePeIntentUrl}
                      onClick={() => {
                        // Also trigger fallback to general UPI if phonepe scheme is not handled
                        setTimeout(() => {
                          window.location.href = upiUrl;
                        }, 600);
                      }}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#5f259f] hover:bg-[#521e8d] text-white font-bold text-sm shadow-md transition-all flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-black text-sm">
                          पे
                        </div>
                        <span className="text-left">
                          <strong className="block leading-tight">PhonePe ডিরেক্ট ক্লিক করুন</strong>
                          <span className="text-[11px] font-normal text-purple-100">Pay directly via PhonePe App</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-1 font-bold text-sm bg-white/15 px-3 py-1 rounded-lg">
                        <span>₹{payableAmount.toLocaleString('en-IN')}</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </div>
                    </a>

                    {/* Google Pay & Paytm Direct Buttons */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href={gpayIntentUrl}
                        className="py-3 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 shadow-2xs transition-all"
                      >
                        <span className="text-blue-600 font-black">G</span>
                        <span>Google Pay</span>
                      </a>

                      <a
                        href={paytmIntentUrl}
                        className="py-3 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 shadow-2xs transition-all"
                      >
                        <span className="text-sky-600 font-black">Paytm</span>
                        <span>Paytm UPI</span>
                      </a>
                    </div>

                    {/* Any UPI App Link */}
                    <a
                      href={upiUrl}
                      className="w-full py-3 px-4 rounded-xl border-2 border-emerald-600 text-emerald-800 hover:bg-emerald-50 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <Smartphone className="w-4 h-4 text-emerald-700" />
                      <span>{isBengali ? 'অন্যান্য যেকোনো UPI অ্যাপ দিয়ে পে করুন' : 'Pay with any other UPI App'}</span>
                    </a>

                    {/* Card Switch CTA prompt as user requested */}
                    <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 flex items-center justify-between text-xs text-amber-900">
                      <span>{isBengali ? 'কার্ড দিয়ে দিতে চান? ডেবিট ও ক্রেডিট কার্ড অপশন আছে:' : 'Prefer cards? Debit & Credit cards available:'}</span>
                      <button
                        type="button"
                        onClick={() => setActivePaymentTab('card')}
                        className="px-2.5 py-1 bg-amber-600 text-white rounded-lg font-bold text-[11px] hover:bg-amber-700 cursor-pointer"
                      >
                        {isBengali ? 'কার্ড দেখুন 💳' : 'View Cards 💳'}
                      </button>
                    </div>

                    {/* Confirm Button for Mobile */}
                    <button
                      type="button"
                      onClick={handleConfirmUpiPaid}
                      className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{isBengali ? 'পেমেন্ট সম্পন্ন হয়েছে (নিশ্চিত করুন)' : 'I Have Completed Payment (Confirm)'}</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: Card Option (Debit Card & Credit Card Form) */}
            {activePaymentTab === 'card' && (
              <form onSubmit={handleCardPaymentSubmit} className="space-y-4 animate-in fade-in duration-200">
                {/* Debit Card vs Credit Card Selection */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCardType('debit')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      cardType === 'debit'
                        ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>{isBengali ? 'ডেবিট কার্ড (Debit Card)' : 'Debit Card'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCardType('credit')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      cardType === 'credit'
                        ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>{isBengali ? 'ক্রেডিট কার্ড (Credit Card)' : 'Credit Card'}</span>
                  </button>
                </div>

                {/* Card Brand Badges */}
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {isBengali ? 'সমর্থিত কার্ড নেটওয়ার্ক:' : 'Supported Networks:'}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600">
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">Visa</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">Mastercard</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">RuPay</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">Maestro</span>
                  </div>
                </div>

                {cardError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{cardError}</span>
                  </div>
                )}

                {/* Card Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {cardType === 'debit' ? (isBengali ? 'ডেবিট কার্ড নম্বর *' : 'Debit Card Number *') : (isBengali ? 'ক্রেডিট কার্ড নম্বর *' : 'Credit Card Number *')}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={cardNumber}
                      onChange={e => handleCardNumberChange(e.target.value)}
                      placeholder="XXXX XXXX XXXX XXXX"
                      maxLength={19}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-2 focus:ring-emerald-100 text-sm font-mono tracking-wider bg-white pr-10"
                    />
                    <CreditCard className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
                  </div>
                </div>

                {/* Expiry & CVV */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isBengali ? 'মেয়াদ উত্তীর্ণের তারিখ *' : 'Expiry Date *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={cardExpiry}
                      onChange={e => handleExpiryChange(e.target.value)}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] text-sm font-mono bg-white"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-bold text-slate-700">
                        {isBengali ? 'সিভিভি (CVV/CVC) *' : 'CVV / CVC *'}
                      </label>
                      <span className="text-[10px] text-slate-400">
                        {isBengali ? 'কার্ডের পেছনের ৩ সংখ্যা' : '3 digits on back'}
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        value={cardCvv}
                        onChange={e => handleCvvChange(e.target.value)}
                        placeholder="•••"
                        maxLength={4}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] text-sm font-mono bg-white pr-10"
                      />
                      <Lock className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
                    </div>
                  </div>
                </div>

                {/* Cardholder Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isBengali ? 'কার্ডধারীর নাম (Name on Card) *' : 'Cardholder Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={cardName}
                    onChange={e => setCardName(e.target.value)}
                    placeholder={isBengali ? 'যেমন: সুভাষ বোস' : 'e.g. Srikrishna Bar'}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#064E3B] text-sm bg-white"
                  />
                </div>

                {/* Security Guarantee Note */}
                <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    {isBengali
                      ? '256-বিট এনক্রিপশন ও আরবিআই নির্দেশিকা মেনে ব্যাংকিং গেটওয়ে পরিচালিত হয়।'
                      : '256-bit bank-grade encryption with full compliance to RBI payment guidelines.'}
                  </span>
                </div>

                {/* Submit Card Payment Button */}
                <button
                  type="submit"
                  disabled={isProcessingPayment}
                  className="w-full py-3.5 rounded-xl bg-[#064E3B] hover:bg-[#08614a] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  <Lock className="w-4 h-4 text-[#F4B942]" />
                  <span>
                    {isProcessingPayment
                      ? isBengali
                        ? 'ব্যাংক যাচাই ও পেমেন্ট প্রসেসিং হচ্ছে...'
                        : 'Verifying Bank & Processing...'
                      : isBengali
                      ? `₹${payableAmount.toLocaleString('en-IN')} পে করুন (${cardType === 'debit' ? 'ডেবিট কার্ড' : 'ক্রেডিট কার্ড'})`
                      : `Pay ₹${payableAmount.toLocaleString('en-IN')} with ${cardType === 'debit' ? 'Debit Card' : 'Credit Card'}`}
                  </span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isBengali ? '১০০% নিরাপদ ও ভেরিফাইড' : '100% Safe & Verified'}</span>
          </span>
          <span className="font-mono text-[11px]">Ref: {bookingDetails.enquiryId}</span>
        </div>
      </div>
    </div>
  );
};
