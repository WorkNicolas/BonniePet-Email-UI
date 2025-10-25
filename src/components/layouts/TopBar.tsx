import React from 'react';
import logoImg from '@/assets/logo.png';

interface TopBarProps {
  onLoginClick?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onLoginClick }) => {
  return (
    <div className="bg-yellow-400 px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex-shrink-0">
        {/* Logo - 121x119 */}
        <img 
          src={logoImg}
          alt="BonniePet Logo" 
          className="h-12 sm:h-14 md:h-16 w-auto"
        />
      </div>
      <button
        onClick={onLoginClick}
        className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-yellow-400 transition-colors"
      >
        Login
      </button>
    </div>
  );
};