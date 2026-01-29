import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import AnimatedCard from '../components/AnimatedCard';

const ServicesPage = () => {
  const services = [
    {
      title: 'Software Development',
      description: 'Custom software solutions with cutting-edge technologies and agile development practices.',
      path: '/services/software-development',
      features: ['Web Applications', 'Mobile Apps', 'Cloud Solutions', 'API Development'],
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and reach.',
      path: '/services/digital-marketing',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Campaigns'],
    },
    {
      title: 'Cyber Security',
      description: 'Enterprise-grade security solutions and risk management for your business.',
      path: '/services/cyber-security',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Monitoring'],
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology infrastructure.',
      path: '/services/it-consulting',
      features: ['IT Strategy', 'Infrastructure', 'Cloud Migration', 'DevOps'],
    },
    {
      title: 'Management Consulting',
      description: 'Expert guidance to improve organizational efficiency and decision-making.',
      path: '/services/management-consulting',
      features: ['Strategy Planning', 'Change Management', 'Process Optimization', 'Leadership'],
    },
    {
      title: 'Business Consulting',
      description: 'Transform your business with strategic insights and operational excellence.',
      path: '/services/business-consulting',
      features: ['Business Strategy', 'Operations', 'Growth Planning', 'Risk Management'],
    },
    {
      title: 'HR Consulting',
      description: 'Optimize human resources with strategic talent management solutions.',
      path: '/services/hr-consulting',
      features: ['Talent Acquisition', 'Performance Management', 'Training', 'HR Technology'],
    },
    {
      title: 'Telecom Consulting',
      description: 'Advanced telecommunications solutions for modern connectivity needs.',
      path: '/services/telecom-consulting',
      features: ['Network Design', '5G Solutions', 'Infrastructure', 'Optimization'],
    },
    {
      title: 'E-Governance',
      description: 'Digital governance solutions for public sector transformation.',
      path: '/services/e-governance-consulting',
      features: ['Digital Services', 'Citizen Engagement', 'Data Management', 'Compliance'],
    },
    {
      title: 'Market Research',
      description: 'Data-driven market insights to inform strategic business decisions.',
      path: '/services/market-research',
      features: ['Market Analysis', 'Consumer Insights', 'Competitive Intelligence', 'Trends'],
    },
    {
      title: 'WhatsApp Marketing',
      description: 'Leverage WhatsApp for effective customer engagement and campaigns.',
      path: '/services/whatsapp-marketing',
      features: ['Campaigns', 'Automation', 'Customer Support', 'Analytics'],
    },
    {
      title: 'AI & Automation',
      description: 'Intelligent automation solutions powered by artificial intelligence.',
      path: '/services/ai-automation',
      features: ['Process Automation', 'Machine Learning', 'Chatbots', 'Predictive Analytics'],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-xl mb-6">Our Services</h1>
              <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
                Comprehensive consulting and technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index}>
                <Link to={service.path}>
                  <AnimatedCard>
                    <h3 className="text-2xl font-heading font-semibold text-text-primary dark:text-text-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text-muted dark:text-text-dark-muted mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-text-muted dark:text-text-dark-muted">
                          <svg className="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-primary dark:text-primary-light font-semibold hover:underline">
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </AnimatedCard>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-section-light dark:bg-section-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                We create tailored solutions that address your unique business challenges.
              </p>
              <Link to="/contact">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                  Discuss Your Project
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
