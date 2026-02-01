import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TelecomConsultingPage = () => {
  useEffect(() => {
    gsap.fromTo('.hero-heading', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 });
    gsap.utils.toArray('.scroll-animate').forEach((element) => {
      gsap.fromTo(element, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 85%', toggleActions: 'play none none none', once: true }
      });
    });
  }, []);

  const systems = [
    'Optical Fiber Communication', 'Telephone Systems', 'Radio Communication', 'CCTV Surveillance',
    'PAS/PIDS', 'Master Clock Systems', 'Access Control', 'CDRS', 'OA/IT Infrastructure', 'Cyber Security'
  ];

  const engineeringServices = [
    'Conceptual Design', 'Detailed Engineering', 'Construction Drawings',
    'Technical Specifications', 'Bill of Quantities', 'Project Documentation'
  ];

  const features = [
    { icon: 'autorenew', title: 'Continuous Communication', description: 'Ensuring uninterrupted connectivity with redundant and reliable telecom infrastructure', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' },
    { icon: 'dashboard_customize', title: 'Modular Architecture', description: 'Scalable and flexible designs that grow with your needs', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]' },
    { icon: 'backup', title: 'Redundant Systems', description: 'Built-in backup systems for maximum uptime and reliability', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]' },
    { icon: 'speed', title: 'Gigabit Ethernet IP Backbone', description: 'High-speed infrastructure for seamless integration and data flow', bgColor: 'bg-[#A8B5A1]', textColor: 'text-[#2F3B35]' }
  ];

  const passengerSafety = [
    { icon: 'emergency', title: 'Emergency Call Points', description: 'Strategically placed emergency communication systems for quick response', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' },
    { icon: 'language', title: 'Multilingual Information Display', description: 'Passenger Information Display Systems supporting multiple languages', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]' },
    { icon: 'videocam', title: 'PoE-based IP CCTV', description: 'Power over Ethernet surveillance for comprehensive security coverage', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]' },
    { icon: 'support_agent', title: 'Passenger Assistance', description: 'Integrated help systems for real-time passenger support', bgColor: 'bg-[#A8B5A1]', textColor: 'text-[#2F3B35]' }
  ];

  const consulting = [
    'Construction Supervision', 'Consulting Services', 'Project Management', 'Validation & Assessment',
    'Network Planning', 'RF Design & Optimization', 'Site Acquisition', 'Testing & Commissioning'
  ];

  const industries = [
    { icon: 'train', name: 'Railways' },
    { icon: 'flight', name: 'Airports' },
    { icon: 'subway', name: 'Metro Systems' },
    { icon: 'location_city', name: 'Smart Cities' },
    { icon: 'corporate_fare', name: 'Corporate Offices' },
    { icon: 'local_hospital', name: 'Healthcare' }
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Telecom Consulting
            </h1>
            <p className="hero-heading text-lg md:text-xl text-white/90 leading-relaxed">
              Design Expertise: Our proficiency encompasses Construction Supervision, Consulting, Project Management, and Validation & Assessment, delivering comprehensive solutions from concept to commissioning.
            </p>
          </div>
        </div>
      </section>

      {/* Telecom System Design */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-animate">
              <span className="material-symbols-outlined text-6xl text-charcoal dark:text-sandstone mb-6 block">cell_tower</span>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
                Telecom System Design
              </h2>
              <p className="text-lg text-brown-grey dark:text-text-dark-muted mb-6 leading-relaxed">
                Offering tailored solutions for Optical Fiber Communication, Telephone, Radio, CCTV, PAS/PIDS, Master Clock, Access Control, CDRS, OA/IT, and Cyber Security Systems.
              </p>
            </div>
            <div className="scroll-animate grid grid-cols-2 gap-4">
              {systems.map((system, index) => (
                <div key={index} className="bg-taupe/20 dark:bg-charcoal-light p-4 text-center">
                  <p className="text-sm font-medium text-charcoal dark:text-sandstone">{system}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Services */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate grid grid-cols-2 gap-4 order-2 md:order-1">
              {engineeringServices.map((service, index) => (
                <div key={index} className="bg-taupe/20 dark:bg-charcoal-light p-4 text-center">
                  <p className="text-sm font-medium text-charcoal dark:text-sandstone">{service}</p>
                </div>
              ))}
            </div>
            <div className="scroll-animate order-1 md:order-2">
              <span className="material-symbols-outlined text-6xl text-charcoal dark:text-sandstone mb-6 block">engineering</span>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
                Engineering Services
              </h2>
              <p className="text-lg text-brown-grey dark:text-text-dark-muted leading-relaxed">
                From Conceptual Design to Goods for Construction drawing, our experienced engineers provide holistic design solutions across various infrastructure sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">Key Features</h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Our telecom systems ensure continuous communication, boasting modular, redundant, and distributed architecture with a Gigabit Ethernet IP Backbone for seamless integration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className={`scroll-animate ${feature.bgColor} ${feature.textColor} p-6 text-center hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-heading mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Passenger Safety */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">Enhanced Passenger Safety</h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Providing emergency call points, multilingual information display, and PoE-based IP CCTV surveillance for passenger security and assistance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {passengerSafety.map((item, index) => (
              <div key={index} className={`scroll-animate ${item.bgColor} ${item.textColor} p-6 text-center hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-heading mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Consulting Expertise */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">Our Consulting Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {consulting.map((item, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-4 text-center">
                <p className="text-sm font-medium text-charcoal dark:text-sandstone">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="scroll-animate text-center">
                <span className="material-symbols-outlined text-6xl text-charcoal dark:text-sandstone mb-4 block">{industry.icon}</span>
                <p className="text-sm font-medium text-charcoal dark:text-sandstone">{industry.name}</p>
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
              Enhance Your Telecom Infrastructure
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Let our telecom experts design and implement cutting-edge communication solutions for your organization
            </p>
            <Link to="/contact">
              <button className="bg-white text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/90 transition-all shadow-2xl">
                Discuss Your Project
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TelecomConsultingPage;
