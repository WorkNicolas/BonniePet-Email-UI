import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import logoImg from '@/assets/logo.png';
import '../../styles/components/layouts/footer-bar.css';

export const Footer: React.FC = () => {

    const socials = [
        { Icon: Facebook, href: 'https://facebook.com/bonniepetofficial', label: 'Facebook' },
        { Icon: Instagram, href: 'https://www.instagram.com/bonniepetofficial', label: 'Instagram' },
        { Icon: Youtube, href: 'https://www.youtube.com/channel/UCsa72ovB7w3Lxk_LqmJ41Sw', label: 'YouTube' },
        {
            // TikTok
            Icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
                    <path d="M18.5 7.8c-.9-.5-1.6-1.2-2-2.1-.2-.4-.3-.9-.4-1.4h-2.3v10.3c0 1-.5 1.8-1.5 2.1-.7.2-1.3.1-1.9-.3-.5-.4-.8-.9-.9-1.6-.2-1.1.4-2.1 1.5-2.4.3-.1.7-.1 1-.1V9.9c-.3 0-.6 0-.9.1-1 .2-1.9.7-2.6 1.5-.9 1-1.2 2.2-1 3.5.2 1.3.8 2.4 2 3.1 1.1.7 2.4.8 3.7.5 1.8-.5 2.9-2 2.9-3.9V9.2c.6.7 1.3 1.2 2.1 1.5.4.2.9.3 1.3.3V8.6c-.5-.1-1-.3-1.5-.5z" />
                </svg>
            ),
            href: 'https://www.tiktok.com/@bonniepetofficial?lang=en-GB',
            label: 'TikTok',
        },
        { Icon: Linkedin, href: 'https://www.linkedin.com/company/bonniepet/', label: 'LinkedIn' },
        {
            // X / Twitter
            Icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            ),
            href: 'https://twitter.com/OfficialBPet',
            label: 'X',
        },
    ];

    return (
        <footer className="bp-footer" role="contentinfo">
            <div className="bp-footer__inner">
                {/* === Brand (center on desktop) === */}
                <div className="bp-footer__brand">
                    <img src={logoImg} alt="BonniePet logo" className="bp-footer__logo" />
                    <div className="bp-footer__wordmark">bonniepet</div>
                    <p className="bp-footer__tagline">
                        Where Pets Bring People Together – Find Your Pack.
                    </p>
                </div>

                {/* === Right actions (desktop only visible to the right) === */}
                <div className="bp-footer__actions">
                    <nav className="bp-footer__social" aria-label="Social links">
                        {socials.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bp-footer__social-link"
                                title={label}
                            >
                                <Icon className="bp-footer__social-icon" />
                            </a>
                        ))}
                    </nav>


                    <div className="bp-footer__download">
                        <div className="bp-footer__download-title">Download the mobile app</div>
                        <div className="bp-footer__badges">
                            <a
                                href="https://apps.apple.com/in/app/bonniepet/id6479655315"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bp-footer__badge bp-footer__badge--apple"
                            >
                                <img
                                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
                                    alt="Download on the App Store"
                                />
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.bonniepet.app&pcampaignid=web_share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bp-footer__badge bp-footer__badge--google"
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
        </footer>
    );
};

export default Footer;
