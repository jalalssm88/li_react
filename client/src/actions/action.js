import {CREATE_AGENCY, GET_AGENCY, CREATE_USER, GET_USER, CREATE_PHONE, GET_PHONE, CREATE_TAGGED, GET_TAGGED} from './types'
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


export const createPhone = (phoneData) => dispatch=> {
    axios.post('/phone/create', phoneData).then(res=> dispatch({
        type:CREATE_PHONE,
        payload:res.data
    }))
}
export const getPhone = ()=> dispatch=>{
    axios.get('/phone/list').then(res=> dispatch({
        type:GET_PHONE,
        payload:res.data
    }))
}


export const createTagged = (taggedData) => dispatch=> {
    axios.post('/tagged/create', taggedData).then(res=> dispatch({
        type:CREATE_TAGGED,
        payload:res.data
    }))
}
export const getTagged = ()=> dispatch=>{
    axios.get('/tagged/list').then(res=> dispatch({
        type:GET_TAGGED,
        payload:res.data
    }))
}