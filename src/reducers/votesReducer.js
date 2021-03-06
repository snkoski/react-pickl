import {
  FETCH_VOTES_START, FETCH_VOTES_SUCCESS, FETCH_VOTES_FAILURE, REMOVE_VOTES, NEW_VOTE, EDIT_VOTE,
} from '../actions/types';

const initialState = {
  votes: [],
  error: null,
  loading: false,
};

const votesFetchStart = (state, action) => ({ ...state, error: null, loading: true });

const votesFetchSuccess = (state, action) => ({
  ...state, votes: action.votes, error: null, loading: false,
});

const votesFetchFail = (state, action) => ({ ...state, error: action.error, loading: false });

const addVote = (state, action) => {
  const newVoteState = state.votes.filter((vote) => vote.game !== action.vote.game);

  return { ...state, votes: newVoteState.concat(action.vote) };
};

const editVote = (state, action) => {
  const newVoteState = state.votes.filter((vote) => vote.id !== action.vote.id);
  return { ...state, votes: newVoteState.concat(action.vote) };
};

const removeVotes = (state, action) => ({ ...state, votes: [] });

const votesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VOTES_START: return votesFetchStart(state, action);
    case FETCH_VOTES_SUCCESS: return votesFetchSuccess(state, action);
    case FETCH_VOTES_FAILURE: return votesFetchFail(state, action);
    case REMOVE_VOTES: return removeVotes(state, action);
    case NEW_VOTE: return addVote(state, action);
    case EDIT_VOTE: return editVote(state, action);
    default:
      return state;
  }
};

export default votesReducer;
