import React, { InputHTMLAttributes, useContext } from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import { Search, AccountCircleOutlined, LocalMallOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './style.css'
import logo from '../../assets/logo-2.svg';
import { IconButton,  } from '@material-ui/core';
import AuthContext from '../../contexts/auth';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    bagProductsQuantity: number;
    }

const StyledBadge = withStyles((theme) => ({
badge: {
    right: 1,
    top: 10,
    padding: '0 4px',
},
}))(Badge);


const Header: React.FC<InputProps> = ({bagProductsQuantity}) => {

    const { signed } = useContext(AuthContext);

    const history = useHistory()

    return (
        <div className="header">
            <div className="header-content">
                <div className="profile">
                    {signed ? <Link to='/profile'> <AccountCircleOutlined style={{fontSize:"3rem"}} /> </Link> : '' }
                   
                </div>
                <div className="handbag" onClick={ () => history.push('/bag') }>
                    <IconButton aria-label="bag">
                        <StyledBadge badgeContent={bagProductsQuantity} color="secondary">
                            <LocalMallOutlined style={{ fontSize: '3rem', color: '#000' }}/>
                        </StyledBadge>
                    </IconButton>    
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
