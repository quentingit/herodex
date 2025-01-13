import axios from 'axios';

const BASE_URL = '/api';

export const api = axios.create({
  baseURL: BASE_URL,
});

export type HeroData = {
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

export const transformHeroData = (hero: any): HeroData => {
  return {
    name: hero.name || 'Unknown Name',
    fullName: hero.biography?.['full-name'] || 'Unknown Full Name',
    alignment: hero.biography?.alignment || 'neutral',
    intelligence: hero.powerstats?.intelligence || '0',
    strength: hero.powerstats?.strength || '0',
    speed: hero.powerstats?.speed || '0',
    durability: hero.powerstats?.durability || '0',
    power: hero.powerstats?.power || '0',
    combat: hero.powerstats?.combat || '0',
    height:
      (hero.appearance?.height && hero.appearance.height[1]) ||
      'Unknown Height',
    weight:
      (hero.appearance?.weight && hero.appearance.weight[1]) ||
      'Unknown Weight',
    eyeColor: hero.appearance?.['eye-color'] || 'Unknown Eye Color',
    hairColor: hero.appearance?.['hair-color'] || 'Unknown Hair Color',
    occupation: hero.work?.occupation || 'Unknown Occupation',
    firstAppearance:
      hero.biography?.['first-appearance'] || 'Unknown First Appearance',
    groupAffiliation: hero.connections?.['group-affiliation'] || 'None',
    relatives: hero.connections?.relatives || 'Unknown Relatives',
    imageUrl: hero.image?.url || 'null',
  };
};

export const getHeroById = async (id: string) => {
  const response = await api.get(`/${id}`);
  return transformHeroData(response.data);
};

export const searchHeroByName = async (name: string): Promise<number[]> => {
  const response = await api.get(`/search/${name}`);
  const data = response.data;

  if (data.response !== 'success') {
    throw new Error('No heroes found');
  }

  if (!data.results || data.results.length === 0) {
    throw new Error('No heroes found for the given name');
  }

  return data.results.map((hero: any) => hero.id);
};
