import "aframe";
import "../VRScene/node_modules/aframe-particle-system-component";
import { Entity, Scene } from "aframe-react";
import React from 'react';
import '../../App.css';
import ReactDOM from "react-dom";
 
class HeaderVR extends React.Component {
  render() {
    return (
      <Scene>
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "red" }}
          position={{ x: 0, y: 0, z: -5 }}
        />
        <Entity particle-system={{ preset: "snow" }} />
        <Entity light={{ type: "point" }} />
        {/* <Entity gltf-model={{ src: "virtualcity.gltf" }} /> */}
        <Entity text={{ value: "Hello, WebVR!" }} />
      </Scene>
    );
  }
}
 
ReactDOM.render(<HeaderVR />, document.querySelector("#sceneContainer"));