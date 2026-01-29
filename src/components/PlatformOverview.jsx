import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const PlatformOverview = () => {
  const features = [
    {
      title: 'Strategic Planning',
      description: 'Comprehensive business analysis and strategic roadmap development.',
    },
    {
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflow optimization.',
    },
    {
      title: 'Analytics & Insights',
      description: 'Data-driven decision making with advanced analytics and reporting.',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security protocols and compliance management.',
    },
    {
      title: 'Rapid Deployment',
      description: 'Fast implementation with minimal disruption to your operations.',
    },
  ];

  return (
    <section className="section bg-background-light dark:bg-background-dark" id="platform">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Our Platform</h2>
            <p className="text-body">
              A comprehensive ecosystem of tools and services designed to accelerate your digital transformation journey.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollAnimation key={index}>
              <div className="luxury-card hover:-translate-y-2">
                <h3 className="text-xl font-heading font-semibold text-text-primary dark:text-text-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-muted dark:text-text-dark-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Discover how our platform can help you achieve your business goals faster and more efficiently.
            </p>
            <Link to="/platform">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Explore Platform Features
              </button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PlatformOverview;
