import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import '../../App.css';

class VRScene extends React.Component {
  render () {
    return (
      <Scene embedded>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        {/* <Entity particle-system={{preset: 'snow'}}/> */}
        <Entity light={{type: 'point'}}/>
        {/* <Entity gltf-model={{src: 'virtualcity.gltf'}}/> */}
        <Entity primative='a-sky' src="https://d3i9te5634opuo.cloudfront.net/riva-sky.JPG"/>
        <Entity text={{value: 'Hello, WebVR!'}}/>
      </Scene>
    );
  }
}

export default VRScene;
