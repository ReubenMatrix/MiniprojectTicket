import React from 'react';
import MonumentCarousel from './MonumentCarousel'; // Import your carousel component

const Header = () => {
  return (
    <div className='header'>
      <MonumentCarousel /> {/* Use the carousel component as the background */}
      <div className='headerContainer'>
        <h1 className='headerTitle'>Explore the World's Treasures with Us</h1>
        <p className='headerDesc'>
          Embark on a journey to uncover the rich history and cultural heritage of the world's most iconic monuments.<br/> Book your tickets now and immerse yourself in the stories they hold.
        </p>
      </div>
    </div>
  );
};

export default Header;
