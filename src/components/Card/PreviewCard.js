import React, { useState } from 'react';
import { Modal, Row, Col, Divider, Radio, InputNumber, Button, ConfigProvider } from 'antd'
import CarouselPreCart from '../CarouselPreCart';
import { useAuth } from '../../contexts/AuthContext';
import { addToCart } from '../../services/productService';
import { fethCartList } from '../../store/personalProduct';
import { useDispatch } from 'react-redux';


const PreviewCard = (props) => {

  const [valueSize, setValueSize] = useState(props.amount?props.amount[0].size:'');
  const [valueType, ] = useState(props.type);
  const [valuePrice, setValuePrice] = useState(props.amount?props.amount[0].price:'')
  const [valueCount, setValueCount] = useState(props.amount?props.amount[0].count:'')
  const [quantity, setQuantity] = useState(1)
  const { currentUser } = useAuth()
  const dispatch = useDispatch()
 

  

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
        
           
            if (!currentUser) {
              alert("Please sign in first");
              return;
            }
        
            await addToCart(currentUser.uid, newProduct);
            alert("Added to cart!");

            dispatch(fethCartList(currentUser.uid))
  }

    return (
       
        <Modal open={props.isModalOpen} onOk={props.handleOk} onCancel={props.handleCancel} width={800} 
        className={'preview-card-box'} centered footer={null} >
            <Row gutter={[16, 16]}>
                <Col span={12}>
               <CarouselPreCart imgs={props.imgs} />
                </Col>
                <Col span={12}>
                    <h4>{props.name}</h4>
                    <span>${valuePrice}.00 USD</span>
                    <Divider/>
                    <p>{props.description}</p>
                     <Row className='radio-box'>
                       <Col flex={'100px'}> <p>Size</p></Col>
                       <Col flex={'auto'}>
                       <ConfigProvider
                          theme={{
                            components: {
                              Radio: {
                                  colorPrimary:'#000',
                                  borderRadius:0,
                                  colorPrimaryHover: '#000',
                                  buttonPaddingInline: '20px',
                                  

                              },
                            },
                          }}
                        >
      
      
                       <Radio.Group
                            options={optionsSize}
                            onChange={onChangeSize}
                            value={valueSize}
                            optionType="button"
                            buttonStyle="solid"
                        />
                        </ConfigProvider>
                       </Col>
                     </Row>
                     <Row  className='radio-box'>
                       <Col flex={'100px'}> <p>Type</p></Col>
                       <Col flex={'auto'}>
                       <ConfigProvider
                          theme={{
                            components: {
                              Radio: {
                                  colorPrimary:'#000',
                                  borderRadius:0,
                                  colorPrimaryHover: '#000'
                              },
                            },
                          }}
                        >
                       <Radio.Group
                            options={optionsType}
                            value={valueType}
                            optionType="button"
                            buttonStyle="solid"
                        />
                        </ConfigProvider>
                        
                       </Col>
                     </Row>
                     <Row>
                      <Col >
                      <InputNumber min={1} max={valueCount} defaultValue={quantity} onChange={setQuantity}  />
                      </Col>
                      <Col >
                        <Button onClick={handleAddToCart}>Add to cart</Button>
                      </Col>
                     </Row>
                </Col>
            </Row>
        </Modal>
      
    );
};

export default PreviewCard;