import React from 'react';

function Projects() {
  return (
    <div className='project flex flex-col items-center bg-gray-100 py-16 relative z-0'>
      <div className="service-content text-center mb-8">
        <p className="text-2xl font-bold font-serif text-red-500 mb-2">WHAT WE DONE</p>
        <h1 className="text-5xl font-bold font-serif mb-6">Our Projects</h1>
      </div>
      <div className='relative w-full flex justify-center'>
        <img src="/color2.jpg" alt="background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className='relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-8'>
          <div className='img animate-fadeIn'>
            <img src="/project.png" alt="project-img1" className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105" />
          </div>
          <div className='img animate-fadeIn'>
            <img src="/project.png" alt="project-img2" className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105" />
          </div>
          <div className='img animate-fadeIn'>
            <img src="/project.png" alt="project-img3" className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
