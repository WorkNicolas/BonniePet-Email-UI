import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'social';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-colors';
  const variants = {
    primary: 'bg-yellow-400 text-black hover:bg-yellow-500',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700',
    social: 'flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-colors bg-blue-600 text-white hover:bg-blue-700',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};