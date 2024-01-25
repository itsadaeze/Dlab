// import React, { useEffect, useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import slide1 from "./../images/carousel11.svg"
// import slide2 from "./../images/carousel2.svg"
// import slide3 from "./../images/carousel3.svg"
// import slide4 from "./../images/carousel4.svg"
// import slide5 from "./../images/carousel5.svg"
// import slide6 from "./../images/carousel6.svg"
// import slide7 from "./../images/carousel7.svg"
// import slide8 from "./../images/carousel8.svg"

// const images = [
// slide1, slide2, 'https://s3-alpha-sig.figma.com/img/cc77/0215/a785ddcdd1d57f9e89d1c8ebbdf83caf?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HU1Hk-RlSe6bPbgb58okTD2YtvQx0XMSYhv2Zn83pg4wGfjhHfoxbPjIBWIv2H6ZJFVkcZycu0CVAyWXXZG-wWaX0d8fM4cZpSl121-8uvEgYL1FBa6MWLlEyJP9bEPWDhmhbGX33v-4GDkHr0VRzjvBDKFgs9Ckx8SPVF3sLX-PaWdBn7DSy6YL7J3sCYqujFj9z4MMvN3SAIoMs4pGLgse12PITnyn~Ucj-Wx~N7wuLyKY2rJOqa4s2g2lBkFAVHJHTuiTG0mQkD7kxE6EhvtMNAXagBCpj8bNSm~vk6un7dF0EvNWWZYEXqu4vqNqMzVq6tMcTtgvo4WTKnj89Q__', slide3, slide4, "https://s3-alpha-sig.figma.com/img/0cf5/5790/edd8f3d8ce91b0d7f58c3a40d2c8fbef?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KyZH83CpZLfXsTawG2RH8jfrZuJMpcHu6IQZpVrweg713PUfZfP~OsM4FLSu217YlNboCF4zblgoOI~TuRos3IxA~x6l1ilz5Sx85njfnwF7YrRNNYWa81WGBJR3-PAE5kWZEsOCKBIA8mY~-jcMC3YuW1fzyD9lTDF69heUPGv4dyaS-S-Kl7ec~zwtXD5ofNyLnY5r77tLN5ZPWAY3qsnI4MBq3mTmvbF1NzINmBHownuLyvqMUwrxtj6pkGRoiJAd1ENqDgYJaRtIM67DFyutDF~z1FRvM1Nd~VvfU1NyvFE6fzF3h0fZ9W1JTL9qtWWKPSpzRlLomk9xwzV1RA__", slide5, slide6, "https://s3-alpha-sig.figma.com/img/cc77/0215/a785ddcdd1d57f9e89d1c8ebbdf83caf?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HU1Hk-RlSe6bPbgb58okTD2YtvQx0XMSYhv2Zn83pg4wGfjhHfoxbPjIBWIv2H6ZJFVkcZycu0CVAyWXXZG-wWaX0d8fM4cZpSl121-8uvEgYL1FBa6MWLlEyJP9bEPWDhmhbGX33v-4GDkHr0VRzjvBDKFgs9Ckx8SPVF3sLX-PaWdBn7DSy6YL7J3sCYqujFj9z4MMvN3SAIoMs4pGLgse12PITnyn~Ucj-Wx~N7wuLyKY2rJOqa4s2g2lBkFAVHJHTuiTG0mQkD7kxE6EhvtMNAXagBCpj8bNSm~vk6un7dF0EvNWWZYEXqu4vqNqMzVq6tMcTtgvo4WTKnj89Q__", slide7, slide8
// ];

// const ImageSlider = () => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const initialSlideCount = 3; 

//     if (sliderRef.current) {
//       sliderRef.current.slickGoTo(initialSlideCount - 1); 
//     }
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 5000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000, 
//   };

//   return (
//     <Slider ref={sliderRef} {...settings}>
//       {images.map((imageUrl, index) => (
//         <div key={index} className='my-3 mx-1 '>
//           <img src={imageUrl} alt={`Slide ${index + 3}`} className="w-full h-[100px] md:w-[97%] md:h-[300px]" />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default ImageSlider;

import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from "./../images/carousel11.svg"
import slide2 from "./../images/carousel2.svg"
import slide3 from "./../images/carousel3.svg"
import slide4 from "./../images/carousel4.svg"
import slide5 from "./../images/carousel5.svg"
import slide6 from "./../images/carousel6.svg"
import slide7 from "./../images/carousel7.svg"
import slide8 from "./../images/carousel8.svg"

const images = [
  slide1, slide2, 'https://s3-alpha-sig.figma.com/img/cc77/0215/a785ddcdd1d57f9e89d1c8ebbdf83caf?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HU1Hk-RlSe6bPbgb58okTD2YtvQx0XMSYhv2Zn83pg4wGfjhHfoxbPjIBWIv2H6ZJFVkcZycu0CVAyWXXZG-wWaX0d8fM4cZpSl121-8uvEgYL1FBa6MWLlEyJP9bEPWDhmhbGX33v-4GDkHr0VRzjvBDKFgs9Ckx8SPVF3sLX-PaWdBn7DSy6YL7J3sCYqujFj9z4MMvN3SAIoMs4pGLgse12PITnyn~Ucj-Wx~N7wuLyKY2rJOqa4s2g2lBkFAVHJHTuiTG0mQkD7kxE6EhvtMNAXagBCpj8bNSm~vk6un7dF0EvNWWZYEXqu4vqNqMzVq6tMcTtgvo4WTKnj89Q__', slide3, slide4, "https://s3-alpha-sig.figma.com/img/0cf5/5790/edd8f3d8ce91b0d7f58c3a40d2c8fbef?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KyZH83CpZLfXsTawG2RH8jfrZuJMpcHu6IQZpVrweg713PUfZfP~OsM4FLSu217YlNboCF4zblgoOI~TuRos3IxA~x6l1ilz5Sx85njfnwF7YrRNNYWa81WGBJR3-PAE5kWZEsOCKBIA8mY~-jcMC3YuW1fzyD9lTDF69heUPGv4dyaS-S-Kl7ec~zwtXD5ofNyLnY5r77tLN5ZPWAY3qsnI4MBq3mTmvbF1NzINmBHownuLyvqMUwrxtj6pkGRoiJAd1ENqDgYJaRtIM67DFyutDF~z1FRvM1Nd~VvfU1NyvFE6fzF3h0fZ9W1JTL9qtWWKPSpzRlLomk9xwzV1RA__", slide5, slide6, "https://s3-alpha-sig.figma.com/img/cc77/0215/a785ddcdd1d57f9e89d1c8ebbdf83caf?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HU1Hk-RlSe6bPbgb58okTD2YtvQx0XMSYhv2Zn83pg4wGfjhHfoxbPjIBWIv2H6ZJFVkcZycu0CVAyWXXZG-wWaX0d8fM4cZpSl121-8uvEgYL1FBa6MWLlEyJP9bEPWDhmhbGX33v-4GDkHr0VRzjvBDKFgs9Ckx8SPVF3sLX-PaWdBn7DSy6YL7J3sCYqujFj9z4MMvN3SAIoMs4pGLgse12PITnyn~Ucj-Wx~N7wuLyKY2rJOqa4s2g2lBkFAVHJHTuiTG0mQkD7kxE6EhvtMNAXagBCpj8bNSm~vk6un7dF0EvNWWZYEXqu4vqNqMzVq6tMcTtgvo4WTKnj89Q__", slide7, slide8
];

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const initialSlideCount = 3;

    if (sliderRef.current) {
      sliderRef.current.slickGoTo(initialSlideCount - 1);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {images.map((imageUrl, index) => (
        <div key={index} className='my-4 md:my-7 px-1 aspect-w-4 aspect-h-3 md:px-3 '>
          <img
            src={imageUrl}
            alt={`Slide ${index + 3}`}
            className="w-full h-[90px] md:h-[200px] lg:h-[300px] object-cover space-x-4 rounded-md"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
