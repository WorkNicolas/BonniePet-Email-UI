import React, { useState, useEffect } from 'react';

interface DebugInfoProps {
  isMobile: boolean;
  showSuccess: boolean;
  showAppModal: boolean;
}

export const DebugInfo: React.FC<DebugInfoProps> = ({
  isMobile,
  showSuccess,
  showAppModal,
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Effect to update screen width on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResetCookie = () => {
    // This logic is moved directly from App.tsx
    localStorage.removeItem('bonniepet_modal_shown');
    console.log('Cookie removed - refresh page to see modal again');
    alert('Cookie reset. Refresh the page.'); // Added alert for clearer feedback
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded text-xs z-40 max-w-xs space-y-2">
      <div>
        <p>Screen: {screenWidth}px</p>
        <p>Mobile: {isMobile ? 'YES' : 'NO'}</p>
        <p>Success: {showSuccess ? 'YES' : 'NO'}</p>
        <p>Modal: {showAppModal ? 'YES' : 'NO'}</p>
      </div>
      <button
        onClick={handleResetCookie}
        className="w-full bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs font-semibold transition-colors"
      >
        Reset Cookie
      </button>
    </div>
  );
};

export default DebugInfo;