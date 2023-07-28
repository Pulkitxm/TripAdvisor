import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

import right from '../assets/right.png' 

const Navbar = ({page}) => {
  if (page==='start'){
    return (
      <motion.div
      className='nav-start'
        initial={{transform: 'translateY(100%)' }}
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
            <Link to='/home' >
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
  else if (page==='home'){
    return (
      <motion.div
      className='nav-home'
        initial={{transform: 'translateY(100%)' }}
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
  else if (page==='explore'){
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
  else if (page==='plan'){
    return (
      <motion.div
      className='nav-home'
        initial={{transform: 'translateY(100%)' }}
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
  else if (page==='account'){
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