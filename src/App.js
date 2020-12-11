// import logo from './logo.svg';
import './App.css';
import CardGrid from './components/CardGrid/CardGrid.jsx'
import VRScene from './components/VRScene/VRScene.jsx'
import 'aframe-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <html>
          <head>
            <script src="https://aframe.io/releases/1.1.0/aframe.min.js"></script>
          </head>
        </html> */}
        <VRScene />
      </header>
      <body>
        <div>
          <CardGrid />
        </div>
      </body>
    </div>
  );
}

export default App;
