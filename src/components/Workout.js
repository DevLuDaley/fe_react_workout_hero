import React, { Fragment, useState, useEffect } from 'react';
// import {Redirect} from 'react-router-dom'
import { Switch, Link } from 'react-router-dom'

// import { connect } from 'react-redux'
// import UpdateWorkoutForm from '../forms/UpdateWorkoutForm'
// import NewWorkoutWorkoutForm from '../forms/NewWorkoutWorkoutForm'

const Workout = (props) => {
console.log('🚀 ~ file: Workout.js ~ line 10 ~ Workout ~ props', props);
console.log('🚀 ~ file: Workout.js ~ line 11 ~ Workout ~ props', props);
// console.log('🚀 ~ file: Workout.js ~ line 10 ~ Workout ~ props-routine', props.current_routine);
// console.log('🚀 ~ file: Workout.js ~ line 10 ~ Workout ~ props-routine', props.routine);

    return(
    <Fragment>
                    <Switch>
                   
                   <Link to={'/routines'}> <button> Return to Routines </button> </Link>
                    </Switch>
                   {/* <Link to={'/workouts'}> <button> Return to Workouts </button> </Link> */}
                   
    
        </Fragment>
    )
}
    // const mapStateToProps = (state, ownProps) => {
    //     const { workouts1 } = state
    //     const { workouts } = ownProps
    //     return {
    //         workoutsArr: workouts
    //     }
    // }
    // export default connect(mapStateToProps)(Workout);
    export default Workout;