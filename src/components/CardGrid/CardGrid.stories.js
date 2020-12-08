import React from "react";
import CardGrid from "./CardGrid.jsx";
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'CardGrid',
  component: CardGrid,
  decorators: [withDesign],
}

export const cardGrid = () => <CardGrid />

cardGrid.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=112%3A915',
  },
}