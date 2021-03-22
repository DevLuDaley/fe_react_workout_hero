/* eslint-disable eqeqeq */
import React from 'react';
// import {Redirect} from 'react-router-dom'
import { Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Container from '@material-ui/core/Container';

// import { connect } from 'react-redux'
import UpdateRoutineForm from '../forms/UpdateRoutineForm'
import NewRoutineWorkoutForm from '../forms/NewRoutineWorkoutForm'

import ModalUpdateRoutineForm from '../forms/ModalUpdateRoutineForm'
import ModalAddRoutineWorkoutForm from '../forms/ModalAddRoutineWorkoutForm'
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
            {/* <Switch>
                <Link
                    to={'/routines'}>
                    <button
                        className='floating-nav-btns'> Return to Routines
                    </button>
                </Link>
            </Switch> */}
            {
                props.routines ?
                    <section>
                    {
                        props.routines.map(routine =>
                            routine.id == props.match.params.id ?
                                <section key={routine.id}>
                                        <h1 id="detail-page-routine-name">{routine.routine_name} </h1>

                                    <div id="block-update-routine-btns">
                                        {
                                            props.routines ?
                                                <ModalUpdateRoutineForm
                                                    routines={props.routines}
                                                    routineToUpdate={props.routines.find(
                                                    routine => routine.id == props.match.params.id)}
                                                />
                                                /* { <UpdateRoutineForm
                                                    routines={props.routines}
                                                    routineToUpdate={props.routines.find(
                                                    routine => routine.id == props.match.params.id)}
                                                /> }*/
                                            : null
                                        }

                                                {
                                                    <ModalAddRoutineWorkoutForm
                                                    routines={props.routines}
                                                    currentRoutine={props.routines.find(
                                                        routine => routine.id == props.match.params.id)}
                                                />}
                                                {/* {
                                                    <NewRoutineWorkoutForm
                                                    routines={props.routines}
                                                    currentRoutine={props.routines.find(
                                                        routine => routine.id == props.match.params.id)}
                                                />} */}

                                    </div>
                                    <h2 key={routine.id} id="detail-page-workouts-list-title">Exercise List</h2>
                                    <section id="routine-workout-cards">
                                        {
                                            routine.workouts.length > 0 ?
                                                routine.workouts.map(workout =>
                                                    <div key={workout.id} id="workoutlist-workout-info">
                                                        <section id="workout-info">
                                                        <section id="routine-detail-workout-name">
                                                                <p>{workout.workout_name}</p>
                                                        </section>

                                                            <p>Category: {workout.workout_type}</p>

                                                            <p>Distance: {workout.distance} </p>

                                                            <p>Duration: {workout.duration}</p>

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