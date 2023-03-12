// import logo from './logo.svg';
import CardGrid from "./components/CardGrid/CardGrid.jsx";
import PageTitle from "./components/PageTitle/PageTitle.jsx";
import styled from "styled-components";
// import { device } from "../src/utils/device";
import "./App.css";
// import VRScene from './components/VRScene/VRScene.jsx'
// import 'aframe-react'

const Appstyles = styled.div`
  color: #ecb365;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

function App(props) {
  return (
    <Appstyles>
      <div
        className="App"
        // id="style-7"
        style={{ backgroundColor: "#041C32" }}
      >
        <div>
          <PageTitle />
          <h3>
            Each card contains a VR or AR experience. Browse Worlds, memories,
            sites, and assets on any device.
          </h3>
          <p>
            We believe in an open and collaborative Metaverse. Have a WebXR
            project we should showcase? Submit your project{" "}
            <a href="https://forms.gle/UfpUuKmvXQGjuX737">
              <u>with this form</u>
            </a>{" "}
            to be featured.
          </p>
          <h4>
            <a href="https://angellxr.com/">back to angellxr.com</a>
          </h4>
          <div>
            <CardGrid />
          </div>
        </div>
      </div>
    </Appstyles>
  );
}

export default App;
