import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Spinner from '../UI/Spinner/Spinner';
import { register } from '../../actions/auth';
import classes from './AuthRegister.module.css';

class AuthRegister extends Component {
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

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onRegister(this.state.username, this.state.email, this.state.password, this.state.confirmPassword)
    }

    render() {

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to='/' />
        }

        if (this.props.loading) {
            return <Spinner />
        } else {
            return (
                <div className={classes.AuthRegisterContainer}>
                    {authRedirect}
                    <div className={classes.AuthRegisterForm}>
                        <form noValidate onSubmit={this.submitHandler}>
                            <h1 className={classes.Header}>
                                AuthRegister
                            </h1>
                            {errorMessage}
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
                                <label htmlFor='confirmPassword'>Confirm</label>
                            </div>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

const mapStatetoProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRegister: (username, email, password, confirmPassword) => dispatch(register(username, email, password, confirmPassword))
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(AuthRegister);