import React, { Fragment,  useState } from 'react'
import { connect } from 'react-redux'

import {addRoutine} from '../actions/addRoutine'

const OldRoutineForm = () => {
    const [routine_name, setRoutineName] = useState("") //;
    // const [itemName, setItemName] = useState("");

    const handleChange = (e) => {

        setRoutineName({
            [routine_name]: e.target.value,
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
        const routineInfo = {routine_name: routine_name}
        // props.addRoutine(e.target.name)
        addRoutine(routineInfo)
        // alert(`${[this.state.name]} created!`)
        setRoutineName({
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
                <input type="text" placeholder='enter routine name...' value={routine_name} name="routine_name" routine_name="blank" onChange={handleChange}/>

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