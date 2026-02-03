import React from 'react';

const ATPLogo = ({ className = "w-8 h-8", color = "currentColor" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern ATP Monogram */}
      <g>
        {/* A - Left triangle with negative space */}
        <path
          d="M20 75 L35 35 L50 75 M28 60 L42 60"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* T - Center vertical with horizontal top */}
        <path
          d="M40 35 L60 35 M50 35 L50 75"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* P - Right stem with rounded top */}
        <path
          d="M65 75 L65 35 Q65 28 72 28 Q79 28 79 35 Q79 42 72 42 Q65 42 65 42"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default ATPLogo;
