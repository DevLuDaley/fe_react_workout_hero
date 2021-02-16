export const updateWorkout = (data) => {
console.log('updateWorkout -> data', data);

    const WH_URL = process.env.REACT_APP_WH_URL;


    return(dispatch) => {
// fetch(`http://localhost:3000/api/v1/workouts/${data.id}`, {
// fetch(`https://be-workout-hero2.herokuapp.com/api/v1/workouts/` + data.id, {
    fetch(`${WH_URL}/api/v1/workouts/` + data.id, {
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