import axios from 'axios';
import {
  USER_REAUTH_SUCCESS,
  REMOVE_USER,
  FETCH_USER_STATS_START,
  FETCH_USER_STATS_SUCCESS,
  FETCH_USER_STATS_FAILURE,
} from './types';

export const userFetchReauthSuccess = (user) => ({
  type: USER_REAUTH_SUCCESS,
  user,
});

export const userFetchData = (token) => (dispatch) => {
  axios.get('http://54.225.49.92/reauth', {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((resp) => {
      console.log('IN USER ACTION', resp);
      dispatch(userFetchReauthSuccess(resp.data.user));
    });
};

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const fetchUserStatsStart = () => ({
  type: FETCH_USER_STATS_START,
});

export const fetchUserStatsSuccess = (stats) => ({
  type: FETCH_USER_STATS_SUCCESS,
  userStats: stats,
});

export const fetchUserStatsFailure = (error) => ({
  type: FETCH_USER_STATS_FAILURE,
  error,
});

export const fetchUserStats = () => (dispatch) => {
  dispatch(fetchUserStatsStart());
  axios.get(`http://54.225.49.92/users/${localStorage.username}`)
    .then((resp) => {
      console.log('IN USER STATS ACTION', resp);
      dispatch(fetchUserStatsSuccess(resp.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(fetchUserStatsFailure(err));
    });
};
