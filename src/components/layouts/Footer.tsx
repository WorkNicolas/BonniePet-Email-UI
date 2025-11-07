import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';
import logoImg from '@/assets/logo.png';
import '../../styles/components.css';

export const Footer: React.FC = () => {
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
        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-content">
            <div className="footer-brand-section">
              <div className="footer-logo-wrapper">
                <img 
                  src={logoImg} 
                  alt="BonniePet Logo" 
                  className="footer-logo"
                />
              </div>
              <h2 className="footer-brand-title">BonniePet</h2>
              <p className="footer-tagline">
                The virtual Garden of Eden, where animals can talk.
              </p>
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
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>

            <div className="footer-bottom-section">
              <p className="footer-copyright">
                Copyright © {currentYear} By BonniePet
              </p>
              <div className="footer-spacer" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};