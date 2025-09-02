import { Col, Drawer, Row, Button, Menu, ConfigProvider } from 'antd';
import React, { useState } from 'react';
import { MenuOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import LoginMob from './Login/LoginMob';

const MenuMobalDrawer = (props) => {
  const [isMenuActive,setIsMenuActive] = useState(true)

  const itemsMenu = [
  {
    label: <Link to={'/'} onClick={props.onClose}>Home</Link>,
    key: 'home', 
  },
  {
    label: <Link to={'shop'} onClick={props.onClose}>Shop</Link>,
    key: 'shop',    
  },
  {
    label: <Link to={'wishlist'} onClick={props.onClose}>Favorites</Link>,
    key: 'wishlist',    
  },
  {
    label: <Link to={'about_us'} onClick={props.onClose}>About us</Link>,
    key: 'about',    
  },
  {
    label: <Link to={'faqs'} onClick={props.onClose}>FAQS</Link>,
    key: 'faqs',    
  },
];


    const title =
     <Row style={{alignItems:'center', textAlign:'center'}} className='title-drawer-box'>
           <Col flex={4} style={{borderLeft:'1px solid #dedede', padding:'10px'}} className={isMenuActive?'active':''} onClick={()=>setIsMenuActive(true)}>
           <MenuOutlined/>
             <span style={{fontSize:'14px', fontWeight:'500',marginLeft:'10px', textTransform:'uppercase'}}>Menu</span>
           </Col>
           <Col flex={4} style={{borderLeft:'1px solid #dedede', padding:'10px'}} className={isMenuActive?'':'active'} onClick={()=>setIsMenuActive(false)}>
           <UserOutlined/>
             <span style={{fontSize:'14px', fontWeight:'500',marginLeft:'10px', textTransform:'uppercase'}}>Login</span>
           </Col>
         </Row>
    

    const footer = 
      <Row>
        <Col span={24}>
            <Button onClick={props.onClose} 
            style={{backgroundColor:'#98a86d', width:'100%', height:'50px',borderRadius:'0',
            color:'#fff', textTransform:'uppercase',
            fontWeight:'600', border:"0"}}>Close</Button>
        </Col>
      </Row>
   

    return (
      
        <Drawer className='menu-drawer-box' placement='left' title={title} onClose={props.onClose} open={props.open}
    footer={footer} closable={false} >
            {isMenuActive ?
           
               <Menu mode="vertical" 
       items={itemsMenu} style={{borderBottom:'0px', minWidth: 0, }}/>
            
        
        :
          <LoginMob/>
        
            }
        </Drawer>
        
    );
};

export default MenuMobalDrawer;