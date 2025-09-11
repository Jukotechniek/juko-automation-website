// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

export const trackPageView = (page_path: string, page_title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-4QSG8LRWMG', {
      page_path,
      page_title
    });
  }
};

export const trackConversion = (conversionId: string, value?: number, currency?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency
    });
  }
};
