export const addRoutine = (data) => {
     const WH_URL = process.env.REACT_APP_WH_URL;

    return(dispatch) => {
// fetch('http://localhost:3000/api/v1/routines', {
// fetch('https://be-workout-hero2.herokuapp.com/api/v1/routines', 
fetch(`${WH_URL}/api/v1/routines`, 
{
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
})
.then(res => res.json())
.then(routine => dispatch({
    type: 'ADD_ROUTINE', 
    payload: routine
}))
    }
};