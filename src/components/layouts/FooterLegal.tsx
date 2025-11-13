// src/components/layouts/FooterLegal.tsx
import React from 'react';
import '../../styles/components/layouts/footer-legal.css';

type FooterLegalVariant = 'desktop' | 'mobile';

interface FooterLegalProps {
    variant: FooterLegalVariant;
}

export const FooterLegal: React.FC<FooterLegalProps> = ({ variant }) => {
    const year = new Date().getFullYear();

    return (
        <div className={`footer-legal footer-legal--${variant}`}>
            <div className="footer-legal__inner">
                <div className="footer-legal__links">
                    <a href="#" className="footer-legal__link">
                        Terms and conditions
                    </a>
                    <span className="footer-legal__dot">•</span>
                    <a href="#" className="footer-legal__link">
                        Privacy policy
                    </a>
                </div>
                <div className="footer-legal__copy">
                    Copyright © {year} By Bonniepet
                </div>
            </div>
        </div>
    );
};

export default FooterLegal;
