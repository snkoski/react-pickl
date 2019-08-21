import { FETCH_TEAMS_START, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_FAILURE } from '../actions/types';

const initialState = {
    teams: null,
    error: null,
    loading: false
}

const fetchTeamsStart = (state, action) => {
    return { ...state, error: null, loading: true };
};

const fetchTeamsSuccess = (state, action) => {
    return { ...state, teams: action.teams, error: null, loading: false };
};

const fetchTeamsFail = (state, action) => {
    return { ...state, error: action.error, loading: false };
};

const teamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEAMS_START: return fetchTeamsStart(state, action);
        case FETCH_TEAMS_SUCCESS: return fetchTeamsSuccess(state, action);
        case FETCH_TEAMS_FAILURE: return fetchTeamsFail(state, action);
        default:
            return state;
    }
} 

export default teamsReducer;