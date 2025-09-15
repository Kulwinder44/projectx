import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Dumbbell, Trophy, Heart, Mountain } from 'lucide-react';
import { featuredCategories } from '../data/products';

const iconComponents = {
  Zap,
  Dumbbell,
  Trophy,
  Heart,
  Mountain
};

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Train Like a <span className="text-red-600">Champion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our performance collections designed for every athlete and every sport
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredCategories.map((category) => {
            const IconComponent = iconComponents[category.icon as keyof typeof iconComponents];
            
            return (
              <Link
                to={`/category/${category.id}`}
                key={category.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Background Image */}
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-red-600/80 transition-all duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-red-600/80 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{category.name}</h3>
                    <p className="text-gray-200 text-sm group-hover:text-white transition-colors">{category.tagline}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;