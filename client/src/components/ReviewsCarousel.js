import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../actions/reviews'
import './ReviewsCarousel.css';
import ReviewsCard from './ReviewsCard';
import { IoIosArrowBack , IoIosArrowForward } from 'react-icons/io';

const ReviewsCarousel = () => {
    const reviews = useSelector((state) => state.reviews);
    const [current, setCurrent] = useState(0);
    const [length, setLength] = useState(reviews.length);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews());
        setLength(reviews.length);
        setCurrent(reviews.length - 1);
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
                {reviews.map((review, index) => {
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