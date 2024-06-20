import Nav from './Components/Navbar/Nav';
import Content from './Components/Content/Content';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import React from 'react';
import {slider} from './data/Slider.json';

function App() {
  return (
    <>
    <Nav />
    <Hero data={slider}/>
     <Content />
     <Footer />
    </>
     
  )
}
export default App
