import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../actions/reviews'
import './ReviewsCarousel.css';
import ReviewsCard from './ReviewsCard';
import { IoIosArrowBack , IoIosArrowForward } from 'react-icons/io';

const ReviewsCarousel = () => {
    const andrewReview = {name:"Andrew Tan",
                            username:"@andrewtan._",
                            rating:5,
                            review:"The greatest"}
    const jordanReview = {
                            name:"Jordan",
                            username:"@JP",
                            rating:5,
                            review:"Started getting cuts at Henry’s in 2021; have never gone to another barber since. Best barber in the game…"}
    const reviews = useSelector((state) => state.reviews);
    const defaultReviews = [andrewReview, jordanReview];
    const [current, setCurrent] = useState(0);
    const [length, setLength] = useState(reviews.length !== 0 ? reviews.length : 2);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews());
        setLength(reviews.length !== 0 ? reviews.length : 2);
        setCurrent(reviews.length !== 0 ? reviews.length - 1 : 0);
        //localStorage.setItem('index', reviews.length - 1);
    }, [reviews.length]) 

    /*
    useEffect(() => {
        const index = JSON.parse(localStorage.getItem('index'));
        if (index || index === 0) {
            console.log(index)
            setCurrent(index);
            console.log(current);
        }
    }, [])
    */

    const nextSlide = () => {
        const newIndex = current === length - 1 ? 0 : current + 1
        setCurrent(newIndex);
        //localStorage.setItem('index', newIndex);
    }
    
    const prevSlide = () => {
        const newIndex = current === 0 ? length - 1 : current - 1
        setCurrent(newIndex);
        //localStorage.setItem('index', newIndex);
    }

    return (
        <section id="reviews">
            <section className="slider">
                <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
                {(reviews.length !== 0? reviews : defaultReviews).map((review, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && 
                            <ReviewsCard 
                            name={review.name} 
                            username={review.username}
                            rating={review.rating}
                            review={review.review}/>}
                        </div>
                        );
                    })}
                <IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
            </section>
        </section>
    )
}

export default ReviewsCarousel;