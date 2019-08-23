import axios from 'axios';
import {
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
  SELECT_GAME,
} from './types';

export const fetchGamesStart = () => ({
  type: FETCH_GAMES_START,
});

export const fetchGamesSuccess = (games) => ({
  type: FETCH_GAMES_SUCCESS,
  allGames: games,
});

export const fetchGamesFailure = (error) => ({
  type: FETCH_GAMES_FAILURE,
  error,
});

export const selectGame = (id) => ({
  type: SELECT_GAME,
  id,
});

export const fetchTodaysGames = () => (dispatch) => {
  dispatch(fetchGamesStart());
  axios.get('http://54.225.49.92/games/today')
    .then((resp) => {
      dispatch(fetchGamesSuccess(resp.data.games));
    })
    .catch((err) => {
      dispatch(fetchGamesFailure(err.resp.data));
    });
};
