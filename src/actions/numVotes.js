import { FETCH_NUM_VOTES_START, FETCH_NUM_VOTES_SUCCESS, FETCH_NUM_VOTES_FAILURE, ADD_NUM_VOTE, EDIT_NUM_VOTE } from './types';
import axios from 'axios';

export const fetchNumVotesStart = () => {
    return {
        type: FETCH_NUM_VOTES_START
    };
};

export const fetchNumVotesSuccess = (numVotes) => {
    return {
        type: FETCH_NUM_VOTES_SUCCESS, 
        numVotes: numVotes
    };
};

export const fetchNumVotesFailure = (error) => {
    return {
        type: FETCH_NUM_VOTES_FAILURE,
        error: error
    };
};
    
export const fetchNumVotes = () => {
    return dispatch => {
        dispatch(fetchNumVotesStart());
        axios.get('http://54.225.49.92/votes/teams/today')
        .then(resp => {
            dispatch(fetchNumVotesSuccess(resp.data.num_votes))})
        .catch(err => dispatch(fetchNumVotesFailure(err)))
    };
};

export const addNumVote = (vote) => {
    return {
        type: ADD_NUM_VOTE,
        vote: vote
    };
};

export const editNumVote = (vote) => {
    return {
        type: EDIT_NUM_VOTE,
        vote: vote
    };
};