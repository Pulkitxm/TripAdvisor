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

import ProtectedRoute from './components/ProtectedRoute'

//auth
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import { UserAuthContextProvider } from './context/UserAuthContext';
// import Forgot from './Auth/Forgot'

const App = () => {
  return (
    <div className='main' >
      <Router>
        <UserAuthContextProvider>
          <Ham />
          <Routes>
            <Route path="/" element={
                                      <ProtectedRoute> 
                                        <Start />
                                      </ProtectedRoute>
                                    }/>
            <Route path="/login" element={
                                      <ProtectedRoute> 
                                        <Login />
                                      </ProtectedRoute>
                                    }/>
            <Route path="/signup" element={
                                      <ProtectedRoute> 
                                        <Signup />
                                      </ProtectedRoute>
                                    }/>
            {/* <Route path="/forgot" element={<Forgot />} /> */}
            <Route path="/home" element={
                                          <ProtectedRoute> 
                                            <Home />
                                          </ProtectedRoute>} 
                                        />
            <Route path="/explore" element={
                                          <ProtectedRoute> 
                                            <Explore />
                                          </ProtectedRoute>} 
                                        />
            <Route path="/plan" element={
                                          <ProtectedRoute> 
                                            <PlanATrip />
                                          </ProtectedRoute>} 
                                        />
            <Route path="/account" element={
                                          <ProtectedRoute> 
                                            <Account />
                                          </ProtectedRoute>} 
                                        />
            <Route path='*' element={
                                          <ProtectedRoute> 
                                            <NotFound />
                                          </ProtectedRoute>} 
                                        />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
};

export default App;
