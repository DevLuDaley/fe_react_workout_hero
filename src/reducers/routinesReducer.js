// const intialState = {routines: [], routine: {}}
const intialState = []

export default function routinesReducer(state = intialState, action) {
// console.log('🚀 ~ file: routinesReducer.js ~ line 4 ~ routinesReducer ~ action', action);
// debugger;
    switch (action.type) {
        case 'FETCH_ROUTINES':        // debugger;
            return {routines: action.payload}

        case 'ADD_ROUTINE':
            let newRoutine = action.payload
            return {...state.routines, routines: state.routines.concat(newRoutine)}

        case 'UPDATE_ROUTINE':
            const payloadId = action.payload.id
            const updatedRoutine = action.payload
            const selectedRoutine = state.routines.filter(routine => 
                        routine.id == payloadId)
                        
                        console.log('🚀 ~~line 17 ~ ~ UPDATED-ROUTINE', updatedRoutine);
                        console.log('🚀 ~~ line 16 ~ ~ PAYLOAD-ID', payloadId);
                        console.log('🚀 ~~ line 20 ~ ~  state.routines.FILTER', state.routines.filter(routine => routine.id == payloadId))
                        console.log('🚀 ~ file: routinesReducer.js ~ line 19 ~ routinesReducer ~ selectedRoutine', selectedRoutine);
                        console.log('STATE', state);
            return {
                    routines: state.routines.map(routine => routine.id == payloadId ? action.payload : routine)
                    // routines: state.routines.map(routine => routine.id == payloadId ? action.payload : routine)
                    // routines: updatedRoutine
                    // routines: state.routines,
                    // routine: 
                    // updatedRoutine
                    // ,
                    // routine: state.routines.map(routine => routine.id == payloadId ? action.payload : routine)
                    // routines: state.routines,
                    // routine: updatedRoutine
                    // routine: state.routines.filter(routine => 
                    //     routine.id == payloadId ? 
                    //     routine = updatedRoutine : null
                        // ? routine = updatedRoutine : null 
                    // )
            }
                // return Object.assign({}, state, {routines: currentRoutines, routine: currentRoutine})
        case 'DELETE_ROUTINE':
            const filteredRoutines = state.routines.filter(routine => routine.id !== action.payload.routineId);
            return {...state, routines: filteredRoutines}

        case 'ADD_ROUTINE_WORKOUT': 
            
            let routineWorkouts =  state.routines.map(routine => {
                if (routine.id == action.payload.id) {
                    console.log('🚀 ~ file: routinesReducer.js ~ line 52 ~ routinesReducer ~ action.payload', action.payload);
                    return action.payload
                } else {
                    return routine
                }
            }
            )
            console.log('🚀 ~ file: routinesReducer.js ~ line 57 ~ routinesReducer ~ routineWorkouts', routineWorkouts);
            return {...state, routines: routineWorkouts}

        default:
            // return {...state}
            return state
    }

}