import { Heart, Activity, Zap, Flower, Apple, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart size={40} />,
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers who create customized workout plans tailored to your specific goals and fitness level.',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: <Activity size={40} />,
      title: 'Weight Training',
      description: 'Build strength and muscle with our comprehensive weight training programs using free weights and resistance machines.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: <Zap size={40} />,
      title: 'Cardio Programs',
      description: 'Improve endurance and burn calories with high-energy cardio workouts including treadmill, cycling, and elliptical training.',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: <Flower size={40} />,
      title: 'Yoga & Flexibility',
      description: 'Enhance flexibility, balance, and mental clarity through various yoga styles from beginner to advanced levels.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: <Apple size={40} />,
      title: 'Nutrition Guidance',
      description: 'Get personalized nutrition plans and dietary advice from certified nutritionists to fuel your fitness journey.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: <Users size={40} />,
      title: 'Group Classes',
      description: 'Join energetic group fitness classes including HIIT, Zumba, spinning, and more in a fun, motivating environment.',
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-fitness-gold font-bold text-lg uppercase tracking-widest mb-3">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-fitness-dark mb-6">
            WHAT WE OFFER
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of fitness services designed to help you achieve 
            your health and wellness goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-hover bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group"
            >
              <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-fitness-dark mb-4 group-hover:text-fitness-gold transition-colors">
                {service.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <button className="text-fitness-gold font-bold uppercase tracking-wide text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Ready to start your fitness journey?
          </p>
          <a
            href="#pricing"
            className="inline-block bg-fitness-gold hover:bg-yellow-600 text-fitness-black font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
          >
            View Membership Plans
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
