import React, { useState } from 'react';
import chartificate1 from '../assats/Certificate/Chartificate1.png';
import chartificate2 from '../assats/Certificate/Chartificate2.png';
import chartificate3 from '../assats/Certificate/Chartificate3.png';
import chartificate4 from '../assats/Certificate/Chartificate4.png';
import chartificate5 from '../assats/Certificate/Chartificate5.png';
import chartificate6 from '../assats/Certificate/Chartificate6.png';
import chartificate7 from '../assats/Certificate/Chartificate7.png';
import chartificate8 from '../assats/Certificate/Chartificate8.png';
import chartificate9 from '../assats/Certificate/Chartificate9.png';
import chartificate10 from '../assats/Certificate/Chartificate10.png';
import chartificate11 from '../assats/Certificate/Chartificate11.png';
import chartificate12 from '../assats/Certificate/Chartificate12.png';
import chartificate from '../assats/Certificate/Chartificate.png.jpg';
import { FaFile, FaGithub, FaYoutube } from 'react-icons/fa';

const portfolioItems = [
  { id: 1, category: 'Certificate', title: 'Certificate 1', description: 'Description of Certificate 1', img: chartificate },
  { id: 2, category: 'Certificate', title: 'Certificate 2', description: 'Description of Certificate 2', img: chartificate1 },
  { id: 3, category: 'Certificate', title: 'Certificate 3', description: 'Description of Certificate 3', img: chartificate3 },
  { id: 4, category: 'Certificate', title: 'Certificate 4', description: 'Description of Certificate 4', img: chartificate4 },
  { id: 5, category: 'Certificate', title: 'Certificate 5', description: 'Description of Certificate 5', img: chartificate5 },
  { id: 6, category: 'Certificate', title: 'Certificate 6', description: 'Description of Certificate 6', img: chartificate6 },
  { id: 7, category: 'Certificate', title: 'Certificate 7', description: 'Description of Certificate 7', img: chartificate7 },
  { id: 8, category: 'Certificate', title: 'Certificate 8', description: 'Description of Certificate 8', img: chartificate8 },
  { id: 9, category: 'Certificate', title: 'Certificate 9', description: 'Description of Certificate 9', img: chartificate9 },
  { id: 10, category: 'Certificate', title: 'Certificate 10', description: 'Description of Certificate 10', img: chartificate10 },
  { id: 11, category: 'Certificate', title: 'Certificate 11', description: 'Description of Certificate 11', img: chartificate11 },
  { id: 12, category: 'Certificate', title: 'Certificate 12', description: 'Description of Certificate 12', img: chartificate12 },
  { id: 18, category: 'Certificate', title: 'Certificate 18', description: 'Description of Certificate 18', img: chartificate2 },
  { id: 13, category: 'Project', title: 'Project 1', description: 'Intelligent  document  understating  process' },
  { id: 14, category: 'Project', title: 'Project 2', description: 'Best Practices in ReFramwork' },
  { id: 15, category: 'Project', title: 'Project 3', description: 'Excel Automation' },
  { id: 16, category: 'YouTube', title: 'Project 1', description: 'Re-Framework' },
  { id: 17, category: 'YouTube', title: 'Project 2', description: 'Document Understanding' },
  
];



const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="container p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Portfolio</h1>
        <hr className="border-2 border-green-600 w-20 mb-5 font-bold" />
      </div>
      <div className="flex justify-center mb-8 flex-wrap">
        {['All', 'Certificate', 'Project', 'YouTube'].map(category => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 my-2 rounded ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
            {item.category === "Certificate" && (
              <>
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover border-4 border-gray-300 mb-4"
                  />
                )}
                {/* <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p> */}
              </>
            )}
            {item.category === "Project" && (
              <div className="project-item">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
                <div className="flex justify-center space-x-3 w-full mt-4">
                  <a
                    href="https://www.youtube.com/@sajibtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-500"
                  >
                    <FaYoutube size={20} />
                  </a>
                 
                  <a
                    href="https://github.com/nezam83uddin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black"
                  >
                    <FaFile  size={20} />
                  </a>
                 
                </div>
              </div>
            )}

            {item.category === "YouTube" && (
              <>
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
