import React from 'react';
import { TextField } from '@material-ui/core';

import { Link } from 'react-router-dom';

import './style.css';
import logo from '../../assets/logo-2.svg';

const Logon:React.FC = () => {

    return (
        <div id="login-container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <h2 className="title">Seja bem vindo!</h2>
            <div className="form-field">
                <form noValidate autoComplete="off">
                    <TextField
                    id="standard-full-width"
                    label="Login"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    />
                    <TextField
                    id="standard-full-width"
                    label="Senha"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    type="password"
                    color='secondary'            
                    />
                </form>
            </div>
            <span className="forget-pass">Esqueceu a senha?</span>
            <div className="entry-button">
                <button><Link to='/home' >Entrar</Link></button>
            </div>
            <div className="signup">
                <p>Ainda não possui conta?</p>
                <span> <Link to='/new' >Cadastre-se</Link> </span>
            </div>
        </div>
    )
}

export default Logon;