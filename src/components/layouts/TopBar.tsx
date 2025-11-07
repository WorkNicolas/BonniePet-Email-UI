import React from 'react';
import logoImg from '@/assets/logo.png';
import '../../styles/components/layouts/topbar.css';

interface TopBarProps {
  onLoginClick?: () => void;
}

export const TopBar: React.FC<TopBarProps> = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-logo-wrapper">
        <img src={logoImg} alt="BonniePet Logo" className="top-bar-logo" />
      </div>
    </div>
  );
};