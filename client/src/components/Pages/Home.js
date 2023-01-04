import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import ReviewsContainer from '../ReviewsContainer';
import BookNow from './BookNow';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ReviewsContainer />
      <BookNow />
      <Footer />
    </>
  );
}

export default Home;
