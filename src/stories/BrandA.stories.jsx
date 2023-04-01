import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../common-components/Card';
import { brandA, brandB } from '../utility/constant';

export default {
  title: 'QuoteBlocks',
  component: Card,
  argTypes: {
    componentBackgroundColor: {
      options: ['FFFFFF', 'FAF5EB'],
      control: { type: 'select' },
    },
    textBoxBackgroundColor: {
      options: ['FFFFFF', 'F6F6F6'],
      control: { type: 'select' },
    },
    textColor: {
      options: ['282828', 'FFFFFF'],
      control: { type: 'select' },
    },
    hideUnderline: { control: 'boolean' },
    brandButtonColor: {
      options: [brandA, brandB],
      control: { type: 'select' },
    },
    underlineColor: {
      options: [brandA, brandB],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <Card {...args} />
  </BrowserRouter>
);

export const BrandA = Template.bind({});
BrandA.args = {
  componentBackgroundColor: 'FFFFFF',
  textBoxBackgroundColor: 'FFFFFF',
  textColor: '282828',
  hideUnderline: false,
  brandButtonColor: brandA,
  underlineColor: brandA,
};
