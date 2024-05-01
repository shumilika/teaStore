import React from 'react';
import {ConfigProvider, Button} from 'antd'

const ButtonAdv = (props) => {
    return (
    
            
  <ConfigProvider wave={{disabled: true}}>
    <Button className={props.className} type={props.type}>{props.name}</Button>
  </ConfigProvider>

        
    );
};

export default ButtonAdv;