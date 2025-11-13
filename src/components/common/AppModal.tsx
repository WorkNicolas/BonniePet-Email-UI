import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useAppDeepLink } from '@hooks/useAppDeepLink';
import '../../styles/components/common/appmodal.css';

interface AppModalProps {
    isOpen: boolean;
    onClose: () => void;
    /**
     * Main heading (top, bold).
     * Defaults to "Success".
     */
    title?: string;
    /**
     * Line under the heading.
     * Defaults to "", which means it will not render.
     */
    message?: string;
}

/**
 * Generic “open the app / store” modal.
 * Visually matches the Success design.
 */
export const AppModal: React.FC<AppModalProps> = ({
                                                      isOpen,
                                                      onClose,
                                                      title = 'Success',
                                                      message = 'Email verified successfully',
                                                  }) => {
    const { tryOpenApp } = useAppDeepLink({
        androidScheme: 'bonniepet',
        iosScheme: 'bonniepet',
        androidPackage: 'com.bonniepet.app',
        iosAppId: 'id6479655315',
        playStoreUrl:
            'https://play.google.com/store/apps/details?id=com.bonniepet.app&pcampaignid=web_share',
        appStoreUrl:
            'https://apps.apple.com/in/app/bonniepet/id6479655315',
    });

    useEffect(() => {
        if (isOpen) {
            localStorage.setItem('bonniepet_modal_shown', Date.now().toString());
            console.log('Modal shown - cookie set');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOpenApp = () => {
        tryOpenApp();
        onClose();
    };

    const handleOpenBrowser = () => {
        onClose();
    };

    return (
        <div className="app-modal-overlay">
            <div className="app-modal-content">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="app-modal-close"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>

                {/* Top section */}
                <div className="app-modal-section app-modal-section--top">
                    <h2 className="app-modal-title">{title}</h2>

                    {message && (
                        <p className="app-modal-message">{message}</p>
                    )}

                    <button
                        type="button"
                        className="app-modal-link"
                        onClick={handleOpenApp}
                    >
                        Open the app
                    </button>
                </div>

                <div className="app-modal-divider" />

                {/* Bottom section */}
                <div className="app-modal-section app-modal-section--bottom">
                    <p className="app-modal-cta-heading">Don’t have the app?</p>
                    <p className="app-modal-cta-text">
                        Download the app on your favorite store
                    </p>

                    <button
                        type="button"
                        className="app-modal-browser-link"
                        onClick={handleOpenBrowser}
                    >
                        Open in the browser
                    </button>

                    <div className="app-modal-badges">
                        <a
                            href="https://apps.apple.com/in/app/bonniepet/id6479655315"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="app-modal-badge app-modal-badge--apple"
                        >
                            <img
                                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
                                alt="Download on the App Store"
                            />
                        </a>

                        <a
                            href="https://play.google.com/store/apps/details?id=com.bonniepet.app&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="app-modal-badge app-modal-badge--google"
                        >
                            <img
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                alt="Get it on Google Play"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppModal;
