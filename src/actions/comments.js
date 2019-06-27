
 import { FETCH_GAME_COMMENTS_START, FETCH_GAME_COMMENTS_SUCCESS, FETCH_GAME_COMMENTS_FAILURE, ADD_COMMENT, DELETE_COMMENT } from './types';
 import axios from 'axios';

 export const fetchGameCommentsStart = () => {
     return {
         type: FETCH_GAME_COMMENTS_START
     }
 }

 export const fetchGameCommentsSuccess = (data) => {
    return {
        type: FETCH_GAME_COMMENTS_SUCCESS,
        payload: data
    }
}

 export const fetchGameCommentsFailure = () => {
    return {
        type: FETCH_GAME_COMMENTS_FAILURE
    }
 }

 export const fetchGameComments = (id) => {
     return dispatch => {
         dispatch(fetchGameCommentsStart())

         axios.get(`http://54.225.49.92/comments/games/${id}`)
         .then(resp => dispatch(fetchGameCommentsSuccess(resp.data.comments)))
         .catch(e => dispatch(fetchGameCommentsFailure()))
     }
 }

 export const addComment = comment => {
     console.log("IN ADD ACTION", comment)
     return {
        type: ADD_COMMENT,
        payload: comment
     }
 }
 export const postComment = (comment) => {
     console.log("POST", comment)
    return dispatch => {
        axios.post('http://54.225.49.92/comments', {
            user_id: comment.user,
            game_id: comment.game,
            content: comment.content
        }, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        .then(resp => dispatch(addComment(resp.data.comment)))
        .catch(e => console.log("POST ERROR", e))
    }
 }

 export const deleteComment = comment => {
     return {
         type: DELETE_COMMENT,
         payload: comment
     }
 }

 export const patchDeleteComment = id => {
     return dispatch => {
        axios.patch(`http://54.225.49.92/comments/delete/${id}`, {}, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        .then(resp => dispatch(deleteComment(resp.data.comment)))
        .catch(e => console.log("PATCH ERROR", e))
     }
 }