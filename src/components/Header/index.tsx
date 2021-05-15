import React, { InputHTMLAttributes } from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { Search, AccountCircleOutlined, LocalMallOutlined, FiberManualRecord } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import './style.css'
import logo from '../../assets/logo-2.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    bagIsEmpty: boolean;
    }

const Header: React.FC<InputProps> = ({bagIsEmpty}) => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="profile">
                   <Link to='/profile'> <AccountCircleOutlined style={{fontSize:"3rem"}} /> </Link>
                </div>
                <div className="handbag">
                    <LocalMallOutlined style={{fontSize:"3rem"}} />
                  { bagIsEmpty ? <FiberManualRecord className="red-circle" style={{color:"#F1186A", fontSize:"2.4rem"}} /> : '' }
                    
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
