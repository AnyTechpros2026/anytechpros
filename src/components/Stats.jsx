import React, { useEffect, useState, useRef } from 'react';
import ScrollAnimation from './ScrollAnimation';

const Stats = () => {
  const stats = [
    { value: 500, suffix: '+', label: 'Projects Delivered', duration: 2000 },
    { value: 200, suffix: '+', label: 'Happy Clients', duration: 2000 },
    { value: 15, suffix: '+', label: 'Years Experience', duration: 1500 },
    { value: 98, suffix: '%', label: 'Client Satisfaction', duration: 2000 },
  ];

  return (
    <section className="section bg-gradient-primary text-white" id="stats">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Trusted by leading organizations worldwide to deliver exceptional results
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter key={index} {...stat} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCounter = ({ value, suffix, label, duration, delay }) => {
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
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base uppercase tracking-wide opacity-90">
        {label}
      </div>
    </div>
  );
};

export default Stats;
