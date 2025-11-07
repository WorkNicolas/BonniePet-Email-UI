import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useAppDeepLink } from '@hooks/useAppDeepLink';

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/** androidScheme and iosScheme
 * Require you to implement this in the app
 * Connected with layout/AppDeepLinkHandheld.tsx
 * Opens mobile app if BonniePet is installed, otherwise
 * it opens the PlayStore.
 *
 * @param isOpen
 * @param onClose
 * @constructor
 */
export const AppModal: React.FC<AppModalProps> = ({ isOpen, onClose }) => {
  const { tryOpenApp, isAppInstalled } = useAppDeepLink({
    androidScheme: 'bonniepet',
    iosScheme: 'bonniepet',
    androidPackage: 'com.bonniepet.app',
    iosAppId: 'id6479655315',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.bonniepet.app&pcampaignid=web_share',
    appStoreUrl: 'https://apps.apple.com/in/app/bonniepet/id6479655315',
  });

  // Set cookie when modal shows
  useEffect(() => {
    if (isOpen) {
      localStorage.setItem('bonniepet_modal_shown', Date.now().toString());
      console.log('Modal shown - cookie set');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOpenApp = () => {
    // Try to open the app, will fallback to store if not installed
    tryOpenApp();
    onClose();
  };

  return (
    <div className="app-modal-overlay">
      <div className="app-modal-content">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="app-modal-close"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <h2 className="app-modal-title">Open in App?</h2>
        <p className="app-modal-description">
          For the best experience, open the BonniePet app.
        </p>

        {/* Buttons */}
        <div className="app-modal-buttons">
          <button
            onClick={handleOpenApp}
            className="app-modal-open-button"
          >
            Open App
          </button>
          <button
            onClick={onClose}
            className="app-modal-continue-button"
          >
            Continue Browser
          </button>
        </div>
      </div>
    </div>
  );
};