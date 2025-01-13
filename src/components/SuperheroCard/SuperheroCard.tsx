import React from 'react';

type Props = {
  name: string;
  power: string;
  intelligence: number;
};

const SuperheroCard: React.FC<Props> = ({ name, power, intelligence }) => (
  <div>
    <h3>{name}</h3>
    <p>Power: {power}</p>
    <p>Intelligence: {intelligence}</p>
  </div>
);

export default SuperheroCard;
