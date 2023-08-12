import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
const ProtectedRoute = ({ children }) => {
    const user = useUserAuth();
    console.log(user);
    const loc = window.location.href.split('/')[window.location.href.split('/').length - 1];
    if (!user.user) {
        if (loc !== '' && loc !== 'login' && loc !== 'signup') {
            return <Navigate to="/" />;
        }
    }else{
        if (loc == 'signup' && loc !== 'login') {
            return <Navigate to="/home" />;
        }
    }
    return children;
};
export default ProtectedRoute;