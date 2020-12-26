import React, { Component } from 'react'
// import fetchRoutines from '../actions/fetchRoutines'
import RoutinesList from '../components/RoutinesList';
// import NewRoutineForm from '../forms/NewRoutineForm';


class RoutinesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {routines: []}
    }

    
    //   componentDidMount(){
        //     // this.props.fetchRoutines()
        // }
        render() { 
            return (<>
                {console.log(this.props)}
        <p> Routines Page</p>
        {/* <NewRoutineForm routines={this.props.routines}/> */}
        <RoutinesList routines={this.props.routines}/>
         </>  );
    }
}
 
export default RoutinesPage;