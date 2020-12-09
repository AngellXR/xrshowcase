import React from "react";
// import { storiesOf } from "@storybook/react";
import VRScene from "./VRScene.jsx";
import { withDesign } from 'storybook-addon-designs'

// deprecated storiesOf
// storiesOf("CardBody", module).add("default", () => <CardBody />);

export default {
    title: 'VRScene',
    component: VRScene,
    decorators: [withDesign],
  }
  
  export const vRScene = () => <VRScene />
  
  vRScene.parameters = {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=112%3A937',
    },
  }