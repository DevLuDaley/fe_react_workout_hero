const intialState = {routines: []}

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
            return {routines: state.routines.map(routine => routine.id == payloadId ? action.payload : routine)}
                // return Object.assign({}, state, {routines: currentRoutines, routine: currentRoutine})
        case 'DELETE_ROUTINE':
            const filteredRoutines = state.routines.filter(routine => routine.id !== action.payload.routineId);
            return {...state, routines: filteredRoutines}

        // case 'ADD_ROUTINE_WORKOUT': 
            
        //     let routineRecipes =  state.routines.map(routine => {
        //         if (routine.id == action.payload.id) {
        //             return action.payload
        //             } else {
        //                 return routine
        //             }
        //           }
        //         )
        //     return {...state, routines: routineRecipes}

        default:
            // return {...state}
            return state
    }

}