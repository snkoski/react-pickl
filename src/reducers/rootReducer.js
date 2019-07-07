import { combineReducers } from 'redux';
import { user } from './userReducer';
import votesReducer from './votesReducer';
import teamsReducer from './teamsReducer';
import gamesReducer from './gamesReducer';
import commentsReducer from './commentsReducer';
import authReducer from './auth';
import numVotesReducer from './numVotesReducer';
export default combineReducers({
    user,
    votes: votesReducer,
    teams: teamsReducer,
    games: gamesReducer,
    comments: commentsReducer,
    auth: authReducer,
    numVotes: numVotesReducer
})