export function fetchRoutines() {
    // ! thunk allows us to use dispatch here
    // ! bring in dispatch so that we can async if not the connect will handle synchronously

    // const WH_URL = process.env.REACT_APP_WH_URL;
    const WH_URL = process.env.REACT_APP_WH_URL;
    // console.log('🚀 ~ file: fetchRoutines.js ~ line 7 ~ fetchRoutines ~ WH_URL', WH_URL);
    
    // console.log('🚀 ~ file: fetchRoutines.js ~ line 7 ~ fetchRoutines ~ process.env', process.env);
    // const REACT_APP_NOT_SECRET_CODE = process.env.REACT_APP_NOT_SECRET_CODE
    // fetch('https://be-hoop-drills.herokuapp.com/api/v1/routines'
    return(dispatch) => { 
        // fetch('http://localhost:3000/api/v1/routines', 
        // fetch('https://be-workout-hero.herokuapp.com/api/v1/routines', 
        // fetch('https://be-workout-hero2.herokuapp.com/api/v1/routines', 
        fetch(`${WH_URL}/api/v1/routines`, 
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'FETCH_ROUTINES', payload: data
        }))
    }
        
// .then(jsonResponse =>
//   console.log('App -> componentDidMount -> jsonResponse', jsonResponse))
}

// return action.payload
// export fetchRoutines