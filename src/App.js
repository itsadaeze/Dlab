
import './App.css';
import Navbar from './components/Navbar';
// import Carrousel from './components/carrousel';
import HeroSection from './components/herosection';
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
    </div>
  );
}

export default App;
