
import React, { useEffect, useState } from 'react';
import { Col, Drawer, Input, Row } from 'antd';
import {db} from '../config/fireBaseConfig'
import { collection, getDocs } from 'firebase/firestore';
import TinyCardPreview from './Card/TinyCardPreview';
const { Search } = Input;

const SearchDrawer = (props) => {

  const [dataSearch, setDataSearch] = useState([])
  const [finalData, setFinalData] = useState([])
  const [value, setValue] = useState('empthy')
  
  const fetch = async ()=>{
    const response =  await getDocs(collection(db, 'products'))
		const dataFull = response.docs.map(doc => doc.data())
    setDataSearch(dataFull)
  }

  useEffect(()=>{
    fetch()
     },[])

  const onSearch = (value) => {
    setValue(value)
    function searchTeas(value) {
      if (value.length < 2) {
        return true;
      }
         let filter = dataSearch.filter(tea => 
        tea.name.toLowerCase().includes(value.toLowerCase()) ||
        tea.description.toLowerCase().includes(value.toLowerCase()) ||
        tea.type.toLowerCase().includes(value.toLowerCase())
      );
      if(filter.length>0) return filter
      else return false
    }
    setFinalData(searchTeas(value))
  
  }


    return (
      <Drawer className='search-box'
        placement='top'
        onClose={props.onClose} open={props.open}>
        
          <h1>Start typing and hit Enter</h1>

          <Search
      placeholder="Search anything"
      onSearch={onSearch}
      style={{
        marginTop:'50px',
        width: 800,
      }}
    />
  
    <Row justify="space-evenly" className='search-result'>
            {finalData.length>2 ? finalData.map((product, index) => (
            <Col key={index}  flex={'30%'} >
              <TinyCardPreview name={product.name} price={product.amount[0].price}
               photo={product.photo} id={product.id}
               />
            </Col>
            )): (finalData===true ? <p>You must enter at least 2 characters.</p>:(
              finalData===false ? <p>No result found for your search.</p>:''
            ))}
            
            </Row>
    
        </Drawer>
    );
};

export default SearchDrawer;