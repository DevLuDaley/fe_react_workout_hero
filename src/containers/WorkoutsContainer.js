import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchWorkouts} from '../actions/fetchWorkouts'
import {fetchRoutines} from '../actions/fetchRoutines'
// import WorkoutsPage from './WorkoutsPage';
import Workout from '../components/Workout'
import Routine from '../components/Routine'
// import Workout from '../components/Workout'
// import UpdateWorkoutPage from '../components/UpdateWorkoutPage'
// import UpdateWorkoutForm from '../forms/UpdateWorkoutForm'
// import HomePage from '../components/HomePage'
// import Home from '../components/Home'

// import {fetchWorkouts} from '../actions/fetchWorkouts'
// import NewWorkoutForm from '../components/NewWorkoutForm'
// import WorkoutsList from '../components/WorkoutsList'
// import NewWorkoutsContainer from '../containers/NewWorkoutsContainer'


class WorkoutsContainer extends Component {
    constructor(props) {
        super(props);
        this.fetchWorkouts = fetchWorkouts
        this.fetchRoutines = fetchRoutines
        this.currentUrl = window.location.pathname
        this.currentUrlString = this.currentUrl.replace(`/routines/`,'')
        this.routineId = this.currentUrlString[0]
        // console.log('🚀 ~ file: WorkoutsContainer.js ~ line 29 ~ WorkoutsContainer ~ constructor ~ this.routineString', this.routineString);
        // console.log('🚀 ~ file: WorkoutsContainer.js ~ line 29 ~ WorkoutsContainer ~ constructor ~ this.routineString', this.routineString[0]);
        // this.routines = this.props.routines
        
        this.state = {workouts: [] , routines: []}
        
        // this.routine = this.props.routines.find(routine => routine.id == this.routineId)
        
        // parseInt(this.currentUrl.replace('/workouts/',''))}
    }
    componentDidMount(){
        // console.log('THIS.PROPS 1', this.props)
        // this.fetchWorkouts()
        this.props.fetchWorkouts();
        this.props.fetchRoutines()
        // this.routine = this.props.routines.find(routine => routine.id == this.routineId)

    }
    render() {
        return (
            <Fragment>
            <Switch>
            {/* <Route exact path='/' render={(routerProps) => <WorkoutsPage {...routerProps} workouts={this.props.workouts} />}/> */}
            {this.props.workouts ?

            <Route path='/routines/:id/workouts/:id' render={(routerProps) => 
                <Workout {...routerProps} 
                    workouts={this.props.workouts} 
                    routines={this.props.routines} 
                        currentWorkout={this.props.workouts.find(workout => workout.id ==  window.location.pathname.replace('/routines/' + this.routineId + '/workouts/',''))} />}
            />
            : null
              }

            {/* { this.props.workouts ? console.log('🚀 ~ file: WorkoutsContainer.js ~ line 66 ~ render ~ this.props.workouts.find', window.location.pathname.replace('/routines/' + this.routineId + '/workouts/',''))
            :
            null            
            } */}
{/* {            console.log('🚀 ~ file: WorkoutsContainer.js ~ line 42 ~ render ~ window.location.pathname', window.location.pathname.replace('/workouts/',''))}
            {console.log('🚀 ~ file: WorkoutsContainer.js ~ line 42 ~ render ~ window.location.href', window.location.href)} */}

            </Switch>
            {/* </Router> */}
        </Fragment> );


            // console.log('WorkoutsContainer -> render -> this.props.workouts', this.props.workouts);
    }
}
 
//! redux store
const mapStateToProps = (state, ownProps) => {
    // let scrapedUrl = window.location.pathname.replace(`/routines/`,'')
    // console.log('🚀 ~ file: WorkoutsContainer.js ~ line 96 ~ rooString', scrapedUrl);
    // let routineId = scrapedUrl[0]
    // var lastChar = scrapedUrl[scrapedUrl.length -1]

    return(
        {
            workouts: state.workoutsReducer.workouts,
            routines: state.routinesReducer.routines
            // ,
            // routine: ownProps.routines.find(routine => routine.id == routineId)

            // recipes: state.recipesReducer.recipes
        }
    )
}
 
export default connect(mapStateToProps, {fetchWorkouts, fetchRoutines})(WorkoutsContainer);