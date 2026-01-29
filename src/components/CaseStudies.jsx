import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'AI & AUTOMATION', 'SAAS', 'CLOUD', 'GOVERNMENT'];

  const caseStudies = [
    {
      id: 1,
      title: 'Optimizing Global Supply Chain with Neural Network Logistics',
      category: 'AI & AUTOMATION',
      tag: 'AI AUTOMATION',
      description: 'Build intelligent, data-driven supply chain systems that adapt in real-time to market conditions.',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      date: '12 October 2025',
      bgColor: 'bg-white',
    },
    {
      id: 2,
      title: 'Next-generation FinTech Infrastructure for Generational Wealth',
      category: 'SAAS',
      tag: 'SAAS ARCHITECTURE',
      description: 'Platforms are built to help in promoting economic viability and growth for the underserved.',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      date: '08 September 2025',
      bgColor: 'bg-white',
    },
    {
      id: 3,
      title: 'Resilient Multi-Cloud Environment for Federal Oversight',
      category: 'CLOUD',
      tag: 'CLOUD STRATEGY',
      description: 'Modern infrastructure built for secure and robust Federal operations.',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      date: '02 September 2025',
      bgColor: 'bg-card-sage',
    },
    {
      id: 4,
      title: 'Modernizing Public Health Surveillance with Predictive Analytics',
      category: 'GOVERNMENT',
      tag: 'GOVERNMENT SOLUTIONS',
      description: '98% efficiency increase for National Health surveillance workflows.',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      date: '08 June 2025',
      bgColor: 'bg-white',
    },
    {
      id: 5,
      title: 'Natural Partner',
      category: 'AI & AUTOMATION',
      tag: 'PARTNER',
      description: 'Natural & manual Safe work',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      date: '12 October 2025',
      bgColor: 'bg-card-sage',
    },
    {
      id: 6,
      title: 'Harnessing Big Data for Real-Time Retail Forecasting',
      category: 'CLOUD',
      tag: 'PARTNER CASE STUDIES',
      description: '400% increase in segment of same-store sales performance.',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      date: '02 June 2024',
      bgColor: 'bg-card-sage',
    },
  ];

  const filteredStudies = activeFilter === 'ALL' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter || study.tag.includes(activeFilter));

  return (
    <section className="section bg-background-light dark:bg-background-dark py-16" id="case-studies">
      <div className="container-custom max-w-7xl mx-auto px-6">
        <ScrollAnimation>
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-3">INSIGHTS / CASE STUDIES</p>
            <h2 className="text-5xl md:text-6xl font-serif mb-4">
              Forging Digital <em className="italic font-serif">Excellence</em>
            </h2>
          </div>
        </ScrollAnimation>

        {/* Filter Buttons */}
        <ScrollAnimation>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-text-primary text-white'
                    : 'bg-white text-text-primary hover:bg-section-light'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <ScrollAnimation key={study.id}>
              <div className={`${study.bgColor} p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer h-full flex flex-col`}>
                {/* Icon */}
                <div className="mb-6">{study.icon}</div>
                
                {/* Category Tag */}
                <p className="text-[10px] tracking-[0.25em] uppercase text-text-muted mb-4">
                  {study.tag}
                </p>
                
                {/* Title */}
                <h3 className="text-xl font-serif mb-4 text-text-primary leading-tight flex-grow">
                  {study.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-text-muted mb-4 leading-relaxed">
                  {study.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-border-light">
                  <span className="text-xs text-text-muted">{study.date}</span>
                  <button className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-text-primary group-hover:gap-3 transition-all">
                    READ CASE STUDY
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
