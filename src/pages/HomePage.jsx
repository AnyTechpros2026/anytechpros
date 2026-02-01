import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      
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
          
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center max-w-5xl mx-auto overflow-hidden">
            {/* Connection Lines - Visible */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Horizontal line */}
              <div className="absolute w-[90%] sm:w-[85%] md:w-[80%] h-[1.5px] sm:h-[2px] bg-[#2F3B35]/20 dark:bg-white/20"></div>
              {/* Vertical line */}
              <div className="absolute h-[90%] sm:h-[85%] md:h-[80%] w-[1.5px] sm:w-[2px] bg-[#2F3B35]/20 dark:bg-white/20"></div>
            </div>
            
            {/* Center AI Engine */}
            <div className="relative z-20 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-[#1F1F1F] rounded-full flex flex-col items-center justify-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-2 sm:ring-3 md:ring-4 ring-white/20 dark:ring-white/10">
              <span className="material-symbols-outlined text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light">grain</span>
              <span className="font-bold text-[8px] sm:text-[9px] md:text-[11px] uppercase mt-1 sm:mt-2 md:mt-4 tracking-[0.15em] sm:tracking-[0.2em]">AI ENGINE</span>
            </div>
            
            {/* Integration Points */}
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Top - Legacy ERP */}
              <div className="absolute -translate-y-24 sm:-translate-y-32 md:-translate-y-48 lg:-translate-y-64 bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-2 py-1.5 sm:px-3 sm:py-2 md:px-8 md:py-5 rounded-lg md:rounded-xl flex items-center gap-1.5 sm:gap-2 md:gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-base sm:text-lg md:text-2xl">storage</span>
                <span className="text-[7px] sm:text-[8px] md:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.25em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">LEGACY ERP</span>
              </div>
              
              {/* Right - CRM Hub */}
              <div className="absolute translate-x-24 sm:translate-x-32 md:translate-x-48 lg:translate-x-80 bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-2 py-1.5 sm:px-3 sm:py-2 md:px-8 md:py-5 rounded-lg md:rounded-xl flex items-center gap-1.5 sm:gap-2 md:gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-base sm:text-lg md:text-2xl">groups</span>
                <span className="text-[7px] sm:text-[8px] md:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.25em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">CRM HUB</span>
              </div>
              
              {/* Bottom - SaaS Stack */}
              <div className="absolute translate-y-24 sm:translate-y-32 md:translate-y-48 lg:translate-y-64 bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-2 py-1.5 sm:px-3 sm:py-2 md:px-8 md:py-5 rounded-lg md:rounded-xl flex items-center gap-1.5 sm:gap-2 md:gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-base sm:text-lg md:text-2xl">cloud_done</span>
                <span className="text-[7px] sm:text-[8px] md:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.25em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">SAAS STACK</span>
              </div>
              
              {/* Left - On-Prem */}
              <div className="absolute -translate-x-24 sm:-translate-x-32 md:-translate-x-48 lg:-translate-x-80 bg-[#E8DDD0] dark:bg-charcoal-light border border-[#2F3B35]/10 dark:border-white/15 px-2 py-1.5 sm:px-3 sm:py-2 md:px-8 md:py-5 rounded-lg md:rounded-xl flex items-center gap-1.5 sm:gap-2 md:gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-base sm:text-lg md:text-2xl">lan</span>
                <span className="text-[7px] sm:text-[8px] md:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.25em] text-[#2F3B35] dark:text-sandstone whitespace-nowrap">ON-PREM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
