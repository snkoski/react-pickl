import { USER_REAUTH_SUCCESS, REMOVE_USER, FETCH_USER_STATS_START, FETCH_USER_STATS_SUCCESS, FETCH_USER_STATS_FAILURE } from './types';
import axios from 'axios';

export const userFetchReauthSuccess = (user) => {
    return {
        type: USER_REAUTH_SUCCESS,
         user: user
    };
};

export const userFetchData = (token) => {
    return dispatch => {
        axios.get('http://54.225.49.92/reauth', {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            .then(resp => {
                console.log("IN USER ACTION", resp)
                dispatch(userFetchReauthSuccess(resp.data.user))})
    };
};

export const removeUser = () => {
    return {
        type: REMOVE_USER
    };
};

export const fetchUserStatsStart = () => {
    return {
        type: FETCH_USER_STATS_START
    };
};

export const fetchUserStatsSuccess = (stats) => {
    return {
        type: FETCH_USER_STATS_SUCCESS,
        userStats: stats
    };
};

export const fetchUserStatsFailure = (error) => {
    return {
        type: FETCH_USER_STATS_FAILURE,
        error: error
    };
};

export const fetchUserStats = () => {
    return dispatch => {
        dispatch(fetchUserStatsStart());
        axios.get(`http://54.225.49.92/users/${localStorage.username}`)
        .then(resp => {
            console.log("IN USER STATS ACTION", resp)
            dispatch(fetchUserStatsSuccess(resp.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchUserStatsFailure(err))
        })
    };
};