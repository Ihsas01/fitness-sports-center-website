import { Dumbbell, Users, Trophy } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Trophy size={48} />,
      title: 'Professional Trainers',
      description: 'Our certified trainers bring years of experience and expertise to help you achieve your fitness goals safely and effectively.',
    },
    {
      icon: <Dumbbell size={48} />,
      title: 'Modern Equipment',
      description: 'Train with cutting-edge fitness equipment and technology designed to maximize your results and track your progress.',
    },
    {
      icon: <Users size={48} />,
      title: 'Friendly Environment',
      description: 'Join a supportive community where members motivate each other and celebrate every victory together.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-fitness-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-fitness-gold font-bold text-lg uppercase tracking-widest mb-3">
            About Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-fitness-dark mb-6">
            OUR MISSION & VALUES
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Established in 2023, Fitness Sports Center is dedicated to transforming lives through 
            fitness. We believe everyone deserves access to professional training, quality equipment, 
            and a motivating environment that inspires greatness.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="bg-fitness-gold/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-fitness-gold">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold text-fitness-dark mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 bg-gradient-to-r from-fitness-dark to-black rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-fitness-gold rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-fitness-gold rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-fitness-white mb-6">
              WHY CHOOSE FITNESS SPORTS CENTER?
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              We're more than just a gym – we're a community committed to your success. With personalized 
              programs, expert guidance, and state-of-the-art facilities, we provide everything you need 
              to transform your body and life.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-fitness-white">
                <div className="w-3 h-3 bg-fitness-gold rounded-full"></div>
                <span>Certified Programs</span>
              </div>
              <div className="flex items-center gap-2 text-fitness-white">
                <div className="w-3 h-3 bg-fitness-gold rounded-full"></div>
                <span>Flexible Hours</span>
              </div>
              <div className="flex items-center gap-2 text-fitness-white">
                <div className="w-3 h-3 bg-fitness-gold rounded-full"></div>
                <span>Affordable Plans</span>
              </div>
              <div className="flex items-center gap-2 text-fitness-white">
                <div className="w-3 h-3 bg-fitness-gold rounded-full"></div>
                <span>Results Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
