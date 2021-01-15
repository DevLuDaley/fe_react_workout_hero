import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
//import {Route, Switch, useLocation, withRouter} from 'react-router-dom'
// import { createBrowserHistory } from "history";
import {updateRoutine} from '../actions/updateRoutine'
// import Routine from '../components/Routine'
// import RoutineList from '../components/RoutineList'
// import {addRoutine} from '../actions/addRoutine'
// import RoutinesList from '../components/RoutinesList'


class UpdateRoutineForm extends Component {
    constructor(props) {
    super(props)
    // this.routines = this.props.routines
    // this.id = parseInt(window.location.href.replace("http://localhost:3001/routines/", ""))
    this.id = parseInt(window.location.href.replace("http://localhost:3003/routines/", ""))

    this.state = {
        // routine:this.routine
        // id: parseInt(window.location.href.replace("http://localhost:3001/routines/", "")),
        id: this.id,
        name:'',
        category:'',
        url:'',
        image_url:'',
        cooking_time:''
        }
        // this.loadRoutineInfo = this.loadRoutineInfo.bind(this)
    }

        componentDidMount(){
            this.loadRoutineInfo()
        }
    loadRoutineInfo(){
        // console.log('HARLEM SON1')
        if (this.props.routines){
            
            console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 55 ~ UpdateRoutineForm ~ componentDidMount ~ this.props.routines', this.props.routines);

            // console.log('HARLEM SON2')
            // var routineId = parseInt(window.location.href.replace("http://localhost:3001/routines/", ""))

            // var routine = this.props.routines.filter(routine => routine.id == routineId)
            this.routine = this.props.routines.find(routine => routine.id == this.id);
            console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 46 ~ UpdateRoutineForm ~ loadRoutineInfo ~ this.id', this.id);
            console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 47 ~ UpdateRoutineForm ~ loadRoutineInfo ~ this.routine', this.routine);
            this.array = ["words from line 49"]
            this.routineInfo = (
                <div>
                    <form id='update-routine-form' onSubmit={console.log("SUBMITTED")}>
                        <label> Routine Name:</label>
                            <input type="text" placeholder={this.routine.name} value={this.props.name} name="name" onChange={console.log("CHANGED")}/>
                        <label> Routine Category:</label> 
                            <input type="text" placeholder={this.routine.category} value={this.props.category} name="category" onChange={console.log("CHANGED")}/>
                        <label> Routine Url:</label> 
                            <input type="text" placeholder={this.routine.url} value={this.props.url} name="url" onChange={console.log("CHANGED")}/>
                        <label> Routine Image Url:</label> 
                            <input type="text" placeholder={this.routine.image_url} value={this.props.image_url} name="image_url" onChange={console.log("CHANGED")}/>
                        <label> Routine Cooking Time:</label> 
                            <input type="text" placeholder={this.routine.cooking_time} value={this.props.cooking_time} name="cooking_time" onChange={console.log("CHANGED")}/>
                                <button type="submit">Update Routine</button>
                            {/* {console.log('NewRoutineForm -> render -> this.state.image_url', this.state.image_url)}
            console.log('🚀 ~ file: UpdateRoutineForm.js ~ line 72 ~ UpdateRoutineForm ~ assignAndUpdateFields ~ this.routine', this.routine);
                            {console.log('NewRoutineForm -> render -> this.state.category', this.state.category)} */}
                    </form>  
                    </div>
                    )

        }
    }

    // this.id = parseInt(window.location.href.replace("http://localhost:3001/routines/", ""))
    // this.routinesList = this.props.routines
    // this.routine = [this.props.routines].find(routine => routine.id == this.id)
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.category]: e.target.value,
            [e.target.url]: e.target.value,
            [e.target.image_url]: e.target.value,
            [e.target.cooking_time]: e.target.value
        })
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        // debugger
        this.props.updateRoutine(this.state)
        // alert(`${[this.state.name]} created!`)
        this.setState({
            name: '',
            category: '',
            url: '',
            image_url: '',
            cooking_time: ''
        })
    }

// export default connect(mapStateToProps)(App);
    render() {
        // this.loadRoutines
        return (
        <Fragment>
                {console.log("ROOOT", this.props)}
                {this.array}
                {console.log("ROOOT", this.array)}
            {
                this.props.routines ?
                    <section> 
                        routineInfo will go here 
                        {this.routineInfo}
                    </section> 
                    : 
                    <p>NOTHING TO SEE HERE</p> 
                }
        {/* <RoutinesList/> */}

            {/* NewRoutineForm */}
           
            {/* <DrillsContainer/>       */}
            {/* <Route exact path='/routines' render={(routerProps) => <RoutinesList {...routerProps} routines={this.props.routines}/>}/> */}
            {/* <RoutinesList/> */}
            {/* <RoutinesList props={this.props}/> */}
        </Fragment>  
        );
    }
}


export default connect(null, {updateRoutine})(UpdateRoutineForm);
// ! doesn't need mapStateToProps
// ! doesn't need access to prop
//  ! doesn;t need to know what is currently in store...only responsible for adding new routine and updating

// ! instead of mapDispatchToProps we're calling {addRutine} and use the connect component