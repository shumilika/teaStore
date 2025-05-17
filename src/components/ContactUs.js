import React, { useState } from 'react';

import { Row, Col, Form, Input, Button, Alert } from 'antd'
import PageHeader from '../services/PageHeader';
import { Map, Marker } from '@vis.gl/react-google-maps';

const ContactUs = () => {

    const [visible, setVisible] = useState(false);
    const handleClose = () => {
        setVisible(false);
    };
    const [form] = Form.useForm();
    
   
    const onClick = async () => {
      try {
         await form.validateFields();
        setVisible(true)
      } catch (errorInfo) {
        // console.log('Failed:', errorInfo);
      }
    };

    return (
        <div className='contact_us_box'>
    <PageHeader title={'Contact us'}/>

    <Row  justify={'center'} className='row-box' >
        <Col className='map_box' span={12}>
        <Map
            style={{width: '100%', height: '600px'}}
            defaultCenter={{lat: 48.70180254381989, lng: 9.005266236691297}}
            defaultZoom={15}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
        >
        
    <Marker position={{lat: 48.70180254381989, lng: 9.005266236691297}} />

    </Map>
        </Col>
        <Col className='form_contactUs' span={12}>
        <Form
        form={form}
            name="basic"
            layout='vertical'
            wrapperCol={{
            span: 24,
            }}
            style={{width:'90%'}}
            initialValues={{
            remember: true,
            }}
        >
        {visible && (
            <Alert message="Thanks for contacting us. We'll get back to you as soon as possible." type="success"
             closable afterClose={handleClose} />
        )}
        
            <Form.Item
            
            name="name"
            rules={[
                {
                required: true,
                message: 'Please fill out this field.',
                },
            ]}
            >
            <Input   
                placeholder="Your Name"
            />
            </Form.Item>

            <Form.Item
            
            name="email"
            rules={[
                {
                required: true,
                message: 'Please fill out this field.',
                type:'email'
                },
            ]}
            >
            <Input 
                placeholder="Your Email"
            />
            </Form.Item>

            <Form.Item
            
            name="subject"
            rules={[
                {
                required: true,
                message: 'Please fill out this field.',
                
                },
            ]}
            >
            <Input 
                placeholder="Subject"
            />
            </Form.Item>

            <Form.Item 
                name={'message'}
                rules={[
                {
                required: true,
                message: 'Please fill out this field.',
                },
            ]}
            >
            <Input.TextArea  
                placeholder="Your Message"
            />
            </Form.Item>

            <Form.Item
            wrapperCol={{
                span: 16,
            }}
            >
            <Button type="primary" onClick={onClick} >
                Send to us
            </Button>
            </Form.Item>
  </Form>
        </Col>
    </Row>
    
        </div>
    );
};

export default ContactUs;