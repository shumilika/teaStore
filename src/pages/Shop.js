import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Button, Col, Drawer, Radio, Row } from 'antd';
import {HolderOutlined, FilterOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../store/products';
import SmallCard from '../components/Card/SmallCard';
import FilterShop from '../components/FilterShop';

const Shop = () => {
  const productsData = useSelector(state=>state.products.productsList)
  const [loading, setLoading] = useState(true);
  const [radioValue, setRadioValue] = useState(5)
  const [isFilterOn, setIsFilterOn] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const dispatch = useDispatch()
  const favoritesData = useSelector(state=>state.personalProduct.favoritesList)
  const [mergedProducts, setMergedProducts] = useState([])
  const handleOpenFilter = () =>{
    setOpenFilter(!openFilter)
  }
  const handleCloseFilter =()=>{
    setOpenFilter(false)
  }

  useEffect(()=>{
    dispatch(fetchProductList()).finally(()=>setLoading(false))
  },[dispatch]) 

   useEffect(() => {
  if (productsData.length) {
    localStorage.setItem("productsList", JSON.stringify(productsData));
  }
}, [productsData]);

   useEffect(() => {
      if (productsData.length && favoritesData) {
        const wishlistIds = favoritesData.map((item) => item.id);
        const withFlags = productsData.map((product) => ({
          ...product,
          isLiked: wishlistIds.includes(product.id),
        }));
        setMergedProducts(withFlags);
      }
    }, [productsData, favoritesData]);

  const changeColumnSizeHandle = (e) =>{
    setRadioValue(e.target.value)
    
  }

  const changeFilterStateHandle = () =>{
    setIsFilterOn(!isFilterOn)
  }

    return (
        <div className='shop-box'>
            <PageHeader title={'Products'} style={'shop_bg'}/>
            <Row style={{margin:'50px 50px 20px 50px'}} className='web-version'>
                <Col span={12}><Button className='filter-btn' icon={<FilterOutlined />} onClick={changeFilterStateHandle}>Filter</Button></Col>
                <Col span={12} style={{justifyContent:'end', display:'flex'}}>
                    <div className='change_column_size'>
                     
                     <div className='change_column_size_content'>
                     <Radio.Group value={radioValue} onChange={changeColumnSizeHandle}>
                        <Radio.Button value={11}>2</Radio.Button>
                        <Radio.Button value={7}>3</Radio.Button>
                        <Radio.Button value={5}>4</Radio.Button>
                        <Radio.Button value={4}>5</Radio.Button>
                        </Radio.Group>
                     </div>
                     <Button className='change_btn' icon={<HolderOutlined style={{fontSize:'42px', color:'#232529'}} />} size='large' />
                     </div>
                    <div> 
                    
                
                    </div>
                </Col>
            </Row>
<Row style={{margin:'50px 10px 20px 20px'}} className='mob-version'>
                <Col span={24}>
                <Button className='filter-btn' icon={<FilterOutlined />} onClick={handleOpenFilter}>Filter</Button>
                </Col>
               
            </Row>

           <Row style={{margin:'0 50px'}} className='web-version'>
            <Col span={isFilterOn?6:0}>
              <FilterShop/>
            </Col>
            <Col span={isFilterOn?18:24}>
            {mergedProducts.length>0
            ?
            <Row justify="space-evenly">
            {mergedProducts.map((product, index) => (
            <Col key={index} span={radioValue===4?'':radioValue} flex={radioValue===4?'18.833333333333336%':'none'} >
              <SmallCard name={product.name} price={product.amount[0].price}
              description={product.description} amount={product.amount} type={product.type} 
              photo={product.photo} imgs={product.imgs} id={product.id} isLiked={product.isLiked}
               />
            </Col>
            ))}
            </Row>
            :
            <div style={{marginLeft:'20px'}}>
            <p style={{fontSize:'16px',fontWeight:'400',lineHeight:'24px',color:'rgb(33, 37, 41)' }}>Sorry, there are no products in this collection</p></div>}
            </Col>
           </Row>
            <Row style={{margin:'0 10px'}} className='mob-version'>
           
            <Col span={24}>
            {mergedProducts.length>0
            ?
            <Row justify="space-evenly">
            {mergedProducts.map((product, index) => (
            <Col key={index} lg={8} md={8} sm={12} xs={12}  >
              <SmallCard name={product.name} price={product.amount[0].price}
              description={product.description} amount={product.amount} type={product.type} 
              photo={product.photo} imgs={product.imgs} id={product.id} isLiked={product.isLiked}
               />
            </Col>
            ))}
            </Row>
            :
            <div style={{marginLeft:'20px'}}>
            <p style={{fontSize:'16px',fontWeight:'400',lineHeight:'24px',color:'rgb(33, 37, 41)' }}>Sorry, there are no products in this collection</p></div>}
            </Col>
           </Row>
          
          
           <Drawer
           placement='left'
        // title="Basic Drawer"
        onClose={handleCloseFilter}
        open={openFilter}
        closeIcon={false}
      >
      <FilterShop/>
      </Drawer>
            
        </div>
    );
};

export default Shop;