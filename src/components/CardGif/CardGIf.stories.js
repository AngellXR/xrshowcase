import React from "react";
import CardGif from "./CardGif.jsx";
import { withDesign } from 'storybook-addon-designs'
import { CARDINFO } from '../../utils/constants';


export default {
    title: 'Card/subcomponents/Gif',
    component: CardGif,
    decorators: [withDesign],
  }
  
  export const cardGif = () => <CardGif imgURL={CARDINFO[0].imgURL}/>
  
  cardGif.parameters = {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=112%3A956',
    },
  }

