import React from 'react';
import './Account.css';
import Navbar from '../components/Navbar';
import { useUserAuth } from '../context/UserAuthContext';
import { Navigate } from 'react-router-dom';
const Account = () => {
  const {user,logOut} = useUserAuth();
  const handleSignOut = async () =>{
    <Navigate to='/' />
    await logOut();
  }
  return(
    <div className='account'>
      <div className="main">
        <div className="login">
          Hello there!<br/>{user.email}
        </div>
        <div className="logout" onClick={handleSignOut}>LogOut</div>
      </div>
      <Navbar page={'account'} />
    </div>
  )  
}

export default Account;
