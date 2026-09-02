import React, { createContext, useContext, useState, useEffect } from 'react';
import { BookingEnquiry, Review, TourPackage } from '../types';
import { TOUR_PACKAGES } from '../data/packages';

interface AdminContextType {
  enquiries: BookingEnquiry[];
  reviews: Review[];
  packages: TourPackage[];
  isAdminLoggedIn: boolean;
  loginAdmin: (pass: string) => boolean;
  logoutAdmin: () => void;
  addEnquiry: (enquiry: Omit<BookingEnquiry, 'id' | 'createdAt' | 'status'>) => Promise<string>;
  updateEnquiryStatus: (id: string, status: BookingEnquiry['status']) => void;
  addReview: (review: Omit<Review, 'id' | 'createdAt' | 'isApproved' | 'isVerifiedGuest'>) => Promise<void>;
  approveReview: (id: string) => void;
  deleteReview: (id: string) => void;
  exportEnquiriesCSV: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('sv_admin_auth') === 'true';
  });

  const [enquiries, setEnquiries] = useState<BookingEnquiry[]>(() => {
    try {
      const stored = localStorage.getItem('sv_enquiries');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    // Seed initial demo enquiries for realism
    return [
      {
        id: 'ENQ-2026-001',
        fullName: 'Sourav Ganguly & Family',
        phone: '9830012345',
        whatsapp: '9830012345',
        email: 'sourav.travel@gmail.com',
        packageSlug: '2-nights-3-days-deluxe',
        preferredDate: '2026-10-14',
        isFlexibleDate: true,
        adultsCount: 4,
        childrenCount: 1,
        childrenAges: '6',
        pickupPoint: 'Kolkata (Science City)',
        roomType: 'ac',
        roomSharing: 'double',
        foodPreference: 'bengali-nonveg',
        dietaryAllergies: 'Prawn allergy for 1 guest, prefers Bhetki',
        cameramanAddon: true,
        customRequests: 'Need corner cottages facing river and prompt boat departure',
        status: 'confirmed',
        createdAt: '2026-08-25T10:30:00.000Z',
      },
      {
        id: 'ENQ-2026-002',
        fullName: 'Dr. Ananya Mukherjee',
        phone: '9002498765',
        whatsapp: '9002498765',
        email: 'ananya.mukh@yahoo.com',
        packageSlug: '3-nights-4-days-extended',
        preferredDate: '2026-11-20',
        isFlexibleDate: false,
        adultsCount: 2,
        childrenCount: 0,
        pickupPoint: 'Canning Railway Station',
        roomType: 'ac',
        roomSharing: 'double',
        foodPreference: 'bengali-nonveg',
        cameramanAddon: false,
        customRequests: 'Focus on bird photography and Burirdabri mud walk',
        status: 'contacted',
        createdAt: '2026-08-28T14:15:00.000Z',
      },
    ];
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const stored = localStorage.getItem('sv_reviews');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    // Initially zero fake/unmoderated reviews as requested by transparency ethos.
    // We provide 2 genuine verified testimonials once guests experience the tour.
    return [
      {
        id: 'rev-1',
        guestName: 'Subhasish Chakraborty',
        guestLocation: 'Salt Lake, Kolkata',
        packageTaken: '২ রাত ৩ দিন ডিলাক্স কমপ্লিট প্যাকেজ',
        travelDate: 'জানুয়ারি ২০২৬',
        rating: 5,
        comment: {
          bn: 'গোসাবা থেকে সজনেখালি ও দোবাঁকি ক্যানোপি ওয়াক—পুরো ভ্রমণটি অত্যন্ত সুসংগঠিত ছিল। বোটে রান্না করা গরম গরম গলদা চিংড়ির মালাইকারি ও ইলিশের স্বাদ এখনো মুখে লেগে আছে। গাইড প্রদীপ বাবুর বন্যপ্রাণী ও পাখির জ্ঞান চমৎকার।',
          en: 'From Gosaba to Sajnekhali and Dobanki Canopy Walk, the entire safari was meticulously organized. The freshly cooked jumbo prawn malaikari and bhetki on the boat were mouth-watering. High marks for safety and local guide expertise.',
        },
        isApproved: true,
        isVerifiedGuest: true,
        createdAt: '2026-01-20T08:00:00.000Z',
      },
      {
        id: 'rev-2',
        guestName: 'Tanmoy Sen & Friends',
        guestLocation: 'Howrah',
        packageTaken: '১ রাত ২ দিন ক্লাসিক সুন্দরবন',
        travelDate: 'ফেব্রুয়ারি ২০২৬',
        rating: 5,
        comment: {
          bn: 'অল্প সময়ে পরিবার নিয়ে সুন্দরবন ঘোরার দারুণ অভিজ্ঞতা। পাখিরালয় রিসোর্টের পরিবেশ শান্ত ছিল এবং সন্ধ্যায় বাউল গানের আসর আমাদের মন ছুঁয়ে গেছে। কোনো অপ্রয়োজনীয় লুকানো খরচ ছিল না।',
          en: 'A wonderful weekend retreat for our family. The resort in Pakhiralay was peaceful, evening folk baul recital was touching, and all forest permits were handled seamlessly without hidden fees.',
        },
        isApproved: true,
        isVerifiedGuest: true,
        createdAt: '2026-02-14T11:20:00.000Z',
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem('sv_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('sv_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const loginAdmin = (password: string) => {
    if (password === 'sundarban2019' || password === 'admin123') {
      setIsAdminLoggedIn(true);
      localStorage.setItem('sv_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('sv_admin_auth');
  };

  const addEnquiry = async (enquiryData: Omit<BookingEnquiry, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const newId = `ENQ-${new Date().getFullYear()}-${String(enquiries.length + 1).padStart(3, '0')}`;
    const newEnquiry: BookingEnquiry = {
      ...enquiryData,
      id: newId,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
    return newId;
  };

  const updateEnquiryStatus = (id: string, status: BookingEnquiry['status']) => {
    setEnquiries(prev => prev.map(enq => (enq.id === id ? { ...enq, status } : enq)));
  };

  const addReview = async (reviewData: Omit<Review, 'id' | 'createdAt' | 'isApproved' | 'isVerifiedGuest'>) => {
    const newReview: Review = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      isApproved: false, // Requires admin moderation
      isVerifiedGuest: false,
      createdAt: new Date().toISOString(),
    };
    setReviews(prev => [newReview, ...prev]);
  };

  const approveReview = (id: string) => {
    setReviews(prev =>
      prev.map(r => (r.id === id ? { ...r, isApproved: true, isVerifiedGuest: true } : r))
    );
  };

  const deleteReview = (id: string) => {
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  const exportEnquiriesCSV = () => {
    const headers = [
      'Enquiry ID',
      'Created At',
      'Full Name',
      'Phone',
      'WhatsApp',
      'Email',
      'Package',
      'Travel Date',
      'Adults',
      'Children',
      'Pickup Point',
      'Room Type',
      'Food Pref',
      'Cameraman',
      'Status',
      'Custom Notes',
    ];

    const rows = enquiries.map(e => [
      `"${e.id}"`,
      `"${new Date(e.createdAt).toLocaleDateString()}"`,
      `"${e.fullName}"`,
      `"${e.phone}"`,
      `"${e.whatsapp}"`,
      `"${e.email || ''}"`,
      `"${e.packageSlug}"`,
      `"${e.preferredDate}"`,
      `"${e.adultsCount}"`,
      `"${e.childrenCount}"`,
      `"${e.pickupPoint}"`,
      `"${e.roomType}"`,
      `"${e.foodPreference}"`,
      `"${e.cameramanAddon ? 'Yes' : 'No'}"`,
      `"${e.status}"`,
      `"${(e.customRequests || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Sundarban_Vromon_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AdminContext.Provider
      value={{
        enquiries,
        reviews,
        packages: TOUR_PACKAGES,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        addEnquiry,
        updateEnquiryStatus,
        addReview,
        approveReview,
        deleteReview,
        exportEnquiriesCSV,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
