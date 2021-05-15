import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';

import ConfirmSignUpModal from '../../components/modals/signupModal';


const SignUp = () => {

    const [triggerModal, setTriggerModal] = useState<boolean>(false);

    const history = useHistory();

    const handleHistory = () => {
        history.goBack();
    }

    const handleSignup = () => {
        setTriggerModal(true);
    }

    return (    
        <div className="signup-container">
            {triggerModal === true ? <ConfirmSignUpModal/> : ''}
            <ArrowBackIos onClick={handleHistory} style={{ fontSize: 20, margin: '2rem' }} />
            <h2 className="title">Cadastro</h2>
            <div className="form-field">
                <form >
                    <TextField
                    id="standard-full-width"
                    label="Nome"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    />
                    <TextField
                    id="standard-full-width"
                    label="Whatsapp"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    />
                    <TextField
                    id="standard-full-width"
                    label="Cep"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    />
                    <TextField
                    id="standard-full-width"
                    label="Rua"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    />
                    <TextField
                    id="standard-full-width"
                    label="Número"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    />
                    <TextField
                    id="standard-full-width"
                    label="Bairro"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    />
                    <TextField
                    id="standard-full-width"
                    label="Cidade"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    />
                    <TextField
                    id="standard-full-width"
                    label="Complemento"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    />
                </form>
            </div>
            
            <div className="entry-button">
                <button onClick={ handleSignup } >Cadastrar</button>
            </div>
        </div>
    )
}

export default SignUp;