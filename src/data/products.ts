import { Product, Category } from '../types';

export const featuredCategories: Category[] = [
  {
    id: 'running',
    name: 'Running Gear',
    image: 'https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Mile after mile',
    icon: 'Zap'
  },
  {
    id: 'gym',
    name: 'Gym Wear',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Strength & power',
    icon: 'Dumbbell'
  },
  {
    id: 'football',
    name: 'Football',
    image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Champion gear',
    icon: 'Trophy'
  },
  {
    id: 'yoga',
    name: 'Yoga',
    image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Mind & body',
    icon: 'Heart'
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Adventure calls',
    icon: 'Mountain'
  }
];

export const bestSellers: Product[] = [
  {
    id: '1',
    name: 'Pro Runner Elite Shoes',
    price: 8750,
    originalPrice: 11990,
    image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Running',
    badge: 'Hot',
    rating: 4.8,
    reviews: 234
  },
  {
    id: '2',
    name: 'Performance Training Shorts',
    price: 3150,
    image: 'https://images.pexels.com/photos/7242896/pexels-photo-7242896.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Gym',
    badge: 'New',
    rating: 4.9,
    reviews: 187
  },
  {
    id: '3',
    name: 'Legion Track Jacket',
    price: 7400,
    originalPrice: 9990,
    image: 'https://images.pexels.com/photos/7242896/pexels-photo-7242896.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Outdoor',
    badge: 'Limited Edition',
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Flex Yoga Leggings',
    price: 4325,
    image: 'https://images.pexels.com/photos/8436741/pexels-photo-8436741.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Yoga',
    rating: 4.9,
    reviews: 298
  },
  {
    id: '5',
    name: 'Victory Football Jersey',
    price: 5400,
    image: 'https://images.pexels.com/photos/8032925/pexels-photo-8032925.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Football',
    badge: 'New',
    rating: 4.6,
    reviews: 89
  },
  {
    id: '6',
    name: 'Power Compression Tank',
    price: 3500,
    originalPrice: 4575,
    image: 'https://images.pexels.com/photos/8436741/pexels-photo-8436741.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Gym',
    rating: 4.8,
    reviews: 203
  }
];