import { AUTH_START, AUTH_FAILURE, AUTH_SUCCESS, AUTH_LOGOUT } from './types';
import axios from 'axios';

export const authStart = () => {
    return {
        type: AUTH_START
    };
};

export const authFail = (error) => {
    return {
        type: AUTH_FAILURE,
        error: error
    };
};

export const authSuccess = (token, userId, username) => {
    return {
        type: AUTH_SUCCESS,
        token: token,
        userId: userId,
        username: username
    };
};

export const login = (username, password) => {
    return dispatch => {
        dispatch(authStart()); 
        const loginData = {
            username: username,
            password: password
        };
        axios.post('http://54.225.49.92/login', loginData)
        .then(resp => {
            console.log("IN AUTH ACTION", resp)
            localStorage.setItem('token', resp.data.token);
            localStorage.setItem('userId', resp.data.user.id);
            localStorage.setItem('username', resp.data.user.username);
            dispatch(authSuccess(resp.data.token, resp.data.user.id, resp.data.user.username));
        })
        .catch(err => {
            dispatch(authFail(err));
        })
    };
};

export const register = (username, email, password, confirmPassword) => {
    return dispatch => {
        dispatch(authStart());
        const registerData = {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
        axios.post('http://54.225.49.92/users', registerData)
        .then(resp => {
                localStorage.setItem('token', resp.data.token);
                localStorage.setItem('userId', resp.data.user.id);
                dispatch(authSuccess(resp.data.token, resp.data.user.id, resp.data.user.username));
            })
            .catch(err => {
                dispatch(authFail(err));
            })
        };
    };
    
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    return {
        type: AUTH_LOGOUT,
    };
};
    
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout())
        } else {
            const userId = localStorage.getItem('userId');
            const username = localStorage.getItem('username');
            dispatch(authSuccess(token, userId, username))
        }
    }
}