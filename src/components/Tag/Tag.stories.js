import React from "react";
import Tag from "./Tag.jsx";
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Card/subcomponents/body/tag',
    component: Tag,
    decorators: [withDesign],
  }
  
  export const tag = () => <Tag />
  
  tag.parameters = {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=112%3A915',
    },
  }
