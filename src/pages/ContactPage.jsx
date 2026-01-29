import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section bg-gradient-hero dark:bg-gradient-hero-dark">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-xl mb-6">Contact Us</h1>
              <p className="text-xl text-text-muted dark:text-text-dark-muted leading-relaxed">
                Let's discuss how we can help transform your business. Our team is ready to answer your questions.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />
    </div>
  );
};

export default ContactPage;
