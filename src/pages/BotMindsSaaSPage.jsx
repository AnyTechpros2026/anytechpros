import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BotMindsSaaSPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [currency, setCurrency] = useState('INR'); // INR or USD

  useEffect(() => {
    gsap.fromTo('.hero-heading', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 });
    gsap.utils.toArray('.scroll-animate').forEach((element) => {
      gsap.fromTo(element, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 85%', toggleActions: 'play none none none', once: true }
      });
    });
  }, []);

  const whyChooseFeatures = [
    { 
      icon: 'tune', 
      title: 'Customizable Models', 
      description: 'BOTMINDS offers customizable models that can be tailored to specific business needs, allowing seamless integration with existing workflows and enhanced automation for various industries.',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    { 
      icon: 'notifications_active', 
      title: 'Smart Alerts & Notifications', 
      description: 'BOTMINDS features smart alerts and notifications that keep you informed in real-time, ensuring timely actions and preventing potential issues from escalating.',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    { 
      icon: 'speed', 
      title: 'Competitive Advantage', 
      description: 'BOTMINDS gives businesses the tools they need to stay ahead of the competition by optimizing operations and providing actionable insights.',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
    { 
      icon: 'api', 
      title: 'Seamless Integration', 
      description: 'BOTMINDS offers seamless integration with existing tools and platforms, ensuring smooth data flow and enhanced workflow across your entire tech ecosystem.',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    }
  ];

  const automationFeatures = [
    { 
      icon: 'sync', 
      title: 'Automation & Sync', 
      description: 'BOTMINDS enables automation & sync across multiple systems, ensuring real-time updates, smooth data transfer, and efficient task execution without manual intervention.',
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    { 
      icon: 'settings_suggest', 
      title: 'Completely Flexible', 
      description: 'BOTMINDS fits into any IT environment- ERP, CRM, cloud, or custom systems. No disruptions. No complexity. Just seamless, AI-powered automation. Deploy Anywhere. Automate Everything.',
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    { 
      icon: 'psychology', 
      title: 'AI-Powered Insights', 
      description: 'BOTMINDS delivers AI-powered insights, analyzing data to provide actionable recommendations that drive smarter decision-making and optimize business performance.',
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    }
  ];


  const strategicBenefits = [
    {
      icon: 'timer',
      title: 'Faster Turnaround Times',
      description: 'Automation speeds up processes, resulting in faster service delivery and increased customer satisfaction.',
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    }
  ];

  // Currency conversion function (1 USD = 83 INR approximately)
  const convertPrice = (inrPrice) => {
    const numPrice = parseInt(inrPrice.replace('₹', ''));
    if (currency === 'USD') {
      return `$${Math.round(numPrice / 83)}`;
    }
    return inrPrice;
  };

  const plans = [
    {
      name: 'Standard',
      price: '₹250',
      period: '/Month',
      tagline: 'Efficiency Unlocked – Your Smart Start with Botminds.',
      features: [
        'Basic AI Automation',
        'Email Support',
        'Up to 50 Systems',
        'Monthly Reports'
      ],
      color: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      name: 'Premium',
      price: '₹550',
      period: '/Month',
      tagline: 'Power Meets Precision – Advanced Automation with Botminds.',
      popular: true,
      features: [
        'Advanced AI Features',
        'Priority Support',
        'Up to 200 Systems',
        'Real-time Analytics',
        'Custom Integrations'
      ],
      color: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      name: 'Enterprise',
      price: '₹750',
      period: '/Month',
      tagline: 'Limitless Intelligence – Scalable AI for Enterprise Excellence.',
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Unlimited Systems',
        'Advanced Analytics',
        'Custom Development',
        'SLA Guarantee'
      ],
      color: 'bg-green-50 dark:bg-green-900/20'
    }
  ];

  const testimonials = [
    { 
      name: 'Loya Potmen', 
      title: 'CFO – Potman Industries', 
      quote: 'A True AI Game-Changer for IT Automation. Botmind drastically reduced our IT incident rates while improving user self-service. Its AI-driven issue resolution works like magic—minimal manual intervention needed!' 
    },
    { 
      name: 'Alex Cari', 
      title: 'Founder – Alex Technology', 
      quote: 'One of the best document automation tools out there! The UI is extremely friendly and easy to set up and use. Document processing is swift, and it\'s cut down a lot of my legal inefficiencies.' 
    },
    { 
      name: 'Mat Brandson', 
      title: 'Founder – Mat Technology', 
      quote: 'Good way to start automation. Easy to understand, and easy to incorporate details to align in our process.' 
    },
    { 
      name: 'Lexi Lorem', 
      title: 'COO – Lexy Technology', 
      quote: 'Next-Level Voice Automation. BOTVoice is incredibly intuitive. It\'s far beyond standard voice assistants. We now execute key system tasks with just a command. Huge productivity boost for our team!' 
    },
    { 
      name: 'Robert K', 
      title: 'Founder – RK Technology', 
      quote: 'Secure, Scalable, and Cost-Saving. Botminds helped us save lakhs monthly by automating recurring IT issues. The enterprise-grade security and GDPR compliance make it trustworthy for sensitive operations.' 
    },
    { 
      name: 'Darci L', 
      title: 'Founder – DL Technology', 
      quote: 'Fantastic ROI with Real-Time Impact. We saw a 60% increase in productivity and a 70% reduction in IT call volumes within the first month. That\'s not just automation, that\'s transformation.' 
    }
  ];

  const faqItems = [
    {
      q: 'What is BOTMINDS and how does it work?',
      a: 'BOTMINDS is an AI-powered automation platform designed to simplify IT operations. It integrates seamlessly with your existing systems and resolves issues in real-time. From ticketing to compliance, everything is automated - intelligently and securely.'
    },
    {
      q: 'Is BOTMINDS compatible with our current tools and platform?',
      a: 'Yes! BOTMINDS offers seamless integration with existing tools and platforms through APIs, webhooks, and pre-built connectors, ensuring smooth data flow and enhanced workflow across your entire tech ecosystem.'
    },
    {
      q: 'How secure is BOTMINDS?',
      a: 'BOTMINDS features enterprise-grade security with GDPR compliance, making it trustworthy for sensitive operations. All data is encrypted and follows industry-standard security protocols.'
    },
    {
      q: 'Can BOTMINDS be deployed on-premise or in private cloud?',
      a: 'Yes, BOTMINDS can be deployed on-premise, in private cloud, or in public cloud environments based on your organization\'s requirements and security policies.'
    },
    {
      q: 'Which industry can benefit from BOTMINDS?',
      a: 'BOTMINDS is designed for various industries including IT services, healthcare, finance, retail, manufacturing, education, and government sectors. Any organization looking to automate IT operations can benefit.'
    },
    {
      q: 'How quickly can BOTMINDS be implemented?',
      a: 'Implementation typically takes 2-6 weeks depending on complexity and customization requirements. Our expert team provides dedicated support throughout the process.'
    },
    {
      q: 'Does BOTMINDS offer multilingual or voice-enabled support?',
      a: 'Yes, BOTMINDS includes BOTVoice capabilities that enable voice-enabled commands and support, allowing users to execute key system tasks through intuitive voice interactions.'
    }
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-heading font-light text-white mb-6 leading-tight tracking-wide">
              BOTMINDS
            </h1>
            <h2 className="hero-heading text-3xl md:text-4xl lg:text-5xl font-heading font-light text-white mb-8 leading-tight">
              Automate. Optimize. Transform.
            </h2>
            <p className="hero-heading text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Reduce IT Burden | Enhance End-User Experience | Boost Productivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
                <button className="bg-white text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl">
                  Buy Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white text-white text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </Link>
            </div>
            <p className="hero-heading text-white/80 text-sm md:text-base">
              Join 2,000+ Happy Users – Start Building Today!
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose BOTMINDS - Introduction */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-6">
              WHY CHOOSE BOTMINDS
            </h2>
            <p className="text-lg md:text-xl text-brown-grey dark:text-text-dark-muted leading-relaxed mb-6">
              AI is no longer the future - it's the present. BOTMINDS automates tasks and delivers AI-driven insights to boost efficiency, cut costs, and enable smarter decisions.
            </p>
            <p className="text-base md:text-lg text-brown-grey dark:text-text-dark-muted leading-relaxed mb-4">
              BOTMINDS leverages artificial intelligence to resolve IT issues, automate workflows, and drive compliance in real time.
            </p>
            <p className="text-base md:text-lg text-brown-grey dark:text-text-dark-muted leading-relaxed mb-4">
              From auto-ticketing to voice-enabled commands, it works 24×7 without human intervention. It learns, adapts, and scales with your business or institution.
            </p>
            <p className="text-base md:text-lg text-brown-grey dark:text-text-dark-muted font-semibold leading-relaxed">
              The result? Faster resolutions, reduced costs, and smarter operations across every sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className={`scroll-animate ${feature.bgColor} ${feature.textColor} p-8 hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-heading mb-3">{feature.title}</h3>
                <p className="leading-relaxed opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation Section */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-6">
              AI Automation That Works While You Don't
            </h2>
            <p className="text-lg md:text-xl text-brown-grey dark:text-text-dark-muted leading-relaxed">
              From ticketing to compliance, BOTMINDS runs your IT behind the scenes - 24×7. Experience the Power of Effortless Automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className={`scroll-animate ${feature.bgColor} ${feature.textColor} p-8 hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-heading mb-3">{feature.title}</h3>
                <p className="leading-relaxed opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-animate">
            <h3 className="text-2xl md:text-3xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Play Into Anything. Sync Everything. Automate Instantly.
            </h3>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted">
              BOTMINDS integrates across your digital ecosystem - securely and intelligently.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Strategies & Tools Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-6">
              Smart Strategies Tools to Boost Your Business
            </h2>
            <p className="text-lg md:text-xl text-brown-grey dark:text-text-dark-muted leading-relaxed">
              BOTMINDS is an AI-powered automation platform designed to simplify IT operations. It integrates seamlessly with your existing systems and resolves issues in real-time. From ticketing to compliance, everything is automated - intelligently and securely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 scroll-animate">
            <div className="bg-taupe/20 dark:bg-charcoal-light p-8 text-center hover:shadow-card transition-all duration-300">
              <div className="mb-4">
                <span className="material-symbols-outlined text-6xl text-charcoal dark:text-sandstone">dashboard</span>
              </div>
              <h3 className="text-xl font-heading text-charcoal dark:text-sandstone">BOTMINDS Dashboard</h3>
            </div>
            <div className="bg-taupe/20 dark:bg-charcoal-light p-8 text-center hover:shadow-card transition-all duration-300">
              <div className="mb-4">
                <span className="material-symbols-outlined text-6xl text-charcoal dark:text-sandstone">analytics</span>
              </div>
              <h3 className="text-xl font-heading text-charcoal dark:text-sandstone">BOTMINDS Optimization</h3>
            </div>
            <div className="bg-taupe/20 dark:bg-charcoal-light p-8 text-center hover:shadow-card transition-all duration-300">
              <div className="mb-4">
                <span className="material-symbols-outlined text-6xl text-charcoal dark:text-sandstone">power</span>
              </div>
              <h3 className="text-xl font-heading text-charcoal dark:text-sandstone">BOTMINDS BOTrigger</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Cutting-Edge Solutions Section */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-6">
              Cutting-Edge Solutions for Scaling Your Business
            </h2>
            <p className="text-lg md:text-xl text-brown-grey dark:text-text-dark-muted leading-relaxed mb-8">
              BOTMINDS delivers next-gen automation powered by AI - built to grow with you. From startups to large enterprises, it integrates, automates, and optimizes your entire IT ecosystem. Scale smarter, reduce costs, and unlock peak performance with zero friction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="scroll-animate bg-white dark:bg-charcoal p-8">
              <div className="flex items-start gap-4 mb-6">
                <span className="material-symbols-outlined text-5xl text-charcoal dark:text-sandstone flex-shrink-0">business_center</span>
                <div>
                  <h3 className="text-2xl font-heading text-charcoal dark:text-sandstone mb-3">Business Strategy</h3>
                  <p className="text-brown-grey dark:text-text-dark-muted leading-relaxed mb-4">
                    BOTMINDS aligns technology with your business goals - automating what slows you down and scaling what drives results. Our AI-powered platform enables cost optimization, operational efficiency, and faster decision-making.
                  </p>
                  <p className="text-brown-grey dark:text-text-dark-muted leading-relaxed font-semibold">
                    It's not just a tech tool - it's a strategic asset for modern, growth-ready organizations.
                  </p>
                </div>
              </div>
            </div>

            {strategicBenefits.map((benefit, index) => (
              <div key={index} className={`scroll-animate ${benefit.bgColor} ${benefit.textColor} p-8 hover:opacity-90 transition-opacity duration-300`}>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-5xl flex-shrink-0">{benefit.icon}</span>
                  <div>
                    <h3 className="text-2xl font-heading mb-3">{benefit.title}</h3>
                    <p className="leading-relaxed opacity-90">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Model Banner */}
      <section className="py-16 md:py-24 bg-charcoal dark:bg-charcoal-light text-white">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-4">
              SAAS BASED MODEL
            </h2>
            <p className="text-xl md:text-2xl font-light mb-8 tracking-wide">
              MONTHLY/ANNUALLY SUBSCRIPTION
            </p>
            <div className="bg-white/10 inline-block px-8 py-6 mb-8">
              <p className="text-4xl md:text-5xl font-heading font-light mb-4">JUST {convertPrice('₹250')}/MONTH/SYSTEM</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <p className="text-lg">Reduce IT Burden</p>
              </div>
              <div>
                <p className="text-lg">Enhance End-User Experience</p>
              </div>
              <div>
                <p className="text-lg">Boost Productivity</p>
              </div>
              <div>
                <p className="text-lg">Automate. Optimize. Transform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Pricing & Plans
            </h2>
            <p className="text-lg md:text-xl text-brown-grey dark:text-text-dark-muted mb-2">
              Simple Plans, Powerful Value
            </p>
            <p className="text-base text-brown-grey dark:text-text-dark-muted mb-6">
              Pick the plan that works best for your goals — simple, clear, and flexible.
            </p>
            
            {/* Currency Toggle */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="text-sm font-medium text-text-muted dark:text-text-dark-muted">Currency:</span>
              <div className="inline-flex bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    currency === 'USD'
                      ? 'bg-[#2F3B35] text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  $ USD
                </button>
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    currency === 'INR'
                      ? 'bg-[#2F3B35] text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  ₹ INR
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {plans.map((plan, index) => (
              <div key={index} className={`scroll-animate p-8 rounded-lg ${plan.color} ${plan.popular ? 'ring-2 ring-charcoal dark:ring-sandstone transform scale-105' : ''} hover:shadow-card transition-all duration-300`}>
                {plan.popular && (
                  <div className="mb-4 text-center">
                    <span className="bg-charcoal dark:bg-sandstone text-white dark:text-charcoal text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Most Popular</span>
                  </div>
                )}
                <h3 className="text-3xl font-heading text-charcoal dark:text-sandstone mb-2 text-center">{plan.name}</h3>
                <div className="text-center mb-4">
                  <span className="text-5xl font-heading text-charcoal dark:text-sandstone">{convertPrice(plan.price)}</span>
                  <span className="text-brown-grey dark:text-text-dark-muted text-lg">{plan.period}</span>
                </div>
                <p className="text-sm text-brown-grey dark:text-text-dark-muted text-center mb-6 italic">
                  {plan.tagline}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-brown-grey dark:text-text-dark-muted">
                      <span className="material-symbols-outlined text-lg flex-shrink-0 mt-0.5 text-charcoal dark:text-sandstone">check_circle</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block">
                  <button className="w-full bg-charcoal dark:bg-sandstone text-white dark:text-charcoal text-sm uppercase tracking-widest font-bold py-4 hover:opacity-90 transition-all duration-300">
                    Get Started
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center scroll-animate">
            <p className="text-sm text-brown-grey dark:text-text-dark-muted italic">
              *To purchase any of the available plans, a minimum order of 25 licenses is required
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Testimonials & Reviews
            </h2>
            <p className="text-lg md:text-xl text-brown-grey dark:text-text-dark-muted">
              Join Thousands of Satisfied Customers!
            </p>
            <p className="text-base text-brown-grey dark:text-text-dark-muted mt-2">
              See why thousands of businesses trust us! Discover how our SaaS solutions have helped clients streamline operations and achieve success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-8 hover:shadow-card transition-all duration-300">
                <div className="mb-4">
                  <span className="material-symbols-outlined text-4xl text-charcoal dark:text-sandstone">format_quote</span>
                </div>
                <p className="text-brown-grey dark:text-text-dark-muted mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-taupe dark:border-charcoal-light pt-4">
                  <p className="font-heading text-lg text-charcoal dark:text-sandstone mb-1">{testimonial.name}</p>
                  <p className="text-sm text-brown-grey dark:text-text-dark-muted">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              FAQ
            </h2>
            <p className="text-lg md:text-xl text-brown-grey dark:text-text-dark-muted">
              Got Questions? We've Got Answers.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="scroll-animate bg-taupe/20 dark:bg-charcoal-light">
                <button 
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-taupe/30 dark:hover:bg-charcoal transition-all duration-300"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="material-symbols-outlined flex-shrink-0 text-charcoal dark:text-sandstone">help</span>
                    <h3 className="font-heading text-lg text-charcoal dark:text-sandstone pr-4">{item.q}</h3>
                  </div>
                  <span className="material-symbols-outlined flex-shrink-0 text-charcoal dark:text-sandstone transition-transform duration-300" style={{ transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    expand_more
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-brown-grey dark:text-text-dark-muted leading-relaxed ml-10">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal dark:bg-charcoal-light text-white">
        <div className="container-custom px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-6">
              Transform Your Workflow Today – Book Free Demo!
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/contact">
                <button className="bg-white text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl">
                  Schedule Demo
                </button>
              </Link>
              <a href="/BotMinds.pdf" download>
                <button className="border-2 border-white text-white text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/10 transition-all duration-300">
                  Download Brochure
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BotMindsSaaSPage;
