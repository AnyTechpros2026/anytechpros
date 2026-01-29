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
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-left">
            {/* Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-white"></div>
              <span className="text-xs uppercase tracking-widest-3xl font-semibold text-white">Strategic Digital Solutions</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light leading-tight tracking-tight text-white mb-8 drop-shadow-lg">
              Strategy Led Consulting.
              <span className="block italic mt-2">
                Product Driven Execution.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed font-light max-w-2xl drop-shadow">
              AnyTechPros partners with enterprises, startups, and governments to design strategy, build software, and deploy AI powered platforms that deliver measurable business outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact">
                <button className="bg-white text-charcoal text-sm uppercase tracking-widest-xl font-bold px-10 py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl w-full sm:w-auto">
                  Executive Consultation
                </button>
              </Link>
              <Link to="/services">
                <button className="border-2 border-white/80 text-white text-sm uppercase tracking-widest-xl font-bold px-10 py-5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto">
                  Portfolio
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="relative">
            <div className="bg-charcoal/90 backdrop-blur-md border border-white/10 shadow-2xl p-12">
              {/* Stats Grid */}
              <div className="space-y-8">
                {/* Main Stats */}
                <div className="grid grid-cols-2 gap-8 pb-8 border-b border-white/10">
                  <div>
                    <span className="text-3xl font-heading font-light text-white block mb-2">10k+</span>
                    <span className="text-[10px] uppercase tracking-widest-xl text-white/70 font-bold">Solutions Architected</span>
                  </div>
                  <div>
                    <span className="text-3xl font-heading font-light text-white block mb-2">120k+</span>
                    <span className="text-[10px] uppercase tracking-widest-xl text-white/70 font-bold">Global Deployments</span>
                  </div>
                </div>

                {/* Excellence Badge */}
                <div className="bg-white/10 backdrop-blur-sm p-8 text-white text-center border border-white/20">
                  <span className="text-5xl font-heading font-light italic block mb-2">12+</span>
                  <span className="text-[10px] uppercase tracking-widest-3xl font-medium opacity-70">Years of Excellence</span>
                </div>

                {/* Certifications */}
                <div className="pt-6">
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
