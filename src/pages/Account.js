import React from 'react';
import './Account.css';
import Navbar from '../components/Navbar';

const Account = () => {
  return(
    <div className='account'>
      <div className="main">
        <div className="login">
          Login
        </div>
      </div>
      <Navbar page={'account'} />
    </div>
  )  
}

export default Account;
