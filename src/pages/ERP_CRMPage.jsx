import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ERPCRMDevelopmentPage = () => {
  useEffect(() => {
    gsap.fromTo('.hero-heading', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
    );
    
    gsap.utils.toArray('.scroll-animate').forEach((element) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 20 }, 
        {
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: 'power2.out',
          scrollTrigger: { 
            trigger: element, 
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    });
  }, []);

  const erpCrmSystems = [
    { 
      icon: 'account_tree', 
      title: 'SAP Solutions', 
      description: 'SAP S/4HANA, ECC, and Business One implementation, ABAP development, Fiori apps, and S/4HANA migration services.',
      bgColor: 'bg-[#2F4538]', 
      textColor: 'text-[#F7F3ED]',
      features: ['SAP S/4HANA', 'SAP ECC', 'ABAP Development', 'SAP Fiori']
    },
    { 
      icon: 'hub', 
      title: 'Microsoft Dynamics', 
      description: 'Dynamics 365 Finance, Supply Chain, Sales, and Customer Service implementation and customization.',
      bgColor: 'bg-[#C9D8BF]', 
      textColor: 'text-[#2F3B35]',
      features: ['Dynamics 365', 'Power Platform', 'Azure Integration', 'Custom Workflows']
    },
    { 
      icon: 'storefront', 
      title: 'Oracle ERP & CRM', 
      description: 'Oracle Cloud ERP, NetSuite, and Oracle CX implementation with complete business process optimization.',
      bgColor: 'bg-[#E8DDD0]', 
      textColor: 'text-[#2F3B35]',
      features: ['Oracle Cloud', 'NetSuite', 'Oracle CX', 'PeopleSoft']
    },
    { 
      icon: 'campaign', 
      title: 'Salesforce', 
      description: 'Salesforce Sales Cloud, Service Cloud, Marketing Cloud implementation and custom development.',
      bgColor: 'bg-[#A8B5A1]', 
      textColor: 'text-[#2F3B35]',
      features: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Apex Development']
    },
    { 
      icon: 'factory', 
      title: 'Odoo ERP', 
      description: 'Open-source Odoo ERP implementation covering all business operations from sales to manufacturing.',
      bgColor: 'bg-[#2F4538]', 
      textColor: 'text-[#F7F3ED]',
      features: ['Sales', 'Inventory', 'Manufacturing', 'Accounting']
    },
    { 
      icon: 'handshake', 
      title: 'Zoho CRM', 
      description: 'Zoho CRM and Zoho One suite implementation for streamlined customer relationship management.',
      bgColor: 'bg-[#C9D8BF]', 
      textColor: 'text-[#2F3B35]',
      features: ['Zoho CRM', 'Zoho One', 'Custom Modules', 'Workflow Automation']
    }
  ];

  const services = [
    { 
      icon: 'settings', 
      title: 'ERP Implementation', 
      description: 'End-to-end ERP implementation services including requirements analysis, solution design, and seamless deployment.',
      bgColor: 'bg-[#2F4538]', 
      textColor: 'text-[#F7F3ED]' 
    },
    { 
      icon: 'groups', 
      title: 'CRM Solutions', 
      description: 'Comprehensive CRM implementation to manage customer interactions, sales pipelines, and marketing campaigns.',
      bgColor: 'bg-[#C9D8BF]', 
      textColor: 'text-[#2F3B35]' 
    },
    { 
      icon: 'sync', 
      title: 'System Integration', 
      description: 'Seamless integration between ERP, CRM, and other business systems for unified data and processes.',
      bgColor: 'bg-[#E8DDD0]', 
      textColor: 'text-[#2F3B35]' 
    }
  ];

  const modules = [
    {
      icon: 'wallet',
      title: 'SAP FI/CO',
      description: 'Financial Accounting and Controlling for comprehensive financial management and reporting.',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'inventory_2',
      title: 'SAP MM',
      description: 'Materials Management for procurement, inventory, and warehouse management optimization.',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'shopping_cart',
      title: 'SAP SD',
      description: 'Sales and Distribution for order-to-cash processes and customer relationship management.',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'precision_manufacturing',
      title: 'SAP PP',
      description: 'Production Planning for manufacturing execution, planning, and production control.',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
    {
      icon: 'groups',
      title: 'SAP HCM',
      description: 'Human Capital Management for talent management, payroll, and workforce planning.',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
    {
      icon: 'pie_chart',
      title: 'SAP BW/BI',
      description: 'Business Warehouse and Intelligence for data analytics and reporting solutions.',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    }
  ];

  const capabilities = [
    {
      title: 'SAP Fiori Development',
      desc: 'Modern, responsive UX with SAP Fiori apps for enhanced user experience across devices',
      icon: 'phone_iphone'
    },
    {
      title: 'SAP Integration',
      desc: 'Seamless integration with third-party systems using SAP PI/PO, CPI, and modern APIs',
      icon: 'sync_alt'
    },
    {
      title: 'SAP BTP Development',
      desc: 'Cloud-native extensions on SAP Business Technology Platform with CAP and RAP',
      icon: 'cloud_circle'
    },
    {
      title: 'SAP UI5 Applications',
      desc: 'Custom UI5/Fiori applications with responsive design and modern JavaScript frameworks',
      icon: 'web'
    },
    {
      title: 'SAP Workflow Automation',
      desc: 'Business workflow automation and optimization using SAP Workflow and BPM',
      icon: 'automation'
    },
    {
      title: 'Performance Optimization',
      desc: 'SAP system performance tuning, code optimization, and database optimization',
      icon: 'speed'
    }
  ];

  const technologies = [
    'SAP S/4HANA', 'SAP ECC', 'SAP Fiori', 'SAPUI5', 'ABAP', 'ABAP OO',
    'SAP BTP', 'SAP CAP', 'SAP RAP', 'SAP CPI', 'SAP PI/PO', 'SAP Gateway',
    'SAP HANA', 'SAP NetWeaver', 'SAP Solution Manager', 'SAP Business One'
  ];

  const process = [
    {
      step: '01',
      title: 'Business Analysis',
      description: 'Understand business processes, pain points, and requirements for SAP solution'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Design SAP architecture, customizations, and integration touchpoints'
    },
    {
      step: '03',
      title: 'Development & Config',
      description: 'ABAP development, system configuration, and custom enhancements'
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Comprehensive testing including unit, integration, and user acceptance testing'
    },
    {
      step: '05',
      title: 'Go-Live & Support',
      description: 'Production deployment with post-go-live support and continuous optimization'
    }
  ];

  const benefits = [
    { icon: 'business_center', title: 'Business Process Excellence', description: 'Streamline operations with SAP best practices' },
    { icon: 'insights', title: 'Real-Time Analytics', description: 'Data-driven decision making with SAP HANA' },
    { icon: 'savings', title: 'Cost Efficiency', description: 'Reduce operational costs and improve ROI' },
    { icon: 'verified', title: 'Compliance & Security', description: 'Meet regulatory requirements with robust controls' }
  ];

  const industries = [
    { name: 'Manufacturing', icon: 'factory' },
    { name: 'Retail', icon: 'storefront' },
    { name: 'Utilities', icon: 'bolt' },
    { name: 'Oil & Gas', icon: 'local_gas_station' },
    { name: 'Pharmaceuticals', icon: 'vaccines' },
    { name: 'Automotive', icon: 'directions_car' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{ backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="hero-heading flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-5xl text-white">account_tree</span>
              <span className="text-sm uppercase tracking-widest text-white/80">Next-Gen Solutions</span>
            </div>
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Enterprise Resource Planning 
            </h1>
            <p className="hero-heading text-lg md:text-xl text-white/90 leading-relaxed">
              Transform your enterprise with comprehensive SAP solutions—from implementation and customization to S/4HANA migration and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our SAP Services
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Comprehensive SAP solutions for digital transformation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`scroll-animate ${service.bgColor} ${service.textColor} p-8 rounded-xl hover:scale-105 transition-transform duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{service.icon}</span>
                <h3 className="text-2xl font-heading mb-3">{service.title}</h3>
                <p className="leading-relaxed opacity-90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAP Modules */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              SAP Modules We Support
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div key={index} className={`scroll-animate ${module.bgColor} ${module.textColor} p-6 rounded-xl hover:shadow-xl transition-shadow duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{module.icon}</span>
                <h3 className="font-heading mb-2 text-lg">{module.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Technical Capabilities
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Advanced SAP development and customization expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="scroll-animate bg-taupe/20 dark:bg-charcoal-light p-6 rounded-xl border-2 border-[#2F3B35]/10 dark:border-sandstone/20 hover:border-[#2F4538] dark:hover:border-[#C9D8BF] transition-all duration-300">
                <span className="material-symbols-outlined text-4xl mb-3 block text-[#2F4538] dark:text-[#C9D8BF]">
                  {capability.icon}
                </span>
                <h3 className="text-xl font-heading mb-2 text-charcoal dark:text-sandstone">{capability.title}</h3>
                <p className="text-brown-grey dark:text-text-dark-muted">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Structured approach for successful SAP deployments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-[#2F4538] dark:text-[#C9D8BF] mb-4 font-heading">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading mb-3 text-charcoal dark:text-sandstone">{item.title}</h3>
                <p className="text-sm text-brown-grey dark:text-text-dark-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Business Benefits
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="scroll-animate bg-taupe/20 dark:bg-charcoal-light p-6 rounded-xl text-center hover:shadow-xl transition-shadow duration-300">
                <span className="material-symbols-outlined text-5xl mb-4 block text-[#2F4538] dark:text-[#C9D8BF]">
                  {benefit.icon}
                </span>
                <h3 className="font-heading mb-2 text-lg text-charcoal dark:text-sandstone">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-brown-grey dark:text-text-dark-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              SAP Technology Expertise
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Comprehensive knowledge across the SAP ecosystem
            </p>
          </div>
          <div className="scroll-animate flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-6 py-3 bg-white dark:bg-charcoal text-charcoal dark:text-sandstone rounded-full text-sm font-medium hover:bg-[#2F4538] hover:text-white dark:hover:bg-[#C9D8BF] dark:hover:text-[#2F3B35] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Industries We Serve
            </h2>
          </div>
          <div className="scroll-animate grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-taupe/20 dark:bg-charcoal-light p-6 rounded-xl text-center hover:shadow-xl transition-shadow duration-300">
                <span className="material-symbols-outlined text-4xl mb-3 block text-[#2F4538] dark:text-[#C9D8BF]">
                  {industry.icon}
                </span>
                <h3 className="text-sm font-heading text-charcoal dark:text-sandstone">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#2F4538] text-white">
        <div className="container-custom px-4 md:px-6 text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-6">
            Ready to Transform with SAP?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your SAP requirements and create a roadmap for digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-[#2F4538] text-xs uppercase tracking-widest-xl font-bold px-8 md:px-12 py-3.5 md:py-4 hover:bg-[#E8DDD0] transition-all">
                Consult Our Experts
              </button>
            </Link>
            <Link to="/development">
              <button className="bg-transparent border-2 border-white text-white text-xs uppercase tracking-widest-xl font-bold px-8 md:px-12 py-3.5 md:py-4 hover:bg-white/10 transition-all">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SAPDevelopmentPage;
