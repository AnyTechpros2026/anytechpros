import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.4) 0%, rgba(31, 31, 31, 0.7) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`
        }}
      />
      
      <div className="container-custom relative z-10 py-12 md:py-20 lg:py-32 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-left">
            {/* Label */}
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-8 md:w-12 h-px bg-white"></div>
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-white">Strategic Digital Solutions</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-light leading-tight tracking-tight text-white mb-6 md:mb-8 drop-shadow-lg">
              Strategy Led Consulting.
              <span className="block italic mt-1 md:mt-2">
                Product Driven Execution.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed font-light max-w-2xl drop-shadow">
              AnyTechPros partners with enterprises, startups, and governments to design strategy, build software, and deploy AI powered platforms that deliver measurable business outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="bg-white text-charcoal text-xs md:text-sm uppercase tracking-widest-xl font-bold px-8 md:px-10 py-4 md:py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl w-full">
                  Executive Consultation
                </button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <button className="border-2 border-white/80 text-white text-xs md:text-sm uppercase tracking-widest-xl font-bold px-8 md:px-10 py-4 md:py-5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 w-full">
                  Portfolio
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-charcoal/90 backdrop-blur-md border border-white/10 shadow-2xl p-6 md:p-10 lg:p-12">
              {/* Stats Grid */}
              <div className="space-y-6 md:space-y-8">
                {/* Main Stats */}
                <div className="grid grid-cols-2 gap-4 md:gap-8 pb-6 md:pb-8 border-b border-white/10">
                  <div>
                    <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1 md:mb-2">10k+</span>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/70 font-bold">Solutions Architected</span>
                  </div>
                  <div>
                    <span className="text-2xl md:text-3xl font-heading font-light text-white block mb-1 md:mb-2">120k+</span>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/70 font-bold">Global Deployments</span>
                  </div>
                </div>

                {/* Excellence Badge */}
                <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 text-white text-center border border-white/20">
                  <span className="text-4xl md:text-5xl font-heading font-light italic block mb-1 md:mb-2">12+</span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-medium opacity-70">Years of Excellence</span>
                </div>

                {/* Certifications */}
                <div className="pt-4 md:pt-6">
                  <div className="text-[10px] text-white/70 uppercase tracking-widest-3xl mb-4 font-bold">
                    Compliance & Standards
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['ISO 9001', 'ISO 42001', 'IEC 27701', 'CMMI L5'].map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm text-xs font-semibold text-white"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent - hidden initially, can be styled later */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-5 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
