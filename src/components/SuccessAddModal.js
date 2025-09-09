import { Button, Checkbox, Col, Modal, Row } from 'antd';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CheckOutlined } from '@ant-design/icons'

const SuccessAddModal = ({open, onClose, product}) => {

    const navigate = useNavigate()
    const [imgUrl, setImgUrl] = useState()
    const {totalQuantity, totalCost} = useSelector(state => state.personalProduct)
    const [isVisible, setIsVisible] = useState(false)    
    useEffect(()=>{

        const storage = getStorage()
        
        const getPhotoUrl = () =>{
            getDownloadURL(ref(storage, `img/${product.image}`))
              .then((url) => {
               setImgUrl(url)
              })
              .catch((error)=>{
                setImgUrl('')
              })
        }

        getPhotoUrl()
    },[product.image])

    return (
        <Modal
         open={open}
         onCancel={onClose}
         footer={null}
         width={'auto'}
        
         className='modal-success'
        >
           <Row className='success-add-page'>
            <Col lg={12} md={12} sm={24} xs={24} className='current-product'>
                <p className='red-header-text'> <CheckOutlined /> Added to cart successfully!</p>
                <img src={imgUrl} alt="" width={'200px'} />
               <div className='product-info'>
                 <p className='product-title'>{product.title} - {product.size}g / {product.type}</p>
                <p className='text-uppercase'>Price :<span> ${product.price}.00</span></p>
                <p className='text-uppercase'>QTY :<span> {product.quantity}</span></p>
                <p className='text-uppercase'>Cart totals :<span> ${product.quantity * product.price}.00</span></p>
               </div>
            </Col>
            <Col  lg={12} md={12} sm={24} xs={24} className='cart-info'>
                <p>There are <span className='product-items'>{totalQuantity}</span> items <br /> in your cart</p>
                <p className='total-price'>Carts total: <span>${totalCost}.00</span></p>
              <div className='actions'>
                 <Row>
                  <Col span={24}>
                    <Button onClick={()=>navigate('/shop')} className='shop-btn'>continue shopping</Button>
                    </Col>
                    <Col span={24}>
                <Button onClick={()=>navigate('/cart')} className='go-to-cart'>go to cart</Button>
                </Col>
                <Col span={24}>
                <Checkbox onChange={(e)=>setIsVisible(e.target.checked)} style={{marginBottom:'16px'}}>
                <span className='checkbox-text'>Agree with term and conditional</span>
                </Checkbox>
                </Col>
                <Col span={24}>
                <Button onClick={()=>navigate('/checkout')}
                 className={isVisible?'go-to-cart':'go-to-cart disabled-btn'}>Proceed to checkout</Button>
                  </Col>
                 </Row>
              </div>
            </Col>
           </Row>
           
            
        </Modal>
    );
};

export default SuccessAddModal;