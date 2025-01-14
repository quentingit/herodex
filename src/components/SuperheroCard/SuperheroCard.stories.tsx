import React from 'react';
import SuperheroCard from './SuperheroCard';

export default {
  title: 'Components/SuperheroCard',
  component: SuperheroCard,
};

const Template = (args: any) => <SuperheroCard {...args} />;

export const Superman = Template.bind({});
Superman.args = {
  name: 'Superman',
  fullName: 'Clark Kent',
  alignment: 'good',
  intelligence: '100',
  strength: '100',
  speed: '100',
  durability: '90',
  power: '100',
  combat: '85',
  height: '6\'3" (191 cm)',
  weight: '235 lbs (107 kg)',
  eyeColor: 'Blue',
  hairColor: 'Black',
  occupation: 'Journalist',
  firstAppearance: 'Action Comics #1 (1938)',
  groupAffiliation: 'Justice League',
  relatives: 'Jonathan and Martha Kent (adoptive parents)',
  imageUrl:
    'https://www.francetvinfo.fr/pictures/gqzdjgiEXROHvpL8SQt_dfOLCyE/1200x1200/2019/04/12/hub_super01_cvr_1500_5b3e561f3788f5.51606704.jpg',
};

export const Batman = Template.bind({});
Batman.args = {
  name: 'Batman',
  fullName: 'Bruce Wayne',
  alignment: 'good',
  intelligence: '100',
  strength: '50',
  speed: '70',
  durability: '75',
  power: '50',
  combat: '100',
  height: '6\'2" (188 cm)',
  weight: '210 lbs (95 kg)',
  eyeColor: 'Blue',
  hairColor: 'Black',
  occupation: 'CEO of Wayne Enterprises, Vigilante',
  firstAppearance: 'Detective Comics #27 (1939)',
  groupAffiliation: 'Justice League',
  relatives: 'Thomas and Martha Wayne (parents, deceased)',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/en/8/87/Batman_DC_Comics.png',
};
