import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { useLanguage } from '../context/LanguageContext';
import { BookingEnquiry } from '../types';
import { Lock, Unlock, CheckCircle2, Clock, XCircle, Trash2, Download, Star, ShieldAlert, Users, Phone, Mail, Calendar, Sparkles } from 'lucide-react';

export const AdminPage: React.FC = () => {
  const {
    isAdminAuthenticated,
    adminLogin,
    adminLogout,
    enquiries,
    reviews,
    updateEnquiryStatus,
    deleteEnquiry,
    approveReview,
    deleteReview,
  } = useAdmin();

  const { language, isBengali } = useLanguage();
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<'enquiries' | 'reviews'>('enquiries');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = adminLogin(pinInput);
    if (!success) {
      setLoginError(true);
    } else {
      setLoginError(false);
      setPinInput('');
    }
  };

  const handleExportCSV = () => {
    if (enquiries.length === 0) return;
    const headers = 'ID,Guest Name,Phone,Email,Package,Travel Date,Adults,Children,Estimated Cost,Status,Created At\n';
    const rows = enquiries
      .map(
        e =>
          `"${e.id}","${e.guestName}","${e.guestPhone}","${e.guestEmail || ''}","${e.packageSlug}","${e.travelDate}",${e.adults},${e.children},${e.calculatedEstimatedCost},"${e.status}","${e.createdAt}"`
      )
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

  // Analytics
  const totalRevenue = enquiries.reduce((acc, curr) => acc + curr.calculatedEstimatedCost, 0);
  const pendingCount = enquiries.filter(e => e.status === 'pending').length;

  if (!isAdminAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-16 px-4">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#064E3B] mx-auto flex items-center justify-center">
            <Lock className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-bold font-heading text-slate-900">
              {isBengali ? 'অ্যাডমিন পোর্টাল লগইন' : 'Admin Security Portal'}
            </h2>
            <p className="text-xs text-slate-500">
              {isBengali ? 'বুকিং ও রিভিউ পরিচালনার জন্য পিন প্রবেশ করান (ডিফল্ট: 2019)' : 'Enter Admin PIN to manage booking records (Default PIN: 2019)'}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={pinInput}
              onChange={e => setPinInput(e.target.value)}
              placeholder="Enter Admin PIN (e.g. 2019)"
              className="w-full text-center tracking-widest text-lg font-bold py-3 px-4 rounded-xl border border-slate-300 focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
              autoFocus
            />

            {loginError && (
              <p className="text-xs text-red-600 font-semibold">
                {isBengali ? 'ভুল পিন নম্বর! পুনরায় চেষ্টা করুন (পিন: 2019)।' : 'Invalid PIN! Use 2019 to unlock.'}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#064E3B] hover:bg-[#08614a] text-white font-bold text-sm shadow-md transition-all"
            >
              {isBengali ? 'লগইন করুন' : 'Unlock Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Admin Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-0.5">
            INTERNAL DISPATCH & OPERATIONS CONSOLE
          </span>
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
          <div className="text-2xl font-black text-emerald-800">₹{totalRevenue.toLocaleString('en-IN')}</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-purple-600 font-semibold block">Total Reviews</span>
          <div className="text-2xl font-black text-purple-900">{reviews.length}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200">
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
      </div>

      {/* Enquiries Tab */}
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
                {enquiries.map(enq => (
                  <tr key={enq.id} className="hover:bg-slate-50/70">
                    <td className="p-4">
                      <strong className="text-slate-900 block font-heading">{enq.guestName}</strong>
                      <span className="text-[11px] text-slate-400">{new Date(enq.createdAt).toLocaleDateString()}</span>
                    </td>

                    <td className="p-4 space-y-0.5">
                      <div className="flex items-center gap-1 text-slate-700">
                        <Phone className="w-3 h-3 text-emerald-600" />
                        <span>{enq.guestPhone}</span>
                      </div>
                      {enq.guestEmail && (
                        <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                          <Mail className="w-3 h-3 text-slate-400" />
                          <span>{enq.guestEmail}</span>
                        </div>
                      )}
                    </td>

                    <td className="p-4 font-medium text-slate-800">
                      {enq.packageSlug}
                    </td>

                    <td className="p-4 text-slate-700">
                      <div>{enq.travelDate}</div>
                      <div className="text-[11px] text-slate-400">
                        {enq.adults} Adults {enq.children > 0 ? `, ${enq.children} Kids` : ''}
                      </div>
                    </td>

                    <td className="p-4 font-bold text-slate-900">
                      ₹{enq.calculatedEstimatedCost.toLocaleString('en-IN')}
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Reviews Tab */}
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
                  "{r.comment ? (typeof r.comment === 'object' ? (r.comment.bn || r.comment.en || '') : r.comment) : ''}"
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
    </div>
  );
};
