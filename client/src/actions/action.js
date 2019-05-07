import {CREATE_AGENCY, GET_AGENCY, CREATE_USER, GET_USER} from './types'
import axios from 'axios';


export const createAgency = (agencyData) => dispatch=> {
    axios.post('/agency/create', agencyData).then(res=> dispatch({
        type:CREATE_AGENCY,
        payload:res.data
    }))
}
export const getAgency = ()=> dispatch=>{
    axios.get('/agency/list').then(res=> dispatch({
        type:GET_AGENCY,
        payload:res.data
    }))
}

export const createUser = (userData, history) => dispatch=> {
    axios.post('/user/create', userData).then(res=> dispatch({
        type:CREATE_USER,
        payload:res.data
    })).then(res=> history.push('/user/list'))
}
export const getUser = ()=> dispatch=>{
    axios.get('/user/list').then(res=> dispatch({
        type:GET_USER,
        payload:res.data
    }))
}