import React from 'react';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import ShortDescription from './Pages/ShortDescription';
import Projects from './Pages/Projects';
import AboutUs from './Pages/AboutUs';
import ContactSection from './Pages/ContactSection';
// import AllservicesComponent from './Pages/AllServices';
import Footer from './Pages/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Home/></div>
      <div id="AboutUs"><AboutUs/></div>
      <div id="services"><Services/></div>
      <div id="short-description"><ShortDescription/></div>
      <div id="projects"><Projects/></div>
      <div id="contact-section"><ContactSection /></div>
      {/* <div id="contact-section"><AllservicesComponent /></div> */}
      <Footer />
    </>
  );
}

export default App;

