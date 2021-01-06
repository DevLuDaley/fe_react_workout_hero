import React, {Fragment} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'

function App() {
  return (
    <Fragment>
    <div className="App container">
      <header className="App-header">
      </header>
      <MainContainer id="main-container"/>
    </div>
    </Fragment>
  );
}

export default App;
