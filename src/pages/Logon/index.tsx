import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';
import logo from '../../assets/logo-2.svg';

const Home = () => {

    return (
        <div id="login-container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <h2 className="title">Seja bem vindo!</h2>
            <div className="form-field">
                <form >
                    <label htmlFor="login">Login</label>
                    <input type="text" name="login"/>

                    <label htmlFor="password">Senha</label>
                    <input type="text" name="password"/>
                </form>
            </div>
            <span className="forget-pass">Esqueceu a senha?</span>
            <div className="entry-button">
                <button>Entrar</button>
            </div>
            <div className="signup">
                <p>Ainda não possui conta?</p>
                <span> <Link to='/new' >Cadastre-se</Link> </span>
            </div>
        </div>
    )
}

export default Home;