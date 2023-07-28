import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

import right from '../assets/right.png' 

const Navbar = ({page}) => {
  if (page==='home'){
    return (
      <motion.div
      className='nav-home'
        initial={{transform: 'translateY(100%)' }}
        animate={{
          transform: 'translateY(-25%)',
          
        }}
        exit={{ opacity: 0, transform: 'translateY(-100%)' }}
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
            <Link to='/account' >
              <div className="btn">
                Create an Account
              </div>
            </Link>
            {/* <div className="rightarr">
              <img src={right} alt="" />
            </div> */}
          </div>

          <Link to='/account' >
            <div className="already">
              Already have an account ?
            </div>    
          </Link>

        </div>
      </motion.div>
    )
  }
  else if (page==='explore'){
    return (
      <motion.div
        className='nav-home'
        initial={{ transform: 'translateY(100%)' }}
        animate={{
          transform: 'translateY(-20%)',

        }}
        exit={{ opacity: 0, transform: 'translateY(-100%)' }}
      >
        <div className="content">
          Explore
          <Link to='/' >Home</Link>
        </div>
      </motion.div>
    )
  }
  else if (page==='plan'){
    return (
      <motion.div
        className='nav-home'
        initial={{ transform: 'translateY(100%)' }}
        animate={{
          transform: 'translateY(-20%)',

        }}
        exit={{ opacity: 0, transform: 'translateY(-100%)' }}
      >
        <div className="content">
          Explore
          <Link to='/' >Home</Link>
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
          transform: 'translateY(-20%)',

        }}
        exit={{ opacity: 0, transform: 'translateY(-100%)' }}
      >
        <div className="content">
          Explore
          <Link to='/' >Home</Link>
        </div>
      </motion.div>
    )
  }
}

export default Navbar