import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-fitness-black"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/images/Image.jpeg"
          alt="Fitness Gym Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="slide-up">
          <h2 className="text-fitness-gold font-bold text-lg md:text-xl uppercase tracking-widest mb-4">
            Welcome to Fitness Sports Center
          </h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-fitness-white leading-tight mb-6">
            TRANSFORM YOUR BODY
            <br />
            <span className="text-fitness-gold">TRANSFORM YOUR LIFE</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light">
            Join the ultimate fitness community. State-of-the-art equipment, expert trainers, 
            and a supportive environment to help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToPricing}
              className="group bg-fitness-gold hover:bg-yellow-600 text-fitness-black font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-lg"
            >
              Join Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
            
            <a
              href="#about"
              className="border-2 border-fitness-white text-fitness-white hover:bg-fitness-white hover:text-fitness-black font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-black text-fitness-gold mb-2">500+</div>
            <div className="text-gray-400 text-sm md:text-base uppercase tracking-wide">Happy Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-black text-fitness-gold mb-2">20+</div>
            <div className="text-gray-400 text-sm md:text-base uppercase tracking-wide">Expert Trainers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-black text-fitness-gold mb-2">50+</div>
            <div className="text-gray-400 text-sm md:text-base uppercase tracking-wide">Classes Weekly</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-black text-fitness-gold mb-2">24/7</div>
            <div className="text-gray-400 text-sm md:text-base uppercase tracking-wide">Gym Access</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-fitness-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-fitness-white rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
