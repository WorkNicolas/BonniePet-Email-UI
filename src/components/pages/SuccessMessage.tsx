import React from 'react';
import { Button } from '@components/common/Button';

interface SuccessMessageProps {
  onLoginClick?: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ onLoginClick }) => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/50">
      <div className="mb-6 sm:mb-8 flex justify-center">
        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-500 rounded-full flex items-center justify-center">
          <div className="text-2xl sm:text-3xl text-white font-bold">✓</div>
        </div>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">Success</h2>
      <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        Mail verified successfully!
      </p>
      <Button variant="secondary" onClick={onLoginClick}>
        Log In
      </Button>
    </div>
  );
};