import React, { useState } from 'react';

const portfolioItems = [
  { id: 1, category: 'My Photography', title: 'Photography Project 1', description: 'Description of Photography Project 1' },
  { id: 2, category: 'My Photography', title: 'Photography Project 2', description: 'Description of Photography Project 2' },
  { id: 3, category: 'My Gallery', title: 'Gallery Project 1', description: 'Description of Gallery Project 1' },
  { id: 4, category: 'YouTube Video', title: 'YouTube Video 1', description: 'Description of YouTube Video 1' },
  { id: 5, category: 'YouTube Video', title: 'YouTube Video 2', description: 'Description of YouTube Video 2' },
  { id: 6, category: 'All', title: 'All Projects 1', description: 'Description of All Projects 1' },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-700">Portfolio</h1>
        <hr className="border-2 border-green-600 w-20 mx-auto mb-5 font-bold" />
      </div>
      <div className="flex justify-center mb-8 flex-wrap">
        {['All', 'My Photography', 'My Gallery', 'YouTube Video'].map(category => (
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
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
