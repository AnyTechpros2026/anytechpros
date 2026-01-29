import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import AnimatedBackground from '../components/AnimatedBackground';

const SoftwareDevelopmentPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero dark:bg-gradient-hero-dark pt-20">
        <AnimatedBackground />
        <div className="container-custom relative z-10 py-20">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Software Development</h1>
              <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed max-w-3xl mx-auto">
                Custom software solutions tailored to your business needs with cutting-edge technologies and agile development practices.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Overview */}
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
                  Get Started
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;
