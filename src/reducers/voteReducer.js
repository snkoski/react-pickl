import { FETCH_VOTES_START, FETCH_VOTES_SUCCESS, FETCH_VOTES_FAILURE, REMOVE_VOTES, NEW_VOTE } from '../actions/types';

export function votes(state = { loading: false, data: false }, action) {
    const { type, payload } = action
    switch (type) {
        case FETCH_VOTES_START:
            return { ...state, loading: true, data: false };
        case FETCH_VOTES_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_VOTES_FAILURE:
            return { ...state, loading: false, data: 'Error: could not load votes' }
        case REMOVE_VOTES:
            return { ...state, loading: false, data: false };
        case NEW_VOTE:
            return { ...state, loading: false, data: payload };
        default:
            return state;
    }
}