import {CREATE_USER, GET_USER} from '../actions/types'

const initialState = {
    users:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_USER:
            return{
                ...state,
                users:[action.payload, ...state.users]
            }
        case GET_USER:
            return{
                ...state,
                users:action.payload
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