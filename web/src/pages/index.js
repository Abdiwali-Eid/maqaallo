import React from 'react';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import TopCategories from '../components/homePage/TopCategories';
import SEO from '../components/seo';
import TopAuthors from '../components/homePage/TopAuthors';
import SubscribePoster from '../components/SubscribePoster';
import HomePageStyles from '../styles/HomePageStyles';

const IndexPage = () => (
  <HomePageStyles>
    <SEO />
    <HeroSection />
    <div className="container home-sections">
      <TopCategories />
      <FeaturedBlogs />
      <TopAuthors />
      <SubscribePoster />
    </div>
  </HomePageStyles>
);

export default IndexPage;
