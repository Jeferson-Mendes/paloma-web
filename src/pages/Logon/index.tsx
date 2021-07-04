import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './style.css';
import logo from '../../assets/logo-2.svg';
import AuthContext from '../../contexts/auth';

const Logon:React.FC = () => {

    const { signed, signIn, user } = useContext(AuthContext);

    const history = useHistory();

    console.log(signed);
    console.log(user);


    async function handleSign() {
        signIn();
      
        history.push('/home')
      }

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
                <button onClick={handleSign} > Entrar </button>
            </div>
            <div className="signup">
                <p>Ainda não possui conta?</p>
                <span> <Link to='/new' >Cadastre-se</Link> </span>
            </div>
        </div>
    )
}

export default Logon;