import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these haircuts!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/videos/roy.mp4'
              text='The "Executive Cut" - A sophisticated haircut that exudes confidence and professionalism.'
              label='@royyli_'
            />
            <CardItem
              src='/videos/nikhil.mp4'
              text='The "Midnight Oasis" - A mysterious haircut with a dark, shadowy fade and a textured top.'
              label='@nik_kill._'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/videos/huy.mp4'
              text='The "Modern Pompadour" - A contemporary take on the classic pompadour haircut, featuring a slicked-back top and a high fade.'
              label='@huyanguy3n'
            />
            <CardItem
              src='/videos/seshu.mp4'
              text='The "Hipster Fade" - A trendy haircut that features a high fade and a textured top.'
              label='@seshu_mallina'
            />
            <CardItem
              src='/videos/xander.mp4'
              text='The "Artisanal Undercut" - A unique haircut that features a shaved undercut and a textured top styled with a matte product for a natural look.'
              label='@xander_lau'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
