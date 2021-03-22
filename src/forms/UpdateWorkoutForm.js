/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {Route, Switch} from 'react-router-dom'
import { TextField, MenuItem, Button, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';

import {updateWorkout} from '../actions/updateWorkout'
import StyledSubmitBtns from './StyledSubmitBtns'

class UpdateWorkoutForm extends Component {
    constructor(props) {
    super(props)
    this.currentPath = window.location.pathname
    this.id = (/\d{1,5}$/.exec(this.currentPath))[0]
    this.workout = this.props.workouts.find(workout => workout.id == this.id)
    this.state = {
        id: this.id
        ,
        workout_name: this.workout.workout_name,
        workout_type: this.workout.workout_type,
        distance: this.workout.distance,
        duration: this.workout.duration,
        routines: this.workout.routines
        }
    }

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateWorkout(this.state)
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

        const {classes} = this.props

        return (
            <Grid>
            {
                 this.props ?
                    <Box>
                        <form onSubmit={this.handleSubmit} id='update-workout-form'>

                            {/* <label> name: </label>
                            <input
                            type="text"
                            placeholder={this.props.detail.workout_name}
                            value={this.state.workout_name}
                            name="workout_name"
                            onChange={this.handleChange}/> */}

                            <label> </label>
                            <TextField
                                label="Name"
                                id="margin-none"
                                name="workout_name"
                                value={this.state.workout_name}
                                // defaultValue="Default Value"
                                onChange={this.handleChange}
                                // className={classes.textField}
                                // helperText="Some important text"
                                />

                            {/* <label> category: </label>
                            <input
                            type="text"
                            placeholder={this.props.detail.workout_type}
                            value={this.state.workout_type}
                            name="workout_type"
                            onChange={this.handleChange}/> */}

                            <label> </label>
                            <TextField
                                id="standard-select-currency"
                                select label="Type"
                                name="workout_type"
                                value={this.state.workout_type}
                                // placeholder={this.props.detail.workout_type}
                                // placeholder={this.props.detail.workout_type}
                                onChange={this.handleChange}
            >

            {workoutCategories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>

                            {/*
                            <label> distance </label>
                            <input
                            type="text"
                            placeholder={this.props.detail.distance}
                            value={this.state.distance}
                            name="distance"
                            onChange={this.handleChange}/> */}
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

                            {/* <input
                            type="text"
                            placeholder={this.props.detail.duration}
                            value={this.state.duration}
                            name="duration"
                            onChange={this.handleChange}/> */}
                           {/* <input
                            type="text"
                            placeholder={this.state.routines[0].routine_name}
                            // value={this.state.routines}
                            name="duration"
                            onChange={this.handleChange}/> */}

                            <Button 
                                className={classes.root}  type="submit">Update Exercise 
                            </Button>
                        </form>
                    </Box>
                    :
                    <p>NOTHING TO SEE HERE</p>

                }

        </Grid>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let workoutId
        window.location.href.includes('https://fe-workout-hero.herokuapp.com/workouts/') ?
            workoutId = parseInt(window.location.href.replace("https://fe-workout-hero.herokuapp.com/workouts/", "")) 
        : workoutId = parseInt(window.location.href.replace("http://localhost:3003/workouts/", "")
        )
    const currentWorkout = state.workoutsReducer.workouts.filter(
        workout => workout.id == workoutId
        )
// convert the above to a .find method so that you can remove the '[0]' from 'workout: currentWorkout[0]'. Filter returns an array while find returns the object.
  return { workouts: state.workoutsReducer.workouts,
           workout: currentWorkout[0]
 }
}

export default compose(connect(mapStateToProps, {updateWorkout},),withStyles(StyledSubmitBtns),) (UpdateWorkoutForm);