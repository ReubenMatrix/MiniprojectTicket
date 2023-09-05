import React from 'react'
import './MailList.css'
import Footer from '../footer/Footer'


const MailList = () => {
  return (
    

    <div className='mail'>
    <h1 className='mailTitle'>Save time, save money!</h1>
    <span className='mailDesc'>Sign up and we'll notify you</span>
    <div className='mailInputContainer'>
      <input type='text' placeholder='Your Email'/>
      <button>Subsribe</button>
    </div>
    <div className='footersec'>
      <Footer/>
    </div>
    
    </div>
  
  )
}

export default MailList
