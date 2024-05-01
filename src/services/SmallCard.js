import React from 'react';
import lemonTea from '../img/lemonGinger.jpg'
import { Link } from 'react-router-dom';
import { HeartOutlined, InfoOutlined } from '@ant-design/icons';
import { Row, Col, Tooltip } from 'antd';

const SmallCard = () => {
    return (
        <div className='card-box'>
           <Link className='card-link' to={'to card'}>
                <img src={lemonTea} alt="" style={{height:'400px'}}/>
                
                <Row className='hideLink menu'>
                    <Col span={12} style={{borderRight:'2px solid #b1afaf'}}>
                        <Link to={'to favorites'}>
                            <Tooltip title={'add to Wishlist'}>
                                <HeartOutlined style={{fontSize: '20px', color:'#727272'}}/>
                            </Tooltip>
                        </Link> 
                    </Col>
                    <Col span={12}>
                        <Link to={'to preview'}>
                            <Tooltip title={'Quickview'}>
                                <InfoOutlined style={{fontSize: '20px', color:'#727272'}}/>
                            </Tooltip>
                        </Link>
                    </Col>
                </Row>
            
                <p className='named'>Lemongrass & Ginger</p>
                <p className='hidePrice'>$12.00</p>
                <Link className='hideLink option' to={'from select'}>
                    <Tooltip title={'Select option'}>Select option</Tooltip>
                </Link>
           
           </Link>
        </div>
    );
};

export default SmallCard;