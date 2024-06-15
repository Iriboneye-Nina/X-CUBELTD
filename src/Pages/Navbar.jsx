import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white z-50">
      <nav className="container mx-auto flex justify-between items-center p-5">
        <div className="logo">
          {/* <img src="/logo.png" alt="X-CUBETECHNOLOGY Logo" className="w-32" /> */}
          <span>X-CUBETECHNOLOGY</span>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="home" smooth={true} duration={500} className="hover:text-red-500 cursor-pointer">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="hover:text-red-500 cursor-pointer">About</Link></li>
          <li><Link to="services" smooth={true} duration={500} className="hover:text-red-500 cursor-pointer">Services</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="hover:text-red-500 cursor-pointer">Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="hover:text-red-500 cursor-pointer">Contact</Link></li>
          <li><Link to="joinus" smooth={true} duration={500} className="bg-red-500 px-4 py-2 rounded hover:bg-red-700 cursor-pointer">Join Us</Link></li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500"><FaFacebook size={24} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500"><FaInstagram size={24} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500"><FaTwitter size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500"><FaLinkedin size={24} /></a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white w-full py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="home" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-red-500 cursor-pointer">Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-red-500 cursor-pointer">About</Link></li>
            <li><Link to="services" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-red-500 cursor-pointer">Services</Link></li>
            <li><Link to="projects" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-red-500 cursor-pointer">Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-red-500 cursor-pointer">Contact</Link></li>
            <li><Link to="joinus" smooth={true} duration={500} onClick={toggleMenu} className="bg-red-500 px-4 py-2 rounded hover:bg-red-700 cursor-pointer">Join Us</Link></li>
          </ul>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500"><FaFacebook size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500"><FaInstagram size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500"><FaTwitter size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500"><FaLinkedin size={24} /></a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
