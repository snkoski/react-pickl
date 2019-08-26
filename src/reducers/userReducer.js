import {
  USER_REAUTH_SUCCESS, REMOVE_USER, FETCH_USER_STATS_START, FETCH_USER_STATS_SUCCESS, FETCH_USER_STATS_FAILURE,
} from '../actions/types';

const initialState = {
  user: null,
  stats: null,
  error: null,
  loading: false,
};

const fetchUserSuccess = (state, action) => ({
  ...state, user: action.user, error: null, loading: false,
});

const removeUser = (state, action) => {
  localStorage.removeItem('token');
  return {};
};

const userStatsFetchStart = (state, action) => ({ ...state, error: null, loading: true });

const userStatsFetchSuccess = (state, action) => ({
  ...state, stats: action.userStats, error: null, loading: false,
});

const userStatsFetchFail = (state, action) => ({ ...state, error: action.error, loading: false });

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REAUTH_SUCCESS: return fetchUserSuccess(state, action);
    case REMOVE_USER: return removeUser(state, action);
    case FETCH_USER_STATS_START: return userStatsFetchStart(state, action);
    case FETCH_USER_STATS_SUCCESS: return userStatsFetchSuccess(state, action);
    case FETCH_USER_STATS_FAILURE: return userStatsFetchFail(state, action);
    default:
      return state;
  }
};

export default userReducer;
