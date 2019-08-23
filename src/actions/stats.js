import axios from 'axios';
import {
  FETCH_GAME_TEAM_STATS_START,
  FETCH_GAME_TEAM_STATS_SUCCESS,
  FETCH_GAME_TEAM_STATS_FAILURE,
} from './types';

export const fetchGameTeamsStatsStart = () => ({
  type: FETCH_GAME_TEAM_STATS_START,
});

export const fetchGameTeamsStatsSuccess = (data) => ({
  type: FETCH_GAME_TEAM_STATS_SUCCESS,
  data,
});

export const fetchGameTeamsStatsFailure = (error) => ({
  type: FETCH_GAME_TEAM_STATS_FAILURE,
  error,
});

export const fetchGameTeamStats = (id) => (dispatch) => {
  dispatch(fetchGameTeamsStatsStart());

  axios.get(`http://54.225.49.92/stats/games/${id}`)
    .then((resp) => {
      console.log('IN action', resp.data);
      dispatch(fetchGameTeamsStatsSuccess(resp.data));
    })
    .catch((err) => {
      dispatch(fetchGameTeamsStatsFailure(err));
    });
};
