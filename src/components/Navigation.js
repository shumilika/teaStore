import React, { useState } from 'react';
import { SearchOutlined, HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Flex } from 'antd';
import logo from '../img/logo.png'
import { Link, useLocation } from 'react-router-dom';
import CartDrawer from '../services/CartDrawer';
import SearchDrawer from './SearchDrawer';

const Navigation = () => {
  const location = useLocation();
  const { pathname } = location;

    const [navBar, setNavBar] = useState(false);
    const [current, setCurrent] = useState('');
    const [current2, setCurrent2] = useState('');
    const [open, setOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
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
        icon: <UserOutlined/>
        
      },
      {
        key: 'favorites',   
        icon: <HeartOutlined/>, 
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
    
      <div style={{margin:'10px'}} className='logoNav'>
        <img src={logo} width={'100px'} alt='logo'/>
      </div>
     
    
    
       <Menu className='mainMenu middleMenu' selectedKeys={[current]} mode="horizontal" items={items} style={{borderBottom:'0px', minWidth: 0, flex:'auto', maxWidth:'600px' }}/>
      
  
      <Menu className='mainMenu loginMenu' selectedKeys={[current2]} mode="horizontal" items={items2} style={{alignItems:'flex-end'}} />
    
      </Flex>

     </div>
     <CartDrawer onClose={onClose} open={open} />
     <SearchDrawer onClose={onCloseSearch} open={openSearch} />

      </div>
    );
};

export default Navigation;