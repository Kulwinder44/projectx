import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-black/70 to-black/30 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
              🔥 NEW COLLECTION DROPPED
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Unleash Your
            <span className="block text-red-500">Inner Athlete</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Performance-tested gear that moves with you. From the gym to the track, 
            dominate every workout with LegionXGear.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/category/gym"
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              Shop Men
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/category/yoga"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              Shop Women
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/shop"
              className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              New Arrivals
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-8 text-gray-300">
            <p className="text-sm">✅ Free shipping over ₹4000 | ✅ 30-day returns | ✅ Performance guarantee</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;