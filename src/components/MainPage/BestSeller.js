import React, { useEffect, useState } from 'react';
import { Row, Col, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBestSellersList } from '../../store/products';
import SmallCard from '../Card/SmallCard'

const BestSeller = () => {

  const bestSellerList = useSelector(state=>state.products.bestSellerList)
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const favoritesData = useSelector(state=>state.personalProduct.favoritesList)
  const [mergedProducts, setMergedProducts] = useState([])
 

   useEffect(() => {
    dispatch(fetchBestSellersList()).finally(() => setLoading(false));
  }, [dispatch]);

   useEffect(() => {
    if (bestSellerList.length && favoritesData) {
      const wishlistIds = favoritesData.map((item) => item.id);
      const withFlags = bestSellerList.map((product) => ({
        ...product,
        isLiked: wishlistIds.includes(product.id),
      }));
      setMergedProducts(withFlags);
    }
  }, [bestSellerList, favoritesData]);

  


    return (
        <>
          <Row style={{paddingBottom:'40px', marginTop:'-80px'}}>
          <Col span={24} style={{textAlign:'center'}}>
          <h2 style={{fontSize:'45px'}}>Best Seller</h2>
          </Col>
          </Row>

          <Row justify="space-evenly" gutter={[16, 16]}>
          {mergedProducts.length > 0 ? (
            mergedProducts.map((product, index) => (
      
            <Col key={index}  lg={5} md={9} sm={12} xs={12}>
              <SmallCard data={product} name={product.name} price={product.amount[0].price}
              description={product.description} amount={product.amount} type={product.type} 
              photo={product.photo} imgs={product.imgs} id={product.id} isLiked={product.isLiked}
               />
            </Col>
      
  ))) : (
    <Spin size='large' spinning={loading} />
  )} </Row>
        </>
    );
};


export default BestSeller;