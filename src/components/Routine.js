import React, { Fragment, useState, useEffect } from 'react';
// import {Redirect} from 'react-router-dom'
import { Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import { connect } from 'react-redux'
import UpdateRoutineForm from '../forms/UpdateRoutineForm'
import NewRoutineWorkoutForm from '../forms/NewRoutineWorkoutForm'
import deleteRoutineWorkout from '../actions/deleteRoutineWorkout'

const Routine = (props) => {
    const handleDeleteWorkout = (e) => {
        // console.log("PROPS", props);

        if (props.routines && props.workouts){
    let targetId = e.target.id
    //   console.log('🚀 ~ file: RoutinesList.js ~ line 41 ~ handleDeleteWorkout ~ targetId', targetId);

      let routineString = (/\d{1,5}/.exec(targetId))
      let workoutString = (/\d{1,5}$/.exec(targetId))
      // let workoutId = workoutString[0].toString()
      let workoutIdString = workoutString[0] //.toString()
      let workoutId = parseInt(workoutIdString) //.toString()
      let routineId = routineString[0].toString()

      const clickedRoutine = props.routines.find(routine => routine.id == routineId)
      const outgoingPayload = {
        "id": clickedRoutine.id,
        "workout_id_to_delete": workoutId
        // "workout_id_to_delete": clickedWorkout.id
      }
      // debugger
      props.deleteRoutineWorkout(outgoingPayload)
    //   console.log('🚀 ~ file: RoutinesList.js ~ line 59 ~ handleDeleteWorkout ~ outgoingPayload', outgoingPayload);
        }
    }

    return(
    <Fragment>
                    <Switch>
                   <Link to={'/routines'}> <button> Return to Routines </button> </Link>
                    </Switch>
    {
        props.routines ?
        <section>
        {/* Routine Info: */}
        {
            props.routines.map(routine => 
                routine.id == props.match.params.id ? 
        <section key={routine.id}>
            <br></br>
                <h1>{routine.routine_name} </h1>
            <br></br>
            {/* id: {routine.id} */}

            {/* <p>{filtered.name}</p> */}
    {
        props.routines ?
    <UpdateRoutineForm routines={props.routines} 
            routineToUpdate={props.routines.find(routine => 
         routine.id == props.match.params.id)}
    />
    : null 
    }
            <br></br>
            <br></br>
            <h1> Add a new Workout</h1>
                {<NewRoutineWorkoutForm 
                    routines={props.routines}
                    currentRoutine={props.routines.find(
                        routine => routine.id == props.match.params.id)}
                />}
            <br></br>
            <br></br>
                <h3 key={routine.id}>Workouts List: </h3> 
                { 
                    
                routine.workouts.length > 0 ?

                    routine.workouts.map(workout =>
                        <div key={workout.id}>
                            {/* id: {workout.id}
                            <br></br> */}
                             <Link key={"routine-url-key-" + routine.id} to={`${window.location.pathname}/workouts/${workout.id}`}>
                                 <button> edit </button>
                                 </Link>
                            name: {workout.workout_name}
                                  <button onClick={handleDeleteWorkout} id={`routine-${routine.id}-btn-delete-workout-${workout.id}`}> delete </button>
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
                    ) : <p> No Workouts Created Yet </p>
                    }
                </section>
                : null )
        }
        
        </section>
        :
        'no routine here bub'
    }
    
        </Fragment>
    )
}
    // const mapStateToProps = (state, ownProps) => {
    //     const { routines1 } = state
    //     const { routines } = ownProps
    //     return {
    //         routinesArr: routines
    //     }
    // }
    // export default connect(mapStateToProps)(Routine);
    // export default Routine;
    export default connect(null, {deleteRoutineWorkout}) (Routine);