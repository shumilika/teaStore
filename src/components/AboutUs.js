import React from 'react';
import {  Row, Col, Divider } from 'antd'
import justin_lisiakir from '../img/justin_lisiakir.jpg'
import web_designer from '../img/web_designer.jpg'
import sales_agent from '../img/sales_agent.jpg'
import marketing_staff from '../img/marketing_staff.jpg'
import PageHeader from './PageHeader';


const AboutUs = () => {
    return (
        <div className='about_us_box'>
      <PageHeader title={'About us'}/>

    <Row justify='center' className='row_box'>
      <Col span={12} className='about_us_img'>
        <img src={justin_lisiakir} alt="" />
      </Col>
      <Col span={12} className='about_us_info'>
      <span>Photographer</span>

<h5>Justin Lisiakir</h5>
<Divider style={{width:'50px', color:'#000'}}/>
<p>
We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. 
To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover 
all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss.
 We exist to give you the confidence to be whoever you want to be.
</p>
      </Col>
    </Row>

    <Row justify='center' className='row_box'>
     
      <Col span={12} className='about_us_info'>
      <span>Web Designer</span>

<h5>Angelika Hess</h5>
<Divider style={{width:'50px', color:'#000'}}/>
<p>
Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, 
offering our Ciloe Brands in more than 30 sizes – and we're committed to providing all sizes at the same price –
 so you can be confident we’ve got the perfect thing for you. We’re also proud to partner with GLAAD,
 one of the biggest voices in LGBTQ activism, on a gender-neutral collection to unite in accelerating acceptance.
</p>
      </Col>
      <Col span={12} className='about_us_img'>
        <img src={web_designer} alt="" />
      </Col>
    </Row>

    <Row justify='center' className='row_box'>
      <Col span={12} className='about_us_img'>
        <img src={sales_agent} alt="" />
      </Col>
      <Col span={12} className='about_us_info'>
      <span>Sales agent</span>

<h5>Alex Barnder</h5>
<Divider style={{width:'50px', color:'#000'}}/>
<p>
We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. 
To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all
 the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss.
 We exist to give you the confidence to be whoever you want to be.
</p>
      </Col>
    </Row>

    <Row justify='center' className='row_box'>
     
      <Col span={12} className='about_us_info'>
      <span>Marketing staff</span>

<h5>Angelika Hessas</h5>
<Divider style={{width:'50px', color:'#000'}}/>
<p>
We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. 
To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all 
the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. 
We exist to give you the confidence to be whoever you want to be.
</p>
      </Col>
      <Col span={12} className='about_us_img'>
        <img src={marketing_staff} alt="" />
      </Col>
    </Row>

    <div className='shop_with_us_box'>
     <Row justify='center'>
     <Col>
        <h1>Reasons to shop with us</h1>
      </Col>
     </Row>
      <Row>
        <Col span={8}>
          <h4>24/7 friendly support</h4>
          <p>
            Our support team always ready for you to 7 days a week
          </p>
        </Col>
        <Col span={8}>
        <h4>Free shipping & return</h4>
        <p>
          Free wordwide shipping on all area order above 100$
        </p>
        </Col>
        <Col span={8}>
          <h4>7 days easy return</h4>
          <p>
            Product any fault within 7 days for an immediately exchange
          </p>
        </Col>
      
      </Row>
    </div>
        </div>
    );
};

export default AboutUs;