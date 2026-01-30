import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DronesPage = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-heading',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.hero-subtext',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    );

    gsap.utils.toArray('.scroll-animate').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section 
        className="relative h-screen md:h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.5) 0%, rgba(31, 31, 31, 0.7) 100%), url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <div className="container-custom px-4 md:px-6 text-center text-white relative z-10">
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Advanced Unmanned Aerial Systems
          </h1>
          <p className="hero-subtext text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Next-generation tactical FPV drones engineered for speed, precision, and mission success
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-section-light dark:bg-section-dark px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="scroll-animate">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-charcoal dark:text-sandstone">
                Precision Engineering for Demanding Operations
              </h2>
              <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted mb-6 leading-relaxed">
                Our advanced unmanned aerial systems represent the cutting edge of tactical drone technology. Designed and engineered for defence, security, and critical infrastructure applications, our platforms deliver unprecedented performance, reliability, and operational capability in the most demanding field conditions.
              </p>
              <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted leading-relaxed">
                With multiple form factors ranging from micro systems to fixed-wing platforms and specialized kamikaze configurations, we provide tailored solutions for diverse mission requirements.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Platform Variants */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#F5EFE7] dark:bg-charcoal px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-charcoal dark:text-sandstone text-center">
              Platform Variants
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Micro Systems',
                description: 'Lightweight, portable platforms for rapid deployment in constrained environments. Perfect for reconnaissance and tactical intelligence gathering.'
              },
              {
                title: 'Fixed Wing',
                description: 'Extended endurance platforms with superior range and payload capacity. Ideal for area surveillance, mapping, and long-duration operations.'
              },
              {
                title: 'Tactical Platforms',
                description: 'Specialized configurations engineered for critical missions. Advanced targeting, sensor integration, and mission-specific payload customization.'
              },
            ].map((item, index) => (
              <ScrollAnimation key={index}>
                <div className="scroll-animate luxury-card p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 text-charcoal dark:text-sandstone">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-muted dark:text-text-dark-muted">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-12 md:py-20 lg:py-24 bg-section-light dark:bg-section-dark px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-charcoal dark:text-sandstone text-center">
              Advanced Capabilities
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              'Precision navigation and autonomous flight',
              'Advanced sensor payloads and integration',
              'Real-time telemetry and command systems',
              'Extreme weather and harsh environment operation',
              'Extended range and endurance',
              'Modular payload architecture',
            ].map((capability, index) => (
              <ScrollAnimation key={index}>
                <div className="scroll-animate flex items-start gap-4">
                  <div className="text-charcoal dark:text-sandstone text-2xl mt-1">✓</div>
                  <p className="text-base text-text-muted dark:text-text-dark-muted">
                    {capability}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-charcoal text-white px-4 md:px-6">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Elevate Your Capabilities?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Explore how our advanced aerial systems can support your mission requirements.
            </p>
            <Link to="/contact">
              <button className="bg-sandstone text-charcoal text-base md:text-lg font-bold px-8 md:px-10 py-3 hover:opacity-90 transition-all duration-300">
                Get in Touch
              </button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default DronesPage;
