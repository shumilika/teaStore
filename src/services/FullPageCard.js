import React, { useEffect, useState } from 'react';
import { Row, Col, Divider, Radio, InputNumber, Button } from 'antd'
import CarouselPreCart from './CarouselPreCart';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LeftOutlined from '@ant-design/icons/LeftOutlined'
import RightOutlined from '@ant-design/icons/RightOutlined'
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import TinyCardPreview from './TinyCardPreview';


const FullPageCard = () => {

  const { id } = useParams()
  const productsList = useSelector(state=>state.products.productsList)

  const [valueSize, setValueSize] = useState('');
  const [valueType, setValueType ] = useState('');
  const [valuePrice, setValuePrice] = useState('')
  const [valueCount, setValueCount] = useState('')
  const [prevPhoto, setPrevPhoto] = useState('')
  const [nextPhoto, setNextPhoto] = useState('')
 

 const product = productsList.find(item => item.id === id);
 const currentIndex = productsList.findIndex(item => item.id === id);
 const prevIndex = currentIndex > 0 ? productsList[currentIndex - 1] : null;
 const nextIndex = currentIndex < (productsList.length - 1) ? productsList[currentIndex + 1] : null;

 const storage = getStorage()
        
 const getPhotoUrlPrev = (photo) =>{
     getDownloadURL(ref(storage, `img/${photo}`))
       .then((url) => {
        setPrevPhoto(url)
       })
       .catch((error)=>{
         setPrevPhoto('')
       })
 }

 const getPhotoUrlNext = (photo) =>{
  getDownloadURL(ref(storage, `img/${photo}`))
    .then((url) => {
     setNextPhoto(url)
    })
    .catch((error)=>{
      setNextPhoto('')
    })
}

 useEffect(()=>{
  setValueSize(product.amount[0].size)
  setValueType(product.type)
  setValuePrice(product.amount[0].price)
  setValueCount(product.amount[0].count)
 },[product])

 useEffect(()=>{
  getPhotoUrlPrev(prevIndex.photo)
  getPhotoUrlNext(nextIndex.photo)
    
 },[prevIndex, nextIndex])

      const optionsSize = product.amount?product.amount.map(item => ({
        label: item.size,
        value: item.size
      })):'';
 
      const optionsType = [
        {
          label: product.type,
          value: product.type,
        }
      ];

      const onChangeSize = ({ target: { value } }) => {
        setValueSize(value);
        const foundItem = product.amount.find(item => item.size === value);
        setValuePrice(foundItem.price)
        setValueCount(foundItem.count)
      };

    return (
       
        <div className='full-card-box'>
<Row className='prev-next-box'>
  <Col span={24}>
  
  <Link to={`/shop/${prevIndex.id}`} className='prev'> <LeftOutlined /> <span>Prev</span> </Link>
  <Row className='prev-hover-box'>
    <Col span={6}><Link to={`/shop/${prevIndex.id}`}><img src={prevPhoto} alt='' /></Link>
    </Col>
    <Col flex={'auto'}>
    <Link to={`/shop/${prevIndex.id}`}>{prevIndex.name}</Link>
    <p>${prevIndex.amount[0].price}.00 </p>
    </Col>
  </Row>
  
  <Divider type="vertical" />
   
   <Link to={`/shop/${nextIndex.id}`} className='next'><span>Next</span>  <RightOutlined /> </Link>
   <Row className='next-hover-box'>
    <Col span={6}><Link to={`/shop/${nextIndex.id}`}><img src={nextPhoto} alt="" /></Link>
    </Col>
    <Col flex={'auto'}>
    <Link to={`/shop/${nextIndex.id}`}>{nextIndex.name}</Link>
    <p>${nextIndex.amount[0].price}.00 </p>
    </Col>
  </Row>
   
  </Col>
</Row>
            <Row gutter={[16, 16]}>
                <Col span={12}>
               <CarouselPreCart imgs={product.imgs} />
                </Col>
                <Col span={12}>
                    <h4>{product.name}</h4>
                    <span>${valuePrice}.00 USD</span>
                    <Divider/>
                    <p>{product.description}</p>
                     <Row className='radio-box'>
                       <Col flex={'100px'}> <p>Size</p></Col>
                       <Col flex={'auto'}>
                       <Radio.Group
                            options={optionsSize}
                            onChange={onChangeSize}
                            value={valueSize}
                            optionType="button"
                            buttonStyle="solid"
                        />
                       </Col>
                     </Row>
                     <Row  className='radio-box'>
                       <Col flex={'100px'}> <p>Type</p></Col>
                       <Col flex={'auto'}>
                       <Radio.Group
                            options={optionsType}
                            value={valueType}
                            optionType="button"
                            buttonStyle="solid"
                        />
                       </Col>
                     </Row>
                     <Row>
                      <Col >
                      <InputNumber min={1} max={valueCount} defaultValue={1}  />
                      </Col>
                      <Col >
                        <Button>Add to cart</Button>
                      </Col>
                     </Row>
                </Col>
            </Row>
        </div>
      
    );
};

export default FullPageCard;