import { USER_REAUTH, USER_REAUTH_SUCCESS, REMOVE_USER } from './types';
import axios from 'axios';

export const userFetchReauthSuccess = (user) => {
    return {
        type: USER_REAUTH_SUCCESS,
         user: user
    }
}

export const userFetchData = (token) => {
    return(dispatch) => {
        axios.get('http://54.225.49.92/reauth', {
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
