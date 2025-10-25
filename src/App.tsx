import { useState } from 'react';
import { TopBar } from '@components/layouts/TopBar';
import { Body } from '@components/layouts/Body';
import { DownloadSection } from '@components/layouts/DownloadSection';
import { Footer } from '@components/layouts/Footer';

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  const handleLoginClick = () => {
    setShowSuccess(false);
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
    </div>
  );
}