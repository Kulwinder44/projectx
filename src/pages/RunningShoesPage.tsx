import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Star, Zap, Mountain, Timer } from 'lucide-react';
import { runningShoes } from '../data/runningShoes';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const RunningShoesPage: React.FC = () => {
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

  const handleWishlistToggle = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-black/80 to-black/40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-black text-white mb-4">
              Pro Runner <span className="text-red-500">Elite Collection</span>
            </h1>
            <p className="text-xl text-gray-200">
              Premium running shoes engineered for peak performance on any terrain
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/shop" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Advanced cushioning technology for explosive speed</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Mountain className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">All Terrain</h3>
            <p className="text-gray-600">Superior grip and stability on any surface</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Timer className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Endurance Built</h3>
            <p className="text-gray-600">Engineered for long-distance comfort and durability</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Elite Running Shoes Collection
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our premium collection of 6 elite running shoes, each designed for specific running styles and terrains.
          </p>
        </div>

        {/* Shoes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {runningShoes.map((shoe) => (
            <div
              key={shoe.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Link to={`/product/${shoe.id}`}>
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
                
                {shoe.badge && (
                  <span className={`absolute top-3 left-3 ${getBadgeColor(shoe.badge)} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                    {shoe.badge}
                  </span>
                )}
                
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleWishlistToggle(shoe)}
                    className={`p-2 rounded-full shadow-md transition-colors ${
                      isInWishlist(shoe.id)
                        ? 'bg-red-600 text-white'
                        : 'bg-white hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => addToCart(shoe)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <Link to={`/product/${shoe.id}`}>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-red-600 transition-colors">
                    {shoe.name}
                  </h3>
                </Link>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(shoe.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">({shoe.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">₹{shoe.price.toLocaleString()}</span>
                    {shoe.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">₹{shoe.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <p>• Advanced cushioning technology</p>
                  <p>• Breathable mesh upper</p>
                  <p>• Superior traction outsole</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">
            Pro Runner <span className="text-red-600">Technology</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <span><strong>React Foam Midsole:</strong> Maximum energy return with every step</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <span><strong>Flyknit Upper:</strong> Lightweight, breathable, and adaptive fit</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <span><strong>Carbon Fiber Plate:</strong> Propulsive feel for faster times</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <span><strong>All-Weather Grip:</strong> Superior traction in any condition</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <span><strong>Reduced Impact:</strong> 40% less stress on joints</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <span><strong>Enhanced Speed:</strong> Up to 4% improvement in running efficiency</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <span><strong>Extended Comfort:</strong> Designed for runs up to marathon distance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <span><strong>Durability:</strong> 500+ mile lifespan with proper care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningShoesPage;