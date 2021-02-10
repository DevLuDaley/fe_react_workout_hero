export const updateRoutineWorkout = (data) => {
console.log('updateRoutineWorkout -> data', data);
// console.log('updateWorkout -> data.id', data.id);
// debugger
console.log('🚀 ~ file: updateRoutineWorkout.js ~ line 11 ~ return ~ data[0]', data[0]);
// console.log('🚀 ~ file: updateRoutineWorkout.js ~ line 11 ~ return ~ data[0]ID', data[0]);
// ! return dispatch so that we have access to dispatch function, thanks to thunk.
// ! thunk is allowing us to pass in dispatch to the thunk function that we have inside of our action creator
// ${id}
// debugger
    return(dispatch) => {
// fetch(`http://localhost:3000/api/v1/workouts/${data.id}`, {
fetch(`http://localhost:3000/api/v1/routines/1/workouts/${data.id}`, {
// fetch(`https://be-workout-hero2.herokuapp.com/api/v1/routines/` + data[0].id, {
// fetch(`https://be-workout-hero2.herokuapp.com/api/v1/workouts/${data.id}`, {
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(data)
})
.then(resp => resp.json())

// .then(workout => console.log('🚀 ~ file: updateWorkout.js ~ line 22 ~ return ~ workout', workout))
.then(workout => dispatch({
    type: 'UPDATE_WORKOUT',
    // type: 'UPDATE_ROUTINE_WORKOUT',
    payload: workout
}))
// debugger
    }
};
// create index
// read index
// update index/id
// delete index/id