
import {useState } from 'react';

interface DeepLinkConfig {
  androidScheme?: string;
  iosScheme?: string;
  androidPackage: string;
  iosAppId: string;
  playStoreUrl: string;
  appStoreUrl: string;
}

export function useAppDeepLink(config: DeepLinkConfig) {
  const [isAppInstalled, setIsAppInstalled] = useState<boolean | null>(null);

  const detectPlatform = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
      return 'ios';
    } else if (userAgent.includes('android')) {
      return 'android';
    }
    return 'unknown';
  };

  const tryOpenApp = (path: string = '') => {
    const platform = detectPlatform();
    let appUrl = '';
    let storeUrl = '';

    if (platform === 'ios') {
      // iOS Universal Links or Custom URL Scheme
      appUrl = config.iosScheme ? `${config.iosScheme}://${path}` : '';
      storeUrl = config.appStoreUrl;
    } else if (platform === 'android') {
      // Android Intent or Custom URL Scheme
      appUrl = config.androidScheme 
        ? `${config.androidScheme}://${path}` 
        : `intent://${path}#Intent;scheme=${config.androidScheme || 'bonniepet'};package=${config.androidPackage};end`;
      storeUrl = config.playStoreUrl;
    } else {
      // Desktop or unknown - just redirect to Play Store
      window.location.href = config.playStoreUrl;
      return;
    }

    // Try to open the app
    const startTime = Date.now();
    let timer: NodeJS.Timeout;
    
    // Create an invisible iframe to attempt opening the app
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appUrl;
    document.body.appendChild(iframe);

    // If app doesn't open within timeout, redirect to store
    timer = setTimeout(() => {
      const endTime = Date.now();
      
      // If page is still visible after timeout, app likely isn't installed
      if (!document.hidden && endTime - startTime < 2500) {
        console.log('App not detected, redirecting to store');
        window.location.href = storeUrl;
      }
      
      // Clean up iframe
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    }, 2000);

    // Listen for visibility change (app opened successfully)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timer);
        console.log('App opened successfully');
        setIsAppInstalled(true);
        
        // Clean up iframe
        setTimeout(() => {
          if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
        }, 1000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    };
  };

  return {
    tryOpenApp,
    isAppInstalled,
    platform: detectPlatform(),
  };
}
