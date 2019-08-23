import axios from 'axios';
import {
  FETCH_TEAMS_START,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
} from './types';

export const fetchTeamsStart = () => ({
  type: FETCH_TEAMS_START,
});

export const fetchTeamsSuccess = (teams) => ({
  type: FETCH_TEAMS_SUCCESS,
  teams,
});

export const fetchTeamsFailure = (error) => ({
  type: FETCH_TEAMS_FAILURE,
  error,
});

export const fetchTeams = () => (dispatch) => {
  dispatch(fetchTeamsStart());

  axios.get('http://54.225.49.92/teamz')
    .then((resp) => {
      dispatch(fetchTeamsSuccess(resp.data.teams));
    })
    .catch((err) => {
      dispatch(fetchTeamsFailure(err));
    });
};
