import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';

import Logon from './pages/Logon';
import SignUp from './pages/Signup';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Logon} path="/" exact />
            <Route component={SignUp} path="/new" />
        </BrowserRouter>
    )
    
}

export default Routes;