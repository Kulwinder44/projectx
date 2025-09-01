import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Promo Bar */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-medium">
        🔥 FREE SHIPPING ON ORDERS OVER $50 | LIMITED TIME: 20% OFF NEW COLLECTION
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Legion<span className="text-red-600">X</span>Gear
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Shop</a>
            <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Collections</a>
            <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">About Us</a>
            <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors relative">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </button>
            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </button>
            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
              <User className="h-6 w-6" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Shop</a>
              <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Collections</a>
              <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">About Us</a>
              <a href="#" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;