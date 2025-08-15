import React from 'react';
import { Drawer, Row, Col, Flex, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import {DeleteOutlined} from '@ant-design/icons'
import { deleteCartItem } from '../../services/productService';
import { fetchLocalCartList, fethCartList } from '../../store/personalProduct';


const CartDrawer = (props) => {

  const { currentUser } = useAuth()
  const dispatch = useDispatch()
  const {cartList, totalCost, totalQuantity} = useSelector(state=>state.personalProduct)
  const userId = currentUser?.uid
  const navigate = useNavigate()
  


  const handleViewCart = () =>{
    navigate('/cart')
    props.onClose()
  }

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
    props.onClose()
    navigate(`/shop/${id}`)
  }
    
  const title =
    <Row style={{alignItems:'center', textAlign:'center'}}>
      <Col flex={4} style={{borderLeft:'1px solid #dedede', padding:'10px'}}>
        <span style={{fontSize:'20px', fontWeight:'500'}}>Shopping Cart</span>
      </Col>
      <Col flex={1} style={{borderLeft:'1px solid #dedede', fontSize:'16px', padding:'13px 10px'}}>{totalQuantity}</Col>
    </Row>
    
  return (
    <Drawer className='cart-drawer-box' title={title} onClose={props.onClose} open={props.open}>
      <Flex style={{width:'100%', height:'100%', textAlign:'center'}} justify='center' align='center'>
        {(cartList.length===0
        ? <div>
          <p style={{fontSize:'22px'}}>Your shopping bag is empty</p>
            <Link to={'shop'} onClick={props.onClose}>go to the shop</Link>
          </div>
        :<Row>
          {cartList.map((item, index) => (
            <Col key={index} span={24} className='cart-item'>
              <div style={{display:'flex'}}>
               
                 <img src={item.image} alt={item.title} style={{ width: 100, height: 100,}}
                  onClick={()=>handleOpenItemCardAction(item.id)}
                 />
                
                <div>
                  <Button type='link' onClick={()=>handleOpenItemCardAction(item.id)}>
                  <p>{item.title} - {item.size} / {item.type}</p>
                  </Button>
                  <p>QTY: {item.quantity}</p>
                  <p>${item.price}.00</p>
                </div>
               <div className='delete-icon'>
                 <DeleteOutlined onClick={()=>handleDeleteItemFromCart(item)} />
               </div>
              </div>
            </Col>
          ))}
          <Col span={24}>
           <div>
             Total: <span>${totalCost}.00</span>
           </div>
          </Col>
          <Col span={24}>
            <Button onClick={handleViewCart}>View cart</Button>
            <Button>Check out</Button>
          </Col>
        </Row>
      )}
      </Flex>
    </Drawer>
  );
};

export default CartDrawer;