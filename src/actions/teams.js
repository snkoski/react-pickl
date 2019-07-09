import { FETCH_TEAMS_START, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_FAILURE } from "./types";
import axios from 'axios';

export const fetchTeamsStart = () => {
    return {
        type: FETCH_TEAMS_START
    };
};

export const fetchTeamsSuccess = (teams) => {
    return {
        type: FETCH_TEAMS_SUCCESS,
        teams: teams
    };
};

export const fetchTeamsFailure = (error) => {
    return {
        type: FETCH_TEAMS_FAILURE,
        error: error
    };
};

export const fetchTeams = () => {
    return dispatch => {
        dispatch(fetchTeamsStart());

        axios.get('http://54.225.49.92/teamz')
        .then(resp => {
            dispatch(fetchTeamsSuccess(resp.data.teams))
        })
        .catch(err => {
            dispatch(fetchTeamsFailure(err))})
    };
};
