import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Star } from 'lucide-react';
import { featuredCategories, bestSellers } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const categoryData = featuredCategories.find(cat => cat.id === category);
  const categoryProducts = bestSellers.filter(product => 
    product.category.toLowerCase() === category
  );

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/shop" className="text-red-600 hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${categoryData.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl font-black text-white mb-2">{categoryData.name}</h1>
            <p className="text-xl text-gray-200">{categoryData.tagline}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/shop" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {categoryData.name} Collection
          </h2>
          <p className="text-gray-600">
            Discover our premium {categoryData.name.toLowerCase()} designed for peak performance.
          </p>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No products found in this category.</p>
            <Link to="/shop" className="text-red-600 hover:underline">
              Browse all products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </Link>
                  
                  {product.badge && (
                    <span className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                      {product.badge}
                    </span>
                  )}
                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
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
                      <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case 'New': return 'bg-green-500';
    case 'Hot': return 'bg-red-500';
    case 'Limited Edition': return 'bg-purple-500';
    default: return 'bg-gray-500';
  }
};

export default CategoryPage;