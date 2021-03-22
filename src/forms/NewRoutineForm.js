import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { TextField, MenuItem, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';

import {addRoutine} from '../actions/addRoutine'
import StyledSubmitBtns from './StyledSubmitBtns'
// import clsx from 'clsx';
// import { makesStyles} from '@material-ui/core/styles';

class NewRoutineForm extends Component {
    constructor(props){
    super(props)
    this.state = {
        routine_name:''
    }
}

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        var shouldCreate = confirm('To create this routine press \'OK\'. Otherwise press \'Cancel\'');
      // setConfirmOpen(true)  
      if (shouldCreate) {
        this.props.addRoutine(this.state)
    }

        this.setState({ 
            name: ''
        })
        // console.log('🚀 ~ file: NewRoutineForm.js ~ line 23 ~ NewRoutineForm ~ this.state', this.state)
    }

    render() {

// const classes = useStyles();
const {classes} = this.props

        return (
        <Fragment>
            <form id='new-routine-form' onSubmit={this.handleSubmit}>

                {/* <label> Routine Name: </label>
                <input type="text" placeholder='enter routine name...' value={this.state.name} name="routine_name" routine_name="blank" onChange={this.handleChange}/> */}

                <label> </label>
                <TextField
                    label="Routine Name"
                    style={{
                        color: "red", backgroundColor: "lightcoral"}}
                    id="margin-none"
                    value={this.state.name} 
                    name="routine_name" 
                    onChange={this.handleChange}
                    />
                <Button  
                    className={classes.root}
                    type="submit" 
                    >
                    Create Routine
                </Button>
            </form>
        </Fragment>
        );
    }
}

// export default connect(null, {addRoutine})(NewRoutineForm);
export default compose(connect(null, {addRoutine},), withStyles(StyledSubmitBtns),)(NewRoutineForm);