import { useState, useEffect } from 'react';

export const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set hydrated on client side only
    setIsHydrated(true);

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

      // Check screen width (for device emulation)
      const isSmallScreen = window.innerWidth < 768; // md breakpoint

      const isMobileDevice = isUserAgentMobile || hasTouchScreen() || isSmallScreen;
      
      console.log('Mobile Detection:', {
        userAgent: isUserAgentMobile,
        touchScreen: hasTouchScreen(),
        screenWidth: window.innerWidth,
        isSmallScreen,
        isMobileDevice
      });

      setIsMobile(isMobileDevice);
    };

    // Initial detection
    detectMobile();

    // Detect on resize (for device emulation in DevTools)
    const handleResize = () => {
      detectMobile();
    };

    window.addEventListener('resize', handleResize);
    
    // Also detect on orientationchange for mobile devices
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return isHydrated ? isMobile : false;
};