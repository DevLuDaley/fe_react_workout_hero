import React, { Component } from 'react'
// import fetchRoutines from '../actions/fetchRoutines'
import RoutinesList from '../components/RoutinesList';
import NewRoutineForm from '../forms/NewRoutineForm';
// import OldRoutineForm from '../forms/OldRoutineForm';
// import Routine from '../components/Routine';
// import '../App.css'


class RoutinesPage extends Component {
    constructor(props) {
        console.log('🚀 ~ file: RoutinesPage.js ~ line 11 ~ RoutinesPage ~ constructor ~ props', props);
        super(props)
        this.state = {routines: [], workouts: []}
    }



    //   componentDidMount(){
    //     // this.props.fetchRoutines()
    // }
  render() { 
            return (
            <>
                {/* <OldRoutineForm routines={this.props.routines}/> */}
<section id="comp-routines-page">
    
                    <NewRoutineForm routines={this.props.routines}/>
    {
                        this.props.routines && this.props.workouts ?
    
    <section id="routines-list">
                        <RoutinesList routines={this.props.routines} workouts={this.props.workouts}/>
    
    </section> 
                    : null 
    }
</section>
                {/* <Routine/> */}
                {console.log('🚀 ~ file: RoutinesPage.js ~ line 26 ~ RoutinesPage ~ render ~ this.props', this.props)}
                {console.log('🚀 ~ file: RoutinesPage.js ~ line 26 ~ RoutinesPage ~ render ~ this.state', this.state)}
            </>
            );
    }
}
 
export default RoutinesPage;