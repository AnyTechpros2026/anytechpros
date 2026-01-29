import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent-warm/5 dark:bg-accent-warm/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary-light/5 dark:bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-accent-deep/5 dark:bg-accent-deep/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default AnimatedBackground;
