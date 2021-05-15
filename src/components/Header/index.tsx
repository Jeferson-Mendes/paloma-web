import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { Search, AccountCircleOutlined, LocalMallOutlined } from '@material-ui/icons';

import './style.css'
import logo from '../../assets/logo-2.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="profile">
                    <AccountCircleOutlined style={{fontSize:"3rem"}}/>
                </div>
                <div className="handbag">
                    <LocalMallOutlined style={{fontSize:"3rem"}} />
                </div>
            </div>
            <div className="store-info">
                <img src={logo} alt="logo" />
                <h2 className="title">Paloma Variedades</h2>
                <span className="city">Juazeiro do Norte - CE</span>
            </div>
            <div className="search-field">
                <TextField
                id="input-with-icon-textfield"
                variant="outlined"
                className="search-input"
                color="secondary"
                placeholder="Pesquisar"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <Search style={{ fontSize:"2.4rem", color:"#BFC1C0" }}/>
                    </InputAdornment>
                ),
                }}
        />
            </div>
        </div>
    )
}

export default Header;
