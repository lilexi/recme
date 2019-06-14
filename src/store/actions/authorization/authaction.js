import axios from 'axios';
import * as authTypes from '../actionTypes/authTypes'


const signUPStareted = () =>{
  return{
      type: authTypes.SIGNUP_START
  }
};
const signUPFailed = (err) =>{
    return{
        type: authTypes.SIGNUP_FAILED,
        err
    }
};
const signUPSuccess = (data) =>{
    return{
        type: authTypes.SIGNUP_SUCCESS,
        data
    }
};


export const signup = (userData) => {
    return dispatch => {
        dispatch(signUPStareted())  ;
        axios.post('http://localhost:3001/signup', userData).then(res => {
            dispatch(signUPSuccess(res.data));
        }).catch(err => {
            dispatch(signUPFailed(err));
        })
    }
};