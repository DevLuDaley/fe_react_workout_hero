import React, { Fragment, useState, useEffect } from 'react';
// import {Redirect} from 'react-router-dom'
import { Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import { connect } from 'react-redux'
import UpdateWorkoutForm from '../forms/UpdateWorkoutForm'
import deleteRoutineWorkout from '../actions/deleteRoutineWorkout'
// import NewWorkoutWorkoutForm from '../forms/NewWorkoutWorkoutForm'

const Workout = (props) => {

const currentPath = window.location.pathname
const routineId = (/\d{1,5}/.exec(currentPath))[0]
const workoutId = (/\d{1,5}$/.exec(currentPath))[0]


// ; // ? /routines/2/workouts/15

// const regExNums = (/\/\d\d/.exec(currentPath))[0]
// ;

const workout = props.workouts.find(workout => workout.id == workoutId)
const routine = props.routines.find(routine => routine.id == routineId)
// const {currentWorkout : workout} = props
// const work = props.workouts.find(workout => workout.id ==  window.location.pathname.replace('/routines/' + this.routineId + '/workouts/',''))
// ;
// ;
// ;
// ;


    const handleDeleteWorkout = (e) => {
        if (props.routines && props.workouts){
      let targetId = e.target.id

      let routineString = (/\d{1,5}/.exec(targetId))
      let workoutString = (/\d{1,5}$/.exec(targetId))
      // let workoutId = workoutString[0].toString()
      let workoutIdString = workoutString[0] //.toString()
      let workoutId = parseInt(workoutIdString) //.toString()
      let routineId = routineString[0].toString()
      
      // const routineId = (/\d{1,5}/.exec(e.target.id))
      // ;


      const clickedRoutine = props.routines.find(routine => routine.id == routineId)
      // const clickedWorkoutObject = props.workouts.find(workout => workout.id == workoutId)
      // const clickedWorkout = parseInt(clickedWorkoutObject[0])
      
      // ;
      // ;
      // );
      
      // let {id} = clickedRoutine
      // let {id: workout} = clickedWorkout
      // let {id} = clickedRoutine
      // let {id: workout} = clickedWorkout
      // ;

      // debugger
      const outgoingPayload = {
        "id": clickedRoutine.id,
        "workout_id_to_delete": workoutId
        // "workout_id_to_delete": clickedWorkout.id
      }
      // debugger
      props.deleteRoutineWorkout(outgoingPayload)

    }
    }

    //      const [routine, setRoutine] = useState() //;
    //  const [workout, setWorkout] = useState() //;

    //   setRoutine({
    //       routine: props.routines.find(routine => routine.id == routineId)
    //   })

    //   setWorkout({
    //       workout: props.workouts.find(workout => workout.id == workoutId)
    //   })

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
                            <br></br>
                            <br></br>
        <button onClick={handleDeleteWorkout} style={{color: "red"}} id={`routine-${routine.id}-btn-delete-workout-${workout.id}`}> delete {workout.workout_name} </button>
    
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