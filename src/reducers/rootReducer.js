import { combineReducers } from 'redux';
import authReducer from './authReducer';
// import voteReducer from './voteReducer';
// import apiReducer from './apiReducer';
import { user } from './userReducer';
import { votes } from './voteReducer';
import { teams } from './teamsReducer';
import { games } from './gamesReducer'
export default combineReducers({
    authReducer,
    // voteReducer,
    // apiReducer,
    user,
    votes,
    teams,
    games
})