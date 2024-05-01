import React from 'react';
import { Carousel, Flex } from 'antd';
import ButtonAdv from '../../services/ButtonAdv';



const Baners = () => {
    return (
        <div className='banner-box'>
        <Carousel className='carousel'>

          <div className='greenTeaJapBox'>
           <div className='teaBox'>
           <p className='up-text'>Health benefits of green tea</p>
            <h1>Green Tea <br/> Japanese</h1>
            <p className='down-text'>About green tea for your health</p>
            <ButtonAdv name='Shop now'/>
           </div>
          </div>
          <div className='BlackTeaBox'>
           <div className='teaBox'>
           <p className='up-text'>Health benefits of black tea</p>
            <h1>Black Tea <br/> With The Freshest Teas</h1>
            <p className='down-text'>About black tea for your health</p>
            <ButtonAdv name='Buy now'/>
           </div>
          </div>
        </Carousel>  
          <Flex justify='space-around' className='flex-matcha-box'>
            <div className='matcha'>
               <div>
               <h2>Matcha <br /> Powder Natural</h2>
               <ButtonAdv name='Shop now'/>
               </div>
            </div>
            <div className='matcha'>
            <div>
            <h2>100% Organic</h2>
            <ButtonAdv name='Shop now'/>
            </div>
            </div>
          </Flex>
        </div>
    );
};

export default Baners;