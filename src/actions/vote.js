import axios from 'axios';
import {
  FETCH_VOTES_START,
  FETCH_VOTES_SUCCESS,
  FETCH_VOTES_FAILURE,
  REMOVE_VOTES,
  NEW_VOTE,
  EDIT_VOTE,
} from './types';

export const fetchVotesStart = () => ({
  type: FETCH_VOTES_START,
});

export const fetchVotesSuccess = (votes) => ({
  type: FETCH_VOTES_SUCCESS,
  votes,
});

export const fetchVotesFailure = (error) => ({
  type: FETCH_VOTES_FAILURE,
  error,
});

export const fetchVotes = (id) => (dispatch) => {
  dispatch(fetchVotesStart());
  axios.get(`http://54.225.49.92/votes/${id}/today`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  })
    .then((resp) => dispatch(fetchVotesSuccess(resp.data.votes)))
    .catch((err) => dispatch(fetchVotesFailure(err)));
};

export const removeVotes = () => ({
  type: REMOVE_VOTES,
});

export const newVote = (vote) => ({
  type: NEW_VOTE,
  vote,
});

export const editVote = (vote) => ({
  type: EDIT_VOTE,
  vote,
});

export const postVote = (vote) => (dispatch) => {
  axios.post('http://54.225.49.92/votes', {
    user_id: vote.user,
    game_id: vote.game,
    team_id: vote.team,
  }, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  })
    .then((resp) => {
      dispatch(newVote(resp.data.vote));
    })
    .catch((err) => console.log('VOTE POST ERROR: ', err));
};
