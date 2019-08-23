import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Spinner from '../UI/Spinner/Spinner';
import { login } from '../../actions/auth';

import classes from './AuthLogin.module.css';

class AuthLogin extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (event) => {
      const { onLogin } = this.props;
      const { username, password } = this.state;
      event.preventDefault();
      onLogin(username, password);
    }

    render() {
      const { error, isAuthenticated, loading } = this.props;
      let errorMessage = null;

      if (error) {
        errorMessage = (
          <p>{error.message}</p>
        );
      }
      let authRedirect = null;
      if (isAuthenticated) {
        authRedirect = <Redirect to="/" />;
      }

      if (loading) {
        return (
          <Spinner />
        );
      }
      return (
        <div className={classes.AuthLoginContainer}>
          {authRedirect}
          <div className={classes.AuthLoginForm}>
            <form noValidate onSubmit={this.submitHandler}>
              <h1 className={classes.Header}>
                                Login
              </h1>
              {errorMessage}
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <label htmlFor="password">Password</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
    }
}

const mapStatetoProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (username, password) => dispatch(login(username, password)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(AuthLogin);
