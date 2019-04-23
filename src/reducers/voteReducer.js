export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_VOTE' :
        console.log("ADD_VOTE", action.payload)
        let newVotes = [...state, ...action.payload]
        return {
            vote: newVotes
        }
        case 'SET_VOTE' :
        console.log("SET_VOTE", action.payload)
        let setVotes = [...action.payload]
        return {
            vote: setVotes
        }
        default:
            return state
    }
}