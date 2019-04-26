import { FETCH_GAMES_START, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE } from "../actions/types";

export function games(state = { loading: false, data: false }, action) {
    const { type, payload } = action
    switch (type) {
        case FETCH_GAMES_START:
            return { ...state, loading: true, data: false };
        case FETCH_GAMES_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_GAMES_FAILURE:
            return { ...state, loading: false, data: 'Error: could not fetch games' }
        default:
            return state;
    }
} 