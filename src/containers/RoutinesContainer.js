import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import { Box } from '@material-ui/core';

import {fetchRoutines} from '../actions/fetchRoutines'
import {fetchWorkouts} from '../actions/fetchWorkouts'
import RoutinesPage from './RoutinesPage';
import Routine from '../components/Routine'

class RoutinesContainer extends Component {
    constructor(props) {
        super(props);
        this.fetchRoutines = fetchRoutines
        this.fetchWorkouts = fetchWorkouts
        this.state = {
            routines: [],
            workouts: []
        }
    }
    componentDidMount(){
        this.props.fetchRoutines()
        this.props.fetchWorkouts()
    }
    render() {
        return (
            <Box>
                <Switch>
                    <Route
                        exact path='/'
                        render={(routerProps) =>
                            <RoutinesPage {...routerProps}
                        routines={this.props.routines}
                        workouts={this.props.workouts}
                    />}/>

                    <Route
                        exact path='/routines/:id'
                        render={(routerProps) =>
                            <Routine {...routerProps}
                        routines={this.props.routines}
                        workouts={this.props.workouts}
                    />}/>

                    <Route
                    exact path='/routines'
                    render={(routerProps) =>
                        <RoutinesPage {...routerProps}
                    routines={this.props.routines }
                    workouts={this.props.workouts}
                    />}/>

                </Switch>
        </Box> );
    }
}

//! redux store
const mapStateToProps = state => {
    return(
        {
            routines: state.routinesReducer.routines,
            workouts: state.workoutsReducer.workouts
        }
    )
}

export default connect(mapStateToProps, {fetchRoutines, fetchWorkouts})(RoutinesContainer);