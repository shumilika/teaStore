import React from 'react';
import green_tea_banner from '../../img/green_tea_banner.jpg'
import {Row, Col} from 'antd'
import ButtonAdv from '../../services/ButtonAdv';
import { Link } from 'react-router-dom';

const GreenTeaBaner = () => {
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
                <ButtonAdv name={'shop now'}/>
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