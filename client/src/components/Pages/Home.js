import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import ReviewsCarousel from '../ReviewsCarousel';
import ReviewsForm from '../ReviewsForm';
import ReviewsContainer from '../ReviewsContainer'
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ReviewsContainer />
      <Footer />
    </>
  );
}

export default Home;
