import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Landing from './pages/Landing';
import Logon from './pages/Logon';
import Profile from './pages/Profile';
import SignUp from './pages/Signup';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Landing} path="/" exact />
            <Route component={Logon} path="/login" />
            <Route component={SignUp} path="/new" />
            <Route component={Home} path="/home" />
            <Route component={Profile} path="/profile" />
        </BrowserRouter>
    )
    
}

export default Routes;