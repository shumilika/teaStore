import React from 'react';
import { Row, Col, Divider, Collapse } from 'antd'
import PageHeader from '../services/PageHeader';
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import MinusOutlined from '@ant-design/icons/MinusOutlined'

const FAQS = () => {
  
const items1 = [
  {
    key: '1',
    label: 'How long does it take for home delivery?',
    children: <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves the right to use discretion 
    in any circumstance where it makes more sense to use an alternative delivery method.</p>,
  },
  {
    key: '2',
    label: 'What courier do you use for deliveries?',
    children: <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves
     the right to use discretion in any circumstance where it makes more sense to use an alternative delivery method.</p>,
  },
  {
    key: '3',
    label: 'Why am I being charged for delivery on my order when it states standard delivery is free?',
    children: <p>All our delivery charges are pre-set by our courier company. We sell some oversized items which require 
    a specialist courier company to fulfil the delivery, there is an additional charge for these. Also, our courier company 
    consider some surcharge postcodes ‘Out of area’.
     There is an additional charge for these also. You can find a list of all [oversized items here] You can find a list of all</p>,
  },
  {
    key: '4',
    label: ' I haven’t received a dispatch email/email confirmation?',
    children: <p>Please be aware an automated email is sent to you to the given email address when your order is dispatched.
     Please check all folders including you junk as it will come from a noreply email address. 
    To ensure emails reach you, add the domain eurocarparts.com to your safe senders list.</p>,
  },
  {
    key: '5',
    label: 'Why does it not tell us on the website that the parts will be delivered by the branch?',
    children: <p>Due to the delicacy of some parts we take extra care in the delivery of the item. These could include body 
    panels and large bulky items. 
    These are either available for collection from our branches or will be delivered to you through our branch network vehicles.</p>,
  },
  {
    key: '6',
    label: ' Do you deliver on Weekend?',
    children: <p>No, our courier company do not offer the service to deliver on weekends currently.</p>,
  },
  {
    key: '7',
    label: 'Can I collect from a local store?',
    children: <p>We offer a reserve and collect service. This is available on the checkout page.
     Please be aware, if the product is not available in a local store, you are unable to reserve it.</p>,
  },
  {
    key: '8',
    label: 'Why can’t I select next day delivery?',
    children: <p>We can only offer next day on goods we have in stock at our dispatch depot.</p>,
  },
];
const items2 = [
    {
      key: '1',
      label: 'How long does it take for home delivery?',
      children: <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves the right to use discretion 
      in any circumstance where it makes more sense to use an alternative delivery method.</p>,
    },
    {
      key: '2',
      label: 'What courier do you use for deliveries?',
      children: <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves
       the right to use discretion in any circumstance where it makes more sense to use an alternative delivery method.</p>,
    },
    {
      key: '3',
      label: 'Why am I being charged for delivery on my order when it states standard delivery is free?',
      children: <p>All our delivery charges are pre-set by our courier company. We sell some oversized items which require 
      a specialist courier company to fulfil the delivery, there is an additional charge for these. Also, our courier company 
      consider some surcharge postcodes ‘Out of area’.
       There is an additional charge for these also. You can find a list of all [oversized items here] You can find a list of all</p>,
    },
    {
      key: '4',
      label: ' I haven’t received a dispatch email/email confirmation?',
      children: <p>Please be aware an automated email is sent to you to the given email address when your order is dispatched.
       Please check all folders including you junk as it will come from a noreply email address. 
      To ensure emails reach you, add the domain eurocarparts.com to your safe senders list.</p>,
    },
    {
      key: '5',
      label: 'Why does it not tell us on the website that the parts will be delivered by the branch?',
      children: <p>Due to the delicacy of some parts we take extra care in the delivery of the item. These could include body 
      panels and large bulky items. 
      These are either available for collection from our branches or will be delivered to you through our branch network vehicles.</p>,
    },
    {
      key: '6',
      label: ' Do you deliver on Weekend?',
      children: <p>No, our courier company do not offer the service to deliver on weekends currently.</p>,
    },
    {
      key: '7',
      label: 'Can I collect from a local store?',
      children: <p>We offer a reserve and collect service. This is available on the checkout page.
       Please be aware, if the product is not available in a local store, you are unable to reserve it.</p>,
    },
    {
      key: '8',
      label: 'Why can’t I select next day delivery?',
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
      <Col span={9}>
      <Collapse  ghost items={items1} expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />} />
      </Col>
      <Col span={9}>
      <Collapse  ghost items={items2}  expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />}  />
      </Col>
        </Row>
        <Divider className='divider-faqs'/>
        </div>
    );
};

export default FAQS;