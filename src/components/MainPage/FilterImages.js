import React from 'react';
import { Row, Col} from 'antd';
import { useDispatch } from 'react-redux';
import { setProductList } from '../../store/products';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../config/fireBaseConfig';
import green_tea_filter from '../../img/green_tea_filter.jpg'
import black_tea_filter from '../../img/black_tea_filter.jpg'
import earl_grey_filter from '../../img/earl_grey_filter.jpg'
import masala_chai_filter from '../../img/masala_chai_filter.jpg'
import sencha_filter from '../../img/sencha_filter.jpg'
import matcha_filter from '../../img/matcha_filter.jpg'
import oolong_tea_filter from '../../img/oolong_tea_filter.jpg'
import puerh_tea_filter from '../../img/puerh_tea_filter.jpg'
import { Link } from 'react-router-dom';

const FilterImages = () => {

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
        <div className='filter_imgs_box'>
            <Row wrap={false} gutter={[40, 40]} justify='space-around'>
                <Col span={6}>
             
                <div className='filter_img_link'>
                <Link>
                <img src={black_tea_filter} width={'100%'} alt="" />
                </Link>
                </div>
                <div className='hover_text_box' >
                    <div>
                        <h2>Black tea</h2>
                        <Link to={'shop'} onClick={()=>handleFilter('black tea')}>Shop now</Link>
                    </div>
                </div>
    
                </Col>
                <Col span={6}>
             
             <div className='filter_img_link'>
             <Link>
             <img src={earl_grey_filter} width={'100%'} alt="" />
             </Link>
             </div>
             <div className='hover_text_box' >
                 <div>
                     <h2>Earl GreyS tea</h2>
                     <Link to={'shop'} onClick={()=>handleFilter('black tea')}>Shop now</Link>
                 </div>
             </div>
 
             </Col>
             <Col span={6}>
             
                <div className='filter_img_link'>
                <Link>
                <img src={masala_chai_filter} width={'100%'} alt="" />
                </Link>
                </div>
                <div className='hover_text_box' >
                    <div>
                        <h2>Masala Chai tea</h2>
                        <Link to={'shop'} onClick={()=>handleFilter('herbal tea')}>Shop now</Link>
                    </div>
                </div>
    
                </Col>
                <Col span={6}>
             
                <div className='filter_img_link'>
                <Link>
                <img src={green_tea_filter} width={'100%'} alt="" />
                </Link>
                </div>
                <div className='hover_text_box' >
                    <div>
                        <h2>Green tea</h2>
                        <Link to={'shop'} onClick={()=>handleFilter('green tea')}>Shop now</Link>
                    </div>
                </div>
    
                </Col>
                
            </Row>
            <Row wrap={false} gutter={[40, 40]}>
            <Col span={6}>
             
                <div className='filter_img_link'>
                <Link>
                <img src={matcha_filter} width={'100%'} alt="" />
                </Link>
                </div>
                <div className='hover_text_box' >
                    <div>
                        <h2>Matcha</h2>
                        <Link to={'shop'} onClick={()=>handleFilter('green tea')}>Shop now</Link>
                    </div>
                </div>
    
                </Col>
                <Col span={6}>
             
                <div className='filter_img_link'>
                <Link>
                <img src={sencha_filter} width={'100%'} alt="" />
                </Link>
                </div>
                <div className='hover_text_box' >
                    <div>
                        <h2>Sencha</h2>
                        <Link to={'shop'} onClick={()=>handleFilter('sencha tea')}>Shop now</Link>
                    </div>
                </div>
    
                </Col>
                <Col span={6}>
             
                <div className='filter_img_link'>
                <Link>
                <img src={oolong_tea_filter} width={'100%'} alt="" />
                </Link>
                </div>
                <div className='hover_text_box' >
                    <div>
                        <h2>Oolong tea</h2>
                        <Link to={'shop'} onClick={()=>handleFilter('oolong tea')}>Shop now</Link>
                    </div>
                </div>
    
                </Col>
                <Col span={6}>
             
                <div className='filter_img_link'>
                <Link>
                <img src={puerh_tea_filter} width={'100%'} alt="" />
                </Link>
                </div>
                <div className='hover_text_box' >
                    <div>
                        <h2>Pu'erh tea</h2>
                        <Link to={'shop'} onClick={()=>handleFilter('black tea')}>Shop now</Link>
                    </div>
                </div>
    
                </Col>

            </Row>
        </div>
    );
};

export default FilterImages;