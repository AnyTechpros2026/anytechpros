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
          
          <div className="relative h-[600px] md:h-[700px] flex items-center justify-center max-w-5xl mx-auto">
            {/* Connection Lines - Visible */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Horizontal line */}
              <div className="absolute w-[70%] md:w-[80%] h-[2px] bg-[#2F3B35]/20 dark:bg-white/20"></div>
              {/* Vertical line */}
              <div className="absolute h-[70%] md:h-[80%] w-[2px] bg-[#2F3B35]/20 dark:bg-white/20"></div>
            </div>
            
            {/* Center AI Engine */}
            <div className="relative z-20 w-48 h-48 md:w-64 md:h-64 bg-[#1F1F1F] rounded-full flex flex-col items-center justify-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-4 ring-white/20 dark:ring-white/10">
              <span className="material-symbols-outlined text-6xl md:text-8xl font-light">grain</span>
              <span className="font-bold text-[11px] uppercase mt-4 tracking-[0.2em]">AI ENGINE</span>
            </div>
            
            {/* Integration Points */}
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Top - Legacy ERP */}
              <div className="absolute -translate-y-48 md:-translate-y-64 bg-[#E8DDD0] dark:bg-charcoal-light border-2 border-[#2F3B35]/10 dark:border-white/15 px-8 py-5 rounded-xl flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-2xl">storage</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2F3B35] dark:text-sandstone">LEGACY ERP</span>
              </div>
              
              {/* Right - CRM Hub */}
              <div className="absolute translate-x-48 md:translate-x-80 bg-[#E8DDD0] dark:bg-charcoal-light border-2 border-[#2F3B35]/10 dark:border-white/15 px-8 py-5 rounded-xl flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-2xl">groups</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2F3B35] dark:text-sandstone">CRM HUB</span>
              </div>
              
              {/* Bottom - SaaS Stack */}
              <div className="absolute translate-y-48 md:translate-y-64 bg-[#E8DDD0] dark:bg-charcoal-light border-2 border-[#2F3B35]/10 dark:border-white/15 px-8 py-5 rounded-xl flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-2xl">cloud_done</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2F3B35] dark:text-sandstone">SAAS STACK</span>
              </div>
              
              {/* Left - On-Prem */}
              <div className="absolute -translate-x-48 md:-translate-x-80 bg-[#E8DDD0] dark:bg-charcoal-light border-2 border-[#2F3B35]/10 dark:border-white/15 px-8 py-5 rounded-xl flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-[#2F3B35] dark:text-sandstone font-light text-2xl">lan</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2F3B35] dark:text-sandstone">ON-PREM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
