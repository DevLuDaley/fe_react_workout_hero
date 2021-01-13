import React, { Component } from 'react'
// import fetchRoutines from '../actions/fetchRoutines'
import RoutinesList from '../components/RoutinesList';
import NewRoutineForm from '../forms/NewRoutineForm';
import OldRoutineForm from '../forms/OldRoutineForm';


class RoutinesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    //   componentDidMount(){
    //     // this.props.fetchRoutines()
    // }
  render() { 
            return (
            <>
                {/* <OldRoutineForm routines={this.props.routines}/> */}
                <NewRoutineForm routines={this.props.routines}/>
                <RoutinesList routines={this.props.routines}/>
            </>
            );
    }
}
 
export default RoutinesPage;