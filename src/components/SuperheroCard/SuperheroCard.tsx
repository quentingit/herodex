import React from 'react';
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
  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      <div className="bg-white rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={`${name} portrait`}
          className="w-full h-60 object-contain"
        />
        <div className="p-6">
          <h2 className="text-3xl font-extrabold text-gray-800">{name}</h2>
          <h3 className="text-gray-600 text-lg font-medium mt-1">
            <span className="font-semibold">Full Name:</span> {fullName}
          </h3>
          <p
            className={`mt-3 px-4 py-2 text-sm font-bold text-white rounded-full inline-block shadow-md ${
              alignment === 'good'
                ? 'bg-green-500'
                : alignment === 'bad'
                  ? 'bg-red-500'
                  : 'bg-gray-500'
            }`}
          >
            Alignment: {alignment}
          </p>

          <div className="mt-6">
            <h4 className="text-lg font-bold text-gray-700 mb-10">
              Stats Chart
            </h4>
            <HeroStatsChart
              intelligence={intelligence}
              strength={strength}
              speed={speed}
              durability={durability}
              power={power}
              combat={combat}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <h4 className="text-lg font-bold text-gray-700">Appearance:</h4>
              <ul className="mt-2 text-sm text-gray-600">
                <li>
                  <span className="font-semibold">Height:</span> {height}
                </li>
                <li>
                  <span className="font-semibold">Weight:</span> {weight}
                </li>
                <li>
                  <span className="font-semibold">Eye Color:</span> {eyeColor}
                </li>
                <li>
                  <span className="font-semibold">Hair Color:</span> {hairColor}
                </li>
              </ul>
            </div>
          </div>

          <h4 className="mt-6 text-lg font-bold text-gray-700">Biography:</h4>
          <ul className="mt-2 text-sm text-gray-600">
            <li>
              <span className="font-semibold">Occupation:</span> {occupation}
            </li>
            <li>
              <span className="font-semibold">First Appearance:</span>{' '}
              {firstAppearance}
            </li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-gray-700">Connections:</h4>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-semibold">Group Affiliation:</span>{' '}
            {groupAffiliation}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-semibold">Relatives:</span> {relatives}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperheroCard;
