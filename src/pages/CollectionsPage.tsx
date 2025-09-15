import React from 'react';
import { Link } from 'react-router-dom';
import { featuredCategories } from '../data/products';

const CollectionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-4">
            Our <span className="text-red-600">Collections</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our complete range of performance collections, each designed for specific sports and activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div 
                className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-red-600/80 transition-all duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="text-center">
                  <h3 className="text-white font-bold text-2xl mb-2">{category.name}</h3>
                  <p className="text-gray-200 text-lg group-hover:text-white transition-colors mb-4">
                    {category.tagline}
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 group-hover:bg-red-600/80 transition-all duration-300">
                    <span className="text-white font-semibold">Shop Now</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;