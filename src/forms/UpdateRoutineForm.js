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
    this.currentUrl = window.location.href

    // console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 14 ~ UpdateRoutineForm ~ constructor ~ this.currentUrl', this.currentUrl);

    this.currentUrl.includes('https://fe-workout-hero.herokuapp.com/routines') ?
        this.id = parseInt(this.currentUrl.replace("https://fe-workout-hero.herokuapp.com/routines/", ""))
       :
        this.id = parseInt(window.location.href.replace("http://localhost:3003/routines/", ""))
       
        // console.log("Deployed1?", parseInt(this.currentUrl.includes('https://fe-workout-hero.herokuapp.com/routines')));

        // console.log("Deployed2?", this.currentUrl.includes('https://fe-workout-hero.herokuapp.com/routines'));

        // console.log("Local?", this.currentUrl.includes('http://localhost:3003/routines/'));

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
                {/* {console.log("~ line 66", "THIS.PROPS", this.props)} */}
                {/* {console.log("~ line 66", "THIS.STATE", this.state)} */}
                {/* { console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 67 ~ UpdateRoutineForm ~ render ~ this.routine', this.routine)} */}
                {/* { console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 68 ~ UpdateRoutineForm ~ render ~ this.routine.routine_name', this.routine.routine_name)} */}
                {/* { console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 69 ~ UpdateRoutineForm ~ render ~ this.props.routineToUpdate', this.props.routineToUpdate)} */}

                {/* {console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 94 ~ UpdateRoutineForm ~ render ~ this.routine.routine_name', this.routine.routine_name)} */}

                {/* {console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 94 ~ UpdateRoutineForm ~ render ~ this.state.routine_name', this.state.routine_name)} */}
            {
                this.props.routines && this.props.routineToUpdate ?
                    <section>
                        {/* {this.routineInfo} */}
                        <form onSubmit={this.handleSubmit} id='update-routine-form'>
                            
                            <label> </label>
                            <input 
                            type="text" 
                            placeholder={this.props.routineToUpdate.routine_name} 
                            value={this.state.routine_name}
                            name="routine_name" 
                            onChange={this.handleChange}/>

                            <input 
                            type="text" 
                            hidden="true    "
                            value={this.id} 
                            name="id" 
                                readOnly
                            />

                            <button type="submit">Change Routine Name </button>
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