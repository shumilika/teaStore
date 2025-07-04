import React from 'react';
import PageHeader from './PageHeader';
import { Col, Row, Table } from 'antd';

const Wishlist = () => {

    const dataSource = [
  {
    key: '1',
    productName: 'Mike',
    price: 32,
    action: '10 Downing Street',
  },
  {
    key: '2',
    productName: 'John',
    price: 42,
    action: '10 Downing Street',
  },
];

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
];
    return (
        <div className='wishlist-page'>
             <PageHeader title={'Wishlist'}/>
             <Row justify={'center'}>
                <Col span={12}>
                    <Table dataSource={dataSource} pagination={{position:['none','none']}} columns={columns} />
                </Col>    
            </Row>
        </div>
    );
};

export default Wishlist;