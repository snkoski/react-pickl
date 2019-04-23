export default (state = {user: {auth: 'none'}}, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION' :
        return {
            result: action.payload
        }
        case 'VOTE_ACTION' :
        return {
            user: action.payload
        }
        case 'REMOVE_USER' :
        return {
            user: action.payload
        }
        default:
            return state
    }
}