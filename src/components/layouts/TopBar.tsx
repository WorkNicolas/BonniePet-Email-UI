// src/components/layouts/TopBar.tsx
import React from 'react';
import logoImg from '@/assets/logo.png';
import { useMobileDetect } from '@hooks/useMobileDetect';
import '../../styles/components/layouts/topbar-hero.css';

export const TopBar: React.FC = () => {
    const isMobile = useMobileDetect();

    return (
        <header
            className={`topbar-hero${isMobile ? ' is-mobile' : ''}`}
            aria-label="BonniePet header"
        >
            <div className="topbar-hero__circle">
                <img src={logoImg} alt="bp" className="topbar-hero__logo" />
                <span className="topbar-hero__brand">bonniepet</span>
            </div>
        </header>
    );
};

export default TopBar;
