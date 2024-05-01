import React from 'react';
import { Row, Col } from 'antd'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer_box'>
        <Row>
            <Col span={8}>
                <h4>Shop</h4>
                <ul>
                    <li><Link to={'contact_us'}>Contact us</Link></li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Products Return</li>
                </ul>
            </Col>
            <Col span={8}>
                <h4>About</h4>
                <ul>
                    <li>Help Center</li>
                    <li>Address store</li>
                </ul>
            </Col>
            <Col span={8}>
                <h4>Follow us</h4>
                <ul>
                    <li>mobile</li>
                    <li>phone</li>
                    <li>mail</li>
                    <li>address</li>
                </ul>
            </Col>
        </Row>
        <Row style={{borderTop:'1px #888585af solid'}}>
            <Col span={8}>
                <img src={logo} width={'80px'} alt="" />
            </Col>
            <Col span={8}>icons</Col>
            <Col span={8}>
                <p>© Copyright 2020 | MoochaStore By ShopiLaunch. Powered by Shopify.</p>
            </Col>
        </Row>
    
            
        </div>
    );
};

export default Footer;