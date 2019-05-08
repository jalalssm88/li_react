import {combineReducers} from 'redux';
import agencyReducer from './agencyReducer';
import userReducer from './userReducer';
import phoneReducer from './phoneReducer';
import taggedPhoneReducer from './taggedPhoneReducer'

export default combineReducers({
    agency:agencyReducer,
    user:userReducer,
    phone:phoneReducer,
    tagged:taggedPhoneReducer
})