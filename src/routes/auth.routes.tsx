import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Bag from '../pages/Bag';

const AuthRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/home" />
            <Route component={Profile} path="/profile" />
            <Route component={Bag} path="/bag" />
        </BrowserRouter>
    )
    
}

export default AuthRoutes;