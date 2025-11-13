// App.tsx
import { useState, useEffect } from 'react';
import { TopBar } from '@components/layouts/TopBar';
import { Body } from '@components/layouts/Body';
import { Footer } from '@components/layouts/Footer';
import { AppModal } from '@components/common/AppModal';
import { useMobileDetect } from '@hooks/useMobileDetect';
import { SuccessRedirectModal } from '@components/common/SuccessRedirectModal';
import { useModalCooldown } from '@hooks/useModalCooldown';
import { FooterLegal } from '@components/layouts/FooterLegal'; // ⬅️ add this import

export type AppView = 'login' | 'register' | 'forgot-password' | 'success';

export default function App() {
    const [currentView, setCurrentView] = useState<AppView>('login');
    const isMobile = useMobileDetect();
    const [showAppModal, setShowAppModal] = useState(false);
    const [showSuccessRedirect, setShowSuccessRedirect] = useState(false);

    const { canShowModal, setModalShown } = useModalCooldown();

    useEffect(() => {
        if (!isMobile || !canShowModal || showAppModal) return;

        const timer = setTimeout(() => {
            setShowAppModal(true);
            setModalShown();
        }, 1000);

        return () => clearTimeout(timer);
    }, [isMobile, canShowModal, showAppModal, setModalShown]);

    const handleSuccess = () => {
        setCurrentView('success');
        setShowSuccessRedirect(true);
    };

    const handleLoginClick = () => setCurrentView('login');
    const handleRegisterClick = () => setCurrentView('register');
    const handleForgotPasswordClick = () => setCurrentView('forgot-password');

    const handleCloseModal = () => {
        setShowAppModal(false);
    };

    return (
        <div className="app-container">
            <TopBar />

            <Body
                currentView={currentView}
                onSuccess={handleSuccess}
                onLoginClick={handleLoginClick}
                onRegisterClick={handleRegisterClick}
                onForgotPasswordClick={handleForgotPasswordClick}
            />

            {/* Desktop: show above footer */}
            <FooterLegal variant="desktop" />

            <Footer />

            {/* Mobile: show below footer */}
            <FooterLegal variant="mobile" />

            <AppModal isOpen={showAppModal} onClose={handleCloseModal} />

            <SuccessRedirectModal
                isOpen={showSuccessRedirect}
                onClose={() => setShowSuccessRedirect(false)}
            />
        </div>
    );
}
