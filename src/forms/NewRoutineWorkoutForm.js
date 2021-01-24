import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addRoutineWorkout} from '../actions/addRoutineWorkout'

class NewRoutineWorkoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      workout_name: "",
      workout_type: "",
      distance: "",
      duration: ""//,
      // routines: []
      }

  }

    handleChange = (e)=> {
        console.log(e.target);
         this.setState({
            [e.target.name]: e.target.value,
            id: this.props.currentRoutine['id']
            // [e.target.drill_name]: e.target.value,
            // [e.target.reps]: e.target.reps,
            // [e.target.sets]: e.target.sets
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.addRoutineWorkout(this.state)
            this.setState({
      id: '',
      workout_name: "",
      workout_type: "",
      distance: "",
      duration: "",
    //   routines: [],
      })
      //! formData object/hash
        // let formData  = { 
        //   [e.target.drill_name]: this.state.drill_name,
        //   [e.target.reps]: this.state.reps,
        //   [e.target.sets]: this.state.sets,
        //   id: this.props.workout['id']
        //  }
    }
    render() { 
        return (  
          <div>
        <form onSubmit={this.handleSubmit}>
              {/* <input type="hidden" placeholder='' value={this.state.id} name="id" onChange={this.handleChange}/> */}

            <label>Name: </label> 
              <input type="text" placeholder='enter name...' value={this.state.workout_name} name="workout_name" onChange={this.handleChange}/>

            <label>Workout Type: </label> 
              <input type="text" placeholder='enter type...' value={this.state.workout_type} name="workout_type" onChange={this.handleChange}/>

            <label> Distance: </label> 
              <input type="text" placeholder='enter distance...' value={this.state.distance} name="distance" onChange={this.handleChange}/>
              
            <label> Duration: </label> 
              <input type="text" placeholder='enter duration...' value={this.state.duration} name="duration" onChange={this.handleChange}/>

                <button type="submit">Add Workout</button>
        </form>
        </div>
        );
      }
      // debugger
}
 
export default connect(null, {addRoutineWorkout}) (NewRoutineWorkoutForm);