import React, { useState } from 'react';
import { FormInput } from '@components/common/FormInput';
import { Button } from '@components/common/Button';

interface LoginFormProps {
    onSuccess: () => void;
    onRegisterClick: () => void;
    onForgotPasswordClick: () => void;
}

export const Login: React.FC<LoginFormProps> = ({ onSuccess, onRegisterClick, onForgotPasswordClick } : LoginFormProps ) => {
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
    <div
      className="w-full max-w-6xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/50"
      style={{ boxShadow: '0 -14px 30px rgba(0,0,0,0.55), 0 10px 30px rgba(0,0,0,0.5)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Column - Form */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left mb-2 text-gray-800">
            Welcome!
          </h1>

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

          <Button 
            variant="primary" 
            className="mb-4 sm:mb-6 w-full sm:w-auto" 
            onClick={handleLogin}
          >
            LOGIN
          </Button>

          <Button onClick={onForgotPasswordClick}
            variant="primary" 
            className="bg-yellow-400 text-black hover:bg-yellow-500 mb-6 sm:mb-8 w-full sm:w-auto"
          >
            Forgot Password?
          </Button>
        </div>

        {/* Right Column - Social Buttons */}
        <div className="flex flex-col justify-center gap-4">

          <Button variant="social" className="mb-8 sm:mb-10">
            <img 
              src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" 
              alt="Google Chrome" 
              className="w-5 h-5"
            />
            <span>Sign in with Google</span>
          </Button>

          <Button onClick={onRegisterClick} variant="primary" className="bg-yellow-400 text-black hover:bg-yellow-500 w-full">
            Don't have an account? Register
          </Button>
        </div>
      </div>
    </div>
  );
};