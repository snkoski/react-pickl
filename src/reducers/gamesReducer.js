import {
  FETCH_GAMES_START, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE, SELECT_GAME,
} from '../actions/types';

const initialState = {
  allGames: null,
  selectedGame: null,
  error: null,
  loading: false,
};

const gamesFetchStart = (state, action) => ({ ...state, error: null, loading: true });

const gamesFetchSuccess = (state, action) => ({
  ...state, allGames: action.allGames, error: null, loading: false,
});

const gamesFetchFail = (state, action) => ({ ...state, error: action.error, loading: false });

const selectGame = (state, action) => {
  const foundGame = state.allGames.filter((game) => game.id === action.id);
  return { ...state, selectedGame: foundGame };
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_START: return gamesFetchStart(state, action);
    case FETCH_GAMES_SUCCESS: return gamesFetchSuccess(state, action);
    case FETCH_GAMES_FAILURE: return gamesFetchFail(state, action);
    case SELECT_GAME: return selectGame(state, action);
    default:
      return state;
  }
};

export default gamesReducer;
