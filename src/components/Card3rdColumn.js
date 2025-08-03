import { Col, Divider, Row, Space } from 'antd';
import React from 'react';

const blocks = [
    {title: 'Why Choose Us?',
        description:'Official Herschel stockist Australian warranty assistance & support Australian shipping & returns.Customer first experience environmentally focused'
    },
    {
        title: 'Returns',
        description:'Return this product within 100 days if you change your mind. Get a refund/replacement & free return shipping if it arrives damaged or not as described'
    },
    {
        title: 'Shipping',
        description:'Free if stated near price. $9.95 Australia wide (up to 10 items). $18.95 for Express Post (generally 1 business day).'
    }
]

const Card3rdColumn = () => {
    return (
        <Row glutter={[16,16]} className='card3Column'>
        
            {blocks.map((value, index)=>
            <Col  key={index}>
            <div className='content-box'>
           <div>
             <h4 className='title'>{value.title}</h4>
            
          <div style={{boxSizing:'border-box'}} className='text-box'> 
           {value.description}
           </div>
           </div> 
          </div>
            </Col>)}
    
        </Row>
    );
};

export default Card3rdColumn;