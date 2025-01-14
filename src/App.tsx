import React, { useState } from 'react';
import SuperheroCardContainer from './components/SuperheroCardContainer/SuperheroCardContainer';
import { useSuperhero } from './hooks/useSuperhero';

const App = () => {
  const {
    heroIds,
    searchError,
    showModal,
    addRandomHero,
    removeHero,
    searchHero,
  } = useSuperhero();
  const [searchQuery, setSearchQuery] = useState('');

  const heroGrids = heroIds.map((id, index) => (
    <div className="relative" key={index}>
      <button
        onClick={() => removeHero(id)}
        className="z-10 absolute  top-2 right-[-10px] w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-red-600 hover:scale-110 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        ✖
      </button>
      <SuperheroCardContainer heroId={String(id)} />
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-[1200px] px-4 sticky top-0 bg-gray-100 z-50">
        <h1 className="mt-20 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center mb-6">
          Superhero Details
        </h1>

        {showModal && (
          <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white px-8 py-4 rounded-lg shadow-lg text-center transition-all duration-500 ease-in-out z-50">
            <p className="text-base font-semibold">{searchError}</p>
          </div>
        )}

        <div className="mb-20 flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search hero by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 w-full sm:w-64 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            <button
              onClick={() => searchHero(searchQuery)}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              Search
            </button>
          </div>
          <span className="text-gray-500 font-semibold">or</span>
          <button
            onClick={addRandomHero}
            className="mt-4 sm:mt-0 px-6 py-2 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Add Random Hero
          </button>
        </div>
      </div>

      <div className="mb-20 w-full max-w-[1200px] px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {heroGrids}
      </div>
    </div>
  );
};

export default App;
