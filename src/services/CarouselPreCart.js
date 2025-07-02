import React, { useEffect,  useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { Col, Row } from 'antd';

const CarouselPreCart = (props) => {

    const [arrayUrl, setArrayUrl] = useState([]);

  useEffect(() => {
    const storage = getStorage();

    const getUrl = (photo) => {
      return new Promise((resolve, reject) => {
        getDownloadURL(ref(storage, `img/${photo}`))
          .then((url) => resolve(url))
          .catch((error) => reject(error));
      });
    };

    const fetchUrls = async () => {
      try {
        const promises = props.imgs.map((photo) => getUrl(photo));
        const urls = await Promise.all(promises);
        setArrayUrl(urls);
      } catch (error) {
        console.error("Ошибка получения URL-адресов:", error);
      }
    };

    fetchUrls();
  }, [props.imgs]);

  const settings = {
    customPaging: function (i) {
      return (
        <div className="thumb">
          <img src={arrayUrl[i]} alt={`thumbnail-${i}`} />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if (arrayUrl.length === 0) return null; // or loader

  return (
  <div className='galery-control'>
  
          <div className="slider-wrapper">
      <div className="slider-container">
        <Slider {...settings}>
          {arrayUrl.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`slide-${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    
  </div>
  );
};
  
export default CarouselPreCart;