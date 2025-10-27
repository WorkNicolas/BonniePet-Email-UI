import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';
import logoImg from '@/assets/logo.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get footer element
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const isFooterInView = footerRect.top < window.innerHeight;

      // Show button if we've scrolled past the top and footer is not in view
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
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
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
      {/* Sticky Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg shadow-lg transition-all duration-300 animate-fade-in"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <footer className="bg-yellow-400">
        {/* Main Footer Content */}
        <div className="px-4 sm:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Brand Section */}
            <div className="text-center mb-12 pb-8 border-b-2 border-gray-400">
              <div className="flex justify-center mb-4">
                <img 
                  src={logoImg} 
                  alt="BonniePet Logo" 
                  className="h-16 sm:h-20 w-auto"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Bonniepet
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                The virtual Garden of Eden, where animals can talk.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 sm:gap-8 mb-12">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-white hover:text-blue-600 transition-colors duration-200"
                  >
                    <Icon size={24} className="sm:w-6 sm:h-6" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              
              
              <p className="text-gray-700 text-xs sm:text-sm text-center sm:text-left">
                Copyright © {currentYear} By Bonniepet
              </p>

              {/* Placeholder for symmetry (matches back to top button) */}
              <div className="w-10 h-10" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};