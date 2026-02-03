import React, { useEffect, useState, useRef } from 'react';
import ScrollAnimation from './ScrollAnimation';

const Stats = () => {
  const stats = [
    { 
      value: 7, 
      suffix: '+', 
      label: 'Years of Experience', 
      duration: 1500,
      icon: 'workspace_premium'
    },
    { 
      value: 100, 
      suffix: '+', 
      label: 'Consulting Assignments', 
      duration: 2000,
      icon: 'business_center'
    },
    { 
      value: 50, 
      suffix: '+', 
      label: 'Software Solutions', 
      duration: 2000,
      icon: 'code'
    },
    { 
      value: 10, 
      suffix: '+', 
      label: 'Government Clients', 
      duration: 1500,
      icon: 'account_balance'
    },
    { 
      value: 100, 
      suffix: '+', 
      label: 'Global Clients', 
      duration: 2000,
      icon: 'public'
    },
  ];

  return (
    <section className="section bg-white dark:bg-charcoal py-12 md:py-20 lg:py-24" id="stats">
      <div className="container-custom px-4 md:px-6">
        <ScrollAnimation>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 text-charcoal dark:text-white">
              Our Impact in Numbers
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-charcoal/70 dark:text-white/70 max-w-2xl mx-auto">
              Trusted by leading organizations worldwide to deliver exceptional results
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCounter key={index} {...stat} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCounter = ({ value, suffix, label, duration, delay, icon }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = () => {
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * value);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    setTimeout(() => animate(), delay);
  };

  return (
    <div 
      ref={ref} 
      className="text-center bg-sandstone/5 dark:bg-white/5 p-6 md:p-8 rounded-lg border border-charcoal/10 dark:border-white/10 hover:border-charcoal/30 dark:hover:border-white/30 transition-all duration-300 hover:shadow-lg"
    >
      <span className="material-symbols-outlined text-5xl md:text-6xl mb-4 text-charcoal/80 dark:text-sandstone/80 font-light">
        {icon}
      </span>
      <div className="text-4xl md:text-5xl font-bold mb-3 text-charcoal dark:text-white">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base uppercase tracking-wide text-charcoal/70 dark:text-white/70 font-semibold">
        {label}
      </div>
    </div>
  );
};

export default Stats;
