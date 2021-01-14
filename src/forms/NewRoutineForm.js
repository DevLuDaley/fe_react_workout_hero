import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {addRoutine} from '../actions/addRoutine'
// import RoutinesList from '../components/RoutinesList'

class NewRoutineForm extends Component {
    state = {
        routine_name:''
    }

    handleChange = (e) => {
        // e.target.value
        // console.log('NewRoutineForm -> e.target.value', e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log('🚀 ~ file: NewRoutineForm.js ~ line 20 ~ NewRoutineForm ~ e.target.routine_name', e.target.routine_name);
        console.log('🚀 ~ file: NewRoutineForm.js ~ line 20 ~ NewRoutineForm ~ e.target.name', e.target.name);
        console.log('🚀 ~ file: NewRoutineForm.js ~ line 20 ~ NewRoutineForm ~ e.target.value', e.target.value);
        // console.log('NewRoutineForm -> e.target.image_url', e.target.image_url);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // debugger
        this.props.addRoutine(this.state)
        // alert(`${[this.state.name]} created!`)
        this.setState({ 
        name: ''
    })
    }

// export default connect(mapStateToProps)(App);
    render() {
        return (
        <Fragment>
        {/* <RoutinesList/> */}
            <form id='new-routine-form' onSubmit={this.handleSubmit}>

                <label> Routine Name: </label>
                <input type="text" placeholder='enter routine name...' value={this.state.name} name="routine_name" routine_name="blank" onChange={this.handleChange}/>

                <button type="submit">Create Routine</button>
            </form>
            {/* <DrillsContainer/>       */}
            {/* <Route exact path='/routines' render={(routerProps) => <RoutinesList {...routerProps} routines={this.props.routines}/>}/> */}
            {/* <RoutinesList/> */}
            {/* <RoutinesList props={this.props}/> */}
        </Fragment>
        );
    }
}


export default connect(null, {addRoutine})(NewRoutineForm);
// ! doesn't need mapStateToProps
// ! doesn't need access to prop
//  ! doesn;t need to know what is currently in store...only responsible for adding new routine and updating

// ! instead of mapDispatchToProps we're calling {addRutine} and use the connect component