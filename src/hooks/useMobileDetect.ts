import { useState, useEffect } from 'react';

export const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detectMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      
      // Check for mobile user agents
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      const isUserAgentMobile = mobileRegex.test(userAgent.toLowerCase());
      
      // Check for touch capability
      const hasTouchScreen = () => {
        return (
          (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
          ((navigator as any).msMaxTouchPoints && (navigator as any).msMaxTouchPoints > 2)
        );
      };

      const isMobileDevice = isUserAgentMobile || hasTouchScreen();
      setIsMobile(isMobileDevice);
    };

    detectMobile();
    window.addEventListener('resize', detectMobile);
    
    return () => {
      window.removeEventListener('resize', detectMobile);
    };
  }, []);

  return isMobile;
};