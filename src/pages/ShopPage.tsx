import React, { useState } from 'react';
import { Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';
import { bestSellers, featuredCategories } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const filteredProducts = bestSellers.filter(product => 
    selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return 0;
    }
  });

  const handleWishlistToggle = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'New': return 'bg-green-500';
      case 'Hot': return 'bg-red-500';
      case 'Limited Edition': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-4">
            Shop <span className="text-red-600">Collection</span>
          </h1>
          <p className="text-xl text-gray-600">
            Discover our complete range of performance athletic wear
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Categories</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block w-full text-left px-3 py-2 rounded ${
                      selectedCategory === 'all' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
                    }`}
                  >
                    All Products
                  </button>
                  {featuredCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded ${
                        selectedCategory === category.id ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="font-semibold mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* View Controls */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {sortedProducts.length} products
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Products */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48' : ''}`}>
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`object-cover transition-transform duration-300 group-hover:scale-110 ${
                          viewMode === 'list' ? 'w-48 h-48' : 'w-full h-64'
                        }`}
                      />
                    </Link>
                    
                    {product.badge && (
                      <span className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                        {product.badge}
                      </span>
                    )}
                    
                    <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => handleWishlistToggle(product)}
                        className={`p-2 rounded-full shadow-md transition-colors ${
                          isInWishlist(product.id)
                            ? 'bg-red-600 text-white'
                            : 'bg-white hover:bg-red-600 hover:text-white'
                        }`}
                      >
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4 flex-1">
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
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;