export const deleteRoutineWorkout = (routineData) => {
    console.log('🚀 ~ file: deleteRoutine.js ~ line 2 ~ deleteRoutine ~ routineData', routineData);

    // const baseUrl = 'http://localhost:3000/api/v1/routines/'
    const baseUrl = 'https://be-workout-hero2.herokuapp.com/api/v1/routines/'    
    const deleteRoutineWorkoutUrl = (baseUrl + routineData.id)
    // const deleteRoutineWorkoutUrl = ('http://localhost:3000/api/v1/routines/' + routineData.id)

    console.log('🚀 ~ line 8 ~~ deleteRoutineWorkoutUrl', deleteRoutineWorkoutUrl);

    return (dispatch) => {
        fetch(deleteRoutineWorkoutUrl, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(routineData)
        })
        .then(response => response.json())
        // .then(d => console.log("return from rails/ruby ap", d))
        .then(routineWorkoutInfo => dispatch({
                type: 'DELETE_ROUTINE_WORKOUT', 
                payload: routineWorkoutInfo
                }
        ))
    }
};

// .then(routineId => dispatch({type: 'DELETE_ROUTINE_WORKOUT', payload: routineId}))
export default deleteRoutineWorkout;