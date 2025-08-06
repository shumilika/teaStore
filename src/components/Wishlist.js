import React, { useEffect } from 'react';
import PageHeader from './PageHeader';
import { Col, Row, Table, Button } from 'antd';
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
       <img src={item.image} alt={item.title} style={{ width: 100, height: 100,}} 
       onClick={()=>handleOpenItemCardAction(item.id)}/>
      <div>
       <Button type='link' onClick={()=>handleOpenItemCardAction(item.id)}>
         <p>{item.title}</p>
       </Button>
      </div>
    </div>
  ),
  price: <span>${item.price}.00</span>,
  action:<div className='btn-item'>
    <Button onClick={()=>handleOpenItemCardAction(item.id)}>select option</Button>
  </div>,
  remove:<div className='delete-icon-full-cart'>
  <CloseOutlined 
  style={{fontSize:'18px'}} 
  onClick={()=>handleDeleteFavoritesItemAction(item.id)}

  />

  </div>
}));

   

const columns = [
  {
    title: 'Product name',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Action',
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
                <Col span={12}>
                    <Table dataSource={dataSource} pagination={false} columns={columns} />
                   <div className='link-box'>
                     <Link to={'/shop'}>continue shopping</Link>
                   </div>
                </Col>    
            </Row>
        </div>
    );
};

export default Wishlist;