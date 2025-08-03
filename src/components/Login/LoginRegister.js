import { Button, Col, Input, Row } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword, signUp, signIn } from '../../services/authService';

const LoginRegister = () => {
    
    const navigate = useNavigate()
    const [view, setView] = useState('login')
    const [emailIn, setEmailIn] = useState('')
    const [passIn, setPassIn] = useState('')

    const [emailReset, setEmailReset] = useState('')

      const [emailUp, setEmailUp] = useState('')
    const [passUp, setPassUp] = useState('')

    const handleRegister = ()=>{
        signUp(emailUp,passUp)
        navigate('/wishlist')
    }

     const handleLogIn = ()=>{
        signIn(emailIn,passIn)
        setTimeout(()=>{
            navigate('/wishlist')
        },2000)
        
    }

     const handleReset = ()=>{
        resetPassword(emailReset)
        navigate('/')
    }

    return (
        <Row justify={'space-around'} align={'middle'} className='login-register-page'>
            <Col span={10}>
               {view==='login'? <div className='logInUP-box'>
                    <h2>Login</h2>
                    <div className='input-box'>
                       
                        <Input addonBefore="Email address" placeholder='Email address' 
                        onChange={(e)=>setEmailIn(e.target.value)}/>
                       
                         <Input.Password addonBefore="Password" placeholder='Password'
                            onChange={(e)=>setPassIn(e.target.value)}
                         />
                         <div className='main-btn'>
                            <Button onClick={handleLogIn}>Log in</Button>
                         </div>
                        <div className='btn-help'>
                             <Button type='link' onClick={()=>navigate('/')}>Return to store</Button>
                              <Button type='link' onClick={()=>setView('reset')}>Forgot your password?</Button>
                        </div>
                    </div>
                </div>:

                <div className='logInUP-box'>
                    <h2>Reset your password</h2>
                    <div className='input-box'>
                       
                        <Input addonBefore="Email address" placeholder='Email address'
                            onChange={e=>setEmailReset(e.target.value)}
                        />
                       
                        
                         <div className='main-btn'>
                            <Button onClick={handleReset}>Reset</Button>
                         </div>
                        <div className='btn-help'>
                             <Button type='link' onClick={()=>setView('login')}>Cancel</Button>
                              
                        </div>
                    </div>
                </div>}
            </Col>
            <Col span={10}>
                <div className='logInUP-box'>
                    <h2>Register</h2>
                    <div className='input-box'>
                        <Input addonBefore="Email address" placeholder='Email address' 
                        onChange={e=>setEmailUp(e.target.value)}
                         />
                      
                         <Input.Password addonBefore="Password" placeholder='Password' 
                            onChange={e=>setPassUp(e.target.value)}
                         />
                        <div className='main-btn'>
                             <Button onClick={handleRegister}>Register</Button>
                        </div>
                        <div className='btn-help'>
                             <Button type='link' onClick={()=>navigate('/')}>Return to store</Button>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default LoginRegister;