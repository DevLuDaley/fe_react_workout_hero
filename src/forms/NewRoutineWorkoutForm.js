import React, { Component } from 'react';
import {connect} from 'react-redux'
// import { TextField, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'; //} from '@material-ui/core';


import {addRoutineWorkout} from '../actions/addRoutineWorkout'

class NewRoutineWorkoutForm extends Component {
  constructor(props) {
    super(props)

    const currentPath = window.location.pathname
    const routineId = (/\d{1,5}/.exec(currentPath))[0]
        
    this.state = {
      // routine:{routineId},
      // id: '',
      routineId: routineId,
      workout_name: "",
      workout_type: "",
      distance: "",
      duration: ""//,
      // routines: []
      }

  }

    handleChange = (e)=> {
        // console.log(e.target);
        // console.log('🚀 ~ file: NewRoutineWorkoutForm.js ~ line 30 ~ NewRoutineWorkoutForm ~ e.target.value', e.target.value)
        // console.log('🚀 ~ file: NewRoutineWorkoutForm.js ~ line 30 ~ NewRoutineWorkoutForm ~ e.target.name', e.target.name)

        // const currentPath = window.location.pathname
        // const routineId = (/\d{1,5}/.exec(currentPath))[0]
        // //  this.routineString = (/\d{1,5}$/.exec(currentPath))
         this.setState({
            [e.target.name]: e.target.value,
            // id: this.props.currentRoutine['id']
            // [e.target.drill_name]: e.target.value,
            // [e.target.reps]: e.target.reps,
            // [e.target.sets]: e.target.sets
          }
        )
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        console.log('🚀 ~ file: NewRoutineWorkoutForm.js ~ line 37 ~ NewRoutineWorkoutForm ~ this.state', this.state)
        this.props.addRoutineWorkout(this.state)
        
            this.setState({
      
      
              // id: '',
      routineId: '',
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
                // input type="text" 
                label="Name"
                id="margin-none"
                name="workout_name" 
                value={this.state.workout_name} 
                onChange={this.handleChange}/>

            {/* <label>Workout Type: </label> 
              <input type="text" placeholder='enter type...' value={this.state.workout_type} name="workout_type" onChange={this.handleChange}/> */}

            <label> </label>
              <TextField
                // input type="text" 
                select label="Type"
                id="standard-select-currency"
                name="workout_type"
                value={this.state.workout_type}
                onChange={this.handleChange}
            >
            {workoutCategories.map((option) => (
                <MenuItem 
                  key={option.value} 
                  value={option.value}>
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
                    // input type="text" 
                    label="Miles"
                    id="outlined-number"
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
                    // input type="text" 
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