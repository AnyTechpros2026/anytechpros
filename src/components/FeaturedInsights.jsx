import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const FeaturedInsights = () => {
  const insights = [
    {
      id: 1,
      title: 'Optimizing Global Supply Chain Logistics',
      description: 'We provide end to end global supply chain services and seamless logistics',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop',
      bgColor: 'bg-stone-200 dark:bg-stone-800',
      type: 'image',
      link: '/case-studies',
      date: '12 October 2025',
      readMore: 'READ MORE'
    },
    {
      id: 2,
      title: 'CEO Generation: Hybrid Management for Startup Growth',
      description: 'Transforming leadership and business models for sustainable wealth creation',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
      bgColor: 'bg-emerald-800 dark:bg-emerald-900',
      textColor: 'text-white dark:text-white',
      descColor: 'text-emerald-100 dark:text-emerald-100',
      type: 'image',
      link: '/case-studies',
      date: '08 September 2025',
      readMore: 'READ MORE'
    },
    {
      id: 3,
      title: 'Building Multi-Brand Tech Forward for Global Wholesale',
      description: 'Building modern infrastructure for seamless digital operations',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop',
      bgColor: 'bg-lime-200 dark:bg-lime-900/30',
      type: 'image',
      link: '/case-studies',
      date: '02 September 2025',
      readMore: 'READ MORE'
    },
    {
      id: 4,
      title: 'Human Partner',
      description: 'Collaborative solutions creating mutual growth and transformative value',
      icon: 'groups',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      type: 'icon',
      link: '/case-studies',
      date: '12 October 2025',
      readMore: 'READ MORE'
    },
    {
      id: 5,
      title: 'Modernizing Public Health Surveillance with Predictive Analysis',
      description: 'Intelligent systems improving health surveillance and operational efficiency',
      icon: 'monitoring',
      bgColor: 'bg-teal-200 dark:bg-teal-900/30',
      type: 'icon',
      link: '/case-studies',
      date: '08 June 2025',
      readMore: 'READ MORE'
    },
    {
      id: 6,
      title: 'Harnessing Big Data for Real-Time Retail Forecasting',
      description: '400% increase in segment of same store sales performance',
      icon: 'chat_bubble_outline',
      bgColor: 'bg-emerald-200 dark:bg-emerald-900/30',
      type: 'icon',
      link: '/case-studies',
      date: '02 June 2024',
      readMore: 'READ MORE'
    },
  ];

  return (
    <section className="section bg-background-light dark:bg-background-dark py-16">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="mb-16">
            <p className="text-xs uppercase tracking-widest font-bold text-text-muted mb-4">Featured Insights</p>
            <h2 className="heading-lg mb-6">Success Stories & Case Studies</h2>
            <p className="text-body max-w-2xl">
              Discover how we've helped industry leaders transform their business with innovative solutions and strategic expertise.
            </p>
          </div>
        </ScrollAnimation>

        {/* Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <ScrollAnimation key={insight.id}>
              <Link to={insight.link}>
                <div className={`${insight.bgColor} overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col group cursor-pointer`}>
                  
                  {/* Image or Icon Section */}
                  {insight.type === 'image' ? (
                    <div className="relative h-52 overflow-hidden bg-gray-200">
                      <img 
                        src={insight.image} 
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="p-8 pt-12">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${insight.textColor ? 'bg-white/20' : 'bg-white/50'}`}>
                        <span className={`material-symbols-outlined text-4xl ${insight.textColor || 'text-charcoal'}`}>
                          {insight.icon}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div className={`${insight.type === 'image' ? 'p-8' : 'px-8 pb-8'} flex flex-col flex-grow`}>
                    {/* Date */}
                    <p className={`text-[10px] uppercase tracking-widest mb-4 ${insight.descColor || 'text-brown-grey dark:text-text-dark-muted'}`}>
                      {insight.date}
                    </p>

                    <h3 className={`text-xl font-heading font-normal mb-4 leading-tight ${insight.textColor || 'text-charcoal dark:text-sandstone'}`}>
                      {insight.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-8 flex-grow font-light ${insight.descColor || 'text-brown-grey dark:text-text-dark-muted'}`}>
                      {insight.description}
                    </p>

                    {/* Read More CTA */}
                    <div className={`inline-flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold transition-all group-hover:translate-x-1 ${insight.textColor || 'text-charcoal dark:text-sandstone'}`}>
                      {insight.readMore}
                      <span className="material-symbols-outlined text-base">arrow_right_alt</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;
