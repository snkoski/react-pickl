import { FETCH_TEAMS_START, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_FAILURE } from "./types";
import axios from 'axios';

export const fetchTeamsStart = () => {
    return {
        type: FETCH_TEAMS_START
    }
}

export const fetchTeamsSuccess = (data) => {
    return {
        type: FETCH_TEAMS_SUCCESS,
        payload: data
    }
}

export const fetchTeamsFailure = () => {
    return {
        type: FETCH_TEAMS_FAILURE
    }
}

export const fetchTeams = () => {
    return dispatch => {
        dispatch(fetchTeamsStart())

        axios.get('http://localhost:5000/api/teams')
        .then(resp => dispatch(fetchTeamsSuccess(resp.data.team)))
        .catch(e => dispatch(fetchTeamsFailure()))
    }
}
