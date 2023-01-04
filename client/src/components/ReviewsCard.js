import React from 'react';

import './ReviewsCard.css';

const ReviewsCard = ({ name, username, rating, review }) => {
    const numFilledStars = Array(rating).fill(0);
    const numEmptyStars = Array(5 - rating).fill(0);

    //const numFilledStars = Array.from(Array(rating).keys());
    //const numEmptyStars = Array.from(Array(5 - rating).keys());
  
    return (
        <div class="reviews-box-container">
            <div class="box-top">
                <div class="profile">
                    <div class="username">
                        <strong>{name}</strong>
                        <span>{username}</span>
                    </div>
                </div>
                <div class="review-stars">
                    {numFilledStars.map((star, index) => {
                        return <i key={index} class="fas fa-star"></i>
                    })}
                    {numEmptyStars.map((star, index) => {
                        return <i key={index} class="far fa-star"></i> 
                    })}
                </div>
            </div>
            <div class="client-comment">
                <p>{review}</p>
            </div>
        </div>
    )
}

export default ReviewsCard;