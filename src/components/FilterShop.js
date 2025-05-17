import React, { useState } from 'react';
import banner from '../img/banner_filter_shop.jpg'
import { Checkbox, Col, Row, Divider } from 'antd';
import { useDispatch } from 'react-redux';
import { setProductList } from '../store/products';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../config/fireBaseConfig';


const FilterShop = () => {

    
    const dispatch = useDispatch()
    const [checkedTypeTea, setCheckedTypeTea] = useState([])
    const [checkedSizeOption, setCheckedSizeOption] = useState([])
    const [checkedTags, setCheckedTags] = useState([])
    const [checkedPriceFilter, setCheckedPriceFilter] = useState([])

    const handleUpdateProductList = async(typeValue, sizeValue)=>{
        const size = sizeValue.length ? where('sizeFilter', "array-contains-any", sizeValue):''
        
        const type = typeValue.length ? where('type', 'in', typeValue):''

      
        const q = query(collection(db, "products"), type,size);
		const response = await getDocs(q)
        dispatch(setProductList(response.docs.map(doc => doc.data())))
    }
    
    const handleChangeFilterType = (checkedValue) =>{
        setCheckedTypeTea(checkedValue)
       handleUpdateProductList(checkedValue, checkedSizeOption)
    }

    const handleChangeFilterSize = (checkedValue) =>{
        setCheckedSizeOption(checkedValue)
        handleUpdateProductList(checkedTypeTea,checkedValue)
    }

    return (
        <div className='filter_shop_box'>
        <div className='categories'>
           <Divider orientation="left" orientationMargin="0">Categories</Divider>
         
            <Checkbox.Group onChange={handleChangeFilterType}>
            <Row>
                <Col span={24}><Checkbox value={'green tea'}>Green tea</Checkbox></Col>
                <Col span={24}><Checkbox value={'black tea'}>Black/Red tea</Checkbox></Col>
                <Col span={24}><Checkbox value={'white tea'}>White tea</Checkbox></Col>
                <Col span={24}><Checkbox value={'oolong'}>Oolong/Wulong tea</Checkbox></Col>
                <Col span={24}><Checkbox value={'fermented tea'}>Fermented & Pu'erh Tea</Checkbox></Col>
            </Row>
            </Checkbox.Group>
        </div>
            
        <div className='sizeOption'>
        <Divider orientation="left" orientationMargin="0">Size option</Divider>

            <Checkbox.Group onChange={handleChangeFilterSize}>
                <Checkbox value={50}>50g</Checkbox>
                <Checkbox value={100}>100g</Checkbox>
                <Checkbox value={250}>250g</Checkbox>
               <Checkbox value={500}>500g</Checkbox>
            </Checkbox.Group>
        </div>

        <div className='priceFilter'>
        <Divider orientation="left" orientationMargin="0">Price Filter</Divider>

            <Checkbox.Group>
               <Row>
               <Col span={24}><Checkbox value={5}>$5-$10</Checkbox></Col>
                <Col span={24}><Checkbox value={10}>$10-$20</Checkbox></Col>
                <Col span={24}><Checkbox value={20}>$20-$30</Checkbox></Col>
               </Row>
            </Checkbox.Group>
        </div>

        <div className='tags'>
        <Divider orientation="left" orientationMargin="0">Tags</Divider>

            <Checkbox.Group>
                
                <Checkbox value={10}>$10-$20</Checkbox>
                <Checkbox value={20}>$20-$30</Checkbox>
                <Checkbox value={5}>$5-$10</Checkbox>
                <Checkbox value={100}>100g</Checkbox>
                <Checkbox value={250}>250g</Checkbox>
                <Checkbox value={500}>500g</Checkbox>
                <Checkbox value={50}>50g</Checkbox>
                <Checkbox value={'black tea'}>Black tea</Checkbox>
                <Checkbox value={'fruit tea'}>Fruit tea</Checkbox>
                <Checkbox value={'green tea'}>Green tea</Checkbox>
                <Checkbox value={'herbal tea'}>Herbal tea</Checkbox>
                <Checkbox value={'oolong tea'}>Oolong</Checkbox>
                <Checkbox value={'oolong tea'}>Oolong tea</Checkbox>
                <Checkbox value={'white tea'}>White tea</Checkbox>
                
               
            </Checkbox.Group>
        </div>
        <div style={{width:'100%'}}>
            <img src={banner} alt="banner" style={{width:'95%'}} />
           
        </div>
        </div>
    );
};

export default FilterShop;