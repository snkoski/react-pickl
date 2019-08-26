import {
  FETCH_GAME_COMMENTS_START, FETCH_GAME_COMMENTS_SUCCESS, FETCH_GAME_COMMENTS_FAILURE, ADD_COMMENT, DELETE_GAME_COMMENT, EDIT_GAME_COMMENT,
} from '../actions/types';

const initialState = {
  comments: [],
  error: false,
  loading: false,
};

const fetchGameCommentsStart = (state, action) => ({ ...state, error: null, loading: true });

const fetchGameCommentsSuccess = (state, action) => ({
  ...state, comments: action.comments, error: null, loading: false,
});

const fetchGameCommentsFail = (state, action) => ({ ...state, error: action.error, loading: false });

const addGameComment = (state, action) => ({ ...state, comments: state.comments.concat(action.comment) });

const deleteGameComment = (state, action) => {
  let newCommentsState = state.comments.filter((comment) => comment.id !== action.comment.id);
  newCommentsState = newCommentsState.concat(action.comment);
  newCommentsState = newCommentsState.sort((a, b) => ((a.timestamp > b.timestamp) ? 1 : -1));
  return { ...state, comments: [...newCommentsState] };
};

const editGameComment = (state, action) => {
  let newCommentsState = state.comments.filter((comment) => comment.id !== action.comment.id);
  newCommentsState = newCommentsState.concat(action.comment);
  newCommentsState = newCommentsState.sort((a, b) => ((a.timestamp > b.timestamp) ? 1 : -1));
  return { ...state, comments: [...newCommentsState] };
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME_COMMENTS_START: return fetchGameCommentsStart(state, action);
    case FETCH_GAME_COMMENTS_SUCCESS: return fetchGameCommentsSuccess(state, action);
    case FETCH_GAME_COMMENTS_FAILURE: return fetchGameCommentsFail(state, action);
    case ADD_COMMENT: return addGameComment(state, action);
    case DELETE_GAME_COMMENT: return deleteGameComment(state, action);
    case EDIT_GAME_COMMENT: return editGameComment(state, action);
    default:
      return state;
  }
};

export default commentsReducer;
