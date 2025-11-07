import React from 'react';
import '../../styles/components/layouts/downloadsection.css';

export const DownloadSection: React.FC = () => {
  return (
    <div className="download-section">
      <div className="download-container">
        <h3 className="download-title">
          Download the mobile app
        </h3>
        
        <div className="download-badges">
          <div className="download-badge">
            <a 
              href="https://apps.apple.com/in/app/bonniepet/id6479655315" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us" 
                alt="Download on the App Store" 
              />
            </a>
          </div>

          <div className="download-badge">
            <a 
              href="https://play.google.com/store/apps/details?id=com.bonniepet.app&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer"
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