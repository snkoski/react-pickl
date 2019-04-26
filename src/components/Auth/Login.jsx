import React, { Component } from 'react';
import { login } from './AuthFunctions';
import { connect } from 'react-redux';
import { userFetchData, removeUser } from '../../actions/user';
import { fetchVotes } from '../../actions/vote';

import { userActions, addUserAction } from '../../actions/userActions';


class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        login(user).then(resp => {
            console.log("IN LOGIN RENDER", resp)

            if(!resp.error) {
                // this.props.onLogin(res.user)
                // this.addUserAction(res.user)
                this.props.userFetchData(resp.token)
                this.props.fetchVotes(resp.user.id)
                this.props.history.push('/')
            }
        })
    }

    addUserAction = (user) => {
        this.props.addUserAction(user);
    }

    render() {
        console.log("APP", this.props)

        return (
            <div>
                <form noValidate onSubmit={this.onSubmit}>
                    <h1>
                        Please sign in
                    </h1>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type='text' 
                            name='username'
                            placeholder='Enter username'
                            value={this.state.username}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' 
                            name='password'
                            placeholder='Enter password'
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        votes: state.votes
    }
}

// const mapDispatchToProps = dispatch => ({
//     addUserAction: (user) => dispatch(addUserAction(user))
// })

export default connect(mapStateToProps, { userFetchData, fetchVotes })(Login);
