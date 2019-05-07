import {combineReducers} from 'redux';
import agencyReducer from './agencyReducer';
import userReducer from './userReducer';

export default combineReducers({
    agency:agencyReducer,
    user:userReducer
})