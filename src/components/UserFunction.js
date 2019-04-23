import axios from 'axios';
let token = localStorage.getItem('token')
let config = {
    headers: {'Authorization': "Bearer " + token}
};

export const placeVote = (newVote) => {
    return axios
    .post('http://localhost:5000/api/votes', {
        user_id: newVote.user_id,
        game_id: newVote.game_id,
        team_id: newVote.team_id
    }, {
        headers: {'Authorizatin': 'Bearer ' + localStorage.getItem('token')}
    })
    .then(resp => {
        return resp.data
    })
    .catch(err => {
        console.log(err)
    })
}

export const getTeams = () => {
    return axios
    .get('teams')
    .then(resp => {
        return resp.data.team
    })
    .catch(err => {
        console.log(err)
    })
}

export const getTodaysGames = () => {
    return axios
    .get('games/today')
    .then(resp => {
        return resp.data.game
    })
    .catch(err => {
        console.log(err)
    })
}

export const getUserVotesToday = (id) => {
    return axios
    .get(`votes/${id}/today`)
    .then(resp => {
        return resp.data.votes
    })
    .catch(err => {
        console.log(err)
    })
}
