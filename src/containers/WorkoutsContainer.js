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
        console.log('🚀 ~ file: WorkoutsContainer.js ~ line 29 ~ WorkoutsContainer ~ constructor ~ this.routineString', this.routineString);
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
            {/* {console.log('🚀 ~ file: WorkoutsContainer.js ~ line 29 ~ WorkoutsContainer ~ constructor ~ this.props.routines', this.props.routines)} */}
            {/* {console.log('🚀 ~ file: WorkoutsContainer.js ~ line 30 ~ WorkoutsContainer ~ constructor ~ THIS.props WORKOUT CONTAINER', this.props)} */}
            
            {/* {console.log('🚀 ~ ~ this.currentUrl.replace', this.currentUrl.replace(`/routines/`,''))} */}
            {/* {console.log('🚀 ~ file: WorkoutsContainer.js ~ line 29 ~ WorkoutsContainer ~ constructor ~ this.routines', this.routines)} */}
            {/* {console.log('🚀 ~ file: WorkoutsContainer.js ~ line 26 ~ WorkoutsContainer ~ constructor ~ this.currentUrl', this.currentUrl)} */}
            {/* {console.log('🚀 ~ file: WorkoutsContainer.js ~ line 34 ~ WorkoutsContainer ~ componentDidMount ~ this.props', this.props)} */}
            {/* {console.log('🚀 ~ file: WorkoutsContainer.js ~ line 35 ~ WorkoutsContainer ~ componentDidMount ~ this.STATE', this.state)} */}
            {/* <p> Workouts Container</p> */}
            {/* <Router> */}
            <Switch>
            {/* <Route exact path='/' render={(routerProps) => <WorkoutsPage {...routerProps} workouts={this.props.workouts} />}/> */}
            {this.props.workouts ?

            <Route path='/workouts/:id' render={(routerProps) => <Workout {...routerProps} workouts={this.props.workouts} currentWorkout={this.props.workouts.find(workout => workout.id ==  window.location.pathname.replace('/workouts/','')) 
            }
              />}/>

    : null
              }
            <p> Hi Lu - rendered from the WorkoutsContainer </p>
{/* {            console.log('🚀 ~ file: WorkoutsContainer.js ~ line 42 ~ render ~ window.location.pathname', window.location.pathname.replace('/workouts/',''))}
            {console.log('🚀 ~ file: WorkoutsContainer.js ~ line 42 ~ render ~ window.location.href', window.location.href)} */}

            {/* <Route exact path='/' component={HomePage}/> */}

            {/* <Route exact path='/workouts' render={(routerProps) => <WorkoutsPage {...routerProps} workouts={this.props.workouts}/>}/> */}

            {/* <Route exact path='/workouts/new' render={(routerProps) => <NewWorkoutsContainer {...routerProps} workouts={this.props.workouts}/>}/> */}


            {/* <Route exact path='/workouty' render={(routerProps) => <UpdateWorkoutForm {...routerProps} workouts={this.props.workouts}
             />}/> */}

            {/* <Route exact path='/workouts/:id/edit' render={(routerProps) => <UpdateWorkoutPage {...routerProps} workouts={this.props.workouts}
             />}/> */}

            </Switch>
            {/* </Router> */}
        </Fragment> );


            // console.log('WorkoutsContainer -> render -> this.props.workouts', this.props.workouts);
    }
}
 
//! redux store
const mapStateToProps = (state, ownProps) => {
    let scrapedUrl = window.location.pathname.replace(`/routines/`,'')
    // console.log('🚀 ~ file: WorkoutsContainer.js ~ line 96 ~ rooString', scrapedUrl);
    let routineId = scrapedUrl[0]
    var lastChar = scrapedUrl[scrapedUrl.length -1]
    // console.log('🚀 ~ file: WorkoutsContainer.js ~ line 97 ~ rooId', routineId);
    console.log('🚀 ~ file: WorkoutsContainer.js ~ line 98 ~ scrapedUrl LAST', lastChar);
    console.log('🚀 ~ file: WorkoutsContainer.js ~ line 101 ~ ownProps', ownProps);
    console.log('🚀 ~ file: WorkoutsContainer.js ~ line 95 ~ mapStateToProps ~ state', state);
    // let roo = state.routinesReducer.routines.find(routine => routine.id == routineId)

    
    console.log('🚀 ~ file: WorkoutsContainer.js ~ line 108 ~ mapStateToProps ~ state.routinesReducer.routines', state.routinesReducer.routines);
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