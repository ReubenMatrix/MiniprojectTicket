import React from 'react'
import './Hotel.css'
import Navigation from '../../components/navbar/Navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const Hotel = () => {

    
   
    const photos = [
        { src: 'https://images.unsplash.com/photo-1524229648276-e66561fe45a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80' },
        { src: 'https://plus.unsplash.com/premium_photo-1661906030622-5fa07173129c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
        { src: 'https://images.unsplash.com/photo-1524229648276-e66561fe45a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80' },
        { src: 'https://images.unsplash.com/photo-1524229648276-e66561fe45a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80' },
        { src: 'https://plus.unsplash.com/premium_photo-1661906030622-5fa07173129c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
        { src: 'https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
        
        // Add more photo objects as needed
    ];


  return (
    <div>
    <Navigation/>
    <header type='list'/>
    <div className='hotelContainer'>
        <div className='hotelWrapper'>
        <button className='bookNow'>Reverse or Book Now!</button>
            <h1 className='hotelTitle'>Taj Mahal</h1>
            <div className='hotelAddress'>
                <FontAwesomeIcon icon={faLocationDot}/>
                <span>Elton St 125 New York</span>
            </div>
            <span className='hotelDistance'>
                Excellent location - 500m from center
            </span>
            <span className='hotelPriceHighlight'>
                Book a stay 
            </span>
            <div className='hotelImages'>
                {photos.map(photo=>(
                    <div className='hotelImgWrapper'>
                    <img  src={photo.src} alt='' className='hotelImg'/>
                    </div>
                ))}
            </div>
            <div className='hotelDetails'>
                <div className='hotelDetailsTexts'>
                    <h1 className='hotelTitle'>Stay in the heart of India</h1>
                    <p className='hotelDesc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec malesuada nunc. Integer viverra bibendum erat, ac sollicitudin arcu congue sit amet. 
                    Nulla nec libero a odio luctus laoreet eget sed mauris. Sed vitae tortor lorem. 
                    Suspendisse vestibulum nec erat et ullamcorper. Sed id fringilla sapien. Aliquam tristique, velit eget vehicula facilisis, metus orci fermentum libero, nec varius quam eros quis quam. Cras a sapien quam. 
                    Nunc in lectus ultrices, sodales neque non, elementum purus. Quisque congue, odio eget malesuada gravida, velit metus bibendum metus, vel interdum libero dolor sit amet nisl. Praesent bibendum quam sit amet dictum. 
                    Vivamus suscipit, dui at egestas sollicitudin, sapien odio condimentum leo, in euismod risus ex a elit. Suspendisse potenti. 
                    </p>
                </div>
                <div className='hotelDetailsPrice'>
                    <h1>Perfect for 3 night stay</h1>
                    <span>
                        located in the hart of india and has excellent location score
                    </span>
                    <h2>
                        <b>$900</b>(5 nights)
                    </h2>
                    <button>Reserve or Book Now!</button>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Hotel
