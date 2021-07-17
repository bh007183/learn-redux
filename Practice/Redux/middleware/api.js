import * as actions from "../placeholder"
import axios from "axios"
export const api = ({dispatch}) => next => async action => {
    if(action.type !== actions.Placeholder.type) return next(action)
    next(action)
    const {url, method, headers, data, onSuccess, onError} = action.payload
    try{
        const response =  await axios.request({
            url,
            method,
            headers,
            data,
            onSuccess,
            onError
        })
        dispatch(actions.Placeholder(response.data))
        if(onSuccess)dispatch({type: onSuccess, payload: response.data})

    }catch(error){
        dispatch(actions.Placeholder(error.response))
        if(onError)dispatch({type: onError, payload: error.response})

    }

}