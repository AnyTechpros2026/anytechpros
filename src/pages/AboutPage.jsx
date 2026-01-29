import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.5) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`
          }}
        />
        
        <div className="container-custom relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-xl mb-6 text-white drop-shadow-lg">Global Consulting & AI Technology Company</h1>
              <p className="text-xl text-white/90 leading-relaxed drop-shadow">
                AnyTechPros InfoTech LLP is a consulting-driven technology company delivering AI-powered platforms, enterprise software, and strategic digital solutions. Backed by 5+ years of expertise and aligned with global standards including ISO, IEC, and CMMI Level 5, we help organisations design digital strategy, build scalable systems, and achieve measurable business outcomes with confidence and security.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom max-w-5xl">
          <ScrollAnimation>
            <div className="space-y-8">
              <p className="text-body text-lg">
                AnyTechPros InfoTech LLP is a consulting-led technology company that architects AI-driven platforms, enterprise-grade software, and strategic digital solutions for enterprises, startups, and government institutions. With 5+ years of proven expertise, we help organisations design digital strategy, engineer scalable systems, and deliver measurable business impact through intelligent technology.
              </p>
              <p className="text-body text-lg">
                Operating at the intersection of consulting, engineering, and artificial intelligence, AnyTechPros bridges the gap between strategic vision and execution. We work closely with leadership teams to modernise technology landscapes, optimise operations, and build future-ready digital ecosystems that enable organisations to compete, innovate, and grow in the digital economy.
              </p>
              <p className="text-body text-lg">
                As a DIPP-recognised and MSME-registered consulting and technology partner, AnyTechPros delivers enterprise-grade solutions across IT consulting, software engineering, AI and automation, SaaS platforms, cloud transformation, cybersecurity, telecom consulting, and e-governance. Our multidisciplinary teams combine strategic advisory with deep engineering capabilities to design secure, scalable, and high-performance systems aligned with real business objectives.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-section-light dark:bg-section-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">Global Standards, Certifications & Process Excellence</h2>
              <p className="text-body max-w-4xl mx-auto">
                AnyTechPros operates with globally recognised standards and best practices, ensuring quality, security, reliability, and process maturity across all solutions and services. Our frameworks and delivery models are aligned with international certifications and enterprise governance standards.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="luxury-card">
                <h3 className="text-xl font-heading font-semibold text-text-primary dark:text-text-dark mb-4">
                  Quality, IT Service & Business Continuity
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary dark:text-primary-light mr-2">•</span>
                    <span className="text-text-muted dark:text-text-dark-muted">ISO 9001:2015 – Quality Management Systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary dark:text-primary-light mr-2">•</span>
                    <span className="text-text-muted dark:text-text-dark-muted">ISO 20000-1:2018 – IT Service Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary dark:text-primary-light mr-2">•</span>
                    <span className="text-text-muted dark:text-text-dark-muted">ISO 22301:2019 – Business Continuity Management</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="luxury-card">
                <h3 className="text-xl font-heading font-semibold text-text-primary dark:text-text-dark mb-4">
                  AI, Software & Systems Engineering
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary dark:text-primary-light mr-2">•</span>
                    <span className="text-text-muted dark:text-text-dark-muted">ISO 42001:2023 – AI Management Systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary dark:text-primary-light mr-2">•</span>
                    <span className="text-text-muted dark:text-text-dark-muted">IEC 90003:2018 – Software Engineering Guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary dark:text-primary-light mr-2">•</span>
                    <span className="text-text-muted dark:text-text-dark-muted">IEC 25101:2023 – System Quality Models</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="luxury-card">
                <h3 className="text-xl font-heading font-semibold text-text-primary dark:text-text-dark mb-4">
                  Information Security & Privacy
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary dark:text-primary-light mr-2">•</span>
                    <span className="text-text-muted dark:text-text-dark-muted">IEC 27701:2022 – Privacy Information Management</span>
                  </li>
                </ul>
                <h3 className="text-xl font-heading font-semibold text-text-primary dark:text-text-dark mb-4 mt-6">
                  Process & Capability Excellence
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary dark:text-primary-light mr-2">•</span>
                    <span className="text-text-muted dark:text-text-dark-muted">CMMI Level 5 – Process Maturity and Performance Excellence</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation>
            <div className="text-center mt-12">
              <p className="text-body text-lg max-w-4xl mx-auto">
                These certifications reflect our commitment to delivering secure, compliant, and enterprise-ready solutions with consistent quality, governance, and operational excellence.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">Our Consulting-Driven Approach</h2>
              <p className="text-body max-w-3xl mx-auto">
                Our approach is built on three core pillars:
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollAnimation>
              <div className="luxury-card text-center">
                <h3 className="text-2xl font-heading font-semibold text-text-primary dark:text-text-dark mb-4">
                  Strategy
                </h3>
                <p className="text-text-muted dark:text-text-dark-muted">
                  Designing digital and business transformation roadmaps aligned with organisational goals.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="luxury-card text-center">
                <h3 className="text-2xl font-heading font-semibold text-text-primary dark:text-text-dark mb-4">
                  Engineering
                </h3>
                <p className="text-text-muted dark:text-text-dark-muted">
                  Building scalable, secure, and high-performance software and platforms.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="luxury-card text-center">
                <h3 className="text-2xl font-heading font-semibold text-text-primary dark:text-text-dark mb-4">
                  Intelligence
                </h3>
                <p className="text-text-muted dark:text-text-dark-muted">
                  Embedding AI, automation, and data-driven capabilities into every solution.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation>
            <div className="max-w-5xl mx-auto">
              <p className="text-body text-lg">
                We help organisations reduce operational complexity, strengthen cybersecurity, accelerate decision-making, and unlock new digital revenue streams. From enterprise IT transformation and AI-powered automation to GovTech and industry-specific platforms, we convert complex ideas into practical, high-impact solutions.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-section-light dark:bg-section-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">Industries We Serve</h2>
              <p className="text-body max-w-4xl mx-auto mb-8">
                AnyTechPros serves a diverse portfolio of clients across government, telecom, IT, BFSI, education, real estate, and enterprise sectors. Our proprietary SaaS platforms and AI-driven solutions empower organisations to optimise operations, enhance digital resilience, and deliver superior customer experiences.
              </p>
              <p className="text-xl font-semibold text-text-primary dark:text-text-dark">
                We measure success not by technology delivered, but by business value created — productivity gains, risk reduction, scalability, and sustainable growth.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Vision */}
      <section className="section bg-background-light dark:bg-background-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="heading-lg mb-6">Our Vision</h2>
              <p className="text-body text-lg mb-6">
                At AnyTechPros, innovation is not an option — it is a discipline. We continuously invest in AI, automation, cybersecurity, and emerging technologies to help organisations stay ahead of disruption.
              </p>
              <p className="text-xl font-heading font-semibold text-accent-sage dark:text-accent-sage">
                AnyTechPros InfoTech LLP is where consulting meets engineering, and strategy becomes scalable technology.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
