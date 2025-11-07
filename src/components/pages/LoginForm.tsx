import React, { useState } from 'react';
import { FormInput } from '@components/common/FormInput';
import { Button } from '@components/common/Button';
import '../../styles/components/pages/loginform.css';

interface LoginFormProps {
    onSuccess: () => void;
    onRegisterClick: () => void;
    onForgotPasswordClick: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ 
  onSuccess, 
  onRegisterClick, 
  onForgotPasswordClick 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log('Login attempt:', { email, password });
      if (onSuccess) onSuccess();
    }
  };

  return (
    <div className="login-card">
      <div className="login-layout">
        <div className="login-form-section">
          <h1 className="login-title">Welcome!</h1>

          <FormInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <FormInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showToggle={true}
            error={errors.password}
          />

          <Button variant="primary" className="login-btn" onClick={handleLogin}>
            LOGIN
          </Button>

          <Button 
            onClick={onForgotPasswordClick}
            variant="primary" 
            className="login-forgot-btn"
          >
            Forgot Password?
          </Button>
        </div>

        <div className="login-social-section">
          <Button variant="social" className="login-google-btn">
            <img 
              src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" 
              alt="Google Chrome" 
            />
            <span>Sign in with Google</span>
          </Button>

          <Button onClick={onRegisterClick} variant="primary">
            Don't have an account? Register
          </Button>
        </div>
      </div>
    </div>
  );
};