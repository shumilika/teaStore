import React from 'react';
import { Row, Col, Breadcrumb } from 'antd'
import { Link } from 'react-router-dom';

const PageHeader = (props) => {
    return (
        <Row className={`page_header ${props.style}`}>
      <Col span={24}>
      <h1>{props.title}</h1>
      <Breadcrumb  separator=">"
    items={[
      {
        title: <Link to={'/'}>Home</Link>,
      },
      {
        title: props.title,
      },
     
    ]}
  />  
      </Col>
    </Row>
    );
};

export default PageHeader;