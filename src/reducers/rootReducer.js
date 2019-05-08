import { combineReducers } from 'redux';
import { user } from './userReducer';
import { votes } from './voteReducer';
import { teams } from './teamsReducer';
import { games } from './gamesReducer'
export default combineReducers({
    user,
    votes,
    teams,
    games
})