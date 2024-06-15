import React from 'react';

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
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Projects</a>
            <a href="#" className="hover:text-white">Contact</a>
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
