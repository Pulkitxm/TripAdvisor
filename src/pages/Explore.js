import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png'
import explore from '../assets/explore.png'

const Explore = () => {
  return (
    <div className='home' >
      <div className="top-icons">
        <Link to='/explore'>
          <img src={explore} alt="" draggable='false' />
        </Link>
      </div>
      <div className="top-logo">
        <div className="content">
          <img src={logo} alt="" draggable='false' />
          &nbsp;
          TripPlanner
        </div>
      </div>
      <Navbar page={'explore'} />

    </div>
  )
}

export default Explore