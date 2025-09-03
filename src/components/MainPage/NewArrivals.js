import React, { useEffect, useState } from 'react';
import { Row, Col, Carousel, Spin } from 'antd'
import SmallCard from '../Card/SmallCard';
import { useDispatch, useSelector} from 'react-redux'
import { fetchNewArrivalList } from '../../store/products';

const NewArrivals = () => {

  const newArrivalList = useSelector(state=>state.products.newArrivalList)
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const favoritesData = useSelector(state=>state.personalProduct.favoritesList)
  const [mergedProducts, setMergedProducts] = useState([])
 
  useEffect(()=>{
    dispatch(fetchNewArrivalList()).finally(()=>setLoading(false))
   
  },[dispatch]) 

  useEffect(() => {
      if (newArrivalList.length && favoritesData) {
        const wishlistIds = favoritesData.map((item) => item.id);
        const withFlags = newArrivalList.map((product) => ({
          ...product,
          isLiked: wishlistIds.includes(product.id),
        }));
        setMergedProducts(withFlags);
      }
    }, [newArrivalList, favoritesData]);
  
    

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
  {mergedProducts.length > 0 ? (
    chunkArray(mergedProducts, 4).map((chunk, chunkIndex) => (
      <div key={chunkIndex} style={{width:'97%'}}>
        <Row justify="space-evenly" >
          {chunk.map((product, index) => (
            <Col key={index}  tabIndex={(chunkIndex * 4) + index}   xs={12} sm={12} md={8} lg={5}>
              <SmallCard data={product} name={product.name} price={product.amount[0].price}
              description={product.description} amount={product.amount} type={product.type} 
              photo={product.photo} imgs={product.imgs} id={product.id} isLiked={product.isLiked}
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