import React, { useEffect } from 'react';
import { Drawer, Row, Col, Flex, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { fethCartList } from '../../store/personalProduct';

const CartDrawer = (props) => {

  const { currentUser } = useAuth()
  // const dispatch = useDispatch()
  const cartData = useSelector(state=>state.personalProduct.cartList)
  // const userId = currentUser?.uid
  const navigate = useNavigate()
  let totalQuantity = 0;
  let totalCost = 0;
    


  cartData.forEach(item => {
    if (item.quantity && item.price) {
      totalQuantity += item.quantity;
      totalCost += item.quantity * item.price;
    }
  })

  const handleViewCart = () =>{
    navigate('/cart')
    props.onClose()
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
        {(!currentUser
        ? <div>
          <p style={{fontSize:'22px'}}>Your shopping bag is empty</p>
            <Link to={'shop'} onClick={props.onClose}>go to the shop</Link>
          </div>
        :<Row>
          {cartData.map((item, index) => (
            <Col key={index} span={24}>
              <div style={{display:'flex'}}>
                <img src={item.image} alt="" style={{ width: 100, height: 100,}}/>
                <div>
                  <p>{item.title} - {item.size} / {item.type}</p>
                  <p>QTY: {item.quantity}</p>
                  <p>${item.price}.00</p>
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