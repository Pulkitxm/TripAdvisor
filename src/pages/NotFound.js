import React from 'react';

import _404 from '../assets/404.gif'
import './notfound.css'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar';
const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(10%)' }}
      animate={{
        opacity: 1,
        transform: 'translateY(0px)',
        // Add a bounce animation to the translateY property
        motion: {
          staggerChildren: 0.2,
          bounce: {
            duration: 0.5,
            easing: 'ease-in-out',
          },
        },
      }}
      exit={{ opacity: 0, transform: 'translateY(10%)' }}
    >
      <div className="not-found-container">
        <h1 className="not-found-heading">404 - Page Not Found</h1>
        <p className="not-found-description">
          Oops! The page you are looking for does not exist.
        </p>
        <img
          src={_404}
          alt="Page Not Found"
          className="not-found-image"
        />
        <p className="not-found-back-link">
          <a href="/">Go back to the home page</a>
        </p>
      </div>
      <Navbar page={'notFound'} />
    </motion.div>
  );
};

export default NotFound;