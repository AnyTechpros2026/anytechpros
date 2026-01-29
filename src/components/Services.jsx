import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const Services = () => {
  const services = [
    {
      title: 'Sales & Growth Consulting',
      description: 'We design sales strategies, GTM plans, and revenue operations models that help you build predictable, scalable growth.',
      path: '/services/management-consulting',
      icon: 'trending_up',
    },
    {
      title: 'Management & Business Consulting',
      description: 'We work with leadership teams to reshape business models, streamline operations, and drive digital transformation across the enterprise.',
      path: '/services/management-consulting',
      icon: 'business_center',
    },
    {
      title: 'HR & Talent Consulting',
      description: 'We help you architect future ready teams through workforce planning, talent advisory, and tech enabled hiring and HR processes.',
      path: '/services/hr-consulting',
      icon: 'groups',
    },
    {
      title: 'Software Development & Product Engineering',
      description: 'We design and build secure, scalable web, mobile, and integration solutions that translate strategy into robust digital products.',
      path: '/services/software-development',
      icon: 'code',
    },
    {
      title: 'Cyber Security',
      description: 'We deliver next generation cybersecurity solutions that safeguard data, infrastructure, and operations against evolving threats through advanced VAPT, red teaming, and expert consultancy.',
      path: '/services/cyber-security',
      icon: 'shield',
    },
    {
      title: 'SaaS Platforms',
      description: 'We offer BOTMINDs turns complex IT operations into a proactive, self healing system—cutting tickets, improving compliance, and freeing teams to focus on strategic work.',
      path: '/botminds',
      icon: 'layers',
    },
    {
      title: 'WhatsApp Marketing Solutions',
      description: 'Enterprise-grade WhatsApp automation powered by Gupshup.io, enabling businesses to engage customers, automate communication, and scale growth intelligently.',
      path: '/services/whatsapp-marketing',
      icon: 'chat',
    },
    {
      title: 'Advanced Unmanned Aerial Systems for Defence & Security',
      description: 'Next gen tactical FPV drones engineered for speed, precision, and mission success—covering micro, fixed wing, and kamikaze style platforms for demanding field operations.',
      path: '/drones',
      icon: 'flight',
    },
  ];

  return (
    <section className="section bg-taupe dark:bg-charcoal-light" id="services">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="max-w-3xl mb-20">
            <div className="text-charcoal dark:text-sandstone text-xs uppercase tracking-widest-4xl font-bold mb-6">Service Offerings</div>
            <h2 className="heading-lg mb-6">Custom Engineered Excellence</h2>
            <p className="text-body">
              We bring together consulting, engineering, and SaaS platforms to solve complex business and technology challenges end to end.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/5 border border-charcoal/5">
          {services.map((service, index) => (
            <ScrollAnimation key={index}>
              <Link to={service.path}>
                <div className="group bg-taupe dark:bg-charcoal p-12 transition-all duration-500 hover:bg-taupe/80 dark:hover:bg-charcoal-light h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-12 text-charcoal dark:text-sandstone">
                    <span className="material-symbols-outlined text-4xl font-extralight">{service.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-light mb-6 text-charcoal dark:text-sandstone">
                      {service.title}
                    </h3>
                    <p className="text-brown-grey dark:text-text-dark-muted text-sm leading-relaxed mb-12 font-light">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* CTA */}
                  <div className="inline-flex items-center gap-4 text-[10px] uppercase tracking-widest-3xl font-bold text-charcoal dark:text-sandstone hover:translate-x-1 transition-transform">
                    Explore
                    <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="text-center mt-16">
            <Link to="/services">
              <button className="bg-charcoal dark:bg-sandstone text-sandstone dark:text-charcoal text-sm uppercase tracking-widest-xl font-bold px-10 py-5 hover:opacity-90 transition-all duration-300 shadow-card">
                View All Services
              </button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Services;
