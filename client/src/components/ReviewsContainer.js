import React from 'react';
import ReviewsForm from './ReviewsForm';
import ReviewsCarousel from './ReviewsCarousel';
import './ReviewsContainer.css';

const ReviewsContainer = ({ id }) => {
    return (
        <div className='reviews-container' id={id}>
            <div className="reviews-heading">
                <h1 className="reviews-text">Comments from our customers!</h1>
            </div>
            <ReviewsCarousel />
            <ReviewsForm />
        </div>
    )
}

export default ReviewsContainer;