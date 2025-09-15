import React from 'react';
import { Shield, Truck, Users, Award, RefreshCw, Globe } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Performance-Tested',
      description: 'Every product undergoes rigorous testing by professional athletes'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Complimentary shipping on all orders over ₹4000 worldwide'
    },
    {
      icon: Users,
      title: 'Trusted by Athletes',
      description: 'Worn by professionals in over 50 countries globally'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Superior materials and craftsmanship in every piece'
    },
    {
      icon: RefreshCw,
      title: '30-Day Returns',
      description: 'Not satisfied? Return any item within 30 days for free'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Join millions of athletes worldwide in the LegionXGear family'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Why Choose <span className="text-red-600">LegionXGear</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another sports brand. We're a community of athletes dedicated to pushing limits and achieving greatness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-red-100 group-hover:bg-red-600 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center transition-all duration-300">
                <feature.icon className="h-10 w-10 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 bg-gray-900 rounded-3xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">1M+</div>
              <div className="text-gray-400">Happy Athletes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">50+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">4.9★</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;