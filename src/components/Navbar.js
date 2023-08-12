import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link,useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import g_logo from '../assets/google.png'
import { useUserAuth } from '../context/UserAuthContext'
import { Alert } from 'react-bootstrap';
import CustomModal from './Modal'
const Navbar = ({ page }) => {

  //siguphandlers
  const [signup_email, ChangeEmail_signup] = useState('');
  const [signup_pass, ChangePass_signup] = useState('');
  const [signup_repass, ChangeRePass_signup] = useState('');
  const [modal_content, Change_modal_content] = useState('')
  // const [error, Seterror] = useState('');
  const [show, setShow] = useState(false);

  const [show_signup_Modal, setShow_signup_Modal] = useState(false);

  const handle_signup_CloseModal = () => setShow_signup_Modal(false);
  const handle_signup_ShowModal = () => setShow_signup_Modal(true);
  let signup_modalBody = '';
  const showModalError = (err) => {
    Change_modal_content(err);
    handle_signup_ShowModal();
  };

  // const showError = (err) => {
  //   Seterror('Enter correct credentials');
  //   setTimeout(() => {
  //     Seterror('');
  //   }, 3000);
  // };
  const calculatePasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 5) {
      score += 1;
    }
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    if (hasUppercase) {
      score += 1;
    }
    if (hasLowercase) {
      score += 1;
    }
    if (hasDigit) {
      score += 1;
    }
    if (hasSpecialChar) {
      score += 4;
    }
    if (hasUppercase && hasLowercase && hasDigit && hasSpecialChar) {
      score += 2;
    }
    return score;
  };
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const isFormValid_siginup = (signup_email !== '' && signup_pass !== '') && signup_pass === signup_repass;
  const handleSignup = async () => {
    if (isFormValid_siginup) {
      try {
        await signUp(signup_email, signup_pass);
        navigate('/login');
      } catch (err) {
        showModalError(err.message);
        console.log(err);
      }
    } else {
      showModalError("The credentials provided are incorrectly formatted.");
    }
    
  };
  const updateRemark = () => {
    const p = document.getElementById('remark');
    const passwordStrengthScore = calculatePasswordStrength(signup_pass);

    if (passwordStrengthScore < 4) {
      p.innerText = 'Weak';
      p.style.color = 'red';
    } else if (passwordStrengthScore >= 4 && passwordStrengthScore < 6) {
      p.innerText = 'Moderate';
      p.style.color = '#00ccff';
    } else {
      p.innerText = 'Strong';
      p.style.color = 'green';
    }
  };

  //sigin handlers
  const [signin_email, ChangeEmail_sigin] = useState('');
  const [signin_pass, ChangePass_sigin] = useState('');
  const [signin_active, Change_Sigin_active] = useState(false);
  const isFormValid_siginin = signin_email !== '' && signin_pass !== '';
  const handleSigin = () => {
    if (isFormValid_siginin) {
      console.log("Email", signin_email);
      console.log("Password", signin_pass);
    } else {
      console.log("enter something first");
    }
  };



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
        <CustomModal
          show={show_signup_Modal}
          handleClose={handle_signup_CloseModal}
          bodyContent={modal_content}
          Color="red"
        />
        <div className="content">
          <div className="head">
            Let's Start with a quick Sign-up
          </div>
          {/* {error && <Alert variant='danger' >{error}</Alert>} */}
          <form className='signup-form'>
            <input type="text" id='Email' placeholder='Email' value={signup_email} onChange={(e) => ChangeEmail_signup(e.target.value)} />
            <input type="password" id='Password' placeholder='Password' value={signup_pass} onChange={(e) => {
              ChangePass_signup(e.target.value);
              updateRemark();
            }} />
            <input type="password" id='Re-type-Password' placeholder='Re-Enter Password' value={signup_repass} onChange={(e) => ChangeRePass_signup(e.target.value)} />
            <div className="remark-pass" style={{ textAlign: 'center' }}>Password Strength - <p id='remark' style={{ display: 'inline', color: 'red' }} >Weak</p></div>
            <div>
              <div className="btn" style={(!isFormValid_siginup) ? { backgroundColor: 'rgb(156 156 156)' } : { backgroundColor: '#fff' }} onClick={handleSignup} >
                Sign-Up
              </div>
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
            Happy to have you back! <br /> Let's get you a quick login
          </div>
          <form className='signin-form'>
            <input type="text" id='Email' value={signin_email} onChange={(e) => ChangeEmail_sigin(e.target.value)} placeholder='Email' />
            <input type="password" id='Password' value={signin_pass} onChange={(e) => ChangePass_sigin(e.target.value)} placeholder='Password' />
            <div>
              <div className="btn" id='sigin' onClick={handleSigin} style={(!isFormValid_siginin) ? { backgroundColor: 'rgb(156 156 156)' } : { backgroundColor: '#fff' }} >
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