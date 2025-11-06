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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Open in App?
        </h2>
        <p className="text-center text-gray-600 mb-8 text-base">
          For the best experience, open the BonniePet app.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleOpenApp}
            className="w-full py-3 bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg font-semibold text-sm transition-colors text-center"
          >
            Open App
          </button>
            {/* If we are logging to desktop or laptop, option to continue browser should be visible */}
            {/* However, if we are logging in mobile browser, continue browser should not be visible */}
            {/* isAppInstalled from useAppDeepLink.ts is related to this. Requires app implementation */}
            <button
                onClick={onClose}
                disabled={isAppInstalled === true}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-colors ${
                    isAppInstalled === true
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
            >
                Continue Browser
            </button>
        </div>
      </div>
    </div>
  );
};