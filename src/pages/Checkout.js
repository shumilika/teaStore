import { Badge, Col, Input, Row, Button, ConfigProvider } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingOutlined, ArrowDownOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux';
import CountrySelect from '../components/CountrySelect';

const Checkout = () => {

    const navigate = useNavigate()
    const {cartList, totalQuantity, totalCost} = useSelector(state => state.personalProduct)
    const [showHint, setShowHint] = useState(false);
    const containerRef = useRef(null);
    const borderBottom =`${
        showHint
        ? '1px solid #ddd'
        : ''
    }`

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const isAtTop = container.scrollTop === 0;
            const isScrollable = container.scrollHeight > container.clientHeight;
            setTimeout(handleScroll, 0);
         
            setShowHint(isScrollable && isAtTop);
        };
        
        handleScroll();
        container.addEventListener('scroll', handleScroll);
        
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleBackToCartAction = () => {
        navigate('/cart')
    }

    return (
        <Row className='checkout-box'>
         <Col span={24} style={{borderBottom:'1px solid rgb(223,223,223)'}}>
          <Row align='middle'>
            <Col lg={14} md={14} sm={14} xs={'auto'} style={{display:'flex', justifyContent:'flex-end'}}> 
            <div style={{padding:'15px 0'}}>
                 <h1 style={{color:'#000',fontWeight:'400',fontSize:'20px',lineHeight:'21px' }}>
                <Link to={'/'} style={{color:'inherit', textDecoration:'none'}}>CatCarrot - Tea Shop & Organic Store</Link>
            </h1>
            
            </div>
           </Col>
           <Col lg={4} md={4} sm={4} xs={'auto'} style={{display:'flex', justifyContent:'flex-end'}} >
            <ShoppingOutlined style={{fontSize:'1.4rem',color:'rgb(24, 141, 193)'}} onClick={handleBackToCartAction}/>
           </Col>
          </Row>
         </Col>
         <Col span={24}>
         <Row style={{backgroundColor:'#FAFAFA'}}>
            <Col  xs={{ span: 24, order: 2 }} 
    sm={{ span: 24, order: 2 }} 
    md={{ span: 12, order: 1 }} 
    lg={{ span: 12, order: 1 }}
            style={{borderRight:'1px solid rgb(223,223,223)', height:'120vh', backgroundColor:'#fff'}}>
          <ConfigProvider
          theme={{
            components:{
                Input:{
                    activeBorderColor:'rgb(25,144,198)',
                    hoverBorderColor:'#d9d9d9',
                    activeShadow:'none', 
                    colorTextPlaceholder:'#6E6E6E',                  
                }
                
            }
          }}
          >
             <div className='left-path'>
             <div className='contact-box'>
              <Row justify={'space-between'}>
                 <Col span={20}>
                 <h3>Contact</h3>
               </Col>
               <Col>
                <Link to={'/account/login'}>Log in</Link>
               </Col>
              </Row>
                <Input placeholder="Email or mobile phone number"/>
            </div>
            <div className='delivery-address'>
            <h3>Delivery</h3>
                <CountrySelect/>
               <Row justify={'space-between'}> 
                <Col flex={'45%'}> <Input placeholder='First name'/></Col>
                <Col flex={'52%'}>
                <Input placeholder='Last name (optional)'/></Col>
               </Row>
                <Input placeholder='Address'/>
                <Input placeholder='Apartment, suite, etc. (optional)'/>
               <Row justify={'space-between'}>
                <Col flex={'45%'}> <Input placeholder='Postal code'/></Col>
                <Col flex={'52%'}>
                <Input placeholder='City'/></Col>
               </Row>
            </div>
            <div className='ship-cost'>
                <h4>Shipping method</h4>
                <div>Enter your shipping address to view available shipping methods.</div>
            </div>
            <div className='payment'>
            <h3>Payment</h3>
            <p>All transactions are secure and encrypted. </p>
            <div className='no-payments'>
                <ExclamationCircleOutlined style={{fontSize:'40px', margin:'10px 0', color:'#B3B3B3'}}/>
                <br />
                <span>This store can’t accept payments right now.</span>
            </div>
            <div className='pay-btn'>
                <Button>Pay now</Button>
            </div>
            </div>
           </div>
          </ConfigProvider>
            </Col>
            <Col xs={{ span: 24, order: 1 }} 
    sm={{ span: 24, order: 1 }} 
    md={{ span: 12, order: 2 }} 
    lg={{ span: 12, order: 2 }}>
                <div  style={{borderBottom:borderBottom}} className='cart-container'>
                    <div style={{maxHeight:'345px', overflowY:'auto', paddingTop:'5px' }} ref={containerRef}>
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
                    <div className={`scroll-hint ${showHint ? 'visible' : ''}`}>
                        <span>Scroll  for  more  items <ArrowDownOutlined /></span>
                    </div>
                </div>
                <Col lg={12} md={12} sm={12} xs={22} style={{padding:'10px 10px 0 27px'}}>
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