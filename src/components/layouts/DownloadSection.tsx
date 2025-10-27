import React from 'react';

export const DownloadSection: React.FC = () => {
  return (
    <div className="bg-yellow-400 px-4 sm:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 sm:gap-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 whitespace-nowrap text-center sm:text-left w-full sm:w-auto">
          Download the mobile app
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center justify-center">
          {/* App Store Badge - Fixed Container */}
          <div className="w-full sm:w-auto h-12 sm:h-14 flex items-center justify-center">
            <a 
              href="https://apps.apple.com/in/app/bonniepet/id6479655315" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity h-full flex items-center"
            >
              <img 
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us" 
                alt="Download on the App Store" 
                className="object-contain"
              />
            </a>
          </div>

          {/* Google Play Badge - Fixed Container */}
          <div className="w-full sm:w-auto h-12 sm:h-14 flex items-center justify-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.bonniepet.app&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity h-full flex items-center"
            >
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play" 
                className="h-full object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};