import { FETCH_VOTES_START, FETCH_VOTES_SUCCESS, FETCH_VOTES_FAILURE, REMOVE_VOTES, NEW_VOTE, EDIT_VOTE } from './types';
import axios from 'axios';
 
const atoO = (array) => array.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, {})

export const fetchVotesStart = () => {
    return {
        type: FETCH_VOTES_START
    }
}

export const fetchVotesSuccess = (votes) => {
    let dV = atoO(votes)
    return {
        type: FETCH_VOTES_SUCCESS, 
        payload: votes
    }
}

export const fetchVotesFailure = () => {
    return {
        type: FETCH_VOTES_FAILURE
    }
}

export const fetchVotes = (id) => {
    return(dispatch) => {
        dispatch(fetchVotesStart())

        axios.get(`http://localhost:5000/api/votes/${id}/today`, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        .then(resp => dispatch(fetchVotesSuccess(resp.data.votes)))
        .catch(e => dispatch(fetchVotesFailure()))
    }
}

export const removeVotes = () => {
    return {
        type: REMOVE_VOTES
    }
}

export const newVote = (vote) => {
    return {
        type: NEW_VOTE,
        payload: vote
    }
}

export const editVote = (vote) => {
    return {
        type: EDIT_VOTE,
        payload: vote
    }
}

export const postVote = (vote) => {
    return(dispatch) => {

        axios.post('http://localhost:5000/api/votes', {
            user_id: vote.user,
            game_id: vote.game,
            team_id: vote.team
        }, {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        // .then(resp => dispatch(fetchVotes(vote.user)))
    }
}