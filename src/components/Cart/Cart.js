import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../PageHeader';
import { Table, Button, ConfigProvider, InputNumber, Row, Col } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocalCartList, fethCartList } from '../../store/personalProduct';
import { deleteCartItem, updateCartItemQuantity } from '../../services/productService';
import { useAuth } from '../../contexts/AuthContext';
import { CloseOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'

const Cart = () => {

  const {currentUser} = useAuth()
  const {cartList,totalCost} = useSelector(state=>state.personalProduct)
  const dispatch = useDispatch()
  const userId = currentUser?.uid
  const navigate = useNavigate()
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (cartList && cartList.length > 0) {
      const initialQuantities = {};
      cartList.forEach((item) => {
        initialQuantities[`${item.id}-${item.size}`] = item.quantity;
      });
      setQuantities(initialQuantities);
    }
  }, [cartList]);

  const handleDeleteItemFromCart = async (value) => {
    if(currentUser){
      await deleteCartItem(userId,value.item_id)
      dispatch(fethCartList(userId))
    } else {
      let updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
      updatedCart = updatedCart.filter(item => !(item.id === value.id && item.size === value.size));
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      dispatch(fetchLocalCartList()); 
    }
  }

  const handleOpenItemCardAction = (id) => {
    navigate(`/shop/${id}`)
  }

   const handleQuantityChange = (value, itemId, itemSize) => {
    const key = `${itemId}-${itemSize}`;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [key]: value,
    }));
  };

   const handleUpdateCart = async () => {
    if (currentUser) {
      
      await Promise.all(
        cartList.map((item) => {
          const key = `${item.id}-${item.size}`;
          const newQuantity = quantities[key];
          if (newQuantity !== item.quantity) {
            // Call a new function to update the quantity in Firebase
            return updateCartItemQuantity(userId, item.item_id, newQuantity);
          }
          return Promise.resolve();
        })
      );
      // Re-fetch cart data from Firebase
      dispatch(fethCartList(userId));
    } else {
      // Update local storage
      let updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCartList = updatedCart.map((item) => {
        const key = `${item.id}-${item.size}`;
        return {
          ...item,
          quantity: quantities[key] || item.quantity,
        };
      });
      localStorage.setItem('cart', JSON.stringify(updatedCartList));
      // Re-fetch cart data from local storage
      dispatch(fetchLocalCartList());
    }
  };
  
  const dataSource = cartList.map((item) => {
    const key = `${item.id}-${item.size}`;
    const currentQuantity = quantities[key] !== undefined ? quantities[key] : item.quantity;

    return {
      key: key,
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src={item.image}
            alt={item.title}
            className='img-table'
            onClick={() => handleOpenItemCardAction(item.id)}
          />
          <div className='name-btn-box'>
            <Button type='link' onClick={() => handleOpenItemCardAction(item.id)}>
              <p>{item.title}</p>
            </Button>
            <p style={{ color: '#959595', fontSize: '13px', paddingLeft: '15px' }}>
              {' '}
              {item.size}g / {item.type}
            </p>
          </div>
        </div>
      ),
      price: (
        <div className='cart-span'>
          <span>${item.price}.00</span>
        </div>
      ),
      quantity: (
        <div className='center'>
        <div className='web-version'>
          <ConfigProvider
            theme={{
              components: {
                InputNumber: {
                  handleVisible: true,
                  hoverBorderColor: '#000',
                  colorBorder: '#000',
                  activeBorderColor: '#000',
                  borderRadiusLG: 0,
                  handleFontSize: 12,
                  controlWidth: 70,
                  handleWidth: 25,
                  lineWidth: 2,
                  controlHeightLG: 45,
                },
              },
              token: {
                colorPrimary: '#000',
              },
            }}
          >
           
             <InputNumber
              size='large'
              controls={{ upIcon: <PlusOutlined />, downIcon: <MinusOutlined /> }}
              min={1}
              value={currentQuantity}
              onChange={(value) => handleQuantityChange(value, item.id, item.size)}
            />
           
           
          </ConfigProvider>
          </div>
          <div className='mob-version'>
           <ConfigProvider
            theme={{
              components: {
                InputNumber: {
                  handleVisible: true,
                  hoverBorderColor: '#000',
                  colorBorder: '#000',
                  activeBorderColor: '#000',
                  borderRadiusLG: 0,
                  handleFontSize: 8,
                  controlWidth:30,
                  lineWidth: 1,
                },
              },
              token: {
                colorPrimary: '#000',
              },
            }}
          >
             <InputNumber
              size='small'
              min={1}
              value={currentQuantity}
              onChange={(value) => handleQuantityChange(value, item.id, item.size)}
            />
            </ConfigProvider>
           </div>
        </div>
      ),
      total: (
        <div className='cart-span'>
          <span>${item.price * currentQuantity}.00</span>
        </div>
      ),
      action: (
        <div className='delete-icon-full-cart'>
          <CloseOutlined style={{ fontSize: '18px' }} onClick={() => handleDeleteItemFromCart(item)} />
        </div>
      ),
    };
  });

  const columns = [
    {
      title: <div className='title-table-box'>product name</div>,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: <div className='title-table-box center'>Price</div>,
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: <div className='title-table-box center'>
        <span className='web-version'>Quantity</span>
        <span className='mob-version'>Q</span>
      </div>,
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: <div className='title-table-box center'>total</div>,
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const dataSourceTotal = [{
    key: 1, 
    total: (
      <div>
        <Row style={{ display: 'flex', alignItems: 'center', gap: '20px', }}>
          <Col span={10} style={{fontSize:'16px'}}>Total:</Col>
          <Col span={10} style={{fontWeight:'600',fontSize:'16px'}}>
            ${totalCost}.00
          </Col>
        </Row>
        <div className='proceed-btn-box'>
          <Button onClick={()=>navigate('/checkout')}>proceed to checkout</Button>
        </div>
      </div>
    ),
  }]

  const columnTotal = [
    {
      title: <div className='title-table-box'>cart totals</div>,
      dataIndex: 'total',
      key: 'total',
    },
  ];

  return (
    <div className='cart-box'>
      <PageHeader title={'Cart'} titleLink={'Your Shopping Cart'} />
      <div style={{padding:'50px 0'}}>
        {(!cartList)
          ?
          <div style={{marginLeft:'auto', marginRight:'auto',  width:'70%'}} >
            <p>Your cart is currently empty.</p>
            <p>Continue browsing <Link to={'/shop'}>here</Link> .</p>
          </div>
          :
          <div>
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
              <div>
                <Table dataSource={dataSource} columns={columns}  className='table-box' 
                  bordered='true'  pagination={false}/>
              </div>
              <div className='update-shop-btn-box'>
                <Button className='update-btn' onClick={handleUpdateCart}>update cart</Button>
                <Button className='shop-btn' onClick={()=>navigate('/shop')}>continue shopping</Button>
              </div>
              <Table dataSource={dataSourceTotal} columns={columnTotal} className='total-table-box'
                bordered='true'  pagination={false}/>
            </ConfigProvider>
          </div>  
        }
      </div>        
    </div>
  );
};

export default Cart;