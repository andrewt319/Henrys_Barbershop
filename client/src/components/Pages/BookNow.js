import React from 'react';
import { InlineWidget } from "react-calendly";
import Footer from '../Footer';
import '../../App.css';

export default function BookNow() {
  return (
    <>
      <h1 className='book-now'>
        BOOK NOW
        <span>Can't find a time that works? Direct message  @Henrysbarbershop on Instagram.</span>
        <InlineWidget
          url="https://calendly.com/rigycuts/haircut"
          styles={{
            height: '1000px',
            width: '80vw'
          }}
        />

      </h1>
    </>
  )
}
