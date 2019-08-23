import axios from 'axios';
import {
  AUTH_START,
  AUTH_FAILURE,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
} from './types';

export const authStart = () => ({
  type: AUTH_START,
});

export const authFail = (error) => ({
  type: AUTH_FAILURE,
  error,
});

export const authSuccess = (token, userId, username) => ({
  type: AUTH_SUCCESS,
  token,
  userId,
  username,
});

export const login = (username, password) => (dispatch) => {
  dispatch(authStart());
  const loginData = {
    username,
    password,
  };
  axios.post('http://54.225.49.92/login', loginData)
    .then((resp) => {
      console.log('IN AUTH ACTION', resp);
      localStorage.setItem('token', resp.data.token);
      localStorage.setItem('userId', resp.data.user.id);
      localStorage.setItem('username', resp.data.user.username);
      dispatch(authSuccess(resp.data.token, resp.data.user.id, resp.data.user.username));
    })
    .catch((err) => {
      dispatch(authFail(err));
    });
};

export const register = (username, email, password, confirmPassword) => (dispatch) => {
  dispatch(authStart());
  const registerData = {
    username,
    email,
    password,
    confirmPassword,
  };
  axios.post('http://54.225.49.92/users', registerData)
    .then((resp) => {
      localStorage.setItem('token', resp.data.token);
      localStorage.setItem('userId', resp.data.user.id);
      dispatch(authSuccess(resp.data.token, resp.data.user.id, resp.data.user.username));
    })
    .catch((err) => {
      dispatch(authFail(err));
    });
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('username');
  return {
    type: AUTH_LOGOUT,
  };
};

export const authCheckState = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(logout());
  } else {
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    dispatch(authSuccess(token, userId, username));
  }
};
