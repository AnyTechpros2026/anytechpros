import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Link } from 'react-router-dom';

// Platform Page
export const PlatformPage = () => (
  <div className="pt-20">
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Our Platform</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              A comprehensive ecosystem of tools and services designed to accelerate your digital transformation.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
    {/* Add platform content here */}
  </div>
);

// Industries Page
export const IndustriesPage = () => (
  <div className="pt-20">
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Industries We Serve</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              Specialized solutions across multiple industries including Healthcare, Finance, Retail, and more.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </div>
);

// Consulting Page
export const ConsultingPage = () => (
  <div className="pt-20">
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Consulting Services</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              Strategic consulting services to transform your business and drive sustainable growth.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </div>
);

// Resources Page
export const ResourcesPage = () => (
  <div className="pt-20">
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Resources</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              Whitepapers, case studies, and insights to help you stay ahead in the digital age.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </div>
);

// Products Page
export const ProductsPage = () => (
  <div className="pt-20">
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Our Products</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              Innovative products and solutions designed to solve real business challenges.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </div>
);

// Careers Page
export const CareersPage = () => (
  <div className="pt-20">
    <section
      className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')`
      }}
    >
      <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">Join Our Team</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Be part of a dynamic team that's shaping the future of consulting and technology.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
    
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brown-grey dark:text-sandstone text-xs uppercase tracking-widest mb-3">OPEN POSITIONS</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
            Current Opportunities
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: 'Senior Software Engineer', department: 'Engineering', location: 'Remote', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]', btnBg: 'bg-[#2F4538]', btnText: 'text-[#F7F3ED]' },
            { title: 'Marketing Manager', department: 'Marketing', location: 'San Francisco', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]', btnBg: 'bg-[#2F4538]', btnText: 'text-[#F7F3ED]' },
            { title: 'Business Consultant', department: 'Consulting', location: 'New York', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]', btnBg: 'bg-[#F7F3ED]', btnText: 'text-[#2F4538]' },
          ].map((job, index) => (
            <ScrollAnimation key={index}>
              <div className={`${job.bgColor} ${job.textColor} p-6 md:p-8 rounded-xl hover:opacity-90 transition-opacity duration-300`}>
                <h3 className="text-xl md:text-2xl font-heading font-semibold mb-4">
                  {job.title}
                </h3>
                <div className="space-y-2 mb-6 text-sm">
                  <p>
                    <span className="font-semibold">Department:</span> {job.department}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span> {job.location}
                  </p>
                </div>
                <Link to="/contact">
                  <button className={`w-full ${job.btnBg} ${job.btnText} py-3 px-6 text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity`}>
                    Apply Now
                  </button>
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  </div>
);
