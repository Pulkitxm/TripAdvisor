import React from 'react'
import './Login.css'
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
      <Navbar page={'signin'} />

    </div>
  )
}

export default Start