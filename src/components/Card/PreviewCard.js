import React, { useState } from 'react';
import { Modal, Row, Col, Divider, Radio, InputNumber, Button, ConfigProvider } from 'antd'
import CarouselPreCart from '../CarouselPreCart';
import { useAuth } from '../../contexts/AuthContext';
import { addToCart } from '../../services/productService';
import { fethCartList, fetchLocalCartList } from '../../store/personalProduct';
import { useDispatch } from 'react-redux';
import SuccessAddModal from '../SuccessAddModal';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';


const PreviewCard = (props) => {

  const [valueSize, setValueSize] = useState(props.amount?props.amount[0].size:'');
  const [valueType, ] = useState(props.type);
  const [valuePrice, setValuePrice] = useState(props.amount?props.amount[0].price:'')
  const [valueCount, setValueCount] = useState(props.amount?props.amount[0].count:'')
  const [quantity, setQuantity] = useState(1)
  const [finalCard,setFinalCard] = useState({})
  const [openAddCardModal, setOpenAddCardModal] = useState(false)
  const { currentUser } = useAuth()
  const dispatch = useDispatch()
  const handleCloseAddCardModal = () => {
    setOpenAddCardModal(false)
  }

  const optionsSize = props.amount?props.amount.map(item => ({
    label: `${item.size}G`,
    value: item.size
  })):'';
 
  const optionsType = [
    {
      label: props.type,
      value: props.type,
    }
  ];

  const onChangeSize = ({ target: { value } }) => {
    setValueSize(value);
    const foundItem = props.amount.find(item => item.size === value);
    setValuePrice(foundItem.price)
    setValueCount(foundItem.count)
  };

  const handleAddToCart = async () => {
    let newProduct = {
      id: props.id,
      quantity:quantity,
      size:valueSize,
      title: props.name,
      price:valuePrice,
      image: props.imgs[0],
      type: props.type, 
    } 
    setFinalCard(newProduct)
    
    if (!currentUser) {
      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const existingProductIndex = cartItems.findIndex(item => item.id === newProduct.id && item.size === newProduct.size);

      if (existingProductIndex !== -1) {
        cartItems[existingProductIndex].quantity += newProduct.quantity;
      } else {
        cartItems.push(newProduct);
      }
      localStorage.setItem('cart', JSON.stringify(cartItems));
      dispatch(fetchLocalCartList())
      setOpenAddCardModal(true);
    }else{
      await addToCart(currentUser.uid, newProduct)
      dispatch(fethCartList(currentUser.uid))
      setOpenAddCardModal(true)
    }
  }

  return (
    <Modal open={props.isModalOpen} onOk={props.handleOk} onCancel={props.handleCancel} width={800} 
      className={'preview-card-box'} centered footer={null} >
      <ConfigProvider
        theme={{
          components: {
            Radio: {
              buttonSolidCheckedBg: '#000',
              buttonSolidCheckedHoverBg:'#000',
              buttonSolidCheckedActiveBg: '#000',
              colorPrimary:'#000',
              colorPrimaryHover:'#000',
              borderRadius:0,
              controlHeight:40,
              buttonColor:'rgba(0,0,0,0.55)',
            },
            InputNumber: {
              handleVisible:true,
              hoverBorderColor:'#000',
              colorBorder:'#000',
              activeBorderColor:'#000',
              borderRadiusLG:0,
              handleFontSize:12,
              controlWidth:70,
              handleWidth:25,
              lineWidth:2,
              controlHeightLG:45
            },                     
          },
          token: {
            colorPrimary: '#000',
          }
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <CarouselPreCart imgs={props.imgs} />
          </Col>  
          <Col span={12}>
           <Link to={`/shop/${props.id}`} className='title-link'> <h4>{props.name}</h4></Link>
            <span>${valuePrice}.00 USD</span>
            <Divider/>
            <p className='description-box'>{props.description}</p>
            <Row className='radio-box' wrap={false}>
    <Col flex={'100px'}> <p>Size</p></Col>
    <Col flex={'auto'}>
        <Row gutter={[8, 8]} wrap>
            {optionsSize.map((option) => (
                <Col key={option.value}  className='radio-btn-size'>
                    <Radio.Button
                        value={option.value}
                        checked={valueSize === option.value}
                        onChange={onChangeSize}
                    >
                        {option.label}
                    </Radio.Button>
                </Col>
            ))}
        </Row>
    </Col>
</Row>
            <Row  className='radio-box' style={{textTransform:'uppercase', marginTop:'15px'}}>
              <Col flex={'100px'}> <p>Type</p></Col>
              <Col flex={'auto'}> 
                <Radio.Group
                  options={optionsType}
                  value={valueType}
                  optionType="button"
                  buttonStyle="solid"
                />
              </Col>
            </Row>
            <Row style={{margin:'20px 0'}}>
              <Col style={{margin:'5px 10px 0 0'}}>
                <InputNumber 
                  size='large'
                  controls= {{ upIcon: <PlusOutlined /> , downIcon: <MinusOutlined />  }}
                  min={1} max={valueCount} 
                  defaultValue={quantity} 
                  onChange={setQuantity}  />
              </Col>
              <Col >
                <Button onClick={handleAddToCart}>Add to cart</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </ConfigProvider>
      <SuccessAddModal open={openAddCardModal} onClose={handleCloseAddCardModal} product={finalCard}/>
        
    </Modal>  
  );
};

export default PreviewCard;