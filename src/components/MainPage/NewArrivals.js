import React, { useEffect, useState } from 'react';
import { Row, Col, Carousel, Spin } from 'antd'
import SmallCard from '../../services/SmallCard';
import { useDispatch, useSelector} from 'react-redux'
import { fetchNewArrivalList } from '../../store/products';

const NewArrivals = () => {

  const newArrivalList = useSelector(state=>state.products.newArrivalList)
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  useEffect(()=>{
    setLoading(true)
    dispatch(fetchNewArrivalList())
    setTimeout(()=>{
      setLoading(false)
    },4000) 
  },[]) 

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };
  



    return (
        <div className='new-arrivals-box'>
         <Row>
            <Col span={24}>
                <h1>New Arrivals</h1>
                <p>Don't Miss Today's Featured Deals</p>
            </Col>
         </Row>   
     
           
            <Carousel>
  {newArrivalList.length > 0 ? (
    chunkArray(newArrivalList, 4).map((chunk, chunkIndex) => (
      <div key={chunkIndex}>
        <Row>
          {chunk.map((product, index) => (
            <Col key={index} span={6} tabIndex={(chunkIndex * 4) + index}>
              <SmallCard data={product} name={product.name} price={product.amount[0].price}
              description={product.description} amount={product.amount} type={product.type} 
              photo={product.photo} imgs={product.imgs} id={product.id}
               />
            </Col>
          ))}
        </Row>
      </div>
    ))
  ) : (
    <Spin size='large' spinning={loading} />
  )}
</Carousel>
        
        </div>
    );
};

export default NewArrivals;