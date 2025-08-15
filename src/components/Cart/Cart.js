import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../PageHeader';
import { Table, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocalCartList, fethCartList } from '../../store/personalProduct';
import { deleteCartItem } from '../../services/productService';
import { useAuth } from '../../contexts/AuthContext';
import { CloseOutlined } from '@ant-design/icons'

const Cart = () => {

  const {currentUser} = useAuth()
  const cartData = useSelector(state=>state.personalProduct.cartList)
  const dispatch = useDispatch()
  const userId = currentUser?.uid
  const navigate = useNavigate()


   const handleDeleteItemFromCart = async (value) => {
     if(currentUser){
       await deleteCartItem(userId,value.item_id)
     dispatch(fethCartList(userId))
     }
     else {
       let updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
       updatedCart = updatedCart.filter(item => !(item.id === value.id && item.size === value.size));
       localStorage.setItem('cart', JSON.stringify(updatedCart));
       dispatch(fetchLocalCartList()); 
     }
   }

    const handleOpenItemCardAction = (id) => {
    navigate(`/shop/${id}`)
  }


 const dataSource = cartData.map((item) => ({
  key: `${item.id}-${item.size}`, 
  name: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
       <img src={item.image} alt={item.title} style={{ width: 100, height: 100,}} 
       onClick={()=>handleOpenItemCardAction(item.id)}/>
      <div>
       <Button type='link' onClick={()=>handleOpenItemCardAction(item.id)}>
         <p>{item.title}</p>
       </Button>
       <p> {item.size}g / {item.type}</p>
      </div>
    </div>
  ),
  price: <span>${item.price}.00</span>,
  quantity: item.quantity,
  total: <span>${item.price * item.quantity}.00</span>,
  action:<div className='delete-icon-full-cart'><CloseOutlined 
  style={{fontSize:'18px'}} onClick={()=>handleDeleteItemFromCart(item)}/></div>
}));

const columns = [
  {
    title: 'Product name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
   {
    title: 'total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
  },
];



    return (
        <div className='cart-box'>
            <PageHeader title={'Cart'} titleLink={'Your Shopping Cart'} />
          <div style={{padding:'50px 0'}}>
          {(!cartData)
          ?<div style={{marginLeft:'auto', marginRight:'auto',  width:'70%'}}>
                <p>Your cart is currently empty.</p>
                <p>Continue browsing <Link to={'/shop'}>here</Link> .</p>
            </div>
            :
            <div>
        <Table dataSource={dataSource} columns={columns} style={{width:'70%',margin:'0 auto'}}  pagination={false}/>
            </div>
          }
          </div>
        </div>
    );
};

export default Cart;