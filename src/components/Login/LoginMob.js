import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';
import logo from '../../img/logo_green.png'
import { resetPassword, signIn, signUp } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginMob = () => {

    const [authView, setAuthView] = useState('login'); //(login | register | reset)
    const [emailRegister, setEmailRegister] = useState('')
    const [passRegister, setPassRegister] = useState('')
    const [emailIn, setEmailIn] = useState('')
    const [passIn, setPassIn] = useState('')
    const [emailReset, setEmailReset] = useState('')
    const navigate = useNavigate()

    const handleRegister = ()=>{
            signUp(emailRegister,passRegister)
            navigate('/')
            
        }
    
         const handleLogIn = ()=>{
            signIn(emailIn,passIn)
            // navigate('/')
            
        }
    
         const handleReset = ()=>{
            resetPassword(emailReset)
            // navigate('/')
            
        }
    

    return (
       
            <div className='modal-login-box'>

               
                {authView==='login' && 
                <div className='logInUP-box' style={{height:'auto'}}>
                  
                    <div className='input-box'>
                        <Input placeholder='Email address' 
                            onChange={(e)=>setEmailIn(e.target.value)}/>       
                        <Input.Password  placeholder='Password'
                            onChange={(e)=>setPassIn(e.target.value)}
                        />
                        <div className='reset-pass-btn'>
                            <Button type='link' onClick={()=>setAuthView('reset')} >Forgot your password?</Button>
                        </div>
                        <div className='main-btn'>
                            <Button onClick={handleLogIn}>Log in</Button>
                        </div>
                        <div className='btn-help'>
                            <span> OR</span>
                            <br />
                            <Button type='link' onClick={()=>setAuthView('register')} >Register now</Button>            
                        </div>
                    </div>
                </div>
                }
                {authView==='reset' && 
                <div className='logInUP-box'>
                    <h2>Reset your password</h2>
                    <div className='input-box'>
                        <Input placeholder='Email address' 
                            onChange={(e)=>setEmailReset(e.target.value)}/>          
                        <div className='main-btn'>
                            <Button onClick={handleReset}>Submit</Button>
                        </div>
                        <div className='btn-help'>
                            <Button type='link' onClick={()=>setAuthView('login')} >Cancel</Button>            
                        </div>
                    </div>
                </div>
                }
                {authView==='register' && 
                <div className='logInUP-box'>
                    <h2>Register</h2>
                    <div className='input-box'>
                        <Input placeholder='Email address' 
                            onChange={(e)=>setEmailRegister(e.target.value)}/>       
                        <Input.Password  placeholder='Password'
                            onChange={(e)=>setPassRegister(e.target.value)}
                        />
                        <div className='main-btn'>
                            <Button onClick={handleRegister}>Register</Button>
                        </div>
                        <div className='btn-help'>
                        <span>OR</span>
                        <br />
                            <Button type='link' onClick={()=>setAuthView('login')}>Back to login</Button>            
                        </div>
                    </div>
                </div>
                }
                
            </div>
            
        
    );
};

export default LoginMob;
