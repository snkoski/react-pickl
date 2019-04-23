import { combineReducers } from 'redux';
import authReducer from './authReducer';
import voteReducer from './voteReducer';

export default combineReducers({
    authReducer,
    voteReducer
})