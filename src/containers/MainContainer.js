import React, { Component, Fragment } from 'react';
// import {Route, Switch} from 'react-router-dom'

import { Container, Box } from '@material-ui/core';


import RoutinesContainer from './RoutinesContainer'
import WorkoutsContainer from './WorkoutsContainer'


class MainContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <Box>

                {/* <Navbar/> */}
                <RoutinesContainer routines={this.props.routines}/>
                {/* ROUTINES CONTAINER */}

                <WorkoutsContainer routines={this.props.workouts}/>
                {/* WORKOUTS CONTAINER */}

            </Box> );

    }
}
export default MainContainer;