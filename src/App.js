import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

//pages
import Start from './pages/Start'
import Home from './pages/Home'
import Explore from './pages/Explore'
import PlanATrip from './pages/PlanATrip'
import Account from './pages/Account'
import NotFound from './pages/NotFound'
import Ham from './components/Ham'


//auth
import Login from './Auth/Login'
import Signup from './Auth/Signup'
// import Forgot from './Auth/Forgot'

const App = () => {
  return (
    <div className='main' >
      <Router>
        <Ham/>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/forgot" element={<Forgot />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/plan" element={<PlanATrip />} />
          <Route path="/account" element={<Account />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
