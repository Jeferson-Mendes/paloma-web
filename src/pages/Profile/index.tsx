import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { ArrowBackIos, ExitToApp } from '@material-ui/icons';

import ConfirmSignUpModal from '../../components/modals/signupModal';


const Profile: React.FC = () => {

    const [triggerModal, setTriggerModal] = useState<boolean>(false);

    const history = useHistory();

    const handleHistory = () => {
        history.goBack();
    }

    const handleSignup = () => {
        setTriggerModal(true);
    }

    return (    
        <div className="profile-container">
            {triggerModal === true ? <ConfirmSignUpModal/> : ''}
            <ArrowBackIos onClick={handleHistory} style={{ fontSize: 24, margin: '2rem' }} />
            <ExitToApp style={{ fontSize: 24, margin: '2rem', float:"right", color:"#FA0B0B"}}/>
            <h2 className="title">Perfil</h2>
            <div className="form-field">
                <form >
                    <TextField
                    id="standard-full-width"
                    label="Nome"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    value={"Paloma"}
                    />
                    <TextField
                    id="standard-full-width"
                    label="Whatsapp"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    value={"(88) 9 9999-9999"}
                    />
                    <TextField
                    id="standard-full-width"
                    label="Cep"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    value={"63150-000"}
                    />
                    <TextField
                    id="standard-full-width"
                    label="Rua"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    value={"Rua Tal"}
                    />
                    <TextField
                    id="standard-full-width"
                    label="Número"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    value={"10"}
                    />
                    <TextField
                    id="standard-full-width"
                    label="Bairro"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    value={"Centro"}
                    />
                    <TextField
                    id="standard-full-width"
                    label="Cidade"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    value={"Campos Sales"}
                    />
                    <TextField
                    id="standard-full-width"
                    label="Complemento"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    color='secondary'
                    value={"Prox. A dona menina"}
                    />
                </form>
            </div>
            
            <div className="entry-button">
                <button onClick={ handleSignup } style={{color:"#fff"}} >Salvar</button>
            </div>
        </div>
    )
}

export default Profile;