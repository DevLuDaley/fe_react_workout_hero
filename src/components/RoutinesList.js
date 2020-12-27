import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';


const RoutinesList = (props) =>  {
    // constructor(props) {
    // this.routines = []
    // this.initBindingsAndEventListeners()
    // this.adapter = new RoutinesAdapter()
    // this.fetchAndLoadRoutines()
    // this.assignRoutines()
    // this.state = {routines: []}
    // }

  // const initBindingsAndEventListeners = () => {
  //   this.routinesNode = document.getElementById('routines-container')
  //   this.routineCard = document.getElementById('routine-card')
  //   this.editRoutineForm = document.getElementById('edit-routine-form')
  //   this.newRoutineName = document.getElementById('new-routine-name')
    
    //! Btns
    // this.btnsDelete = document.querySelectorAll('btn-delete')
    // this.deleteBtns = document.getElementsByClassName('all-routine-delete-btns')
    
    // ! bindings that have event listeners
    
    // ! HandleAdd
    // this.routinesForm = document.getElementById('new-routine-form')
    // this.routinesForm.addEventListener('submit', this.handleAddRoutine.bind(this))
    
    // ! HandleDelete
    // this.spaContainer = document.getElementById('spa-container')
    // this.spaContainer.addEventListener('click',this.handleDeleteRoutine.bind(this))
    
    // ! HandleEdit
    // this.spaContainer.addEventListener('click',this.toggleAddWorkoutForm.bind(this))
    // this.spaContainer.addEventListener('submit',this.handleAddWorkout.bind(this))

  // }4

  // const fetchAndLoadRoutines = () => {
  //   this.adapter.getRoutines()
  //   .then(routinesJSON => {
  //     routinesJSON.forEach( routine => { 
  //       this.routines
  //       // push(routine)
  //       // ! create new note instance
  //       .push( new Routine(routine) )
  //   })
  //   })
  //       .then( this.assignRoutines.bind(this) )
  //     .catch( (error) => console.log(error) )
  //   //   .catch( (error) => console.log("you broke it son!") )
  // }

  // const assignRoutines = () => {
  // let routinesString = this.routines.map(
  //   routine => routine.renderRoutinesAndWorkouts()
  // ).join('')
  // this.routineCard.innerHTML = routinesString;
  // }

  // const toggleAddWorkoutForm = (event)=> {
  //  if (event != null && event.target.dataset.action === 'edit-routine')
  //   {
  //     let workoutsSection = document.getElementById(`routine-${event.target.id.replace('btn-routine-','')}-workouts`
  //     )

  //     let routineEditForm = document.getElementById(`edit-routine-${event.target.id.replace('btn-routine-','')}`)

  //       if (routineEditForm.classList.value.includes('hidden'))
  //       routineEditForm.classList.remove('hidden')
  //       else {routineEditForm.classList.add('hidden')}
  //     }
  //   // else{ 
  //     // console.log("Lu THE IF STATEMENT IS FALSE")
  //   // }
  // }

  // const handleAddRoutine = (event) =>  {
  //   event.preventDefault()
  //   const routineParams =
  //   {
  //     "routine_name": this.newRoutineName.value
  //   }

  //   this.adapter.createRoutine(routineParams)
  //   .then(
  //     (routineJSON) => 
  //       this.routines.push(new Routine(routineJSON)) )
  //   .then(
  //     this.assignRoutines.bind(this) )
  //   .then(
  //     this.routinesForm.reset() 
  //   )
  // }
    
  // const handleAddWorkout = (event) => {
  //     event.preventDefault()
  //     let targetId = event.target.id.replace("edit-routine-", "")

  //     if(event.target != null && event.target.id.includes(`edit-routine-${targetId}`))
  //     {
  //         let id = targetId
  //         let inputName = document.getElementById(`input-routine-${id}-workout-name`)  

  //      const updateRoutineParams = {
  //        "id": id,
  //        "workout_name": inputName.value.toLowerCase(),
  //        "workout_type": "Cardio",
  //        "distance": 13,
  //        "duration": 12,
  //        "routine":[
  //          {
  //             }
  //           ]
  //      }
  //             this.adapter.editRoutine(updateRoutineParams)
  //             .then( resp => this.addCreatedWorkout(resp))
  //     }

  // }

  // const addCreatedWorkout = (addWorkoutResponse) => {
  //   const { workouts } = addWorkoutResponse

  //   let editForm = document.getElementById(`edit-routine-${addWorkoutResponse["id"]}`)
    
  //   let routinesElement = document.getElementById(`routine-${addWorkoutResponse["id"]}-workouts`)

  //   // console.log('Routines -> addWorkout -> addWorkoutResponse["id"]', addWorkoutResponse["id"]);

  //       let updatedRoutinesElement = addWorkoutResponse["workouts"].map(workout =>
  //         `
  //         <section 
  //           class="routine-workout-block"
  //             id='workout-${workout.id}'>

  //               <div class='routine-workout-names'>
  //                 ${workout.workout_name}
  //                 <section 
  //                   class='routine-workout-details'>
  //                 </section>
  //               </div>
  //         </section>
  //         `
  //         ).join('')

  //   routinesElement.innerHTML = updatedRoutinesElement
  // editForm.reset()
  // }

  // const handleDeleteRoutine = (event) => {
  //   if (event.target.dataset.action != null && event.target.dataset.action.includes("delete-routine")
  //   )

  //   {
  //     const routineId = event.target.dataset.action.replace("delete-routine-", "")
  //     this.adapter.deleteRoutine(routineId)
  //     .then( resp => this.removeDeletedRoutine(resp) )
  //   }
  // }
  
  // const removeDeletedRoutine = (deleteResponse) => {
  //   this.routines = this.routines.filter(routine => routine.id !== deleteResponse.routineId)
  //   this.assignRoutines()
  // }

  // routinesHTML() {
  //   return this.routines.map( routine => 
  //     routine.assignRoutines()).join('')
  //   }
  return (
    <Fragment>
    {/* {console.log(props.routines.length())} */}
    {console.log('props from <RoutinesList/>',props.routines)}
         {props.routines ? props.routines.map(routine =>
            <ul key={routine.id} className='routines-list' style={{listStyleType: 'none'}}>
                  <li key={routine.id}>
                      <Link to={`/routines/${routine.id}`}>
                            {routine.routine_name}
                            {<button>
                                {routine.routine_name.length ? routine.routine_name.length : null}
                            </button> }
                      </Link>

                  </li>
                            {/* <button onClick={handleDeleteroutine} id={`btn-delete-routine-${routine.id}`} className='btn-delete-routine'> */}
                            {/* <button onClick={deleteroutine} id={routine.id} className='btn-delete-routine'> */}
                                {/* Delete
                            </button> */}
            </ul>
            ) : "nothing"
            }
        {/* </Fragment> */}

    </Fragment>
  )

}
export default RoutinesList