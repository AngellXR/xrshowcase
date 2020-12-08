// import logo from './logo.svg';
import './App.css';
import CardGrid from './components/CardGrid/CardGrid.jsx'
import 'aframe-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <html>
          <head>
            <script src="https://aframe.io/releases/1.1.0/aframe.min.js"></script>
          </head>
          <body>
            <a-scene>
              <a-assets>
                <a-asset-item 
                id="sky2" src="https://d3i9te5634opuo.cloudfront.net/riva-sky.JPG"></a-asset-item>
                {/* <img id="water" src="https://cdn.glitch.com/9bf22f88-900e-4a50-89c0-f5bee04c91e2%2FTerrain002_2K_Flow.jpg?v=1604978720319">
                <img id="numbers" src="https://cdn.glitch.com/2fa39cc3-dabf-4910-b818-158ecc49d6df%2Fnumbers.png?v=1605486362409"> */}
                <a-asset-item
                id="logo"
                src="https://d3i9te5634opuo.cloudfront.net/AngellXR-rounded.glb"
                ></a-asset-item>
              </a-assets>
                <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
                <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
                <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
                <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
                <a-sky src="#sky2"></a-sky>
            </a-scene>
          </body>
        </html>
      </header>
      <VRScene />
      <CardGrid />
    </div>
  );
}

export default App;
