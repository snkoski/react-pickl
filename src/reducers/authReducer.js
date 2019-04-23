export default (state = {user: {auth: 'none'}}, action) => {
    switch (action.type) {
        case 'ADD_USER_AUTH' :
        return {
            user: action.payload
        }
        case 'REMOVE_USER_AUTH' :
        return {
            user: action.payload
        }
        default:
            return state
    }
}