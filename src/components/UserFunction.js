import axios from 'axios';
let token = localStorage.getItem('token')
let config = {
    headers: {'Authorization': "Bearer " + token}
};

export const placeVote = newVote => {
    return axios
    .post('http://localhost:5000/api/votes', {
        user_id: newVote.user_id,
        game_id: newVote.game_id,
        team_id: newVote.team_id
    }, config)
    .then(resp => {
        console.log("IN PLACE VOTE", resp)
        return resp.data
        // let votes = localStorage.getItem('votes')
        // votes.push(resp.data.vote)
        // localStorage.setItem('votes', votes)
        // return resp.data
    })
    // .catch(err => {
    //     console.log(err)
    // })
}
