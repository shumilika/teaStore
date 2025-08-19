import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import { APIProvider } from '@vis.gl/react-google-maps';
import { API_KEY_MAPS } from './services/constants';
import { useAuth } from './contexts/AuthContext';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFavoritesList, fetchLocalCartList, fethCartList } from './store/personalProduct';
import { fetchProductList } from './store/products';
import { Route, Routes } from 'react-router-dom';
import BillingAddress from './components/Login/BillingAddress';
import Account from './components/Login/Account';
import LoginRegister from './components/Login/LoginRegister';
import Wishlist from './components/Wishlist';
import ErrorPage from './components/ErrorPage';
import Cart from './components/Cart/Cart';
import FullPageCard from './components/Card/FullPageCard';
import Shop from './components/Shop';
import ContactUs from './components/ContactUs';
import FAQS from './components/FAQS';
import AboutUs from './components/AboutUs';
import Dashboard from './components/Dashboard';
import Checkout from './components/Checkout';


function App() {
  const {currentUser} = useAuth()
  const dispatch = useDispatch()

   useEffect(() => {
    dispatch(fetchProductList());
    if (currentUser) {
      dispatch(fethCartList(currentUser.uid));
      dispatch(fetchFavoritesList(currentUser.uid));
    } else {
      dispatch(fetchLocalCartList());
    }
  }, [currentUser, dispatch]);

    const MainLayout = () => (
    <div className='bgImage'>
      <Navigation />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="about_us" element={<AboutUs />} />
          <Route path="faqs" element={<FAQS />} />
          <Route path='contact_us' element={<ContactUs />} />
          <Route path='shop' element={<Shop />} />
          <Route path="shop/:id" element={<FullPageCard />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='account/login' element={<LoginRegister />} />
          <Route path='account' element={<Account />} />
          <Route path='account/billing_address' element={<BillingAddress />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );

  
  return (
    <APIProvider apiKey={API_KEY_MAPS}>
     <Routes>
        <Route path='checkout' element={<Checkout />} />
        <Route path='/*' element={<MainLayout />} />
      </Routes>
     </APIProvider>
  );
}

export default App;
