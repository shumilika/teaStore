import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../PageHeader';
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { fethCartList } from '../../store/personalProduct';
import { deleteCartItem } from '../../services/productService';
import { useAuth } from '../../contexts/AuthContext';
import { CloseOutlined } from '@ant-design/icons'

const Cart = () => {

  const {currentUser} = useAuth()
  const cartData = useSelector(state=>state.personalProduct.cartList)
  const dispatch = useDispatch()
  const userId = currentUser?.uid

  const handleDeleteItemFromCart = async (value) =>{
    await deleteCartItem(userId,value)
    dispatch(fethCartList(userId))
  }


 const dataSource = cartData.map((item, index) => ({
  key: `${item.id}-${item.size}`, 
  name: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src={item.image} alt={item.title} style={{ width: 100, height: 100,}} />
      <div>
        <p>{item.title}</p>
      <p> {item.size}g / {item.type}</p>
      </div>
    </div>
  ),
  price: <span>${item.price}.00</span>,
  quantity: item.quantity,
  total: <span>${item.price * item.quantity}.00</span>,
  action:<div className='delete-icon-full-cart'><CloseOutlined 
  style={{fontSize:'18px'}} onClick={()=>handleDeleteItemFromCart(item.id)}/></div>
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
          {(!currentUser)
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