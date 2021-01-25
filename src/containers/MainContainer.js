import React, { Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom'
// import {connect} from 'react-redux'
// import './MainContainer.css';
// import {fetchRoutines} from '../actions/fetchRoutines'
// import RoutinesPage from './RoutinesPage';
// import Routine from '../components/Routine'
// import UpdateRoutinePage from '../components/UpdateRoutinePage'
// import Navbar from  '../components/Navbar'
// import Footer from '../components/Footer'
// import HomePage from '../components/HomePage'
import RoutinesContainer from './RoutinesContainer'
import WorkoutsContainer from './WorkoutsContainer'
// import RecipesContainer from './RecipesContainer'
// import Home from '../components/Home'
// import {fetchRoutines} from '../actions/fetchRoutines'
// import NewRoutineForm from '../components/NewRoutineForm'
// import RoutinesList from '../components/RoutinesList'
// import NewMainContainer from '../containers/NewMainContainer'

class MainContainer extends Component {
    // constructor(props) {
    //     super(props);
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
            <Fragment>
                {/* <Navbar/> */}
                    {/* <Switch>
                        <Route exact path='/' component={HomePage}/>
                    </Switch> */}
                <WorkoutsContainer routines={this.props.workouts}/>

                <RoutinesContainer routines={this.props.routines}/>
                {/* <Footer id="footer"/> */}
            </Fragment> );
            
            
            // console.log('MainContainer -> render -> this.props.routines', this.props.routines);
    }
}
 
//! redux store
// const mapStateToProps = state => {
//     console.log('state.routines', state.routines);
//     return(
//         {
//             routines: state.routines
//         }
//     )
// }

 
export default MainContainer;
// export default connect(null)(MainContainer);
// export default connect(mapStateToProps, {fetchRoutines})(MainContainer);
