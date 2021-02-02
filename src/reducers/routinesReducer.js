// const intialState = {routines: [], routine: {}}
const intialState = [{"routines": []
// const intialState = [{"routines": [{"routine":{workouts:[]}}]
, "workouts": []
}]
// const intialState = [{"routines": [], "workouts": []}]

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
            const selectedRoutine = state.routines.filter(routine => routine.id == payloadId)
                        
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
            // console.log('🚀 ~ file: routinesReducer.js ~ line 57 ~ routinesReducer ~ routineWorkouts', routineWorkouts);
            return {...state, routines: routineWorkouts}

            case 'UPDATE_ROUTINE_WORKOUT':
                console.log('🚀 ~ file: routinesReducer.js ~ line 74 ~ routinesReducer ~ state1', state);

                console.log('🚀 ~ file: routinesReducer.js ~ line 67 ~ routinesReducer ~ action.payload', action.payload);

                const updateRoutineId = action.payload.routineId
                const updateRoutine = state.routines.find(routine => routine.id == updateRoutineId)
                
                console.log('🚀 ~ file: routinesReducer.js ~ line 64 ~ routinesReducer ~ updateRoutineId', updateRoutineId);
                
                console.log('🚀 ~ file: routinesReducer.js ~ line 67 ~ routinesReducer ~ updateRoutine', updateRoutine);
                
                const updateRoutineWorkouts = updateRoutine.workouts //.filter(w => w.id !== 0 )

                const updateWorkout = updateRoutineWorkouts.find(workout => workout.id == action.payload.workout.id)
                console.log('🚀 ~ file: routinesReducer.js ~ line 72 ~ routinesReducer ~ updateWorkout', updateWorkout);

                // const readyWorkout = 
                // let { id, workout_name, workout_type, distance, duration } = updateWorkout
                let incoming_workout = action.payload.workout

                updateWorkout.workout_name = incoming_workout.workout_name
                updateWorkout.workout_type = incoming_workout.workout_type
                updateWorkout.distance = incoming_workout.distance
                updateWorkout.duration = incoming_workout.duration
                // action.payload.workout.
                // debugger
                console.log('🚀 ~ file: routinesReducer.js ~ line 83 ~ routinesReducer ~ NEW updateDWorkout', updateWorkout);
                
                console.log('🚀 ~ file: routinesReducer.js ~ line 136 ~ routinesReducer ~ updateRoutineWorkouts', updateRoutineWorkouts);
                // const updateWorkoutId = action.payload.id
                // const updateRoutine = state.routines.find(routine => routine.id == updateWorkoutId)
                // const updatedWorkout = action.payload
                // const selectedWorkout = state.workouts.filter(workout => workout.id == updateWorkoutId)
                

                // debugger
                console.log('🚀 ~ file: routinesReducer.js ~ line 96 ~ routinesReducer ~ STATE2', state);


// debugger
            return {
                ...state,
                routines: state.routines.map(routine => routine.id == 0 ? routine.workouts.map(w => w) : routine),
                workouts: {...state.routines.map(r => r.workouts ? r.workouts : r)}
                    // routines: state.routines.map(r => r)

                    // {
//   ...state,
//   routines: {
    // ...state.routines.map(r => r),
    // workouts: {
    //   ...state.routines.map(r => r.workouts)
    // }
    // ,
    // workout: {
    //   ...state.updateWorkout
    // }
//   }
// }
                    // ,
                    // routine: updateRoutine.workouts.map(w => w),
                    // workouts: updateRoutine.workouts.map(w => w.id == incoming_workout.id ? console.log('🚀 ~ file: routinesReducer.js ~ line 110 ~ routinesReducer ~ incoming_workout', incoming_workout) : w)
                    // workouts: updateRoutine.workouts.map(w => w)
                    // workouts: updateRoutine.workouts.map(workout => workout.id == incoming_workout.id ? incoming_workout : workout)

                    // ,
                    // workout: updateWorkout
                    // ...state, routines: routineWorkouts
                    // workouts: state.workouts.map(workout => workout.id == updateWorkoutId ? action.payload : workout)
                    // ? workout = updatedWorkout : null
            }

            case 'DELETE_ROUTINE_WORKOUT':
                console.log('action :>> ', action);
                // console.log('ROUTINES-REDUCER');
                // const {routineId, workoutId} = action.payload
                let routineId = action.payload.routineId
                let workoutId = action.payload.workoutId

                const routine = state.routines.find( r => r.id == routineId)
                const workout = routine.workouts.find( w => w.id == workoutId)
                let workoutsList = routine.workouts
                const filteredWorkoutsList = workoutsList.filter(w => w.id !== workoutId)
                // filteresWorkoutsList
                // console.log('🚀 ~ file: routinesReducer.js ~ line 70 ~ routinesReducer ~ WorkoutsList', workoutsList);
                console.log('🚀 ~ file: routinesReducer.js ~ line 70 ~ routinesReducer ~ WorkoutsList.length()', workoutsList.length);
                // console.log('🚀 ~ file: routinesReducer.js ~ line 85 ~ routinesReducer ~ filteresWorkoutsList', filteresWorkoutsList);
                console.log('🚀 ~ file: routinesReducer.js ~ line 85 ~ routinesReducer ~ filteresWorkoutsList.length()', filteredWorkoutsList.length)
                // routine.workouts
                // console.log('🚀 ~ file: routinesReducer.js ~ line 67 ~ routinesReducer ~ routine', routine);
                console.log('🚀 ~ file: routinesReducer.js ~ line 74 ~ routinesReducer ~ routineId', routineId);
                console.log('🚀 ~ file: routinesReducer.js ~ line 74 ~ routinesReducer ~ WorkoutId', workoutId);
                console.log('🚀 ~ file: routinesReducer.js ~ line 67 ~ routinesReducer ~ routine[0]', routine);
                console.log('🚀 ~ file: routinesReducer.js ~ line 69 ~ routinesReducer ~ workout', workout);
// state.routines
console.log('🚀 ~ file: routinesReducer.js ~ line 90 ~ routinesReducer ~ state.routines', state.routines);

                // console.log('🚀 ~ file: routinesReducer.js ~ line 80 ~ routinesReducer ~ routine.name', routine.name);
                // console.log('🚀 ~ file: routinesReducer.js ~ line 80 ~ routinesReducer ~ routine.workouts', routine.workouts);
                
                // return {...state.routines, routine: routine.workouts}
                // return {...state.routines, routine: state.routines}
                // debugger //, workout: workout}

                return {...state, routines: state.routines.map(r => r), routine: routine.workouts = filteredWorkoutsList }
                // return {...state, routines: state.routines, workouts: filteresWorkoutsList} //, workout: workout}
                
                default:
            // return {...state}
            return state
    }

}