import React from 'react';
import { LoginForm } from '@components/pages/LoginForm';
import { SuccessMessage } from '@components/pages/SuccessMessage';

interface BodyProps {
  showSuccess?: boolean;
  onSuccess?: () => void;
  onLoginClick?: () => void;
}

export const Body: React.FC<BodyProps> = ({ showSuccess = false, onSuccess, onLoginClick }) => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 px-4 sm:px-8 py-8 sm:py-12 min-h-screen flex items-center justify-center">
      {showSuccess ? (
        <SuccessMessage onLoginClick={onLoginClick} />
      ) : (
        <LoginForm onSuccess={onSuccess} />
      )}
    </div>
  );
};