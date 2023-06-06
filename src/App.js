import './App.css';
import Navigation from './components/Navigation';
import Home from '../src/pages/home/Home'
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  AOS.init();
  return (
    <div>
      <Router>
      <Navigation/>
      <Home/>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
