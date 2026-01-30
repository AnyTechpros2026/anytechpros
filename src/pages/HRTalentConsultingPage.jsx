import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HRTalentConsultingPage = () => {
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
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.5) 0%, rgba(31, 31, 31, 0.7) 100%), url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <div className="container-custom px-4 md:px-6 text-center text-white relative z-10">
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            HR & Talent Consulting
          </h1>
          <p className="hero-subtext text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            We help you architect future-ready teams through workforce planning, talent advisory, and tech-enabled hiring and HR processes.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-section-light dark:bg-section-dark px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="scroll-animate">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-charcoal dark:text-sandstone">
                Building High-Performance Teams for the Future
              </h2>
              <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted mb-6 leading-relaxed">
                Your people are your competitive advantage. In a rapidly changing business environment, organizations need sophisticated talent strategies that go beyond traditional HR. We help you attract, develop, and retain the best talent while building organizational cultures that drive performance and innovation.
              </p>
              <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted leading-relaxed">
                Through workforce planning, talent advisory, and technology-enabled HR transformation, we help you build teams equipped for tomorrow's challenges.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#F5EFE7] dark:bg-charcoal px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-charcoal dark:text-sandstone text-center">
              Our Services
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Workforce Planning & Strategy',
                description: 'Develop talent strategies aligned with business objectives, including headcount planning, skills assessments, and succession planning.'
              },
              {
                title: 'Executive Search & Recruitment',
                description: 'Identify and attract executive leadership and specialized talent to drive organizational growth and transformation.'
              },
              {
                title: 'Organizational Development',
                description: 'Design organizational structures, develop leadership capabilities, and build high-performance cultures.'
              },
              {
                title: 'Compensation & Benefits Strategy',
                description: 'Create competitive compensation packages and benefits programs that attract, retain, and motivate talent.'
              },
              {
                title: 'HR Technology & Transformation',
                description: 'Implement modern HR systems and processes that streamline operations and improve employee experience.'
              },
              {
                title: 'Talent Development & Training',
                description: 'Build comprehensive development programs that enhance skills, capabilities, and leadership across the organization.'
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

      {/* Impact */}
      <section className="py-12 md:py-20 lg:py-24 bg-section-light dark:bg-section-dark px-4 md:px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-charcoal dark:text-sandstone text-center">
              Measurable Outcomes
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                metric: '40% ↓',
                description: 'Reduction in time-to-hire for critical positions'
              },
              {
                metric: '35% ↑',
                description: 'Improvement in employee retention'
              },
              {
                metric: '50% ↑',
                description: 'Enhanced leadership bench strength'
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
              Ready to Build Your Future-Ready Team?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how talent strategy and HR transformation can drive organizational performance.
            </p>
            <Link to="/contact">
              <button className="bg-sandstone text-charcoal text-base md:text-lg font-bold px-8 md:px-10 py-3 hover:opacity-90 transition-all duration-300">
                Schedule a Consultation
              </button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default HRTalentConsultingPage;
