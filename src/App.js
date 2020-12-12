// import logo from './logo.svg';
import './App.css';
import CardGrid from './components/CardGrid/CardGrid.jsx'
import PageTitle from './components/PageTitle/PageTitle.jsx'
// import VRScene from './components/VRScene/VRScene.jsx'
// import 'aframe-react'

function App() {
  return (
    <div className="App">
      <body>
        <PageTitle />
        <div>
          <CardGrid />
        </div>
      </body>
    </div>
  );
}

export default App;
