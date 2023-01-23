import React,{useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from '../css.modules/navigation.module.css';
import gen_style from '../css.modules/general.module.css';
import narrow from '../images/narrow.png';
import { cataloguePage, contactUsPage, homePage, favoritesPage, cartPage } from '../utils/constants';


const Navigation = () => {

    
    const location = useLocation(); 
    const {pathname} = location;
    
        useEffect(() => {}, []);
    
   
    let box_style = style.bg_box;

    if(pathname==='/'){
        box_style = style.bg_box
    }else if(pathname==="/cart"){
        box_style = style.bg_box_cart
    }else {
        box_style=style.bg_box_catalogue
    }

    return (
    
        <div className={box_style}>
  
        <div className={`d-flex justify-content-around`}>
        <div className={'p-2'}>
            <h4 id={style.logo}><Link id={gen_style.link} to={homePage}  >Elise</Link></h4>
        </div>
            <div id={'nav'} className={'p-2'}>
                <ul className={style.nav_main}>
                    <li>
                    <Link id={gen_style.link} to={cataloguePage}>Shop</Link>
                    </li>
                    <li>
                    {pathname==='/'&&
                    <a id={gen_style.link} href='#about' >About</a>
                }
                {pathname!=='/'&&
                <Link id={gen_style.link} to={homePage}>About</Link>
                }
                </li>
                    <li><Link id={gen_style.link} to={contactUsPage} >Contact us</Link></li>
                </ul>
            </div>
            <div className={'p-2'}>
                
              <span> <Link to={favoritesPage} ><i className={`bi bi-heart ${style.icon_style}`}></i></Link>
              </span><span> <Link to={cartPage} ><i className={`bi bi-bag ${style.icon_style}`}></i></Link>
              </span>
            </div>
        </div>


{pathname==='/'&&
      <div><Link id={gen_style.link} to={cataloguePage} >
      
        <div className={style.big_text}>
            <h1>Feel more </h1>
             <h1 id={style.than}> than can</h1>
        </div>
        <div className={style.narrow_box}>
            <img src={narrow} alt={'narrow'} className={style.narrow_img}/>
        </div>
        </Link>
        </div>
    }

        </div>
     
    );
};

export default Navigation;