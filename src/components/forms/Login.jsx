import React, { Component } from 'react';
import { login } from '../Auth/AuthFunctions';
import { connect } from 'react-redux';
import { userFetchData, removeUser } from '../../actions/user';
import { fetchVotes } from '../../actions/vote';

import classes from './Register.module.css';


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

            if(!resp.error) {
                this.props.userFetchData(resp.token)
                // this.props.fetchVotes(resp.user.id)
                this.props.history.push('/')
            }
        })
    }

    addUserAction = (user) => {
        this.props.addUserAction(user);
    }

    render() {

        return (
            <div className={classes.RegisterContainer}>
                <div className={classes.RegisterForm}>
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className={classes.Header}>
                            Please sign in
                        </h1>
                        <div>
                            <input type='text' 
                                name='username'
                                placeholder='Enter username'
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                            <label htmlFor='username'>Username</label>
                        </div>
                        <div>
                            <input type='password' 
                                name='password'
                                placeholder='Enter password'
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            <label htmlFor='password'>Password</label>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
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

export default connect(mapStateToProps, { userFetchData, fetchVotes })(Login);
