import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import "aframe";
import { Entity, Scene } from "aframe-react";
import ReactDOM from "react-dom";


const StyledHeaderVR = styled.div`
position: relative;
width: 1440px;
height: 728px;
`

export default function HeaderVR(props) {
    return (
        <StyledHeaderVR>
class VRScene extends React.Component {
  render() {
    return (
      <Scene>
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "red" }}
          position={{ x: 0, y: 0, z: -5 }}
        />
        <Entity light={{ type: "point" }} />
        <Entity text={{ value: "Hello, WebVR!" }} />
      </Scene>
    );
  }
}
 
ReactDOM.render(<VRScene />, document.querySelector("#sceneContainer"));
        </StyledHeaderVR>
    );
}