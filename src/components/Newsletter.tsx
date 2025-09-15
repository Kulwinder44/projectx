import React, { useState } from 'react';
import { Mail, Gift, ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing! Check your email for your 10% discount code.');
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Gift className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Join the <span className="text-yellow-400">Legion</span>
          </h2>
          
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get exclusive access to new drops, athlete insights, and special discounts. 
            Plus, score 10% off your first order!
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-0 focus:ring-4 focus:ring-white/30 text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="group bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-red-100">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span>Exclusive member discounts</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span>Early access to new collections</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span>Athlete training tips</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;