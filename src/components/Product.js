import React, {useState} from 'react';
import style from '../css.modules/mainContent.module.css';

const Product = (props) => {

    const [favorite, setFavorite] = useState(true);

    let heartStyle = favorite ? 'bi bi-heart' : `bi bi-heart-fill ${style.color_green}`;

    const handleChangeFavoritesAction=()=>{
        setFavorite(!favorite);
        props.product.favorites = favorite;
        console.log(props.product);
    }


    return (
        
                <div className={`col ${style.cart_box}`}>
                <div className={'row'}>
               <a className={'col'} onClick={handleChangeFavoritesAction}> <i className={`${heartStyle}`}></i></a>
                <span className={`col ${style.shop_now}`}>shop now</span>
                </div>
                <img src={props.product.img} alt={'jasmine tea'} className={style.tea_img}/>

                <div className={`row  ${style.border_top_cart}`}>
                    <span className={'col align-middle'}>{props.product.title}</span>
                    <h4 className={'col'}>{props.product.price}$</h4>
                </div>

                </div>
        
    );
};

export default Product;