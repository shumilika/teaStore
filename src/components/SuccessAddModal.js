import { Button, Checkbox, Col, Modal, Row } from 'antd';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SuccessAddModal = ({open, onClose, product}) => {

    const navigate = useNavigate()
    const [imgUrl, setImgUrl] = useState()
    const {totalQuantity, totalCost} = useSelector(state => state.personalProduct)
    
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
        >
           <Row>
            <Col span={12}>
                <img src={imgUrl} alt="" width={'200px'} />
                <p>{product.title} - {product.size}g / {product.type}</p>
                <p>Price: ${product.price}.00</p>
                <p>QTY: {product.quantity}</p>
                <p>Cart totals: ${product.quantity * product.price}.00</p>
            </Col>
            <Col span={12}>
                <p>There are {totalQuantity} items in your cart</p>
                <p>Carts total: ${totalCost}.00</p>
                <Button onClick={()=>navigate('/shop')}>continue shopping</Button>
                <Button onClick={()=>navigate('/cart')}>go to cart</Button>
                <Checkbox>Agree with term and conditional</Checkbox>
                <Button>Proceed to checkout</Button>
            </Col>
           </Row>
            
        </Modal>
    );
};

export default SuccessAddModal;