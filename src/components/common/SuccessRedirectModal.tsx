// components/common/SuccessRedirectModal.tsx
import React from 'react';
import { X } from 'lucide-react';
import { useAppDeepLink } from '@hooks/useAppDeepLink';

interface SuccessRedirectModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SuccessRedirectModal: React.FC<SuccessRedirectModalProps> = ({
                                                                              isOpen,
                                                                              onClose,
                                                                          }) => {
    const { tryOpenApp } = useAppDeepLink({
        androidScheme: 'bonniepet',
        iosScheme: 'bonniepet',
        androidPackage: 'com.bonniepet.app',
        iosAppId: 'id6479655315',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.bonniepet.app&pcampaignid=web_share',
        appStoreUrl: 'https://apps.apple.com/in/app/bonniepet/id6479655315',
    });

    if (!isOpen) return null;

    const handleOk = () => {
        // “send the user back to the mobile app”
        tryOpenApp();
        onClose();
    };

    return (
        <div className="app-modal-overlay">
            <div className="app-modal-content">
                <button onClick={onClose} className="app-modal-close" aria-label="Close">
                    <X size={24} />
                </button>
                <h2 className="app-modal-title">Welcome to the BonniePet world!</h2>
                <p className="app-modal-description">Your account has been created</p>
                <p className="app-modal-description">Login back to the mobile app</p>
                <div className="app-modal-buttons">
                    <button onClick={handleOk} className="app-modal-open-button">
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};
