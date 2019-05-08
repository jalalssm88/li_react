import {CREATE_PHONE, GET_PHONE} from '../actions/types'

const initialState = {
    phones:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_PHONE:
            return{
                ...state,
                phones:[action.payload, ...state.phones]
            }
        case GET_PHONE:
            return{
                ...state,
                phones:action.payload
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