
import './App.css';
import NavBar from './components/Navbar';
import About from './components/about';
import ClientFeedback from './components/clientfeedback';
import Faq from './components/faq';
import Footer from './components/footer';
import Form from './components/form';
// import Carousel from './components/carrousel';
import HeroSection from './components/herosection';
import Project from './components/project';
import Subscribe from './components/subscribe';

import Approach from './components/approach';
import Service from './components/service';

import ImageSlider from './components/imageslider';
import Team from './components/team';


function App() {



  return (
    <div >
      <NavBar/>
      <HeroSection />
      <ImageSlider/>
  
      <About />
    
      <Project />
      <Approach />
      <Service />
      <Team />
      <ClientFeedback />
      <Faq />
      <Form />
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;


