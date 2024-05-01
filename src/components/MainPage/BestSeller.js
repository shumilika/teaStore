import React from 'react';
import { Row, Col } from 'antd';
import SmallCard from '../../services/SmallCard';

const BestSeller = () => {
    return (
        <>
          <Row style={{paddingBottom:'40px', marginTop:'-80px'}}>
          <Col span={24} style={{textAlign:'center'}}>
          <h2 style={{fontSize:'45px'}}>Best Seller</h2>
          </Col>
          </Row>

          <Row style={{padding:'10px'}}>
          <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
            
          </Row>
          <Row  style={{padding:'10px'}}>
          <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
            
          </Row>
        </>
    );
};

export default BestSeller;