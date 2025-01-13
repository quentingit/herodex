import { z } from 'zod';

export const heroSchema = z.object({
  name: z.string(),
  biography: z.object({
    'full-name': z.string(),
    alignment: z.string(),
  }),
  powerstats: z.object({
    intelligence: z.string(),
    strength: z.string(),
    speed: z.string(),
    durability: z.string(),
    power: z.string(),
    combat: z.string(),
  }),
  appearance: z.object({
    height: z.array(z.string()),
    weight: z.array(z.string()),
    'eye-color': z.string(),
    'hair-color': z.string(),
  }),
  work: z.object({
    occupation: z.string(),
  }),
  connections: z.object({
    'group-affiliation': z.string(),
    relatives: z.string(),
  }),
  image: z.object({
    url: z.string(),
  }),
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
  const parsed = heroSchema.parse(hero);
  return {
    name: parsed.name,
    fullName: parsed.biography['full-name'],
    alignment: parsed.biography.alignment,
    intelligence: parsed.powerstats.intelligence,
    strength: parsed.powerstats.strength,
    speed: parsed.powerstats.speed,
    durability: parsed.powerstats.durability,
    power: parsed.powerstats.power,
    combat: parsed.powerstats.combat,
    height: parsed.appearance.height[1],
    weight: parsed.appearance.weight[1],
    eyeColor: parsed.appearance['eye-color'],
    hairColor: parsed.appearance['hair-color'],
    occupation: parsed.work.occupation,
    firstAppearance: parsed.biography['first-appearance'],
    groupAffiliation: parsed.connections['group-affiliation'],
    relatives: parsed.connections.relatives,
    imageUrl: parsed.image.url,
  };
};
