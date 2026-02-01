import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DronesPage = () => {
  useEffect(() => {
    gsap.fromTo('.hero-heading', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 });
    gsap.utils.toArray('.scroll-animate').forEach((element) => {
      gsap.fromTo(element, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 85%', toggleActions: 'play none none none', once: true }
      });
    });
  }, []);

  const droneModels = [
    {
      name: 'Professional Drone X1',
      flightTime: '45 minutes',
      camera: '4K Camera',
      range: '10 km',
      speed: '68 km/h',
      image: '/drone1.png',
      features: [
        'Advanced 4K Camera System',
        'GPS-assisted flight',
        '360° Gimbal Stabilization',
        'Obstacle Detection',
        'Extended Battery Life',
        'Professional Grade Build'
      ],
      price: 'Contact for pricing',
      icon: 'flight_takeoff'
    },
    {
      name: 'Surveillance Drone S2',
      flightTime: '60 minutes',
      camera: 'Thermal + 4K',
      range: '15 km',
      speed: '72 km/h',
      image: '/drone2.png',
      features: [
        'Thermal Imaging Camera',
        '4K Ultra HD Camera',
        'Night Vision Capability',
        'AI-Powered Detection',
        'Extended Flight Time',
        'Enterprise Security Features'
      ],
      price: 'Contact for pricing',
      icon: 'videocam'
    },
    {
      name: 'Delivery Drone D3',
      flightTime: '40 minutes',
      camera: '2K Camera',
      range: '12 km',
      speed: '65 km/h',
      image: '/drone3.png',
      features: [
        '5 kg Payload Capacity',
        'Precision Landing System',
        'Route Optimization',
        'Weather Resistant',
        'Autonomous Delivery',
        'Real-time Tracking'
      ],
      price: 'Contact for pricing',
      icon: 'local_shipping'
    }
  ];

  const applications = [
    { icon: 'camera', title: 'Aerial Photography & Videography', description: 'Professional-grade aerial imaging for real estate, events, and marketing content.', bgColor: 'bg-[#E8DDD0]', textColor: 'text-[#2F3B35]' },
    { icon: 'security', title: 'Security & Surveillance', description: 'Advanced monitoring solutions for critical infrastructure and facility security.', bgColor: 'bg-[#C9D8BF]', textColor: 'text-[#2F3B35]' },
    { icon: 'map', title: 'Mapping & Surveying', description: 'Precise aerial mapping for construction, agriculture, and geographical surveys.', bgColor: 'bg-[#2F4538]', textColor: 'text-[#F7F3ED]' },
    { icon: 'engineering', title: 'Industrial Inspection', description: 'Safe and efficient inspection of industrial facilities, towers, and power lines.', bgColor: 'bg-[#A8B5A1]', textColor: 'text-[#2F3B35]' }
  ];

  const specifications = [
    { category: 'Flight Performance', items: ['45-60 minute flight time', '10-15 km range', 'Up to 72 km/h speed', 'Intelligent flight modes'] },
    { category: 'Camera Systems', items: ['4K to Thermal imaging', '360° gimbal stabilization', 'Night vision capability', 'Real-time transmission'] },
    { category: 'Safety Features', items: ['GPS-assisted navigation', 'Obstacle detection', 'Precision landing', 'Emergency return home'] },
    { category: 'Build Quality', items: ['Professional-grade materials', 'Weather resistant', 'Enterprise durability', 'Modular components'] }
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7) 0%, rgba(31, 31, 31, 0.8) 100%), url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Advanced Unmanned Aerial Systems
            </h1>
            <p className="hero-heading text-lg md:text-xl text-white/90 leading-relaxed">
              Professional-grade drones engineered for precision, reliability, and performance across diverse applications from aerial imaging to industrial surveillance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Drones */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Why Choose AnyTechPros Drones
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'verified', title: 'Enterprise Grade', desc: 'Professional-grade technology built for demanding applications.' },
              { icon: 'build', title: 'Advanced Engineering', desc: 'Cutting-edge design with precision-engineered components.' },
              { icon: 'support_agent', title: 'Expert Support', desc: 'Comprehensive technical support and maintenance services.' }
            ].map((item, index) => (
              <div key={index} className="scroll-animate bg-taupe/20 dark:bg-charcoal-light p-8 rounded-xl text-center">
                <span className="material-symbols-outlined text-5xl text-charcoal dark:text-sandstone mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-heading text-charcoal dark:text-sandstone mb-3">{item.title}</h3>
                <p className="text-brown-grey dark:text-text-dark-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drone Models */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Our Drone Models
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {droneModels.map((drone, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300">
                {/* Drone Image */}
                <div className="relative h-64 overflow-hidden bg-taupe/20 dark:bg-charcoal-light">
                  <img 
                    src={drone.image} 
                    alt={drone.name}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
                
                {/* Drone Header */}
                <div className="bg-taupe/30 dark:bg-charcoal-light p-6 text-center border-b border-taupe/20 dark:border-charcoal-light/30">
                  <h3 className="text-2xl font-heading text-charcoal dark:text-sandstone">{drone.name}</h3>
                </div>
                
                {/* Drone Details */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-xs text-brown-grey dark:text-text-dark-muted uppercase tracking-widest">Flight Time</p>
                      <p className="font-heading text-charcoal dark:text-sandstone">{drone.flightTime}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-brown-grey dark:text-text-dark-muted uppercase tracking-widest">Camera</p>
                      <p className="font-heading text-charcoal dark:text-sandstone">{drone.camera}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-brown-grey dark:text-text-dark-muted uppercase tracking-widest">Range</p>
                      <p className="font-heading text-charcoal dark:text-sandstone">{drone.range}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-brown-grey dark:text-text-dark-muted uppercase tracking-widest">Speed</p>
                      <p className="font-heading text-charcoal dark:text-sandstone">{drone.speed}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-heading text-charcoal dark:text-sandstone mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {drone.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-brown-grey dark:text-text-dark-muted">
                          <span className="material-symbols-outlined text-sm flex-shrink-0 mt-0.5">check_small</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-center font-heading text-charcoal dark:text-sandstone mb-4">{drone.price}</p>
                  <Link to="/contact" className="block">
                    <button className="w-full bg-charcoal dark:bg-sandstone text-white dark:text-charcoal text-sm uppercase tracking-widest font-bold py-3 hover:opacity-90 transition-all">
                      Get More Information
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Applications & Use Cases
            </h2>
            <p className="text-lg text-brown-grey dark:text-text-dark-muted max-w-3xl mx-auto">
              Versatile solutions for diverse industries and professional applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div key={index} className={`scroll-animate ${app.bgColor} ${app.textColor} p-6 rounded-xl hover:opacity-90 transition-opacity duration-300`}>
                <span className="material-symbols-outlined text-5xl mb-4 block">{app.icon}</span>
                <h3 className="font-heading mb-2 text-lg">{app.title}</h3>
                <p className="text-sm opacity-90">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
              Technical Specifications
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="scroll-animate bg-white dark:bg-charcoal p-6 rounded-xl">
                <h3 className="font-heading text-charcoal dark:text-sandstone mb-4 text-lg border-b border-taupe/20 dark:border-charcoal-light/30 pb-3">
                  {spec.category}
                </h3>
                <ul className="space-y-2">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brown-grey dark:text-text-dark-muted">
                      <span className="material-symbols-outlined text-sm flex-shrink-0 mt-0.5">arrow_right</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal dark:bg-charcoal-light text-white">
        <div className="container-custom px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto scroll-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-light mb-6">
              Ready to Take Flight?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Contact us today to discuss your drone requirements and find the perfect solution for your application.
            </p>
            <Link to="/contact">
              <button className="bg-white text-charcoal text-sm uppercase tracking-widest font-bold px-10 py-5 hover:bg-white/90 transition-all duration-300 shadow-2xl">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DronesPage;
