import React from 'react';
import Footer from '../Footer';
import '../../App.css';
import ReviewsContainer from '../ReviewsContainer';

export default function Reviews() {
  return (
    <>
      <h1 className='reviews'>REVIEWS</h1>
      <ReviewsContainer />
      <Footer />
    </>
  )
}
