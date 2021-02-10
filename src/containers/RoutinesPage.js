import React, { Component } from 'react'
// import fetchRoutines from '../actions/fetchRoutines'
import RoutinesList from '../components/RoutinesList';
import NewRoutineForm from '../forms/NewRoutineForm';
// import OldRoutineForm from '../forms/OldRoutineForm';
// import Routine from '../components/Routine';


class RoutinesPage extends Component {
    constructor() {
        // console.log('🚀 ~ file: RoutinesPage.js ~ line 11 ~ RoutinesPage ~ constructor ~ props', props);
        super()
        this.state = {routines: [], workouts: []}
    }



    //   componentDidMount(){
    //     // this.props.fetchRoutines()
    // }
  render() { 
            return (
            <>
                {/* <OldRoutineForm routines={this.props.routines}/> */}

                <NewRoutineForm />

                <RoutinesList />

                {/* <Routine/> */}
                {/* {console.log('🚀 ~ file: RoutinesPage.js ~ line 26 ~ RoutinesPage ~ render ~ this.props', this.props)}
                {console.log('🚀 ~ file: RoutinesPage.js ~ line 26 ~ RoutinesPage ~ render ~ this.state', this.state)} */}
            </>
            );
    }
}
 
export default RoutinesPage;