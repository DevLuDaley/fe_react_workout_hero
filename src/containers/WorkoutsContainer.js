import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchWorkouts} from '../actions/fetchWorkouts'
// import WorkoutsPage from './WorkoutsPage';
import Workout from '../components/Workout'
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
        this.state = {workouts: []} //, routines: []}
    }
    componentDidMount(){
        // console.log('THIS.PROPS 1', this.props)
        // this.fetchWorkouts()
        this.props.fetchWorkouts()
    }
    render() {
        return (
            <Fragment>
        {console.log('🚀 ~ file: WorkoutsContainer.js ~ line 34 ~ WorkoutsContainer ~ componentDidMount ~ this.props', this.props)}
        {console.log('🚀 ~ file: WorkoutsContainer.js ~ line 35 ~ WorkoutsContainer ~ componentDidMount ~ this.STATE', this.state)}
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
{            console.log('🚀 ~ file: WorkoutsContainer.js ~ line 42 ~ render ~ window.location.pathname', window.location.pathname.replace('/workouts/',''))}
            {console.log('🚀 ~ file: WorkoutsContainer.js ~ line 42 ~ render ~ window.location.href', window.location.href)}

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
const mapStateToProps = state => {
    return(
        {
            workouts: state.workoutsReducer.workouts,
            // recipes: state.recipesReducer.recipes
        }
    )
}
 
export default connect(mapStateToProps, {fetchWorkouts})(WorkoutsContainer);