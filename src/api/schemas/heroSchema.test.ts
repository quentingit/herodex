import { describe, it, expect } from 'vitest';
import { heroSchema } from './heroSchema';

describe('heroSchema', () => {
  it('should validate a valid hero', () => {
    const validHero = {
      name: 'Superman',
      biography: {
        'full-name': 'Clark Kent',
        alignment: 'good',
      },
      powerstats: {
        intelligence: '85',
        strength: '100',
        speed: '99',
        durability: '90',
        power: '100',
        combat: '80',
      },
      appearance: {
        height: ['6\'3"', '191 cm'],
        weight: ['235 lb', '107 kg'],
        'eye-color': 'blue',
        'hair-color': 'black',
      },
      work: {
        occupation: 'Reporter',
      },
      connections: {
        'group-affiliation': 'Justice League',
        relatives: 'Jonathan and Martha Kent (adoptive parents)',
      },
      image: {
        url: 'https://example.com/superman.jpg',
      },
    };

    expect(() => heroSchema.parse(validHero)).not.toThrow();
  });

  it('should throw an error for invalid hero', () => {
    const invalidHero = {
      name: 'Superman',
      biography: {},
    };

    expect(() => heroSchema.parse(invalidHero)).toThrow();
  });
});
