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
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">Error loading hero data</div>
    );
  }

  if (!heroData) {
    return (
      <div className="text-center text-gray-500">No hero data available</div>
    );
  }

  return (
    <div className="flex justify-center p-4">
      <SuperheroCard {...heroData} />
    </div>
  );
};

export default SuperheroCardContainer;
