import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
//import {Route, Switch, useLocation, withRouter} from 'react-router-dom'
// import { createBrowserHistory } from "history";
import {updateRoutine} from '../actions/updateRoutine'
import {routinesReducer} from '../reducers/routinesReducer'


class UpdateRoutineForm extends Component {
    constructor(props) {
    super(props)
    this.id = parseInt(window.location.href.includes('heroku')) ?
    parseInt(window.location.href.replace("https://fe-workout-hero.herokuapp.com/routines/", ""))
       :
       parseInt(window.location.href.replace("http://localhost:3003/routines/", ""))
       this.routine = this.props.routines.find(routine => routine.id == this.id)
       // this.routines = this.props.routines
       // this.id = parseInt(window.location.href.replace("http://localhost:3001/routines/", ""))
       // this.id = parseInt(window.location.href.replace("http://localhost:3003/routines/", ""))

    this.state = {
        id: this.id,
        routine_name: ""
        // routine:this.routine
        // id: parseInt(window.location.href.replace("http://localhost:3001/routines/", "")),
        // id: this.props.routineToUpdate.id,
        // routine_name: this.props.routineToUpdate.routine_name,
        // routine_name: this.routine.routine_name
        }
        // this.loadRoutineInfo = this.loadRoutineInfo.bind(this)
    }

        componentDidMount(){
            // this.loadRoutineInfo()
        }

        loadRoutineInfo(){
        // console.log('HARLEM SON1')
        if (this.props.routines){
            // var routineId = parseInt(window.location.href.replace("http://localhost:3001/routines/", ""))
            // ! this.routine = this.props.routines.find(routine => routine.id == this.id);

        }
        }

    // this.id = parseInt(window.location.href.replace("http://localhost:3001/routines/", ""))
    // this.routinesList = this.props.routines
    // this.routine = [this.props.routines].find(routine => routine.id == this.id)

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
                {/* {console.log("THIS.PROPS", this.props)} */}
                {/* { console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 136 ~ UpdateRoutineForm ~ render ~ this.routine.routine_name', this.routine.routine_name)} */}

                {/* {console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 94 ~ UpdateRoutineForm ~ render ~ this.routine.routine_name', this.routine.routine_name)} */}

                {/* {console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 94 ~ UpdateRoutineForm ~ render ~ this.state.routine_name', this.state.routine_name)} */}
            {
                this.props.routines && this.state ?
                    <section>
                        {/* {this.routineInfo} */}
                        <form onSubmit={this.handleSubmit} id='update-routine-form'>
                            <label> Routine Name: </label>
                            <input 
                            type="text" 
                            placeholder={this.props.routine.routine_name} 
                            // placeholder={this.state.routine_name == this.props.routine.routine_name ? this.routine.routine_name : this.props.routine.routine_name} 
                            
                            value={this.state.routine_name} 
                            name="routine_name" 
                            onChange={this.handleChange}/>

                            <button type="submit">Update Routine </button>
                        </form>
                    </section>
                    :
                    <p>NOTHING TO SEE HERE</p>

                }

        </Fragment>
        );
    }
}

function mapStateToProps(state) {
  const routineId = parseInt(window.location.href.replace("http://localhost:3003/routines/", ""))
  const currentRoutine = state.routinesReducer.routines.filter(routine => routine.id == routineId)

  return { routines: state.routinesReducer.routines,
           routine: currentRoutine[0]
 }
}

export default connect(mapStateToProps, {updateRoutine})(UpdateRoutineForm);