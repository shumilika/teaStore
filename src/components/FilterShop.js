import React, { useState } from 'react';
import banner from '../img/banner_filter_shop.jpg'
import { Checkbox, Col, Row, Divider } from 'antd';
import { useDispatch } from 'react-redux';
import { setProductList } from '../store/products';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/fireBaseConfig';


const FilterShop = () => {

    
    const dispatch = useDispatch()
    const [checkedTypeTea, setCheckedTypeTea] = useState([])
    const [checkedSizeOption, setCheckedSizeOption] = useState([])

    const handleUpdateProductList = async(typeValue, sizeValue)=>{
        let filters = [];

        if (typeValue.length > 0) {
            filters.push(where('type', 'in', typeValue));
        }

        if (sizeValue.length > 0) {
            filters.push(where('sizeFilter', 'array-contains-any', sizeValue));
        }

      
        const q = query(collection(db, 'products'), ...filters);
  const response = await getDocs(q);
  dispatch(setProductList(response.docs.map(doc => doc.data())));
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

       
        <div style={{width:'100%'}}>
            <img src={banner} alt="banner" style={{width:'95%'}} />
           
        </div>
        </div>
    );
};

export default FilterShop;