//! react/redux imports
import React, { Fragment, useState } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

//! Material-ui imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

//! local file imports
import deleteRoutine from '../actions/deleteRoutine'
import deleteRoutineWorkout from '../actions/deleteRoutineWorkout'

const RoutinesList = (props) =>  {
  
  const handleDeleteRoutine = (e) => {
    if (props.routines){
      // console.log(e.target);
      const targetId = e.target.id.replace("btn-delete-routine-", "")
      const clickedRoutine = props.routines.find(routine => routine.id == targetId)
      var shouldDelete = confirm('To delete this routine press \'OK\'. Otherwise press \'Cancel\'');
      // setConfirmOpen(true)  
      if (shouldDelete) {
  // deleteArticle();
  props.deleteRoutine(clickedRoutine)
}
        }
    }

    const handleDeleteWorkout = (e) => {
      if (props.routines && props.workouts){
        let targetId = e.target.id

        let routineString = (/\d{1,5}/.exec(targetId))
        let workoutString = (/\d{1,5}$/.exec(targetId))
        let workoutIdString = workoutString[0] //.toString()
        let workoutId = parseInt(workoutIdString) //.toString()
        let routineId = routineString[0].toString()

        const clickedRoutine = props.routines.find(routine => routine.id == routineId) 
        const outgoingPayload = {
          "id": clickedRoutine.id,
          "workout_id_to_delete": workoutId
      }
      var shouldDelete = confirm('To delete this workout press \'OK\'. Otherwise press \'Cancel\'');
      // setConfirmOpen(true)  
      if (shouldDelete) {
      props.deleteRoutineWorkout(outgoingPayload)
        }
        }
    }
  return (
    <Container maxWidth="lg">
         {props.routines ?
            props.routines.map(routine =>
              <ul key={"ul-key-" + routine.id} className='routines-list workout-names' style={{listStyleType: 'none'}}>

                    <li key={"li-key-" + routine.id}>
                      <div key={"div-key-" + routine.id} className='routine-name-wrapper'>
                            <Link key={"routine-url-key-" + routine.id} to={`/routines/${routine.id}` } className='routine-names'>
                        <h1 key={"h1-" + routine.id} id='routine-names'>
                              {routine.routine_name}
</h1>
</Link>
<Link key={routine.id} to={`/routines/${routine.id}`}>
<h1>
                                  {routine.workouts && routine.workouts.length != 0 ?
                            <button key={"delete-btn-" + routine.id} id='btn-routine-workout-count'>
                                  {routine.workouts.length }
                           </button>
                      : null}

                          </h1>
                        </Link>
                                <button key={"delete-routine-btn-key-" + routine.id} onClick={handleDeleteRoutine} id={`btn-delete-routine-${routine.id}`} className="btn-delete-routineslist-routine">
                            {/* <button onClick={deleteRoutine} id={routine.id} className='btn-delete-routine'> */}
                                Delete
                            </button>
                      </div>
                      {
                        routine.workouts ?
                        <Box key={"workouts-section-key-" + routine.id} id={`routine-${routine.routine_name} + "" + ${routine.id}-workouts`} className='routine-workout-list'>
                            {routine.workouts.map(workout =>
                            <div key={"section-div-key-" + workout.id} className='routine-workout-name-block'>

                                 <Link key={"routine-url-key-" + routine.id} to={`/routines/${routine.id}/workouts/${workout.id}`}>
                                 <button className="edit-btns"> edit </button>
                                 </Link>
                                {workout.workout_name} 
                                <button className="delete-btns" onClick={handleDeleteWorkout} id={`routine-${routine.id}-btn-delete-workout-${workout.id}`}> delete </button>
{/* <ConfirmDialog/> */}
  {/* <ConfirmDialog
    title="Delete Post?"
    open={confirmOpen}
    setOpen={setConfirmOpen}
    onConfirm={deletePost}
  >
    Are you sure you want to delete this post?
  </ConfirmDialog> */}
                                <Box key={"nested-section-key-" + workout.id} className='routine-workout-details'>
                                </Box>
                            </div>
                            )}
                        </Box>
                      : null}
                  </li>
                            {/* <button onClick={handleDeleteroutine} id={`btn-delete-routine-${routine.id}`} className='btn-delete-routine'> */}
                            {/* <button onClick={deleteroutine} id={routine.id} className='btn-delete-routine'> */}
                                {/* Delete
                            </button> */}
            </ul>

            ) : "nothing"
            }
    </Container>
  )
}

function mapStateToProps(state) {

  return {
           routines: state.routinesReducer.routines,
           workouts: state.workoutsReducer.workouts
 }
}

export default connect(mapStateToProps, {deleteRoutine, deleteRoutineWorkout}) (RoutinesList);