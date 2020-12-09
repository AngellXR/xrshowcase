// import logo from './logo.svg';
import './App.css';
import VRScene from './components/VRScene/VRScene.jsx'
import CardGrid from './components/CardGrid/CardGrid.jsx'
import 'aframe-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <VRScene />
      </header>
      <CardGrid />
    </div>
  );
}

export default App;
