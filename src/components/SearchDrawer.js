import React, { useEffect, useState } from 'react';
import { Col, ConfigProvider, Drawer, Input, Row } from 'antd';
import {db} from '../config/fireBaseConfig'
import { collection, getDocs } from 'firebase/firestore';
import TinyCardPreview from './Card/TinyCardPreview';
const { Search } = Input;

const SearchDrawer = (props) => {

  const [dataSearch, setDataSearch] = useState([])
  const [finalData, setFinalData] = useState([])
  const [inputValue, setInputValue] = useState('')
  
  const fetch = async ()=>{
    const response =  await getDocs(collection(db, 'products'))
		const dataFull = response.docs.map(doc => doc.data())
    setDataSearch(dataFull)
  }

  useEffect(()=>{
    fetch()
  },[])

  const handleSearch = (e) => {
    const value = e.target.value
    setInputValue(value)
    if (value.length === 0) {
      setFinalData([]);
      return;
    }

    if (value.length < 2) {
      setFinalData(true); 
      return;
    }

    const filteredData = dataSearch.filter(tea =>
      tea.name.toLowerCase().includes(value.toLowerCase()) ||
      tea.description.toLowerCase().includes(value.toLowerCase()) ||
      tea.type.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length > 0) {
      setFinalData(filteredData);
    } else {
      setFinalData(false); 
    }
  };

  return (
    <Drawer className='search-box'
    
      placement='top'
      onClose={props.onClose} open={props.open}>
        
        <h1>Start typing and hit Enter</h1>
        <ConfigProvider
          theme={{
            components:{
              Input:{
                activeBorderColor:'#fff',
                activeShadow:'0',
                colorPrimaryHover:'$color-link-hover',
                colorText:'#000'
              },
              Button:{
                defaultHoverBorderColor:'#e8e8e8',
                defaultActiveBorderColor:'#e8e8e8',
              }
            }
          }}
        >
          <div className='search-input'>
            <Search
            placeholder="Search anything"
            onChange={handleSearch}
            // style={{
            //   marginTop:'50px',
            //   width: 900,
            //   padding:'0 5px 0 15px'
            // }}
            value={inputValue}
          />
          </div>
        </ConfigProvider>
  
        <Row  className='search-result' justify={'start'}>
          {Array.isArray(finalData) 
          ? 
          (
          finalData.map((product, index) => (
          
              <TinyCardPreview 
                name={product.name} 
                price={product.amount[0].price}
                photo={product.photo} 
                id={product.id}
                key={index}
              />
          
          ))
        ) : finalData === true ? (
          <p>You must enter at least 2 characters.</p>
        ) : finalData === false ? (
          <p>No result found for your search.</p>
        ) : ''}
      </Row>
    
        </Drawer>
    );
};

export default SearchDrawer;