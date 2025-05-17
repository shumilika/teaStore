import React from 'react';
import PageHeader from '../services/PageHeader';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className='cart-box'>
            <PageHeader title={'Cart'} titleLink={'Your Shopping Cart'} />
          <div style={{padding:'50px 0'}}>
          <div style={{marginLeft:'auto', marginRight:'auto',  width:'70%'}}>
                <p>Your cart is currently empty.</p>
                <p>Continue browsing <Link to={'/shop'}>here</Link> .</p>
            </div>
          </div>
        </div>
    );
};

export default Cart;