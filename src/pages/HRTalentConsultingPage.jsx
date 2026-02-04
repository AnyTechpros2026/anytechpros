import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HRTalentConsultingPage = () => {
  useEffect(() => {
    // Faster hero animation
    gsap.fromTo('.hero-heading', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
    );
    
    // Optimized scroll animations
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


  const services = [
    { icon: 'person_search', title: 'Talent Acquisition', description: 'Strategic recruitment solutions to identify, attract, and hire top talent.', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' },
    { icon: 'payments', title: 'Payroll Management', description: 'Complete payroll processing with compliance, tax management, and statutory reporting.', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]' },
    { icon: 'trending_up', title: 'Performance Management System', description: 'Implement systems for effective performance tracking, appraisals, and employee development.', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]' }
  ];

  const benefits = [
    { icon: 'verified', title: 'Compliance Assurance', description: 'Ensure full adherence to labor laws, statutory requirements, and HR best practices.', bgColor: 'bg-[#A8B5A1]', textColor: 'text-[#2F3B35]' },
    { icon: 'people', title: 'Talent Retention', description: 'Build strategies to engage, develop, and retain your most valuable employees.', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' },
    { icon: 'speed', title: 'Efficiency Gains', description: 'Streamline HR processes and reduce administrative burden on your organization.', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]' },
    { icon: 'sentiment_very_satisfied', title: 'Workplace Culture', description: 'Foster a positive, inclusive workplace culture that drives employee satisfaction.', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]' }
  ];

  const jobRoles = [
    { role: 'HR Manager', desc: 'Overall HR strategy and operations management' },
    { role: 'Recruitment Specialist', desc: 'Talent sourcing and candidate selection' },
    { role: 'Payroll Administrator', desc: 'Salary processing and compliance management' },
    { role: 'Training Officer', desc: 'Employee training and development programs' },
    { role: 'Employee Relations Manager', desc: 'Employee engagement and relations' },
    { role: 'HR Analyst', desc: 'HR analytics and workforce planning' }
  ];

  const compliances = [
    { icon: 'gavel', title: 'Statutory Compliance', description: 'Full compliance with labor laws, tax regulations, and statutory requirements.' },
    { icon: 'description', title: 'HR Standard Operating Procedures', description: 'Documented policies and procedures for consistent HR service delivery.' },
    { icon: 'verified_user', title: 'Employment Law Compliance', description: 'Adherence to employment contracts, policies, and legal requirements.' },
    { icon: 'security', title: 'Data Protection & Privacy', description: 'Secure employee data management in compliance with privacy regulations.' }
  ];

  const expertise = [
    'Recruitment & Selection', 'Talent Management', 'Performance Appraisals',
    'Learning & Development', 'Compensation & Benefits', 'Employee Relations',
    'Labor Law Compliance', 'Payroll Processing', 'HR Policy Development', 'Workforce Planning'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{ backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Human Resources Consulting
            </h1>
            <p className="hero-heading text-lg md:text-xl text-white/90 leading-relaxed">
              Transform your HR capabilities with strategic consulting that maximizes talent potential, ensures compliance, and builds strong workplace cultures.
            </p>
          </div>
        </div>
      </section>

      {/* HR Services */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our HR Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`scroll-animate ${service.bgColor} ${service.textColor} p-8 rounded-xl hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{service.icon}</span>
                <h3 className="text-2xl font-heading mb-3">{service.title}</h3>
                <p className="leading-relaxed opacity-90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Why Choose HR Consulting?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className={`scroll-animate ${benefit.bgColor} ${benefit.textColor} p-6 rounded-xl text-center hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{benefit.icon}</span>
                <h3 className="font-heading mb-2 text-lg">{benefit.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Roles We Handle */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Key HR Roles & Functions
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Specialized support across all critical HR functions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobRoles.map((item, index) => (
              <div key={index} className={`scroll-animate ${item.bgColor} ${item.textColor} p-6 rounded-xl border-2 border-[#2F3B35]/10 dark:border-sandstone/20 hover:opacity-90 transition-opacity duration-300`}>
                <h3 className="text-xl font-heading mb-2">{item.role}</h3>
                <p className="opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              HR Compliance & Standards
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliances.map((comp, index) => (
              <div key={index} className={`scroll-animate ${comp.bgColor} ${comp.textColor} p-6 rounded-xl border-2 border-[#2F3B35]/10 dark:border-sandstone/20 hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-4xl mb-4 block">{comp.icon}</span>
                <h3 className="font-heading mb-2">{comp.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{comp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our HR Expertise
            </h2>
          </div>
          <div className="bg-taupe/20 dark:bg-charcoal-light p-8 md:p-12 scroll-animate border-2 border-[#2F3B35]/10 dark:border-sandstone/20 rounded-xl">
            <div className="grid md:grid-cols-2 gap-4">
              {expertise.map((exp, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-charcoal dark:text-sandstone flex-shrink-0 mt-1">check_circle</span>
                  <span className="text-brown-grey dark:text-text-dark-muted">{exp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our Implementation Approach
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Assessment', desc: 'Evaluate current HR processes and identify improvement areas' },
              { step: '02', title: 'Strategy Development', desc: 'Design customized HR strategies aligned with business goals' },
              { step: '03', title: 'Implementation', desc: 'Execute programs with dedicated support and training' },
              { step: '04', title: 'Monitoring & Support', desc: 'Continuous monitoring, optimization, and ongoing HR support' }
            ].map((item, index) => (
              <div key={index} className="scroll-animate text-center">
                <div className="bg-white dark:bg-charcoal p-6 mb-4 border-2 border-[#2F3B35]/10 dark:border-sandstone/20 rounded-xl">
                  <div className="text-4xl font-heading text-charcoal dark:text-sandstone mb-2">{item.step}</div>
                  <h3 className="font-heading text-charcoal dark:text-sandstone">{item.title}</h3>
                </div>
                <p className="text-sm text-brown-grey dark:text-text-dark-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal dark:bg-charcoal-light text-white">
        <div className="container-custom px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light mb-6">
              Build a High-Performing HR Function
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Let our HR experts help you create strategic talent management and build a thriving workplace culture.
            </p>
            <Link to="/contact">
              <button className="bg-white text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl">
                Schedule HR Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRTalentConsultingPage;
