import React, { Fragment, useState } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

import deleteRoutine from '../actions/deleteRoutine'
import deleteWorkout from '../actions/deleteWorkout'


const RoutinesList = (props) =>  {
console.log('🚀 ~ file: RoutinesList.js ~ line 10 ~ RoutinesList ~ props', props);

// const [workouts, setWorkouts] = useState([])

// setWorkouts(workouts =  )


  const handleDeleteRoutine = (e) => {
    if (props.routines){
      const targetId = e.target.id.replace("btn-delete-routine-", "")

      const clickedRoutine = props.routines.find(routine => routine.id == targetId)
      
      props.deleteRoutine(clickedRoutine)
        }
    }
  
    const handleDeleteWorkout = (e) => {
      console.log("This here is JAMAICA")
      console.log('🚀 ~ file: RoutinesList.js ~ line 24 ~ handleDeleteWorkout ~ props.workouts', props.workouts);
    if (props.routines){
      const targetId = e.target.id.replace("btn-delete-workout-", "")
      console.log('🚀 ~ file: RoutinesList.js ~ line 26 ~ handleDeleteWorkout ~ targetId', targetId);

      const clickedWorkout = props.workouts.find(workout => workout.id == targetId)
      
      props.deleteWorkout(clickedWorkout)
        }
    }
  return (
    <Fragment>
         {props.routines ?
            props.routines.map(routine =>
              <ul key={"ul-key-" + routine.id} className='routines-list all-routines' style={{listStyleType: 'none'}}>

                    <li key={"li-key-" + routine.id}>
                    {/* {console.log('🚀 ~ file: RoutinesList.js ~ line 25 ~ RoutinesList ~ routine.routine_name + " " + routine.id', routine.routine_name + "-routine-number-" + routine.id)} */}
                      <div key={"div-key-" + routine.id} className='routine-name-btns-wrapper'>
                            <Link key={"routine-url-key-" + routine.id} to={`/routines/${routine.id}`}>
                        <h1 key={"h1-" + routine.id}className='routine-names'>
                              {routine.routine_name}

                                  {routine.workouts && routine.workouts.length != 0 ?
                            <button key={"delete-btn-" + routine.id} className='btns-all'>
                                  {routine.workouts.length }
                           </button>
                      : null}

                          </h1>
                        </Link>
                                <button key={"delete-routine-btn-key-" + routine.id} onClick={handleDeleteRoutine} id={`btn-delete-routine-${routine.id}`} className='btn-delete-routine'>
                            {/* <button onClick={deleteRoutine} id={routine.id} className='btn-delete-routine'> */}
                                Delete Routine
                            </button>
                      </div>
                      {
                        routine.workouts ?
                        <section key={"workouts-section-key-" + routine.id} id={`routine-${routine.routine_name} + "" + ${routine.id}-workouts`} className='all-routine-workouts'>
                            {routine.workouts.map(workout =>
                            <div key={"section-div-key-" + workout.id} className='routine-workout-names'>

                                 <Link key={"routine-url-key-" + routine.id} to={`/routines/${routine.id}/workouts/${workout.id}`}>
                                 <button> edit </button>
                                 </Link>
                                {workout.workout_name} 
                                <button onClick={handleDeleteWorkout} id={`btn-delete-workout-${workout.id}`}> delete </button>

                                <section key={"nested-section-key-" + workout.id} className='routine-workout-details'>
                                </section>
                            </div>
                            )}
                        </section>
                      : null}
                  </li>
                            {/* <button onClick={handleDeleteroutine} id={`btn-delete-routine-${routine.id}`} className='btn-delete-routine'> */}
                            {/* <button onClick={deleteroutine} id={routine.id} className='btn-delete-routine'> */}
                                {/* Delete
                            </button> */}
            </ul>

            ) : "nothing"
            }
    </Fragment>
  )
}
// export default RoutinesList

function mapStateToProps(state, ownProps) {
  // let routineId
  // window.location.href.includes('https://fe-workout-hero.herokuapp.com/routines/') ?
  // routineId = parseInt(window.location.href.replace("https://fe-workout-hero.herokuapp.com/routines/", "")) : routineId = parseInt(window.location.href.replace("http://localhost:3003/routines/", ""))
  //  const currentRoutine = state.routinesReducer.routines.filter(routine => routine.id == routineId)

  return { 
           routines: state.routinesReducer.routines,
           workouts: state.workoutsReducer.workouts
        //    routine: [ownProps.routines.filter(routine => routine.id == routineId)]
          //  routine: currentRoutine[0]
 }
}

// export default connect(mapStateToProps, {updateRoutine})(UpdateRoutineForm);
export default connect(mapStateToProps, {deleteRoutine, deleteWorkout}) (RoutinesList);