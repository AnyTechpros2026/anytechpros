import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SaasPlatformsPage = () => {
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
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.5) 0%, rgba(31, 31, 31, 0.7) 100%), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <div className="container-custom px-4 md:px-6 text-center text-white relative z-10">
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            SaaS Platforms
          </h1>
          <p className="hero-subtext text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            We offer intelligent platforms that transform complex IT operations into proactive, self-healing systems.
          </p>
        </div>
      </section>

      {/* BotMind Overview */}
      <section className="py-12 md:py-20 lg:py-24 bg-section-light dark:bg-section-dark px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="scroll-animate">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-charcoal dark:text-sandstone">
                BotMind: Next-Gen Intelligent Operations Platform
              </h2>
              <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted mb-6 leading-relaxed">
                BotMind transforms IT operations management through intelligent automation and predictive analytics. We turn reactive, ticket-driven operations into proactive, self-healing systems that anticipate and resolve issues before they impact business.
              </p>
              <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted leading-relaxed">
                By combining machine learning, real-time analytics, and intelligent automation, BotMind helps organizations reduce operational costs, improve system reliability, and free their teams to focus on strategic initiatives.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#F5EFE7] dark:bg-charcoal px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-charcoal dark:text-sandstone text-center">
              Key Capabilities
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Intelligent Automation',
                description: 'Automatically resolve common IT issues, reduce ticket volumes, and accelerate incident response times.'
              },
              {
                title: 'Predictive Analytics',
                description: 'Anticipate infrastructure failures and performance issues before they occur, enabling proactive remediation.'
              },
              {
                title: 'Compliance & Governance',
                description: 'Maintain security standards, audit trails, and regulatory compliance across complex IT environments.'
              },
              {
                title: 'Real-Time Insights',
                description: 'Gain visibility into system health, performance metrics, and operational trends through advanced dashboards.'
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

      {/* Benefits */}
      <section className="py-12 md:py-20 lg:py-24 bg-section-light dark:bg-section-dark px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-charcoal dark:text-sandstone text-center">
              Measurable Impact
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                metric: '70-80%',
                description: 'Reduction in ticket volume through automation'
              },
              {
                metric: '50%+',
                description: 'Faster incident resolution times'
              },
              {
                metric: '90%+',
                description: 'Improved system uptime and reliability'
              },
            ].map((item, index) => (
              <ScrollAnimation key={index}>
                <div className="scroll-animate text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-charcoal dark:text-sandstone mb-2">
                    {item.metric}
                  </div>
                  <p className="text-sm md:text-base text-text-muted dark:text-text-dark-muted">
                    {item.description}
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Discover how BotMind can reduce operational complexity and drive efficiency.
            </p>
            <Link to="/contact">
              <button className="bg-sandstone text-charcoal text-base md:text-lg font-bold px-8 md:px-10 py-3 hover:opacity-90 transition-all duration-300">
                Request a Demo
              </button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default SaasPlatformsPage;
