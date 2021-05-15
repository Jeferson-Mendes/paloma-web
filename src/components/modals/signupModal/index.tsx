import React from 'react';

import { ErrorOutline } from '@material-ui/icons';

import './style.css'

const ConfirmSignUpModal = () => {
    return (
        <div className="confirm-signup-modal">
            <div className="modal-content">
                <div className="content-icon">
                    <ErrorOutline className="confirm-icon"/>
                </div>
                <div className="content-message">
                    <span> Cadastro realizado com sucesso! </span>
                </div>
                <button>Confirmar</button>
            </div>
        </div>
    )
}

export default ConfirmSignUpModal;
