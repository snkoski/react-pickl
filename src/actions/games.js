import { FETCH_GAMES_START, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE, SELECT_GAME } from "./types";
import axios from 'axios';

export const fetchGamesStart = () => {
    return {
        type: FETCH_GAMES_START
    };
};

export const fetchGamesSuccess = (games) => {
    return {
        type: FETCH_GAMES_SUCCESS,
        allGames: games
    };
};

export const fetchGamesFailure = (error) => {
    return {
        type: FETCH_GAMES_FAILURE,
        error: error
    };
};

export const selectGame = (id) => {
    return {
        type: SELECT_GAME,
        id: id
    };
};

export const fetchTodaysGames = () => {
    return dispatch => {
        dispatch(fetchGamesStart());
        axios.get('http://54.225.49.92/games/today')
        .then(resp => {
            dispatch(fetchGamesSuccess(resp.data.games))
        })
        .catch(err => {
            dispatch(fetchGamesFailure(err.resp.data))
        })
    };
};
