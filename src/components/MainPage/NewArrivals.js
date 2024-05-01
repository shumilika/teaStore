import React from 'react';
import { Row, Col, Carousel } from 'antd'
import SmallCard from '../../services/SmallCard';

const NewArrivals = () => {
    return (
        <div className='new-arrivals-box'>
         <Row>
            <Col span={24}>
                <h1>New Arrivals</h1>
                <p>Don't Miss Today's Featured Deals</p>
            </Col>
         </Row>   
     
            <Carousel>
           <div>
             
         <Row>
         <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
         </Row>
           </div>

           <div>
             
           <Row>
         <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
         </Row>
              </div>

              <div>
             
              <Row>
         <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
          <Col span={6}><SmallCard/></Col>
         </Row>
              </div>
            
          
            
            </Carousel>  
        
        </div>
    );
};

export default NewArrivals;