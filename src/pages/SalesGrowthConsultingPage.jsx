import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SalesGrowthConsultingPage = () => {
  useEffect(() => {
    // Animate hero text
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

    // Animate content on scroll
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
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.5) 0%, rgba(31, 31, 31, 0.7) 100%), url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <div className="container-custom px-4 md:px-6 text-center text-white relative z-10">
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Sales & Growth Consulting
          </h1>
          <p className="hero-subtext text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            We design sales strategies, GTM plans, and revenue operations models that help you build predictable, scalable growth.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-section-light dark:bg-section-dark px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="scroll-animate">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-charcoal dark:text-sandstone">
                Strategic Growth Through Intelligent Sales Design
              </h2>
              <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted mb-6 leading-relaxed">
                In today's competitive landscape, a well-executed sales strategy is the difference between growth and stagnation. We work with leadership teams to design comprehensive sales ecosystems that drive predictable revenue while maintaining healthy margins.
              </p>
              <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted leading-relaxed">
                Our approach combines market analysis, buyer journey mapping, and operational excellence to create sales organizations that perform.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#F5EFE7] dark:bg-charcoal px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-charcoal dark:text-sandstone text-center">
              Our Expertise
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'GTM Strategy & Planning',
                description: 'Define your market entry or expansion strategy with data-driven go-to-market plans that reduce time-to-revenue.'
              },
              {
                title: 'Sales Organization Design',
                description: 'Build high-performing sales teams with optimal territories, compensation structures, and performance metrics.'
              },
              {
                title: 'Revenue Operations',
                description: 'Implement systems and processes that align sales, marketing, and operations for predictable revenue growth.'
              },
              {
                title: 'Channel & Partnership Strategy',
                description: 'Develop multi-channel distribution models that expand market reach and maximize revenue potential.'
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

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-charcoal text-white px-4 md:px-6">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Sales?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can design a growth strategy tailored to your market and ambitions.
            </p>
            <Link to="/contact">
              <button className="bg-sandstone text-charcoal text-base md:text-lg font-bold px-8 md:px-10 py-3 hover:opacity-90 transition-all duration-300">
                Start a Conversation
              </button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default SalesGrowthConsultingPage;
