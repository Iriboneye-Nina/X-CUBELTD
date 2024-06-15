import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBullhorn, FaTruck, FaTv } from 'react-icons/fa'; // Importing icons

const services = [
  {
    id: 1,
    title: 'BILLBOARD',
    description: 'Billboard advertising has grown as technology...',
    images: ['/img1.png', '/img1-alternate.png'],
    icon: <FaBullhorn size={24} className="text-red-500 mb-2" />, // Adding icon
  },
  {
    id: 2,
    title: 'MOBILE BILLBOARD',
    description: 'Advertising on roads is a unique strategy that helps...',
    images: ['/img2.png', '/img2-alternate.png'],
    icon: <FaTruck size={24} className="text-red-500 mb-2" />, // Adding icon
  },
  {
    id: 3,
    title: 'DIGITAL DISPLAYS',
    description: 'Treacherously far so late have immense condescending...',
    images: ['/img3.png', '/img3-alternate.png'],
    icon: <FaTv size={24} className="text-red-500 mb-2" />, // Adding icon
  },
];

const Services = () => {
  const [currentImage, setCurrentImage] = useState(
    services.reduce((acc, service) => {
      acc[service.id] = 0;
      return acc;
    }, {})
  );

  const handleImageClick = (id) => {
    setCurrentImage((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % services.find((service) => service.id === id).images.length,
    }));
  };

  return (
    <div className="services-container flex flex-col items-center pt-64 bg-gray-100">
      <div className="service-content text-center mb-8">
        <p className="text-2xl font-bold font-serif text-red-500 mb-2">WHAT WE DO</p>
        <h1 className="text-5xl font-bold font-serif mb-6">Our Services</h1>
      </div>
      <div className="images flex flex-wrap justify-center gap-4">
        {services.map((service) => (
          <div key={service.id} className="image relative" onClick={() => handleImageClick(service.id)}>
            <img
              src={service.images[currentImage[service.id]]}
              alt={service.title}
              className="h-96 w-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
            <div className="content absolute bottom-0 right-0 bg-white bg-opacity-100 p-4 rounded-b-lg w-64">
              {service.icon} {/* Displaying icon */}
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='btn flex justify-center items-center pt-8'>
      
          <button className='explore px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-300'>
            Explore More
          </button>
        
      </div>
    </div>
  );
};

export default Services;

