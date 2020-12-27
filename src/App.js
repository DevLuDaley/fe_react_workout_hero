import React, {Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Routines from './components/RoutinesList'
import MainContainer from './containers/MainContainer'
// import RoutinesContainer from './containers/RoutinesContainer'



function App() {
  return (
    <Fragment>
      
    <div className="App container">
      <header className="App-header">
      </header>
      <MainContainer id="main-container" />
    </div>
    </Fragment>
  );
}

export default App;
