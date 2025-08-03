import React from 'react';
import { Carousel, Flex } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProductList } from '../../store/products';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/fireBaseConfig';





const Baners = () => {
  const dispatch = useDispatch()

  const handleFilter = async(value) => {
   
      setTimeout(async()=>{
        const type = where('type', "in", [value])
        const q = query(collection(db, "products"), type)
        const response = await getDocs(q)
        dispatch(setProductList(response.docs.map(doc => doc.data())))
      },2000)
  }
  
  

    return (
        <div className='banner-box'>
        <Carousel className='carousel'>

          <div className='greenTeaJapBox'>
           <div className='teaBox'>
           <p className='up-text'>Health benefits of green tea</p>
            <h1>Green Tea <br/> Japanese</h1>
            <p className='down-text'>About green tea for your health</p>
            <Link to={'shop'} onClick={()=>handleFilter('green tea')}>Shop now</Link>
           </div>
          </div>
          <div className='BlackTeaBox'>
           <div className='teaBox'>
           <p className='up-text'>Health benefits of black tea</p>
            <h1>Black Tea <br/> With The Freshest Teas</h1>
            <p className='down-text'>About black tea for your health</p>
            
            <Link to={'shop'} onClick={()=>handleFilter('black tea')}>Buy now</Link>
           </div>
          </div>
        </Carousel>  
          <Flex justify='space-around' className='flex-matcha-box'>
            <div className='matcha'>
               <div>
               <h2>Matcha <br /> Powder Natural</h2>
              
               <Link to={'shop'} onClick={()=>handleFilter('green tea')}>Shop now</Link>
               </div>
            </div>
            <div className='matcha'>
            <div>
            <h2>100% Organic</h2>
           
            <Link to={'shop'} onClick={()=>handleFilter('green tea')}>Shop now</Link>
            </div>
            </div>
          </Flex>
        </div>
    );
};

export default Baners;