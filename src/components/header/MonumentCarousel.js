import React from 'react';
import './Header.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MonumentCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      stopOnHover={false}
      className='carousel'
    >
      <div>
        <img src="https://images.unsplash.com/photo-1603804995518-fff3be6f4c58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80" alt="Monument 1" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1543429776-2782fc8e1acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Monument 2" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80" alt="Monument 3" />
      </div>
      
    </Carousel>
  );
};

export default MonumentCarousel;
