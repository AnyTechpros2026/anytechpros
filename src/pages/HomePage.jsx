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
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-[#E8DDD0] dark:bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#2F3B35]/60 dark:text-text-dark-muted mb-4 block">ECOSYSTEM</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-[#2F3B35] dark:text-text-dark mb-6">Universal Integration</h2>
            <p className="text-lg text-[#2F3B35]/70 dark:text-text-dark-muted mt-6 max-w-2xl mx-auto leading-relaxed">
              Connecting the AI Engine to your existing operational core through secure, high-bandwidth pipelines.
            </p>
          </div>
          
          <div className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] flex items-center justify-center max-w-5xl mx-auto">
            {/* Connection Lines - Visible */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Horizontal line */}
              <div className="absolute w-[2px] h-[90%] bg-[#2F3B35]/20 dark:bg-white/20"></div>
              {/* Vertical line */}
              <div className="absolute w-[90%] h-[2px] bg-[#2F3B35]/20 dark:bg-white/20 top-1/2"></div>
            </div>
            
            {/* Center AI Engine */}
            <div className="relative z-20 w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-[#1F1F1F] rounded-full flex flex-col items-center justify-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-2 sm:ring-3 md:ring-4 ring-white/20 dark:ring-white/10">
              <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light">grain</span>
              <span className="font-bold text-[9px] sm:text-[10px] md:text-[11px] uppercase mt-2 md:mt-4 tracking-[0.15em] sm:tracking-[0.2em]">AI ENGINE</span>
            </div>
            
            {/* Integration Points */}
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Top - Legacy ERP */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[180px] sm:-translate-y-[200px] md:-translate-y-[240px] lg:-translate-y-[290px] bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-2 py-1.5 sm:px-4 sm:py-2.5 md:px-8 md:py-5 rounded-lg md:rounded-xl flex items-center gap-1.5 sm:gap-3 md:gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-base sm:text-xl md:text-2xl">storage</span>
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] md:tracking-[0.25em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">LEGACY ERP</span>
              </div>
              
              {/* Right - CRM Hub */}
              <div className="absolute left-1/2 top-1/2 translate-x-[100px] sm:translate-x-[130px] md:translate-x-[180px] lg:translate-x-[230px] -translate-y-1/2 bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-2 py-1.5 sm:px-4 sm:py-2.5 md:px-8 md:py-5 rounded-lg md:rounded-xl flex items-center gap-1.5 sm:gap-3 md:gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-base sm:text-xl md:text-2xl">groups</span>
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] md:tracking-[0.25em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">CRM HUB</span>
              </div>
              
              {/* Bottom - SaaS Stack */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[180px] sm:translate-y-[200px] md:translate-y-[240px] lg:translate-y-[290px] bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-2 py-1.5 sm:px-4 sm:py-2.5 md:px-8 md:py-5 rounded-lg md:rounded-xl flex items-center gap-1.5 sm:gap-3 md:gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-base sm:text-xl md:text-2xl">cloud_done</span>
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] md:tracking-[0.25em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">SAAS STACK</span>
              </div>
              
              {/* Left - On-Prem */}
              <div className="absolute left-1/2 top-1/2 -translate-x-[100px] sm:-translate-x-[130px] md:-translate-x-[180px] lg:-translate-x-[230px] -translate-y-1/2 bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-2 py-1.5 sm:px-4 sm:py-2.5 md:px-8 md:py-5 rounded-lg md:rounded-xl flex items-center gap-1.5 sm:gap-3 md:gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-base sm:text-xl md:text-2xl">lan</span>
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] md:tracking-[0.25em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">ON-PREM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
