import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <svg
      className={`w-10 h-10 ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Geometric logo with warm tones */}
      <circle cx="100" cy="100" r="90" fill="url(#gradient1)" />
      <path
        d="M100 30 L160 85 L145 150 L55 150 L40 85 Z"
        fill="url(#gradient2)"
        opacity="0.9"
      />
      <circle cx="100" cy="100" r="35" fill="white" opacity="0.95" />
      <path
        d="M100 75 L115 95 L100 115 L85 95 Z"
        fill="url(#gradient3)"
      />
      
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4915E" />
          <stop offset="100%" stopColor="#8B5E34" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D99F6C" />
          <stop offset="100%" stopColor="#C4915E" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4915E" />
          <stop offset="100%" stopColor="#8B5E34" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
