export const addUserAction = (user) => dispatch => {
    dispatch({
        type: 'ADD_USER_AUTH',
        payload: user
    })
}

export const removeUserAction = () => dispatch => {
    dispatch({
        type: 'REMOVE_USER_AUTH',
        payload: {}
    })
}