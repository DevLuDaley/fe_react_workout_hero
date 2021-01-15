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
    // this.routines = this.props.routines
    // this.id = parseInt(window.location.href.replace("http://localhost:3001/routines/", ""))
    // this.id = parseInt(window.location.href.replace("http://localhost:3003/routines/", ""))
    this.id = parseInt(window.location.href.includes('heroku')) ?
        parseInt(window.location.href.replace("https://fe-workout-hero.herokuapp.com/routines/", ""))
       :
        parseInt(window.location.href.replace("http://localhost:3003/routines/", ""))
    this.routine = this.props.routines.find(routine => routine.id == this.id)
    // this.reducer = routinesReducer

    this.state = {
        // routine:this.routine
        // id: parseInt(window.location.href.replace("http://localhost:3001/routines/", "")),
        // id: this.props.routineToUpdate.id,
        id: this.id,
        // routine_name: this.props.routineToUpdate.routine_name,
        routine_name: ""
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
        // debugger
        // console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 87 ~ UpdateRoutineForm ~ this.state', this.state);
        this.props.updateRoutine(this.state)
        // console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 87 ~ UpdateRoutineForm ~ this.state---after submitted to <updateRoutine/>', this.state);
        // alert(`${[this.state.name]} created!`)

        // this.selectedRoutine = {}
        // console.log("YO LINE 67 this.routinesReducer data", this.routinesReducer.state);
        // console.log("YO LINE 67 this.reducer data", this.reducer);
        // console.log("YO LINE 67 this.reducer data", this.reducer.state);
        // console.log("YO LINE 67 this.routinesReducer data", this.routinesReducer.case);
        // console.log("YO LINE 68 this.routineToUpdate", this.props.routineToUpdate);
        this.setState({
            // routine_name: '',
            routine_name: ''
        })
        }
        // handlePlaceholder = (e) => {
        // // console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 78 ~ UpdateRoutineForm ~ e', e)
        //     // this.state.routine_name
        //     // "WORDS"
        //     // !this.state.routine_name ? this.state.routine_name : this.routine.routine_name
        //     // console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 80 ~ UpdateRoutineForm ~ this.routine.routine_name FINALLY', this.routine.routine_name);
        //     // if ( this.routine.routine_name && this.routine.routine_name !== this.state.routine_name) {
        //         // return
        //         // console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 81 ~ UpdateRoutineForm ~ this.state.routine_name', this.state.routine_name);
        //         // this.state.routine_name
        //     // }

        //     // else {
        //     // return
        //     // this.routine.routine_name
        //         // {console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 81 ~ UpdateRoutineForm ~ this.routine.routine_name', this.routine.routine_name)
        //     // }
        //         // this.state.routine_name

        //         // {this.routine.routine_name}
        //     }

// export default connect(mapStateToProps)(App);
    render() {
        // this.loadRoutines
        return (
            <Fragment>
                {/* {console.log("THIS.PROPS", this.props)} */}
                {/* { console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 136 ~ UpdateRoutineForm ~ render ~ this.routine.routine_name', this.routine.routine_name)} */}

                {/* {console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 94 ~ UpdateRoutineForm ~ render ~ this.routine.routine_name', this.routine.routine_name)} */}

                {/* {console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 94 ~ UpdateRoutineForm ~ render ~ this.state.routine_name', this.state.routine_name)} */}
            {
                this.props.routines ?
                    <section>
                        {/* {this.routineInfo} */}
                        <form onSubmit={this.handleSubmit} id='update-routine-form'>
                            <label> Routine Name: </label>
                            <input type="text" placeholder={this.state.routine_name == this.props.routine.routine_name ? this.routine.routine_name : this.props.routine.routine_name} value={this.state.routine_name} name="routine_name" onChange={this.handleChange}/>

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
//   const { routines } = state
  const routineId = parseInt(window.location.href.replace("http://localhost:3003/routines/", ""))
//   console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 143 ~ UpdateRoutineForm ~ mapStateToProps ~ routineId', routineId);
  const currentRoutine = state.routinesReducer.routines.filter(routine => routine.id == routineId)
//   console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 146 ~ UpdateRoutineForm ~ mapStateToProps ~ state.routinesReducer.routines.filter(routine => routine.id == routineId)', currentRoutine[0]);
  return { routines: state.routinesReducer.routines,
           routine: currentRoutine[0]
 }
}


export default connect(mapStateToProps, {updateRoutine})(UpdateRoutineForm);