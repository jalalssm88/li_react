import {CREATE_AGENCY, GET_AGENCY} from '../actions/types'

const initialState = {
    agencies:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_AGENCY:
            return{
                ...state,
                agencies:[action.payload, ...state.agencies]
            }
        case GET_AGENCY:
            return{
                ...state,
                agencies:action.payload
            }
        // case DELETE_PARENT:
        // console.log('DELETE PARENT', action.payload)
        //     return{
        //         ...state,
        //         parents: state.parents.filter(parent=> parent._id !== action.payload)
        //     }
        default:
            return{
                ...state
            }
    }
}