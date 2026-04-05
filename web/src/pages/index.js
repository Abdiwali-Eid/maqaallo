import React from 'react';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import TopCategories from '../components/homePage/TopCategories';
import SEO from '../components/seo';
import TopAuthors from '../components/homePage/TopAuthors';
import SubscribePoster from '../components/SubscribePoster';

const IndexPage = () => (
  <>
    <SEO />
    <HeroSection />
    <div className="container">
      <TopCategories />
      <FeaturedBlogs />
      <TopAuthors />
      <SubscribePoster />
    </div>
  </>
);

export default IndexPage;
