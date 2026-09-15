import React, { useState, useEffect, useRef } from 'react';
import { useAdmin } from '../context/AdminContext';
import { useLanguage } from '../context/LanguageContext';
import { BookingEnquiry } from '../types';
import { BRAND_INFO } from '../data/brandInfo';
import {
  Lock,
  Unlock,
  CheckCircle2,
  Trash2,
  Download,
  Star,
  ShieldCheck,
  Phone,
  Mail,
  User,
  Eye,
  EyeOff,
  RotateCw,
  AlertCircle,
  Settings,
  Shield,
  Clock,
  KeyRound,
  ArrowLeft,
  MessageCircle,
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const {
    isAdminAuthenticated,
    adminLogin,
    adminLogout,
    currentUsername,
    updateAdminCredentials,
    resetAdminPassword,
    enquiries,
    reviews,
    updateEnquiryStatus,
    deleteEnquiry,
    approveReview,
    deleteReview,
  } = useAdmin();

  const { isBengali } = useLanguage();

  // Login form state
  const [userInput, setUserInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaExpected, setCaptchaExpected] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Forgot password state
  const [isForgotMode, setIsForgotMode] = useState(false);
  const [forgotRecoveryInput, setForgotRecoveryInput] = useState('');
  const [forgotNewPass, setForgotNewPass] = useState('');
  const [forgotConfirmPass, setForgotConfirmPass] = useState('');
  const [forgotShowPass, setForgotShowPass] = useState(false);
  const [forgotError, setForgotError] = useState<string | null>(null);
  const [forgotSuccess, setForgotSuccess] = useState<string | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  // Admin tabs & Settings state
  const [activeTab, setActiveTab] = useState<'enquiries' | 'reviews' | 'credentials'>('enquiries');
  const [newUsername, setNewUsername] = useState(currentUsername || 'admin');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [credentialSuccessMsg, setCredentialSuccessMsg] = useState('');
  const [credentialErrorMsg, setCredentialErrorMsg] = useState('');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generate random 5-character Captcha string
  const generateNewCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaExpected(code);
    setCaptchaInput('');
    setLoginError(null);
  };

  // Draw Captcha on canvas whenever captchaExpected changes
  useEffect(() => {
    if (!isAdminAuthenticated && !captchaExpected) {
      generateNewCaptcha();
    }
  }, [isAdminAuthenticated, captchaExpected]);

  useEffect(() => {
    if (!isAdminAuthenticated && captchaExpected && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;

      // Fill light background
      ctx.fillStyle = '#F8FAFC';
      ctx.fillRect(0, 0, width, height);

      // Add random security noise lines
      const lineColors = ['#CBD5E1', '#94A3B8', '#A7F3D0', '#FDE68A', '#E2E8F0'];
      for (let i = 0; i < 6; i++) {
        ctx.strokeStyle = lineColors[i % lineColors.length];
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(Math.random() * width, Math.random() * height);
        ctx.bezierCurveTo(
          Math.random() * width,
          Math.random() * height,
          Math.random() * width,
          Math.random() * height,
          Math.random() * width,
          Math.random() * height
        );
        ctx.stroke();
      }

      // Add random noise dots
      for (let i = 0; i < 45; i++) {
        ctx.fillStyle = ['#94A3B8', '#64748B', '#059669', '#D97706'][i % 4];
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * height, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render each character with rotation and distinct palette
      const charColors = ['#064E3B', '#0F766E', '#B45309', '#1E3A8A', '#047857'];
      ctx.textBaseline = 'middle';
      const charSpacing = width / (captchaExpected.length + 1);

      for (let i = 0; i < captchaExpected.length; i++) {
        const char = captchaExpected[i];
        ctx.save();
        const x = charSpacing * (i + 1);
        const y = height / 2 + (Math.random() * 6 - 3);
        const angle = (Math.random() * 26 - 13) * (Math.PI / 180);

        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.font = 'bold 24px "Courier New", Courier, monospace';
        ctx.fillStyle = charColors[i % charColors.length];
        ctx.fillText(char, -8, 0);
        ctx.restore();
      }
    }
  }, [isAdminAuthenticated, captchaExpected]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginError(null);

    // 1. Verify Captcha
    const cleanedCaptchaInput = captchaInput.trim().toUpperCase();
    if (!cleanedCaptchaInput) {
      setLoginError(
        isBengali
          ? 'অনুগ্রহ করে সিকিউরিটি ক্যাপচা কোডটি পূরণ করুন।'
          : 'Please enter the security captcha code.'
      );
      setIsSubmitting(false);
      return;
    }

    if (cleanedCaptchaInput !== captchaExpected) {
      setLoginError(
        isBengali
          ? 'ক্যাপচা কোড মেলেনি! সঠিক কোডটি পুনরায় টাইপ করুন।'
          : 'Invalid captcha code! Please type the code shown.'
      );
      generateNewCaptcha();
      setIsSubmitting(false);
      return;
    }

    // 2. Verify User ID & Password via adminLogin
    if (!userInput.trim()) {
      setLoginError(
        isBengali ? 'অনুগ্রহ করে ইউজার আইডি দিন।' : 'Please enter your User ID.'
      );
      setIsSubmitting(false);
      return;
    }

    if (!passInput) {
      setLoginError(
        isBengali ? 'অনুগ্রহ করে পাসওয়ার্ড প্রদান করুন।' : 'Please enter your password.'
      );
      setIsSubmitting(false);
      return;
    }

    const result = adminLogin(userInput, passInput);
    if (!result.success) {
      if (result.error === 'invalid_user') {
        setLoginError(
          isBengali
            ? 'ভুল ইউজার আইডি! শুধুমাত্র অনুমোদিত সাইট ওনার লগইন করতে পারবেন।'
            : 'Invalid User ID! Only the authorized site owner can access.'
        );
      } else {
        setLoginError(
          isBengali
            ? 'ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ড দিয়ে পুনরায় চেষ্টা করুন।'
            : 'Incorrect password! Please check and try again.'
        );
      }
      generateNewCaptcha();
      setIsSubmitting(false);
      return;
    }

    // Success
    setLoginError(null);
    setUserInput('');
    setPassInput('');
    setCaptchaInput('');
    setIsSubmitting(false);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError(null);
    setForgotSuccess(null);

    const cleanInput = forgotRecoveryInput.trim();
    if (!cleanInput) {
      setForgotError(
        isBengali
          ? 'অনুগ্রহ করে ওনারের রেজিস্টার্ড ফোন (9002413094) বা ইমেল দিন।'
          : 'Please enter registered owner phone or email.'
      );
      return;
    }

    if (forgotNewPass.length < 6) {
      setForgotError(
        isBengali
          ? 'নতুন পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।'
          : 'New password must be at least 6 characters.'
      );
      return;
    }

    if (forgotNewPass !== forgotConfirmPass) {
      setForgotError(
        isBengali ? 'পাসওয়ার্ড দুটি মেলেনি।' : 'Passwords do not match.'
      );
      return;
    }

    setIsResetting(true);
    const result = resetAdminPassword(cleanInput, forgotNewPass);
    setIsResetting(false);

    if (result.success) {
      setForgotSuccess(result.message);
      setPassInput(forgotNewPass);
      setTimeout(() => {
        setIsForgotMode(false);
        setForgotSuccess(null);
      }, 2000);
    } else {
      setForgotError(result.message);
    }
  };

  const handleUpdateCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    setCredentialSuccessMsg('');
    setCredentialErrorMsg('');

    if (!newUsername.trim()) {
      setCredentialErrorMsg(isBengali ? 'ইউজার আইডি খালি রাখা যাবে না।' : 'User ID cannot be empty.');
      return;
    }
    if (newPassword.length < 6) {
      setCredentialErrorMsg(
        isBengali
          ? 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।'
          : 'Password must be at least 6 characters long.'
      );
      return;
    }
    if (newPassword !== confirmPassword) {
      setCredentialErrorMsg(
        isBengali ? 'দুটো পাসওয়ার্ড মেলেনি।' : 'Passwords do not match.'
      );
      return;
    }

    const ok = updateAdminCredentials(newUsername.trim(), newPassword);
    if (ok) {
      setCredentialSuccessMsg(
        isBengali
          ? 'ইউজার আইডি ও পাসওয়ার্ড সফলভাবে আপডেট করা হয়েছে!'
          : 'User ID and Password successfully updated!'
      );
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setCredentialErrorMsg(
        isBengali ? 'আপডেট করা সম্ভব হয়নি।' : 'Failed to update credentials.'
      );
    }
  };

  const handleExportCSV = () => {
    if (enquiries.length === 0) return;
    const headers =
      'ID,Guest Name,Phone,Email,Package,Travel Date,Adults,Children,Estimated Cost,Status,Created At\n';
    const rows = enquiries
      .map(e => {
        const name = (e as any).guestName || e.fullName || '';
        const phone = (e as any).guestPhone || e.phone || '';
        const email = (e as any).guestEmail || e.email || '';
        const date = (e as any).travelDate || e.preferredDate || '';
        const adults = (e as any).adults || e.adultsCount || 1;
        const kids = (e as any).children || e.childrenCount || 0;
        const cost = (e as any).calculatedEstimatedCost || 0;
        return `"${e.id}","${name}","${phone}","${email}","${e.packageSlug}","${date}",${adults},${kids},${cost},"${e.status}","${e.createdAt}"`;
      })
      .join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `sundarban_vromon_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Analytics calculation
  const totalRevenue = enquiries.reduce(
    (acc, curr) => acc + ((curr as any).calculatedEstimatedCost || 0),
    0
  );
  const pendingCount = enquiries.filter(e => e.status === 'pending').length;

  // 1. Unauthenticated Login Screen
  if (!isAdminAuthenticated) {
    if (isForgotMode) {
      return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xl space-y-6">
            {/* Top Navigation */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setIsForgotMode(false);
                  setForgotError(null);
                  setForgotSuccess(null);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{isBengali ? 'লগইন-এ ফিরে যান' : 'Back to Login'}</span>
              </button>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                {isBengali ? 'ওনার রিকভারি' : 'Owner Recovery'}
              </span>
            </div>

            {/* Top Key Badge */}
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-emerald-950 text-[#F4B942] mx-auto flex items-center justify-center shadow-md border border-emerald-800">
                <KeyRound className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900">
                {isBengali ? 'পাসওয়ার্ড পুনরুদ্ধার' : 'Reset Owner Password'}
              </h2>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                {isBengali
                  ? 'আপনার রেজিস্টার্ড ওনার মোবাইল নম্বর (যেমন: 9002413094) অথবা ইমেল দিয়ে ভেরিফাই করে সরাসরি নতুন পাসওয়ার্ড সেট করুন।'
                  : 'Verify with your registered owner mobile or email to securely set a new password.'}
              </p>
            </div>

            {/* Reset Form */}
            <form onSubmit={handleResetPassword} className="space-y-4">
              {/* Registered Phone or Email */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-bold text-slate-700">
                  {isBengali ? 'রেজিস্টার্ড ফোন নম্বর বা ইমেল' : 'Registered Phone or Email'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={forgotRecoveryInput}
                    onChange={e => setForgotRecoveryInput(e.target.value)}
                    placeholder={isBengali ? 'যেমন: 9002413094 বা barkrishna23@gmail.com' : 'e.g. 9002413094 or owner email'}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/20 outline-none transition-all text-slate-800 font-medium"
                    autoFocus
                    required
                  />
                </div>
              </div>

              {/* New Password */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-bold text-slate-700">
                  {isBengali ? 'নতুন গোপন পাসওয়ার্ড' : 'New Password (Min 6 chars)'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={forgotShowPass ? 'text' : 'password'}
                    value={forgotNewPass}
                    onChange={e => setForgotNewPass(e.target.value)}
                    placeholder={isBengali ? 'কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড' : 'Minimum 6 characters'}
                    className="w-full pl-10 pr-11 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/20 outline-none transition-all text-slate-800 font-medium"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setForgotShowPass(!forgotShowPass)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                    tabIndex={-1}
                  >
                    {forgotShowPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm New Password */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-bold text-slate-700">
                  {isBengali ? 'নতুন পাসওয়ার্ড নিশ্চিত করুন' : 'Confirm New Password'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={forgotShowPass ? 'text' : 'password'}
                    value={forgotConfirmPass}
                    onChange={e => setForgotConfirmPass(e.target.value)}
                    placeholder={isBengali ? 'পুনরায় নতুন পাসওয়ার্ড লিখুন' : 'Re-enter new password'}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/20 outline-none transition-all text-slate-800 font-medium"
                    required
                  />
                </div>
              </div>

              {/* Error Message */}
              {forgotError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2 text-left">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-700 font-semibold">{forgotError}</p>
                </div>
              )}

              {/* Success Message */}
              {forgotSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2 text-left">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-emerald-800 font-semibold">{forgotSuccess}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isResetting}
                className="w-full py-3 rounded-xl bg-[#064E3B] hover:bg-[#08614a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-75"
              >
                <KeyRound className="w-4 h-4 text-amber-400" />
                <span>{isBengali ? 'পাসওয়ার্ড রিসেট করুন' : 'Reset & Save Password'}</span>
              </button>
            </form>

            {/* Direct WhatsApp Support */}
            <div className="pt-2 border-t border-slate-100">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
                  'হ্যালো শ্রীকৃষ্ণ দা, আমি সুন্দরবন ভ্রমণ ওয়েবসাইট অ্যাডমিন চ্যানেলের পাসওয়ার্ড সংক্রান্ত সহযোগিতা চাচ্ছি।'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-4 py-2.5 rounded-xl w-full transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{isBengali ? 'হোয়াটসঅ্যাপে ওনার সাপোর্ট নিন' : 'Contact Owner Support on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xl space-y-6">
          {/* Top Lock Badge */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950 text-[#F4B942] mx-auto flex items-center justify-center shadow-md border border-emerald-800">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              {isBengali ? 'ওনার সিকিউরিটি লগইন' : 'Owner Admin Login'}
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* User ID Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 text-left">
                {isBengali ? 'ইউজার আইডি (User ID)' : 'User ID'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={userInput}
                  onChange={e => setUserInput(e.target.value)}
                  placeholder={isBengali ? 'ইউজার আইডি লিখুন' : 'Enter User ID'}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/20 outline-none transition-all text-slate-800 font-medium"
                  autoFocus
                  required
                />
              </div>
            </div>

            {/* Password Field with Forgot Password on top right */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-slate-700 text-left">
                  {isBengali ? 'পাসওয়ার্ড (Password)' : 'Password'}
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setIsForgotMode(true);
                    setForgotError(null);
                    setForgotSuccess(null);
                    setForgotRecoveryInput('');
                    setForgotNewPass('');
                    setForgotConfirmPass('');
                  }}
                  className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 transition-colors hover:underline cursor-pointer"
                >
                  {isBengali ? 'পাসওয়ার্ড ভুলে গেছেন?' : 'Forgot Password?'}
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passInput}
                  onChange={e => setPassInput(e.target.value)}
                  placeholder={isBengali ? 'গোপন পাসওয়ার্ড লিখুন' : 'Enter Secret Password'}
                  className="w-full pl-10 pr-11 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/20 outline-none transition-all text-slate-800 font-medium"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  tabIndex={-1}
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Captcha Section */}
            <div className="space-y-2 pt-1">
              {/* Graphical Captcha Canvas & Refresh Card */}
              <div className="flex items-center gap-3 p-2.5 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="relative border border-slate-300 rounded-xl overflow-hidden bg-white shadow-inner flex-1 flex items-center justify-center">
                  <canvas
                    ref={canvasRef}
                    width={180}
                    height={48}
                    className="block pointer-events-none select-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={generateNewCaptcha}
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#064E3B] transition-colors border border-emerald-200/70 shrink-0"
                  title={isBengali ? 'ক্যাপচা পরিবর্তন করুন' : 'Refresh captcha'}
                >
                  <RotateCw className="w-4 h-4" />
                </button>
              </div>

              {/* Captcha Input */}
              <input
                type="text"
                value={captchaInput}
                onChange={e => setCaptchaInput(e.target.value.toUpperCase())}
                placeholder={isBengali ? 'উপরের ৫টি অক্ষর/সংখ্যা এখানে লিখুন' : 'Enter 5-character Captcha'}
                maxLength={5}
                className="w-full text-center tracking-[0.25em] text-base font-bold font-mono py-2.5 px-4 rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-2 focus:ring-[#064E3B]/20 uppercase outline-none transition-all"
                required
              />
            </div>

            {/* Error Message Box */}
            {loginError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2 text-left">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <p className="text-xs text-red-700 font-semibold">{loginError}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-[#064E3B] hover:bg-[#08614a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-75"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{isBengali ? 'চ্যানেল আনলক করুন' : 'Verify & Unlock Admin Channel'}</span>
            </button>
          </form>

          {/* Bottom Secondary Link */}
          <div className="text-center pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setIsForgotMode(true);
                setForgotError(null);
                setForgotSuccess(null);
                setForgotRecoveryInput('');
                setForgotNewPass('');
                setForgotConfirmPass('');
              }}
              className="text-xs text-slate-500 hover:text-emerald-800 font-medium transition-colors"
            >
              {isBengali ? 'পাসওয়ার্ড ভুলে গেছেন? এখানে ক্লিক করুন' : 'Forgot Password? Click here to reset'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Authenticated Admin Dashboard
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Admin Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>OWNER SECURED CONSOLE</span>
            </span>
            <span className="text-xs text-slate-500 font-medium">
              (Logged in as: <strong className="text-emerald-900">{currentUsername || 'admin'}</strong>)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#064E3B]">
            {isBengali ? 'সুন্দরবন ভ্রমণ — অ্যাডমিন কন্ট্রোল' : 'Sundarban Vromon Admin'}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={adminLogout}
            className="px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Unlock className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Stats Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-400 font-semibold block">Total Enquiries</span>
          <div className="text-2xl font-black text-slate-900">{enquiries.length}</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-amber-600 font-semibold block">Pending Approvals</span>
          <div className="text-2xl font-black text-amber-700">{pendingCount}</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-emerald-600 font-semibold block">Total Pipeline Value</span>
          <div className="text-2xl font-black text-emerald-800">
            ₹{totalRevenue.toLocaleString('en-IN')}
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-purple-600 font-semibold block">Total Reviews</span>
          <div className="text-2xl font-black text-purple-900">{reviews.length}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('enquiries')}
          className={`px-5 py-2.5 font-bold text-xs sm:text-sm border-b-2 transition-all ${
            activeTab === 'enquiries'
              ? 'border-[#064E3B] text-[#064E3B]'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          Booking Enquiries ({enquiries.length})
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-5 py-2.5 font-bold text-xs sm:text-sm border-b-2 transition-all ${
            activeTab === 'reviews'
              ? 'border-[#064E3B] text-[#064E3B]'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          Guest Reviews Moderation ({reviews.length})
        </button>
        <button
          onClick={() => setActiveTab('credentials')}
          className={`px-5 py-2.5 font-bold text-xs sm:text-sm border-b-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'credentials'
              ? 'border-[#064E3B] text-[#064E3B]'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Settings className="w-3.5 h-3.5" />
          <span>{isBengali ? 'ওনার ক্রিডেনশিয়াল সেটিংস' : 'Owner Credentials'}</span>
        </button>
      </div>

      {/* 1. Enquiries Tab */}
      {activeTab === 'enquiries' && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-4">Guest</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Package</th>
                  <th className="p-4">Date & Pax</th>
                  <th className="p-4">Est. Cost</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {enquiries.map(enq => {
                  const guestName = (enq as any).guestName || enq.fullName || 'Guest';
                  const guestPhone = (enq as any).guestPhone || enq.phone || 'N/A';
                  const guestEmail = (enq as any).guestEmail || enq.email || '';
                  const travelDate = (enq as any).travelDate || (enq as any).preferredDate || 'TBD';
                  const adults = (enq as any).adults || (enq as any).adultsCount || 1;
                  const kids = (enq as any).children || (enq as any).childrenCount || 0;
                  const cost = (enq as any).calculatedEstimatedCost || 0;

                  return (
                    <tr key={enq.id} className="hover:bg-slate-50/70">
                      <td className="p-4">
                        <strong className="text-slate-900 block font-heading">{guestName}</strong>
                        <span className="text-[11px] text-slate-400">
                          {new Date(enq.createdAt).toLocaleDateString()}
                        </span>
                        {((enq as any).idNumber || (enq as any).idType) && (
                          <div className="text-[10px] text-emerald-800 font-medium bg-emerald-50 px-1.5 py-0.5 rounded mt-1 border border-emerald-200/80 inline-block">
                            🪪 {((enq as any).idType || 'ID').toUpperCase()}:{' '}
                            {(enq as any).idNumber || 'Not provided'}
                          </div>
                        )}
                        {(enq as any).originType && (
                          <div className="text-[10px] text-slate-600 mt-0.5">
                            📍{' '}
                            {(enq as any).originType === 'west_bengal'
                              ? 'West Bengal'
                              : (enq as any).originType === 'other_state'
                              ? 'Other State'
                              : 'International'}
                            {(enq as any).originStateOrCountry
                              ? ` (${(enq as any).originStateOrCountry})`
                              : ''}
                          </div>
                        )}
                      </td>

                      <td className="p-4 space-y-0.5">
                        <div className="flex items-center gap-1 text-slate-700">
                          <Phone className="w-3 h-3 text-emerald-600" />
                          <span>{guestPhone}</span>
                        </div>
                        {guestEmail && (
                          <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                            <Mail className="w-3 h-3 text-slate-400" />
                            <span>{guestEmail}</span>
                          </div>
                        )}
                      </td>

                      <td className="p-4 font-medium text-slate-800">{enq.packageSlug}</td>

                      <td className="p-4 text-slate-700">
                        <div>{travelDate}</div>
                        <div className="text-[11px] text-slate-500">
                          {adults} Adults {kids > 0 ? `, ${kids} Kids` : ''}
                        </div>
                        {(enq as any).groupType && (
                          <span className="inline-block mt-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 capitalize">
                            {(enq as any).groupType === 'female-friends'
                              ? 'বান্ধবী / Girls Group'
                              : (enq as any).groupType === 'family'
                              ? 'ফ্যামিলি'
                              : (enq as any).groupType === 'couple'
                              ? 'কাপেল'
                              : (enq as any).groupType === 'friends'
                              ? 'বন্ধু'
                              : (enq as any).groupType}
                          </span>
                        )}
                      </td>

                      <td className="p-4 font-bold text-slate-900">
                        ₹{cost.toLocaleString('en-IN')}
                      </td>

                      <td className="p-4">
                        <select
                          value={enq.status}
                          onChange={e => updateEnquiryStatus(enq.id, e.target.value as any)}
                          className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${
                            enq.status === 'confirmed'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : enq.status === 'cancelled'
                              ? 'bg-red-50 text-red-800 border-red-300'
                              : 'bg-amber-50 text-amber-800 border-amber-300'
                          }`}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>

                      <td className="p-4 text-right">
                        <button
                          onClick={() => deleteEnquiry(enq.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete Enquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 2. Reviews Tab */}
      {activeTab === 'reviews' && (
        <div className="space-y-4">
          {reviews.map(r => (
            <div
              key={r.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <strong className="text-slate-900 text-sm font-heading">{r.guestName}</strong>
                  <span className="text-xs text-slate-400">({r.guestLocation})</span>
                  <div className="flex text-amber-400">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs font-semibold text-emerald-700">{r.packageTaken}</div>
                <p className="text-xs text-slate-600 italic">
                  "{r.comment ? (typeof r.comment === 'object' ? r.comment.bn || r.comment.en || '' : r.comment) : ''}"
                </p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                <button
                  onClick={() => approveReview(r.id, !r.isApproved)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    r.isApproved
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                  }`}
                >
                  {r.isApproved ? 'Approved (Live)' : 'Approve Review'}
                </button>
                <button
                  onClick={() => deleteReview(r.id)}
                  className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. Owner Credentials Setting Tab */}
      {activeTab === 'credentials' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 max-w-xl space-y-6 shadow-xs">
          <div className="space-y-1">
            <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#064E3B]" />
              <span>{isBengali ? 'ওনার আইডি ও পাসওয়ার্ড পরিবর্তন' : 'Update Owner Login Credentials'}</span>
            </h3>
            <p className="text-xs text-slate-500">
              {isBengali
                ? 'আপনার ওয়েবসাইটের অ্যাডমিন প্যানেলে প্রবেশের ইউজার আইডি এবং পাসওয়ার্ড এখান থেকে পরিবর্তন করুন।'
                : 'Manage and update the master login ID and password for this website.'}
            </p>
          </div>

          <form onSubmit={handleUpdateCredentials} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                {isBengali ? 'নতুন ইউজার আইডি (New User ID)' : 'New User ID'}
              </label>
              <input
                type="text"
                value={newUsername}
                onChange={e => setNewUsername(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                {isBengali ? 'নতুন পাসওয়ার্ড (New Password)' : 'New Password (Min 6 chars)'}
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                {isBengali ? 'পাসওয়ার্ড নিশ্চিত করুন (Confirm Password)' : 'Confirm Password'}
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
                required
              />
            </div>

            {credentialSuccessMsg && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{credentialSuccessMsg}</span>
              </div>
            )}

            {credentialErrorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{credentialErrorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#064E3B] hover:bg-[#08614a] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              {isBengali ? 'সংরক্ষণ করুন' : 'Save Changes'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
