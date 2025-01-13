import axios from 'axios';
import { transformHeroData } from './schemas/heroSchema';

const BASE_URL =
  import.meta.env.MODE === 'development'
    ? '/api'
    : `https://superheroapi.com/api/${import.meta.env.VITE_SUPERHERO_API_KEY}`;

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getHeroById = async (id: string) => {
  try {
    const response = await api.get(`/${id}`);
    return transformHeroData(response.data);
  } catch (error) {
    throw new Error(`Failed to fetch hero by ID: ${id}. ${error}`);
  }
};

export const searchHeroByName = async (name: string): Promise<number[]> => {
  try {
    const response = await api.get(`/search/${name}`);
    const data = response.data;

    if (data.response !== 'success') {
      throw new Error(`API Error: Response status is "${data.response}"`);
    }

    if (!data.results || data.results.length === 0) {
      throw new Error(`No heroes found for the name "${name}"`);
    }

    return data.results.map((hero: any) => parseInt(hero.id, 10));
  } catch (error) {
    throw new Error(`Failed to search heroes by name "${name}". ${error}`);
  }
};
