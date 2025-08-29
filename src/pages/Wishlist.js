import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader.js';
import { Col, Row, Table, Button, ConfigProvider } from 'antd';
import { useAuth } from '../contexts/AuthContext.js'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoritesList } from '../store/personalProduct.js';
import { CloseOutlined } from '@ant-design/icons'
import { deleteFavoritesItem } from '../services/productService.js';

const Wishlist = () => {
  const { currentUser } = useAuth()
  const favoritesData = useSelector(state => state.personalProduct.favoritesList)
  const navigate = useNavigate()
  const dispatch = useDispatch()



useEffect(() => {
  if (!currentUser) {
    navigate('/account/login')
  }
  else {
    dispatch(fetchFavoritesList(currentUser.uid))
  }
}, [currentUser]);

 const handleOpenItemCardAction = (id) => {
    navigate(`/shop/${id}`)
  }

  const handleDeleteFavoritesItemAction = (id) => {
    deleteFavoritesItem(currentUser.uid, id)
    dispatch(fetchFavoritesList(currentUser.uid))
  }


const dataSource = favoritesData.map((item) => ({
  key: item.id, 
  productName: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
       <img src={item.image} alt={item.title} style={{ width: 100, height: 100, cursor:'pointer'}} 
       onClick={()=>handleOpenItemCardAction(item.id)}/>
      <div className='btn-box-itemLink'>
       <Button type='link' onClick={()=>handleOpenItemCardAction(item.id)}>
         <p>{item.title}</p>
       </Button>
      </div>
    </div>
  ),
  price: <div className='center'><span className='span-box'>${item.price}.00</span></div>,
  action:<div className='btn-item center'>
    <Button onClick={()=>handleOpenItemCardAction(item.id)}>select option</Button>
  </div>,
  remove:<div className='delete-icon-full-cart center'>
  <CloseOutlined 
  style={{fontSize:'18px'}} 
  onClick={()=>handleDeleteFavoritesItemAction(item.id)}

  />

  </div>
}));

   

const columns = [
  {
    title: <div className='title-table-box'>Product name</div>,
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: <div className='title-table-box center'>Price</div>,
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: <div className='title-table-box center'>Action</div>,
    dataIndex: 'action',
    key: 'action',
  },
  {
    title: '',
    dataIndex: 'remove',
    key: 'remove',
  },
];

    return (
        <div className='wishlist-page'>
             <PageHeader title={'Wishlist'}/>
             <Row justify={'center'}>
                <Col span={24} style={{marginTop:'50px'}}>
                 <ConfigProvider
              theme={{
                components: {
                  Table: {
                    borderColor:'#dee2e6',
                    headerBorderRadius:0,
                    headerBg:'#fff',
                    headerColor:'#000',
                    rowHoverBg:'#fff'
                  },
                },
              }}
            >
                    <Table dataSource={dataSource} pagination={false} columns={columns}
                    bordered='true' style={{width:'70%',margin:'0 auto'}}
                     />
                    </ConfigProvider>
                   <div className='link-box'>
                     <Link to={'/shop'}>continue shopping</Link>
                   </div>
                </Col>    
            </Row>
        </div>
    );
};

export default Wishlist;