import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
//import {Route, Switch, useLocation, withRouter} from 'react-router-dom'
// import { createBrowserHistory } from "history";
import {updateRoutine} from '../actions/updateRoutine'
import {routinesReducer} from '../reducers/routinesReducer'
import { TextField, MenuItem } from '@material-ui/core';

class UpdateRoutineForm extends Component {
    constructor(props) {
    super(props)
    this.currentUrl = window.location.href

    this.currentUrl.includes('https://fe-workout-hero.herokuapp.com/routines') ?
        this.id = parseInt(this.currentUrl.replace("https://fe-workout-hero.herokuapp.com/routines/", ""))
       :
        this.id = parseInt(window.location.href.replace("http://localhost:3003/routines/", ""))

       this.routine = this.props.routines.find(routine => routine.id == this.id)

    this.state = {
        id: this.id,
        routine_name: ""
        }
    }

        componentDidMount(){
        }

        loadRoutineInfo(){
        if (this.props.routines){
        }
        }

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateRoutine(this.state)
        this.setState({ routine_name: '' })
        }

        render() {
        return (
            <Fragment>
            {
                this.props.routines && this.props.routineToUpdate ?
                    <section>
                        {/* {this.routineInfo} */}
                        <form onSubmit={this.handleSubmit} id='update-routine-form'>

                            {/* <label> </label>
                            <input 
                            type="text" 
                            placeholder={this.props.routineToUpdate.routine_name} 
                            value={this.state.routine_name}
                            name="routine_name" 
                            onChange={this.handleChange}/> */}

                           <label> </label>
                            <TextField
                                label="Name"
                                id="margin-none"
                                name="routine_name" 
                                value={this.state.routine_name} 
                                // defaultValue="Default Value"
                                onChange={this.handleChange}
                                // className={classes.textField}
                                // helperText="Some important text"
                                />

                            <input 
                            type="text" 
                            hidden="true    "
                            value={this.id} 
                            name="id" 
                            readOnly
                            />
                            <button className='submit-btns' type="submit">Change Routine Name </button>
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
  let routineId
  window.location.href.includes('https://fe-workout-hero.herokuapp.com/routines/') ?
  routineId = parseInt(window.location.href.replace("https://fe-workout-hero.herokuapp.com/routines/", "")) : routineId = parseInt(window.location.href.replace("http://localhost:3003/routines/", ""))
   const currentRoutine = state.routinesReducer.routines.filter(routine => routine.id == routineId)

  return { routines: state.routinesReducer.routines,
        //    routine: [ownProps.routines.filter(routine => routine.id == routineId)]
           routine: currentRoutine[0]
 }
}

export default connect(mapStateToProps, {updateRoutine})(UpdateRoutineForm);