import { useState } from 'react';
import { searchHeroByName } from '../api/superheroApi';

const generateRandomId = () => Math.floor(Math.random() * 732) + 1;

export const useSuperhero = () => {
  const [heroIds, setHeroIds] = useState<number[]>([generateRandomId()]);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const addRandomHero = () => {
    const newId = generateRandomId();
    setHeroIds((prevIds) =>
      prevIds.includes(newId) ? prevIds : [...prevIds, newId]
    );
  };

  const removeHero = (id: number) => {
    setHeroIds((prevIds) => prevIds.filter((heroId) => heroId !== id));
  };

  const searchHero = async (query: string) => {
    try {
      const heroes = await searchHeroByName(query);
      if (heroes && heroes.length > 0) {
        setHeroIds((prevIds) => [
          ...prevIds,
          ...heroes.filter((id) => !prevIds.includes(id)),
        ]);
        setSearchError(null);
      } else {
        setSearchError('No heroes found with that name.');
        setShowModal(true);
        setTimeout(() => setShowModal(false), 3000);
      }
    } catch (error) {
      setSearchError(error.message || 'Error searching for hero.');
      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000);
    }
  };

  return {
    heroIds,
    searchError,
    showModal,
    addRandomHero,
    removeHero,
    searchHero,
  };
};
