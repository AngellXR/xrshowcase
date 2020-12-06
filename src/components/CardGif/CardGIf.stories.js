import React from "react";
import CardGif from "./CardGif.jsx";
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Card/subcomponents/Gif',
    component: CardGif,
    decorators: [withDesign],
  }
  
  export const cardGif = () => <CardGif />
  
  cardGif.parameters = {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=112%3A915',
    },
  }

