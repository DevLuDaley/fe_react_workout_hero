import React, { Fragment, useState, useEffect } from 'react';
// import {Redirect} from 'react-router-dom'
import { Switch, Link } from 'react-router-dom'

// import { connect } from 'react-redux'
import UpdateWorkoutForm from '../forms/UpdateWorkoutForm'
// import NewWorkoutWorkoutForm from '../forms/NewWorkoutWorkoutForm'

const Workout = (props) => {
console.log('🚀 ~ file: Workout.js ~ line 10 ~ Workout ~ WORKOUT props', props);

const currentPath = window.location.pathname
const routineId = (/\d{1,5}/.exec(currentPath))[0]
const workoutId = (/\d{1,5}$/.exec(currentPath))[0]


// console.log('🚀 ~ file: Workout.js ~ line 12 ~ Workout ~ currentUrl', currentPath); // ? /routines/2/workouts/15
console.log('🚀 ~ file: Workout.js ~ line 13 ~ Workout ~ routineId', routineId);
console.log('🚀 ~ file: Workout.js ~ line 15 ~ Workout ~ workoutId', workoutId);

// const regExNums = (/\/\d\d/.exec(currentPath))[0]
// console.log('🚀 ~ file: Workout.js ~ line 13 ~ Workout ~ regExNums', regExNums);

const workout = props.workouts.find(workout => workout.id == workoutId)
const routine = props.routines.find(routine => routine.id == routineId)
// const {currentWorkout : workout} = props
// const work = props.workouts.find(workout => workout.id ==  window.location.pathname.replace('/routines/' + this.routineId + '/workouts/',''))
// console.log('🚀 ~ file: Workout.js ~ line 13 ~ Workout ~ work', work);
// console.log('🚀 ~ file: Workout.js ~ line 11 ~ Workout ~ props', props);
// console.log('🚀 ~ file: Workout.js ~ line 10 ~ Workout ~ props-routine', props.current_routine);
// console.log('🚀 ~ file: Workout.js ~ line 10 ~ Workout ~ props-routine', props.routine);

    return(
    <Fragment>
    {/* {props.currentWorkout} */}
                    {/* <Switch> */}
                   
                   <Link to={'/routines'}> <button> Routines </button> </Link>

                   <Link to={'/routines/' + routineId}> <button> {routine.routine_name} Routine Page </button> </Link>
                    {/* </Switch> */}
                   {/* <Link to={'/workouts'}> <button> Return to Workouts </button> </Link> */}
                   
                   <div>
                    id: {workout.id}
                      <div key={workout.id}>
                            {/* id: {workout.id}
                            <br></br> */}
                            name: {workout.workout_name}
                            <br></br>
                            category: {workout.workout_type}
                            <br></br>
                            distance: {workout.distance} 
                            {/* ? workout.distance + " miles" : "please enter distance"}  */}
                            <br></br>
                            duration: {workout.duration}
                             {/* ? workout.duration + " minutes" : "please enter duration"} */}
                            <br></br>
                            <br></br>
                        </div>
                        </div>

    <UpdateWorkoutForm detail={workout}/>
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