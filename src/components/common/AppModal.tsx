import React from 'react';
import { X } from 'lucide-react';

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppModal: React.FC<AppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOpenApp = () => {
    // Try to detect OS and redirect to appropriate app store
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      // iOS
      window.location.href = 'https://apps.apple.com/app/bonniepet';
    } else if (userAgent.includes('android')) {
      // Android
      window.location.href = 'https://play.google.com/store/apps/details?id=com.bonniepet';
    } else {
      // Fallback to iOS
      window.location.href = 'https://apps.apple.com/app/bonniepet';
    }
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

        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <div className="text-2xl text-white font-bold">✓</div>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Success
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm">
          Open in App?
        </p>
        <p className="text-center text-gray-500 mb-6 text-xs">
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
          <button
            onClick={onClose}
            className="w-full py-3 bg-gray-300 text-gray-700 hover:bg-gray-400 rounded-lg font-semibold text-sm transition-colors"
          >
            Continue Browser
          </button>
        </div>
      </div>
    </div>
  );
};