import axios from 'axios';

const BASE_URL = '/api';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getHeroById = async (id: string) => {
  const response = await api.get(`/${id}`);
  const hero = response.data;

  return {
    name: hero.name,
    fullName: hero.biography['full-name'],
    alignment: hero.biography.alignment,
    intelligence: hero.powerstats.intelligence,
    strength: hero.powerstats.strength,
    speed: hero.powerstats.speed,
    durability: hero.powerstats.durability,
    power: hero.powerstats.power,
    combat: hero.powerstats.combat,
    height: hero.appearance.height[1],
    weight: hero.appearance.weight[1],
    eyeColor: hero.appearance['eye-color'],
    hairColor: hero.appearance['hair-color'],
    occupation: hero.work.occupation,
    firstAppearance: hero.biography['first-appearance'],
    groupAffiliation: hero.connections['group-affiliation'],
    relatives: hero.connections.relatives,
    imageUrl: hero.image.url,
  };
};

export const searchHeroByName = async (name: string) => {
  const response = await api.get(`/search/${name}`);
  return response.data;
};

export const getAllHeroes = async () => {
  const response = await api.get(`/heroes`);
  return response.data;
};
