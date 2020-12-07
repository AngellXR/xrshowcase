import React from "react";
import CardTitle from "./CardTitle.jsx";
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Card/subcomponents/body/title',
    component: CardTitle,
    decorators: [withDesign],
  }
  
  export const cardTitle = () => <CardTitle />
  
  cardTitle.parameters = {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=120%3A0',
    },
  }
