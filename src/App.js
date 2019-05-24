import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Nav/Navbar';
import GameContainer from './containers/GameContainer';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import { userFetchData, removeUser } from './actions/user';
import { fetchVotes } from './actions/vote';
import GamePage from './components/Game/GamePage';


class App extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token) {
            this.props.userFetchData(token)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.user.id !== prevProps.user.id) {
            this.props.fetchVotes(this.props.user.id)
        }
    }

    render() {
        console.log("APP", this.props)
        return (
            <div className="App">
                <Navbar onLogout={this.handleLogout} onLogin={this.handleLogin} />
                <div>
                    {/* {
                            JSON.stringify(this.props)
                        } */}
                    <Switch>
                        <Route path='/login' render={(routeProps) => (<Login {...routeProps} onLogin={this.handleLogin} />)} />
                        <Route path='/register' render={(routeProps) => (<Register {...routeProps} />)} />
                        <Route path='/games/:id' render={(routeProps) => (<GamePage {...routeProps} />)} />
                        <Route path='/' render={(routeProps) => (<GameContainer {...routeProps} currentUser={this.props.user} />)} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        votes: state.votes
    }
}

export default connect(mapStateToProps, { userFetchData, fetchVotes })(App)