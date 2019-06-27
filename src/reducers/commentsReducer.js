import { FETCH_GAME_COMMENTS_START, FETCH_GAME_COMMENTS_SUCCESS, FETCH_GAME_COMMENTS_FAILURE, ADD_COMMENT, DELETE_COMMENT } from "../actions/types";

export function comments(state = { loading: false, data: false }, action) {
    const { type, payload } = action
    switch (type) {
        case FETCH_GAME_COMMENTS_START:
            console.log("START")
            return { ...state, loading: true, data: false };
        case FETCH_GAME_COMMENTS_SUCCESS:
            console.log("SUCCESS")
            return { ...state, loading: false, data: payload };
        case FETCH_GAME_COMMENTS_FAILURE:
            return { ...state, loading: false, data: 'Error: could not fetch comments' };
        case ADD_COMMENT:
            console.log("ADD COMMENT REDUCER")
            return {...state, data: [...state.data, payload]};
        case DELETE_COMMENT:
            let newDataState = state.data.filter(comment => {
                console.log("IN FILTER", comment)
                return comment.id !== payload.id
            })
            newDataState.push(payload)
            let hmmm = newDataState.sort((a, b) => {
                return (a.timestamp > b.timestamp) ? 1 : -1
            })
            return {...state, data:[...hmmm]}
        default:
            console.log("DEFAULT")
            return state;
    }
} 