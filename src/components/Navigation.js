import React, { useState } from 'react';
import { SearchOutlined, HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Flex } from 'antd';
import logo from '../img/logo_green.png'
import logo_white from '../img/logo_white.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartDrawer from './CartDrawer';
import SearchDrawer from './SearchDrawer';
import LoginModal from './Login/LoginMainModal';

const Navigation = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate()

  const [navBar, setNavBar] = useState(false);
  const [current, setCurrent] = useState('');
  const [current2, setCurrent2] = useState('');
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openLogInModal, setOpenLogInModal] = useState(false)
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const showDrawerSearch = () => {
    setOpenSearch(true);
  };
  const onCloseSearch = () => {
    setOpenSearch(false);
  };

  const showLogInModal = () =>{
    setOpenLogInModal(true)
  }
  const onCloseLogInModal = () =>{
    setOpenLogInModal(false)
  }
    


const items = [
  {
    label: <Link to={'/'}>Home</Link>,
    key: 'home',
    
  },
  {
    label: <Link to={'shop'}>Shop</Link>,
    key: 'shop',    
  },
  {
    label: <Link to={'about_us'}>About us</Link>,
    key: 'about',    
  },
  {
    label: <Link to={'faqs'}>FAQS</Link>,
    key: 'faqs',    
  },
];

const items2 = [
    {
      key: 'search',
      icon: <SearchOutlined onClick={showDrawerSearch}/>
      
    },
    {
        key: 'user',
        icon: <UserOutlined onClick={showLogInModal}/>
        
      },
      {
        key: 'favorites',   
        icon: <HeartOutlined onClick={()=>navigate('/wishlist')}/>, 
      },
      {
        key: 'cart',
        icon: <ShoppingCartOutlined  onClick={showDrawer}/>
        
      },
  
  ];
  

const changeBackground = ()=>{
    if(window.scrollY >= 60){
        setNavBar(true)
    }else{
        setNavBar(false)
    }
}

const navBarStyleChange = ()=>{
  if(pathname===(''||'/')){
    return navBar?'navBarMain active':'navBarMain'
  }
  else return navBar?'navBar active':'navBar'
}

window.addEventListener('scroll', changeBackground)


  

    return (
    
      <div className={navBarStyleChange()}>
     <div>
     <Flex justify='space-between'>
    
      <div style={{margin:'10px 0'}} className='logoNav'>
          {(pathname===(''||'/')) ? <img src={logo_white} width={'70px'} alt='logo'/>
          :<img src={logo} width={'70px'} alt='logo'/>
          }
      </div>
     
    
    
       <Menu className='mainMenu middleMenu' selectedKeys={[current]} mode="horizontal" items={items} style={{borderBottom:'0px', minWidth: 0, flex:'auto', maxWidth:'600px' }}/>
      
  
      <Menu className='mainMenu loginMenu' selectedKeys={[current2]} mode="horizontal" items={items2} style={{alignItems:'flex-end',bottom:'15px', position:'relative'}} />
    
      </Flex>

     </div>
     <CartDrawer onClose={onClose} open={open} />
     <SearchDrawer onClose={onCloseSearch} open={openSearch} />
      <LoginModal onClose={onCloseLogInModal} open={openLogInModal} />
      </div>
    );
};

export default Navigation;