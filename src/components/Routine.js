import React, { Fragment, useState, useEffect } from 'react';
// import {Redirect} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

// import { connect } from 'react-redux'
import UpdateRoutineForm from '../forms/UpdateRoutineForm'
import NewRoutineWorkoutForm from '../forms/NewRoutineWorkoutForm'
import deleteRoutineWorkout from '../actions/deleteRoutineWorkout'
// import RoutineWorkout from '../RoutineWorkout'

const Routine = (props) => {
console.log('🚀 ~ file: Routine.js ~ line 13 ~ Routine ~ props', props);

//     componentDidUpdate(prevProps, prevState) {
//   if (prevState.pokemons !== this.state.pokemons) {
//     console.log('pokemons state has changed.')
//   }
// }
    const routines = useSelector(state => state.routinesReducer.routines)
    var stateWorkouts = useSelector(state => state.workoutsReducer.workouts)
    console.log('🚀 ~ file: Routine.js ~ line 16 ~ Routine ~ stateWorkouts', stateWorkouts);

    useEffect(() => {
        // if (prevObj != currObj)
        if (stateWorkouts) {
        // console.log('🚀 ~ file: Routine.js ~ line 25 ~ useEffect ~ currObj', currObj);
        // console.log('🚀 ~ file: Routine.js ~ line 25 ~ useEffect ~ prevObj', prevObj);
        return routines && stateWorkouts
        }
        // console.log("Behavior when the value of 'stateWorkouts' changes.")
    // }, [stateWorkouts]);
    }, [routines, stateWorkouts]);
    // console.log(prevObj, currObj)

    // useEffect((prevObj, currObj) => {
    //     if (prevObj != currObj)
    //     // console.log("Behavior when the value of 'stateWorkouts' changes.");
    //     return currObj
    // }, [routines]);


    if(routines && stateWorkouts) {
        const currentPath = window.location.pathname
        console.log('🚀 ~ file: Routine.js ~ line 19 ~ Routine ~ currentPath', currentPath);
        var routineId = (/\d{1,5}/.exec(currentPath))[0]
        const routine = routines.find(r => r.id == routineId)
    }
         const handleDeleteWorkout = (e) => {
        // console.log("PROPS", props);

        if (routines && stateWorkouts){
        let targetId = e.target.id
        //   console.log('🚀 ~ file: RoutinesList.js ~ line 41 ~ handleDeleteWorkout ~ targetId', targetId);

        let routineString = (/\d{1,5}/.exec(targetId))
        let workoutString = (/\d{1,5}$/.exec(targetId))
        // let workoutId = workoutString[0].toString()
        let workoutIdString = workoutString[0] //.toString()
        let workoutId = parseInt(workoutIdString) //.toString()
        let routineId = routineString[0].toString()

        // const routineId = (/\d{1,5}/.exec(e.target.id))
        //   console.log('🚀 ~ line 40 ~~ routineId', routineId);
        //   console.log('🚀 ~ line 41 ~~ workoutId', workoutId);
        // console.log('🚀 ~ file: RoutinesList.js ~ line 40 ~ handleDeleteWorkout ~ filteredWorkoutId', filteredWorkoutId);


        const clickedRoutine = routines.find(routine => routine.id == routineId)
        // debugger
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


    // stateWorkouts.filter()
var workoutMatch = stateWorkouts

    return(
    <Fragment>
        <Link to='/routines'> 
            <button> 
                Return to Routines 
            </button> 
        </Link>
    {
        routines && stateWorkouts ?
            <section>
            {/* Routine Info: */}
            {
                routines.map(routine =>
                routine.id == (/\d{1,5}/.exec(window.location.pathname))[0] ?
        <section key={routine.id}>
            <br></br>
                <h1>{routine.routine_name} </h1>
            <br></br>
            {/* id: {routine.id} */}

            {/* <p>{filtered.name}</p> */}
    {
        routines ?
    <UpdateRoutineForm routines={routines}
            routineToUpdate={routines.find(routine =>
         routine.id == (/\d{1,5}/.exec(window.location.pathname))[0])}
    />
    : null
    }
            <br></br>
            <br></br>
            <h1> Add a new Workout</h1>
 <div>
                    {<NewRoutineWorkoutForm
                        routines={routines}
                        // currentRoutine={props.routines.find(
                            // routine => routine.id == props.match.params.id)}
                    />}
     
 </div>           <br></br>
            <br></br>
                <h3 key={routine.id}>Workouts List: </h3>
                {


                    routine.workouts.map(workout =>
                       workout.id != workoutMatch ?
                       
                        <div key={workout.id}>

                             <Link to={`${window.location.pathname}/workouts/${workout.id}`} key={"routine-url-key-" + routine.id} >
                                 <button> edit </button>
                                 </Link>
                            name: {workout.workout_name}
                                  <button onClick={handleDeleteWorkout} id={`routine-${routine.id}-btn-delete-workout-${workout.id}`}> delete </button>
                            <br></br>
                            category: {workout.workout_type}
                            <br></br>
                            distance: {workout.distance}
                            <br></br>
                            duration: {workout.duration}
                            <br></br>
                            <br></br>
                        </div>
                 : null
                    ) 
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
    // export default connect(mapStateToProps, {deleteRoutineWorkout}) (Routine);