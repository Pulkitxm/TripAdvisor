import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa'; // Import the heart icon from react-icons

import taxi from '../assets/taxi.png';
import holiday from '../assets/holiday.png';
import hotel from '../assets/hotel.png';
import plane from '../assets/plane.png';
import ship from '../assets/ship.png';
import ticket from '../assets/ticket.png';

import china from '../assets/china.jpg'
import machu_pichu from '../assets/machu-pichu.jpg'
import taj_mahal from '../assets/taj-mahal.jpg'
import colosseum from '../assets/Colosseum.jpg'
import canyon from '../assets/canyon.jpg'
import reef from '../assets/reef.jpg'


const Home = () => {
  const Card_sm = ({ text, img, size }) => {
    return (
      <div className='card_sm'>
        <img src={img} style={{ width: size + 'em' }} alt="" />
        <br />
        {text}
      </div>
    );
  };

  const Card_lg = ({ text1, text2, img }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    // Click event handler to toggle the favorite status
    const handleFavoriteClick = () => {
      setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    };

    return (
      <div className='card_lg' style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${img})`, backgroundSize:'cover'}} >
        <div className="span">
          <span
            style={{ color: isFavorite ? 'red' : 'white' }}
            onClick={handleFavoriteClick}
          >
            <FaHeart /> {/* Use the heart icon from react-icons */}
          </span>
        </div>
        {/* <img src={img} style={{ width: '120px', height: '120px' }} alt="" /> */}
        <h6 className='darkp'>{text1}</h6>
        <h6 className='lightp'>{text2}</h6>
      </div>
    );
  };

  return (
    <div className='home'>
      <div className="top">
        <p><h3>Current Location</h3></p>
        <p><h5>Delhi, India</h5></p>
      </div>

      <div className="sm_cards">
        <Card_sm img={taxi} text={"Taxi"} size={4} />
        <Card_sm img={holiday} text={"Holiday"} size={2} />
        <Card_sm img={hotel} text={"Hotel"} size={3} />
        <Card_sm img={plane} text={"Plane"} size={3} />
        <Card_sm img={ship} text={"Ship"} size={3} />
        <Card_sm img={ticket} text={"Ticket"} size={2} />
      </div>

      <div className="lower">
        <p>Popular in city</p>
        <div className="lg_cards">
          <Card_lg img={china} text1={"The Great Wall of China"} text2={"Northern China"} />
          <Card_lg img={machu_pichu} text1={"Machu Picchu"} text2={"Andes Mountains of Peru"} />
          <Card_lg img={taj_mahal} text1={"Taj Mahal"} text2={"Agra,India"} />
          <Card_lg img={colosseum} text1={"The Colosseum"} text2={"Rome, Italy"} />
          <Card_lg img={canyon} text1={"The Grand Canyon"} text2={" southwestern United States"} />
          <Card_lg img={reef} text1={"The Great Barrier Reef"} text2={"Queensland, Australia"} />
        </div>
      </div>

      <Navbar page={'home'} />
    </div>
  );
};

export default Home;
