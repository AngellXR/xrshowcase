import React from "react";
import CardBodyText from "./CardBodyText.jsx";
import { withDesign } from 'storybook-addon-designs';
import { CARDINFO } from '../../utils/constants';

export default {
    title: 'Card/subcomponents/body/text',
    component: CardBodyText,
    decorators: [withDesign],
  }
  
  // export const cardBodyText = () => <CardBodyText />
  export const cardBodyText = () => <CardBodyText description={CARDINFO[0].description}/>

  cardBodyText.parameters = {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=120%3A0',
    },
  }

