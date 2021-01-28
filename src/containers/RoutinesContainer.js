import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchRoutines} from '../actions/fetchRoutines'
import {fetchWorkouts} from '../actions/fetchWorkouts'
import RoutinesPage from './RoutinesPage';
import Routine from '../components/Routine'
// import Workout from '../components/Workout'
// import UpdateRoutinePage from '../components/UpdateRoutinePage'
// import UpdateRoutineForm from '../forms/UpdateRoutineForm'
// import HomePage from '../components/HomePage'
// import Home from '../components/Home'

// import {fetchRoutines} from '../actions/fetchRoutines'
// import NewRoutineForm from '../components/NewRoutineForm'
// import RoutinesList from '../components/RoutinesList'
// import NewRoutinesContainer from '../containers/NewRoutinesContainer'


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
        // console.log('THIS.PROPS 1', this.props)
        // this.fetchRoutines()
        this.props.fetchRoutines()
        this.props.fetchWorkouts()
    }
    render() {
        return (
            <Fragment>
        {console.log('🚀 ~ file: RoutinesContainer.js ~ line 46 ~ RoutinesContainer ~ componentDidMount ~ this.props', this.props)}
        {console.log('🚀 ~ file: RoutinesContainer.js ~ line 46 ~ RoutinesContainer ~ componentDidMount ~ this.state', this.state)}
            {/* <p> Routines Container</p> */}
            {/* <Router> */}
            <Switch>
            <Route exact path='/' render={(routerProps) => <RoutinesPage {...routerProps} routines={this.props.routines} workouts={this.props.workouts} />}/>

            <Route exact path='/routines/:id' render={(routerProps) => <Routine {...routerProps} routines={this.props.routines} workouts={this.props.workouts} 
             />}/>

            {/* <Route path='/workouts/:id' render={(routerProps) => <Workout {...routerProps} routines={this.props.routines} workouts={this.props.workouts}
             />}/> */}

            {/* <Route exact path='/' component={HomePage}/> */}

            <Route exact path='/routines' render={(routerProps) => <RoutinesPage {...routerProps} routines={this.props.routines } workouts={this.props.workouts} />}/>

            {/* <Route exact path='/routines/new' render={(routerProps) => <NewRoutinesContainer {...routerProps} routines={this.props.routines}/>}/> */}


            {/* <Route exact path='/routiney' render={(routerProps) => <UpdateRoutineForm {...routerProps} routines={this.props.routines}
             />}/> */}

            {/* <Route exact path='/routines/:id/edit' render={(routerProps) => <UpdateRoutinePage {...routerProps} routines={this.props.routines}
             />}/> */}

            </Switch>
            {/* </Router> */}
        </Fragment> );


            // console.log('RoutinesContainer -> render -> this.props.routines', this.props.routines);
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