import React, { useEffect, useState } from 'react';
import PageHeader from './PageHeader';
import { Button, Col, Radio, Row, Select } from 'antd';
import {HolderOutlined, FilterOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList, fetchProductListFilter } from '../store/products';
import SmallCard from './Card/SmallCard';
import FilterShop from './FilterShop';

const Shop = () => {
    const productsData = useSelector(state=>state.products.productsList)
  const [loading, setLoading] = useState(false);
  const [radioValue, setRadioValue] = useState(5)
  const [isFilterOn, setIsFilterOn] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    setLoading(true)
    dispatch(fetchProductList())
    setTimeout(()=>{
      setLoading(false)
    },4000) 
  },[]) 

  const changeColumnSizeHandle = (e) =>{
    setRadioValue(e.target.value)
    
  }

  const changeFilterStateHandle = () =>{
    setIsFilterOn(!isFilterOn)
  }

    return (
        <div className='shop-box'>
            <PageHeader title={'Products'} style={'shop_bg'}/>
            <Row style={{margin:'50px 50px 20px 50px'}}>
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
                    
                    <Select
                      defaultValue="Featured"
                      style={{ width: 160 }}
                      className='select-shop-featured'
                      options={[
                        { value: 'featured', label: 'Featured' },
                        { value: 'best selling', label: 'Best Selling' },
                        { value: 'alphabetically', label: 'Alphabetically, A-Z' },
                        { value: 'price high-low', label: 'Price, high to low' },
                        { value: 'price low-high', label: 'Price, low to high' },
                        { value: 'date old-new', label: 'Date, old to new' },
                        { value: 'date new-old', label: 'Date, new to old' },
                      ]}
                    />
                    </div>
                </Col>
            </Row>

           <Row style={{margin:'0 50px'}}>
            <Col span={isFilterOn?6:0}>
              <FilterShop/>
            </Col>
            <Col span={isFilterOn?18:24}>
            {productsData.length>0
            ?
            <Row justify="space-evenly">
            {productsData.map((product, index) => (
            <Col key={index} span={radioValue===4?'':radioValue} flex={radioValue===4?'18.833333333333336%':'none'} >
              <SmallCard name={product.name} price={product.amount[0].price}
              description={product.description} amount={product.amount} type={product.type} 
              photo={product.photo} imgs={product.imgs} id={product.id}
               />
            </Col>
            ))}
            </Row>
            :
            <div style={{marginLeft:'20px'}}>
            <p style={{fontSize:'16px',fontWeight:'400',lineHeight:'24px',color:'rgb(33, 37, 41)' }}>Sorry, there are no products in this collection</p></div>}
            </Col>
           </Row>
            
        </div>
    );
};

export default Shop;