import React from "react";
import CardTitle from "./CardTitle.jsx";
import { withDesign } from 'storybook-addon-designs'
import { CARDINFO } from '../../utils/constants';



export default {
    title: 'Card/subcomponents/body/title',
    component: CardTitle,
    decorators: [withDesign],
  }
  
  export const cardTitle = () => <CardTitle title={CARDINFO[0].title}/>
  
  cardTitle.parameters = {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=120%3A0',
    },
  }
