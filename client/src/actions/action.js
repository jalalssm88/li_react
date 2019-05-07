import {CREATE_AGENCY, GET_AGENCY} from './types'
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