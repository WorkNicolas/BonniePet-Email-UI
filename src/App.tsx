import { useState, useEffect } from 'react';
import { TopBar } from '@components/layouts/TopBar';
import { Body } from '@components/layouts/Body';
import { DownloadSection } from '@components/layouts/DownloadSection';
import { Footer } from '@components/layouts/Footer';
import { AppModal } from '@components/common/AppModal';
import { useMobileDetect } from '@hooks/useMobileDetect';

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);
  const isMobile = useMobileDetect();

  // Show app modal when success is reached on mobile
  useEffect(() => {
    if (showSuccess && isMobile) {
      // Small delay to ensure success screen is rendered first
      const timer = setTimeout(() => {
        setShowAppModal(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, isMobile]);

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  const handleLoginClick = () => {
    setShowSuccess(false);
    setShowAppModal(false);
  };

  const handleCloseModal = () => {
    setShowAppModal(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar onLoginClick={handleLoginClick} />
      <Body 
        showSuccess={showSuccess} 
        onSuccess={handleSuccess} 
        onLoginClick={handleLoginClick} 
      />
      <DownloadSection />
      <Footer />
      
      {/* App Modal for Mobile Users */}
      <AppModal isOpen={showAppModal} onClose={handleCloseModal} />
    </div>
  );
}