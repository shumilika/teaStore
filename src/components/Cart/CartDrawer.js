import React from 'react';
import { Drawer, Row, Col, Flex, Button, Divider } from 'antd'
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

   const handleViewCheckout = () =>{
    navigate('/checkout')
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

    const footer = 
    <>{
      cartList.length===0
      ? ''
      : 
      <Row>
        <Col span={24}>
          <Row style={{padding:'15px 8%'}}>
             <Col span={12} className='total-box'>
             <span>Total:</span>
           </Col>
           <Col span={12} style={{textAlign:'right'}} className='total-cost-box'>
             <span>${totalCost}.00</span>
           </Col>
          </Row>
          </Col>
          <Col span={24} className='action-checkout'>
            <Row>
              <Col span={12}>
                <Button onClick={handleViewCart} style={{backgroundColor:'#2a2a2a'}}>View cart</Button>
            
              </Col>
              <Col span={12}>
                <Button onClick={handleViewCheckout} style={{backgroundColor:'#000'}}>Check out</Button>
              </Col>
            </Row>
          </Col>
      </Row>
    } </>
    
  return (
    <Drawer className='cart-drawer-box' title={title} onClose={props.onClose} open={props.open}
    footer={footer} 
    >
      <Flex style={{width:'100%', height:'100%'}} justify='center' align={cartList.length===0?'center':'normal'}>
        {(cartList.length===0
        ? <div className='empty-cart'>
          <p style={{fontSize:'22px'}}>Your shopping bag is empty</p>
            <Link to={'shop'} onClick={props.onClose}>go to the shop</Link>
          </div>
        :<Row style={{height:'100hv'}}>
        <div>

          {cartList.map((item, index) => (
            <Col key={index} span={24} style={{height:'fit-content'}}>
              <div className='cart-item'>
               
               <div className='image-box'>
                  <img src={item.image} alt={item.title}
                  onClick={()=>handleOpenItemCardAction(item.id)}
                 />
               </div>
                
                <div className='cart-header'>
                  
                  <h3> 
                 <Button type='link'  onClick={()=>handleOpenItemCardAction(item.id)}>
                 {item.title} -
                 <span> {item.size}g / {item.type}</span>
                  </Button>
                  </h3>
                  
                  <div style={{color:'#212529'}}>

                  <div>QTY: {item.quantity}</div>
                 
                  <div>${item.price}.00</div>
                  </div>
                </div>
               <div className='delete-icon' style={{width:'15%', textAlign:'right'}}>
                 <DeleteOutlined onClick={()=>handleDeleteItemFromCart(item)} />
               </div>
              
              </div>
            </Col>
          ))}
         
        </div>
        </Row>
      )}
      </Flex>
    </Drawer>
  );
};

export default CartDrawer;