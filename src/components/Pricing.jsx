import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        'Gym access (off-peak hours)',
        'Access to cardio equipment',
        'Free fitness orientation',
        'Locker room access',
        '1 free personal training session',
      ],
      highlighted: false,
    },
    {
      name: 'Standard',
      price: '$49',
      period: '/month',
      description: 'Most popular choice for dedicated fitness enthusiasts',
      features: [
        '24/7 gym access',
        'Full equipment access',
        'Unlimited group classes',
        'Sauna & steam room',
        '3 free personal training sessions',
        'Nutrition consultation',
        'Free guest passes (2/month)',
      ],
      highlighted: true,
    },
    {
      name: 'Premium',
      price: '$79',
      period: '/month',
      description: 'Ultimate fitness experience with all premium benefits',
      features: [
        '24/7 VIP gym access',
        'All Standard features',
        'Unlimited personal training',
        'Customized workout plans',
        'Monthly nutrition reviews',
        'Spa & massage access',
        'Exclusive member events',
        'Priority booking',
        'Free merchandise pack',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-fitness-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-fitness-gold font-bold text-lg uppercase tracking-widest mb-3">
            Membership Plans
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-fitness-dark mb-6">
            CHOOSE YOUR PLAN
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible membership options to fit your budget and fitness goals. 
            No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-fitness-gold to-yellow-600 transform scale-105 shadow-2xl'
                  : 'bg-white border-2 border-gray-200 hover:border-fitness-gold hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute top-4 right-4 bg-fitness-white text-fitness-gold font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Card Content */}
              <div className="p-8">
                {/* Plan Name */}
                <h4 className={`text-2xl font-black uppercase tracking-wide mb-2 ${
                  plan.highlighted ? 'text-fitness-white' : 'text-fitness-dark'
                }`}>
                  {plan.name}
                </h4>

                {/* Price */}
                <div className="flex items-baseline mb-4">
                  <span className={`text-5xl font-black ${
                    plan.highlighted ? 'text-fitness-white' : 'text-fitness-dark'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ml-2 ${
                    plan.highlighted ? 'text-fitness-white/90' : 'text-gray-500'
                  }`}>
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-sm mb-6 ${
                  plan.highlighted ? 'text-fitness-white/90' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>

                {/* Divider */}
                <div className={`w-full h-px mb-6 ${
                  plan.highlighted ? 'bg-fitness-white/30' : 'bg-gray-200'
                }`}></div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.highlighted ? 'bg-fitness-white text-fitness-gold' : 'bg-fitness-gold text-fitness-black'
                      }`}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className={`text-sm ${
                        plan.highlighted ? 'text-fitness-white' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-full font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-fitness-white text-fitness-gold hover:bg-gray-100'
                      : 'bg-fitness-gold text-fitness-black hover:bg-yellow-600'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-fitness-dark rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4 justify-center">
              <div className="w-12 h-12 bg-fitness-gold rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-fitness-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-fitness-white">30-Day Money-Back Guarantee</h4>
            </div>
            <p className="text-gray-400 max-w-2xl">
              Try any membership risk-free. If you're not completely satisfied within the first 30 days, 
              we'll refund your membership fee, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
