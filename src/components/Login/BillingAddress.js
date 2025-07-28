import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BillingAddress = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Button type='link' onClick={()=>navigate('/account')}>Return to account details</Button>
            <Button type='link'>Add a new address</Button>
        </div>
    );
};

export default BillingAddress;