// EmailVerifyPreviewPage.tsx
import React from 'react';
import { TopBar } from '@components/layouts/TopBar';
import { Footer } from '@components/layouts/Footer';
import { FooterLegal } from '@components/layouts/FooterLegal';
import { EmailVerifyPreview } from '@components/pages/EmailVerifyPreview';

interface EmailVerifyPreviewPageProps {
    name: string;
    verifyUrl: string;
}

export const EmailVerifyPreviewPage: React.FC<EmailVerifyPreviewPageProps> = ({
                                                                                  name,
                                                                                  verifyUrl,
                                                                              }) => (
    <div className="app-container">
        <TopBar />
        <main className="main-content">
            <EmailVerifyPreview name={name} verifyUrl={verifyUrl} />
        </main>
        <FooterLegal variant="desktop" />
        <Footer />
        <FooterLegal variant="mobile" />
    </div>
);

export default EmailVerifyPreviewPage;
