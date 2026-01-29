import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <section className="section relative overflow-hidden" id="about">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.5) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`
        }}
      />
      
      <div className="container-custom relative z-10">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="heading-lg mb-6 text-white drop-shadow-lg">Global Consulting & AI Technology Company</h2>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow">
              AnyTechPros InfoTech LLP is a consulting-driven technology company delivering AI-powered platforms, enterprise software, and strategic digital solutions. Backed by 5+ years of expertise and aligned with global standards including ISO, IEC, and CMMI Level 5, we help organisations design digital strategy, build scalable systems, and achieve measurable business outcomes with confidence and security.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-1 gap-12 mb-20">
          <ScrollAnimation>
            <div className="space-y-6 max-w-5xl mx-auto">
              <p className="text-lg text-white/90 leading-relaxed font-light drop-shadow">
                AnyTechPros InfoTech LLP is a consulting-led technology company that architects AI-driven platforms, enterprise-grade software, and strategic digital solutions for enterprises, startups, and government institutions. With 5+ years of proven expertise, we help organisations design digital strategy, engineer scalable systems, and deliver measurable business impact through intelligent technology.
              </p>
              <p className="text-lg text-white/90 leading-relaxed font-light drop-shadow">
                Operating at the intersection of consulting, engineering, and artificial intelligence, AnyTechPros bridges the gap between strategic vision and execution. We work closely with leadership teams to modernise technology landscapes, optimise operations, and build future-ready digital ecosystems that enable organisations to compete, innovate, and grow in the digital economy.
              </p>
              <p className="text-lg text-white/90 leading-relaxed font-light drop-shadow">
                As a DIPP-recognised and MSME-registered consulting and technology partner, AnyTechPros delivers enterprise-grade solutions across IT consulting, software engineering, AI and automation, SaaS platforms, cloud transformation, cybersecurity, telecom consulting, and e-governance. Our multidisciplinary teams combine strategic advisory with deep engineering capabilities to design secure, scalable, and high-performance systems aligned with real business objectives.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        {/* Consulting Approach */}
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h3 className="heading-md mb-6 text-white drop-shadow-lg">Our Consulting-Driven Approach</h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto font-light drop-shadow">
              Our approach is built on three core pillars that bridge strategic vision with technical execution.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategy',
                description: 'Designing digital and business transformation roadmaps aligned with organisational goals.',
              },
              {
                title: 'Engineering',
                description: 'Building scalable, secure, and high-performance software and platforms.',
              },
              {
                title: 'Intelligence',
                description: 'Embedding AI, automation, and data-driven capabilities into every solution.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-charcoal/60 backdrop-blur-md border border-white/10 p-8 md:p-12 shadow-2xl hover:shadow-elevated hover:border-white/30 transition-all duration-500 text-center hover:-translate-y-2"
              >
                <h4 className="text-xl font-heading font-semibold text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-white/80 font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
