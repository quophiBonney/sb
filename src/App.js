import {useState, useEffect} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from '../src/pages/home/Home'
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Skill from './pages/home/Skill';
import Projects from './pages/home/Projects';
import MessageSent from './pages/home/MessageSent';
function App() {
  AOS.init();
  return (
    <>
      <Router>
      <Navigation/>
      <Home/>
      <Footer/>
      </Router>
      </>
  );
}

export default App;
