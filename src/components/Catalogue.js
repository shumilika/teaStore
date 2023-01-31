import React from 'react';
import Product from './Product';
import {goods} from '../utils/constants';


const Catalogue = () => {


    return (
        <div>
        <div className='navigation-type-sortby'>
            <ul>
                <li>All</li>
                <li>Green</li>
                <li>Oolong</li>
                <li>Fruit&herbal</li>
                <li>Black</li>
                <li>White</li>
                <li>accessories</li>
            </ul>
            <ul>
                <li>sort by</li>
                <li>price</li>
                <li>new</li>
                <li>discount</li>
                <li>popular</li>

            </ul>
        </div>
      
        <div className={`row`}>
                <div className={'col'}></div>{/* empty box */}
               
              
        { 
            Object.values(goods).map((value, index)=>
            
            <Product product={value} key={index}/>
            )
        }
        
        <div className={'col'}></div>{/* empty box */}
        </div>
            
        </div>    
    );
};

export default Catalogue;