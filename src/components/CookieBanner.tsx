import { useEffect } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const CookieBanner = () => {
  const { hasConsent, analyticsAccepted, acceptAnalytics, declineAnalytics, isLoading } = useCookieConsent();

  useEffect(() => {
    if (analyticsAccepted) {
      initializeGoogleAnalytics();
    }
  }, [analyticsAccepted]);

  const initializeGoogleAnalytics = () => {
    // Hardcoded Google Analytics ID
    const measurementId = 'G-4QSG8LRWMG';

    // Check if Google Analytics is already loaded
    if (document.querySelector(`script[src*="gtag/js?id=${measurementId}"]`)) {
      return;
    }

    // Initialize gtag first
    window.gtag = window.gtag || function() {
      (window.gtag as any).q = (window.gtag as any).q || [];
      (window.gtag as any).q.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
      send_page_view: true,
      debug_mode: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    });

    // Add Google Analytics script after gtag is initialized
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    
    // Add error handling
    script.onerror = () => {
      console.error('Failed to load Google Analytics script');
    };
    
    document.head.appendChild(script);
  };

  const handleAccept = () => {
    acceptAnalytics();
  };

  const handleDecline = () => {
    declineAnalytics();
  };

  // Show banner if no consent has been given yet
  if (isLoading) {
    return null; // Still loading
  }
  
  if (hasConsent) {
    return null; // User has already made a choice
  }

  return (
    <div 
      id="cookie-banner" 
      style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        color: '#1d1d1b',
        boxShadow: '0 8px 12px rgba(0, 0, 0, .12)',
        padding: '1.2rem 1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        zIndex: 1200,
        gap: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #000',
        maxWidth: '420px',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif',
        textAlign: 'center'
      }}
    >
      <p style={{
        margin: 0,
        flex: '1 1 100%',
        fontSize: '.95rem'
      }}>
        We gebruiken analytische cookies om onze website te verbeteren. Deze gegevens zijn anoniem en niet herleidbaar.
      </p>

      <div style={{
        display: 'flex',
        gap: '1rem',
        marginTop: '1rem'
      }}>
        <button 
          id="cookie-accept"
          onClick={handleAccept}
          style={{
            background: '#20c997',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 24px',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Accepteren
        </button>

        <button 
          id="cookie-decline"
          onClick={handleDecline}
          style={{
            background: 'none',
            border: 'none',
            padding: '10px 10px',
            color: '#666',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Nee bedankt
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
