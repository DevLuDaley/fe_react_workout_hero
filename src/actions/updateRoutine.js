export const updateRoutine = (data) => {
console.log('updateRoutine -> data', data);
// console.log('updateRoutine -> data.id', data.id);
// debugger
// ! return dispatch so that we have access to dispatch function, thanks to thunk.
// ! thunk is allowing us to pass in dispatch to the thunk function that we have inside of our action creator
// ${id}
    return(dispatch) => {
// fetch(`http://localhost:3000/api/v1/routines/${data.id}`, {
fetch(`https://be-workout-hero2.herokuapp.com/api/v1/routines/` + data.id, {
// fetch(`https://be-workout-hero2.herokuapp.com/api/v1/routines/${data.id}`, {
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(data)
})
.then(resp => resp.json())

// .then(routine => console.log('🚀 ~ file: updateRoutine.js ~ line 22 ~ return ~ routine', routine))
.then(routine => dispatch({
    type: 'UPDATE_ROUTINE',
    payload: routine
}))
// debugger
    }
};
// create index
// read index
// update index/id
// delete index/id