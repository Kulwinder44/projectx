import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import BestSellers from '../components/BestSellers';
import PromoBanner from '../components/PromoBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <PromoBanner />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;