
import './App.css';
import Navbar from './components/Navbar';
import Carrousel from './components/carrousel';
import HeroSection from './components/herosection';

function App() {
  return (
    <div >
      <Navbar/>
      <HeroSection />
      <Carrousel/>
    </div>
  );
}

export default App;
