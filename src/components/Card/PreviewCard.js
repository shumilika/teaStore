import React, { useState } from 'react';
import { Modal, Row, Col, Divider, Radio, InputNumber, Button, ConfigProvider } from 'antd'
import CarouselPreCart from '../CarouselPreCart';


const PreviewCard = (props) => {

  const [valueSize, setValueSize] = useState(props.amount?props.amount[0].size:'');
  const [valueType, ] = useState(props.type);
  const [valuePrice, setValuePrice] = useState(props.amount?props.amount[0].price:'')
  const [valueCount, setValueCount] = useState(props.amount?props.amount[0].count:'')
 

  

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
                      <InputNumber min={1} max={valueCount} defaultValue={1}  />
                      </Col>
                      <Col >
                        <Button>Add to cart</Button>
                      </Col>
                     </Row>
                </Col>
            </Row>
        </Modal>
      
    );
};

export default PreviewCard;