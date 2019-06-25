
 import { FETCH_GAME_COMMENTS_START, FETCH_GAME_COMMENTS_SUCCESS, FETCH_GAME_COMMENTS_FAILURE } from './types';
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