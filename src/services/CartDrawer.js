import React from 'react';
import { Drawer, Row, Col, Flex } from 'antd'
import { Link } from 'react-router-dom';

const CartDrawer = (props) => {
    const title =
        <Row style={{alignItems:'center', textAlign:'center'}}>
            <Col flex={4} style={{borderLeft:'1px solid #dedede', padding:'10px'}}>
            <span
             style={{fontSize:'20px', fontWeight:'500'}}>Shopping Cart</span>
            </Col>
            <Col flex={1} style={{borderLeft:'1px solid #dedede', fontSize:'16px', padding:'13px 10px'}}>0</Col>
        </Row>
    
    return (
        <Drawer className='cart-drawer-box' title={title} onClose={props.onClose} open={props.open}>
        <Flex style={{width:'100%', height:'100%', textAlign:'center'}} justify='center' align='center'>
            <div>
            <p style={{fontSize:'22px'}}>Your shopping bag is empty</p>
      <Link to={'shop'} onClick={props.onClose}>go to the shop</Link>
            </div>
        </Flex>
      </Drawer>
    );
};

export default CartDrawer;