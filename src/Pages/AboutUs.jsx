import React from 'react';
import { FaUsers, FaRegHeart, FaBullseye } from 'react-icons/fa'; // Importing icons

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    image: '/team1.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Marketing Director',
    image: '/team2.png',
  },
  {
    id: 3,
    name: 'Sam Johnson',
    position: 'Lead Designer',
    image: '/team3.png',
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-container flex flex-col items-center pt-80 sm:pt-80 lg:pt-48 bg-gray-100">
      <div className="about-content text-center mb-8">
        <p className="text-2xl font-bold font-serif text-red-500 mb-2">ABOUT US</p>
        <h1 className="text-5xl font-bold font-serif mb-6">Who We Are</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We are a leading advertising company committed to delivering innovative solutions for our clients. Our mission is to create impactful advertising strategies that drive growth and brand recognition.
        </p>
      </div>
      <div className="mission-vision-values flex flex-wrap justify-center gap-8 mb-12">
        <div className="mission bg-white p-6 rounded-lg shadow-md max-w-xs text-center">
          <FaBullseye size={48} className="text-red-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p>To deliver innovative and effective advertising solutions that help our clients achieve their business goals.</p>
        </div>
        <div className="vision bg-white p-6 rounded-lg shadow-md max-w-xs text-center">
          <FaRegHeart size={48} className="text-red-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p>To be the most trusted and creative advertising partner, known for our passion and dedication to our clients' success.</p>
        </div>
        <div className="values bg-white p-6 rounded-lg shadow-md max-w-xs text-center">
          <FaUsers size={48} className="text-red-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Values</h2>
          <p>Integrity, Innovation, Client-Centricity, Collaboration, and Excellence.</p>
        </div>
      </div>
      <div className="team-content text-center mb-8">
        <h1 className="text-5xl font-bold font-serif mb-6">Meet Our Team</h1>
        <div className="team-members flex flex-wrap justify-center gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member bg-white p-4 rounded-lg shadow-md text-center">
              <img src={member.image} alt={member.name} className="h-48 w-48 object-cover rounded-full mb-4 mx-auto" />
              <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
              <p className="text-lg text-red-500">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
