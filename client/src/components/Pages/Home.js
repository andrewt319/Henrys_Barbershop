import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import ReviewsContainer from '../ReviewsContainer';
import BookNow from './BookNow';
import AboutUsContainer from '../AboutUsContainer'
import Footer from '../Footer';

function Home({ id }) {
  return (
    <>
      <HeroSection id={id}/>

      { /*
      <Cards />
      <ReviewsContainer />
      <BookNow />
      <AboutUsContainer id="about-us-home"/>
      <Footer /> 
  */ }
    </>
  );
}

export default Home;
