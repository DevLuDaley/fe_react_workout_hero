import React, { Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom'

import { Container } from '@material-ui/core';


import RoutinesContainer from './RoutinesContainer'
import WorkoutsContainer from './WorkoutsContainer'


class MainContainer extends Component {
    constructor(props) {
        super(props);
        // this.fetchRoutines = fetchRoutines
        console.log('🚀 ~ file: MainContainer.js ~ line 24 ~ MainContainer ~ CONSTRUCTOR ~ props', this.props);
        // this.state = {routines: []}
    }
    // componentDidMount(){
    //     // this.props.fetchRoutines()
    //     // console.log('THIS.PROPS 1', this.props)
    //     // console.log('THIS.STATE', this.state)
    //     // this.fetchRoutines()
    // }
    render() { 
        return (
            <Container maxWidth="md">
                {/* <Navbar/> */}

                <RoutinesContainer routines={this.props.routines}/>
                {/* <Footer id="footer"/> */}
                {/* ROUTINES CONTAINER */}
                    {/* <Switch>
                        <Route exact path='/' component={HomePage}/>
                    </Switch> */}
                <WorkoutsContainer routines={this.props.workouts}/>
                {/* WORKOUTS CONTAINER */}
            </Container> );
            
            
            // console.log('MainContainer -> render -> this.props.routines', this.props.routines);
    }
}
export default MainContainer;
// export default connect(null)(MainContainer);
// export default connect(mapStateToProps, {fetchRoutines})(MainContainer);
