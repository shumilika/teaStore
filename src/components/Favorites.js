import React from 'react';
import Product from './Product';
import {goods} from '../utils/constants';


const Favorites = () => {
    


    return (
        <div>
             <div className={`row`}>
                <div className={'col'}></div>{/* empty box */}
               
              
        {
          Object.values(goods).map((value, index)=>{ 
                if(value.favorites)
                {
              return  <Product product={value} key={index}/>}
              
             
               })}
        
        <div className={'col'}></div>{/* empty box */}
        </div>
        </div>
    );
};

export default Favorites;