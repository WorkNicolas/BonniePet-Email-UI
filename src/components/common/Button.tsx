import React from 'react';
import '../../styles/components/common/button.css';

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
  const variantClass = variant === 'primary' ? 'btn-primary' : 
                       variant === 'secondary' ? 'btn-secondary' : 
                       'btn-social';

  return (
    <button className={`btn ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};