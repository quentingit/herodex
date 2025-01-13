import React from 'react';
import SuperheroCardContainer from './components/SuperheroCardContainer/SuperheroCardContainer';

const App = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center mb-6">
        Superhero Details
      </h1>
      <SuperheroCardContainer heroId="1" />
    </div>
  );
};

export default App;
