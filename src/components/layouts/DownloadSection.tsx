import React from 'react';

export const DownloadSection: React.FC = () => {
  return (
    <div className="bg-yellow-400 px-4 sm:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 whitespace-nowrap">
          Download the mobile app
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          {/* App Store Badge */}
          <a 
            href="https://apps.apple.com/app/bonniepet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us" 
              alt="Download on the App Store" 
              className="h-10 sm:h-12"
            />
          </a>

          {/* Google Play Badge */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.bonniepet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
              alt="Get it on Google Play" 
              className="h-10 sm:h-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
};