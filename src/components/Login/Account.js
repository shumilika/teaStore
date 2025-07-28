import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from 'antd';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const {currentUser} = useAuth()
    const auth = getAuth()
    const navigate = useNavigate()

     const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/'); 
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

    return (
        <div style={{textAlign:'center', padding:'40px 0px'}}>
            {currentUser && (
        <>
          <p> {currentUser.email}</p>
          <p>
            (not <span style={{fontWeight:'500'}}>{currentUser.email}?</span>
          <Button type='link' onClick={handleSignOut}>Sign Out</Button>).
          </p>
  
          <p>Recent orders</p>
          <p>You haven't placed any orders yet.</p>
          <br />
          <p>Billing Address <Button type='link' onClick={()=>navigate('/account/billing_address')}>Edit</Button></p>
          <br />
          <br />
          
        </>
      ) }
        </div>
    );
};

export default Account;