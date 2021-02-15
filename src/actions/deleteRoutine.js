export const deleteRoutine = (routineData) => {
    const WH_URL = process.env.REACT_APP_WH_URL;

    console.log('🚀 ~ file: deleteRoutine.js ~ line 2 ~ deleteRoutine ~ routineData', routineData);

    // const baseUrl = 'http://localhost:3000/api/v1/routines/'

    // const baseUrl = 'https://be-workout-hero2.herokuapp.com/api/v1/routines/'
    const baseUrl = `${WH_URL}/api/v1/routines/`
    const deleteRoutineUrl = (baseUrl + routineData.id)

    return (dispatch) => {
        fetch(deleteRoutineUrl, {
                method: 'DELETE'
    })
        .then(response => response.json())
        .then(routineId => dispatch({type: 'DELETE_ROUTINE', payload: routineId}))
    }
};

export default deleteRoutine;