import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface RegistrationFormPropsType {
    onLoginClick: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormPropsType> = ({ onLoginClick } : RegistrationFormPropsType) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      console.log('Registration attempt:', formData);
      // Handle registration logic here
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-lg">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Create a new account
      </h1>

      {/* Name Input */}
      <div className="mb-4 sm:mb-6">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        {errors.name && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email Input */}
      <div className="mb-4 sm:mb-6">
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        {errors.email && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password Input */}
      <div className="relative mb-4 sm:mb-6">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {errors.password && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password Input */}
      <div className="relative mb-6 sm:mb-8">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Register Button */}
      <button
        onClick={handleRegister}
        className="w-full py-3 sm:py-4 bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg font-semibold text-sm sm:text-base transition-colors mb-4"
      >
        Register
      </button>

      {/* Login Link */}
      <button
        onClick={onLoginClick}
        className="w-full py-3 sm:py-4 bg-blue-500 text-white hover:bg-blue-600 rounded-lg font-semibold text-sm sm:text-base transition-colors"
      >
        Already a member? Login
      </button>
    </div>
  );
}

export default RegistrationForm;