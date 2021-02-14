export const addRoutineWorkout = (data) => {
console.log('🚀 ~ file: addRoutineWorkout.js ~ line 2 ~ addRoutineWorkout ~ data', data);
// debugger

    return(dispatch) => {
// fetch(`http://localhost:3000/api/v1/routines/${data.id}`, {
// fetch(`https://be-workout-hero2.herokuapp.com/api/v1/routines/${data.id}`, {
fetch(`https://be-workout-hero2.herokuapp.com/api/v1/routines/${data.routineId}/workouts`, {
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
})
.then(res => res.json())
// .then(response => console.log('🚀 ~ file: addRoutineWorkout.js ~ line 18 ~ return ~ response', response)
// )
.then(routine => dispatch({
    type: 'ADD_ROUTINE_WORKOUT', 
    payload: routine
}
)
)
    }
};