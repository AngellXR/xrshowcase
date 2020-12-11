import React from "react";
// import { storiesOf } from "@storybook/react";
import CardBody from "./CardBody.jsx";
import { withDesign } from 'storybook-addon-designs'
import { CARDINFO } from '../../utils/constants';

// deprecated storiesOf
// storiesOf("CardBody", module).add("default", () => <CardBody />);

export default {
    title: 'Card/subcomponents/body',
    component: CardBody,
    decorators: [withDesign],
  }
  
  export const bodyMolecule = () => <CardBody title={CARDINFO[0].title} description={CARDINFO[0].description}/>

  // export const bodyMolecule = () => <CardBody  />
  
  bodyMolecule.parameters = {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=112%3A937',
    },
  }