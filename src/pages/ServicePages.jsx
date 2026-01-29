import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Link } from 'react-router-dom';

// Template component for service pages
const ServiceTemplate = ({ title, description, features, benefits, process }) => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-xl mb-6">{title}</h1>
              <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
                {description}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features */}
      {features && (
        <section className="section bg-section-light dark:bg-section-dark">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index}>
                  <div className="luxury-card hover:-translate-y-2">
                    <h3 className="text-xl font-heading font-semibold text-text-primary dark:text-text-dark mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-text-muted dark:text-text-dark-muted">
                      {feature.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Contact us today to discuss your requirements and learn how we can help.
              </p>
              <Link to="/contact">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

// Digital Marketing Page
export const DigitalMarketingPage = () => (
  <ServiceTemplate
    title="Digital Marketing"
    description="Comprehensive digital marketing strategies to boost your online presence and drive measurable results."
    features={[
      { title: 'SEO Optimization', description: 'Improve search rankings and organic traffic' },
      { title: 'Social Media Marketing', description: 'Engage audiences across all platforms' },
      { title: 'Content Marketing', description: 'Create compelling content that converts' },
      { title: 'PPC Campaigns', description: 'Targeted paid advertising for maximum ROI' },
      { title: 'Email Marketing', description: 'Nurture leads with personalized campaigns' },
      { title: 'Analytics & Reporting', description: 'Data-driven insights and optimization' },
    ]}
  />
);

// Cyber Security Page
export const CyberSecurityPage = () => (
  <ServiceTemplate
    title="Cyber Security"
    description="Comprehensive security solutions to protect your business from evolving cyber threats."
    features={[
      { title: 'Security Assessment', description: 'Identify vulnerabilities and risks' },
      { title: 'Penetration Testing', description: 'Simulate attacks to test defenses' },
      { title: 'Compliance Management', description: 'Meet regulatory requirements' },
      { title: 'Threat Monitoring', description: '24/7 security monitoring and response' },
      { title: 'Identity Management', description: 'Secure access control solutions' },
      { title: 'Security Training', description: 'Employee awareness and best practices' },
    ]}
  />
);

// IT Consulting Page
export const ITConsultingPage = () => (
  <ServiceTemplate
    title="IT Consulting"
    description="Strategic IT consulting to optimize your technology infrastructure and operations."
    features={[
      { title: 'IT Strategy', description: 'Align technology with business goals' },
      { title: 'Cloud Migration', description: 'Seamless transition to cloud platforms' },
      { title: 'DevOps Implementation', description: 'Streamline development and operations' },
      { title: 'Infrastructure Design', description: 'Scalable and resilient architectures' },
      { title: 'IT Governance', description: 'Policies, processes, and frameworks' },
      { title: 'Technology Assessment', description: 'Evaluate and optimize IT systems' },
    ]}
  />
);

// Management Consulting Page
export const ManagementConsultingPage = () => (
  <ServiceTemplate
    title="Management Consulting"
    description="Expert guidance to improve organizational efficiency and strategic decision-making."
    features={[
      { title: 'Strategy Planning', description: 'Develop winning business strategies' },
      { title: 'Change Management', description: 'Navigate organizational transformations' },
      { title: 'Process Optimization', description: 'Streamline operations for efficiency' },
      { title: 'Leadership Development', description: 'Build effective leadership teams' },
      { title: 'Performance Management', description: 'Drive results with clear metrics' },
      { title: 'Organizational Design', description: 'Structure for success' },
    ]}
  />
);

// Business Consulting Page
export const BusinessConsultingPage = () => (
  <ServiceTemplate
    title="Business Consulting"
    description="Transform your business with strategic insights and operational excellence."
    features={[
      { title: 'Growth Strategy', description: 'Identify and pursue growth opportunities' },
      { title: 'Financial Planning', description: 'Optimize financial performance' },
      { title: 'Market Entry', description: 'Expand into new markets successfully' },
      { title: 'Partnership Strategy', description: 'Strategic alliances and partnerships' },
      { title: 'Risk Management', description: 'Identify and mitigate business risks' },
      { title: 'Business Model Innovation', description: 'Reinvent your business model' },
    ]}
  />
);

// HR Consulting Page
export const HRConsultingPage = () => (
  <ServiceTemplate
    title="HR Consulting"
    description="Optimize human resources with strategic talent management solutions."
    features={[
      { title: 'Talent Acquisition', description: 'Attract and hire top talent' },
      { title: 'Performance Management', description: 'Drive employee performance' },
      { title: 'Training & Development', description: 'Upskill your workforce' },
      { title: 'Compensation Design', description: 'Competitive rewards programs' },
      { title: 'Employee Engagement', description: 'Build a positive culture' },
      { title: 'HR Technology', description: 'Automate and optimize HR processes' },
    ]}
  />
);

// Telecom Consulting Page
export const TelecomConsultingPage = () => (
  <ServiceTemplate
    title="Telecom Consulting"
    description="Advanced telecommunications solutions for modern connectivity needs."
    features={[
      { title: 'Network Design', description: 'Optimize network architecture' },
      { title: '5G Solutions', description: 'Next-generation connectivity' },
      { title: 'Infrastructure Planning', description: 'Scalable telecom infrastructure' },
      { title: 'Performance Optimization', description: 'Maximize network efficiency' },
      { title: 'Security Solutions', description: 'Secure telecommunications' },
      { title: 'Cloud Communications', description: 'Modern communication platforms' },
    ]}
  />
);

// E-Governance Consulting Page
export const EGovernanceConsultingPage = () => (
  <ServiceTemplate
    title="E-Governance Consulting"
    description="Digital governance solutions for public sector transformation and efficiency."
    features={[
      { title: 'Digital Services', description: 'Citizen-centric online services' },
      { title: 'Citizen Engagement', description: 'Interactive participation platforms' },
      { title: 'Data Management', description: 'Efficient government data systems' },
      { title: 'Compliance', description: 'Meet regulatory requirements' },
      { title: 'Security & Privacy', description: 'Protect sensitive information' },
      { title: 'Process Digitization', description: 'Paperless government operations' },
    ]}
  />
);

// Market Research Page
export const MarketResearchPage = () => (
  <ServiceTemplate
    title="Market Research"
    description="Data-driven market insights to inform strategic business decisions."
    features={[
      { title: 'Market Analysis', description: 'Comprehensive market studies' },
      { title: 'Consumer Insights', description: 'Understand customer behavior' },
      { title: 'Competitive Intelligence', description: 'Analyze competitor strategies' },
      { title: 'Trend Analysis', description: 'Identify market trends' },
      { title: 'Customer Segmentation', description: 'Target the right audiences' },
      { title: 'Survey Design', description: 'Custom research methodologies' },
    ]}
  />
);

// WhatsApp Marketing Page
export const WhatsAppMarketingPage = () => (
  <ServiceTemplate
    title="WhatsApp Marketing"
    description="Leverage WhatsApp for effective customer engagement and marketing campaigns."
    features={[
      { title: 'Campaign Management', description: 'Targeted WhatsApp campaigns' },
      { title: 'Automation', description: 'Automated responses and workflows' },
      { title: 'Customer Support', description: '24/7 chat support solutions' },
      { title: 'Analytics', description: 'Track campaign performance' },
      { title: 'Notifications', description: 'Transactional and promotional messages' },
      { title: 'Lead Generation', description: 'Capture and nurture leads' },
    ]}
  />
);

export default ServiceTemplate;
