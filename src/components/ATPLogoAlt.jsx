import React from 'react';

const ATPLogoAlt = ({ className = "w-8 h-8", color = "currentColor" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Geometric ATP Fusion - All letters merged into one shape */}
      <path
        d="M25,80 L40,35 L50,60 L60,35 L75,80 M35,65 L45,65 M60,35 L60,55 Q60,65 70,65 Q80,65 80,55 Q80,45 70,45 L60,45"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Subtle geometric accent - triangular element */}
      <circle cx="50" cy="30" r="3" fill={color} />
    </svg>
  );
};

export default ATPLogoAlt;
