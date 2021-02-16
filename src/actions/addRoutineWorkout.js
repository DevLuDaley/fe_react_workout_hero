export const addRoutineWorkout = (data) => {
console.log('🚀 ~ file: addRoutineWorkout.js ~ line 2 ~ addRoutineWorkout ~ data', data);

    const WH_URL = process.env.REACT_APP_WH_URL;
    
    return(dispatch) => {
// fetch(`http://localhost:3000/api/v1/routines/${data.id}`, {
// fetch(`https://be-workout-hero2.herokuapp.com/api/v1/routines/${data.id}`, {
// fetch(`https://be-workout-hero2.herokuapp.com/api/v1/routines/${data.routineId}/workouts`, {
fetch(`${WH_URL}/api/v1/routines/${data.routineId}/workouts`, {
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
.then(routineAndWorkout => dispatch({
    type: 'ADD_ROUTINE_WORKOUT', 
    payload: routineAndWorkout
}
)
)
    }
};