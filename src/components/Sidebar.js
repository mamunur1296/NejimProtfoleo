import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaSkype, FaGoogle } from 'react-icons/fa'; // Import the icons
import img from '../../src/assats/profile.jpg'

const Sidebar = ({ activeSection }) => {
  const getLinkClass = (path) =>
    `block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${activeSection === path ? 'bg-gray-700 text-white' : 'text-gray-300'}`;

  return (
    <div className="p-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="mb-4">
          <img
            src={img}
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />
        </div>
        <div className="text-center mb-2">
          <h2 className="text-xl font-semibold text-white">Mamunur Rushid</h2>
        </div>
        <div className="flex space-x-3">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebook size={20} />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.skype.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaSkype size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGoogle size={20} />
          </a>

        </div>
      </div>


      {/* Navigation Links */}

      <nav className="mt-10">
        <Link to="/" className={getLinkClass('/')}>
          About
        </Link>

        <Link to="/Resume" className={getLinkClass('/contact')}>
          Resume
        </Link>
        <Link to="/Portfolio" className={getLinkClass('/about')}>
          Portfolio
        </Link>
        <Link to="/Services" className={getLinkClass('/about')}>
          Services
        </Link>
        <Link to="/Contact" className={getLinkClass('/about')}>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
