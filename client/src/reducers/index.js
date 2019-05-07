import {combineReducers} from 'redux';
import agencyReducer from './agencyReducer'

export default combineReducers({
    agency:agencyReducer,
})