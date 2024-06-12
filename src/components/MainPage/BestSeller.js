import React, { useEffect, useState } from 'react';
import { Row, Col, Spin } from 'antd';
import SmallCard from '../../services/SmallCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBestSellersList } from '../../store/products';

const BestSeller = () => {

  const bestSellerList = useSelector(state=>state.products.bestSellerList)
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  

  useEffect(()=>{
    setLoading(true)
     dispatch(fetchBestSellersList())
    setTimeout(()=>{
      setLoading(false)
    },3000) 
  },[]) 


    return (
        <>
          <Row style={{paddingBottom:'40px', marginTop:'-80px'}}>
          <Col span={24} style={{textAlign:'center'}}>
          <h2 style={{fontSize:'45px'}}>Best Seller</h2>
          </Col>
          </Row>

          <Row style={{padding:'10px'}}>
          {bestSellerList.length > 0 ? (
            bestSellerList.map((product, index) => (
      
            <Col key={index} span={6} >
              <SmallCard data={product} name={product.name} price={product.amount[0].price}
              description={product.description} amount={product.amount} type={product.type} 
              photo={product.photo} imgs={product.imgs}
               />
            </Col>
      
  ))) : (
    <Spin size='large' spinning={loading} />
  )} </Row>
        </>
    );
};


export default BestSeller;