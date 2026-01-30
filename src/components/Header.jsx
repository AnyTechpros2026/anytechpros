import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Overview', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'What We Do', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Get in Touch', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-charcoal/5 dark:border-sandstone/5 ${
        isScrolled
          ? 'glass-nav shadow-card'
          : 'glass-nav'
      }`}
    >
      <div className="container-custom px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-xl md:text-2xl font-bold tracking-tighter text-charcoal dark:text-sandstone" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", letterSpacing: '-0.02em' }}>
              AnyTechPros
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12 ml-16">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-charcoal dark:text-sandstone'
                    : 'text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden sm:block p-1.5 md:p-2 rounded-lg hover:bg-taupe/30 dark:hover:bg-charcoal-light transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-4 md:w-5 h-4 md:h-5 text-brown-grey" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 md:w-5 h-4 md:h-5 text-sandstone" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            
            <Link to="/contact" className="hidden md:block">
              <button className="bg-charcoal dark:bg-sandstone text-sandstone dark:text-charcoal text-xs uppercase tracking-widest-xl font-bold px-6 md:px-8 py-2.5 md:py-3 hover:opacity-90 transition-all">
                Inquire
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 md:p-2 rounded-lg hover:bg-taupe/30 dark:hover:bg-charcoal-light transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 md:w-6 h-5 md:h-6 text-charcoal dark:text-sandstone" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 md:w-6 h-5 md:h-6 text-charcoal dark:text-sandstone" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-charcoal/10 dark:border-sandstone/10">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-charcoal dark:text-sandstone'
                      : 'text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" className="pt-2">
                <button className="bg-charcoal dark:bg-sandstone text-sandstone dark:text-charcoal text-xs uppercase tracking-widest-xl font-bold px-6 py-2.5 hover:opacity-90 transition-all w-full">
                  Inquire
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
