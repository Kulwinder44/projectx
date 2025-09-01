export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: 'New' | 'Hot' | 'Limited Edition';
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  tagline: string;
  icon: string;
}