import { FETCH_VOTES_START, FETCH_VOTES_SUCCESS, FETCH_VOTES_FAILURE, REMOVE_VOTES, NEW_VOTE, EDIT_VOTE } from './types';
import axios from 'axios';

export const fetchVotesStart = () => {
    return {
        type: FETCH_VOTES_START
    };
};

export const fetchVotesSuccess = (votes) => {
    return {
        type: FETCH_VOTES_SUCCESS, 
        votes: votes
    };
};

export const fetchVotesFailure = (error) => {
    return {
        type: FETCH_VOTES_FAILURE,
        error: error
    };
};

export const fetchVotes = (id) => {
    return dispatch => {
        dispatch(fetchVotesStart());
        console.log("FETCH VOTE START", id)
        axios.get(`http://54.225.49.92/votes/${id}/today`, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        .then(resp => dispatch(fetchVotesSuccess(resp.data.votes)))
        .catch(err => dispatch(fetchVotesFailure(err)))
    };
};

export const removeVotes = () => {
    return {
        type: REMOVE_VOTES
    };
};

export const newVote = (vote) => {
    return {
        type: NEW_VOTE,
        vote: vote
    };
};

export const editVote = (vote) => {
    return {
        type: EDIT_VOTE,
        vote: vote
    };
};

export const postVote = (vote) => {
    console.log("BEFORE VOTE POST: ", vote)
    return dispatch => {
        axios.post('http://54.225.49.92/votes', {
            user_id: vote.user,
            game_id: vote.game,
            team_id: vote.team
        }, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        .then(resp => {
            console.log("VOTE POST RESPONSE", resp)
            dispatch(newVote(resp.data.vote))})
        .catch(err => console.log("VOTE POST ERROR: ", err))
    };
};
