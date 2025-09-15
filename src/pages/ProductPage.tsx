import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, RefreshCw, Shield, ArrowLeft } from 'lucide-react';
import { bestSellers } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const product = bestSellers.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-red-600 hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const images = [product.image, product.image, product.image]; // In real app, multiple product images

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-red-600">Shop</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <Link to="/shop" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    activeImage === index ? 'border-red-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              {product.badge && (
                <span className={`inline-block ${getBadgeColor(product.badge)} text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}>
                  {product.badge}
                </span>
              )}
              <h1 className="text-3xl font-black text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">
                Premium {product.category.toLowerCase()} wear designed for peak performance and comfort.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-green-600 font-medium">
                  You save ₹{(product.originalPrice - product.price).toLocaleString()}
                </p>
              )}
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex space-x-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium ${
                      selectedSize === size
                        ? 'border-red-600 bg-red-600 text-white'
                        : 'border-gray-300 hover:border-red-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:border-red-600"
                >
                  -
                </button>
                <span className="px-4 py-2 border border-gray-300 rounded-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:border-red-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              
              <button
                onClick={handleWishlistToggle}
                className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition-colors ${
                  isInWishlist(product.id)
                    ? 'bg-red-100 text-red-600 border border-red-600'
                    : 'border border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                <Heart className="h-5 w-5" />
                <span>{isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-600">
                <Truck className="h-4 w-4 mr-2" />
                <span>Free shipping on orders over ₹4000</span>
              </div>
              <div className="flex items-center text-gray-600">
                <RefreshCw className="h-4 w-4 mr-2" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Shield className="h-4 w-4 mr-2" />
                <span>Performance guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience unmatched performance with our {product.name}. Crafted from premium moisture-wicking fabric, 
                this piece is designed to keep you comfortable and confident during your most intense workouts. 
                The advanced fabric technology ensures optimal breathability while maintaining durability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Moisture-wicking technology</li>
                <li>• Anti-odor treatment</li>
                <li>• 4-way stretch fabric</li>
                <li>• Flatlock seams for comfort</li>
                <li>• Quick-dry material</li>
                <li>• UV protection</li>
              </ul>
            </div>
          </div>
        </div>
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

export default ProductPage;