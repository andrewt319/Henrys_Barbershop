import React from 'react';
import ReviewsForm from './ReviewsForm';
import ReviewsCarousel from './ReviewsCarousel';
import './ReviewsContainer.css';

const ReviewsContainer = () => {
    return (
        <div className='reviews-container'>
            <div class="reviews-heading">
                <h1>Comments from our customers!</h1>
            </div>
            <ReviewsCarousel />
            <ReviewsForm />
        </div>
    )
}

export default ReviewsContainer;