import React, { Component } from 'react'

import Container from '@material-ui/core/Container';


import RoutinesList from '../components/RoutinesList';
import NewRoutineForm from '../forms/NewRoutineForm';
// import Popup from 'reactjs-popup';
import ModalNewRoutineForm from '../forms/ModalNewRoutineForm'
import 'reactjs-popup/dist/index.css';


class RoutinesPage extends Component {
    constructor(props) {
        // console.log('🚀 ~ file: RoutinesPage.js ~ line 11 ~ RoutinesPage ~ constructor ~ props', props);
        super(props)
        this.state = {routines: [], workouts: []}
    }

  render() {
            return (
            <>
                {/* <OldRoutineForm routines={this.props.routines}/> */}
        <Container maxWidth="lg" id="comp-routines-page">
            <ModalNewRoutineForm/>
        {/* <Popup
            trigger={
                <button> Trigger</button>
                }
            position="left center"
            >
                <div>
                <NewRoutineForm routines={this.props.routines}/>
                </div>
        </Popup> */}

            {/* <NewRoutineForm routines={this.props.routines}/> */}
        {
            this.props.routines && this.props.workouts ?
                <Container maxWidth="lg" id="routines-list">
                    <RoutinesList routines={this.props.routines} workouts={this.props.workouts}/>
                </Container>
            : null
        }
        </Container>
            </>
            );
    }
}
export default RoutinesPage;