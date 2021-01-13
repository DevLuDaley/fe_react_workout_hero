import React, { Component, Fragment } from 'react'
import { connect, useState, useSelector } from 'react-redux'
import {Route, Switch} from 'react-router-dom'


import {addRoutine} from '../actions/addRoutine'
// import RoutinesList from '../components/RoutinesList'


const OldRoutineForm = () => {
    const [name, setName] = useState("");
    // const [itemName, setItemName] = useState("");

    const handleChange = (e) => {

        setName({
            [name]: e.target.value,
            [e.target.name]: e.target.value
        })
        // console.log('🚀 ~ file: NewRoutineForm.js ~ line 20 ~ NewRoutineForm ~ e.target.routine_name', e.target.routine_name);
        // console.log('🚀 ~ file: NewRoutineForm.js ~ line 20 ~ NewRoutineForm ~ e.target.name', e.target.name);
        // console.log('🚀 ~ file: NewRoutineForm.js ~ line 20 ~ NewRoutineForm ~ e.target.value', e.target.value);
        // console.log('NewRoutineForm -> e.target.image_url', e.target.image_url);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // debugger
        const routineInfo = {routine_name: name}
        // props.addRoutine(e.target.name)
        addRoutine(routineInfo)
        // alert(`${[this.state.name]} created!`)
        setName({
      routine_name: ''
      })
    }

// export default connect(mapStateToProps)(App);
    // render() {
        return (
        <Fragment>
        {/* <RoutinesList/> */}
            <form id='new-routine-form' onSubmit={handleSubmit}>

                <label> Routine Name: </label>
                <input type="text" placeholder='enter routine name...' value={name} name="routine_name" routine_name="blank" onChange={handleChange}/>

                <button type="submit">Create Routine</button>
            </form>
            {/* <DrillsContainer/>       */}
            {/* <Route exact path='/routines' render={(routerProps) => <RoutinesList {...routerProps} routines={this.props.routines}/>}/> */}
            {/* <RoutinesList/> */}
            {/* <RoutinesList props={this.props}/> */}
        </Fragment>
        );
    }
// }


export default connect(null, {addRoutine})(OldRoutineForm);
// ! doesn't need mapStateToProps
// ! doesn't need access to prop
//  ! doesn;t need to know what is currently in store...only responsible for adding new routine and updating

// ! instead of mapDispatchToProps we're calling {addRutine} and use the connect component