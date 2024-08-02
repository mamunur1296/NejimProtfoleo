import React from 'react';
import img from '../../src/assats/profile.jpg'; // Ensure this path is correct

const Home = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }} // Use template literals for dynamic URLs
    >
      <div className=" ps-3 w-full">
        <h1 className="text-5xl font-bold mb-4">Mamunur Rushid (Shafife)</h1>
        <div className="w-full">
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna nec orci dictum pretium.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
