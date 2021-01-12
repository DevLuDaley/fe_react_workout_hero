export const deleteRoutine = (routineData) => {

    console.log('🚀 ~ file: deleteRoutine.js ~ line 2 ~ deleteRoutine ~ routineData', routineData);

    const baseUrl = 'http://localhost:3000/api/v1/routines/'
    const deleteRoutineUrl = (baseUrl + routineData.id)
    // console.log('🚀 ~ file: deleteRoutine.js ~ line 3 ~ deleteRoutine ~ baseUrl', baseUrl);
    // console.log('🚀 ~ file: deleteRoutine.js ~ line 5 ~ deleteRoutine ~ routineUrl', routineUrl);
    // console.log('🚀 ~ file: deleteRoutine.js ~ line 7 ~ deleteRoutine ~ data.id', routineData.id);
    // console.log('🚀 ~ file: deleteRoutine.js ~ line 8 ~ return ~ data', routineData);
    return (dispatch) => {
        fetch(deleteRoutineUrl, { 
                method: 'DELETE'
    })
        .then(response => response.json())
        .then(routineId => dispatch({type: 'DELETE_ROUTINE', payload: routineId}))
    }
};

export default deleteRoutine;