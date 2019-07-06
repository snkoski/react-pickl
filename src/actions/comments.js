
 import { FETCH_GAME_COMMENTS_START, FETCH_GAME_COMMENTS_SUCCESS, FETCH_GAME_COMMENTS_FAILURE, ADD_COMMENT, DELETE_GAME_COMMENT, EDIT_GAME_COMMENT } from './types';
 import axios from 'axios';

 export const fetchGameCommentsStart = () => {
     return {
         type: FETCH_GAME_COMMENTS_START
     };
 };

 export const fetchGameCommentsSuccess = (comments) => {
    return {
        type: FETCH_GAME_COMMENTS_SUCCESS,
        comments: comments
    };
};

 export const fetchGameCommentsFailure = (error) => {
    return {
        type: FETCH_GAME_COMMENTS_FAILURE,
        error: error
    };
 };

 export const fetchGameComments = (id) => {
     return dispatch => {
         dispatch(fetchGameCommentsStart());

         axios.get(`http://54.225.49.92/comments/games/${id}`)
         .then(resp => dispatch(fetchGameCommentsSuccess(resp.data.comments)))
         .catch(err => dispatch(fetchGameCommentsFailure(err)))
     };
 };

 export const addGameComment = (comment) => {
     return {
        type: ADD_COMMENT,
        comment: comment
     };
 };
 export const postGameComment = (comment) => {
     console.log("POST", comment)
    return dispatch => {
        axios.post('http://54.225.49.92/comments', {
            user_id: comment.user,
            game_id: comment.game,
            content: comment.content
        }, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        .then(resp => {
            console.log(resp);
            dispatch(addGameComment(resp.data.comment))})
        .catch(err => console.log("GAME POST ERROR", err))
    };
 };

 export const deleteGameComment = (comment) => {
     return {
         type: DELETE_GAME_COMMENT,
         comment: comment
     };
 };

 export const patchDeleteGameComment = (id) => {
    return dispatch => {
        axios.patch(`http://54.225.49.92/comments/delete/${id}`, {}, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        .then(resp => {
            console.log("PATCH DELETe", resp)
            dispatch(deleteGameComment(resp.data.comment))})
        .catch(err => console.log("DELETE GAME COMMENT ERROR", err))
    };
};

export const editGameComment = (comment) => {
    return {
        type: EDIT_GAME_COMMENT,
        comment: comment
    };
};

export const patchEditGameComment = (id, comment) => {
    return dispatch => {
        axios.patch(`http://54.225.49.92/comments/edit/${id}`, {
            content: comment.content,
            user_id: comment.user_id,
            game_id: comment.game_id
        }, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        .then(resp => dispatch(editGameComment(resp.data.comment)))
        .catch(err => console.log("EDIT GAME COMMENT ERROR", err))
    };
};