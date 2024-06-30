import React from 'react';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo Section */}
          <div className="mb-8 md:mb-0">
            <h1 className="text-2xl font-bold text-white">X-CUBELTD-TECHNOLOGY</h1>
            <p className="mt-2 text-gray-400">Innovating the future</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <li><Link to="home" smooth={true} duration={500} className="hover:text-red-500 cursor-pointer">Home</Link></li>
              <li><Link to="AboutUs" smooth={true} duration={500} className="hover:text-red-500 cursor-pointer">About Us</Link></li>
              <li><Link to="services" smooth={true} duration={500} className="hover:text-red-500 cursor-pointer">Services</Link></li>
              <li><Link to="projects" smooth={true} duration={500} className="hover:text-red-500 cursor-pointer">Projects</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="hover:text-red-500 cursor-pointer">Contact</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="bg-red-500 px-4 py-2 rounded hover:bg-red-700 cursor-pointer">Join Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            &copy; 2024 X-CUBELTD-TECHNOLOGY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
