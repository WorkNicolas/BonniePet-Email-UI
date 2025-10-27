import { useState, useEffect } from 'react';
import { TopBar } from '@components/layouts/TopBar';
import { Body } from '@components/layouts/Body';
import { DownloadSection } from '@components/layouts/DownloadSection';
import { Footer } from '@components/layouts/Footer';
import { AppModal } from '@components/common/AppModal';
import { useMobileDetect } from '@hooks/useMobileDetect';
// import { DebugInfo } from '@/debug/DebugInfo'; // use this for debugging mobile view

// Views
export type AppView = 'login' | 'register' | 'forgot-password' | 'success';

export default function App() {
    const [currentView, setCurrentView] = useState<AppView>('login');
    const isMobile = useMobileDetect();
    const [showAppModal, setShowAppModal] = useState(false);

    // Show app modal once on every page for mobile users
    useEffect(() => {
        if (isMobile && !showAppModal) {
            const timer = setTimeout(() => {
                console.log('Showing app modal on mobile');
                setShowAppModal(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isMobile]);

    const handleSuccess = () => {
        console.log('Login successful');
        setCurrentView('success');
    };

    const handleLoginClick = () => {
        console.log('Back to login');
        setCurrentView('login');
    };

    const handleRegisterClick = () => {
        console.log('Navigate to registration');
        setCurrentView('register');
    };

    const handleForgotPasswordClick = () => {
        console.log('Navigate to forgot password');
        setCurrentView('forgot-password');
    };

    const handleCloseModal = () => {
        console.log('Modal closed');
        setShowAppModal(false);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <TopBar onLoginClick={handleLoginClick} />
            <Body
                currentView={currentView}
                onSuccess={handleSuccess}
                onLoginClick={handleLoginClick}
                onRegisterClick={handleRegisterClick}
                onForgotPasswordClick={handleForgotPasswordClick}
            />
            <DownloadSection />
            <Footer />

            {/* App Modal for Mobile Users */}
            <AppModal isOpen={showAppModal} onClose={handleCloseModal} />

            {/* Debug Info */}
            {/*process.env.NODE_ENV === 'development' && (
                <DebugInfo
                    isMobile={isMobile}
                    showSuccess={currentView === 'success'}
                    showAppModal={showAppModal}
                />
            )*/}
        </div>
    );
}