import { combineReducers } from 'redux';
import { user } from './userReducer';
import votesReducer from './voteReducer';
import teamsReducer from './teamsReducer';
import gamesReducer from './gamesReducer';
import commentsReducer from './commentsReducer';
import authReducer from './auth';
export default combineReducers({
    user,
    votes: votesReducer,
    teams: teamsReducer,
    games: gamesReducer,
    comments: commentsReducer,
    auth: authReducer
})