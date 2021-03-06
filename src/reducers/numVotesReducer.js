import {
  FETCH_NUM_VOTES_START, FETCH_NUM_VOTES_SUCCESS, FETCH_NUM_VOTES_FAILURE, ADD_NUM_VOTE, EDIT_NUM_VOTE,
} from '../actions/types';

const initialState = {
  numVotes: [],
  error: null,
  loading: false,
};

const numVotesFetchStart = (state, action) => ({ ...state, error: null, loading: true });

const numVotesFetchSuccess = (state, action) => ({
  ...state, numVotes: action.numVotes, error: null, loading: false,
});

const numVotesFetchFail = (state, action) => ({ ...state, error: action.error, loading: false });

const addNumVote = (state, action) => {
  const filteredNumVotes = state.numVotes.filter((numVote) => numVote.team_id !== action.vote.team);
  const team = state.numVotes.find((numVote) => numVote.team_id === action.vote.team);
  team.num_votes++;
  return { ...state, numVotes: [...filteredNumVotes.concat(team)] };
};

const editNumVote = (state, action) => {
  const filteredNumVotes = state.numVotes.filter((numVote) => numVote.game_id !== action.vote.game);
  const teams = state.numVotes.filter((numVote) => numVote.game_id === action.vote.game);
  if (teams[0].team_id === action.vote.team) {
    teams[0].num_votes++;
    teams[1].num_votes--;
  } else if (teams[1].team_id === action.vote.team) {
    teams[0].num_votes--;
    teams[1].num_votes++;
  }
  return { ...state, numVotes: [...filteredNumVotes.concat(teams)] };
};

const numVotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NUM_VOTES_START: return numVotesFetchStart(state, action);
    case FETCH_NUM_VOTES_SUCCESS: return numVotesFetchSuccess(state, action);
    case FETCH_NUM_VOTES_FAILURE: return numVotesFetchFail(state, action);
    case ADD_NUM_VOTE: return addNumVote(state, action);
    case EDIT_NUM_VOTE: return editNumVote(state, action);
    default:
      return state;
  }
};

export default numVotesReducer;
