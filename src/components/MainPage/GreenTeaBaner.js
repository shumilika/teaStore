import React from 'react';
import green_tea_banner from '../../img/green_tea_banner.jpg'
import {Row, Col} from 'antd'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProductList } from '../../store/products';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../config/fireBaseConfig';


const GreenTeaBaner = () => {

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
        <div className='green-tea-banner'>
         <Row>
            <Col  flex={'60%'} className='banner-info'>
               <div>
               <h1>Green tea</h1>
                <p>Green tea lovers raise your hands! The many health benefits and most importantly its 
                role in aiding weight loss has made green tea one of the most popular beverages of the millennium. 
                While the beverage is relatively new and just about picking up in India, green tea has been consumed in 
                Japan and China for centuries.</p>
                
                <Link to={'shop'} onClick={()=>handleFilter('green tea')}>shop now</Link>
               </div>
            </Col>
            <Col flex={'40%'} >
               <Link>
               <img src={green_tea_banner} alt=""  />
               </Link>
            </Col>
         </Row>   
        </div>
    );
};

export default GreenTeaBaner;