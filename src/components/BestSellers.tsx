import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, ArrowLeft, ArrowRight } from 'lucide-react';
import { bestSellers } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const BestSellers: React.FC = () => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'New': return 'bg-green-500';
      case 'Hot': return 'bg-red-500';
      case 'Limited Edition': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Best <span className="text-red-600">Sellers</span>
            </h2>
            <p className="text-xl text-gray-600">
              Gear that's proven on the field and loved by athletes
            </p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <button className="p-2 rounded-full border border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Badge */}
                {product.badge && (
                  <span className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                    {product.badge}
                  </span>
                )}
                
                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => {
                      if (isInWishlist(product.id)) {
                        removeFromWishlist(product.id);
                      } else {
                        addToWishlist(product);
                      }
                    }}
                    className={`p-2 rounded-full shadow-md transition-colors ${
                      isInWishlist(product.id)
                        ? 'bg-red-600 text-white'
                        : 'bg-white hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                
                {/* Quick Add to Cart */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Quick Add</span>
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  {product.id === '1' ? (
                    <Link to="/running-shoes">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                  ) : (
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  )}
                </Link>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;