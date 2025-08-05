import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartOutlined, InfoOutlined } from '@ant-design/icons';
import { Row, Col, Tooltip } from 'antd';
import PreviewCard from './PreviewCard';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { addToFavorites } from '../../services/productService';
import { useAuth } from '../../contexts/AuthContext';

const SmallCard = ({id,name, price, type, amount, description, photo, imgs}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imgUrl, setImgUrl] = useState()
    const { currentUser } = useAuth()
    

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleAddToFavoritesAction = async () => {
         let newProduct = {
              id: id,
              title: name,
              price:price,
              image: photo, 
            }
         
            if (!currentUser) {
              alert("Please sign in first");
              return;
            }
        
            await addToFavorites(currentUser.uid, newProduct);
            alert("Added to favorites!");
        
            
    }
   

    useEffect(()=>{

        const storage = getStorage()
        
        const getPhotoUrl = () =>{
            getDownloadURL(ref(storage, `img/${photo}`))
              .then((url) => {
               setImgUrl(url)
              })
              .catch((error)=>{
                setImgUrl('')
              })
        }

        getPhotoUrl()
    },[photo])
        
        
    return (
        <div className='card-box'>
           
            <div className='card-link'>
           <Link to={`/shop/${id}`}>
           <img src={imgUrl} alt="" style={{width:'100%'}}/>
           </Link>
                
                
                <Row className='hideLink menu'>
                    <Col span={12} style={{borderRight:'2px solid #b1afaf'}}>
                        <Link onClick={handleAddToFavoritesAction}>
                            <Tooltip title={'add to Wishlist'}>
                                <HeartOutlined style={{fontSize: '20px', color:'#727272'}}/>
                            </Tooltip>
                        </Link> 
                    </Col>
                    <Col span={12}>
                        <Link onClick={showModal}>
                            <Tooltip title={'Quickview'}>
                                <InfoOutlined style={{fontSize: '20px', color:'#727272'}} />
                            </Tooltip>
                        </Link>
                    </Col>
                </Row>
            
                <p className='named'>{name}</p>
                <p className='hidePrice'>{price}.00$</p>
                <Link className='hideLink option' to={`/shop/${id}`}>
                    <Tooltip title={'Select option'}>Select option</Tooltip>
                </Link>
           
           </div>
           
           
           <PreviewCard isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}
           name={name} type={type} amount={amount} description={description} imgs={imgs} id={id}
            />
        </div>
    );
};

export default SmallCard;