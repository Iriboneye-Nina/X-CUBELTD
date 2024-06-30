import React, { useState } from 'react';
import { FaBullhorn, FaTruck, FaTv, FaLeaf, FaGlobe, FaRecycle } from 'react-icons/fa'; // Importing additional icons

const services = [
  {
    id: 1,
    title: 'BILLBOARD',
    description: 'Billboard advertising has grown as technology...',
    images: ['/img1.png', '/img1-alternate.png', '/img1-additional1.png', '/img1-additional2.png'],
    icon: <FaBullhorn size={24} className="text-red-500 mb-2" />, // Adding icon
  },
  {
    id: 2,
    title: 'MOBILE BILLBOARD',
    description: 'Advertising on roads is a unique strategy that helps...',
    images: ['/img2.png', '/img2-alternate.png', '/img2-additional1.png', '/img2-additional2.png'],
    icon: <FaTruck size={24} className="text-red-500 mb-2" />, // Adding icon
  },
  {
    id: 3,
    title: 'DIGITAL DISPLAYS',
    description: 'Treacherously far so late have immense condescending...',
    images: ['/img3.png', '/img3-alternate.png', '/img3-additional1.png', '/img3-additional2.png'],
    icon: <FaTv size={24} className="text-red-500 mb-2" />, // Adding icon
  },
  {
    id: 4,
    title: 'ETHICATE ADVERTISING',
    description: 'Ethicate advertising promotes ethical practices in business and beyond...',
    images: ['/ethicate1.jpg', '/ethicate1-alternate.png', '/ethicate1-additional1.png', '/ethicate1-additional2.png'],
    icon: <FaLeaf size={24} className="text-green-500 mb-2" />, // Unique icon
  },
  {
    id: 5,
    title: 'ETHICATE OUTDOOR',
    description: 'Ethicate outdoor advertising focuses on sustainable and ethical materials...',
    images: ['/ethicate2.jpg', '/ethicate2-alternate.png', '/ethicate2-additional1.png', '/ethicate2-additional2.png'],
    icon: <FaGlobe size={24} className="text-blue-500 mb-2" />, // Unique icon
  },
  {
    id: 6,
    title: 'ETHICATE DIGITAL',
    description: 'Ethicate digital advertising emphasizes transparency and integrity...',
    images: ['/ethicate3.jpg', '/ethicate3-alternate.png', '/ethicate3-additional1.png', '/ethicate3-additional2.png'],
    icon: <FaRecycle size={24} className="text-yellow-500 mb-2" />, // Unique icon
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
    <div className="services-container flex flex-col items-center bg-gray-100 py-8 relative z-0">
      <div className="service-content text-center mb-8">
        <p className="text-2xl font-bold font-serif text-red-500 mb-2">WHAT WE DO</p>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Our Services</h1>
      </div>
      <div className="images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {services.map((service) => (
          <div key={service.id} className="image relative" onClick={() => handleImageClick(service.id)}>
            <img
              src={service.images[currentImage[service.id]]}
              alt={service.title}
              className="h-64 md:h-96 w-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
            <div className="content absolute bottom-0 right-0 bg-white bg-opacity-90 p-4 rounded-b-lg w-full">
              {service.icon} {/* Displaying icon */}
              <h2 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-md md:text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
