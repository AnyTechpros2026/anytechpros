import React from 'react';

const ATPLogoMinimal = ({ className = "w-8 h-8", isDark = false }) => {
  const lightColor = "#2F3B35";
  const darkColor = "#E8DDD0";
  const color = isDark ? darkColor : lightColor;
  
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ultra-minimal geometric ATP monogram */}
      <g>
        {/* Unified letterform - Abstract geometric representation */}
        
        {/* A - Sharp triangle */}
        <path
          d="M30 85 L45 40 L60 85"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="36" y1="68" x2="54" y2="68" stroke={color} strokeWidth="6" strokeLinecap="round" />
        
        {/* T - Clean cross */}
        <line x1="52" y1="40" x2="78" y2="40" stroke={color} strokeWidth="6" strokeLinecap="round" />
        <line x1="65" y1="40" x2="65" y2="85" stroke={color} strokeWidth="6" strokeLinecap="round" />
        
        {/* P - Modern stem with loop */}
        <line x1="75" y1="40" x2="75" y2="85" stroke={color} strokeWidth="6" strokeLinecap="round" />
        <path
          d="M75 40 Q90 40 90 52 Q90 64 75 64"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default ATPLogoMinimal;
