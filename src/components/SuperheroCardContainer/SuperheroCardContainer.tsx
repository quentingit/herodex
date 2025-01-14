import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getHeroById } from '../../api/superheroApi';
import SuperheroCard from '../SuperheroCard/SuperheroCard';

type SuperheroCardContainerProps = {
  heroId: string;
};

const SuperheroCardContainer: React.FC<SuperheroCardContainerProps> = ({
  heroId,
}) => {
  const {
    data: heroData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['hero', heroId],
    queryFn: () => getHeroById(heroId),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48 w-full bg-gray-200 rounded-lg animate-pulse">
        <span className="text-gray-500">Loading...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-48 w-full bg-red-100 text-red-500 rounded-lg">
        Error loading hero data
      </div>
    );
  }

  if (!heroData) {
    return (
      <div className="flex justify-center items-center h-48 w-full bg-gray-100 text-gray-500 rounded-lg">
        No hero data available
      </div>
    );
  }

  return (
    <div className="flex justify-center p-4">
      <div className="opacity-100 transition-opacity duration-500 ease-in-out animate-fade-in">
        <SuperheroCard {...heroData} />
      </div>
    </div>
  );
};

export default SuperheroCardContainer;
