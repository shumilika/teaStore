import React from 'react';
import Home from './Home';
import Catalogue from './Catalogue';
import PayPage from './PayPage';
import Cart from './Cart';
import ContactUs from './ContactUs';
import Favorites from './Favorites';
import { Route, Routes } from 'react-router-dom';
import { cartPage, cataloguePage, contactUsPage, favoritesPage, homePage } from '../utils/constants';






const Content = () => {
    return (
        <Routes>
        
        <Route exact path={homePage} element={<Home/>}/>
    
        <Route path={cataloguePage} element={<Catalogue/>}/>
            
        <Route path={contactUsPage} element={<ContactUs/>}/>
          
        <Route path={cartPage} element={<Cart/>}/>

        <Route path={favoritesPage} element={<Favorites/>}/>
            
       
        </Routes>
    );
};

export default Content;