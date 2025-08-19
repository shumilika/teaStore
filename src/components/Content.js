import React from 'react';
import Dashboard from './Dashboard';
import {Routes, Route} from 'react-router-dom'
import AboutUs from './AboutUs'
import Shop from './Shop'
import FAQS from './FAQS';
import ContactUs from './ContactUs';
import Cart from './Cart/Cart';
import FullPageCard from './Card/FullPageCard';
import ErrorPage from './ErrorPage';
import Wishlist from './Wishlist';
import LoginRegister from './Login/LoginRegister';
import Account from './Login/Account';
import BillingAddress from './Login/BillingAddress';
import Checkout from './Checkout';



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
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='account/login' element={<LoginRegister/>}/>
          <Route path='account' element={<Account/>}/>
          <Route path='account/billing_address' element={<BillingAddress/>} />
          <Route path='checkout' element={<Checkout/>} />
        </Routes>
      </div>
    );
};

export default Content;