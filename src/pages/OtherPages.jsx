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

// Drones Page
export const DronesPage = () => (
  <div className="pt-20">
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Drones & Aerial Solutions</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              Advanced drone technology for surveying, inspection, and aerial photography.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </div>
);

// BotMinds Page
export const BotMindsPage = () => (
  <div className="pt-20">
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">BotMinds AI Platform</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              Intelligent chatbots and AI assistants to automate customer interactions.
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
    <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Join Our Team</h1>
            <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
              Be part of a dynamic team that's shaping the future of consulting and technology.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
    
    <section className="section bg-background-light dark:bg-background-dark">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Senior Software Engineer', department: 'Engineering', location: 'Remote' },
            { title: 'Marketing Manager', department: 'Marketing', location: 'San Francisco' },
            { title: 'Business Consultant', department: 'Consulting', location: 'New York' },
          ].map((job, index) => (
            <ScrollAnimation key={index}>
              <div className="luxury-card hover:-translate-y-2">
                <h3 className="text-xl font-heading font-semibold text-text-primary dark:text-text-dark mb-3">
                  {job.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-text-muted dark:text-text-dark-muted text-sm">
                    <span className="font-semibold">Department:</span> {job.department}
                  </p>
                  <p className="text-text-muted dark:text-text-dark-muted text-sm">
                    <span className="font-semibold">Location:</span> {job.location}
                  </p>
                </div>
                <Link to="/contact">
                  <button className="btn-secondary w-full">Apply Now</button>
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  </div>
);
