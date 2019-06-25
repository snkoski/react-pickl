import { FETCH_GAME_COMMENTS_START, FETCH_GAME_COMMENTS_SUCCESS, FETCH_GAME_COMMENTS_FAILURE } from "../actions/types";

export function comments(state = { loading: false, data: false }, action) {
    const { type, payload } = action
    switch (type) {
        case FETCH_GAME_COMMENTS_START:
            return { ...state, loading: true, data: false };
        case FETCH_GAME_COMMENTS_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_GAME_COMMENTS_FAILURE:
            return { ...state, loading: false, data: 'Error: could not fetch comments' }
        default:
            return state;
    }
} 