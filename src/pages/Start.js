import React, { useState } from 'react'
import './Start.css'
import Navbar from '../components/Navbar'

import logo from '../assets/logo.png'

const Start = () => {
    return (
        <div className='start' >
            <div className="top-logo">
                <div className="content">
                    <img src={logo} alt="" draggable='false' />
                    &nbsp;
                    WanderAI
                </div>
            </div>
            <Navbar page={'start'} />

        </div>
    )
}

export default Start