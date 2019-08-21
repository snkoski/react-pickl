import { FETCH_GAME_TEAM_STATS_START, FETCH_GAME_TEAM_STATS_SUCCESS, FETCH_GAME_TEAM_STATS_FAILURE } from './types';
import axios from 'axios';

export const fetchGameTeamsStatsStart = () => {
    return {
        type: FETCH_GAME_TEAM_STATS_START
    };
};

export const fetchGameTeamsStatsSuccess = (data) => {
    return {
        type: FETCH_GAME_TEAM_STATS_SUCCESS,
        data: data
    };
};

export const fetchGameTeamsStatsFailure = (error) => {
    return {
        type: FETCH_GAME_TEAM_STATS_FAILURE,
        error: error
    };
};

export const fetchGameTeamStats = (id) => {
    return dispatch => {
        dispatch(fetchGameTeamsStatsStart());

        axios.get(`http://54.225.49.92/stats/games/${id}`)
        .then(resp => {
            console.log("IN action", resp.data)
            dispatch(fetchGameTeamsStatsSuccess(resp.data))
        })
        .catch(err => {
            dispatch(fetchGameTeamsStatsFailure(err))
        })
    };
};