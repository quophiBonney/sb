import React, {useEffect, useState} from 'react';
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
      setLoading(false);
    }, 3000);
  }, []);
  
  return (
    <>
      {loading ? <Preloader/> : ( <div>
        <Router>
      <Navigation/>
      <Home/>
      <Footer/>
      </Router>
      </div>)}
      </>
  );
}

export default App;
