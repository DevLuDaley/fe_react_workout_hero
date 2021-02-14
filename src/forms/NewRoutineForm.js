import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { TextField, MenuItem } from '@material-ui/core';

import {addRoutine} from '../actions/addRoutine'


class NewRoutineForm extends Component {
    state = {
        routine_name:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addRoutine(this.state)
        this.setState({ 
        name: ''
    })
    }

    render() {
        return (
        <Fragment>
            <form id='new-routine-form' onSubmit={this.handleSubmit}>

                {/* <label> Routine Name: </label>
                <input type="text" placeholder='enter routine name...' value={this.state.name} name="routine_name" routine_name="blank" onChange={this.handleChange}/> */}

 <label> </label>
              <TextField
                label="Name"
                id="margin-none"
                value={this.state.name} 
                // name="routine_name" 
                onChange={this.handleChange}/>
                <button className='submit-btns' type="submit">Create Routine</button>
            </form>
        </Fragment>
        );
    }
}

export default connect(null, {addRoutine})(NewRoutineForm);