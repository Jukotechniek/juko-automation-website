import { useState, useEffect } from 'react';

interface CookieConsent {
  analytics: boolean;
  timestamp: string;
}

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setConsent(parsedConsent);
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
        localStorage.removeItem('cookieConsent');
      }
    }
    setIsLoading(false);
  }, []);

  const acceptAnalytics = () => {
    const newConsent: CookieConsent = {
      analytics: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    setConsent(newConsent);
  };

  const declineAnalytics = () => {
    const newConsent: CookieConsent = {
      analytics: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    setConsent(newConsent);
  };

  const clearConsent = () => {
    localStorage.removeItem('cookieConsent');
    setConsent(null);
  };

  return {
    consent,
    isLoading,
    hasConsent: consent !== null,
    analyticsAccepted: consent?.analytics ?? false,
    acceptAnalytics,
    declineAnalytics,
    clearConsent
  };
};
