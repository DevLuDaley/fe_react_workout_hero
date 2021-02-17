import React, {Fragment} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'
import { Grid } from '@material-ui/core';



function App() {
  return (
    // <Fragment>
    
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        // border= '30px dashed rgb(248, 4, 65)'
        // backgroundColor='yellow'
      >
          <div className="app-container">
            {/* APP CONTAINER */}

            <MainContainer id="main-container"/>
                {/* MAIN CONTAINER */}
          </div>
      </Grid>
 
  );
}

export default App;



