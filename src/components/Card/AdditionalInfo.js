import { Col, Row } from 'antd';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';

const AdditionalInfo = ({photo}) => {
    const [photoUrl, setPhotoUrl] = useState('')
    useEffect(()=>{
        if (photo) { 
            const storage = getStorage()
            getDownloadURL(ref(storage, `img/${photo}`))
                .then((url) => {
                    setPhotoUrl(url)
                })
                .catch((error)=>{
                    setPhotoUrl('')
                })
        } else {
            setPhotoUrl('');
        }
    },[photo])

    return (
        <Row className='additional-info-page'>
        <Col lg={16} md={16} sm={24} xs={24}>
           <div className='title-content'>
             <h6>More Infomation To You</h6>
            <h2>Things you need to know</h2>
           </div>
          <Row>
            <Col lg={12} md={12} sm={24} xs={24} style={{padding:'0 15px'}}>
                 <div className='ssl-text'>
            <p>
                We use industry standard SSL encryption to protect your details. Potentially sensitive 
                information such as your name, address and card details are encoded so they can only 
                be read on the secure server.
            </p>
           </div>
           <div>
            <ul className='list-add-info'>
                <li> Safe Payments</li>
                <li>Accept Credit Cart</li>
                <li>Different Payment Method</li>
                <li>Price Include VAT</li>
                <li>Easy To Order</li>
            </ul>
           </div>
            </Col>
             <Col lg={12} md={12} sm={24} xs={24} style={{padding:'0 15px'}}>
            <div>
                <ul className='list-add-info'>
                   <h3> Express Delivery</h3>
                    <li>Europe & USA within 2-4 days</li>
                    <li>Rest of the world within 3-7 days</li>
                    <li>Selected locations</li>
                </ul>
            </div>
            <div>
                <ul className='list-add-info'>
                    <h3>Need more information</h3>
                    <li>Orders & Shipping</li>
                    <li>Returns & Refunds</li>
                    <li>Payments</li>
                    <li>Your Orders</li>
                </ul>
            </div>
        </Col>
          </Row>
        </Col>
       
        <Col lg={8} md={8} sm={0} xs={0}>
            <div>
                <img src={photoUrl} alt='photo' width={'90%'}/>
            </div>
        </Col>
            
        </Row>
    );
};

export default AdditionalInfo;