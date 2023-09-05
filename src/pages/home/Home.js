import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

import './Home.css'

import MailList from '../../components/maillist/MailList'
import Tickets from '../../components/tickets/Tickets'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Tickets/> 
      
      <MailList/>  
    </div>
  )
}

export default Home

