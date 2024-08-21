import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./page/Navbar.jsx";
import Home from "./page/Home.jsx";
import Feature from "./page/Feature.jsx";
import About from "./page/About.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Feature></Feature>
      <About></About>
    </>
  )
}

export default App
