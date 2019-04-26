import { USER_REAUTH, USER_REAUTH_SUCCESS, REMOVE_USER } from './types';
import axios from 'axios';

export const userFetchReauthSuccess = (user) => {
    return {
        type: USER_REAUTH_SUCCESS,
         user: user
    }
}

export const userFetchData = (token) => {
    console.log("IN FETCH ACTION")
    return(dispatch) => {
        axios.get('http://localhost:5000/api/reauth', {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            .then(resp => dispatch(userFetchReauthSuccess(resp.data.user)))
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}
