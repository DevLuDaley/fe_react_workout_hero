import React, { Component } from 'react';
import {connect} from 'react-redux'
import { TextField, MenuItem } from '@material-ui/core';

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
              const workoutCategories = [
                {
                    value: 'Cardio',
                    label: 'Cardio',
                },
                {
                    value: 'Weight-Lifting',
                    label: 'Weight-Lifting',
                },
                {
                    value: 'Body-Weight',
                    label: 'Body-Weight',
                },
                {
                    value: 'Cardio-Lifting',
                    label: 'Cardio-Lifting',
                },
                    ];

        return (  
          <div>
        <form onSubmit={this.handleSubmit} id="new-routine-workout-form">
              {/* <input type="hidden" placeholder='' value={this.state.id} name="id" onChange={this.handleChange}/> */}

            {/* <label>Name: </label> 
              <input 
              type="text" 
              placeholder='enter name...' 
              value={this.state.workout_name} name="workout_name" 
              onChange={this.handleChange}/> */}

            <label> </label>
              <TextField
                label="Name"
                id="margin-none"
                value={this.state.workout_name} name="workout_name" 
                onChange={this.handleChange}/>

            {/* <label>Workout Type: </label> 
              <input type="text" placeholder='enter type...' value={this.state.workout_type} name="workout_type" onChange={this.handleChange}/> */}

            <label> </label>
              <TextField
                id="standard-select-currency"
                select label="Type"
                name="workout_type"
                value={this.state.workout_type}
                onChange={this.handleChange}
            >
            {workoutCategories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>


            {/* <label> Distance: </label> 
              <input type="text" placeholder='enter distance...' value={this.state.distance} name="distance" onChange={this.handleChange}/>
              
            <label> Duration: </label> 
              <input type="text" placeholder='enter duration...' value={this.state.duration} name="duration" onChange={this.handleChange}/> */}
<label> </label>
                            <TextField
                                id="outlined-number"
                                label="Miles"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="distance" 
                                // placeholder={this.props.detail.distance} 
                                value={this.state.distance}
                                onChange={this.handleChange}
                                />

                            <label> </label>
                            <TextField
                                id="outlined-number"
                                label="Minutes"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="duration" 
                                // placeholder={this.props.detail.duration} 
                                value={this.state.duration}
                                onChange={this.handleChange}
                                />
 

                <button className='submit-btns' type="submit">Add Workout</button>
        </form>
        </div>
        );
      }
      // debugger
}
 
export default connect(null, {addRoutineWorkout}) (NewRoutineWorkoutForm);