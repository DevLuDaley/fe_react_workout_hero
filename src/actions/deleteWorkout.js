export const deleteWorkout = (workoutData) => {

    console.log('🚀 ~ file: deleteWorkout.js ~ line 2 ~ deleteWorkout ~ workoutData', workoutData);

    // const baseUrl = 'http://localhost:3000/api/v1/workouts/'
    const baseUrl = 'https://be-workout-hero2.herokuapp.com/api/v1/workouts/'
    const deleteWorkoutUrl = (baseUrl + workoutData.id)

    return (dispatch) => {
        fetch(deleteWorkoutUrl, {
                method: 'DELETE'
    })
        .then(response => response.json())
        .then(workoutId => dispatch({type: 'DELETE_WORKOUT', payload: workoutId}))
    }
};

export default deleteWorkout;