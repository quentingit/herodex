import React, { useState } from 'react';
import SuperheroCardContainer from './components/SuperheroCardContainer/SuperheroCardContainer';
import { useSuperhero } from './hooks/useSuperhero';
import ActionButton from './components/ActionButton/ActionButton';

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
      <ActionButton
        onClick={() => removeHero(id)}
        label="✖"
        variant="remove"
        className="absolute top-0 right-[-20px]"
      />
      <SuperheroCardContainer heroId={String(id)} />
    </div>
  ));

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchHero = () => {
    searchHero(searchQuery);
  };

  const searchSection = (
    <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search hero by name"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="px-4 py-2 w-full sm:w-64 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
        <ActionButton
          onClick={handleSearchHero}
          label="Search"
          variant="search"
          className="uppercase tracking-wider" // Exemple de style personnalisé
        />
      </div>
      <span className="text-gray-500 font-semibold">or</span>
      <ActionButton
        onClick={addRandomHero}
        label="Add Random Hero"
        variant="add"
      />
    </div>
  );

  const errorModal = showModal && (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white px-8 py-4 rounded-lg shadow-lg text-center transition-all duration-500 ease-in-out z-50">
      <p className="text-base font-semibold">{searchError}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="mt-20 w-full max-w-[800px] px-4 py-4 sticky top-0 bg-gray-100 z-50 rounded-2xl mb-20">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center mb-6">
          Superhero Details
        </h1>
        {errorModal}
        {searchSection}
      </div>

      <div className="mb-20 w-full max-w-[1200px] px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {heroGrids}
      </div>
    </div>
  );
};

export default App;
