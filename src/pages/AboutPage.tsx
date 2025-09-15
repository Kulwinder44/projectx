import React from 'react';
import { Trophy, Users, Globe, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-black/80 to-black/40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-black text-white mb-4">
              About <span className="text-red-500">LegionXGear</span>
            </h1>
            <p className="text-xl text-gray-200">
              Empowering athletes worldwide with performance-driven apparel since 2015
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At LegionXGear, we believe every athlete deserves gear that performs as hard as they do. 
            We're dedicated to creating premium sports apparel that combines cutting-edge technology 
            with uncompromising style, helping athletes at every level unleash their full potential.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-10 w-10 text-red-600" />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-2">1M+</div>
            <div className="text-gray-600">Happy Athletes</div>
          </div>
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Globe className="h-10 w-10 text-red-600" />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-10 w-10 text-red-600" />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Trophy className="h-10 w-10 text-red-600" />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2015 by a group of passionate athletes, LegionXGear was born from a simple 
                frustration: the lack of truly performance-focused athletic wear that didn't compromise on style.
              </p>
              <p>
                Starting in a small garage in Mumbai, we began designing and testing our first prototypes 
                with local athletes. Word spread quickly about our innovative moisture-wicking fabrics and 
                ergonomic designs that actually improved performance.
              </p>
              <p>
                Today, LegionXGear is trusted by professional athletes, fitness enthusiasts, and weekend 
                warriors across 50+ countries. Every piece we create is still tested by real athletes 
                in real conditions.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="LegionXGear Story"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance First</h3>
              <p className="text-gray-600">
                Every design decision is made with one goal: helping athletes perform better.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Driven</h3>
              <p className="text-gray-600">
                We listen to our athletes and continuously improve based on real feedback.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Promise</h3>
              <p className="text-gray-600">
                Premium materials, expert craftsmanship, and rigorous testing in every product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;