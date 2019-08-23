
import axios from 'axios';
import {
  FETCH_GAME_COMMENTS_START,
  FETCH_GAME_COMMENTS_SUCCESS,
  FETCH_GAME_COMMENTS_FAILURE,
  ADD_COMMENT,
  DELETE_GAME_COMMENT,
  EDIT_GAME_COMMENT,
} from './types';

export const fetchGameCommentsStart = () => ({
  type: FETCH_GAME_COMMENTS_START,
});

export const fetchGameCommentsSuccess = (comments) => ({
  type: FETCH_GAME_COMMENTS_SUCCESS,
  comments,
});

export const fetchGameCommentsFailure = (error) => ({
  type: FETCH_GAME_COMMENTS_FAILURE,
  error,
});

export const fetchGameComments = (id) => (dispatch) => {
  dispatch(fetchGameCommentsStart());

  axios.get(`http://54.225.49.92/comments/games/${id}`)
    .then((resp) => dispatch(fetchGameCommentsSuccess(resp.data.comments)))
    .catch((err) => dispatch(fetchGameCommentsFailure(err)));
};

export const addGameComment = (comment) => ({
  type: ADD_COMMENT,
  comment,
});
export const postGameComment = (comment) => (dispatch) => {
  axios.post('http://54.225.49.92/comments', {
    user_id: comment.user,
    game_id: comment.game,
    content: comment.content,
  }, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  })
    .then((resp) => {
      dispatch(addGameComment(resp.data.comment));
    })
    .catch((err) => console.log('GAME POST ERROR', err));
};

export const deleteGameComment = (comment) => ({
  type: DELETE_GAME_COMMENT,
  comment,
});

export const patchDeleteGameComment = (id) => (dispatch) => {
  axios.patch(`http://54.225.49.92/comments/delete/${id}`, {}, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  })
    .then((resp) => {
      dispatch(deleteGameComment(resp.data.comment));
    })
    .catch((err) => console.log('DELETE GAME COMMENT ERROR', err));
};

export const editGameComment = (comment) => ({
  type: EDIT_GAME_COMMENT,
  comment,
});

export const patchEditGameComment = (id, comment) => (dispatch) => {
  axios.patch(`http://54.225.49.92/comments/edit/${id}`, {
    content: comment.content,
    user_id: comment.user_id,
    game_id: comment.game_id,
  }, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  })
    .then((resp) => dispatch(editGameComment(resp.data.comment)))
    .catch((err) => console.log('EDIT GAME COMMENT ERROR', err));
};
