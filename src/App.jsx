import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import supabase from './supabase.js';
import Home from "./page/Home.jsx";
import Feature from "./page/Feature.jsx";
import About from "./page/About.jsx";
import Price from "./page/Price.jsx";
import Faq from './page/Faq.jsx';
import Footer from './page/Footer.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
    
  const [count, setCount] = useState(0)
  
  
  return (
      <>
        <Home></Home>
        <Feature></Feature>
        <About></About>
        <Price></Price>
        <Faq></Faq>
        <Footer></Footer>
      </>
    )
};

export default App
