import React from 'react';
import { Instagram, Twitter, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Legion<span className="text-red-600">X</span>Gear
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering athletes worldwide with performance-driven apparel. 
              Join the legion and unleash your potential.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-red-600 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-red-600 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-red-600 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-red-600 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Men's Collection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Women's Collection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3" />
                <span>1-800-LEGION-X</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3" />
                <span>support@legionxgear.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-3 mt-1" />
                <span>123 Athletic Way<br />Sports City, SC 12345</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 LegionXGear. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Secure payments:</span>
              <div className="flex space-x-2">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-blue-600 font-bold text-xs">VISA</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-red-600 font-bold text-xs">MC</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-blue-600 font-bold text-xs">PayPal</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-purple-600 font-bold text-xs">Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;