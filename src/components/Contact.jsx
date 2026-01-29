import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setStatus({ type: 'loading', message: 'Sending message...' });
    
    // Replace with actual API call
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section className="section bg-section-light dark:bg-section-dark" id="contact">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Get in Touch</h2>
            <p className="text-body">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollAnimation>
            <div className="luxury-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary dark:text-text-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-section-light dark:bg-section-dark border border-border-light dark:border-border-dark text-text-primary dark:text-text-dark placeholder-text-muted dark:placeholder-text-dark-muted focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary dark:text-text-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-section-light dark:bg-section-dark border border-border-light dark:border-border-dark text-text-primary dark:text-text-dark placeholder-text-muted dark:placeholder-text-dark-muted focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-text-primary dark:text-text-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-section-light dark:bg-section-dark border border-border-light dark:border-border-dark text-text-primary dark:text-text-dark placeholder-text-muted dark:placeholder-text-dark-muted focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-text-primary dark:text-text-dark mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-section-light dark:bg-section-dark border border-border-light dark:border-border-dark text-text-primary dark:text-text-dark placeholder-text-muted dark:placeholder-text-dark-muted focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-text-primary dark:text-text-dark mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-section-light dark:bg-section-dark border border-border-light dark:border-border-dark text-text-primary dark:text-text-dark placeholder-text-muted dark:placeholder-text-dark-muted focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary dark:text-text-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-section-light dark:bg-section-dark border border-border-light dark:border-border-dark text-text-primary dark:text-text-dark placeholder-text-muted dark:placeholder-text-dark-muted focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                        : status.type === 'error'
                        ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={status.type === 'loading'}
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </ScrollAnimation>

          {/* Contact Information */}
          <ScrollAnimation>
            <div className="space-y-8">
              <div className="luxury-card">
                <h3 className="text-2xl font-heading font-semibold text-text-primary dark:text-text-dark mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary dark:text-text-dark mb-1">Email</h4>
                      <p className="text-text-muted dark:text-text-dark-muted">info@anytechpros.com</p>
                      <p className="text-text-muted dark:text-text-dark-muted">support@anytechpros.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary dark:text-text-dark mb-1">Phone</h4>
                      <p className="text-text-muted dark:text-text-dark-muted">+1 (555) 123-4567</p>
                      <p className="text-text-muted dark:text-text-dark-muted">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary dark:text-text-dark mb-1">Address</h4>
                      <p className="text-text-muted dark:text-text-dark-muted">
                        123 Business Avenue<br />
                        Suite 456<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary dark:text-text-dark mb-1">Business Hours</h4>
                      <p className="text-text-muted dark:text-text-dark-muted">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="luxury-card bg-gradient-primary text-white">
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  Schedule a Consultation
                </h3>
                <p className="mb-6 opacity-90">
                  Prefer to talk? Book a free 30-minute consultation call with our experts.
                </p>
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                  Book a Call
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
