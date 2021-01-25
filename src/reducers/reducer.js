import { combineReducers } from 'redux';
import routinesReducer from './routinesReducer'
import workoutsReducer from './workoutsReducer'

const rootReducer = combineReducers({
    routinesReducer, workoutsReducer
})

export default rootReducer