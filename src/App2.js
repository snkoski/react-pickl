import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Nav/Navbar';
import GameContainer from './containers/GameContainer';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
// import { userFetchData, removeUser } from './actions/user';
// import { fetchVotes } from './actions/vote';
import GamePage from './components/Game/GamePage';
import { authCheckState } from './actions/auth';


import AntNav from './components/Nav/AntNav';
import AuthLogin from './components/Auth/AuthLogin';
import AuthRegister from './components/Auth/AuthRegister';
import Logout from './components/Auth/Logout/Logout';




class App2 extends Component {

    componentDidMount() {
        // const token = localStorage.getItem('token')
        // if (token) {
        //     this.props.userFetchData(token)
        // }
        this.props.onTryAutoSignup()
    }

    componentDidUpdate(prevProps) {
        // if (this.props.user.id !== prevProps.user.id) {
        //     this.props.fetchVotes(this.props.user.id)
        // }
    }

    render() {
        // console.log("APP", this.props)
        return (
            <div className="App">
                {/* <Navbar onLogout={this.handleLogout} onLogin={this.handleLogin} /> */}
                <AntNav auth={this.props.isAuthenticated}/>
                {/* <AuthRegister /> */}
                {/* <AuthLogin /> */}
                <div>
                    {/* {
                            JSON.stringify(this.props)
                        } */}
                    <Switch>
                        {/* <Route path='/login' render={(routeProps) => (<Login {...routeProps} onLogin={this.handleLogin} />)} /> */}
                        <Route path='/login' component={AuthLogin} />
                        <Route path='/register' component={AuthRegister} />
                        {/* <Route path='/register' render={(routeProps) => (<Register {...routeProps} />)} /> */}
                        <Route path='/games/:id' render={(routeProps) => (<GamePage {...routeProps} />)} />
                        <Route path='/logout' component={Logout} />
                        {/* <Route path='/' render={(routeProps) => (<GameContainer {...routeProps} currentUser={this.props.authUser} />)} /> */}
                        <Route path='/' component={GameContainer} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // user: state.user,
        // votes: state.votes,
        isAuthenticated: state.auth.token !== null,
        // authUser: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(authCheckState())
    };
};

// export default connect(mapStateToProps, { userFetchData, fetchVotes })(App2)

export default connect(mapStateToProps, mapDispatchToProps)(App2);