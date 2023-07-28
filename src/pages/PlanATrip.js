import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png'
import explore from '../assets/explore.png'

const PlanATrip = () => {
  return (
    <div className='plan' >
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
      <Navbar page={'plan'} />

    </div>
  )
}

export default PlanATrip