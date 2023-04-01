import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../common-components/Card';
import { brandA, brandB } from '../utility/constant';

export default {
  title: 'QuoteBlocks',
  component: Card,
  argTypes: {
    componentBackgroundColor: {
      options: ['F6F6F6', 'E6F1FA'],
      control: { type: 'select' },
    },
    textBoxBackgroundColor: {
      options: ['FFFFFF', 'F6F6F6', 'E6F1FA', '0057B7'],
      control: { type: 'select' },
    },
    textColor: {
      options: ['282828', 'FFFFFF', '000000'],
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

export const BrandB = Template.bind({});
BrandB.args = {
  componentBackgroundColor: 'F6F6F6',
  textBoxBackgroundColor: 'FFFFFF',
  textColor: '282828',
  hideUnderline: false,
  brandButtonColor: brandB,
  underlineColor: brandB,
};
