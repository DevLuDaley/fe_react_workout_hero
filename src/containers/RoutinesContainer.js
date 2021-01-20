import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchRoutines} from '../actions/fetchRoutines'
import RoutinesPage from './RoutinesPage';
import Routine from '../components/Routine'
// import UpdateRoutinePage from '../components/UpdateRoutinePage'
// import UpdateRoutineForm from '../forms/UpdateRoutineForm'
import HomePage from '../components/HomePage'
// import Home from '../components/Home'

// import {fetchRoutines} from '../actions/fetchRoutines'
// import NewRoutineForm from '../components/NewRoutineForm'
// import RoutinesList from '../components/RoutinesList'
// import NewRoutinesContainer from '../containers/NewRoutinesContainer'


class RoutinesContainer extends Component {
    constructor(props) {
        super(props);
        this.fetchRoutines = fetchRoutines
        this.state = {routines: []}
    }
    componentDidMount(){
        // console.log('THIS.PROPS 1', this.props)
        // this.fetchRoutines()
        this.props.fetchRoutines()
    }
    render() {
        return (
            <Fragment>
            {/* <p> Routines Container</p> */}
            <Switch>
            <Route exact path='/' render={(routerProps) => <RoutinesPage {...routerProps} routines={this.props.routines} rando="words"/>}/>

            <Route path='/routines/:id' render={(routerProps) => <Routine {...routerProps} routines={this.props.routines}
             />}/>
             
            {/* <Route exact path='/' component={HomePage}/> */}

            <Route exact path='/routines' render={(routerProps) => <RoutinesPage {...routerProps} routines={this.props.routines} rando="words"/>}/>

            {/* <Route exact path='/routines/new' render={(routerProps) => <NewRoutinesContainer {...routerProps} routines={this.props.routines}/>}/> */}


            {/* <Route exact path='/routiney' render={(routerProps) => <UpdateRoutineForm {...routerProps} routines={this.props.routines}
             />}/> */}

            {/* <Route exact path='/routines/:id/edit' render={(routerProps) => <UpdateRoutinePage {...routerProps} routines={this.props.routines}
             />}/> */}

            </Switch>
        </Fragment> );


            // console.log('RoutinesContainer -> render -> this.props.routines', this.props.routines);
    }
}
 
//! redux store
const mapStateToProps = state => {
    return(
        {
            routines: state.routinesReducer.routines,
            // recipes: state.recipesReducer.recipes
        }
    )
}
 
export default connect(mapStateToProps, {fetchRoutines})(RoutinesContainer);