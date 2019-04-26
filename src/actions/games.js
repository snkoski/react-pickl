import { FETCH_GAMES_START, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE } from "./types";
import axios from 'axios';

export const fetchGamesStart = () => {
    return {
        type: FETCH_GAMES_START
    }
}

export const fetchGamesSuccess = (data) => {
    return {
        type: FETCH_GAMES_SUCCESS,
        payload: data
    }
}

export const fetchGamesFailure = () => {
    return {
        type: FETCH_GAMES_FAILURE
    }
}

export const fetchGames = () => {
    return dispatch => {
        dispatch(fetchGamesStart())

        axios.get('http://localhost:5000/api/games/today')
        .then(resp => dispatch(fetchGamesSuccess(resp.data.game)))
        .catch(e => dispatch(fetchGamesFailure()))
    }
}
