import React from 'react'
import './Start.css'
import Navbar from '../components/Navbar'

import logo from '../assets/logo.png'

const Start = () => {
    return (
        <div className='home' >
            <div className="top-logo">
                <div className="content">
                    <img src={logo} alt="" draggable='false' />
                    &nbsp;
                    TripPlanner
                </div>
            </div>
            <Navbar page={'home'} />

        </div>
    )
}

export default Start