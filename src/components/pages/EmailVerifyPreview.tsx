// components/pages/EmailVerifyPreview.tsx
import React from 'react';
import { Button } from '@components/common/Button';
import '../../styles/components/pages/email-verify-preview.css';

interface EmailVerifyPreviewProps {
    name: string;
    verifyUrl: string;
}

export const EmailVerifyPreview: React.FC<EmailVerifyPreviewProps> = ({
                                                                          name,
                                                                          verifyUrl,
                                                                      }) => {
    return (
        <div className="email-preview-page">
            <div className="email-preview-wrapper">
                <div className="email-card">
                    {/* top yellow bar */}
                    <div className="email-card__bar email-card__bar--top" />

                    {/* white content */}
                    <div className="email-card__body">
                        <p className="email-card__headline">Hello {name},</p>
                        <p className="email-card__headline">
                            Welcome on board ! To verify your mail click on
                            <br />
                            the verify below.
                        </p>

                        <div className="email-card__button-row">
                            <a href={verifyUrl} target="_blank" rel="noreferrer">
                                <Button variant="secondary" className="email-card__button">
                                    Verify
                                </Button>
                            </a>
                        </div>

                        <p className="email-card__text">
                            Or you can copy and paste the link to your browser
                        </p>
                        <p className="email-card__link">
                            <a href={verifyUrl} target="_blank" rel="noreferrer">
                                {verifyUrl}
                            </a>
                        </p>
                    </div>

                    {/* bottom yellow bar + copyright */}
                    <div className="email-card__bar email-card__bar--bottom">
            <span className="email-card__copyright">
              © 2025 Bonniepet - All rights reserved
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailVerifyPreview;
