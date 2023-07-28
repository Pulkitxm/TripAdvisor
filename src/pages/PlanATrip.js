import Navbar from '../components/Navbar'
import React, { useState } from "react";
import "./Plan.css"; // Import the CSS file

import img from '../assets/Colosseum.jpg'

const Plan = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  const handleMouseMove = (event) => {
    if (isMouseDown) {
      const dx = mouseX - event.clientX;
      setMouseX(event.clientX);
      setScrollX((prevScrollX) => prevScrollX + dx);
      document.querySelector(".scroll-container").scrollLeft += dx;
    }
  };

  const Card = ({ img, head, desc, dist }) => {
    return (
      <div className='card-plan'>
        <div className='img' >
          <img src={img} alt="" />
        </div>
        <h3 className='head'>{head}</h3>
        <p className='desc'>{desc}</p>
        <p className='dist'>{dist}</p>
      </div>
    );
  };

  return (
    <div
      className="explore"
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      onMouseLeave={() => setIsMouseDown(false)}
      onMouseMove={handleMouseMove}
    >

      <Navbar page={'explore'} />
    </div>
  );
};

export default Plan;
