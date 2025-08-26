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
    <Col className='tine-card-preview-box' flex={'33.3%'}>
      <div className='first-div'>
        <div className='second-div'>
          <Link to={`/shop/${props.id}`}>
            <img src={imgUrl} alt=''/>
          </Link>
          <h6 className='header-h6'>
          <Link to={`/shop/${props.id}`}>{props.name}</Link>
          </h6>
          <span>${props.price}.00 </span>
        </div>
      </div>
    </Col>    
  );
};

export default TinyCardPreview;