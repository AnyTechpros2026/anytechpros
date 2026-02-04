import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';

const SalesGrowthConsultingPage = () => {
  const services = [
    {
      title: 'Sales Strategy Development',
      description: 'Comprehensive sales strategies aligned with your business objectives and market opportunities.',
      features: [
        'Market Analysis & Segmentation',
        'Sales Channel Optimization',
        'Competitive Positioning',
        'Revenue Growth Models'
      ],
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'Lead Generation & Conversion',
      description: 'Advanced lead generation strategies and conversion optimization techniques.',
      features: [
        'Inbound Marketing Strategies',
        'Lead Scoring & Qualification',
        'Conversion Funnel Optimization',
        'Sales Automation Implementation'
      ],
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'Sales Team Performance',
      description: 'Enhance your sales team effectiveness through training and performance optimization.',
      features: [
        'Sales Training Programs',
        'Performance Metrics & KPIs',
        'Sales Process Optimization',
        'Team Coaching & Development'
      ],
      bgColor: 'bg-[#2F4538]',
      textColor: 'text-[#F7F3ED]'
    },
    {
      title: 'Market Expansion',
      description: 'Strategic guidance for entering new markets and scaling your business operations.',
      features: [
        'Market Entry Strategies',
        'Geographic Expansion Planning',
        'Partnership Development',
        'Channel Partner Programs'
      ],
      bgColor: 'bg-[#A8B5A1]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'Revenue Analytics',
      description: 'Data-driven insights to optimize revenue generation and forecast growth.',
      features: [
        'Revenue Intelligence',
        'Sales Forecasting Models',
        'Pipeline Analytics',
        'Performance Dashboards'
      ],
      bgColor: 'bg-[#E8DDD0]',
      textColor: 'text-[#2F3B35]'
    },
    {
      title: 'Customer Success & Retention',
      description: 'Build long-term customer relationships and maximize lifetime value.',
      features: [
        'Customer Success Programs',
        'Retention Strategies',
        'Upsell & Cross-sell',
        'Account Management'
      ],
      bgColor: 'bg-[#C9D8BF]',
      textColor: 'text-[#2F3B35]'
    }
  ];

  const benefits = [
    { icon: 'trending_up', title: 'Accelerated Revenue Growth', description: 'Implement proven strategies to increase sales velocity and revenue', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' },
    { icon: 'track_changes', title: 'Improved Conversion Rates', description: 'Optimize your sales funnel for higher conversion at every stage', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]' },
    { icon: 'insights', title: 'Data-Driven Decisions', description: 'Leverage analytics for strategic sales planning and forecasting', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]' },
    { icon: 'rocket_launch', title: 'Scalable Growth Systems', description: 'Build repeatable processes that scale with your business', bgColor: 'bg-[#A8B5A1]', textColor: 'text-[#2F3B35]' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
                Sales & Growth Consulting
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Transform your sales organization with strategic consulting that drives measurable revenue growth and sustainable business expansion.
              </p>
              <Link to="/contact">
                <button className="bg-white text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl">
                  Accelerate Your Growth
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">WHAT WE OFFER</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our Sales & Growth Services
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Comprehensive consulting services to accelerate your revenue and scale your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index}>
                <div className={`${service.bgColor} ${service.textColor} p-6 md:p-8 rounded-xl hover:opacity-90 transition-opacity duration-300 h-full flex flex-col`}>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="mb-6 opacity-90">
                    {service.description}
                  </p>
                  <ul className="space-y-3 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="material-symbols-outlined text-lg text-black">check</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">WHY CHOOSE US</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Why Choose Our Sales Consulting
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Partner with experts who understand what it takes to drive sustainable growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={index}>
                <div className={`${benefit.bgColor} ${benefit.textColor} p-6 md:p-8 rounded-xl text-center hover:opacity-90 transition-opacity duration-300 h-full flex flex-col`}>
                  <span className="material-symbols-outlined text-6xl text-black mb-4 block">{benefit.icon}</span>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="opacity-90 flex-grow">
                    {benefit.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12 md:mb-16">
                <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">OUR PROCESS</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
                  Our Proven Approach
                </h2>
                <p className="text-lg text-brown-grey dark:text-text-dark-muted">
                  A systematic methodology to transform your sales organization
                </p>
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Discovery & Assessment',
                  description: 'In-depth analysis of your current sales processes, team capabilities, and market position to identify opportunities for growth.',
                  bgColor: 'bg-[#E8DDD0]',
                  textColor: 'text-[#2F3B35]'
                },
                {
                  step: '02',
                  title: 'Strategy Development',
                  description: 'Create customized sales strategies aligned with your business goals, market dynamics, and competitive landscape.',
                  bgColor: 'bg-[#C9D8BF]',
                  textColor: 'text-[#2F3B35]'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Execute strategies with your team, providing hands-on support, training, and process optimization.',
                  bgColor: 'bg-[#2F4538]',
                  textColor: 'text-[#F7F3ED]'
                },
                {
                  step: '04',
                  title: 'Optimization & Scale',
                  description: 'Continuous monitoring, refinement, and scaling of successful tactics to maximize revenue impact.',
                  bgColor: 'bg-[#A8B5A1]',
                  textColor: 'text-[#2F3B35]'
                }
              ].map((phase, index) => (
                <ScrollAnimation key={index}>
                  <div className={`${phase.bgColor} ${phase.textColor} p-6 md:p-8 rounded-xl flex gap-6 items-start hover:opacity-90 transition-opacity duration-300`}>
                    <div className="text-4xl font-heading font-light flex-shrink-0">
                      {phase.step}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-semibold mb-2">
                        {phase.title}
                      </h3>
                      <p className="opacity-90">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal dark:bg-charcoal-light text-white">
        <div className="container-custom px-4 md:px-6 text-center">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-6">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Let's discuss how our sales and growth consulting can help you achieve your revenue goals.
              </p>
              <Link to="/contact">
                <button className="bg-white text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default SalesGrowthConsultingPage;
