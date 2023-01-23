import React from 'react';
import style from '../css.modules/footer.module.css';

const Footer = () => {
    return (
        <div className={`row text-center pt-5 ${style.footer}`}>
        
            <div className={'col-4'}>
                @ Ellise - tea 2022
            </div>
            <div className={'col-4'}>
                Shop About Contact us
            </div>
            <div className={'col-4'}>
                Instagram <br />
                Facebook <br />
                WhatsApp
            </div>
            
        </div>
    );
};

export default Footer;