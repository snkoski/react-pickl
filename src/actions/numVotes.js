import axios from 'axios';
import {
  FETCH_NUM_VOTES_START,
  FETCH_NUM_VOTES_SUCCESS,
  FETCH_NUM_VOTES_FAILURE,
  ADD_NUM_VOTE, EDIT_NUM_VOTE,
} from './types';

export const fetchNumVotesStart = () => ({
  type: FETCH_NUM_VOTES_START,
});

export const fetchNumVotesSuccess = (numVotes) => ({
  type: FETCH_NUM_VOTES_SUCCESS,
  numVotes,
});

export const fetchNumVotesFailure = (error) => ({
  type: FETCH_NUM_VOTES_FAILURE,
  error,
});

export const fetchNumVotes = () => (dispatch) => {
  dispatch(fetchNumVotesStart());
  axios.get('http://54.225.49.92/votes/teams/today')
    .then((resp) => {
      dispatch(fetchNumVotesSuccess(resp.data.num_votes));
    })
    .catch((err) => dispatch(fetchNumVotesFailure(err)));
};

export const addNumVote = (vote) => ({
  type: ADD_NUM_VOTE,
  vote,
});

export const editNumVote = (vote) => ({
  type: EDIT_NUM_VOTE,
  vote,
});
