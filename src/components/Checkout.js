import { Badge, Button, Col, Row } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux';

const Checkout = () => {

    const navigate = useNavigate()
    const {cartList, totalQuantity, totalCost} = useSelector(state => state.personalProduct)

    const handleBackToCartAction = () => {
        navigate('/cart')
    }

    return (
        <Row className='checkout-box'>
         <Col span={24} style={{borderBottom:'1px solid rgb(223,223,223)'}}>
          <Row align='middle'>
            <Col span={12} offset={5}> 
            <div style={{padding:'15px 0'}}>
                 <h1 style={{color:'#000',fontWeight:'400',fontSize:'20px',lineHeight:'21px' }}>
                <Link to={'/'} style={{color:'inherit', textDecoration:'none'}}>CatCarrot - Tea Shop & Organic Store</Link>
            </h1>
            
            </div>
           </Col>
           <Col span={4} >
            <ShoppingOutlined style={{fontSize:'1.4rem',color:'rgb(24, 141, 193)'}} onClick={handleBackToCartAction}/>
           </Col>
          </Row>
         </Col>
         <Col span={24}>
         <Row>
            <Col span={12} style={{borderRight:'1px solid rgb(223,223,223)', height:'92vh'}}>

            </Col>
            <Col span={12} style={{backgroundColor:'#FAFAFA'}}>
                <div style={{marginTop:'50px', height:'345px', width:'400px', overflow:'hidden',
                 marginLeft:'30px',borderBottom:'1px solid #ddd'}}>
                    <div style={{height:'345px', overflowY:'auto', paddingTop:'5px' }}>
                        {cartList.map((item,index)=>
                        <Col key={index} span={24} style={{height:'fit-content'}}>
                            <div className='cart-item'>
                                <div className='image-box'>
                                    <Badge count={item.quantity} color='#6E6E6E'>
                                        <img src={item.image} alt={item.title}  
                                        style={{border:'1px solid rgb(218,218,218', borderRadius:'10px'}}/>
                                    </Badge>
                                </div>
                                <div className='cart-header'>
                                    <h6> {item.title} </h6>
                                    <p> {item.size}g / {item.type}</p>
                                </div>
                                <div className='cart-price' style={{color:'#212529'}}>
                                    <p>${item.price}.00</p>
                                </div>
                            
               
              
                </div>
            </Col>
            )}
                    </div>
                </div>
                <Col span={12} style={{padding:'10px 10px 0 27px'}}>
                    <Row justify={'space-between'}>
                        <Col span={10}><p>Subtotal · {totalQuantity} items</p></Col>
                    <Col span={10} style={{textAlign:'right'}}>${totalCost}.00</Col>
                    </Row>
                     <Row justify={'space-between'}>
                        <Col span={10}><p>Shipping </p></Col>
                    <Col span={10} style={{textAlign:'right', color:'rgba(0,0,0,0.56)'}}>Enter shipping address</Col>
                    </Row>
                     <Row justify={'space-between'}>
                        <Col span={10}><p style={{fontWeight:'500', fontSize:'16px'}}>Total </p></Col>
                    <Col span={10} style={{textAlign:'right'}}>
                    <span style={{color:'rgba(0,0,0,0.56)',fontSize:'10px'}}>USD</span>
                    <span style={{fontWeight:'500', fontSize:'16px'}}> ${totalCost}.00</span>
                     </Col>
                    </Row>
                </Col>
            </Col>
         </Row>

         </Col>
        </Row>
    );
};

export default Checkout;