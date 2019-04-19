import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }

    componentDidMount(){
        return axios
        .get('http://localhost:5000/api/users/' + localStorage.id, {
            headers: { 'Authorization': 'Bearer ' + localStorage.token}
        })
        .then(resp => {
            this.setState({
                user: resp.data.user
            })
            // return resp
        })
        .catch(err => {
            console.log('CDM', err)
        })
    }

    render() {
        return (
            <h1>
                {this.state.user.username}
            </h1>
        )
    }
}

export default Profile;