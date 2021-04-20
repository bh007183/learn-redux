import axios from "axios"
import {apiCallBegan} from "../api"


const api = ({dispatch}) => next => async action => {
    if(action.type !== apiCallBegan.type) return next(action)
    next(action)
    const {url, method, data, onSuccess, onError} = action.payload
    
try{
    const response = await axios.request({
        baseURL: 'http://localhost:3001/api',
        url,
        method,
        data
    })
    //General
    dispatch(action.apiCallSuccess(response.data))
    //specific
    if(onSuccess)dispatch({type: onSuccess, payload: response.data})

}catch(error){
    //general
dispatch(action.apiCallFailed(error))
//specific
if(onError)dispatch({type: onError, payload: error})

}
   

}
export default api