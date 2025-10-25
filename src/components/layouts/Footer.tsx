import React from 'react';
import { Facebook, Instagram, Youtube, Heart, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/bonniepet', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/bonniepet', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@bonniepet', label: 'YouTube' },
    { icon: Heart, href: 'https://pinterest.com/bonniepet', label: 'Pinterest' },
    { icon: Linkedin, href: 'https://linkedin.com/company/bonniepet', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/bonniepet', label: 'Twitter' },
  ];

  return (
    <footer className="bg-yellow-400">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Brand Section */}
          <div className="text-center mb-12 pb-8 border-b-2 border-gray-400">
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
            <div className="flex items-center gap-2">
              <img 
                src="https://via.placeholder.com/121x119?text=BP" 
                alt="BonniePet Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            <p className="text-gray-700 text-xs sm:text-sm text-center sm:text-left">
              Copyright © {currentYear} By Bonniepet
            </p>

            {/* Back to Top Button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-green-500 hover:bg-green-600 text-white p-2 sm:p-3 rounded-lg transition-colors duration-200"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};