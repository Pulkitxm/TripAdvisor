import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';


import Start from './pages/Start'
import Home from './pages/Home'
import Explore from './pages/Explore'
import PlanATrip from './pages/PlanATrip'
import Account from './pages/Account'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <div className='main' >
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
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
