

import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from "./../images/IMG_20230307_124811_156.png"
import slide2 from "./../images/IMG_20230628_171211_324.png"
import slide3 from "./../images/IMG_20230628_171221_794.png"
import slide4 from "./../images/IMG_20230701_163704_090.png"
import slide5 from "./../images/IMG_20230803_073710_218.png"
import slide6 from "./../images/IMG_20230805_150842_881.png"
import slide7 from "./../images/IMG_20230925_113538_866.png"
import slide8 from "./../images/IMG_20240115_214919_457.png"

const images = [
  slide1, slide2, 'https://s3-alpha-sig.figma.com/img/cc77/0215/a785ddcdd1d57f9e89d1c8ebbdf83caf?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HU1Hk-RlSe6bPbgb58okTD2YtvQx0XMSYhv2Zn83pg4wGfjhHfoxbPjIBWIv2H6ZJFVkcZycu0CVAyWXXZG-wWaX0d8fM4cZpSl121-8uvEgYL1FBa6MWLlEyJP9bEPWDhmhbGX33v-4GDkHr0VRzjvBDKFgs9Ckx8SPVF3sLX-PaWdBn7DSy6YL7J3sCYqujFj9z4MMvN3SAIoMs4pGLgse12PITnyn~Ucj-Wx~N7wuLyKY2rJOqa4s2g2lBkFAVHJHTuiTG0mQkD7kxE6EhvtMNAXagBCpj8bNSm~vk6un7dF0EvNWWZYEXqu4vqNqMzVq6tMcTtgvo4WTKnj89Q__', slide3, slide4, slide5, slide6, "https://s3-alpha-sig.figma.com/img/cc77/0215/a785ddcdd1d57f9e89d1c8ebbdf83caf?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HU1Hk-RlSe6bPbgb58okTD2YtvQx0XMSYhv2Zn83pg4wGfjhHfoxbPjIBWIv2H6ZJFVkcZycu0CVAyWXXZG-wWaX0d8fM4cZpSl121-8uvEgYL1FBa6MWLlEyJP9bEPWDhmhbGX33v-4GDkHr0VRzjvBDKFgs9Ckx8SPVF3sLX-PaWdBn7DSy6YL7J3sCYqujFj9z4MMvN3SAIoMs4pGLgse12PITnyn~Ucj-Wx~N7wuLyKY2rJOqa4s2g2lBkFAVHJHTuiTG0mQkD7kxE6EhvtMNAXagBCpj8bNSm~vk6un7dF0EvNWWZYEXqu4vqNqMzVq6tMcTtgvo4WTKnj89Q__", slide7, slide8
];

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const initialSlideCount = 1;

    if (sliderRef.current) {
      sliderRef.current.slickGoTo(initialSlideCount - 1);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 3,
    slidesToScroll: 1,  
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 960,  
        settings: {
          slidesToShow: 1,  
        },
      },
    ],
  };


  return (

    <div className='overflow-hidden'>
     
    <Slider ref={sliderRef} {...settings}>
      {images.map((imageUrl, index) => (
        <div key={index} className='my-4 md:my-7 px-2'>
          <img
            src={imageUrl}
            alt={`Slide ${index + 3}`}
            className="w-full h-[185px] md:h-[200px] lg:h-[300px] object-cover rounded-md"
          />
        </div>
      ))}
    </Slider>

  </div>
  );
};

export default ImageSlider;
