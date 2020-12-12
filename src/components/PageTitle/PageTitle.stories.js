import React from "react";
import PageTitle from "./PageTitle.jsx";
import { withDesign } from 'storybook-addon-designs'


export default {
    title: 'Page/title',
    component: PageTitle,
    decorators: [withDesign],
  }
  
  export const pageTitle = () => <PageTitle />
  
  pageTitle.parameters = {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/7inAfhaj1vHLtamgaiXSkU/AngellXR-sandbox?node-id=120%3A0',
    },
  }
