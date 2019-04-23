export const addUserAction = (user) => dispatch => {
    dispatch({
        type: 'VOTE_ACTION',
        payload: user
    })
}

export const removeUserAction = () => dispatch => {
    dispatch({
        type: 'REMOVE_USER',
        payload: {}
    })
}