import { LoginForm } from '@components/pages/LoginForm';
import { RegistrationForm } from '@components/pages/RegistrationFormProps';
import { SuccessMessage } from '@components/pages/SuccessMessage';
import { ForgotPasswordForm } from '@components/pages/ForgotPasswordForm';
import type { AppView } from '@/App';

interface BodyProps {
    currentView: AppView;
    onSuccess: () => void;
    onLoginClick: () => void;
    onRegisterClick: () => void;
    onForgotPasswordClick: () => void;
}

export function Body({ currentView, onSuccess, onLoginClick, onRegisterClick, onForgotPasswordClick }: BodyProps) {
    return (
        <main className="flex-grow flex items-center justify-center px-4 py-8">
            {currentView === 'login' && (
                <LoginForm
                    onSuccess={onSuccess}
                    onRegisterClick={onRegisterClick}
                    onForgotPasswordClick={onForgotPasswordClick}
                />
            )}
            {currentView === 'register' && (
                <RegistrationForm
                    onLoginClick={onLoginClick}
                />
            )}
            {currentView === 'forgot-password' && (
                <ForgotPasswordForm
                    onLoginClick={onLoginClick}
                />
            )}
            {currentView === 'success' && (
                <SuccessMessage onLoginClick={onLoginClick} />
            )}
        </main>
    );
}