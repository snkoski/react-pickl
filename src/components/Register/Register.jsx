import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../Auth/AuthFunctions';
import { userFetchData, removeUser } from '../../actions/user';
import { fetchVotes } from '../../actions/vote';

import classes from './Register.module.css';

class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(resp => {
                this.props.userFetchData(resp.token)
                this.props.fetchVotes(resp.user.id)
                this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className={classes.RegisterContainer}>
                <div className={classes.RegisterForm}>
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className={classes.Header}>
                            Create Your Pickl Account
                        </h1>
                        <div>
                            <input type='text' 
                                name='username'
                                placeholder='Username'
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                            <label htmlFor='username'>Username</label>
                        </div>
                        <div>
                            <input type='email' 
                                name='email'
                                placeholder='Email'
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                            <label htmlFor='email'>Email</label>
                        </div>
                        <div>
                            <input type='password' 
                                name='password'
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            <label htmlFor='password'>Password</label>
                        </div>
                        <div>
                            <input type='password' 
                                name='confirmPassword'
                                placeholder='Confirm'
                                value={this.state.confirmPassword}
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

// const mapDispatchToProps = dispatch => ({
//     addUserAction: (user) => dispatch(addUserAction(user))
// })

export default connect(mapStateToProps, { userFetchData, fetchVotes })(Register);

// export default connect()(Register);