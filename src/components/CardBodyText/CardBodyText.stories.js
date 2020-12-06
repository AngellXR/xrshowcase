import React from "react";
import CardBodyText from "./CardBodyText.jsx";
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Card/subcomponents/body/text',
    component: CardBodyText,
    decorators: [withDesign],
  }
  
  export const cardBodyText = () => <CardBodyText />
  
  cardBodyText.parameters = {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=112%3A915',
    },
  }

