import React, { Fragment, useState, useEffect } from 'react';
// import {Redirect} from 'react-router-dom'
import { Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import { connect } from 'react-redux'

import { TextField, MenuItem, Button, Container, FormControl } from '@material-ui/core';



import UpdateWorkoutForm from '../forms/UpdateWorkoutForm'
import deleteRoutineWorkout from '../actions/deleteRoutineWorkout'
// import NewWorkoutWorkoutForm from '../forms/NewWorkoutWorkoutForm'

const Workout = (props) => {

const currentPath = window.location.pathname
const routineId = (/\d{1,5}/.exec(currentPath))[0]
const workoutId = (/\d{1,5}$/.exec(currentPath))[0]

const workout = props.workouts.find(workout => workout.id == workoutId)
const routine = props.routines.find(routine => routine.id == routineId)

    const handleDeleteWorkout = (e) => {
        if (props.routines && props.workouts){
      let targetId = e.target.id

      let routineString = (/\d{1,5}/.exec(targetId))
      let workoutString = (/\d{1,5}$/.exec(targetId))

      let workoutIdString = workoutString[0] //.toString()
      let workoutId = parseInt(workoutIdString) //.toString()
      let routineId = routineString[0].toString()

      const clickedRoutine = props.routines.find(routine => routine.id == routineId)
      const outgoingPayload = {
        "id": clickedRoutine.id,
        "workout_id_to_delete": workoutId
      }
      props.deleteRoutineWorkout(outgoingPayload)

    }
    }

    return(
      <Container maxWidth="lg">
          <section id="page-workout-detail">

            <section className="workout-page-floating-links">

              <Link to={'/routines'}> <button className='floating-nav-btns'> Routines </button> </Link>
                  <br/>
                       <Link to={'/routines/' + routineId}> <button className='floating-nav-btns'> {routine.routine_name} Routine Page </button> </Link>
            </section>
   <br/>

      <UpdateWorkoutForm detail={workout}/>
  <br/>
                     <div id="workout-card">
                        <div  key={workout.id}>
                              <section id="workout-info">
                                <section id="workout-detail-workout-name">
                                  {workout.workout_name}
                                  <br></br>
                                </section>
                                id: {workout.id}
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
                              </section>
                          </div>
  <section id="wrapper-btn-delete-workout"><button onClick={handleDeleteWorkout} id={`routine-${routine.id}-btn-delete-workout-${workout.id}`} className='delete-btns delete-workout'> delete workout </button></section>
                          </div>
                    </section>
        </Container>
    )
}

    export default connect(null, {deleteRoutineWorkout}) (Workout);