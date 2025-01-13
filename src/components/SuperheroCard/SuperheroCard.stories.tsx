import SuperheroCard from './SuperheroCard';

export default {
  title: 'Components/SuperheroCard',
  component: SuperheroCard,
};

const Template = (args: any) => <SuperheroCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Superman',
  power: 'Flight',
  intelligence: 90,
};

export const Batman = Template.bind({});
Batman.args = {
  name: 'Batman',
  power: 'Martial Arts',
  intelligence: 100,
};
