// components/layouts/Footer.tsx
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';
import logoImg from '@/assets/logo.png';
import '../../styles/components/layouts/footer.css';

interface FooterProps {
    center?: boolean;
}

export const Footer: React.FC<FooterProps> = () => {
    const currentYear = new Date().getFullYear();
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            if (!footer) return;

            const footerRect = footer.getBoundingClientRect();
            const isFooterInView = footerRect.top < window.innerHeight;

            setShowBackToTop(window.scrollY > 300 && !isFooterInView);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com/bonniepetofficial', label: 'Facebook' },
        { icon: Instagram, href: 'https://www.instagram.com/bonniepetofficial', label: 'Instagram' },
        { icon: Youtube, href: 'https://www.youtube.com/channel/UCsa72ovB7w3Lxk_LqmJ41Sw', label: 'YouTube' },
        { icon: Linkedin, href: 'https://www.linkedin.com/company/bonniepet/', label: 'LinkedIn' },
        {
            icon: () => (
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
                    <path d="M18.5 7.8c-.9-.5-1.6-1.2-2-2.1-.2-.4-.3-.9-.4-1.4h-2.3v10.3c0 1-.5 1.8-1.5 2.1-.7.2-1.3.1-1.9-.3-.5-.4-.8-.9-.9-1.6-.2-1.1.4-2.1 1.5-2.4.3-.1.7-.1 1-.1V9.9c-.3 0-.6 0-.9.1-1 .2-1.9.7-2.6 1.5-.9 1-1.2 2.2-1 3.5.2 1.3.8 2.4 2 3.1 1.1.7 2.4.8 3.7.5 1.8-.5 2.9-2 2.9-3.9V9.2c.6.7 1.3 1.2 2.1 1.5.4.2.9.3 1.3.3V8.6c-.5-.1-1-.3-1.5-.5z" />
                </svg>
            ),
            href: 'https://www.tiktok.com/@bonniepetofficial?lang=en-GB',
            label: 'TikTok',
            type: 'svg',
        },
        {
            icon: () => (
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            ),
            href: 'https://twitter.com/OfficialBPet',
            label: 'X',
            type: 'svg'
        },
    ];

    return (
        <>
            {showBackToTop && (
                <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
                    <ArrowUp size={24} />
                </button>
            )}

            <footer className="footer">
                <div className="footer-main">
                    <div className="footer-content">
                        <div className="footer-brand-section">
                            <div className="footer-logo-wrapper">
                                <img src={logoImg} alt="BonniePet Logo" className="footer-logo" />
                            </div>
                            <h2 className="footer-brand-title">BonniePet</h2>
                            <p className="footer-tagline">The virtual Garden of Eden, where animals can talk.</p>
                        </div>

                        <div className="footer-social-links">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.label}
                                        className="footer-social-link"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>

                        <div
                            className={`footer-bottom-section footer-bottom-center`}
                        >
                            <p className="footer-copyright">
                                Copyright © {currentYear} By Bonniepet
                            </p>
                            <div className="footer-spacer" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
