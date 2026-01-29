import React from 'react';

const AnimatedButton = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button',
  ...props 
}) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
