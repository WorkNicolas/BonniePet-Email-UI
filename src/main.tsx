// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { EmailVerifyPreviewPage } from './EmailVerifyPreviewPage';

// parse query params
const params = new URLSearchParams(window.location.search);
const path = window.location.pathname;

const rootEl = document.getElementById('root')!;

if (path.startsWith('/verify-preview')) {
    const name = params.get('name') ?? 'Juan Tamad';
    const verifyUrl =
        params.get('verifyUrl') ??
        'https://bonniepet.com/mail-verify/sample-token';

    ReactDOM.createRoot(rootEl).render(
        <React.StrictMode>
            <EmailVerifyPreviewPage name={name} verifyUrl={verifyUrl} />
        </React.StrictMode>,
    );
} else {
    ReactDOM.createRoot(rootEl).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}
