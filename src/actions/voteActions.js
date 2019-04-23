export const addVote = (vote) => dispatch => {
    console.log("ADD VOTE", vote)
    dispatch({
        type: 'ADD_VOTE',
        payload: vote
    })
}

export const setVote = (votes) => dispatch => {
    dispatch({
        type: 'SET_VOTE',
        payload: votes
    })
}