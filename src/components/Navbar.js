import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { GoogleButton } from 'react-google-button';
import g_logo from '../assets/google.png'
import right from '../assets/right.png'

const Navbar = ({ page }) => {


  if (page === 'start') {
    return (
      <motion.div
        className='nav-start'
        initial={{ transform: 'translateY(100%)' }}
        animate={{
          transform: 'translateY(-25%)',

        }}
        exit={{ opacity: 0, transform: 'translateY(100%)' }}
      >
        <div className="content">
          <div className="head">
            Explore the world now
          </div>
          <div className="sub-head">
            The best travel advisor in 2023
          </div>
          <div className="sub-head">
            Plan your first trip with us
          </div>

          <div>
            <Link to='/signup' >
              <div className="btn">
                Start your journey
              </div>
            </Link>
            {/* <div className="rightarr">
              <img src={right} alt="" />
            </div> */}
          </div>

          <Link to='/account' >
            <div className="already">
              Create an account
            </div>
          </Link>

        </div>
      </motion.div>
    )
  }
  else if (page === 'signup') {
    return (
      <motion.div
        className='nav-signup'
        initial={{ transform: 'translateY(100%)' }}
        animate={{
          transform: 'translateY(-10%)',

        }}
        exit={{ opacity: 0, transform: 'translateY(100%)' }}
      >
        <div className="content">
          <div className="head">
            Let's Start with a quick Sign-up
          </div>
          <form className='signup-form'>
            <input type="text" id='Email' placeholder='Email' />
            <input type="password" id='Password' placeholder='Password'/>
            <input type="password" id='Re-type-Password' placeholder='Re-Enter Password' />
            <div>
              <div className="btn">
                Sign-Up
              </div>
              {/* <div className="rightarr">
              <img src={right} alt="" />
            </div> */}
            </div>
            <div className="or">or</div>
              <div className="g-signup-btn">
                <div className="logo"><img src={g_logo} alt="" /></div>
                <div className="txt">Sign up with Google</div>
              </div>
              
          </form>
          
            <Link to='/login'>
              <div className="already">
                  Already have an account?
              </div>
            </Link>
        </div>
      </motion.div>
    )
  }
  else if (page === 'signin') {
    return (
      <motion.div
        className='nav-signin'
        initial={{ transform: 'translateY(100%)' }}
        animate={{
          transform: 'translateY(-10%)',

        }}
        exit={{ opacity: 0, transform: 'translateY(100%)' }}
      >
        <div className="content">
          <div className="head">
            Happy to have you back! <br/> Let's get you a quick login
          </div>
          <form className='signin-form'>
            <input type="text" id='Email' placeholder='Email' />
            <input type="password" id='Password' placeholder='Password'/>
            <div>
              <div className="btn" >
                Sign-In
              </div>
            </div>
            <div className="or">or</div>
              <div className="g-signin-btn">
                <div className="logo"><img src={g_logo} alt="" /></div>
                <div className="txt">Sign in with Google</div>
              </div>
              
          </form>
          
            <Link to='/signup'>
              <div className="already">
              Create a new account
              </div>
            </Link>
        </div>
      </motion.div>
    )
  }
  else if (page === 'home') {
    return (
      <motion.div
        className='nav-home'
        initial={{ transform: 'translateY(100%)' }}
        animate={{
          transform: 'translateY(0)',

        }}
        exit={{ opacity: 0, transform: 'translateY(-100%)' }}
      >
        <div className="content">
          <div className="search">
            <div className="left">
              <input type="text" placeholder='Search a place' />
            </div>
            <div className="right">
              <span className="material-symbols-outlined">search</span>
            </div>
          </div>
          <div className="icons">
            <Link to={'/home'} >
              <span className="material-symbols-outlined">home</span>
            </Link>
            <Link to={'/explore'} >
              <span className="material-symbols-outlined">explore</span>
            </Link>
            <Link to={'/plan'} >
              <span className="material-symbols-outlined">location_on</span>
            </Link>
            <Link to={'/account'} >
              <span className="material-symbols-outlined">person</span>
            </Link>
          </div>
        </div>
      </motion.div>
    )
  }
  else if (page === 'explore') {
    return (
      <motion.div
        className='nav-explore'
        initial={{ transform: 'translateY(100%)' }}
        animate={{
          transform: 'translateY(0)',

        }}
        exit={{ opacity: 0, transform: 'translateY(-100%)' }}
      >
        <div className="content">
          <div className="search">
            <div className="left">
              <input type="text" placeholder='Search a place' />
            </div>
            <div className="right">
              <span className="material-symbols-outlined">search</span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
  else if (page === 'plan') {
    return (
      <motion.div
        className='nav-home'
        initial={{ transform: 'translateY(100%)' }}
        animate={{
          transform: 'translateY(0)',

        }}
        exit={{ opacity: 0, transform: 'translateY(-100%)' }}
      >
        <div className="content">
          <div className="search">
            <div className="left">
              <input type="text" placeholder='Search a place' />
            </div>
            <div className="right">
              <span className="material-symbols-outlined">search</span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
  else if (page === 'account') {
    return (
      <motion.div
        className='nav-home'
        initial={{ transform: 'translateY(100%)' }}
        animate={{
          transform: 'translateY(0)',

        }}
        exit={{ opacity: 0, transform: 'translateY(-100%)' }}
      >
        <div className="content">
          <div className="search">
            <div className="left">
              <input type="text" placeholder='Search a place' />
            </div>
            <div className="right">
              <span className="material-symbols-outlined">search</span>
            </div>
          </div>
          <div className="icons">
            <Link to={'/home'} >
              <span className="material-symbols-outlined">home</span>
            </Link>
            <Link to={'/explore'} >
              <span className="material-symbols-outlined">explore</span>
            </Link>
            <Link to={'/plan'} >
              <span className="material-symbols-outlined">location_on</span>
            </Link>
            <Link to={'/account'} >
              <span className="material-symbols-outlined">person</span>
            </Link>
          </div>
        </div>
      </motion.div>
    )
  }
}

export default Navbar