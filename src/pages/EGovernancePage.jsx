import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EGovernancePage = () => {
  useEffect(() => {
    gsap.fromTo('.hero-heading', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 });
    gsap.utils.toArray('.scroll-animate').forEach((element) => {
      gsap.fromTo(element, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 85%', toggleActions: 'play none none none', once: true }
      });
    });
  }, []);

  const services = [
    {
      icon: 'policy',
      title: 'Policy Alignment',
      description: 'Ensuring e-Governance projects align with government policies, regulations, and citizen needs for effective public service delivery.',
      features: ['Regulatory Compliance', 'Policy Framework', 'Stakeholder Analysis', 'Governance Standards'],
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'lan',
      title: 'Digital Strategy Development',
      description: 'Streamlining IT processes, optimizing resource allocation, and enhancing efficiency for clients.',
      features: ['Digital Roadmap', 'Resource Planning', 'Process Optimization', 'Change Management'],
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'hub',
      title: 'Interoperability Solutions',
      description: 'Designing and implementing interoperable systems to facilitate seamless data exchange among government agencies, improving efficiency.',
      features: ['Data Integration', 'API Development', 'System Connectivity', 'Standard Protocols'],
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
    {
      icon: 'shield',
      title: 'Cybersecurity Integration',
      description: 'Embedding robust cybersecurity measures into e-Governance projects to safeguard sensitive data and protect against cyber threats.',
      features: ['Security Architecture', 'Data Protection', 'Threat Detection', 'Compliance Monitoring'],
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    }
  ];

  const benefits = [
    { icon: 'visibility', title: 'Transparency & Accountability', description: 'Foster transparent governance with digital solutions that enable tracking and accountability', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' },
    { icon: 'groups', title: 'Citizen Engagement', description: 'Enhance citizen participation through accessible digital platforms and services', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]' },
    { icon: 'speed', title: 'Efficient Service Delivery', description: 'Streamline public services for faster, more efficient delivery to citizens', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]' },
    { icon: 'savings', title: 'Cost Optimization', description: 'Reduce operational costs while improving service quality through digital transformation', bgColor: 'bg-[#A8B5A1]', textColor: 'text-[#2F3B35]' }
  ];

  const projectSteps = [
    { number: '1', title: 'Planning & Assessment', description: 'Comprehensive analysis of requirements, stakeholders, and existing infrastructure' },
    { number: '2', title: 'Design & Architecture', description: 'Creating scalable and secure system architecture aligned with government standards' },
    { number: '3', title: 'Implementation & Integration', description: 'Deploying solutions with seamless integration across government departments' },
    { number: '4', title: 'Monitoring & Support', description: 'Continuous monitoring, maintenance, and support for optimal performance' }
  ];

  const expertise = [
    'Digital India Initiatives', 'Smart City Solutions', 'E-District Projects', 'E-Health Systems',
    'E-Education Platforms', 'Land Records Digitization', 'Public Grievance Management', 'Citizen Service Portals',
    'Government Process Automation', 'Data Analytics & Reporting'
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              e-Governance Project Management Consulting
            </h1>
            <p className="hero-heading text-lg md:text-xl text-white/90 leading-relaxed">
              e-Governance Project Management Consulting encompasses guiding government entities in implementing digital solutions for efficient public service delivery. Consultants oversee project planning, execution, and monitoring, ensuring adherence to timelines and budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our e-Governance Consulting Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`scroll-animate ${service.bgColor} ${service.textColor} p-8 hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{service.icon}</span>
                <h3 className="text-2xl font-heading mb-4">{service.title}</h3>
                <p className="mb-4 leading-relaxed opacity-90">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm opacity-90">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">Key Benefits</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className={`scroll-animate ${benefit.bgColor} ${benefit.textColor} p-6 text-center hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-lg font-heading mb-2">{benefit.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management Approach */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">Project Management Approach</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectSteps.map((step, index) => (
              <div key={index} className="scroll-animate">
                <div className="text-6xl font-light text-charcoal/20 dark:text-sandstone/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-heading mb-3 text-charcoal dark:text-sandstone">{step.title}</h3>
                <p className="text-sm text-brown-grey dark:text-text-dark-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">Our Expertise Areas</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {expertise.map((item, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-4 text-center">
                <p className="text-sm font-medium text-charcoal dark:text-sandstone">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal dark:bg-charcoal-light text-white">
        <div className="container-custom px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light mb-6">
              Transform Government Services with Digital Solutions
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Partner with us to deliver citizen-centric e-Governance solutions that drive transparency, efficiency, and engagement
            </p>
            <Link to="/contact">
              <button className="bg-white text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/90 transition-all shadow-2xl">
                Discuss Your e-Governance Project
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EGovernancePage;
