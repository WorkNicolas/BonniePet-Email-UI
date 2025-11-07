import React from 'react';
import { Button } from '@components/common/Button';

interface SuccessMessageProps {
  onLoginClick?: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ onLoginClick }) => {
  return (
    <div className="success-card">
      <div className="success-icon-container">
        <div className="success-icon">
          <div className="success-checkmark">✓</div>
        </div>
      </div>
      <h2 className="success-title">Success</h2>
      <p className="success-message">
        Mail verified successfully!
      </p>
      <Button variant="secondary" onClick={onLoginClick}>
        Log In
      </Button>
    </div>
  );
};