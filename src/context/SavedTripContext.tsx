import React, { createContext, useContext, useState, useEffect } from 'react';
import { TourPackage, TripComposerState } from '../types';
import { TOUR_PACKAGES } from '../data/packages';

interface SavedTripContextType {
  savedPackageSlugs: string[];
  savedPackages: TourPackage[];
  customTripState: TripComposerState | null;
  toggleSavePackage: (slug: string) => void;
  isPackageSaved: (slug: string) => boolean;
  saveCustomTrip: (state: TripComposerState) => void;
  clearSavedTrips: () => void;
}

const DEFAULT_TRIP_STATE: TripComposerState = {
  days: 2,
  guestsAdults: 2,
  guestsChildren: 0,
  pickupLocation: 'Kolkata (Science City / Indian Museum)',
  roomType: 'ac',
  foodPreference: 'non-veg',
  cameramanAddon: false,
  specialInterests: ['watchtower', 'bengali-food'],
};

const SavedTripContext = createContext<SavedTripContextType | undefined>(undefined);

export const SavedTripProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedPackageSlugs, setSavedPackageSlugs] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('sv_saved_packages');
      return stored ? JSON.parse(stored) : ['2-nights-3-days-deluxe'];
    } catch {
      return ['2-nights-3-days-deluxe'];
    }
  });

  const [customTripState, setCustomTripState] = useState<TripComposerState | null>(() => {
    try {
      const stored = localStorage.getItem('sv_custom_trip');
      return stored ? JSON.parse(stored) : DEFAULT_TRIP_STATE;
    } catch {
      return DEFAULT_TRIP_STATE;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sv_saved_packages', JSON.stringify(savedPackageSlugs));
    } catch (e) {
      console.error('Error storing saved packages', e);
    }
  }, [savedPackageSlugs]);

  useEffect(() => {
    try {
      if (customTripState) {
        localStorage.setItem('sv_custom_trip', JSON.stringify(customTripState));
      }
    } catch (e) {
      console.error('Error storing custom trip', e);
    }
  }, [customTripState]);

  const toggleSavePackage = (slug: string) => {
    setSavedPackageSlugs(prev => {
      if (prev.includes(slug)) {
        return prev.filter(s => s !== slug);
      } else {
        return [...prev, slug];
      }
    });
  };

  const isPackageSaved = (slug: string) => savedPackageSlugs.includes(slug);

  const saveCustomTrip = (state: TripComposerState) => {
    setCustomTripState(state);
  };

  const clearSavedTrips = () => {
    setSavedPackageSlugs([]);
    setCustomTripState(null);
    localStorage.removeItem('sv_saved_packages');
    localStorage.removeItem('sv_custom_trip');
  };

  const savedPackages = TOUR_PACKAGES.filter(p => savedPackageSlugs.includes(p.slug));

  return (
    <SavedTripContext.Provider
      value={{
        savedPackageSlugs,
        savedPackages,
        customTripState,
        toggleSavePackage,
        isPackageSaved,
        saveCustomTrip,
        clearSavedTrips,
      }}
    >
      {children}
    </SavedTripContext.Provider>
  );
};

export const useSavedTrip = () => {
  const context = useContext(SavedTripContext);
  if (!context) {
    throw new Error('useSavedTrip must be used within SavedTripProvider');
  }
  return context;
};
