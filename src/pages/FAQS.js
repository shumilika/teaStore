import React from 'react';
import { Row, Col, Divider, Collapse } from 'antd'
import PageHeader from '../components/PageHeader';
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import MinusOutlined from '@ant-design/icons/MinusOutlined'

const FAQS = () => {
  
const items1 = [
  {
    key: '1',
    label: <p className='label'>How long does it take for home delivery?</p>,
    children: <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves the right to use discretion 
    in any circumstance where it makes more sense to use an alternative delivery method.</p>,
  },
  {
    key: '2',
    label: <p className='label'>What courier do you use for deliveries?</p>,
    children: <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves
     the right to use discretion in any circumstance where it makes more sense to use an alternative delivery method.</p>,
  },
  {
    key: '3',
    label: <p className='label'>Why am I being charged for delivery on my order when it states standard delivery is free?</p>,
    children: <p>All our delivery charges are pre-set by our courier company. We sell some oversized items which require 
    a specialist courier company to fulfil the delivery, there is an additional charge for these. Also, our courier company 
    consider some surcharge postcodes ‘Out of area’.
     There is an additional charge for these also. You can find a list of all [oversized items here] You can find a list of all</p>,
  },
  {
    key: '4',
    label: <p className='label'>I haven’t received a dispatch email/email confirmation?</p>,
    children: <p>Please be aware an automated email is sent to you to the given email address when your order is dispatched.
     Please check all folders including you junk as it will come from a noreply email address. 
    To ensure emails reach you, add the domain eurocarparts.com to your safe senders list.</p>,
  },
  {
    key: '5',
    label: <p className='label'>Why does it not tell us on the website that the parts will be delivered by the branch?</p>,
    children: <p>Due to the delicacy of some parts we take extra care in the delivery of the item. These could include body 
    panels and large bulky items. 
    These are either available for collection from our branches or will be delivered to you through our branch network vehicles.</p>,
  },
  {
    key: '6',
    label: <p className='label'>Do you deliver on Weekend?</p>,
    children: <p>No, our courier company do not offer the service to deliver on weekends currently.</p>,
  },
  {
    key: '7',
    label: <p className='label'>Can I collect from a local store?</p>,
    children: <p>We offer a reserve and collect service. This is available on the checkout page.
     Please be aware, if the product is not available in a local store, you are unable to reserve it.</p>,
  },
  {
    key: '8',
    label: <p className='label'>Why can’t I select next day delivery?</p>,
    children: <p>We can only offer next day on goods we have in stock at our dispatch depot.</p>,
  },
];
const items2 = [
    {
      key: '1',
      label: <p className='label'>How long does it take for home delivery?</p>,
      children: <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves the right to use discretion 
      in any circumstance where it makes more sense to use an alternative delivery method.</p>,
    },
    {
      key: '2',
      label: <p className='label'>What courier do you use for deliveries?</p>,
      children: <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves
       the right to use discretion in any circumstance where it makes more sense to use an alternative delivery method.</p>,
    },
    {
      key: '3',
      label: <p className='label'>Why am I being charged for delivery on my order when it states standard delivery is free?</p>,
      children: <p>All our delivery charges are pre-set by our courier company. We sell some oversized items which require 
      a specialist courier company to fulfil the delivery, there is an additional charge for these. Also, our courier company 
      consider some surcharge postcodes ‘Out of area’.
       There is an additional charge for these also. You can find a list of all [oversized items here] You can find a list of all</p>,
    },
    {
      key: '4',
      label: <p className='label'>I haven’t received a dispatch email/email confirmation?</p>,
      children: <p>Please be aware an automated email is sent to you to the given email address when your order is dispatched.
       Please check all folders including you junk as it will come from a noreply email address. 
      To ensure emails reach you, add the domain eurocarparts.com to your safe senders list.</p>,
    },
    {
      key: '5',
      label: <p className='label'>Why does it not tell us on the website that the parts will be delivered by the branch?</p>,
      children: <p>Due to the delicacy of some parts we take extra care in the delivery of the item. These could include body 
      panels and large bulky items. 
      These are either available for collection from our branches or will be delivered to you through our branch network vehicles.</p>,
    },
    {
      key: '6',
      label: <p className='label'>Do you deliver on Weekend?</p>,
      children: <p>No, our courier company do not offer the service to deliver on weekends currently.</p>,
    },
    {
      key: '7',
      label: <p className='label'>Can I collect from a local store?</p>,
      children: <p>We offer a reserve and collect service. This is available on the checkout page.
       Please be aware, if the product is not available in a local store, you are unable to reserve it.</p>,
    },
    {
      key: '8',
      label: <p className='label'>Why can’t I select next day delivery?</p>,
      children: <p>We can only offer next day on goods we have in stock at our dispatch depot.</p>,
    },
  ];
    return (
        <div className='faqs_box'>
        <PageHeader title={'FAQs'}/>
        <Row justify={'center'} className='faqs-header'>
            <Col span={18}>
                <h1>#Frequently Asked Questions</h1>
                <p>Got questions? We've got answers.</p>
                <Divider/>
            </Col>
        </Row>
        <Row justify={'center'}>
      <Col lg={9} sm={12} xs={24}>
      <Collapse  ghost items={items1} expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />} />
      </Col>
      <Col lg={9} sm={12} xs={24}>
      <Collapse  ghost items={items2}  expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />}  />
      </Col>
        </Row>
        </div>
    );
};

export default FAQS;