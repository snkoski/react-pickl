import axios from 'axios';

export const register = newUser => {
    return axios
    .post('http://localhost:5000/api/users', {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
    })
    .then(resp => {
        console.log(resp)
    })
}

export const login = user => {
    return axios
    // .post('http://localhost:5000/api/login', {}, {
    //     headers: { 'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)}
    .post('http://localhost:5000/api/login', {
        username: user.username,
        password: user.password
    })
    .then(resp => {
        console.log(resp)
        localStorage.setItem('token', resp.data.access_token)
        localStorage.setItem('id', resp.data.id)
        return resp.data
        // console.log("LOGIN RESPONSE", localStorage)
    })
    .catch(err => {
        console.log(err)
    })
}