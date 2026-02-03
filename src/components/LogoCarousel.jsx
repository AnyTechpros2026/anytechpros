import React, { useEffect, useRef } from 'react';

const LogoCarousel = () => {
  const scrollRef = useRef(null);

  // Generate array of logo numbers (1 to 24), excluding deleted ones
  const logos = Array.from({ length: 24 }, (_, i) => i + 1).filter(
    num => ![8, 9, 18].includes(num)
  );

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed (lower = slower)

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Get the width of one complete set of logos
      const singleSetWidth = scrollContainer.scrollWidth / 2;
      
      // Reset when first set is completely scrolled
      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationFrame);
    const handleMouseLeave = () => requestAnimationFrame(scroll);

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-charcoal overflow-hidden border-t border-b border-charcoal/10 dark:border-sandstone/10">
      <div className="container-custom px-4 md:px-6 mb-8 md:mb-12">
        <div className="text-center">
          <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">
            TRUSTED BY INDUSTRY LEADERS
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-light text-charcoal dark:text-sandstone">
            Our Alliance 
          </h2>
        </div>
      </div>

      {/* Logo Carousel Container */}
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-12 md:gap-16 lg:gap-20 items-center overflow-hidden px-8"
          style={{ 
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {/* First set of logos */}
          <div className="flex gap-12 md:gap-16 lg:gap-20 items-center flex-shrink-0">
            {logos.map((num) => (
              <div 
                key={`logo-1-${num}`}
                className="flex-shrink-0 w-28 h-20 md:w-36 md:h-24 lg:w-44 lg:h-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
              >
                <img
                  src={`/c${num}.png`}
                  alt={`Partner ${num}`}
                  className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless infinite scroll */}
          <div className="flex gap-12 md:gap-16 lg:gap-20 items-center flex-shrink-0" aria-hidden="true">
            {logos.map((num) => (
              <div 
                key={`logo-2-${num}`}
                className="flex-shrink-0 w-28 h-20 md:w-36 md:h-24 lg:w-44 lg:h-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
              >
                <img
                  src={`/c${num}.png`}
                  alt=""
                  className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-white dark:from-charcoal to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-white dark:from-charcoal to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default LogoCarousel;
