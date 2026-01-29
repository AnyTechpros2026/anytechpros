import React from 'react';

const AnimatedCard = ({ children, className = '', delay = 0 }) => {
  return (
    <div
      className={`luxury-card hover:-translate-y-2 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
