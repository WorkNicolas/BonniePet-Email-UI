import { useState, useEffect } from 'react';
import { TopBar } from '@components/layouts/TopBar';
import { Body } from '@components/layouts/Body';
import { DownloadSection } from '@components/layouts/DownloadSection';
import { Footer } from '@components/layouts/Footer';
import { AppModal } from '@components/common/AppModal';
import { useMobileDetect } from '@hooks/useMobileDetect';
import { useModalCooldown } from '@hooks/useModalCooldown';

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);
  const [modalDismissed, setModalDismissed] = useState(false);
  const isMobile = useMobileDetect();
  const { canShowModal, setModalShown } = useModalCooldown();

  // Debug logging
  useEffect(() => {
    console.log('App State:', { showSuccess, isMobile, showAppModal, canShowModal, modalDismissed });
  }, [showSuccess, isMobile, showAppModal, canShowModal, modalDismissed]);

  // Show app modal on all pages for mobile users (unless cooldown is active or dismissed)
  useEffect(() => {
    if (isMobile && canShowModal && !modalDismissed) {
      console.log('Showing app modal - user is on mobile and cooldown is inactive');
      // Small delay to ensure page is rendered first
      const timer = setTimeout(() => {
        setShowAppModal(true);
        setModalShown(); // Start the 24-hour cooldown
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isMobile, canShowModal, modalDismissed, setModalShown]);

  // Show app modal when success is reached on mobile (even during cooldown)
  useEffect(() => {
    if (showSuccess && isMobile) {
      console.log('Showing app modal on success - user is on mobile');
      const timer = setTimeout(() => {
        setShowAppModal(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, isMobile]);

  const handleSuccess = () => {
    console.log('Login successful');
    setShowSuccess(true);
  };

  const handleLoginClick = () => {
    console.log('Back to login');
    setShowSuccess(false);
    setShowAppModal(false);
  };

  const handleCloseModal = () => {
    console.log('Modal closed');
    setShowAppModal(false);
    setModalDismissed(true); // Prevent modal from showing again on same page
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
      
      {/* Debug Info - Remove in production */}
      <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded text-xs z-40 max-w-xs">
        <p>Screen: {window.innerWidth}px</p>
        <p>Mobile: {isMobile ? 'YES' : 'NO'}</p>
        <p>Success: {showSuccess ? 'YES' : 'NO'}</p>
        <p>Modal: {showAppModal ? 'YES' : 'NO'}</p>
        <p>Cooldown OK: {canShowModal ? 'YES' : 'NO'}</p>
        <p>Dismissed: {modalDismissed ? 'YES' : 'NO'}</p>
      </div>
    </div>
  );
}