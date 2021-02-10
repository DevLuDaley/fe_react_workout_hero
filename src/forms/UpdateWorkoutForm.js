import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
//import {Route, Switch, useLocation, withRouter} from 'react-router-dom'
// import { createBrowserHistory } from "history";
import {updateWorkout} from '../actions/updateWorkout'
import {updateRoutineWorkout} from '../actions/updateRoutineWorkout'
// import {workoutsReducer} from '../reducers/workoutsReducer'


class UpdateWorkoutForm extends Component {
    constructor(props) {
    super(props)
    // this.currentPath = window.location.href
    this.currentPath = window.location.pathname
    // console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 15 ~ UpdateWorkoutForm ~ constructor ~ this.currentPathPath', this.currentPathPath);

    console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 14 ~ UpdateWorkoutForm ~ constructor ~ this.currentPath', this.currentPath);
    // this.id = parseInt(this.currentPath.replace('/routines/' + this.routineId + '/workouts/',''))
    console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 19 ~ UpdateWorkoutForm ~ constructor ~ this.id', this.workoutId);
    // this.regex = (/\d/.test(this.currentPath))
    this.workoutId = (/\d{1,5}$/.exec(this.currentPath))[0]
    this.routineId = (/\d{1,5}/.exec(this.currentPath))[0]
    // this.id = this.regex[0]
    console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 21 ~ UpdateWorkoutForm ~ constructor ~ this.id', this.workoutId);
    // console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 22 ~ UpdateWorkoutForm ~ constructor ~ this.regex', this.regex);
    // console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 22 ~ UpdateWorkoutForm ~ constructor ~ this.regex[0]', this.regex[0]);
    this.workout = this.props.workouts.find(workout => workout.id == this.workoutId)
    this.routine = this.props.routines.find(routine => routine.id == this.routineId)

    this.state = {
        id: this.workoutId
        ,
        workout_name: this.workout.workout_name,
        workout_type: this.workout.workout_type,
        distance: this.workout.distance,
        duration: this.workout.duration
        // workout:this.workout
        // id: parseInt(window.location.href.replace("http://localhost:3001/workouts/", "")),
        // id: this.props.workoutToUpdate.id,
        // workout_name: this.props.workoutToUpdate.workout_name,
        // workout_name: this.workout.workout_name
        }
        // this.loadWorkoutInfo = this.loadWorkoutInfo.bind(this)
    }

        componentDidMount(){
            // this.loadWorkoutInfo()
        }

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleSubmit = (e) => {
        e.preventDefault()
        const updateRoutineWorkoutPayload = {
                "id": this.routineId,
                "workout": this.state,
                "update_workout": true
            }
    
        console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 57 ~ UpdateWorkoutForm ~ updateRoutineWorkoutPayload', updateRoutineWorkoutPayload);
        // this.props.updateWorkout(this.state)
        this.props.updateRoutineWorkout(this.state)
        // this.props.updateRoutineWorkout(updateRoutineWorkoutPayload)
    //     this.setState({
    //     // workout_name: this.state.workout_name,
    // //     workout_name: "",
    //     // workout_type: this.state.workout_type,
    // //     distance: "",
    // //     duration: ""
    
    // })
        }

        render() {
        return (
            <Fragment>
                {/* {console.log("~ line 66", "THIS.PROPS", this.props)} */}
                {/* {console.log("~ line 66", "THIS.STATE", this.state)} */}
                {/* { console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 67 ~ UpdateWorkoutForm ~ render ~ this.workout', this.workout)} */}
                {/* { console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 68 ~ UpdateWorkoutForm ~ render ~ this.workout.workout_name', this.workout.workout_name)} */}
                {/* { console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 69 ~ UpdateWorkoutForm ~ render ~ this.props.workoutToUpdate', this.props.workoutToUpdate)} */}

                {/* {console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 94 ~ UpdateWorkoutForm ~ render ~ this.workout.workout_name', this.workout.workout_name)} */}

                {/* {console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 94 ~ UpdateWorkoutForm ~ render ~ this.state.workout_name', this.state.workout_name)} */}
                { this.props.detail ?
                console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 142 ~ UpdateWorkoutForm ~ render ~ this.props.workout', this.props.detail)
                :
                console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 142 ~ UpdateWorkoutForm ~ render ~ this.props.workout', "NOPE!")
                }
            {
                 this.props.detail ?
                    <section>
                        <form onSubmit={this.handleSubmit} id='update-workout-form'>
                            <label> </label>
                            <input 
                            type="text" 
                            placeholder={this.props.detail.workout_name} 
                            value={this.state.workout_name} 
                            name="workout_name" 
                            onChange={this.handleChange}/>
                            
                            <label> </label>
                            <input 
                            type="text" 
                            placeholder={this.props.detail.workout_type} 
                            value={this.state.workout_type} 
                            name="workout_type" 
                            onChange={this.handleChange}/>

                            <label> </label>
                            <input 
                            type="text" 
                            placeholder={this.props.detail.distance} 
                            value={this.state.distance} 
                            name="distance" 
                            onChange={this.handleChange}/>

                            <label> </label>
                            <input 
                            type="text" 
                            placeholder={this.props.detail.duration} 
                            value={this.state.duration} 
                            name="duration" 
                            onChange={this.handleChange}/>

                            <button type="submit">Update Workout </button>
                        </form>
                    </section>
                    :
                    <p>NOTHING TO SEE HERE</p>

                }
                 

        </Fragment>
        );
    }
}

function mapStateToProps(state, ownProps) {
  let workoutId
  window.location.href.includes('https://fe-workout-hero.herokuapp.com/workouts/') ?
  workoutId = parseInt(window.location.href.replace("https://fe-workout-hero.herokuapp.com/workouts/", "")) : workoutId = parseInt(window.location.href.replace("http://localhost:3003/workouts/", ""))
   const currentWorkout = state.workoutsReducer.workouts.filter(workout => workout.id == workoutId)

  return { 
      workouts: state.workoutsReducer.workouts,
      routines: state.routinesReducer.routines,
      workout: currentWorkout[0]
        //    workout: [ownProps.workouts.filter(workout => workout.id == workoutId)]
 }
}

export default connect(mapStateToProps, {updateWorkout, updateRoutineWorkout})(UpdateWorkoutForm);