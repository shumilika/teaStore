import { Button, Input, Modal, Space } from 'antd';
import React, { useState } from 'react';
import logo from '../img/logo_green.png'

const LoginModal = ({open, onClose}) => {

    const [emailIn, setEmailIn] = useState('')
    const [passIn, setPassIn] = useState('')
    return (
        <Modal
         open={open}
         onCancel={onClose}
         footer={null}
        >
            <div className='modal-login-box'>

                <div className='modal-logo'>
                    <img src={logo} alt="logo" width={'70px'} />
                </div>
                
                <div className='logInUP-box'>
                    <h2>Great to have you back!</h2>
                    <div className='input-box'>
                    <Input placeholder='Email address' 
                        onChange={(e)=>setEmailIn(e.target.value)}/>       
                    <Input.Password  placeholder='Password'
                        onChange={(e)=>setPassIn(e.target.value)}
                    />
                    <div className='reset-pass-btn'>
                    <Button type='link' >Forgot your password?</Button>
                    </div>
                    <div className='main-btn'>
                        <Button>Log in</Button>
                    </div>
                    <div className='btn-help'>
                           <span> Don't have an account?</span>
                           <Button type='link' >Register now</Button>            
                    </div>
                    </div>
                </div>
            </div>
            
        </Modal>
    );
};

export default LoginModal;
