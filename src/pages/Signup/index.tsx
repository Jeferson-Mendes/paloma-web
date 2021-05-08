import React, { useState } from 'react';

import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import ConfirmSignUpModal from '../../components/modals/signupModal';

import './style.css';

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
            <FiChevronLeft onClick={handleHistory} className="arrow-left"/>
            <h2 className="title">Cadastro</h2>
            <div className="form-field">
                <form >
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name"/>

                    <label htmlFor="whatsapp">Whatsapp</label>
                    <input type="text" name="whatsapp"/>

                    <label htmlFor="cep">Cep</label>
                    <input type="text" name="cep"/>

                    <label htmlFor="rua">Rua/número</label>
                    <input type="text" name="rua"/>

                    <label htmlFor="bairro">Bairro</label>
                    <input type="text" name="bairro"/>

                    <label htmlFor="complemento">Complemento</label>
                    <input type="text" name="complemento"/>
                </form>
            </div>
            
            <div className="entry-button">
                <button onClick={ handleSignup } >Cadastrar</button>
            </div>
        </div>
    )
}

export default SignUp;