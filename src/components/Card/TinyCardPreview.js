import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

const TinyCardPreview = (props) => {
    const [imgUrl, setImgUrl] = useState()
    useEffect(()=>{

        const storage = getStorage()
        
        const getPhotoUrl = () =>{
            getDownloadURL(ref(storage, `img/${props.photo}`))
              .then((url) => {
               setImgUrl(url)
              })
              .catch((error)=>{
                setImgUrl('')
              })
        }

        getPhotoUrl()
    },[props.photo])

    return (
        
        <Row className=''>
        <Col span={6}><Link to={`/shop/${props.id}`}>
        <img src={imgUrl} alt='' width={'120px'} />
        </Link>
        </Col>
        <Col flex={'auto'}>
        <Link to={`/shop/${props.id}`}>{props.name}</Link>
        <p>${props.price}.00 </p>
        </Col>
      </Row>
        
    );
};

export default TinyCardPreview;