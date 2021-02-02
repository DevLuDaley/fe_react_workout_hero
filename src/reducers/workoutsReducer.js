// const intialState = {workouts: [], workout: {}}
const intialState = []

export default function workoutsReducer(state = intialState, action) {
// ;
// debugger;
    switch (action.type) {
        case 'FETCH_WORKOUTS':        // debugger;
            return {workouts: action.payload}

        case 'ADD_WORKOUT':
            let newWorkout = action.payload
            return {...state.workouts, workouts: state.workouts.concat(newWorkout)}

        case 'UPDATE_ROUTINE_WORKOUT':


                // const updateRoutineId = action.payload.routineId
                // const updateRoutine = state.routines.find(routine => routine.id == updateRoutineId)
                
                // ;
                
                // ;
                
                // const updateRoutineWorkouts = updateRoutine.workouts //.filter(w => w.id !== 0 )

                const updateWorkout = state.workouts.find(workout => workout.id == action.payload.workout.id)

                // const readyWorkout = 
                // let { id, workout_name, workout_type, distance, duration } = updateWorkout
                let incoming_workout = action.payload.workout

                updateWorkout.workout_name = incoming_workout.workout_name
                updateWorkout.workout_type = incoming_workout.workout_type
                updateWorkout.distance = incoming_workout.distance
                updateWorkout.duration = incoming_workout.duration
                // action.payload.workout.
                // debugger
                
                                // ;
                // const updateWorkoutId = action.payload.id
                // const updateRoutine = state.routines.find(routine => routine.id == updateWorkoutId)
                // const updatedWorkout = action.payload
                // const selectedWorkout = state.workouts.filter(workout => workout.id == updateWorkoutId)
                

                // debugger
                // ;
            return {...state,
                workouts: state.workouts.map(workout => workout.id == incoming_workout.id ? incoming_workout : workout)
            }
        case 'UPDATE_WORKOUT':
            const payloadId = action.payload.id
            const updatedWorkout = action.payload
            const selectedWorkout = state.workouts.filter(workout => workout.id == payloadId)
                        // ;
                        // ;
                        // )
                        // ;
                        // ;
            return {
                    workouts: state.workouts.map(workout => workout.id == payloadId ? action.payload : workout)
                        // ? workout = updatedWorkout : null 
            }
                // return Object.assign({}, state, {workouts: currentWorkouts, workout: currentWorkout})
        // case 'DELETE_WORKOUT':
        //     const filteredWorkouts = state.workouts.filter(workout => workout.id !== action.payload.workoutId);
        //     ;
        //     return {...state, workouts: filteredWorkouts}


        default:
            // return {...state}
            return state
    }

}