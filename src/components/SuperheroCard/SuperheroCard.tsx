import React, { useState } from 'react';
import HeroStatsChart from '../HeroStatsChart/HeroStatsChart';

export type SuperheroCardProps = {
  name: string;
  fullName: string;
  alignment: string;
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
  occupation: string;
  firstAppearance: string;
  groupAffiliation: string;
  relatives: string;
  imageUrl: string;
};

const SuperheroCard: React.FC<SuperheroCardProps> = ({
  name,
  fullName,
  alignment,
  intelligence,
  strength,
  speed,
  durability,
  power,
  combat,
  height,
  weight,
  eyeColor,
  hairColor,
  occupation,
  firstAppearance,
  groupAffiliation,
  relatives,
  imageUrl,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-96 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 z-10 bg-black bg-opacity-60 px-4 py-2 rounded-t-lg shadow-md">
            <h2 className="text-2xl font-bold text-white tracking-wide truncate">
              {name}
            </h2>
            <h3 className="text-gray-600 text-base mt-1 flex items-center">
              <span className="font-semibold text-white">Full Name:</span>
              &nbsp;
              <span className="text-white truncate">{fullName}</span>
            </h3>
            <p
              className={`mt-3 px-3 py-1 text-md font-semibold text-white rounded-full shadow-md inline-block ${
                alignment === 'good'
                  ? 'bg-green-500 hover:bg-green-600'
                  : alignment === 'bad'
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-gray-500 hover:bg-gray-600'
              } transform transition-transform hover:scale-105`}
            >
              {alignment.charAt(0).toUpperCase() + alignment.slice(1)}
            </p>
          </div>
          <img
            src={imageUrl}
            alt={`${name} portrait`}
            className="w-full h-80 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-b-lg">
          <div className="mt-6">
            <HeroStatsChart
              intelligence={intelligence}
              strength={strength}
              speed={speed}
              durability={durability}
              power={power}
              combat={combat}
            />
          </div>

          {showDetails && (
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-700">
                    Appearance:
                  </h4>
                  <ul className="mt-2 text-sm text-gray-600">
                    <li>
                      <span className="font-semibold">Height:</span> {height}
                    </li>
                    <li>
                      <span className="font-semibold">Weight:</span> {weight}
                    </li>
                    <li>
                      <span className="font-semibold">Eye Color:</span>{' '}
                      {eyeColor}
                    </li>
                    <li>
                      <span className="font-semibold">Hair Color:</span>{' '}
                      {hairColor}
                    </li>
                  </ul>
                </div>
              </div>

              <h4 className="mt-6 text-lg font-bold text-gray-700">
                Biography:
              </h4>
              <ul className="mt-2 text-sm text-gray-600">
                <li>
                  <span className="font-semibold">Occupation:</span>{' '}
                  {occupation}
                </li>
                <li>
                  <span className="font-semibold">First Appearance:</span>{' '}
                  {firstAppearance}
                </li>
              </ul>

              <h4 className="mt-6 text-lg font-bold text-gray-700">
                Connections:
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">Group Affiliation:</span>{' '}
                {groupAffiliation}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">Relatives:</span> {relatives}
              </p>
            </div>
          )}

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-6 py-2 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-2xl transform transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              {showDetails ? 'Hide Details' : 'View More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperheroCard;
