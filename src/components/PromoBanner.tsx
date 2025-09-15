import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

const PromoBanner: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-red-500 mr-2" />
              <span className="text-red-500 font-semibold uppercase tracking-wide">Limited Time</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Summer Training
              <span className="block text-red-500">Collection</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 max-w-lg">
              Beat the heat with our latest moisture-wicking, breathable performance wear. 
              Designed for champions, built for comfort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/shop"
                className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/collections"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                View Lookbook
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Summer Training Collection"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              
              {/* Floating Discount Badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 rounded-full p-4 shadow-lg animate-pulse">
                <div className="text-center">
                  <div className="text-2xl font-black">20%</div>
                  <div className="text-xs font-semibold">OFF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;