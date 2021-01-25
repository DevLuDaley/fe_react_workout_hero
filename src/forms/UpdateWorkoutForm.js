import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
//import {Route, Switch, useLocation, withRouter} from 'react-router-dom'
// import { createBrowserHistory } from "history";
import {updateWorkout} from '../actions/updateWorkout'
// import {workoutsReducer} from '../reducers/workoutsReducer'


class UpdateWorkoutForm extends Component {
    constructor(props) {
    super(props)
    // this.currentUrl = window.location.href
    this.currentUrl = window.location.pathname
    // console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 15 ~ UpdateWorkoutForm ~ constructor ~ this.currentUrlPath', this.currentUrlPath);

    console.log('🚀 ~ file: UpdateWorkoutForm.js ~ line 14 ~ UpdateWorkoutForm ~ constructor ~ this.currentUrl', this.currentUrl);
    this.id = parseInt(this.currentUrl.replace('/workouts/',''))

    this.workout = this.props.workouts.find(workout => workout.id == this.id)

    this.state = {
        id: this.id,
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

        loadWorkoutInfo(){
        // console.log('HARLEM SON1')
        if (this.props.workouts){
            // var workoutId = parseInt(window.location.href.replace("http://localhost:3001/workouts/", ""))
            // ! this.workout = this.props.workouts.find(workout => workout.id == this.id);

        }
        }

    // this.id = parseInt(window.location.href.replace("http://localhost:3001/workouts/", ""))
    // this.workoutsList = this.props.workouts
    // this.workout = [this.props.workouts].find(workout => workout.id == this.id)

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateWorkout(this.state)
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
            {
                this.props.workouts && this.props.workout ?
                    <section>
                        {/* {this.workoutInfo} */}
                        <form onSubmit={this.handleSubmit} id='update-workout-form'>
                            <label> </label>
                            <input 
                            type="text" 
                            placeholder={this.props.workout.workout_name} 
                            value={this.state.workout_name} 
                            name="workout_name" 
                            onChange={this.handleChange}/>
                            
                            <label> </label>
                            <input 
                            type="text" 
                            placeholder={this.props.workout.workout_type} 
                            value={this.state.workout_type} 
                            name="workout_type" 
                            onChange={this.handleChange}/>

                            <label> </label>
                            <input 
                            type="text" 
                            placeholder={this.props.workout.distance} 
                            value={this.state.distance} 
                            name="distance" 
                            onChange={this.handleChange}/>

                            <label> </label>
                            <input 
                            type="text" 
                            placeholder={this.props.workout.duration} 
                            value={this.state.duration} 
                            name="duration" 
                            onChange={this.handleChange}/>


                            <input 
                            type="text" 
                            hidden="true    "
                            value={this.id} 
                            name="id" />

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

  return { workouts: state.workoutsReducer.workouts,
        //    workout: [ownProps.workouts.filter(workout => workout.id == workoutId)]
           workout: currentWorkout[0]
 }
}

export default connect(mapStateToProps, {updateWorkout})(UpdateWorkoutForm);