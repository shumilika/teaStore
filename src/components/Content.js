import React from 'react';
import Dashboard from './Dashboard';
import {Routes, Route} from 'react-router-dom'
import AboutUs from './AboutUs'
import Shop from './Shop'
import FAQS from './FAQS';
import ContactUs from './ContactUs';
import Cart from './Cart';
import FullPageCard from '../services/FullPageCard';
import ErrorPage from './ErrorPage';



const Content = () => {
    return (
      <div >
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="about_us" element={<AboutUs />}/>
          <Route path="faqs" element={<FAQS />}/>
          <Route path='contact_us' element={<ContactUs/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path="shop/:id" element={<FullPageCard/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </div>
    );
};

export default Content;