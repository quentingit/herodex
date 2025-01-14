import React from 'react';
import { Meta, Story } from '@storybook/react';
import ActionButton, { ActionButtonProps } from './ActionButton';

export default {
  title: 'Components/ActionButton',
  component: ActionButton,
} as Meta;

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

export const RemoveButton = Template.bind({});
RemoveButton.args = {
  label: '✖',
  variant: 'remove',
  onClick: () => alert('Hero removed!'),
};

export const AddButton = Template.bind({});
AddButton.args = {
  label: 'Add Random Hero',
  variant: 'add',
  onClick: () => alert('Random hero added!'),
};

export const SearchButton = Template.bind({});
SearchButton.args = {
  label: 'Search',
  variant: 'search',
  onClick: () => alert('Searching hero!'),
};

export const CustomStyledButton = Template.bind({});
CustomStyledButton.args = {
  label: 'Custom',
  variant: 'add',
  className: 'bg-yellow-400 hover:bg-yellow-500 text-black', // Styles personnalisés
  onClick: () => alert('Custom styled button clicked!'),
};
