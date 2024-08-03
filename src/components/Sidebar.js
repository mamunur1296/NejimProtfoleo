import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaSkype, FaGoogle, FaGithub } from 'react-icons/fa'; // Import the icons
import img from '../../src/assats/profile.jpg';

const Sidebar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const getLinkClass = (path) =>
    `block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${activeSection === path ? 'bg-gray-700 text-white' : 'text-gray-300'
    }`;

  return (
    <div className="relative">
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 md:relative md:w-64 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
      >
        <div className="flex flex-col items-center mb-6 md:items-start p-6">
          <div className="w-full flex justify-center  mb-4">
            <img src={img} alt="Profile" className="w-36 h-36 rounded-full border-2 border-gray-300" />
          </div>
          <div className="text-center mb-2 w-full ">
            <h2 className="text-xl font-semibold">Nezam Uddin</h2>
          </div>
          <div className="flex justify-center space-x-3 w-full">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://www.skype.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaSkype size={20} />
            </a>
            <a href="https://www.linkedin.com/in/nezam83uddin/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        {/* Navigation Links */}
        <nav className="mt-10 p-6">
          <Link to="/" className={getLinkClass('/')} onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/Resume" className={getLinkClass('/Resume')} onClick={handleLinkClick}>
            Resume
          </Link>
          <Link to="/Portfolio" className={getLinkClass('/Portfolio')} onClick={handleLinkClick}>
            Portfolio
          </Link>
          <Link to="/Services" className={getLinkClass('/Services')} onClick={handleLinkClick}>
            Services
          </Link>
          <Link to="/Contact" className={getLinkClass('/Contact')} onClick={handleLinkClick}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
