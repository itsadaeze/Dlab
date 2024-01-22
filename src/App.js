
import './App.css';
import Navbar from './components/Navbar';
import About from './components/about';
import ClientFeedback from './components/clientfeedback';
import FAQ from './components/faq';
import Footer from './components/footer';
import Form from './components/form';
import Carousel from './components/carrousel';
import HeroSection from './components/herosection';
import Project from './components/project';
import Subscribe from './components/subscribe';

import Approach from './components/approach';
import Service from './components/service';
import slide1 from "./images/carousel11.svg"
import slide2 from "./images/carousel2.svg"
import slide3 from "./images/carousel3.svg"
import slide4 from "./images/carousel4.svg"
import slide5 from "./images/carousel5.svg"
import slide6 from "./images/carousel6.svg"
import slide7 from "./images/carousel7.svg"
import slide8 from "./images/carousel8.svg"


function App() {

  const carouselItems = [
    { type: 'image', src: slide1, alt: 'Image 1' },
    { type: 'image', src: slide2, alt: 'Image 2' },
    { type: 'gif', src: 'https://s3-alpha-sig.figma.com/img/cc77/0215/a785ddcdd1d57f9e89d1c8ebbdf83caf?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HU1Hk-RlSe6bPbgb58okTD2YtvQx0XMSYhv2Zn83pg4wGfjhHfoxbPjIBWIv2H6ZJFVkcZycu0CVAyWXXZG-wWaX0d8fM4cZpSl121-8uvEgYL1FBa6MWLlEyJP9bEPWDhmhbGX33v-4GDkHr0VRzjvBDKFgs9Ckx8SPVF3sLX-PaWdBn7DSy6YL7J3sCYqujFj9z4MMvN3SAIoMs4pGLgse12PITnyn~Ucj-Wx~N7wuLyKY2rJOqa4s2g2lBkFAVHJHTuiTG0mQkD7kxE6EhvtMNAXagBCpj8bNSm~vk6un7dF0EvNWWZYEXqu4vqNqMzVq6tMcTtgvo4WTKnj89Q__', alt: 'GIF 1' },
    { type: 'image', src: slide3, alt: 'Image 3' },
    { type: 'image', src: slide4, alt: 'Image 4' },
    { type: 'gif', src: 'https://s3-alpha-sig.figma.com/img/0cf5/5790/edd8f3d8ce91b0d7f58c3a40d2c8fbef?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KyZH83CpZLfXsTawG2RH8jfrZuJMpcHu6IQZpVrweg713PUfZfP~OsM4FLSu217YlNboCF4zblgoOI~TuRos3IxA~x6l1ilz5Sx85njfnwF7YrRNNYWa81WGBJR3-PAE5kWZEsOCKBIA8mY~-jcMC3YuW1fzyD9lTDF69heUPGv4dyaS-S-Kl7ec~zwtXD5ofNyLnY5r77tLN5ZPWAY3qsnI4MBq3mTmvbF1NzINmBHownuLyvqMUwrxtj6pkGRoiJAd1ENqDgYJaRtIM67DFyutDF~z1FRvM1Nd~VvfU1NyvFE6fzF3h0fZ9W1JTL9qtWWKPSpzRlLomk9xwzV1RA__', alt: 'GIF 1' },
    { type: 'image', src: slide5, alt: 'Image 5' },
    { type: 'image', src: slide6, alt: 'Image 6' },
    { type: 'gif', src: 'https://s3-alpha-sig.figma.com/img/cc77/0215/a785ddcdd1d57f9e89d1c8ebbdf83caf?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HU1Hk-RlSe6bPbgb58okTD2YtvQx0XMSYhv2Zn83pg4wGfjhHfoxbPjIBWIv2H6ZJFVkcZycu0CVAyWXXZG-wWaX0d8fM4cZpSl121-8uvEgYL1FBa6MWLlEyJP9bEPWDhmhbGX33v-4GDkHr0VRzjvBDKFgs9Ckx8SPVF3sLX-PaWdBn7DSy6YL7J3sCYqujFj9z4MMvN3SAIoMs4pGLgse12PITnyn~Ucj-Wx~N7wuLyKY2rJOqa4s2g2lBkFAVHJHTuiTG0mQkD7kxE6EhvtMNAXagBCpj8bNSm~vk6un7dF0EvNWWZYEXqu4vqNqMzVq6tMcTtgvo4WTKnj89Q__', alt: 'GIF 1' },
    { type: 'image', src: slide7, alt: 'Image 7' },
    { type: 'image', src: slide8, alt: 'Image 8' },
  ];

  return (
    <div >
      <Navbar/>
      <HeroSection />
      <Carousel items={carouselItems} />
      <About />
      <Project />
      <Approach />
      <Service />
      <ClientFeedback />
      <FAQ />
      <Form />
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
