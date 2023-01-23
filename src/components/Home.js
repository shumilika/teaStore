import React from 'react';
import style from '../css.modules/mainContent.module.css';
import icon_list from '../images/icon_list.png';
import girl_cup from '../images/girl_with_cup.png';
import tea_cups from '../images/tea_cups.jpg';
import jasmine_tea from '../images/jasmine_tea.png';

const Home = () => {
    return (
        <div className={`container ${style.main_box}`}>
<div className={`row ${style.row_box}`}>
            <div id={'about'} className={`col-xl-12 ${style.about_box}`}>
            <div className={style.float_left}>
                <h4 className={style.main_list_li}>
                    <img src={icon_list} alt={'list_icon'} width={'20px'}/>
                   <span> About</span>
                </h4>
                <p>
                    We're individual and independent <br/>
                    company. We think about our customers <br/>
                    and want to give them amaizing taste. We <br/>
                    have different kind of tea - sweet, mint, <br/>
                    hard, soft. Anything you want.
                </p>
                </div>
                <img className={style.float_right} src={girl_cup} alt={'pic'}/>
            </div>
            </div>
            <div className={`row ${style.row_box}`}>
            <div className={'row'}>
            <div className={`col-xl-12 ${style.bestsellers_box}`}>
                <h4 className={style.main_list_li}>
                <img src={icon_list} alt={'list_icon'} width={'20px'}/>
                   <span> Bestsellers</span>
                </h4>
            </div>
            </div>
            <div className={`row`}>
                <div className={'col'}></div>{/* empty box */}
               
               
                <div className={`col ${style.cart_box}`}>
                <div className={'row'}>
                <i className={`col bi bi-heart`}></i>
                <span className={`col ${style.shop_now}`}>shop now</span>
                </div>
                <img src={jasmine_tea} alt={'jasmine tea'} className={style.tea_img}/>

                <div className={`row  ${style.border_top_cart}`}>
                    <span className={'col align-middle'}>jasmine</span>
                    <h4 className={'col'}>115$</h4>
                </div>
                </div>

                <div className={`col ${style.cart_box}`}>
                <div className={'row'}>
                <i className={`col bi bi-heart`}></i>
                <span className={`col ${style.shop_now}`}>shop now</span>
                </div>
                <img src={jasmine_tea} alt={'jasmine tea'} className={style.tea_img}/>

                <div className={`row  ${style.border_top_cart}`}>
                    <span className={'col align-middle'}>jasmine</span>
                    <h4 className={'col'}>115$</h4>
                </div>

                </div>

                <div className={`col ${style.cart_box}`}>
                <div className={'row'}>
                <i className={`col bi bi-heart`}></i>
                <span className={`col ${style.shop_now}`}>shop now</span>
                </div>
                <img src={jasmine_tea} alt={'jasmine tea'} className={style.tea_img}/>

                <div className={`row  ${style.border_top_cart}`}>
                    <span className={'col align-middle'}>jasmine</span>
                    <h4 className={'col'}>115$</h4>
                </div>
                </div>

                <div className={`col ${style.cart_box}`}>
                <div className={'row'}>
                <i className={`col bi bi-heart`}></i>
                <span className={`col ${style.shop_now}`}>shop now</span>
                </div>
                <img src={jasmine_tea} alt={'jasmine tea'} className={style.tea_img}/>

                <div className={`row  ${style.border_top_cart}`}>
                    <span className={'col align-middle'}>jasmine</span>
                    <h4 className={'col'}>115$</h4>
                </div>
                </div>

                <div className={'col'}></div>{/* empty box */}
                
            </div>
            </div>
            <div className={`row ${style.row_box}`}>
                <div className={`col-xl-12 ${style.ceremony_box}`}>
              
                <img className={style.float_left} src={tea_cups} alt={'pic'} width={'400px'}/>

                <div className={style.float_right}>
                <h4 className={style.main_list_li}>
                    <img src={icon_list} alt={'list_icon'} width={'20px'}/>
                   <span> Ceremony</span>
                </h4>
                <p>
                    Special rituals. <br />
                    We need neat cups with your personality. <br />
                    It's not about drink - it's about magic.
                </p>
                </div>
            </div>
                
            
        </div>
        </div>
    );
};

export default Home;