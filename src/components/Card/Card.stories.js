import React from "react";
import Card from "./Card.jsx";
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Card',
  component: Card,
  decorators: [withDesign],
}

export const card = () => <Card />

card.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=112%3A915',
  },
}