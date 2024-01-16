
import './App.css';
import Navbar from './components/Navbar';
import About from './components/about';
import ClientFeedback from './components/clientfeedback';
import FAQ from './components/faq';
import Footer from './components/footer';
import Form from './components/form';
// import Carrousel from './components/carrousel';
import HeroSection from './components/herosection';
import Project from './components/project';
import Subscribe from './components/subscribe';
// import caro1 from "./../src/images/carousel1.svg"

function App() {

  // const gifs = [
  //   caro1,
  //   caro1,
  //   caro1
    
  // ];

  return (
    <div >
      <Navbar/>
      <HeroSection />
      {/* <Carrousel gifs={gifs} /> */}
      <About />
      <Project />
      <ClientFeedback />
      <FAQ />
      <Form />
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
