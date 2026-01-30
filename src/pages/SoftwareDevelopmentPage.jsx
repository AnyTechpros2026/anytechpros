import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SoftwareDevelopmentPage = () => {
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
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.5) 0%, rgba(31, 31, 31, 0.7) 100%), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <div className="container-custom px-4 md:px-6 text-center text-white relative z-10">
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Software Development & Product Engineering
          </h1>
          <p className="hero-subtext text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            We design and build secure, scalable web, mobile, and integration solutions that translate strategy into robust digital products.
          </p>
        </div>
      </section>

      {/* What We Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#F5EFE7] dark:bg-charcoal px-4 md:px-6">
        <div className="container-custom max-w-5xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-12 text-charcoal dark:text-sandstone text-center">
              What We Deliver
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Custom Solutions',
                description: 'Tailored applications built specifically for your business needs and workflows.'
              },
              {
                number: '02',
                title: 'Scalable Architecture',
                description: 'Future-proof systems designed to grow with your business and handle increased demands.'
              },
              {
                number: '03',
                title: 'Quality Assurance',
                description: 'Rigorous testing and QA processes ensuring reliability and performance.'
              },
            ].map((item, index) => (
              <ScrollAnimation key={index}>
                <div className="scroll-animate text-center">
                  <div className="text-5xl md:text-6xl font-heading font-bold text-charcoal/20 dark:text-sandstone/20 mb-4">
                    {item.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 text-charcoal dark:text-sandstone">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-muted dark:text-text-dark-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div>
                <h2 className="heading-md mb-6">Transform Your Vision into Reality</h2>
                <p className="text-body mb-4">
                  Our software development services help you build robust, scalable, and innovative applications that drive business growth and competitive advantage.
                </p>
                <p className="text-body">
                  From concept to deployment, we work closely with you to understand your requirements and deliver solutions that exceed expectations.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="luxury-card">
                <h3 className="text-xl font-heading font-semibold text-text-primary dark:text-text-dark mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {[
                    'Accelerated time-to-market',
                    'Reduced development costs',
                    'Scalable architecture',
                    'Enhanced user experience',
                    'Ongoing support and maintenance',
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-muted dark:text-text-dark-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section bg-section-light dark:bg-section-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">Our Development Services</h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Application Development',
                description: 'Responsive, scalable web applications using modern frameworks like React, Angular, and Vue.js.',
              },
              {
                title: 'Mobile App Development',
                description: 'Native and cross-platform mobile applications for iOS and Android devices.',
              },
              {
                title: 'Cloud Solutions',
                description: 'Cloud-native applications leveraging AWS, Azure, and Google Cloud Platform.',
              },
              {
                title: 'API Development',
                description: 'RESTful and GraphQL APIs for seamless integration and data exchange.',
              },
              {
                title: 'E-Commerce Solutions',
                description: 'Full-featured e-commerce platforms with secure payment integration.',
              },
              {
                title: 'AI/ML Integration',
                description: 'Intelligent features powered by artificial intelligence and machine learning.',
              },
            ].map((service, index) => (
              <ScrollAnimation key={index}>
                <div className="luxury-card hover:-translate-y-2 text-center">

                  <h3 className="text-xl font-heading font-semibold text-text-primary dark:text-text-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted dark:text-text-dark-muted">
                    {service.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">Our Development Process</h2>
              <p className="text-body max-w-3xl mx-auto">
                We follow agile methodologies to ensure transparency, flexibility, and quality throughout the development lifecycle.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Planning', description: 'Requirements gathering and technical specification' },
              { step: '02', title: 'Design & Prototyping', description: 'UX/UI design and interactive prototypes' },
              { step: '03', title: 'Development & Testing', description: 'Agile development with continuous testing' },
              { step: '04', title: 'Deployment & Support', description: 'Launch and ongoing maintenance' },
            ].map((phase, index) => (
              <ScrollAnimation key={index}>
                <div className="luxury-card text-center">
                  <div className="text-4xl font-bold text-gradient mb-4">{phase.step}</div>
                  <h3 className="text-lg font-heading font-semibold text-text-primary dark:text-text-dark mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-text-muted dark:text-text-dark-muted">
                    {phase.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section bg-section-light dark:bg-section-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">Technologies We Use</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="luxury-card">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { category: 'Frontend', tech: 'React, Vue, Angular, Next.js' },
                  { category: 'Backend', tech: 'Node.js, Python, Java, .NET' },
                  { category: 'Mobile', tech: 'React Native, Flutter, Swift, Kotlin' },
                  { category: 'Database', tech: 'PostgreSQL, MongoDB, MySQL, Redis' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-lg font-heading font-semibold text-primary dark:text-primary-light mb-3">
                      {item.category}
                    </h3>
                    <p className="text-sm text-text-muted dark:text-text-dark-muted">
                      {item.tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Build Your Next Application?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Let's discuss your project requirements and create a custom development roadmap.
              </p>
              <Link to="/contact">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-section-light dark:bg-section-dark px-4 md:px-6">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-charcoal dark:text-sandstone">
              Join Our Development Team
            </h2>
            <p className="text-base md:text-lg text-text-muted dark:text-text-dark-muted mb-8">
              We're hiring talented developers, architects, and engineers. If you're passionate about building innovative software solutions, we'd love to meet you.
            </p>
            <Link to="/careers">
              <button className="bg-charcoal dark:bg-sandstone text-sandstone dark:text-charcoal text-base md:text-lg font-bold px-8 md:px-10 py-3 hover:opacity-90 transition-all duration-300">
                View Open Positions
              </button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;
