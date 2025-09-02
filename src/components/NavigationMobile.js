import React, { useState } from 'react';
import { SearchOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { Menu, Flex } from 'antd';
import logo from '../img/logo_green.png'

import CartDrawer from './Cart/CartDrawer';
import SearchDrawer from './SearchDrawer';
import { useAuth } from '../contexts/AuthContext';
import { useSelector } from 'react-redux';
import MenuMobalDrawer from './MenuMobalDrawer';
import { useNavigate } from 'react-router-dom';

const NavigationMobile = () => {

  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openLogInModal, setOpenLogInModal] = useState(false)
 const navigate = useNavigate()
  const isCartEmpty = useSelector(state=>state.personalProduct.isCartEmpty)

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


const items2 = [
    {
      key: 'search',
      icon: <SearchOutlined onClick={showDrawerSearch}/>
      
    },
      {
        key: 'cart',
        icon:
  <div>
    <ShoppingCartOutlined onClick={showDrawer} style={{ fontSize: '24px'}} />
   {!isCartEmpty && <div className='green-badge-circle'></div>}
  </div>
      },
  
  ];

    return (
    
      <div className='navBarMob visibilityMob'>
     <div>
     <Flex justify='space-between'>
    
      <div style={{margin:'10px 0'}} className='logoNav'>
           
          <img src={logo} width={'50px'} alt='logo' onClick={()=>navigate('/')}/>
          
      </div>
     
    
    
      <div className='menuIcon'>
         <MenuOutlined onClick={showLogInModal}/>
      </div>
      
  
      <Menu className='mainMenu loginMenu'  mode="horizontal" 
      items={items2} style={{alignItems:'flex-end',bottom:'15px', position:'relative'}} />
    
      </Flex>

     </div>
     <CartDrawer onClose={onClose} open={open} />
     <SearchDrawer onClose={onCloseSearch} open={openSearch} />
      <MenuMobalDrawer onClose={onCloseLogInModal} open={openLogInModal} />
      </div>
    );
};

export default NavigationMobile;

