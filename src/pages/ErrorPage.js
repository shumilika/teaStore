import { Col, Row } from 'antd';
import Search from 'antd/es/input/Search';
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <Row justify={'center'} className='error-page-box'>
            <Col lg={12} md={12} sm={18} xs={22} >
                <h1>404</h1>
                <h2>Oops! That Page Can’t Be Found.</h2>
                <h4>THE PAGE YOU ARE LOOKING FOR DOES NOT EXITS</h4>
                <p>Please return to <Link to={'/'}> Home page</Link></p>

                <Search placeholder="Search..." onSearch={onSearch} enterButton />
  

            </Col>
        </Row>
    );
};

export default ErrorPage;