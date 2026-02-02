import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DottedMap from 'dotted-map';

const Footer = () => {
  const [email, setEmail] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Adjust map height based on screen size
      const isMobile = window.innerWidth < 768;
      const mapHeight = isMobile ? 40 : 60;
      
      const map = new DottedMap({ height: mapHeight, grid: 'diagonal' });
      
      const svgMap = map.getSVG({
        radius: isMobile ? 0.18 : 0.22,
        color: '#E8DDD0',
        shape: 'circle',
        backgroundColor: 'transparent'
      });

      canvasRef.current.innerHTML = svgMap;
    }
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter signup logic here
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Platform', path: '/platform' },
    { name: 'Industries', path: '/industries' },
  ];

  const serviceLinks = [
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Cyber Security', path: '/services/cyber-security' },
    { name: 'IT Consulting', path: '/services/it-consulting' },
    { name: 'Management Consulting', path: '/services/management-consulting' },
    { name: 'Business Consulting', path: '/services/business-consulting' },
  ];

  const resourceLinks = [
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
  ];

  return (
    <footer className="relative overflow-hidden bg-charcoal dark:bg-charcoal text-sandstone dark:text-sandstone pt-12 md:pt-16 pb-6 md:pb-8 border-t border-sandstone/10 dark:border-sandstone/10">
      {/* Dotted World Map Background */}
      <div 
        ref={canvasRef}
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      />
      
      <div className="container-custom px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="text-sandstone dark:text-sandstone">
                <svg className="w-5 md:w-6 h-5 md:h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                </svg>
              </div>
              <span className="text-base md:text-lg font-semibold tracking-widest uppercase">AnyTechPros</span>
            </Link>
            <p className="text-text-dark-muted dark:text-text-dark-muted text-sm leading-relaxed mb-4 md:mb-6 font-light">
              Defining the next era of enterprise intelligence through elite engineering and strategic digital vision.
            </p>
            <div className="flex gap-4 md:gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-dark-muted hover:text-sandstone dark:hover:text-sandstone transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    {social.icon === 'linkedin' && (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    )}
                    {social.icon === 'twitter' && (
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    )}
                    {social.icon === 'facebook' && (
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    )}
                    {social.icon === 'instagram' && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest-4xl font-bold text-sandstone dark:text-sandstone mb-4 md:mb-6">Expertise</h4>
            <ul className="space-y-2 md:space-y-3 text-xs tracking-widest text-text-dark-muted dark:text-text-dark-muted">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-sandstone dark:hover:text-sandstone transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest-4xl font-bold text-sandstone dark:text-sandstone mb-4 md:mb-6">Services</h4>
            <ul className="space-y-2 md:space-y-3 text-xs tracking-widest text-text-dark-muted dark:text-text-dark-muted">
              {serviceLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-sandstone dark:hover:text-sandstone transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest-4xl font-bold text-sandstone dark:text-sandstone mb-4 md:mb-6">Newsletter</h4>
            <p className="text-text-dark-muted dark:text-text-dark-muted text-xs mb-3 md:mb-4 tracking-wide">Quarterly insights on enterprise technology.</p>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Professional Email"
                required
                className="w-full bg-charcoal-light dark:bg-charcoal-light border border-sandstone/10 dark:border-sandstone/10 text-xs py-4 px-4 tracking-widest focus:ring-1 focus:ring-sandstone dark:focus:ring-sandstone focus:border-sandstone dark:focus:border-sandstone text-sandstone dark:text-sandstone placeholder-text-dark-muted"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sandstone dark:text-sandstone"
              >
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>

        {/* Certifications & Recognition Section */}
        <div className="py-6 md:py-8 border-t border-sandstone/10 dark:border-sandstone/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Recognized By */}
            <div>
              <h5 className="text-[9px] uppercase tracking-widest text-sandstone/60 dark:text-sandstone/60 mb-3">Recognized By</h5>
              <div className="flex gap-4 items-center flex-wrap">
                {[1, 2, 3].map((num) => (
                  <div key={`r${num}`} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                    <img
                      src={`/r${num}.png`}
                      alt={`Recognized by ${num}`}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Incubated By */}
            <div>
              <h5 className="text-[9px] uppercase tracking-widest text-sandstone/60 dark:text-sandstone/60 mb-3">Incubated By</h5>
              <div className="flex gap-4 items-center flex-wrap">
                {[1, 2].map((num) => (
                  <div key={`i${num}`} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                    <img
                      src={`/i${num}.png`}
                      alt={`Incubated by ${num}`}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Certified By */}
            <div>
              <h5 className="text-[9px] uppercase tracking-widest text-sandstone/60 dark:text-sandstone/60 mb-3">Certified By</h5>
              <div className="flex gap-4 items-center flex-wrap">
                {[1, 2].map((num) => (
                  <div key={`cf${num}`} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                    <img
                      src={`/cf${num}.png`}
                      alt={`Certified by ${num}`}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-sandstone/10 dark:border-sandstone/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-[9px] uppercase tracking-widest text-text-dark-muted/60 dark:text-text-dark-muted/60 text-center md:text-left">
            © {new Date().getFullYear()} AnyTechPros Consulting Group. All rights reserved.
          </p>
          <div className="flex gap-8 md:gap-12 text-[9px] uppercase tracking-widest text-text-dark-muted/60 dark:text-text-dark-muted/60">
            <Link to="/privacy" className="hover:text-sandstone dark:hover:text-sandstone transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-sandstone dark:hover:text-sandstone transition-colors">Terms</Link>
            <a href="#" className="hover:text-sandstone dark:hover:text-sandstone transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
