import React from 'react';

import { FiShoppingBag, FiUser, FiSearch } from 'react-icons/fi';

import './style.css'
import logo from '../../assets/logo-2.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="profile">
                    <FiUser/>
                </div>
                <div className="handbag">
                    <FiShoppingBag/>
                </div>
            </div>
            <div className="store-info">
                <img src={logo} alt="logo" />
                <h2 className="title">Paloma Variedades</h2>
                <span className="city">Juazeiro do Norte - CE</span>
            </div>
            <div className="search-field">
                <input type="text" placeholder='Pesquisar' />
                <FiSearch/>
            </div>
        </div>
    )
}

export default Header;
