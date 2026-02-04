import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import LogoCarousel from '../components/LogoCarousel';

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-charcoal dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {/* Years of Experience */}
            <div className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white/80 font-light mb-2 block">workspace_premium</span>
              <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1">7+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/70 font-bold">Years of Experience</span>
            </div>

            {/* Consulting Assignments */}
            <div className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white/80 font-light mb-2 block">business_center</span>
              <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1">100+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/70 font-bold">Consulting </span>
            </div>

            {/* Software Solutions */}
            <div className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white/80 font-light mb-2 block">code</span>
              <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1">50+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/70 font-bold">Software Solutions</span>
            </div>

            {/* Government Clients */}
            <div className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white/80 font-light mb-2 block">account_balance</span>
              <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1">10+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/70 font-bold">Government Clients</span>
            </div>

            {/* Global Clients */}
            <div className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white/80 font-light mb-2 block">public</span>
              <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1">100+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/70 font-bold">Global Clients</span>
            </div>

            {/* SaaS Downloads */}
            <div className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-white/80 font-light mb-2 block">download</span>
              <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1">27k+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/70 font-bold">SaaS Clients</span>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <LogoCarousel />
      
      {/* Universal Integration Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-[#E8DDD0] dark:bg-background-dark overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#2F3B35]/60 dark:text-text-dark-muted mb-4 block">ECOSYSTEM</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-[#2F3B35] dark:text-text-dark mb-6">Universal Integration</h2>
            <p className="text-lg text-[#2F3B35]/70 dark:text-text-dark-muted mt-6 max-w-2xl mx-auto leading-relaxed">
              Connecting the AI Engine to your existing operational core through secure, high-bandwidth pipelines.
            </p>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto" style={{ aspectRatio: '1 / 1', maxHeight: '700px' }}>
            {/* SVG Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              {/* Vertical line */}
              <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.15" className="text-[#2F3B35]/20 dark:text-white/20" />
              {/* Horizontal line */}
              <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.15" className="text-[#2F3B35]/20 dark:text-white/20" />
            </svg>
            
            {/* Grid Container */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0 p-4 sm:p-6 md:p-8">
              
              {/* Top Center - Legacy ERP */}
              <div className="col-start-2 row-start-1 flex items-end justify-center pb-2 sm:pb-3 md:pb-4">
                <div className="bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg md:rounded-xl flex items-center gap-2 sm:gap-3 md:gap-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-lg sm:text-xl md:text-2xl lg:text-3xl">storage</span>
                  <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">LEGACY ERP</span>
                </div>
              </div>
              
              {/* Middle Right - CRM Hub */}
              <div className="col-start-3 row-start-2 flex items-center justify-start pl-2 sm:pl-3 md:pl-4">
                <div className="bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg md:rounded-xl flex items-center gap-2 sm:gap-3 md:gap-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-lg sm:text-xl md:text-2xl lg:text-3xl">groups</span>
                  <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">CRM HUB</span>
                </div>
              </div>
              
              {/* Center - AI Engine */}
              <div className="col-start-2 row-start-2 flex items-center justify-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-[#1F1F1F] dark:bg-[#0F0F0F] rounded-full flex flex-col items-center justify-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.9)] ring-2 sm:ring-3 md:ring-4 ring-white/20 dark:ring-white/30 relative z-10">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">grain</span>
                  <span className="font-bold text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase mt-1 sm:mt-2 md:mt-3 tracking-[0.2em] sm:tracking-[0.25em]">AI ENGINE</span>
                </div>
              </div>
              
              {/* Middle Left - On-Prem */}
              <div className="col-start-1 row-start-2 flex items-center justify-end pr-2 sm:pr-3 md:pr-4">
                <div className="bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg md:rounded-xl flex items-center gap-2 sm:gap-3 md:gap-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-lg sm:text-xl md:text-2xl lg:text-3xl">lan</span>
                  <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">ON-PREM</span>
                </div>
              </div>
              
              {/* Bottom Center - SaaS Stack */}
              <div className="col-start-2 row-start-3 flex items-start justify-center pt-2 sm:pt-3 md:pt-4">
                <div className="bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg md:rounded-xl flex items-center gap-2 sm:gap-3 md:gap-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-lg sm:text-xl md:text-2xl lg:text-3xl">cloud_done</span>
                  <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">SAAS STACK</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
