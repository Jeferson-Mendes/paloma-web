import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Landing from '../pages/Landing';
import Logon from '../pages/Logon';
import Bag from '../pages/Bag';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route component={Landing} path="/" exact />
            <Route component={Logon} path="/login" />
            <Route component={Home} path="/home" />
            <Route component={Bag} path="/bag" />

        </BrowserRouter>
    )
    
}

export default AppRoutes;