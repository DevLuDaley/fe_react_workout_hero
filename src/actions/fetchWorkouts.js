export function fetchWorkouts() {
    // ! thunk allows us to use dispatch here
    // ! bring in dispatch so that we can async if not the connect will handle synchronously
    // fetch('https://be-hoop-drills.herokuapp.com/api/v1/workouts'
    return(dispatch) => { 
        // fetch('http://localhost:3000/api/v1/workouts', 
        fetch('https://be-workout-hero2.herokuapp.com/api/v1/workouts', 
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'FETCH_WORKOUTS', payload: data
        }))
    }
        
// .then(jsonResponse =>
//   console.log('App -> componentDidMount -> jsonResponse', jsonResponse))
}

// return action.payload
// export fetchWorkouts