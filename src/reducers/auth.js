import * as actionTypes from '../actions/types';

const initialState = {
  token: null,
  userId: null,
  username: null,
  error: null,
  loading: false,
};

const authStart = (state, action) => ({ ...state, error: null, loading: true });

const authSuccess = (state, action) => ({
  ...state, token: action.token, userId: action.userId, username: action.username, error: null, loading: false,
});

const authFail = (state, action) => ({ ...state, error: action.error, loading: false });

const authLogout = (state, action) => ({
  ...state, token: null, userId: null, username: null,
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAILURE: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    default:
      return state;
  }
};

export default authReducer;
