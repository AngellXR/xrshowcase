// import logo from './logo.svg';
import CardGrid from "./components/CardGrid/CardGrid.jsx";
import PageTitle from "./components/PageTitle/PageTitle.jsx";

import "./App.css";
// import VRScene from './components/VRScene/VRScene.jsx'
// import 'aframe-react'

function App() {
  return (
    <div className="App">
      <body>
        <PageTitle />
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
