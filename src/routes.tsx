import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Logon from './pages/Logon';
import SignUp from './pages/Signup';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Logon} path="/" exact />
            <Route component={SignUp} path="/new" />
            <Route component={Home} path="/home"  />
        </BrowserRouter>
    )
    
}

export default Routes;