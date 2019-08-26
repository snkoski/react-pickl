import { combineReducers } from 'redux';
import userReducer from './userReducer';
import votesReducer from './votesReducer';
import teamsReducer from './teamsReducer';
import gamesReducer from './gamesReducer';
import commentsReducer from './commentsReducer';
import authReducer from './auth';
import numVotesReducer from './numVotesReducer';
import teamStatsReducer from './teamStatsReducer';

export default combineReducers({
  user: userReducer,
  votes: votesReducer,
  teams: teamsReducer,
  games: gamesReducer,
  comments: commentsReducer,
  auth: authReducer,
  numVotes: numVotesReducer,
  stats: teamStatsReducer,
});
