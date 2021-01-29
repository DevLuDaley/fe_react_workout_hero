import React, { Fragment, useState, useEffect } from 'react';
// import {Redirect} from 'react-router-dom'
import { Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import { connect } from 'react-redux'
import UpdateWorkoutForm from '../forms/UpdateWorkoutForm'
import deleteRoutineWorkout from '../actions/deleteRoutineWorkout'
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
    const handleDeleteWorkout = (e) => {
        if (props.routines && props.workouts){
      let targetId = e.target.id
      console.log('🚀 ~ file: RoutinesList.js ~ line 41 ~ handleDeleteWorkout ~ targetId', targetId);

      let routineString = (/\d{1,5}/.exec(targetId))
      let workoutString = (/\d{1,5}$/.exec(targetId))
      // let workoutId = workoutString[0].toString()
      let workoutIdString = workoutString[0] //.toString()
      let workoutId = parseInt(workoutIdString) //.toString()
      let routineId = routineString[0].toString()
      
      // const routineId = (/\d{1,5}/.exec(e.target.id))
      console.log('🚀 ~ line 40 ~~ routineId', routineId);
      console.log('🚀 ~ line 41 ~~ workoutId', workoutId);
      // console.log('🚀 ~ file: RoutinesList.js ~ line 40 ~ handleDeleteWorkout ~ filteredWorkoutId', filteredWorkoutId);


      const clickedRoutine = props.routines.find(routine => routine.id == routineId)
      // const clickedWorkoutObject = props.workouts.find(workout => workout.id == workoutId)
      // const clickedWorkout = parseInt(clickedWorkoutObject[0])
      
      console.log('🚀 ~ file: RoutinesList.js ~ line 51 ~ handleDeleteWorkout ~ props.workouts', props.workouts);
      // console.log('🚀 ~ file: RoutinesList.js ~ line 42 ~ handleDeleteWorkout ~ clickedWorkoutObject', clickedWorkoutObject);
      console.log('🚀 ~ line 53 ~~ clickedRoutine', clickedRoutine);
      // console.log('🚀 ~ line 54 ~~ clickedWorkout', clickedWorkout);
      // console.log('🚀 ~ file: RoutinesList.js ~ line 53 ~ handleDeleteWorkout ~ props.workouts.FIND', props.workouts.find(workout => workout.id === workoutId));
      
      // let {id} = clickedRoutine
      // let {id: workout} = clickedWorkout
      // let {id} = clickedRoutine
      // let {id: workout} = clickedWorkout
      // console.log('🚀 ~ file: RoutinesList.js ~ line 50 ~ handleDeleteWorkout ~ id', id);

      // debugger
      const outgoingPayload = {
        "id": clickedRoutine.id,
        "workout_id_to_delete": workoutId
        // "workout_id_to_delete": clickedWorkout.id
      }
      // debugger
      props.deleteRoutineWorkout(outgoingPayload)
      console.log('🚀 ~ file: RoutinesList.js ~ line 59 ~ handleDeleteWorkout ~ outgoingPayload', outgoingPayload);

    }
    }

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
        <button onClick={handleDeleteWorkout} id={`routine-${routine.id}-btn-delete-workout-${workout.id}`}> delete </button>
    
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
    export default connect(null, {deleteRoutineWorkout}) (Workout);