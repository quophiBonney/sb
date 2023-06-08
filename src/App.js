import {useState, useEffect} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from '../src/pages/home/Home'
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Preloader from './components/Preloader';
function App() {
  AOS.init();
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setTimeout(()=> {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div>
      {loading ? <Preloader/> : <div><Router>
      <Navigation/>
      <Home/>
      <Footer/>
      </Router></div>}
      
    </div>
  );
}

export default App;
