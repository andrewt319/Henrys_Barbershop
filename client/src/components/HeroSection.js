import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection({ id }) {
  return (
    <div id={id} className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>HENRY'S BARBERSHOP</h1>
      <p>Rediscover Confidence</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BOOK NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
