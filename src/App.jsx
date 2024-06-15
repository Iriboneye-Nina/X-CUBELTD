import React from 'react';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import ShortDescription from './Pages/ShortDescription';
import Projects from './Pages/Projects';
import AboutUs from './Pages/About';
import ContactSection from './Pages/ContactSection';
import Footer from './Pages/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="home"><AboutUs/></div>
      <div id="services"><Services /></div>
      <div id="short-description"><ShortDescription /></div>
      <div id="projects"><Projects /></div>
      <div id="contact-section"><ContactSection /></div>
      <Footer />
    </>
  );
}

export default App;

