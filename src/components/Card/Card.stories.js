import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card.jsx";
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Card',
  decorators: [withDesign],
}

export const myStory = () => <Card />

myStory.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=112%3A915',
  },
}