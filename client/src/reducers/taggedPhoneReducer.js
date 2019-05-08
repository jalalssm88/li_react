import {CREATE_TAGGED, GET_TAGGED} from '../actions/types'

const initialState = {
    tagged_phone:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_TAGGED:
            return{
                ...state,
                tagged_phone:[action.payload, ...state.tagged_phone]
            }
        case GET_TAGGED:
            return{
                ...state,
                tagged_phone:action.payload
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