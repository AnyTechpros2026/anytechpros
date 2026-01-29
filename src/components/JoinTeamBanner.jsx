import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const JoinTeamBanner = () => {
  return (
    <section className="section bg-background-light dark:bg-background-dark">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="bg-gradient-primary rounded-2xl p-12 md:p-16 text-center text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-lg rotate-45" />
              <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white rounded-full" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Be part of a dynamic team that's shaping the future of consulting and technology. We're always looking for talented individuals who are passionate about innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/careers">
                  <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-elevated">
                    View Open Positions
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                    Contact HR Team
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-white/20">
                {[
                  { value: '100+', label: 'Team Members' },
                  { value: '25+', label: 'Countries' },
                  { value: '4.8/5', label: 'Employee Rating' },
                  { value: '15+', label: 'Open Positions' },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm uppercase tracking-wide opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default JoinTeamBanner;
