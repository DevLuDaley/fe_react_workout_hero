import React, { Fragment, useState, useEffect } from 'react';
// import {Redirect} from 'react-router-dom'
import { Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// import { connect } from 'react-redux'
import UpdateRoutineForm from '../forms/UpdateRoutineForm'
import NewRoutineWorkoutForm from '../forms/NewRoutineWorkoutForm'
import deleteRoutineWorkout from '../actions/deleteRoutineWorkout'

const Routine = (props) => {
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
        // "workout_id_to_delete": clickedWorkout.id
      }
      
      props.deleteRoutineWorkout(outgoingPayload)
        }
    }

    return(
    <Container maxWidth="md">

        <section className="routine-detail-page">
            <Switch>
                <Link 
                    to={'/routines'}>
                    <button 
                        className='floating-nav-btns'> Return to Routines 
                    </button>
                </Link>
            </Switch>
            {
                props.routines ?
                    <section>
                    {
                        props.routines.map(routine =>
                            routine.id == props.match.params.id ?
                                <section key={routine.id}>
                                    <br></br>
                                        <h1>{routine.routine_name} </h1>
                                    <br></br>
                                        <h1> Update Routine </h1>
                                    {
                                        props.routines ?
                                            <UpdateRoutineForm 
                                                routines={props.routines}
                                                routineToUpdate={props.routines.find(
                                                routine => routine.id == props.match.params.id)}
                                            />
                                        : null
                                    }
                                        <h1> Add a new Workout</h1>
                                            {<NewRoutineWorkoutForm
                                                routines={props.routines}
                                                currentRoutine={props.routines.find(
                                                    routine => routine.id == props.match.params.id)}
                                            />}

                                    <h3 key={routine.id}>Workouts List: </h3>
                                    <section id="routine-workout-cards">
                                        {
                                            routine.workouts.length > 0 ?
                                                routine.workouts.map(workout =>
                                                    <div key={workout.id} id="workoutlist-workout-info">
                                                        <section id="workout-info">
                                                        <section id="routine-detail-workout-name">
                                                                <p>{workout.workout_name}</p>
                                                        </section>
                                                            <br></br>
                                                            <p>Category: {workout.workout_type}</p>
                                                            <br></br>
                                                            <p>Distance: {workout.distance} </p>
                                                            <br></br>
                                                            <p>Duration: {workout.duration}</p>
                                                            <br></br>
                                                            <br></br>
                                                        <section id="wrapper-btns-routine-workout">
                                                            <Link
                                                                key={"routine-url-key-" + routine.id}
                                                                to={`${window.location.pathname}/workouts/${workout.id}`}>
                                                                    <button
                                                                        className="edit-btns"> edit
                                                                    </button>
                                                            </Link>
                                                            <button 
                                                                className="delete-btns routine-detail-page-btn" 
                                                                onClick={handleDeleteWorkout} id={`routine-${routine.id}-btn-delete-workout-${workout.id}`}> delete 
                                                            </button>
                                                        </section>

                                                        </section>
                                                    </div>
                                                    ) 
                                            : <p> No Workouts Created Yet </p>
                                        }
                                    </section>
                                </section>
                            : null )
                    }

                    </section>
                :'no routine here bub'
            }

        </section>
    </Container>
    )
}

    export default connect(null, {deleteRoutineWorkout}) (Routine);