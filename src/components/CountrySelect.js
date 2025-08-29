import React, { useEffect, useState } from 'react';
import { getNames } from 'country-list';
import { ConfigProvider, Select } from 'antd';

const CountrySelect = () => {
    const [countryOptions, setCountryOptions] = useState([])

     useEffect(() => {
   
    const countryNames = getNames();
    
    
    const options = countryNames.map((country) => ({
      value: country,
      label: country,
    }));

    setCountryOptions(options);
  }, []);

    return (
        <div className='select-country'>
          <ConfigProvider
            theme={{
              components:{
                  Select: {
                        colorPrimary: 'rgb(25,144,198)', 
                        boxShadow: 'none', 
                        controlOutlineWidth: '2px', 
                    },           
              }
            }}
          >
              <Select
      defaultValue="Select a country"
      options={countryOptions}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
    /> 
            </ConfigProvider>
        </div>
    );
};

export default CountrySelect;