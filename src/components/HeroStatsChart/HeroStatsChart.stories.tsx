import React from 'react';
import HeroStatsChart from './HeroStatsChart';

export default {
  title: 'Components/HeroStatsChart',
  component: HeroStatsChart,
};

const Template = (args: any) => <HeroStatsChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  intelligence: '100',
  strength: '100',
  speed: '100',
  durability: '90',
  power: '100',
  combat: '85',
};

export const Batman = Template.bind({});
Batman.args = {
  intelligence: '100',
  strength: '50',
  speed: '70',
  durability: '75',
  power: '50',
  combat: '100',
};
