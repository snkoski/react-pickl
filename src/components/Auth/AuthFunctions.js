import axios from 'axios';
let token = localStorage.getItem('token')
let config = {
    headers: {'Authorization': "Bearer " + token}
};

export const register = newUser => {
    return axios
    .post('http://54.225.49.92/users', {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
    })
    .then(resp => {
        localStorage.setItem('token', resp.data.token)
        return resp.data
    })
}

export const login = user => {
    return axios
    .post('http://54.225.49.92/login', {
        username: user.username,
        password: user.password
    })
    .then(resp => {
        localStorage.setItem('token', resp.data.token)
        return resp.data
    })
    .catch(err => {
        console.log(err)
    })
}

