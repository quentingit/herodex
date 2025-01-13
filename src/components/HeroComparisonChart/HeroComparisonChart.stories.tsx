import React from 'react';
import HeroComparisonChart from './HeroComparisonChart';

export default {
  title: 'Components/HeroComparisonChart',
  component: HeroComparisonChart,
};

const Template = (args: any) => <HeroComparisonChart {...args} />;

export const Comparison = Template.bind({});
Comparison.args = {
  hero1: { name: 'Superman', stats: [90, 85, 95] },
  hero2: { name: 'Batman', stats: [70, 60, 100] },
};
