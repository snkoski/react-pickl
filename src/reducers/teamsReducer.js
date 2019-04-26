import { FETCH_TEAMS_START, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_FAILURE } from "../actions/types";

export function teams(state = { loading: false, data: false }, action) {
    const { type, payload } = action
    switch (type) {
        case FETCH_TEAMS_START:
            return { ...state, loading: true, data: false };
        case FETCH_TEAMS_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_TEAMS_FAILURE:
            return { ...state, loading: false, data: 'Error: could not fetch teams' }
        default:
            return state;
    }
} 