import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-teal-950">
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.25em] mb-6">
            TankStack — Web Studio
          </p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-[1.1]">
            Modern Tech Solutions for
            <span className="block bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent italic">
              Growing Businesses
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            We solve your tech challenges so you can focus on growth
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-50 transform hover:scale-[1.03] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Work With Us
            </button>

            <button
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border border-white/40 text-white px-8 py-4 rounded-full text-base font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/70 transform hover:scale-[1.03] transition-all duration-200"
            >
              Our Solutions
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 sm:divide-x sm:divide-white/15 animate-fade-in-up animation-delay-500">
          <div className="text-center px-8 py-4 sm:py-0">
            <div className="font-display text-3xl sm:text-4xl font-semibold text-white mb-1">50+</div>
            <div className="text-sm text-blue-200/80 uppercase tracking-wider">Projects Completed</div>
          </div>
          <div className="text-center px-8 py-4 sm:py-0">
            <div className="font-display text-3xl sm:text-4xl font-semibold text-white mb-1">4</div>
            <div className="text-sm text-blue-200/80 uppercase tracking-wider">Expert Team Members</div>
          </div>
          <div className="text-center px-8 py-4 sm:py-0">
            <div className="font-display text-3xl sm:text-4xl font-semibold text-white mb-1">24/7</div>
            <div className="text-sm text-blue-200/80 uppercase tracking-wider">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;