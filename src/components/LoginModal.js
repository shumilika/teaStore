import { Modal } from 'antd';
import React from 'react';
import logo from '../img/logog.png'

const LoginModal = ({open, onClose}) => {
    return (
        <Modal
         open={open}
         onCancel={onClose}
        >
        <div>
            <img src={logo} alt="logo" width={'70px'} />
        </div>

            
        </Modal>
    );
};

export default LoginModal;
