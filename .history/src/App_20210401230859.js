import React from 'react';
// import './App.css';
import MainContainer from './containers/MainContainer'
import { Grid, Container } from '@material-ui/core';
import Header from '../src/components/Header'



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
<Header/>
          <Container className="app-container">
            {/* APP CONTAINER */}
            <MainContainer id="main-container"/>
                {/* MAIN CONTAINER */}
          </Container>
      </Grid>
 
  );
}

export default App;



