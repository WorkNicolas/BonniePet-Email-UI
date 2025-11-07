// App.tsx
import { useState, useEffect } from 'react';
import { TopBar } from '@components/layouts/TopBar';
import { Body } from '@components/layouts/Body';
import { DownloadSection } from '@components/layouts/DownloadSection';
import { Footer } from '@components/layouts/Footer';
import { AppModal } from '@components/common/AppModal';
import { useMobileDetect } from '@hooks/useMobileDetect';
import { SuccessRedirectModal } from '@components/common/SuccessRedirectModal';

export type AppView = 'login' | 'register' | 'forgot-password' | 'success';

export default function App() {
    const [currentView, setCurrentView] = useState<AppView>('login');
    const isMobile = useMobileDetect();
    const [showAppModal, setShowAppModal] = useState(false);
    const [showSuccessRedirect, setShowSuccessRedirect] = useState(false);

    useEffect(() => {
        if (isMobile && !showAppModal) {
            const timer = setTimeout(() => {
                setShowAppModal(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isMobile, showAppModal]);

    const handleSuccess = () => {
        // login / verify success
        setCurrentView('success');
        setShowSuccessRedirect(true); // SECTION 5
    };

    const handleLoginClick = () => {
        setCurrentView('login');
    };

    const handleRegisterClick = () => {
        setCurrentView('register');
    };

    const handleForgotPasswordClick = () => {
        setCurrentView('forgot-password');
    };

    const handleCloseModal = () => {
        setShowAppModal(false);
    };

    return (
        <div className="app-container">
            {/* SECTION 3 says "when mail-verify, don’t show login in header"
          our success view is the closest analogue — TopBar has no button,
          so we just keep it */}
            <TopBar />

            <Body
                currentView={currentView}
                onSuccess={handleSuccess}
                onLoginClick={handleLoginClick}
                onRegisterClick={handleRegisterClick}
                onForgotPasswordClick={handleForgotPasswordClick}
            />

            <DownloadSection />

            {/* center footer only on the login page */}
            <Footer center={currentView === 'login'} />

            <AppModal isOpen={showAppModal} onClose={handleCloseModal} />

            <SuccessRedirectModal
                isOpen={showSuccessRedirect}
                onClose={() => setShowSuccessRedirect(false)}
            />
        </div>
    );
}
