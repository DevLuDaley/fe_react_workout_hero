export const updateWorkout = (data) => {
console.log('updateWorkout -> data', data);
// console.log('updateWorkout -> data.id', data.id);
// debugger
// ! return dispatch so that we have access to dispatch function, thanks to thunk.
// ! thunk is allowing us to pass in dispatch to the thunk function that we have inside of our action creator
// ${id}
    return(dispatch) => {
// fetch(`http://localhost:3000/api/v1/workouts/${data.id}`, {
fetch(`https://be-workout-hero2.herokuapp.com/api/v1/workouts/` + data.id, {
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
    payload: workout
}))
// debugger
    }
};
// create index
// read index
// update index/id
// delete index/id