import React, { Component } from 'react';
// import {Route, Switch} from 'react-router-dom'

import {  Box } from '@material-ui/core';


import RoutinesContainer from './RoutinesContainer'
import WorkoutsContainer from './WorkoutsContainer'
// import Header from '../components/Header'
import Navbar from '../components/Navbar'


class MainContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <Box>

                {/* <Header/> */}
                <Navbar/>
                <RoutinesContainer routines={this.props.routines}/>
                {/* ROUTINES CONTAINER */}

                <WorkoutsContainer routines={this.props.workouts}/>
                {/* WORKOUTS CONTAINER */}

            </Box> );

    }
}
export default MainContainer;