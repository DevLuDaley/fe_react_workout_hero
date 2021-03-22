/* eslint-disable eqeqeq */
import React from 'react';
// import {Redirect} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { connect } from 'react-redux'
import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import ModalUpdateWorkoutForm from '../forms/ModalUpdateWorkoutForm'
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
      <Container maxWidth="md">
          <Box id="page-workout-detail">

            <section className="workout-page-floating-links">

              {/* <Link to={'/routines'}> <button className='floating-nav-btns'> Routines </button> </Link> */}
                  
                       <Link to={'/routines/' + routineId}> <button className='floating-nav-btns'>{routine.routine_name}</button> </Link>
            </section>
          

          
          <div id="workout-card">
            <div  key={workout.id}>
              <section id="workout-info-block">
                <section id="workout-detail-workout-name">
                  {workout.workout_name}
                
                </section>
                    <ul id="workout-info" style={{"textDecoration":"none"}}>
                      <li>id: {workout.id}</li>
                  
                      <li>category: {workout.workout_type}</li>
                  
                      <li>distance: {workout.distance}</li>
                  
                      <li>duration: {workout.duration}</li>
                    </ul>
                
              {/* </section> */}
              {/* </div> */}
    <section            id="wrapper-btn-delete-workout">
      <button onClick={handleDeleteWorkout} 
      id={`routine-${routine.id}-btn-delete-workout-${workout.id}`} className='delete-btns delete-workout'> 
      Delete Exercise 
      </button>
    </section>
    </section>
          <Box>
            <ModalUpdateWorkoutForm 
                // detail={workout} 
                // routine={routine} 
                // workout={workout}
                />
          </Box>  
    </div>
                          </div>
                    </Box>
        </Container>
    )
}

    export default connect(null, {deleteRoutineWorkout}) (Workout);