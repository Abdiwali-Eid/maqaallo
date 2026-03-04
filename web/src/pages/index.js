import React from 'react';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import TopCategories from '../components/homePage/TopCategories';
import SEO from '../components/seo';
import TopAuthors from '../components/homePage/TopAuthors';

const IndexPage = () => (
  <>
    <SEO />
    <HeroSection />
    <div className="container">
      <TopCategories />
      <FeaturedBlogs />
      <TopAuthors />
    </div>
  </>
);

export default IndexPage;
