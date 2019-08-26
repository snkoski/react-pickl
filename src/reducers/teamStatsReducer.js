import { FETCH_GAME_TEAM_STATS_START, FETCH_GAME_TEAM_STATS_SUCCESS, FETCH_GAME_TEAM_STATS_FAILURE } from '../actions/types';

const initialState = {
  home: null,
  away: null,
  error: null,
  loading: false,
};

const fetchGameTeamStatsStart = (state, action) => ({ ...state, error: null, loading: true });

const fetchGameTeamStatsSuccess = (state, action) => {
  console.log('IN SUCCESS', action);
  return {
    ...state, home: action.data.home, away: action.data.away, error: null, loading: false,
  };
};

const fetchGameTeamStatsFail = (state, action) => ({ ...state, error: action.error, loading: false });

const teamStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME_TEAM_STATS_START: return fetchGameTeamStatsStart(state, action);
    case FETCH_GAME_TEAM_STATS_SUCCESS: return fetchGameTeamStatsSuccess(state, action);
    case FETCH_GAME_TEAM_STATS_FAILURE: return fetchGameTeamStatsFail(state, action);
    default:
      return state;
  }
};
export default teamStatsReducer;
