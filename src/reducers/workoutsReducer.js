// const intialState = {workouts: [], workout: {}}
const intialState = []

export default function workoutsReducer(state = intialState, action) {
// console.log('🚀 ~ file: workoutsReducer.js ~ line 4 ~ workoutsReducer ~ action', action);
// debugger;
    switch (action.type) {
        case 'FETCH_WORKOUTS':        // debugger;
            return {workouts: action.payload}

        case 'ADD_WORKOUT':
            // {workout: {…}, routineId: "10"}
            let newWorkout = action.payload[0]
            // console.log(`🚀 ~ file: workoutsReducer.js ~ line 13 ~ workoutsReducer ~ action.payload`, action.payload)
            // console.log(`🚀 ~ file: workoutsReducer.js ~ line 13 ~ workoutsReducer ~ action.payload[0]`, action.payload[0])
            return {...state.workouts, workouts: state.workouts.concat(newWorkout)}

        case 'ADD_ROUTINE_WORKOUT':
            let workoutToCreate = action.payload.workout
            // let routinePayload = action.payload[]
            // let updateWorkoutsLength = routinePayload.workouts.length
            // let workoutToCreate = routinePayload.workouts[updateWorkoutsLength - 1]
            // return {...state.workouts}
            // return {...state.workouts, workouts: state.workouts.concat(workoutToCreate)}
            return {...state.workouts, workouts: state.workouts.concat(workoutToCreate)}

        case 'UPDATE_WORKOUT':
            const payloadId = action.payload.id
            const updatedWorkout = action.payload
            const selectedWorkout = state.workouts.filter(workout => workout.id == payloadId)
                        // console.log('🚀 ~~line 17 ~ ~ UPDATED-WORKOUT', updatedWorkout);
                        // console.log('🚀 ~~ line 16 ~ ~ PAYLOAD-ID', payloadId);
                        // console.log('🚀 ~~ line 20 ~ ~  state.workouts.FILTER', state.workouts.filter(workout => workout.id == payloadId))
                        // console.log('🚀 ~ file: workoutsReducer.js ~ line 19 ~ workoutsReducer ~ selectedWorkout', selectedWorkout);
                        // console.log('STATE', state);
            return {
                    workouts: state.workouts.map(workout => workout.id == payloadId ? action.payload : workout)
                        // ? workout = updatedWorkout : null 
            }
                // return Object.assign({}, state, {workouts: currentWorkouts, workout: currentWorkout})
        // case 'DELETE_WORKOUT':
        //     const filteredWorkouts = state.workouts.filter(workout => workout.id !== action.payload.workoutId);
        //     console.log('🚀 ~ file: workoutsReducer.js ~ line 46 ~ workoutsReducer ~ filteredWorkouts', filteredWorkouts);
        //     return {...state, workouts: filteredWorkouts}


        default:
            // return {...state}
            return state
    }

}