import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

const CarouselPreCart = (props) => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [arrayUrl, setArrayUrl] = useState([])
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    

      useEffect(()=>{

        const storage = getStorage()

        const getUrl = (photo) => {
          return new Promise((resolve, reject) => {
            getDownloadURL(ref(storage, `img/${photo}`))
              .then((url) => {
                resolve(url);
              })
              .catch((error) => {
                reject(error);
              });
          });
        };

        const fetchUrls = async () => {
          try {
            const promises = props.imgs.map((photo) => getUrl(photo));
            setArrayUrl(await Promise.all(promises));
          } catch (error) {
            // console.error('Ошибка получения URL-адресов:', error);
          }
        };
        fetchUrls()
      },[props.imgs])


  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const styleImg={
    width:'inherit', height:'400px',

  }

const styleDivMainImg={
    height: '400px',
   width: '100%',
}

    return (
        <div className="slider-container">
      
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
      {arrayUrl.map((url, index)=>(
        
        <div style={styleDivMainImg} key={index}>
          <img src={url} alt="" style={styleImg}/>
        </div>
      ))}
      
      </Slider>
   
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
         {arrayUrl.map((url, index)=>{
            return(
            <div key={index}>
              <img src={url} alt="" width={'120px'} style={{maxHeight:'120px'}}/>
            </div>
    );
        })}
       
       
      </Slider>
    </div>
    );
};

export default CarouselPreCart;