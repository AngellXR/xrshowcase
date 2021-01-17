// import logo from './logo.svg';
import CardGrid from "./components/CardGrid/CardGrid.jsx";
import PageTitle from "./components/PageTitle/PageTitle.jsx";
import { device } from "../src/utils/device";

import "./App.css";
// import VRScene from './components/VRScene/VRScene.jsx'
// import 'aframe-react'

function App() {
  return (
    <div className="App">
      <body>
        <PageTitle />
        <h3>
        Each card contains a VR or AR experience. Browse Worlds, memories, sites, and assets on any device.
        </h3>
        <p>
        We believe in an open and collaborative Metaverse. Have a WebXR project we should showcase? Submit your project <a href="https://forms.gle/UfpUuKmvXQGjuX737"><u>with this form</u></a> to be featured. 
        </p>
        <h4>
          <a href="https://angellxr.com/">back to angellxr.com</a>
        </h4>
        <div>
          <CardGrid />
        </div>
      </body>
    </div>
  );
}

export default App;
