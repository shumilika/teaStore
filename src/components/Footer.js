import React from 'react';
import { Row, Col } from 'antd'
import logo from '../img/logo_green.png'
import { Link, useNavigate } from 'react-router-dom';
import pay_icons from '../img/pay_copyright.jpg'
import PhoneFilled from '@ant-design/icons/PhoneFilled'
import MailFilled from '@ant-design/icons/MailFilled'
import PushpinFilled from '@ant-design/icons/PushpinFilled'


const Footer = () => {
    const navigate = useNavigate()

    return (
        <div className='footer_box'>
        <Row className='first_footer_box' justify={'space-around'}>
            <Col sm={6} xs={24}>
              <div className='footer-text'>
              <h4>Shop</h4>
              </div>
                <ul>
                    <li><Link to={'contact_us'}>Contact us</Link></li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Products Return</li>
                </ul>
            </Col>
            <Col sm={6} xs={24}>
            <div className='footer-text'>
                <h4>About</h4>
                </div>
                <ul>
                    <li>Help Center</li>
                    <li>Address store</li>
                </ul>
            </Col>
            <Col sm={6} xs={24}>
            <div className='footer-text'>
                <h4>Follow us</h4>
                </div>
                <ul>
                    <li><PhoneFilled /> (000) 000-0000</li>
                    
                    <li><MailFilled /> mail@gmail.com</li>
                    <li><PushpinFilled /> address</li>
                </ul>
            </Col>
        </Row>
        <Row className='last_footer_box' justify={'space-around'} align='middle'>
            <Col sm={24} md={6}>
                <img src={logo} width={'50px'} alt="logo" className='logo_footer' onClick={()=>navigate('/')} />
            </Col>
            <Col sm={24} md={6}>
                <img src={pay_icons} alt="" />
            </Col>
            <Col sm={24} md={6}>
                <p>© Copyright 2024 | Design taken <a href="https://moocha-store-demo.myshopify.com/">here</a>.</p>
            </Col>
        </Row>
    
            
        </div>
    );
};

export default Footer;