import axios from 'axios';
let token = localStorage.getItem('token')
let config = {
    headers: {'Authorization': "Bearer " + token}
};

export const register = newUser => {
    return axios
    .post('http://localhost:5000/api/users', {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
    })
    .then(resp => {
        localStorage.setItem('token', resp.data.token)
        return resp.data
        console.log("REGISTER", resp)
    })
}

export const login = user => {
    return axios
    .post('http://localhost:5000/api/login', {
        username: user.username,
        password: user.password
    })
    .then(resp => {
        console.log(resp)
        localStorage.setItem('token', resp.data.token)
        return resp.data
    })
    .catch(err => {
        console.log(err)
    })
}

